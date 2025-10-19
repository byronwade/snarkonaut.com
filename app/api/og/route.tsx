import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    // Get parameters from URL
    const title = searchParams.get("title") || "Next.js Template"
    const price = searchParams.get("price") || "99"
    const category = searchParams.get("category") || "template"
    const tech = searchParams.get("tech") || "Next.js, TypeScript, Tailwind"
    const featured = searchParams.get("featured") === "true"

    const isFree = price === "0"
    const priceDisplay = isFree ? "FREE" : `$${price}`

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000",
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
          }}
        >
          {/* Grid pattern overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Content container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "60px",
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  S
                </div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Snarkonaut
                </div>
              </div>

              {/* Price badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {featured && (
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "24px",
                      padding: "8px 20px",
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    ⭐ Featured
                  </div>
                )}
                <div
                  style={{
                    backgroundColor: isFree ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.1)",
                    border: isFree ? "1px solid rgba(34, 197, 94, 0.3)" : "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "24px",
                    padding: "8px 24px",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: isFree ? "#22c55e" : "#fff",
                  }}
                >
                  {priceDisplay}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Category */}
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.6)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {category}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: "72px",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  maxWidth: "900px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {title}
              </div>

              {/* Tech stack */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                {tech.split(",").slice(0, 4).map((item: string) => (
                  <div
                    key={item}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {item.trim()}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                Production-ready Next.js template
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Deploy to Vercel →
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    console.error(e)
    return new Response(`Failed to generate image: ${e instanceof Error ? e.message : "Unknown error"}`, {
      status: 500,
    })
  }
}
