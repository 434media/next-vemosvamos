"use client"

import ContentHubHero from "../../components/contenthubhero"
import RedIdentityPage from "../../components/ourexp2"

export default function ContentHubPage() {
  return (
    <main>
      <ContentHubHero />
      {/* Mobile Newspaper Separator */}
      <div className="md:hidden relative w-full h-[65vh] -mt-80 overflow-hidden z-10">
        <div className="absolute inset-0">
          <img
            src="/images/newspaper.png"
            alt="Newspaper Separator"
            className="w-[80vh] ml-20 max-w-none h-full object-cover rotate-90 origin-center translate-x-[-35%] translate-y-[-12%] shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <RedIdentityPage />
        </div>
      </section>
    </main>
  )
}
