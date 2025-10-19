import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { getAllTemplates, getTemplateBySlug } from "@/lib/templates"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"
import { ExternalLink, Github, Rocket } from "lucide-react"
import { BuyButton } from "./buy-button"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface TemplatePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const templates = await getAllTemplates()
  return templates.map((template) => ({
    slug: template.slug,
  }))
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params
  const template = await getTemplateBySlug(slug)

  if (!template) {
    return {
      title: "Template Not Found",
    }
  }

  const isFree = template.price === 0
  const priceText = isFree ? "Free" : `$${template.price}`

  // Generate OG image URL
  const ogImageUrl = `/api/og?title=${encodeURIComponent(template.title)}&price=${template.price}&category=${encodeURIComponent(template.category || "template")}&tech=${encodeURIComponent(template.tech.slice(0, 4).join(", "))}&featured=${template.featured}`

  return {
    title: `${template.title} - ${priceText} Next.js Template`,
    description: `${template.description} Built with ${template.tech.slice(0, 3).join(", ")}. ${isFree ? "Free and open-source." : "One-time payment, lifetime updates."} Deploy to Vercel in one click.`,
    keywords: [
      template.title,
      ...template.tech,
      template.category || "",
      "nextjs template",
      "typescript template",
      isFree ? "free template" : "premium template",
      "vercel deployment",
    ].filter(Boolean),
    openGraph: {
      title: template.title,
      description: template.description,
      type: "website",
      url: `/templates/${template.slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${template.title} - Open Graph Image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: template.title,
      description: template.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `/templates/${template.slug}`,
    },
  }
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params
  const template = await getTemplateBySlug(slug)

  if (!template) {
    notFound()
  }

  const isFree = template.price === 0

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: template.title,
    description: template.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: template.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: template.featured
      ? {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
        }
      : undefined,
    keywords: template.tech.join(", "),
    author: {
      "@type": "Organization",
      name: "Snarkonaut",
    },
    programmingLanguage: "TypeScript",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Templates
        </Link>
        {" / "}
        <span className="text-foreground">{template.title}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {template.featured && <Badge variant="default">Featured</Badge>}
              {isFree && <Badge variant="secondary" className="bg-green-600 text-white">Free</Badge>}
              {template.category && <Badge variant="outline">{template.category}</Badge>}
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">{template.title}</h1>
            <p className="text-xl text-muted-foreground">{template.description}</p>
          </div>

          {/* Images Gallery */}
          {template.images && template.images.length > 0 && (
            <div className="mb-12 space-y-4">
              {template.images.map((image, index) => (
                <div key={image} className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src={image}
                    alt={`${template.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="max-w-none">
            <MarkdownRenderer content={template.content} />
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {template.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Pricing Card */}
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="mb-2 text-3xl font-bold">
                    {isFree ? "Free" : formatPrice(template.price)}
                  </div>
                  {!isFree && (
                    <p className="text-sm text-muted-foreground">One-time payment</p>
                  )}
                </div>

                <div className="space-y-3">
                  {isFree ? (
                    <Button className="w-full" size="lg" asChild>
                      <a href={template.vercelDeploy} target="_blank" rel="noopener noreferrer">
                        <Rocket className="mr-2 h-4 w-4" />
                        Deploy for Free
                      </a>
                    </Button>
                  ) : (
                    <BuyButton template={template} />
                  )}

                  {isFree && (
                    <Button className="w-full" variant="outline" asChild>
                      <a href={template.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  )}

                  {template.demo && (
                    <Button className="w-full" variant="outline" asChild>
                      <a href={template.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </a>
                    </Button>
                  )}
                </div>

                <div className="mt-6 space-y-2 border-t pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">License</span>
                    <span className="font-medium">Commercial</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Updates</span>
                    <span className="font-medium">Lifetime</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Support</span>
                    <span className="font-medium">Community</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            {!isFree && (
              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Need Help?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Get priority support and implementation help for just $50/month.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/support">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
