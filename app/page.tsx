"use client"
import Head from "next/head"
import NewLandingPage from "./components/hero-section"
import WhoWeReach from "./components/three-pillars"

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

      <div className="relative min-h-screen overflow-hidden">
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center py-20">
          <NewLandingPage />
        </div>

        <section className="relative bg-white rounded-t-[40px] shadow-2xl -mt-20 sm:-mt-16 md:-mt-12 z-10">
          <div className="relative w-full z-20">
            <WhoWeReach />
          </div>
        </section>
      </div>
    </>
  )
}
