"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import Link from "next/link"
import { useTheme } from "next-themes"

const SendIcon = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme()
  const strokeColor = resolvedTheme === 'dark' ? '#868F97' : '#4B5563'

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"
      />
    </svg>
  )
}

const CTAButton = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <Link
      href="/Contact"
      className={cn(
        "group relative flex items-center justify-center gap-1",
        "h-12 min-w-[160px] whitespace-nowrap rounded-lg px-5 py-3",
        "text-sm font-semibold leading-tight",
        "text-foreground",
        // Enhanced gradients with higher opacity
        isDark
          ? "bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(30,30,30)_0%,rgba(255,255,255,0.1)_100%)]"
          : "bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(255,255,255)_0%,rgba(0,0,0,0.08)_100%)]",
        // Enhanced borders and shadows
        isDark
          ? "[box-shadow:inset_0_0_0_1px_rgba(134,143,151,0.4),0_1px_2px_rgba(0,0,0,0.2)]"
          : "[box-shadow:inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.1)]",
        // Enhanced hover effect
        "after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:transition-opacity after:duration-200",
        isDark
          ? "after:bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(40,40,40)_0%,rgb(30,30,30)_100%)]"
          : "after:bg-[radial-gradient(61.35%_50.07%_at_48.58%_50%,rgb(255,255,255)_0%,rgb(235,235,235)_100%)]",
        // Enhanced hover shadows
        isDark
          ? "after:[box-shadow:inset_0_0_0_1px_rgba(134,143,151,0.6),0_2px_4px_rgba(0,0,0,0.3)]"
          : "after:[box-shadow:inset_0_0_0_1px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.1)]",
        "hover:after:opacity-100",
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        <SendIcon />
        Get in Touch
      </span>
    </Link>
  )
}

export default CTAButton
