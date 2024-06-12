"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputField from "@/components/form/InputField"

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("login validation passed")
    console.log("data: ", data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <InputField
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          description="This is your public display email."
          type="text"
        />
        <InputField control={form.control} name="password" label="Password" type="password" placeholder="••••••••" />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
