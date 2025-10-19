import { NextRequest, NextResponse } from "next/server"
import { stripe, TEMPLATE_PRICE, SUPPORT_PRICE_MONTHLY } from "@/lib/stripe"
import { getTemplateBySlug } from "@/lib/templates"
import { z } from "zod"

const checkoutSchema = z.object({
  templateSlug: z.string(),
  includeSupport: z.boolean().default(false),
  email: z.string().email().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { templateSlug, includeSupport, email } = checkoutSchema.parse(body)

    // Get template details
    const template = await getTemplateBySlug(templateSlug)

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      )
    }

    // Don't create checkout for free templates
    if (template.price === 0) {
      return NextResponse.json(
        { error: "This is a free template" },
        { status: 400 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    // Create line items
    const lineItems: Array<{
      price_data: {
        currency: string
        product_data: {
          name: string
          description?: string
          images?: string[]
        }
        unit_amount: number
      }
      quantity: number
    }> = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: template.title,
            description: template.description,
            images: template.images?.[0] ? [`${baseUrl}${template.images[0]}`] : [],
          },
          unit_amount: template.price * 100, // Stripe uses cents
        },
        quantity: 1,
      },
    ]

    // Add support subscription if requested
    if (includeSupport) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Priority Support",
            description: "Priority email support and template updates",
          },
          unit_amount: SUPPORT_PRICE_MONTHLY * 100,
        },
        quantity: 1,
      })
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/templates/${templateSlug}`,
      customer_email: email,
      metadata: {
        templateSlug: template.slug,
        templateTitle: template.title,
        includeSupport: includeSupport.toString(),
      },
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
