import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Calendar } from "lucide-react"

export function Navbar() {
  return (
    <nav className="border-b bg-white/75 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">Schedulify</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {/* <Link href="/features" className="text-gray-600 hover:text-blue-600">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link> */}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <SignInButton />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <SignUpButton />
            </Button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  )
}
