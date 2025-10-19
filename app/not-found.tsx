import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Ghost } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex min-h-[calc(100vh-200px)] items-center justify-center">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <Ghost className="h-24 w-24 text-neutral-800" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-white">This Page Doesn't Exist</h2>
        <p className="mb-2 text-neutral-400">
          Either you typed the URL wrong, or we deleted it and forgot to tell you.
        </p>
        <p className="mb-8 text-sm text-neutral-500">
          (It's probably your fault though. Just saying.)
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home (It's Safe There)
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#templates">
              <Search className="mr-2 h-4 w-4" />
              Find Templates Instead
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-xs text-neutral-600">
          Still lost? Email us. We'll pretend we know what happened.
        </p>
      </div>
    </div>
  )
}
