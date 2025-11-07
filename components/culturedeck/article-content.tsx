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
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link
            href="/culturedeck"
            className="inline-flex items-center gap-2 text-[#ca0013] hover:text-[#1a1a1a] hover:underline font-semibold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'es' ? 'Volver a Culture Deck' : 'Back to Culture Deck'}
          </Link>
        </motion.div>

        <div className="space-y-16 md:space-y-24">

          {/* Article Header - Always show, with improved layout */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12 border border-gray-200"
          >
            {/* Meta Information */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-semibold">{article.date}</span>
              <span className="text-xs uppercase tracking-wider px-3 py-1 bg-[#ca0013] text-white rounded-full font-semibold">
                {cardTypeLabels[article.type]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-4 sm:mb-6 leading-tight tracking-tight">
              {article.title[language]}
            </h1>

            {/* Summary */}
            <div 
              className="text-lg sm:text-xl md:text-2xl text-[#1a1a1a]/80 leading-relaxed mb-6 sm:mb-8 [&_p]:mb-3 [&_strong]:font-bold [&_strong]:text-[#ca0013]"
              dangerouslySetInnerHTML={{ __html: safeFormatContent(article.summary[language]) }}
            />

            {/* Author */}
            {article.author && (
              <div className="flex items-center gap-2 text-base text-[#1a1a1a] mb-4">
                <span className="uppercase tracking-wider font-semibold text-[#ca0013]">{t("culturedeck.by")}</span>
                <span className="font-medium">{article.author}</span>
              </div>
            )}

            {/* Tags */}
            {article.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-wider px-3 py-1.5 bg-[#1a1a1a]/5 text-[#1a1a1a] rounded-full border border-[#1a1a1a]/10 hover:bg-[#ca0013]/10 hover:border-[#ca0013]/20 transition-colors"
                  >
                    {translateTopic(tag, t)}
                  </span>
                ))}
              </div>
            )}

            {/* Main Image - Now after title, summary, and meta */}
            {(article.cardImage || article.heroImage?.desktop || article.heroImage?.mobile) && (
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                <Image
                  src={article.heroImage?.desktop || article.heroImage?.mobile || article.cardImage || ''}
                  alt={article.title[language]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.section>

          {/* Founder's Note Section */}
          {article.foundersNote && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl shadow-lg p-6 md:p-8 lg:p-12 bg-white border border-gray-200 relative"
            >
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8 border-b-2 border-[#ca0013] pb-4 text-[#1a1a1a]">
                {language === 'es' ? "Nota del Fundador" : "Founder's Note"}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <div
                    className="prose prose-lg max-w-none text-gray-800 [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:font-bold [&_strong]:text-black [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:leading-relaxed md:tracking-tighter"
                    dangerouslySetInnerHTML={{ __html: safeFormatContent(article.foundersNote.text[language]) }}
                  />
                </div>
                {article.foundersNote.image && (
                  <div className="relative aspect-[4/5] rounded-lg overflow-visible bg-gray-100 shadow-lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: -8 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-32 h-16 md:w-40 md:h-20 z-10"
                    >
                      <Image
                        src="https://ampd-asset.s3.us-east-2.amazonaws.com/The+Feed/ActionsSpeakLouder.png"
                        alt="Actions Speak Louder"
                        fill
                        className="object-contain drop-shadow-lg"
                      />
                    </motion.div>
                    <Image
                      src={article.foundersNote.image}
                      alt="Founder's note"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* Last Month in Motion */}
          {article.lastMonthGif && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="relative w-full aspect-[3/1] border-4 border-black overflow-hidden bg-gray-100">
                <Image
                  src={article.lastMonthGif}
                  alt="Last month in motion"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="sr-only">Last Month in Motion</span>
                </div>
              </div>
            </motion.section>
          )}

          {/* Newsletter Spotlights */}
          {article.spotlights && article.spotlights.length > 0 && (
            <div className="space-y-8">
              {article.spotlights.map((spotlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`grid md:grid-cols-2 gap-6 md:gap-8 rounded-xl shadow-lg p-6 md:p-8 bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {spotlight.image && (
                    <div
                      className={`relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 shadow-lg ${
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
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#1a1a1a]">
                      {spotlight.title[language]}
                    </h3>
                    <div
                      className="prose prose-lg max-w-none text-[#1a1a1a]/80 [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:font-bold [&_strong]:text-[#ca0013] [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: safeFormatContent(spotlight.description[language]) }}
                    />
                    {spotlight.ctaLink && (
                      <Link
                        href={spotlight.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#ca0013] text-white text-sm uppercase tracking-wider font-bold hover:bg-[#1a1a1a] transition-all duration-300 w-fit rounded-lg shadow-md hover:shadow-lg group"
                      >
                        {spotlight.ctaText[language]}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Featured Post */}
          {article.featuredPost && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="border-4 border-black bg-white overflow-hidden"
            >
              {article.featuredPost.image && (
                <div className="relative w-full aspect-[2/1] bg-gray-100">
                  <Image
                    src={article.featuredPost.image}
                    alt={article.featuredPost.title[language]}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 md:p-8 lg:p-12 space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-mono uppercase tracking-tight border-b-4 border-black pb-4">
                  {article.featuredPost.title[language]}
                </h2>
                <div
                  className="prose prose-lg max-w-none text-gray-800 [&_p]:leading-relaxed [&_p]:mb-4 [&_strong]:font-bold [&_strong]:text-black [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: safeFormatContent(article.featuredPost.content[language]) }}
                />
              </div>
            </motion.section>
          )}

          {/* The Drop */}
          {article.theDropGif && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-8"
            >
              <div className="relative w-full aspect-[3/1] border-4 border-black overflow-hidden bg-gray-100">
                <Image 
                  src={article.theDropGif} 
                  alt="The Drop" 
                  fill 
                  className="object-cover" 
                  unoptimized 
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="sr-only">The Drop</span>
                </div>
              </div>
            </motion.section>
          )}

          {/* Upcoming Event CTA */}
          {article.upcomingEvent && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid md:grid-cols-2 gap-6 md:gap-8 border-4 border-black bg-black text-white overflow-visible relative"
            >
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
              <div className="flex flex-col justify-center p-6 md:p-8 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-mono uppercase tracking-tighter text-balance">
                  {article.upcomingEvent.title[language]}
                </h3>
                <p className="text-base leading-relaxed text-gray-200">
                  {article.upcomingEvent.description[language]}
                </p>
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

        {/* Back to Culture Deck */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/culturedeck"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ca0013] text-white hover:bg-[#1a1a1a] transition-all duration-300 font-bold text-sm uppercase tracking-wider group rounded-lg shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'es' ? 'Volver a Culture Deck' : 'Back to Culture Deck'}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
