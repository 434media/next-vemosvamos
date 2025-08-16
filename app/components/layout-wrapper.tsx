"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "./Navbar"
import { MobileMenu } from "./mobile-menu"
import { Footer } from "./footer"
import { AnimatePresence } from "motion/react"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsMobileMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Navbar onOpenMenu={handleOpenMenu} />
      <AnimatePresence>{isMobileMenuOpen && <MobileMenu onClose={handleCloseMenu} />}</AnimatePresence>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
