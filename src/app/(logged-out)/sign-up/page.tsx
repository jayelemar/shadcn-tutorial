"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SignUpForm from "@/features/auth/SignUpForm"

import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function SignUpPage() {
  return (
    <>
      <PersonStandingIcon size={45} className="text-primary" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Login to your support me account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
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
