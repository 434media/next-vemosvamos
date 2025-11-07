"use client"

import { useState, useMemo } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useLanguage } from "../../lib/language-context"
import type { CultureDeckArticle, CardType } from "../../lib/types/culturedeck"
import { CultureDeckHero } from "./hero"
import { CultureDeckFilter } from "./filter"
import { CultureDeckCard } from "./card"
import ConnectForm from "../connect-form"

interface CultureDeckPageClientProps {
  articles: CultureDeckArticle[]
}

export function CultureDeckPageClient({ articles }: CultureDeckPageClientProps) {
  const { t, language } = useLanguage()
  const [selectedFilter, setSelectedFilter] = useState<CardType | "all">("all")
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

    const cardTypes: { type: CardType | "all"; label: string; description: string; icon: string; image: string }[] = [
    {
      type: "all",
      label: t("culturedeck.allCards"),
      description: "",
      icon: "🃏",
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
    },
    {
      type: "el insight",
      label: t("culturedeck.card.insight"),
      description: t("culturedeck.card.insight.description"),
      icon: "💡",
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
    },
    {
      type: "la tendencia",
      label: t("culturedeck.card.tendencia"),
      description: t("culturedeck.card.tendencia.description"),
      icon: "♣️",
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
    },
    {
      type: "el movimiento",
      label: t("culturedeck.card.movimiento"),
      description: t("culturedeck.card.movimiento.description"),
      icon: "♥️",
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
    },
    {
      type: "el flavor",
      label: t("culturedeck.card.flavor"),
      description: t("culturedeck.card.flavor.description"),
      icon: "♦️",
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
    },
    {
      type: "el takeaway",
      label: t("culturedeck.card.takeaway"),
      description: t("culturedeck.card.takeaway.description"),
      icon: "🪄",
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
    },
    {
      type: "el podcast",
      label: t("culturedeck.card.podcast"),
      description: t("culturedeck.card.podcast.description"),
      icon: "🎙️",
      image: "https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/vv-deck.png"
    },
  ]

  const filteredArticles = useMemo(() => {
    if (selectedFilter === 'all') {
      return articles
    }
    return articles.filter((article) => article.type === selectedFilter)
  }, [articles, selectedFilter])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const getCardTypeInfo = (type: CardType) => {
    return cardTypes.find((ct) => ct.type === type) || cardTypes[0]
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Full Width */}
      <CultureDeckHero />
      
      {/* Filter Cards Overlay - Absolute positioning across hero/content boundary */}
      <CultureDeckFilter
        cardTypes={cardTypes}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        filterLabel={t("culturedeck.filterLabel")}
        clearFiltersLabel={t("culturedeck.clearFilters")}
      />
      
      {/* Main Content Container with Dynamic Background */}
      <div className="relative">
        {/* Background Images - Dynamic Height Coverage */}
        <div className="absolute inset-0 w-full z-0" style={{ 
          minHeight: filteredArticles.length <= 2 ? '60vh' : '100vh' 
        }}>
          {/* Desktop Background */}
          <Image
            src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/desktop-shapes.png"
            alt=""
            fill
            className="hidden md:block object-cover opacity-0"
            quality={90}
            sizes="100vw"
          />
          {/* Mobile Background */}
          <Image
            src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/mobile-shapes.png"
            alt=""
            fill
            className="block md:hidden object-cover opacity-0"
            quality={90}
            sizes="100vw"
          />
          {/* Overlay for better content contrast */}
          <div className="absolute inset-0 bg-white/20" />
        </div>
        
        {/* Content Layer - Dynamic Spacing */}
        <div className={`relative z-10 max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 pt-24 md:pt-24 ${
          filteredArticles.length <= 2 
            ? 'pb-4 sm:pb-6 md:pb-8' 
            : 'pb-8 sm:pb-12 md:pb-16'
        }`}>

          {/* Feed Section - Dynamic Bottom Margin */}
          <motion.div
            className={`bg-white rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm ${
              filteredArticles.length <= 2 
                ? 'mb-4 sm:mb-6 md:mb-8' 
                : 'mb-8 sm:mb-12 md:mb-16'
            }`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div 
              className="p-4 sm:p-6 md:p-8 border-b border-[#1a1a1a]/8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {t("culturedeck.title")}
                <motion.sup 
                  className="text-xs sm:text-sm md:text-base ml-2 text-[#ca0013] font-bold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9, type: "spring", stiffness: 200 }}
                >
                  ({filteredArticles.length} {t("culturedeck.issueCount")})
                </motion.sup>
              </motion.h2>
            </motion.div>

            <motion.div 
              className="divide-y divide-[#1a1a1a]/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((article: CultureDeckArticle, index: number) => {
                  const cardInfo = getCardTypeInfo(article.type)
                  return (
                    <motion.div
                      key={`${article.id}-${selectedFilter}`}
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.08,
                          ease: "easeOut"
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -10, 
                        scale: 0.98,
                        transition: {
                          duration: 0.3
                        }
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut"
                        }
                      }}
                      viewport={{ once: false, amount: 0.3 }}
                      layout
                    >
                      <CultureDeckCard
                        article={article}
                        cardLabel={cardInfo.label}
                        isExpanded={expandedItems.has(article.id)}
                        onToggle={() => toggleExpanded(article.id)}
                        index={index}
                        readMoreLabel={t("culturedeck.readMore")}
                        visitLinkLabel={t("culturedeck.visitLink")}
                        authorLabel={t("culturedeck.author")}
                        t={t}
                        language={language}
                      />
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Connect Form - Optimized Spacing */}
      <div className={`${filteredArticles.length <= 2 ? 'mt-4 sm:mt-6 md:mt-8' : ''}`}>
        <ConnectForm />
      </div>
    </div>
  )
}