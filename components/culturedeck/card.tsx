"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { safeFormatContent } from "../../lib/utils/content-formatter"
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
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#ca0013]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
        animate={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <div className="relative z-10">
      <button onClick={onToggle} className="w-full p-4 sm:p-6 md:p-8 text-left flex items-start gap-4 sm:gap-6 group hover:bg-[#eeebe3]/20 transition-all duration-300">
        <div className="flex-shrink-0 mt-1">
          <motion.div
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ca0013] rounded-full"
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-bold">{article.date}</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1 bg-[#ca0013] text-white rounded-full font-bold">
              {cardLabel}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1a1a1a] mb-2 sm:mb-3 leading-tight group-hover:text-[#ca0013] transition-colors duration-300">
            {article.title[language]}
          </h3>

          <div 
            className="max-w-lg text-balance tracking-tighter text-base text-[#1a1a1a]/80 leading-relaxed font-medium [&_p]:mb-2 [&_strong]:font-bold [&_strong]:text-[#1a1a1a]"
            dangerouslySetInnerHTML={{ __html: safeFormatContent(article.summary[language]) }}
          />

          {article.tags && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1 bg-[#1a1a1a]/8 text-[#1a1a1a]/80 rounded-md font-semibold hover:bg-[#ca0013]/10 hover:text-[#ca0013] transition-colors duration-200"
                >
                  {translateTopic(tag, t)}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 mt-1">
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full group-hover:bg-[#ca0013]/10 transition-colors duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a1a1a] group-hover:text-[#ca0013] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pl-8 sm:pl-12 md:pl-16">
              {/* Only show content if it's different from summary */}
              {article.content[language] !== article.summary[language] && (
                <div className="mb-4 sm:mb-6">
                  <div 
                    className="text-sm sm:text-base text-[#1a1a1a]/90 leading-relaxed font-medium [&_p]:mb-3 [&_strong]:font-bold [&_strong]:text-[#1a1a1a] [&_ul]:list-disc [&_ul]:ml-4 [&_li]:mb-2"
                    dangerouslySetInnerHTML={{ __html: safeFormatContent(article.content[language]) }}
                  />
                </div>
              )}

              {article.author && (
                <div className="mb-4 sm:mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-bold">{authorLabel}:</span>
                  <span className="text-sm sm:text-base text-[#1a1a1a] ml-2 font-semibold">{article.author}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={`/culturedeck/${article.slug}`}
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#ca0013] text-white rounded-full hover:bg-[#ca0013]/90 hover:shadow-lg transition-all duration-300 font-bold text-xs sm:text-sm uppercase tracking-wider text-center transform hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  {readMoreLabel}
                </Link>

                {article.link && (
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#ca0013] text-[#ca0013] rounded-full hover:bg-[#ca0013] hover:text-white hover:shadow-lg transition-all duration-300 font-bold text-xs sm:text-sm uppercase tracking-wider text-center transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {visitLinkLabel}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  )
}
