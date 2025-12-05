import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ampd-asset.s3.us-east-2.amazonaws.com",
      },
       {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**'
      },
      // Airtable CDN domains for Culture Deck images
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'v3.airtableusercontent.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'v4.airtableusercontent.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'dl.airtable.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'attachments.airtable.com',
        pathname: '/**'
      },
      // Additional Airtable domains
      {
        protocol: 'https',
        hostname: 'airtable.com',
        pathname: '/attachments/**'
      }
    ],
  },  
};

export default nextConfig;