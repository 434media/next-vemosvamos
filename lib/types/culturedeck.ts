export type CardType = "el insight" | "la tendencia" | "el movimiento" | "el flavor" | "el takeaway" | "el podcast"

export interface CultureDeckArticle {
  id: string
  slug: string
  date: string
  title: {
    en: string
    es: string
  }
  type: CardType
  summary: {
    en: string
    es: string
  }
  content: {
    en: string
    es: string
  }
  author?: string
  tags?: string[]
  link?: string
  cardImage?: string
  
  // Newsletter-specific fields
  heroImage?: {
    desktop?: string
    mobile?: string
  }
  foundersNote?: {
    text: {
      en: string
      es: string
    }
    image?: string
  }
  lastMonthGif?: string
  theDropGif?: string
  featuredPost?: {
    title: {
      en: string
      es: string
    }
    content: {
      en: string
      es: string
    }
    image?: string
  }
  upcomingEvent?: {
    title: {
      en: string
      es: string
    }
    description: {
      en: string
      es: string
    }
    image?: string
    ctaText: {
      en: string
      es: string
    }
    ctaLink?: string
  }
  spotlights?: Array<{
    title: {
      en: string
      es: string
    }
    description: {
      en: string
      es: string
    }
    image?: string
    ctaText: {
      en: string
      es: string
    }
    ctaLink?: string
  }>
}

// Airtable-specific interfaces
export interface AirtableRecord {
  id: string
  createdTime: string
  fields: AirtableFields
}

export interface AirtableFields {
  // Core fields
  id: string
  published_date: string
  title: string
  "title-es": string
  type: CardType
  summary: string
  "summary-es": string
  authors?: string
  topics?: string | string[] | any
  slug: string
  status?: string
  
  // Image fields
  og_image?: Array<AirtableAttachment>
  hero_image_desktop?: Array<AirtableAttachment>
  hero_image_mobile?: Array<AirtableAttachment>
  
  // Founder's note
  founders_note_text?: string
  "founders_note_text-es"?: string
  founders_note_image?: Array<AirtableAttachment>
  
  // Visual content
  last_month_gif?: Array<AirtableAttachment>
  the_drop_gif?: Array<AirtableAttachment>
  
  // Featured post
  featured_post_title?: string
  "featured_post_title-es"?: string
  featured_post_image?: Array<AirtableAttachment>
  featured_post_content?: string
  "featured_post_content-es"?: string
  
  // Upcoming event
  upcoming_event_title?: string
  "upcoming_event_title-es"?: string
  upcoming_event_description?: string
  "upcoming_event_description-es"?: string
  upcoming_event_image?: Array<AirtableAttachment>
  upcoming_event_cta_text?: string
  "upcoming_event_cta_text-es"?: string
  upcoming_event_cta_link?: string
  
  // Spotlight sections
  spotlight_1_title?: string
  "spotlight_1_title-es"?: string
  spotlight_1_description?: string
  "spotlight_1_description-es"?: string
  spotlight_1_image?: Array<AirtableAttachment>
  spotlight_1_cta_text?: string
  "spotlight_1_cta_text-es"?: string
  spotlight_1_cta_link?: string
  
  spotlight_2_title?: string
  "spotlight_2_title-es"?: string
  spotlight_2_description?: string
  "spotlight_2_description-es"?: string
  spotlight_2_image?: Array<AirtableAttachment>
  spotlight_2_cta_text?: string
  "spotlight_2_cta_text-es"?: string
  spotlight_2_cta_link?: string
  
  spotlight_3_title?: string
  "spotlight_3_title-es"?: string
  spotlight_3_description?: string
  "spotlight_3_description-es"?: string
  spotlight_3_image?: Array<AirtableAttachment>
  spotlight_3_cta_text?: string
  "spotlight_3_cta_text-es"?: string
  spotlight_3_cta_link?: string
}

export interface AirtableAttachment {
  id: string
  url: string
  filename: string
  size: number
  type: string
  thumbnails?: {
    small: { url: string; width: number; height: number }
    large: { url: string; width: number; height: number }
    full: { url: string; width: number; height: number }
  }
}

export interface AirtableResponse {
  records: AirtableRecord[]
  offset?: string
}