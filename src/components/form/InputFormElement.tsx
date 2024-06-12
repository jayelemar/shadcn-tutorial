"use client"
import React from "react"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { UseFormReturn } from "react-hook-form"
import { FormData } from "../auth/login/LoginForm"

type FieldName = keyof FormData

interface InputFormElementProps {
  form: UseFormReturn<FormData>
  name: FieldName
  formLabel: string
  formDescription?: string
  placeholder?: string
  type: string
}

export default function InputFormElement({
  form,
  name,
  formLabel,
  formDescription,
  placeholder,
  type,
}: InputFormElementProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} />
          </FormControl>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
