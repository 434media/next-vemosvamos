"use client"
import { useState, useEffect } from "react"
import NewLandingPage from "../components/hero-section"
import WhoWeReach from "../components/three-pillars"
import WhyItMattersSection from "../components/why-it-matters"
import NewsletterPopup from "../components/newsletter-popup"

export default function Home() {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false)

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("newsletter-popup-shown")

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowNewsletterPopup(true)
        sessionStorage.setItem("newsletter-popup-shown", "true")
      }, 3000) // 3 seconds delay

      return () => clearTimeout(timer)
    }
  }, [])

  const handleCloseNewsletterPopup = () => {
    setShowNewsletterPopup(false)
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="w-full">
        <NewLandingPage />
      </div>
      <section className="relative bg-white rounded-t-[40px] shadow-2xl w-full">
        <WhoWeReach />
      </section>
      <WhyItMattersSection />

      <NewsletterPopup showModal={showNewsletterPopup} onClose={handleCloseNewsletterPopup} />
    </div>
  )
}
