import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://snarkonaut.com"),
  title: {
    default: "Snarkonaut - Premium Next.js Templates for Modern Web Development",
    template: "%s | Snarkonaut Templates",
  },
  description: "Production-ready Next.js templates built with TypeScript, Tailwind CSS, and Stripe integration. Launch your SaaS, blog, or e-commerce store in minutes with one-click Vercel deployment.",
  keywords: [
    "nextjs templates",
    "next.js 16",
    "react templates",
    "saas starter",
    "typescript templates",
    "tailwind css templates",
    "vercel deployment",
    "shopify nextjs",
    "blog template",
    "stripe integration",
    "production ready",
    "web development",
    "headless commerce",
    "nextjs boilerplate",
  ],
  authors: [{ name: "Snarkonaut" }],
  creator: "Snarkonaut",
  publisher: "Snarkonaut",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Snarkonaut",
    title: "Snarkonaut - Premium Next.js Templates",
    description: "Production-ready Next.js templates for SaaS, blogs, and e-commerce. Deploy to Vercel in one click.",
    images: [
      {
        url: "/api/og?title=Snarkonaut&price=0&category=Marketplace&tech=Next.js 16, React 19, TypeScript&featured=true",
        width: 1200,
        height: 630,
        alt: "Snarkonaut Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snarkonaut - Premium Next.js Templates",
    description: "Production-ready Next.js templates for SaaS, blogs, and e-commerce. Deploy to Vercel in one click.",
    images: ["/api/og?title=Snarkonaut&price=0&category=Marketplace&tech=Next.js 16, React 19, TypeScript&featured=true"],
    creator: "@snarkonaut",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <div className="flex min-h-screen flex-col bg-black">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
