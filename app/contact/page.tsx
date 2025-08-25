"use client"

import Partnerships from "../../components/oppfor"
import Listo from "../../components/listo"
import ContactHero from "../../components/contact-hero"

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-x-hidden min-h-screen">
      <ContactHero />

      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10 mt-0 w-full">
        <div className="relative w-full">
          <Partnerships />
          <Listo />
        </div>
      </section>
    </div>
  )
}
