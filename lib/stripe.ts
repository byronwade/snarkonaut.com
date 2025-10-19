import Stripe from "stripe"

// Use placeholder for build time, will throw at runtime if not configured
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "sk_test_placeholder"

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
})

export const TEMPLATE_PRICE = 99
export const SUPPORT_PRICE_MONTHLY = 50
