"use client"
import React from "react"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import InputField from "@/components/form/InputField"

const SignUpSchema = z.object({
  email: z.string().email(),
})

export type SignUpFormData = z.infer<typeof SignUpSchema>

export default function SignUpForm() {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
    },
  })
  const { handleSubmit, control } = form

  const onSubmit = () => {
    console.log("login validation passed")
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
          <InputField control={control} label="Email" name="email" type="text" placeholder="johndoe@gmail.com" />
          <Button className="mt-12">Submit</Button>
        </form>
      </Form>
    </>
  )
}
