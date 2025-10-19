import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import type { Template } from "@/lib/templates"
import { ExternalLink } from "lucide-react"

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  const isFree = template.price === 0

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {template.images && template.images[0] ? (
          <Image
            src={template.images[0]}
            alt={template.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <span className="text-4xl font-bold text-slate-300 dark:text-slate-600">
              {template.title.charAt(0)}
            </span>
          </div>
        )}
        {template.featured && (
          <div className="absolute left-3 top-3">
            <Badge variant="default" className="bg-blue-600">Featured</Badge>
          </div>
        )}
        {isFree && (
          <div className="absolute right-3 top-3">
            <Badge variant="secondary" className="bg-green-600 text-white">Free</Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-1 text-xl">{template.title}</CardTitle>
          <span className="shrink-0 text-lg font-bold">
            {isFree ? "Free" : formatPrice(template.price)}
          </span>
        </div>
        <CardDescription className="line-clamp-2">
          {template.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          {template.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {template.tech.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{template.tech.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button asChild className="flex-1">
          <Link href={`/templates/${template.slug}`}>
            View Details
          </Link>
        </Button>
        {template.demo && (
          <Button asChild variant="outline" size="icon">
            <a
              href={template.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
