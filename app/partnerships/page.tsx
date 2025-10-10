"use client"

import Opportunities from "../../components/opportunities"
import Listo from "../../components/listo"
import ContactHero from "../../components/contact-hero"

export default function PartnerPage() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      <ContactHero />

      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10 mt-0 w-full">
        <div className="relative w-full">
          <Opportunities />
          <Listo />
        </div>
      </section>
    </div>
  )
}
