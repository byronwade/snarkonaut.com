# Open Graph Image Generation

## ✅ Dynamic OG Images Implemented

Your marketplace now automatically generates beautiful Open Graph images for every template using **@vercel/og**!

---

## 🎨 Design Features

### Vercel-Style Dark Theme
- Pure black background (#000)
- Subtle radial gradient overlay
- Grid pattern for depth
- Premium, modern aesthetic

### Dynamic Elements
- ✅ **Template title** (72px, bold, white)
- ✅ **Price badge** ($99 or FREE with color coding)
- ✅ **Featured badge** (⭐ for featured templates)
- ✅ **Category label** (uppercase, subtle)
- ✅ **Tech stack badges** (up to 4 technologies)
- ✅ **Snarkonaut branding** (logo + name)
- ✅ **Call-to-action** ("Deploy to Vercel →")

### Color Coding
- **Free templates:** Green price badge (`#22c55e`)
- **Paid templates:** White price badge
- **Featured:** Star badge with white background

---

## 🔗 API Endpoint

**URL:** `/api/og`

**Parameters:**
- `title` - Template name (required)
- `price` - Template price (0 for free)
- `category` - Template category
- `tech` - Comma-separated tech stack
- `featured` - "true" for featured badge

**Example:**
```
/api/og?title=Shopify%20Next.js%20Theme&price=99&category=ecommerce&tech=Next.js%2015%2C%20TypeScript%2C%20Shopify%20API&featured=true
```

---

## 📱 Where OG Images Are Used

### 1. Homepage
```
/api/og?title=Snarkonaut&price=0&category=Marketplace&tech=Next.js 16, React 19, TypeScript&featured=true
```

### 2. Template Pages (Automatic)
Each template automatically generates its OG image with:
- Template title
- Actual price
- Template category
- First 4 technologies
- Featured status

**Example URLs:**
- **SaaS Starter:** `/api/og?title=SaaS%20Starter%20Pro&price=99&category=saas&tech=Next.js%2015...`
- **Shopify Theme:** `/api/og?title=Shopify%20Next.js%20Theme&price=99&category=ecommerce...`
- **Free Template:** `/api/og?title=Simple%20Landing&price=0&category=marketing...`

---

## 🧪 Testing OG Images

### Local Testing

1. **Start dev server:**
```bash
npm run dev
```

2. **View OG images directly:**
```bash
# Homepage OG image
http://localhost:3000/api/og?title=Snarkonaut&price=0&category=Marketplace&tech=Next.js 16, React 19, TypeScript&featured=true

# Template OG image
http://localhost:3000/api/og?title=SaaS%20Starter%20Pro&price=99&category=saas&tech=Next.js%2015%2C%20TypeScript%2C%20Supabase&featured=true
```

3. **Test social media previews:**
   - Use the [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Use the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Use the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### Visual Preview

Visit any template page and view source (Cmd+U / Ctrl+U) to see:
```html
<meta property="og:image" content="/api/og?title=...&price=...&category=...&tech=...&featured=..." />
```

---

## 🎯 Benefits

### SEO & Social Media
- ✅ **Professional appearance** on all social platforms
- ✅ **Consistent branding** across all templates
- ✅ **Higher click-through rates** with rich previews
- ✅ **No manual image creation** needed

### Technical
- ✅ **Edge runtime** - Fast generation globally
- ✅ **Automatic caching** by CDN
- ✅ **1200x630px** - Perfect for all platforms
- ✅ **Dynamic content** - Always up-to-date
- ✅ **No external dependencies** - All self-hosted

### Developer Experience
- ✅ **Zero maintenance** - Auto-generates for new templates
- ✅ **URL-based** - Easy to test and debug
- ✅ **Type-safe** - TypeScript support
- ✅ **Customizable** - Easy to modify design

---

## 🎨 Customization

The OG image design can be customized in `/app/api/og/route.tsx`:

### Change Colors
```tsx
backgroundColor: "#000",  // Background color
color: "#fff",            // Text color
```

### Modify Layout
```tsx
padding: "60px",          // Container padding
fontSize: "72px",         // Title size
gap: "24px",              // Spacing
```

### Add Elements
```tsx
<div style={{ /* your styles */ }}>
  {/* your content */}
</div>
```

### Update Branding
```tsx
<div>S</div>  // Change logo
<div>Your Brand</div>  // Change name
```

---

## 📊 OG Image Specifications

### Dimensions
- **Width:** 1200px
- **Height:** 630px
- **Aspect Ratio:** 1.91:1

### File Size
- Generated on-demand
- Cached by CDN
- Typically 50-100KB

### Supported Platforms
- ✅ Twitter/X
- ✅ Facebook
- ✅ LinkedIn
- ✅ Discord
- ✅ Slack
- ✅ WhatsApp
- ✅ iMessage
- ✅ Any platform that supports Open Graph

---

## 🚀 Deployment

### Vercel (Recommended)
OG image generation works automatically on Vercel with:
- Edge runtime support
- Global CDN caching
- Instant image generation
- No configuration needed

### Other Platforms
Ensure your platform supports:
- Next.js Edge Runtime
- `@vercel/og` package
- Image response generation

---

## 🔍 How It Works

1. **Template page loads**
2. **Metadata generates OG URL** with template details
3. **Social crawler requests** `/api/og?...`
4. **Edge function generates** 1200x630 image
5. **Image is cached** by CDN
6. **Social platform displays** rich preview

### Example Flow

```
User shares: snarkonaut.com/templates/saas-starter
       ↓
Meta tag: <meta property="og:image" content="/api/og?title=..." />
       ↓
Twitter fetches: /api/og?title=SaaS%20Starter...
       ↓
API generates: Beautiful 1200x630 image
       ↓
Twitter displays: Rich card with image
```

---

## 💡 Tips

### Testing
- Clear cache when testing changes
- Use incognito/private mode
- Test on multiple platforms
- Check mobile rendering

### Performance
- Images are cached by CDN
- First generation may take 500ms
- Subsequent requests are instant
- Edge runtime ensures global speed

### Debugging
```bash
# View raw image URL
curl -I "http://localhost:3000/api/og?title=Test"

# Check response headers
Content-Type: image/png
Cache-Control: public, immutable, no-transform, max-age=31536000

# Test with social debuggers
- Twitter: cards-dev.twitter.com/validator
- Facebook: developers.facebook.com/tools/debug
- LinkedIn: linkedin.com/post-inspector
```

---

## 📝 Examples

### Homepage
![Homepage OG](http://localhost:3000/api/og?title=Snarkonaut&price=0&category=Marketplace&tech=Next.js%2016%2C%20React%2019%2C%20TypeScript&featured=true)

### Paid Template
![SaaS OG](http://localhost:3000/api/og?title=SaaS%20Starter%20Pro&price=99&category=saas&tech=Next.js%2015%2C%20TypeScript%2C%20Supabase&featured=true)

### Free Template
![Free OG](http://localhost:3000/api/og?title=Simple%20Landing&price=0&category=marketing&tech=Next.js%2015%2C%20TypeScript%2C%20Tailwind&featured=false)

---

## ✅ Checklist

- [x] @vercel/og installed
- [x] API route created
- [x] Vercel-style design
- [x] Dynamic parameters
- [x] Metadata updated
- [x] Build successful
- [x] Edge runtime enabled
- [x] 1200x630 dimensions
- [x] Price color coding
- [x] Featured badges
- [x] Tech stack display
- [x] Brand consistency

---

## 🎉 Result

You now have **professional, auto-generated OG images** for every template that will make your links look amazing when shared on social media!

Test them by:
1. Running `npm run dev`
2. Visiting `http://localhost:3000/api/og?title=Test&price=99&category=template&tech=Next.js&featured=true`
3. Sharing a template link on Twitter/Facebook/LinkedIn

Your marketplace will stand out with beautiful, branded social media previews! 🚀
