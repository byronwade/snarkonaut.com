"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import type { Template } from "@/lib/templates"
import { ArrowRight, ExternalLink } from "lucide-react"

interface TemplateRowProps {
  template: Template
  index: number
}

export function TemplateRow({ template, index }: TemplateRowProps) {
  const isFree = template.price === 0

  return (
    <div className="group relative">
      {/* Background gradient on hover */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative rounded-xl border border-neutral-800/50 bg-neutral-950/50 p-6 backdrop-blur-sm transition-all group-hover:border-neutral-700/50 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 lg:w-[400px] xl:w-[480px]">
            {template.images && template.images[0] ? (
              <Image
                src={template.images[0]}
                alt={template.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-900 to-black">
                <span className="text-6xl font-bold text-neutral-800">
                  {template.title.charAt(0)}
                </span>
              </div>
            )}

            {/* Overlay badges */}
            <div className="absolute left-3 top-3 flex gap-2">
              {template.featured && (
                <Badge className="bg-white text-black hover:bg-white/90">
                  Featured
                </Badge>
              )}
              {isFree && (
                <Badge className="bg-green-500 text-white hover:bg-green-600">
                  Free
                </Badge>
              )}
            </div>

            {template.demo && (
              <div className="absolute bottom-3 right-3 opacity-0 transition-opacity group-hover:opacity-100">
                <Button asChild size="sm" variant="secondary">
                  <a
                    href={template.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Demo
                  </a>
                </Button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between gap-4">
            <div className="space-y-3">
              {/* Title and Price */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {template.title}
                  </h3>
                  {template.category && (
                    <p className="mt-1 text-sm text-neutral-500">
                      {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                    </p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-2xl font-bold text-white">
                    {isFree ? "Free" : formatPrice(template.price)}
                  </div>
                  {!isFree && (
                    <div className="text-xs text-neutral-500">one-time</div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="line-clamp-2 text-base leading-relaxed text-neutral-400">
                {template.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {template.tech.slice(0, 5).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300"
                  >
                    {tech}
                  </Badge>
                ))}
                {template.tech.length > 5 && (
                  <Badge
                    variant="outline"
                    className="border-neutral-800 bg-neutral-900/50 text-neutral-400"
                  >
                    +{template.tech.length - 5} more
                  </Badge>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button asChild className="group/btn">
                <Link href={`/templates/${template.slug}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </Button>
              {isFree && template.github && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={template.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white"
                  >
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
