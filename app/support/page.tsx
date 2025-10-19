import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Clock, Zap, Coffee } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4 bg-neutral-900 text-white" variant="outline">
            For When You're Stuck
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">Priority Support</h1>
          <p className="text-xl text-neutral-400">
            We'll answer your questions faster than you can say "Stack Overflow"
          </p>
        </div>

        {/* Pricing Card */}
        <Card className="mb-12 border-2 border-white/20 bg-neutral-950/50">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">$50/month</CardTitle>
            <CardDescription className="text-neutral-400">
              Cheaper than therapy. More useful than your last coding bootcamp.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-2">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Actually Helpful Emails</h3>
                  <p className="text-sm text-neutral-500">
                    No "have you tried turning it off and on again" responses. Real solutions from real developers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-2">
                  <Clock className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">24-Hour Response</h3>
                  <p className="text-sm text-neutral-500">
                    Not "2-5 business days." Actual 24 hours. Even on weekends (we have no life).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Early Access</h3>
                  <p className="text-sm text-neutral-500">
                    Get new templates and updates before we announce them. Feel like a VIP (you are).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-2">
                  <MessageCircle className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Implementation Help</h3>
                  <p className="text-sm text-neutral-500">
                    "How do I add feature X?" We'll tell you. Sometimes with code examples. We're generous like that.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <div className="mb-4 rounded-lg bg-neutral-900/80 p-4">
                <p className="text-sm text-neutral-400">
                  <Coffee className="mr-2 inline h-4 w-4" />
                  <strong className="text-white">Honest talk:</strong> Support is coming soon. We're still building the system.
                  For now, just email us at{" "}
                  <a
                    href="mailto:support@snarkonaut.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    support@snarkonaut.com
                  </a>
                  {" "}and we'll help for free (shh, don't tell anyone).
                </p>
              </div>
              <Button className="w-full" size="lg" disabled>
                Coming Soon (Building The Thing)
              </Button>
              <p className="mt-4 text-center text-xs text-neutral-600">
                In the meantime, we answer all support emails. Eventually. Usually within 48 hours.
                No promises though.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">Questions You're Probably Asking</h2>
          <div className="space-y-4">
            <Card className="border-neutral-800 bg-neutral-950/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">Do I really need support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">
                  Probably not. The templates have docs. Google exists. ChatGPT can help. But if you value your time more than $50/month and don't want to figure it out yourself, then yes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-950/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">
                  Yes. Cancel whenever. No "are you sure?" popups. No guilt trips. No holding your account hostage. We're not Adobe.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-950/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">What if my question is dumb?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">
                  There are no dumb questions. Only questions we've answered 47 times. Ask anyway. We chose this life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-950/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">Will you build custom features for me?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">
                  For $50/month? No. We'll help you build it yourself though. Teach a developer to fish and all that.
                  <br /><br />
                  Want us to build it? That's consulting. Email us. We charge differently for that (read: more).
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-950/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">Is this worth $50/month?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">
                  If you bill $100/hour and we save you 30 minutes per month, yes. Do the math.
                  <br /><br />
                  If you're a hobbyist building for fun, probably not. Use the free community support. We're cool with that.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-800 bg-neutral-950/50">
              <CardHeader>
                <CardTitle className="text-lg text-white">What's the refund policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">
                  It's monthly. Cancel anytime. That IS the refund policy.
                  <br /><br />
                  If we suck, you leave. If we're helpful, you stay. Seems fair.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-neutral-800 bg-neutral-950/50 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-white">
            Still on the fence?
          </h3>
          <p className="mb-6 text-neutral-400">
            Try the templates first. Use community support (GitHub Discussions).
            If you find yourself wasting hours on problems we could solve in minutes, come back.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/">Browse Templates</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/snarkonaut" target="_blank" rel="noopener noreferrer">
                Community Support (Free)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
