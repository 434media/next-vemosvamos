"use client";

import Partnerships from "../components/oppfor";
import Listo from "../components/listo";
import ContactHero from "../components/contact-hero";

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <ContactHero />


      {/* SPACER - pushes next section down */}
      <div className="h-screen"></div>

      {/* OVERLAPPING SECTION */}
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <Partnerships />
          <Listo />
        </div>
      </section>
    </div>
  );
}