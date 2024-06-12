"use client"
import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
interface TextInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  description?: string
  type: string
}
const InputField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  type = "text",
}: TextInputProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} placeholder={placeholder} {...field} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
)
export default InputField
