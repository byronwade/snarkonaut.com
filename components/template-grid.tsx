import { TemplateCard } from "./template-card"
import type { Template } from "@/lib/templates"

interface TemplateGridProps {
  templates: Template[]
  emptyMessage?: string
}

export function TemplateGrid({ templates, emptyMessage = "No templates found." }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <TemplateCard key={template.slug} template={template} />
      ))}
    </div>
  )
}
