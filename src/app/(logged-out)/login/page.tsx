"use client"
import LoginForm from "@/components/auth/login/LoginForm"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function LoginPage() {
  return (
    <>
      <PersonStandingIcon size={45} className="text-primary" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your support me account</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <small>Don&apos;t have an account?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-ip"> Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
