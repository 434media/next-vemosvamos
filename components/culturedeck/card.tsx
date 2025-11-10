"use client"

import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import type { CultureDeckArticle } from "../../lib/types/culturedeck"

// Utility function to translate topics
function translateTopic(topic: string, t: (key: string) => string): string {
  const topicKey = `topic.${topic}`
  const translated = t(topicKey)
  // If translation returns the key (not found), return original topic
  return translated === topicKey ? topic : translated
}

interface CultureDeckCardProps {
  article: CultureDeckArticle
  cardLabel: string
  isExpanded: boolean
  onToggle: () => void
  index: number
  readMoreLabel: string
  visitLinkLabel: string
  authorLabel: string
  t: (key: string) => string
  language: "en" | "es"
}

export function CultureDeckCard({
  article,
  cardLabel,
  isExpanded,
  onToggle,
  index,
  readMoreLabel,
  visitLinkLabel,
  authorLabel,
  t,
  language,
}: CultureDeckCardProps) {
  return (
    <div className="hover:bg-[#eeebe3]/20 transition-all duration-300 relative overflow-hidden group">
      {/* Enhanced background overlay for better contrast */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#ca0013]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
        animate={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      
      {/* Desktop Deck Background Image - Large Design Element */}
      <div className="hidden md:block absolute top-0 right-0 w-56 h-56 md:w-96 md:h-96 opacity-[0.18] pointer-events-none z-[1] -mr-8 -mt-4">
        <Image
          src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 224px, (max-width: 1280px) 288px, (max-width: 1536px) 320px, 384px"
        />
      </div>
      
      {/* Additional contrast layer for text readability */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-20">
        <div className="w-full p-6 sm:p-8 md:p-10 text-left flex items-start gap-4 sm:gap-6">
          <div className="flex-shrink-0 mt-1">
            <motion.div
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ca0013] rounded-full"
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </div>

          <div className="flex-1 min-w-0 md:pr-40 lg:pr-52 xl:pr-60 2xl:pr-72">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <span 
                className="text-xs sm:text-sm uppercase tracking-wider text-[#1a1a1a]/80 font-bold"
                style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.7)' }}
              >
                {article.date}
              </span>
              <span 
                className="text-xs sm:text-sm uppercase tracking-wider px-3 sm:px-4 py-1.5 bg-[#ca0013] text-white rounded-full font-bold shadow-lg"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}
              >
                {cardLabel}
              </span>
            </div>

            <h3 
              className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a1a1a] mb-3 sm:mb-4 leading-tight group-hover:text-[#ca0013] transition-colors duration-300 tracking-tight"
              style={{
                textShadow: '0 1px 3px rgba(255, 255, 255, 0.8), 0 2px 6px rgba(255, 255, 255, 0.4)'
              }}
            >
              {article.title[language]}
            </h3>

            <div 
              className="max-w-2xl md:max-w-none tracking-tight text-base sm:text-lg md:text-xl text-[#1a1a1a]/90 leading-relaxed font-medium mb-4 sm:mb-6"
              style={{
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)'
              }}
              dangerouslySetInnerHTML={{ 
                __html: (() => {
                  let content = article.summary[language]
                  // Direct markdown to HTML conversion with brand colors
                  content = content.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 900; color: #ca0013; text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);">$1</strong>')
                  content = content.replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>')
                  // Add paragraph styling if needed
                  if (!content.includes('<p>')) {
                    content = `<p style="margin-bottom: 0.75rem; line-height: 1.7; text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);">${content}</p>`
                  }
                  return content
                })()
              }}
            />

            {/* Author inline */}
            {article.author && (
              <div className="mb-5 sm:mb-6">
                <span className="text-sm uppercase tracking-wider text-[#1a1a1a]/70 font-bold">{authorLabel}:</span>
                <span className="text-base sm:text-lg text-[#1a1a1a] ml-2 font-semibold">{article.author}</span>
              </div>
            )}

            {/* Action buttons inline */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6">
              <Link
                href={`/culturedeck/${article.slug}`}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#ca0013] text-white rounded-full hover:bg-[#ca0013]/90 hover:shadow-lg transition-all duration-300 font-bold text-sm sm:text-base uppercase tracking-wider transform hover:scale-105 w-auto self-start"
              >
                {readMoreLabel}
              </Link>

              {article.link && (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#ca0013] text-[#ca0013] rounded-full hover:bg-[#ca0013] hover:text-white hover:shadow-lg transition-all duration-300 font-bold text-sm sm:text-base uppercase tracking-wider transform hover:scale-105 w-auto self-start"
                >
                  {visitLinkLabel}
                </a>
              )}
            </div>

            {article.tags && (
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs sm:text-sm uppercase tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 bg-[#1a1a1a]/10 text-[#1a1a1a]/80 rounded-lg font-semibold hover:bg-[#ca0013]/10 hover:text-[#ca0013] transition-colors duration-200"
                  >
                    {translateTopic(tag, t)}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
