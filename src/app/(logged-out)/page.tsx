import { Button } from "@/components/ui/button"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-x-2">
        <PersonStandingIcon size={45} className="text-primary" />
        Support Me
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-x-4 justify-center items-center">
        <Button asChild>
          <Link href="/login">Log In</Link>
        </Button>
        <small>or</small>
        <Button variant="outline">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </>
  )
}
