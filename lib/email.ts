import { Resend } from "resend"
import type { Template } from "./templates"

// Use placeholder for build time, will throw at runtime if not configured properly
const resendApiKey = process.env.RESEND_API_KEY || "re_placeholder"

const resend = new Resend(resendApiKey)

const FROM_EMAIL = process.env.EMAIL_FROM || "templates@snarkonaut.com"

interface SendTemplateEmailParams {
  to: string
  template: Template
  customerName?: string
  includeSupport: boolean
}

export async function sendTemplateEmail({
  to,
  template,
  customerName,
  includeSupport,
}: SendTemplateEmailParams) {
  const subject = `Your ${template.title} Template is Ready!`

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #e5e5e5; max-width: 600px; margin: 0 auto; padding: 20px; background: #000;">
        <div style="background: #0a0a0a; border: 1px solid #262626; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
          <h1 style="margin: 0 0 16px; font-size: 28px; font-weight: 700; color: #fff;">
            ${customerName ? `Yo ${customerName.split(" ")[0]}! 👋` : "Well, well, well... 👋"}
          </h1>
          <p style="margin: 0; font-size: 16px; color: #a3a3a3;">
            You just bought <strong style="color: #fff;">${template.title}</strong>. Nice choice. We promise it's better than starting from scratch.
          </p>
        </div>

        <div style="margin-bottom: 32px;">
          <h2 style="margin: 0 0 16px; font-size: 22px; font-weight: 600; color: #fff;">
            Let's Get You Deployed (The Fun Part)
          </h2>
          <p style="margin: 0 0 16px; color: #a3a3a3;">
            Click this button. Connect your GitHub. Watch the magic happen. Be online in 5 minutes.
          </p>
          <a href="${template.vercelDeploy}"
             style="display: inline-block; background: #fff; color: #000; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; margin-bottom: 16px;">
            🚀 Deploy to Vercel Now
          </a>
          <p style="margin: 0; font-size: 14px; color: #737373;">
            (Seriously, it's one click. We timed it. 5 minutes max.)
          </p>
        </div>

        <div style="margin-bottom: 32px;">
          <h2 style="margin: 0 0 16px; font-size: 22px; font-weight: 600; color: #fff;">
            Your Template Goodies
          </h2>
          <div style="background: #0a0a0a; border: 1px solid #262626; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
            <ul style="margin: 0; padding: 0; list-style: none; color: #a3a3a3;">
              <li style="margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #262626;">
                <strong style="color: #fff;">📦 GitHub Repository:</strong><br/>
                <a href="${template.github}" style="color: #60a5fa; text-decoration: none;">
                  ${template.github}
                </a>
                <br/>
                <span style="font-size: 13px; color: #737373;">(Clone it. Read it. Deploy it. Make it yours.)</span>
              </li>
              ${template.demo ? `
                <li style="margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #262626;">
                  <strong style="color: #fff;">🎬 Live Demo:</strong><br/>
                  <a href="${template.demo}" style="color: #60a5fa; text-decoration: none;">
                    ${template.demo}
                  </a>
                  <br/>
                  <span style="font-size: 13px; color: #737373;">(See it in action before you customize)</span>
                </li>
              ` : ""}
              <li style="padding: 8px 0;">
                <strong style="color: #fff;">🛠️ Built With:</strong><br/>
                <span style="font-size: 14px;">${template.tech.join(" • ")}</span>
                <br/>
                <span style="font-size: 13px; color: #737373;">(All the good stuff. No jQuery.)</span>
              </li>
            </ul>
          </div>
        </div>

        ${includeSupport ? `
          <div style="background: #14532d; border: 1px solid #16a34a; border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <h3 style="margin: 0 0 12px; font-size: 18px; font-weight: 600; color: #4ade80;">
              🎉 You Got Priority Support!
            </h3>
            <p style="margin: 0; color: #86efac;">
              Smart move. You now have priority email support and automatic template updates.
              Need help? Reply to this email. We'll get back to you within 24 hours (usually way faster).
            </p>
          </div>
        ` : `
          <div style="background: #422006; border: 1px solid #ea580c; border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <h3 style="margin: 0 0 12px; font-size: 18px; font-weight: 600; color: #fb923c;">
              🤔 Need Help Getting Started?
            </h3>
            <p style="margin: 0 0 12px; color: #fdba74;">
              Get priority email support and we'll help you customize, deploy, and launch. Just $50/month.
              <br/><br/>
              Cancel anytime. No hard feelings.
            </p>
            <a href="${process.env.NEXT_PUBLIC_BASE_URL || "https://snarkonaut.com"}/support"
               style="display: inline-block; background: #ea580c; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600;">
              Get Priority Support
            </a>
          </div>
        `}

        <div style="border-top: 1px solid #262626; padding-top: 24px; margin-top: 32px;">
          <p style="margin: 0 0 12px; font-size: 14px; color: #737373;">
            <strong style="color: #fff;">Need help?</strong> Reply to this email. We're developers too. We get it.
          </p>
          <p style="margin: 0 0 16px; font-size: 14px; color: #737373;">
            <strong style="color: #fff;">Pro tip:</strong> Actually deploy it. Don't let this be template #47 that you buy and never use.
          </p>
          <p style="margin: 0; font-size: 12px; color: #525252;">
            © ${new Date().getFullYear()} Snarkonaut. We built this so you don't have to.
          </p>
        </div>
      </body>
    </html>
  `

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw error
    }

    return data
  } catch (error) {
    console.error("Failed to send template email:", error)
    throw error
  }
}
