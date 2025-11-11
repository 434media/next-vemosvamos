"use client"

import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../../lib/language-context"
import { safeFormatContent } from "../../lib/utils/content-formatter"
import type { CultureDeckArticle } from "../../lib/types/culturedeck"

// Utility function to translate topics
function translateTopic(topic: string, t: (key: string) => string): string {
  const topicKey = `topic.${topic}`
  const translated = t(topicKey)
  // If translation returns the key (not found), return original topic
  return translated === topicKey ? topic : translated
}

interface CultureDeckArticleContentProps {
  article: CultureDeckArticle
}

export function CultureDeckArticleContent({ article }: CultureDeckArticleContentProps) {
  const { t, language } = useLanguage()

  const cardTypeLabels: Record<string, string> = {
    "el insight": t("culturedeck.card.insight"),
    "la tendencia": t("culturedeck.card.tendencia"),
    "el movimiento": t("culturedeck.card.movimiento"),
    "el flavor": t("culturedeck.card.flavor"),
    "el takeaway": t("culturedeck.card.takeaway"),
    "el podcast": t("culturedeck.card.podcast"),
  }

  return (
    <div className="min-h-screen pt-20 pb-6">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.4 }}
          className="mb-4 md:mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#ca0013] hover:text-[#1a1a1a] hover:underline font-semibold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('culturedeck.backToHome')}
          </Link>
        </motion.div>

        <div className="space-y-8 md:space-y-12 lg:space-y-16">

          {/* Article Header - Mobile-first layout with image at top */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Meta Information */}
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-semibold">{article.date}</span>
                <span className="text-xs uppercase tracking-wider px-3 py-1 bg-[#ca0013] text-white rounded-full font-semibold">
                  {cardTypeLabels[article.type]}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
                {article.title[language]}
              </h1>

              {/* Mobile Image - Below title, above summary, aligned left with date/title */}
              {(article.cardImage || article.heroImage?.desktop || article.heroImage?.mobile) && (
                <div className="relative md:hidden mb-4 sm:mb-6 -mx-4 sm:-mx-6">
                  {/* Mobile Image - 4:5 aspect ratio with scale-down to prevent cropping */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={article.heroImage?.mobile || article.heroImage?.desktop || article.cardImage || ''}
                      alt={article.title[language]}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              )}

              {/* Summary */}
              <div 
                className="text-lg sm:text-xl md:text-2xl text-[#1a1a1a]/80 leading-relaxed mb-4 sm:mb-6 md:mb-8"
                dangerouslySetInnerHTML={{ 
                  __html: (() => {
                    let content = article.summary[language]
                    // Direct markdown to HTML conversion
                    content = content.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: 900; color: #ca0013;">$1</strong>')
                    content = content.replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>')
                    // Wrap in paragraph if not already wrapped
                    if (!content.includes('<p>')) {
                      content = `<p style="margin-bottom: 1rem; line-height: 1.6;">${content}</p>`
                    }
                    return content
                  })()
                }}
              />

              {/* Author */}
              {article.author && (
                <div className="flex items-center gap-2 text-base text-[#1a1a1a] mb-3 md:mb-4">
                  <span className="uppercase tracking-wider font-semibold text-[#ca0013]">{t("culturedeck.by")}</span>
                  <span className="font-medium">{article.author}</span>
                </div>
              )}

              {/* Tags */}
              {article.tags && (
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider px-3 py-1.5 bg-[#1a1a1a]/5 text-[#1a1a1a] rounded-full border border-[#1a1a1a]/10 hover:bg-[#ca0013]/10 hover:border-[#ca0013]/40/20 transition-colors"
                    >
                      {translateTopic(tag, t)}
                    </span>
                  ))}
                </div>
              )}

              {/* Desktop Image - Keep at bottom for desktop */}
              {(article.cardImage || article.heroImage?.desktop || article.heroImage?.mobile) && (
                <div className="relative w-full hidden md:block">
                  {/* Desktop Image - Optimized 16:9 aspect ratio */}
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                    <Image
                      src={article.heroImage?.desktop || article.cardImage || article.heroImage?.mobile || ''}
                      alt={article.title[language]}
                      fill
                      sizes="(max-width: 1200px) 90vw, 80vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          {/* Newsletter Spotlights - Following example pattern */}
          {article.spotlights && article.spotlights.length > 0 && (
            <div className="space-y-8">
              {article.spotlights.map((spotlight, index) => {
                // Client-specified loteria cards for spotlights
                const loteriaCardMap = [
                  'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Insight.png',    // First spotlight: El Insight
                  'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Tendencia.png',  // Second spotlight: La Tendencia
                  'https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Takeaway.png',   // Third spotlight: El Takeaway
                ]
                
                // Select specific card for this spotlight, fallback to cycling if more than 3 spotlights
                const selectedCard = loteriaCardMap[index] || loteriaCardMap[index % loteriaCardMap.length]
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className={`relative grid md:grid-cols-2 gap-6 md:gap-8 border-4 border-[#ca0013]/40 p-6 md:p-8 bg-white hover:bg-gray-50 transition-colors overflow-visible ${
                      index % 2 === 1 ? "md:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Loteria Card Sticker */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                      animate={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -12 : 15 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className={`absolute z-10 w-16 h-20 md:w-24 md:h-28 ${
                        index % 2 === 0 
                          ? "-right-4 -top-6 md:-right-10 md:-top-4" 
                          : "-left-4 -top-6 md:-left-14 md:-top-4"
                      }`}
                    >
                      <Image
                        src={selectedCard}
                        alt={`Loteria Card ${index + 1}`}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 768px) 64px, 80px"
                      />
                    </motion.div>

                    {spotlight.image && (
                      <div
                        className={`relative aspect-[4/5] border-4 border-[#ca0013]/40 overflow-hidden bg-gray-100 ${
                          index % 2 === 1 ? "md:col-start-2" : ""
                        }`}
                      >
                        <Image
                          src={spotlight.image}
                          alt={spotlight.title[language]}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#1a1a1a] leading-tight">
                        {spotlight.title[language]}
                      </h3>
                      <div
                        className="prose prose-base sm:prose-lg md:prose-xl max-w-none text-[#1a1a1a]/80 [&_p]:leading-relaxed [&_p]:mb-3 [&_strong]:font-bold [&_strong]:text-[#ca0013] [&_em]:italic [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-1 [&_li]:leading-relaxed [&_a]:text-[#ca0013] [&_a]:underline [&_a:hover]:text-[#1a1a1a]"
                        dangerouslySetInnerHTML={{ __html: safeFormatContent(spotlight.description[language]) }}
                      />
                      {/* {spotlight.ctaLink && (
                        <Link
                          href={spotlight.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#ca0013] text-white text-sm md:text-base uppercase tracking-wider font-bold hover:bg-[#1a1a1a] transition-all duration-300 w-fit rounded-lg shadow-md hover:shadow-lg group"
                        >
                          {spotlight.ctaText[language]}
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )} */}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Upcoming Event CTA - Following example pattern */}
          {article.upcomingEvent && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid md:grid-cols-2 gap-6 md:gap-8 border-4 border-[#ca0013]/40 bg-black text-white overflow-visible relative"
            >
              {/* 434 Featured Event Sticker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-5 -top-10 md:-top-8 md:-right-10 w-24 h-24 md:w-32 md:h-32 z-10"
              >
                <Image
                  src="https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/434Featured.png"
                  alt="434 Featured Event"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* El Movimiento Loteria Card Sticker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: -15 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -left-3 -top-8 md:-left-6 md:-top-10 w-16 h-20 md:w-20 md:h-24 z-10"
              >
                <Image
                  src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/Movimiento.png"
                  alt="El Movimiento Loteria Card"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 64px, 80px"
                />
              </motion.div>

              {article.upcomingEvent.image && (
                <div className="relative aspect-[4/5] bg-gray-800">
                  <Image
                    src={article.upcomingEvent.image}
                    alt={article.upcomingEvent.title[language]}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center p-6 md:p-8 space-y-4 md:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  {article.upcomingEvent.title[language]}
                </h3>
                <div 
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 prose prose-lg max-w-none [&_p]:mb-2 [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-white [&_em]:italic [&_em]:text-gray-100 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:space-y-1 [&_li]:leading-relaxed [&_a]:text-white [&_a]:underline [&_a:hover]:text-gray-200"
                  dangerouslySetInnerHTML={{ __html: safeFormatContent(article.upcomingEvent.description[language]) }}
                />
                {article.upcomingEvent.ctaLink && (
                  <Link
                    href={article.upcomingEvent.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm uppercase tracking-wider font-mono font-bold hover:bg-gray-200 transition-colors w-fit border-2 border-white group"
                  >
                    {article.upcomingEvent.ctaText[language]}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.section>
          )}


        </div>

        {/* Back to Vemos Vamos */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ca0013] text-white hover:bg-[#1a1a1a] transition-all duration-300 font-bold text-sm uppercase tracking-wider group rounded-lg shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('culturedeck.backToHome')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
