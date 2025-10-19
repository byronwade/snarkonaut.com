"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          // Custom heading IDs for anchor links
          h1: ({ node, ...props }) => <h1 id={slugify(props.children?.toString() || "")} {...props} />,
          h2: ({ node, ...props }) => <h2 id={slugify(props.children?.toString() || "")} {...props} />,
          h3: ({ node, ...props }) => <h3 id={slugify(props.children?.toString() || "")} {...props} />,
          // Custom link handling
          a: ({ node, href, ...props }) => {
            const isExternal = href?.startsWith("http")
            return (
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                {...props}
              />
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

// Helper function to create slug from heading text
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}
