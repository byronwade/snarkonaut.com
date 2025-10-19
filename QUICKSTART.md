# Quick Start Guide

Get your template marketplace running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

### Minimum Required for Development:

For local development, you can start with these placeholder values:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder
STRIPE_SECRET_KEY=sk_test_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
RESEND_API_KEY=re_placeholder
EMAIL_FROM=noreply@localhost
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Note**: The app will run, but payment and email features won't work until you add real API keys.

## Step 3: Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 - you should see your template marketplace!

## Step 4 (Optional): Add Real API Keys

### For Stripe:

1. Sign up at https://stripe.com
2. Get test API keys from Dashboard > Developers > API keys
3. Update `.env.local` with real keys

### For Resend:

1. Sign up at https://resend.com
2. Get API key from API Keys section
3. Update `.env.local` with real key

### For Webhooks (Local Testing):

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook secret to `.env.local`

## Step 5: Test the App

1. **Browse Templates**: Go to http://localhost:3000
2. **View Template**: Click on any template
3. **Test Checkout**: Click "Buy Template" (only works with real Stripe keys)

## Adding Your First Template

Create a new file in `/templates/my-template.md`:

```markdown
---
title: "My Awesome Template"
slug: "my-template"
description: "Description of my template"
price: 99
category: "saas"
github: "https://github.com/yourusername/template-repo"
vercelDeploy: "https://vercel.com/new/clone?repository-url=https://github.com/yourusername/template-repo"
demo: "https://demo.vercel.app"
images:
  - "/templates/my-template/hero.png"
tech:
  - "Next.js 15"
  - "TypeScript"
featured: true
---

# My Awesome Template

This is my template description with full markdown support!

## Features
- Feature 1
- Feature 2
```

Add screenshots to `/public/templates/my-template/hero.png`

## Common Issues

### Templates Not Showing?
- Check markdown frontmatter is valid YAML
- Ensure slug is unique
- Verify images exist in `/public/templates`

### Stripe Errors?
- Make sure you're using test mode keys (pk_test_... and sk_test_...)
- Verify webhook secret is correct
- Check Stripe CLI is running for local webhooks

### Email Not Sending?
- Verify Resend API key is valid
- Check sending domain is verified in Resend
- Review Resend logs for errors

## Next Steps

1. Read the full [README.md](./README.md) for detailed documentation
2. Customize the design in `app/globals.css` and `tailwind.config.ts`
3. Add your own templates
4. Deploy to Vercel when ready

## Need Help?

- Check [README.md](./README.md) for full documentation
- Review code comments
- Test with Stripe test mode before going live

Happy building! 🚀
