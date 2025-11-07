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
      
      {/* Main Content Container with Background */}
      <div className="relative min-h-screen pb-16">
        {/* Background Images - Full Viewport Coverage */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Desktop Background */}
          <Image
            src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/desktop-mouth.png"
            alt=""
            fill
            className="hidden md:block object-cover"
            quality={90}
            sizes="100vw"
          />
          {/* Mobile Background */}
          <Image
            src="https://ampd-asset.s3.us-east-2.amazonaws.com/culturedeck/mobile-mouth.png"
            alt=""
            fill
            className="block md:hidden object-cover"
            quality={90}
            sizes="100vw"
          />
          {/* Overlay for better content contrast */}
          <div className="absolute inset-0 bg-white/20" />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">

          {/* Feed Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 border-b border-[#1a1a1a]/10">
              <h2 className="text-2xl font-bold text-[#1a1a1a]">
                {t("culturedeck.title")}
                <sup className="text-sm ml-2 text-[#ca0013]">
                  ({filteredArticles.length} {t("culturedeck.issueCount")})
                </sup>
              </h2>
            </div>

            <div className="divide-y divide-[#1a1a1a]/10">
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((article: CultureDeckArticle, index: number) => {
                  const cardInfo = getCardTypeInfo(article.type)
                  return (
                    <CultureDeckCard
                      key={article.id}
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
                  )
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="-mt-16 md:mt-10">
        <ConnectForm />
      </div>
    </div>
  )
}