import type { NextConfig } from "next";
import { withBotId } from 'botid/next/config';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // ──────────────────────────────────────────────────────────────
      // SITE PAUSED 2026-08-16 — every URL forwards to 434 Media.
      //
      // Redirects run before filesystem routes, so these two entries
      // swallow everything: pages, /es/*, /api/*, sitemap.xml, static
      // assets. Nothing in the app is reachable while they're here.
      //
      // TO UNPAUSE: delete these two entries.
      // ──────────────────────────────────────────────────────────────
      {
        source: "/",
        destination: "https://www.434media.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://www.434media.com/",
        permanent: true,
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/groovy-ego-462522-v2.firebasestorage.app/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/groovy-ego-462522-v2.firebasestorage.app/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },  
};

export default withBotId(nextConfig);