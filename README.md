# Snarkonaut - Next.js Template Marketplace

A modern, production-ready template marketplace built with Next.js 15, TypeScript, Stripe, and Resend. Sell Next.js templates with one-click Vercel deployment.

## Features

- **Template Marketplace** - Browse and purchase Next.js templates
- **Stripe Integration** - Secure payments with Stripe Checkout
- **Email Delivery** - Automated template delivery via Resend
- **One-Click Deploy** - Vercel deployment integration
- **Markdown CMS** - Template content managed via markdown files
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Type Safe** - Full TypeScript coverage
- **Modern UI** - Built with shadcn/ui components

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Payments**: Stripe
- **Email**: Resend
- **Deployment**: Vercel

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or pnpm
- Stripe account
- Resend account
- Vercel account (for deployment)

## Getting Started

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd snarkonaut.com
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_...
EMAIL_FROM=templates@yourdomain.com

# URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Set Up Stripe

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Create products for:
   - Template ($99 one-time)
   - Support ($50/month subscription)
4. Set up webhook endpoint (see Webhook Setup below)

### 4. Set Up Resend

1. Create a Resend account at https://resend.com
2. Get your API key
3. Verify your sending domain
4. Update `EMAIL_FROM` in `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stripe Webhook Setup

### Local Development

1. Install Stripe CLI:
```bash
brew install stripe/stripe-cli/stripe
```

2. Login to Stripe:
```bash
stripe login
```

3. Forward webhooks to local server:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

4. Copy the webhook signing secret to `.env.local`

### Production

1. Go to Stripe Dashboard > Developers > Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events to listen for:
   - `checkout.session.completed`
   - `checkout.session.expired`
4. Copy webhook signing secret to your Vercel environment variables

## Adding Templates

Templates are markdown files in the `/templates` directory.

### Template File Structure

Create a new `.md` file in `/templates` directory:

```markdown
---
title: "Your Template Name"
slug: "template-slug"
description: "Brief description of your template"
price: 99
category: "saas"
github: "https://github.com/yourusername/template-repo"
vercelDeploy: "https://vercel.com/new/clone?repository-url=https://github.com/yourusername/template-repo"
demo: "https://demo.vercel.app"
images:
  - "/templates/your-template/hero.png"
  - "/templates/your-template/dashboard.png"
tech:
  - "Next.js 15"
  - "TypeScript"
  - "Tailwind CSS"
featured: true
---

# Your Template Name

Full markdown content here describing your template...

## Features

- Feature 1
- Feature 2

## Getting Started

Instructions...
```

### Template Images

1. Create directory: `/public/templates/your-template/`
2. Add images (1200x800px recommended)
3. Reference in template frontmatter

### Free Templates

Set `price: 0` for free templates. The buy button will be replaced with "Deploy for Free".

## Project Structure

```
snarkonaut.com/
├── app/
│   ├── api/
│   │   ├── checkout/          # Stripe checkout endpoint
│   │   └── webhooks/stripe/   # Stripe webhook handler
│   ├── templates/[slug]/      # Dynamic template pages
│   ├── success/               # Post-checkout success page
│   ├── support/               # Support page
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── template-card.tsx      # Template card component
│   ├── template-grid.tsx      # Template grid layout
│   ├── header.tsx             # Site header
│   └── footer.tsx             # Site footer
├── lib/
│   ├── stripe.ts              # Stripe configuration
│   ├── email.ts               # Email utilities
│   ├── templates.ts           # Template parsing
│   └── utils.ts               # Utility functions
├── templates/                 # Template markdown files
│   ├── saas-starter.md
│   ├── blog-template.md
│   └── simple-landing.md
└── public/
    └── templates/             # Template screenshots
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `NEXT_PUBLIC_BASE_URL` (your production URL)
4. Deploy

### Post-Deployment

1. Set up Stripe webhook endpoint (see Stripe Webhook Setup above)
2. Test a purchase in Stripe test mode
3. Verify email delivery
4. Switch to Stripe live mode when ready

## Customization

### Branding

1. Update `CLAUDE.md` and site name in:
   - `app/layout.tsx` (metadata)
   - `components/header.tsx` (logo)
   - `components/footer.tsx` (copyright)
   - `lib/email.ts` (email templates)

### Pricing

Update prices in:
- `lib/stripe.ts` - `TEMPLATE_PRICE` and `SUPPORT_PRICE_MONTHLY`
- Template markdown files - `price` field
- `app/page.tsx` - pricing section

### Styling

- Colors: Edit `tailwind.config.ts` and `app/globals.css`
- Fonts: Update `app/layout.tsx`
- Components: Modify files in `/components`

## Email Template Customization

Edit the email template in `lib/email.ts` to match your branding. The email includes:
- Welcome message
- Vercel deploy button
- GitHub repository link
- Tech stack information
- Support details

## Testing

### Test Stripe Integration

1. Use Stripe test mode
2. Test card: `4242 4242 4242 4242`
3. Any future expiry date
4. Any CVC
5. Any ZIP code

### Test Email Delivery

1. Use Resend test mode
2. Verify email is sent after successful checkout
3. Check email formatting and links

## Troubleshooting

### Stripe Webhook Issues

- Verify webhook secret is correct
- Check webhook endpoint is accessible
- Review Stripe Dashboard > Developers > Webhooks > Events

### Email Not Sending

- Verify Resend API key
- Check sending domain is verified
- Review Resend logs

### Template Not Showing

- Verify markdown frontmatter is valid
- Check template slug is unique
- Ensure images exist in `/public/templates`

## Support

For questions or issues:
- Email: support@snarkonaut.com
- GitHub Issues: [Your Repo Issues]

## License

This project is licensed under the MIT License.

## Roadmap

- [ ] Support subscription implementation
- [ ] User dashboard for purchased templates
- [ ] Template search and filtering
- [ ] Category pages
- [ ] Admin panel for template management
- [ ] Analytics integration
- [ ] Newsletter signup

---

Built with ❤️ using Next.js and TypeScript
