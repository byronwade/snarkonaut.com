import { getAllTemplates } from "@/lib/templates"
import { TemplateList } from "@/components/template-list"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react"

import type { Metadata } from "next"

export const dynamic = "force-static"
export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: "Premium Next.js Templates - SaaS, E-commerce & Blog Starters",
  description: "Browse our collection of production-ready Next.js templates. Built with TypeScript, Tailwind CSS, Stripe, and Supabase. Perfect for SaaS, e-commerce stores, and blogs. One-click Vercel deployment.",
  keywords: [
    "next.js templates",
    "saas starter kit",
    "shopify nextjs theme",
    "blog template",
    "ecommerce template",
    "typescript templates",
    "tailwind templates",
    "vercel templates",
    "stripe integration",
    "supabase templates",
  ],
  openGraph: {
    title: "Premium Next.js Templates - Ready to Deploy",
    description: "Production-ready templates for SaaS, e-commerce, and blogs. Deploy in one click.",
    url: "/",
    images: [
      {
        url: "/api/og?title=Premium Next.js Templates&price=0&category=Collection&tech=Next.js 16, TypeScript, Tailwind CSS&featured=true",
        width: 1200,
        height: 630,
        alt: "Snarkonaut Templates Collection",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
}

export default async function HomePage() {
  const templates = await getAllTemplates()
  const featuredTemplates = templates.filter((t) => t.featured)
  const freeTemplates = templates.filter((t) => t.price === 0)

  // Structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Snarkonaut",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://snarkonaut.com",
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || "https://snarkonaut.com"}/logo.png`,
    description: "Premium Next.js templates for modern web development",
    sameAs: [
      "https://github.com/snarkonaut",
      "https://twitter.com/snarkonaut",
    ],
  }

  const productListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: templates.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: template.title,
        description: template.description,
        offers: {
          "@type": "Offer",
          price: template.price,
          priceCurrency: "USD",
        },
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://snarkonaut.com"}/templates/${template.slug}`,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListData) }}
      />
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-800/50">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-neutral-900 via-black to-black opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative">
          <div className="mx-auto max-w-3xl py-24 text-center md:py-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-sm text-neutral-400 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Actually works (shocking, we know)</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Stop coding from scratch
              <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                like a caveman
              </span>
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-neutral-400 md:text-xl">
              Next.js templates so good, you'll feel guilty charging your clients full price.
              Built by developers who are tired of writing auth for the 47th time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="gap-2">
                <a href="#templates">
                  Browse Templates
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/snarkonaut" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-neutral-800/50 py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Actually Fast</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                Not "startup fast" where you pretend your site loads quickly. Actually fast. Your Lighthouse score will finally be something you can brag about.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">No Skeletons in the Closet</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                We actually built these. No AI slop. No "TODO: implement this later" comments. Real code that won't make you cry during code review.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Skip the Boring Parts</h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                Authentication, payments, emails - all the stuff you can build but would rather not. Now you can focus on the features that actually make money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      {featuredTemplates.length > 0 && (
        <section className="border-b border-neutral-800/50 py-20">
          <div className="container">
            <div className="mb-12">
              <div className="mb-3 inline-flex items-center gap-2 text-sm text-neutral-500">
                <Sparkles className="h-4 w-4" />
                The Good Stuff
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Templates That Slap
              </h2>
              <p className="mt-2 text-neutral-500">
                The ones everyone buys. Copy their homework (legally). We won't tell your boss you didn't build it from scratch.
              </p>
            </div>
            <TemplateList templates={featuredTemplates} />
          </div>
        </section>
      )}

      {/* All Templates */}
      <section id="templates" className="border-b border-neutral-800/50 py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              The Full Arsenal
            </h2>
            <p className="mt-2 text-neutral-500">
              Every template we've built while procrastinating on our own side projects. Your gain, our loss.
            </p>
          </div>
          <TemplateList
            templates={templates}
            emptyMessage="No templates available yet. Check back soon!"
          />
        </div>
      </section>

      {/* Free Templates Section */}
      {freeTemplates.length > 0 && (
        <section className="border-b border-neutral-800/50 py-20">
          <div className="container">
            <div className="mb-12">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                <Sparkles className="h-3.5 w-3.5" />
                Actually Free (No Catch)
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Free Stuff to Try Before You Buy
              </h2>
              <p className="mt-2 text-neutral-500">
                Start here if you have commitment issues. We get it. No credit card, no email signup BS. Just take it.
              </p>
            </div>
            <TemplateList templates={freeTemplates} />
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Pricing That Won't Make You Rage Quit
            </h2>
            <p className="mb-16 text-lg text-neutral-500">
              No monthly ransom. Buy once, own forever. Like the good old days before SaaS ruined everything.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Template Pricing */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-950/50 p-8 text-left backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-semibold text-white">Templates</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$99</span>
                  <span className="text-neutral-500"> / once</span>
                </div>
                <ul className="mb-8 space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    All the code (yes, even the messy parts)
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    Deploy in 5 minutes (we timed it)
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    Updates forever (or until Next.js 47)
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    Use it commercially (make that 💰)
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    Docs that don't assume you're a wizard
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#templates">Show Me The Goods</a>
                </Button>
              </div>

              {/* Support Pricing */}
              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 p-8 text-left backdrop-blur-sm">
                <div className="absolute right-4 top-4">
                  <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                    For the Impatient
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Priority Support</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$50</span>
                  <span className="text-neutral-500"> / month</span>
                </div>
                <ul className="mb-8 space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    We actually respond to your emails
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    Help within 24hrs (no "working on it" BS)
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    First dibs on new stuff
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    "How do I..." questions answered
                  </li>
                  <li className="flex items-start gap-2 text-neutral-400">
                    <span className="mt-0.5 text-white">✓</span>
                    Cancel when we inevitably disappoint you
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="/support">I Need Hand-Holding</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
