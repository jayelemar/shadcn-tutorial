import LightDarkToggleBtn from "@/components/ui/light-dark-toggle-btn"
import React from "react"

type Props = {
  children: React.ReactNode
}

export default function LoggedOutLayout({ children }: Props) {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center p-24 gap-y-2">
      {children}
      <LightDarkToggleBtn className="fixed right-2 top-[calc(50%-12px)]" />
    </section>
  )
}
