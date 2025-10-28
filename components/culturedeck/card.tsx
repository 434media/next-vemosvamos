"use client"

import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import type { CultureDeckArticle } from "../../lib/types/culturedeck"

// Utility function to translate tags
function translateTag(tag: string, t: (key: string) => string): string {
  const tagKey = `tag.${tag}`
  const translated = t(tagKey)
  // If translation returns the key (not found), return original tag
  return translated === tagKey ? tag : translated
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="hover:bg-[#eeebe3]/30 transition-colors"
    >
      <button onClick={onToggle} className="w-full p-6 text-left flex items-start gap-4">
        <div className="flex-shrink-0">
          <motion.div
            className="w-3 h-3 bg-[#ca0013] rounded-full"
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-semibold">{article.date}</span>
            <span className="text-xs uppercase tracking-wider px-3 py-1 bg-[#ca0013] text-white rounded-full font-semibold">
              {cardLabel}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{article.title[language]}</h3>

          <p className="text-sm text-[#1a1a1a]/80 leading-relaxed">{article.summary[language]}</p>

          {article.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider px-2 py-1 bg-[#1a1a1a]/10 text-[#1a1a1a] rounded"
                >
                  {translateTag(tag, t)}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex-shrink-0">
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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
            <div className="px-6 pb-6 pl-16">
              <div className="mb-4">
                <p className="text-sm text-[#1a1a1a]/90 leading-relaxed whitespace-pre-line">
                  {article.content[language]}
                </p>
              </div>

              {article.author && (
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-semibold">{authorLabel}:</span>
                  <span className="text-sm text-[#1a1a1a] ml-2">{article.author}</span>
                </div>
              )}

              <div className="flex gap-3">
                <Link
                  href={`/culturedeck/${article.slug}`}
                  className="inline-block px-6 py-2 bg-[#ca0013] text-white rounded-full hover:bg-[#ca0013]/90 transition-colors font-semibold text-sm uppercase tracking-wider"
                  onClick={(e) => e.stopPropagation()}
                >
                  {readMoreLabel}
                </Link>

                {article.link && (
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 border-2 border-[#ca0013] text-[#ca0013] rounded-full hover:bg-[#ca0013] hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider"
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
    </motion.div>
  )
}
