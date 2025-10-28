export type CardType = "insight" | "tendencia" | "movimiento" | "flavor" | "takeaway" | "podcast"

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
}

// Airtable-specific interfaces
export interface AirtableRecord {
  id: string
  createdTime: string
  fields: AirtableFields
}

export interface AirtableFields {
  // Basic fields
  Slug: string
  Date: string
  Type: CardType
  Author?: string
  Link?: string
  Tags?: string
  
  // English fields
  "Title (EN)": string
  "Summary (EN)": string
  "Content (EN)": string
  
  // Spanish fields
  "Title (ES)": string
  "Summary (ES)": string
  "Content (ES)": string
  
  // Optional image
  "Card Image"?: Array<{
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
  }>
}

export interface AirtableResponse {
  records: AirtableRecord[]
  offset?: string
}