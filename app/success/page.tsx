import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Mail, ArrowRight, PartyPopper } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="container flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
      <Card className="max-w-2xl border-neutral-800 bg-neutral-950/50">
        <CardContent className="p-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-500/10 p-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-white">You Did It. You Actually Bought Something.</h1>
          <p className="mb-8 text-lg text-neutral-400">
            Your payment went through. Your template is on the way. Your side project might actually launch this time.
          </p>

          <div className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="mb-3 flex items-center justify-center gap-2 text-blue-400">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">Check Your Email (Yes, Actually Check It)</span>
            </div>
            <p className="mb-3 text-sm text-neutral-400">
              We just sent you an email with everything you need:
            </p>
            <ul className="space-y-1.5 text-sm text-neutral-400">
              <li>• GitHub repo link (it's private, you're special now)</li>
              <li>• One-click Vercel deploy button (literally one click)</li>
              <li>• Setup instructions (we know you won't read them)</li>
              <li>• Support info (for when you need help)</li>
            </ul>
            <p className="mt-4 text-xs text-neutral-500">
              Didn't get it? Check spam. Still nothing? Email us at{" "}
              <a
                href="mailto:support@snarkonaut.com"
                className="text-blue-400 hover:text-blue-300"
              >
                support@snarkonaut.com
              </a>
              {" "}and we'll sort it out.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-green-500/20 bg-green-500/5 p-6">
            <div className="mb-2 flex items-center justify-center gap-2 text-green-400">
              <PartyPopper className="h-5 w-5" />
              <span className="font-semibold">Pro Tips From The Pros</span>
            </div>
            <ul className="space-y-2 text-left text-sm text-neutral-400">
              <li>
                <span className="text-white">1.</span> Clone the repo ASAP (don't forget about it like your last 10 projects)
              </li>
              <li>
                <span className="text-white">2.</span> Deploy to Vercel now (it takes 5 minutes, you have time)
              </li>
              <li>
                <span className="text-white">3.</span> Read the README (shocking advice, but it actually helps)
              </li>
              <li>
                <span className="text-white">4.</span> Join our support if you get stuck (or just Google it, we're not offended)
              </li>
              <li>
                <span className="text-white">5.</span> Ship your project (unlike the last 5 templates you bought and never used)
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-neutral-500">
              Reminder: You bought this to ship faster, not to have another repo collecting dust.
              <br />
              <strong className="text-white">Actually launch something this time.</strong>
            </p>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  Buy More Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/support">Get Support ($50/mo)</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 border-t border-neutral-800 pt-8">
            <p className="text-xs text-neutral-600">
              Transaction ID and receipt are in your email. Save it for your accountant (or when Stripe asks questions).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
