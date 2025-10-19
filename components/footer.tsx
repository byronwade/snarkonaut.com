"use client"

import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-neutral-800/50 bg-black">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black">
                <span className="text-lg font-bold">S</span>
              </div>
              <span className="text-xl font-semibold text-white">Snarkonaut</span>
            </div>
            <p className="text-sm text-neutral-500">
              Templates for developers who value their time more than their ego.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-neutral-500 transition-colors hover:text-white">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-neutral-500 transition-colors hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/support" className="text-neutral-500 transition-colors hover:text-white">
                  Get Support
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@snarkonaut.com"
                  className="text-neutral-500 transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/snarkonaut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 text-neutral-500 transition-colors hover:border-neutral-700 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/snarkonaut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 text-neutral-500 transition-colors hover:border-neutral-700 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800/50 pt-8 md:flex-row">
          <p className="text-sm text-neutral-500">
            © {currentYear} Snarkonaut. All rights reserved. (Like you were gonna copy us anyway.)
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/terms" className="text-neutral-500 transition-colors hover:text-white">
              Terms (TL;DR: Don't be a jerk)
            </Link>
            <Link href="/privacy" className="text-neutral-500 transition-colors hover:text-white">
              Privacy (We don't sell your data)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
