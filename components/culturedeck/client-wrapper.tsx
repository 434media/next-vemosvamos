"use client"

import dynamic from "next/dynamic"
import type { CultureDeckArticle } from "../../lib/types/culturedeck"

// Dynamically import the client component to prevent SSR issues with context
const CultureDeckPageClient = dynamic(
  () => import("./page-client").then(mod => ({ default: mod.CultureDeckPageClient })),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-[#eeebe3] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ca0013] mx-auto mb-4"></div>
          <p className="text-[#1a1a1a]/70">Loading Culture Deck...</p>
        </div>
      </div>
    )
  }
)

interface CultureDeckClientWrapperProps {
  articles: CultureDeckArticle[]
}

export function CultureDeckClientWrapper({ articles }: CultureDeckClientWrapperProps) {
  return <CultureDeckPageClient articles={articles} />
}