"use client"
import NewLandingPage from "../components/hero-section"
import WhoWeReach from "../components/three-pillars"
import WhyItMattersSection from "../components/why-it-matters"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="w-full">
        <NewLandingPage />
      </div>
      <section className="relative bg-white rounded-t-[40px] shadow-2xl w-full">
        <WhoWeReach />
      </section>
      <WhyItMattersSection />
    </div>
  )
}
