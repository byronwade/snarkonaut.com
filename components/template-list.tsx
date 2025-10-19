"use client"

import { TemplateRow } from "./template-row"
import type { Template } from "@/lib/templates"

interface TemplateListProps {
  templates: Template[]
  emptyMessage?: string
}

export function TemplateList({ templates, emptyMessage = "No templates found." }: TemplateListProps) {
  if (templates.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950/50">
        <p className="text-neutral-500">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {templates.map((template, index) => (
        <TemplateRow key={template.slug} template={template} index={index} />
      ))}
    </div>
  )
}
