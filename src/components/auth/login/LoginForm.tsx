"use client"
import React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import InputFormElement from "@/components/form/InputFormElement"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Please enter your password."),
})

export type FormData = z.infer<typeof formSchema>

export default function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const { handleSubmit } = form

  const onSubmit = () => {
    console.log("login validation passed")
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
          <InputFormElement
            form={form}
            formDescription="This is the email address you signed up to SupportMe"
            formLabel="Email"
            name="email"
            placeholder="johndoe@gmail.com"
            type="email"
          />
          <InputFormElement
            form={form}
            formDescription="Please enter your password"
            formLabel="Password"
            name="password"
            placeholder="Your Password"
            type="password"
          />
          <Button className="mt-12">Submit</Button>
        </form>
      </Form>
    </>
  )
}
