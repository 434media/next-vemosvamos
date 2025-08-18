"use client"
import Head from "next/head"
import NewLandingPage from "../components/hero-section"
import WhoWeReach from "../components/three-pillars"

export default function Home() {
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

      <div className="relative min-h-screen">
        <div className="">
          <NewLandingPage />
        </div>
        <section className="relative bg-white rounded-t-[40px] shadow-2xl">
          <WhoWeReach />
        </section>
      </div>
    </>
  )
}
