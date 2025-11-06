"use client"

import dynamic from "next/dynamic"
import type { CultureDeckArticle } from "../../lib/types/culturedeck"

// Dynamically import the client component to prevent SSR issues with context
const CultureDeckArticleContent = dynamic(
  () => import("./article-content").then(mod => ({ default: mod.CultureDeckArticleContent })),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-[#eeebe3] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ca0013] mx-auto mb-4"></div>
          <p className="text-[#1a1a1a]/70">Loading Article...</p>
        </div>
      </div>
    )
  }
)

interface CultureDeckArticleContentWrapperProps {
  article: CultureDeckArticle
}

export function CultureDeckArticleContentWrapper({ article }: CultureDeckArticleContentWrapperProps) {
  return <CultureDeckArticleContent article={article} />
}