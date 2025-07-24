"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import { MobileMenu } from "./components/mobile-menu"
import Head from "next/head"
import { Hero } from "./components/hero"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Vemos Vamos",
            url: "https://www.vemosvamos.com",
            logo: "https://www.vemosvamos.com/logo.png",
            sameAs: [
              "https://www.instagram.com/vemos.vamos/",
              "https://www.linkedin.com/company/vemosvamos/",
              "https://www.facebook.com/vemosvamos",
            ],
            description:
              "Vemos Vamos is a bilingual platform fostering entrepreneurial success through community, resources, and innovative solutions.",
          })}
        </script>
      </Head>
      <div className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Animated background gradient */}
        <motion.div
          className="fixed inset-0 z-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "linear",
          }}
          style={{
            background: `
              radial-gradient(circle at 0% 0%, #8b000080 0%, transparent 50%),
              radial-gradient(circle at 100% 0%, #ffc85780 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, #2a9d8f80 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, #26465380 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
            backgroundColor: "#ECEBE0",
          }}
        />

        <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

        <main className="relative z-10 flex-grow flex flex-col justify-center items-center">
          <Hero />
        </main>

        <Footer />

        <AnimatePresence>{isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}</AnimatePresence>
      </div>
    </>
  )
}
