"use client"

import type React from "react"

import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { LanguageProvider } from "../lib/language-context"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
