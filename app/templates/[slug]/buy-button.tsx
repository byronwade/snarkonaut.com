"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import type { Template } from "@/lib/templates"

interface BuyButtonProps {
  template: Template
}

export function BuyButton({ template }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setLoading(true)

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templateSlug: template.slug,
          includeSupport: false,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        console.error("No checkout URL returned")
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      className="w-full"
      size="lg"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? (
        "Firing Up Stripe..."
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Take My $99
        </>
      )}
    </Button>
  )
}
