import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { sendTemplateEmail } from "@/lib/email"
import { getTemplateBySlug } from "@/lib/templates"
import Stripe from "stripe"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "No signature" },
      { status: 400 }
    )
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error("Missing STRIPE_WEBHOOK_SECRET")
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error("Webhook signature verification failed:", error)
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    )
  }

  // Handle the event
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        // Get template details from metadata
        const templateSlug = session.metadata?.templateSlug
        const includeSupport = session.metadata?.includeSupport === "true"
        const customerEmail = session.customer_details?.email

        if (!templateSlug || !customerEmail) {
          console.error("Missing required metadata or email", session.metadata)
          break
        }

        // Get template
        const template = await getTemplateBySlug(templateSlug)

        if (!template) {
          console.error("Template not found:", templateSlug)
          break
        }

        // Send email with template details
        await sendTemplateEmail({
          to: customerEmail,
          template,
          customerName: session.customer_details?.name || undefined,
          includeSupport,
        })

        console.log(`Email sent to ${customerEmail} for template ${template.title}`)
        break
      }

      case "checkout.session.expired": {
        console.log("Checkout session expired:", event.data.object.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook handler error:", error)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    )
  }
}
