"use client"

import ContentHubHero from "../components/contenthubhero"
import RedIdentityPage from "../components/ourexp2"

export default function ContentHubPage() {
  return (
    <main>
      <ContentHubHero />
      <section className="relative bg-white rounded-t-[40px] shadow-2xl z-10">
        <div className="relative w-full">
          <RedIdentityPage />
        </div>
      </section>
    </main>
  )
}
