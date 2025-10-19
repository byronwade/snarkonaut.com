"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/50 bg-black/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black">
            <span className="text-lg font-bold">S</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">Snarkonaut</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/#templates"
            className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            Templates
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium text-neutral-400 transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a
              href="https://github.com/snarkonaut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
