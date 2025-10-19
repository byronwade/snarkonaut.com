import { MetadataRoute } from "next"
import { getAllTemplates } from "@/lib/templates"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://snarkonaut.com"

  // Get all templates
  const templates = await getAllTemplates()

  // Template pages
  const templateUrls = templates.map((template) => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: template.featured ? 0.9 : 0.8,
  }))

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/success`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ]

  return [...staticPages, ...templateUrls]
}
