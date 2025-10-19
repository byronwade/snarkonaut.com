import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { z } from "zod"

const templateSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string().optional(),
  github: z.string().url(),
  vercelDeploy: z.string().url(),
  demo: z.string().url().optional(),
  images: z.array(z.string()),
  tech: z.array(z.string()),
  featured: z.boolean().default(false),
})

export type Template = z.infer<typeof templateSchema> & {
  content: string
}

const templatesDirectory = path.join(process.cwd(), "templates")

export async function getAllTemplates(): Promise<Template[]> {
  if (!fs.existsSync(templatesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(templatesDirectory)
  const templates = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(templatesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      const template = templateSchema.parse(data)

      return {
        ...template,
        content,
      }
    })
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return a.title.localeCompare(b.title)
    })

  return templates
}

export async function getTemplateBySlug(slug: string): Promise<Template | null> {
  try {
    const fullPath = path.join(templatesDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const template = templateSchema.parse(data)

    return {
      ...template,
      content,
    }
  } catch (error) {
    console.error(`Error loading template ${slug}:`, error)
    return null
  }
}

export async function getFeaturedTemplates(): Promise<Template[]> {
  const allTemplates = await getAllTemplates()
  return allTemplates.filter((template) => template.featured)
}

export async function getTemplatesByCategory(category: string): Promise<Template[]> {
  const allTemplates = await getAllTemplates()
  return allTemplates.filter((template) => template.category === category)
}

export async function getFreeTemplates(): Promise<Template[]> {
  const allTemplates = await getAllTemplates()
  return allTemplates.filter((template) => template.price === 0)
}

export async function getPaidTemplates(): Promise<Template[]> {
  const allTemplates = await getAllTemplates()
  return allTemplates.filter((template) => template.price > 0)
}
