"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { MoonIcon, SunIcon } from "lucide-react"
import React, { FC, useState } from "react"

interface Props {
  className: string
}

export default function LightDarkToggleBtn({ className }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const handleClick = () => {
    setIsDarkMode((prev) => !prev)
    document.body.classList.toggle("dark")
  }
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className} onClick={handleClick}>
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>{isDarkMode ? "Enable light mode" : "Enable dark mode"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
