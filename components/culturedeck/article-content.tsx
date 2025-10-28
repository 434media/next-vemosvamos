"use client"

import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "../../lib/language-context"
import type { CultureDeckArticle } from "../../lib/types/culturedeck"

// Utility function to translate tags
function translateTag(tag: string, t: (key: string) => string): string {
  const tagKey = `tag.${tag}`
  const translated = t(tagKey)
  // If translation returns the key (not found), return original tag
  return translated === tagKey ? tag : translated
}

interface CultureDeckArticleContentProps {
  article: CultureDeckArticle
}

export function CultureDeckArticleContent({ article }: CultureDeckArticleContentProps) {
  const { t, language } = useLanguage()

  const cardTypeLabels: Record<string, string> = {
    insight: t("culturedeck.card.insight"),
    tendencia: t("culturedeck.card.tendencia"),
    movimiento: t("culturedeck.card.movimiento"),
    flavor: t("culturedeck.card.flavor"),
    takeaway: t("culturedeck.card.takeaway"),
    podcast: t("culturedeck.card.podcast"),
  }

  return (
    <div className="min-h-screen bg-[#eeebe3] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/culturedeck"
            className="inline-flex items-center gap-2 text-[#ca0013] hover:underline font-semibold mb-8"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("culturedeck.backToFeed")}
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {article.cardImage && (
            <motion.div
              className="w-full h-40 md:h-80 mx-auto mb-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <Image
                src={article.cardImage || "/placeholder.svg"}
                alt={article.title[language]}
                fill
                className="object-cover drop-shadow-2xl"
              />
            </motion.div>
          )}

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-semibold">{article.date}</span>
            <span className="text-xs uppercase tracking-wider px-3 py-1 bg-[#ca0013] text-white rounded-full font-semibold">
              {cardTypeLabels[article.type]}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 font-serif">{article.title[language]}</h1>

          <p className="text-xl text-[#1a1a1a]/80 leading-relaxed mb-6">{article.summary[language]}</p>

          {article.author && (
            <div className="flex items-center gap-2 text-sm text-[#1a1a1a]/60">
              <span className="uppercase tracking-wider font-semibold">{t("culturedeck.by")}</span>
              <span className="text-[#1a1a1a]">{article.author}</span>
            </div>
          )}

          {article.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider px-3 py-1 bg-[#1a1a1a]/10 text-[#1a1a1a] rounded-full"
                >
                  {translateTag(tag, t)}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Article Content */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="prose prose-lg max-w-none">
            <div className="text-[#1a1a1a]/90 leading-relaxed whitespace-pre-line">{article.content[language]}</div>
          </div>

          {article.link && (
            <div className="mt-8 pt-8 border-t border-[#1a1a1a]/10">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#ca0013] text-white rounded-full hover:bg-[#ca0013]/90 transition-colors font-semibold text-sm uppercase tracking-wider"
              >
                {t("culturedeck.visitExternalLink")}
              </a>
            </div>
          )}
        </motion.div>

        {/* Back to Feed */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/culturedeck"
            className="inline-block px-6 py-3 border-2 border-[#ca0013] text-[#ca0013] rounded-full hover:bg-[#ca0013] hover:text-white transition-colors font-semibold text-sm uppercase tracking-wider"
          >
            {t("culturedeck.backToFeed")}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
