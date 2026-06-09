import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { LayoutWrapper } from "../components/layout-wrapper"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eeebe3" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vemosvamos.com"),
  title: {
    default: "Vemos Vamos — Acciones hablan más fuerte.",
    template: "%s · Vemos Vamos",
  },
  description:
    "An AI-enabled bicultural creative media system. We see cultural signals and turn them into content, campaigns, and experiences.",
  keywords: [
    "Vemos Vamos",
    "bicultural media",
    "Texas-Latin culture",
    "creative operating system",
    "AI-enabled media",
    "cultural signals",
    "Acciones hablan más fuerte",
    "bilingual media",
    "Latino media",
    "434 Media",
  ],
  authors: [{ name: "Vemos Vamos" }, { name: "434 Media" }],
  creator: "Vemos Vamos",
  publisher: "434 Media",
  category: "Media",
  classification: "Media & Entertainment",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://www.vemosvamos.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vemos Vamos — Acciones hablan más fuerte.",
    description:
      "An AI-enabled bicultural creative media system. We see cultural signals and turn them into content, campaigns, and experiences.",
    url: "https://www.vemosvamos.com",
    siteName: "Vemos Vamos",
    locale: "en_US",
    type: "website",
    countryName: "United States",
    // images resolved via the file-based convention at app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    site: "@vemosvamos",
    creator: "@vemosvamos",
    title: "Vemos Vamos — Acciones hablan más fuerte.",
    description:
      "An AI-enabled bicultural creative media system. We see cultural signals and turn them into content, campaigns, and experiences.",
    // images resolved via the file-based convention at app/twitter-image.tsx (falls back to opengraph-image)
  },
  appleWebApp: {
    capable: true,
    title: "Vemos Vamos",
    statusBarStyle: "default",
  },
  applicationName: "Vemos Vamos",
  generator: "Next.js",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#ca0013" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.vemosvamos.com/#organization",
              name: "Vemos Vamos",
              alternateName: "VemosVamos",
              url: "https://www.vemosvamos.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.vemosvamos.com/opengraph-image",
                width: 1200,
                height: 630,
              },
              image: "https://www.vemosvamos.com/opengraph-image",
              description:
                "An AI-enabled bicultural creative media system. We see cultural signals and turn them into content, campaigns, and experiences.",
              slogan: "Acciones hablan más fuerte.",
              foundingDate: "2024",
              parentOrganization: {
                "@type": "Organization",
                name: "434 Media",
                url: "https://434media.com",
              },
              sameAs: [
                "https://www.instagram.com/vemos.vamos/",
                "https://www.linkedin.com/company/vemosvamos/",
                "https://www.facebook.com/vemosvamos",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Spanish"],
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              knowsAbout: [
                "Bicultural Media",
                "Cultural Signals",
                "Creative Systems",
                "AI-Enabled Content Workflows",
                "Texas-Latin Culture",
                "Editorial Strategy",
                "Bilingual Content",
                "Brand Storytelling",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.vemosvamos.com/#website",
              url: "https://www.vemosvamos.com",
              name: "Vemos Vamos",
              description:
                "An AI-enabled bicultural creative media system. We see cultural signals and turn them into content, campaigns, and experiences.",
              publisher: {
                "@id": "https://www.vemosvamos.com/#organization",
              },
              inLanguage: ["en-US", "es"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#f1eee7] w-full min-h-screen m-0 p-0 overflow-x-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Suspense>
        <Analytics />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V4H0TMWFEC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V4H0TMWFEC', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'Bicultural Media',
              content_group2: 'Entrepreneurship'
            });
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1345149799924014');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1345149799924014&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </body>
    </html>
  )
}
