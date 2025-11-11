import Airtable from 'airtable'
import { formatContent } from '../utils/content-formatter'
import { transformArticleImageUrls } from '../utils/image-proxy'
import type { 
  CultureDeckArticle, 
  AirtableRecord, 
  AirtableFields, 
  CardType 
} from '../types/culturedeck'

// Lazy initialization to avoid environment variable issues at module load time
function getAirtableConfig() {
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
  const AIRTABLE_CULTURE_DECK_BASE_ID = process.env.AIRTABLE_CULTURE_DECK_BASE_ID
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_CULTURE_DECK_TABLE || 'culturedeck'

  if (!AIRTABLE_API_KEY) {
    throw new Error('AIRTABLE_API_KEY environment variable is required')
  }

  if (!AIRTABLE_CULTURE_DECK_BASE_ID) {
    throw new Error('AIRTABLE_CULTURE_DECK_BASE_ID environment variable is required')
  }

  // Configure Airtable
  Airtable.configure({
    apiKey: AIRTABLE_API_KEY,
  })

  const base = Airtable.base(AIRTABLE_CULTURE_DECK_BASE_ID)
  const table = base(AIRTABLE_TABLE_NAME)

  return { table, AIRTABLE_TABLE_NAME }
}

// Utility function to transform Airtable record to CultureDeckArticle
export function transformAirtableRecord(record: AirtableRecord): CultureDeckArticle {
  const fields = record.fields as AirtableFields
  
  // Parse topics from various possible formats
  let tags: string[] | undefined = undefined
  if (fields.topics) {
    try {
      if (typeof fields.topics === 'string') {
        tags = fields.topics.split(',').map(topic => topic.trim()).filter(Boolean)
      } else if (Array.isArray(fields.topics)) {
        tags = (fields.topics as any[]).map((topic: any) => String(topic).trim()).filter(Boolean)
      } else {
        tags = [String(fields.topics).trim()].filter(Boolean)
      }
    } catch (error) {
      console.warn('Error parsing topics field:', error)
      tags = undefined
    }
  }
  
  // Get image URLs if available
  const cardImage = fields.og_image && fields.og_image.length > 0
    ? fields.og_image[0].url
    : undefined

  // Build spotlights array from spotlight fields
  const spotlights = []
  for (let i = 1; i <= 3; i++) {
    const titleField = `spotlight_${i}_title` as keyof AirtableFields
    const titleEsField = `spotlight_${i}_title-es` as keyof AirtableFields
    const descField = `spotlight_${i}_description` as keyof AirtableFields
    const descEsField = `spotlight_${i}_description-es` as keyof AirtableFields
    const imageField = `spotlight_${i}_image` as keyof AirtableFields
    const ctaField = `spotlight_${i}_cta_text` as keyof AirtableFields
    const ctaEsField = `spotlight_${i}_cta_text-es` as keyof AirtableFields
    const linkField = `spotlight_${i}_cta_link` as keyof AirtableFields
    
    const title = fields[titleField] as string
    const titleEs = fields[titleEsField] as string
    
    if (title && titleEs) {
      spotlights.push({
        title: {
          en: title,
          es: titleEs,
        },
        description: {
          en: formatContent((fields[descField] as string) || ''),
          es: formatContent((fields[descEsField] as string) || ''),
        },
        image: fields[imageField] && (fields[imageField] as any[]).length > 0
          ? (fields[imageField] as any[])[0].url
          : undefined,
        ctaText: {
          en: (fields[ctaField] as string) || 'Learn More',
          es: (fields[ctaEsField] as string) || 'Aprende Más',
        },
        ctaLink: fields[linkField] as string,
      })
    }
  }

  return {
    id: fields.id,
    slug: fields.slug,
    date: fields.published_date,
    type: fields.type,
    title: {
      en: fields.title,
      es: fields["title-es"],
    },
    summary: {
      en: formatContent(fields.summary || ''),
      es: formatContent(fields["summary-es"] || ''),
    },
    content: {
      en: formatContent(fields.summary || ''), // Using summary as content for now
      es: formatContent(fields["summary-es"] || ''),
    },
    author: fields.authors,
    tags,
    link: undefined, // No direct link field in new structure
    cardImage,
    
    // Newsletter-specific fields
    heroImage: {
      desktop: fields.hero_image_desktop && fields.hero_image_desktop.length > 0
        ? fields.hero_image_desktop[0].url
        : undefined,
      mobile: fields.hero_image_mobile && fields.hero_image_mobile.length > 0
        ? fields.hero_image_mobile[0].url
        : undefined,
    },
    foundersNote: fields.founders_note_text && fields["founders_note_text-es"] ? {
      text: {
        en: formatContent(fields.founders_note_text),
        es: formatContent(fields["founders_note_text-es"]),
      },
      image: fields.founders_note_image && fields.founders_note_image.length > 0
        ? fields.founders_note_image[0].url
        : undefined,
    } : undefined,
    lastMonthGif: fields.last_month_gif && fields.last_month_gif.length > 0
      ? fields.last_month_gif[0].url
      : undefined,
    theDropGif: fields.the_drop_gif && fields.the_drop_gif.length > 0
      ? fields.the_drop_gif[0].url
      : undefined,
    featuredPost: fields.featured_post_title && fields["featured_post_title-es"] ? {
      title: {
        en: fields.featured_post_title,
        es: fields["featured_post_title-es"],
      },
      content: {
        en: formatContent(fields.featured_post_content || ''),
        es: formatContent(fields["featured_post_content-es"] || ''),
      },
      image: fields.featured_post_image && fields.featured_post_image.length > 0
        ? fields.featured_post_image[0].url
        : undefined,
    } : undefined,
    upcomingEvent: fields.upcoming_event_title && fields["upcoming_event_title-es"] ? {
      title: {
        en: fields.upcoming_event_title,
        es: fields["upcoming_event_title-es"],
      },
      description: {
        en: fields.upcoming_event_description || '',
        es: fields["upcoming_event_description-es"] || '',
      },
      image: fields.upcoming_event_image && fields.upcoming_event_image.length > 0
        ? fields.upcoming_event_image[0].url
        : undefined,
      ctaText: {
        en: fields.upcoming_event_cta_text || 'Learn More',
        es: fields["upcoming_event_cta_text-es"] || 'Aprende Más',
      },
      ctaLink: fields.upcoming_event_cta_link,
    } : undefined,
    spotlights: spotlights.length > 0 ? spotlights : undefined,
  }
}

// Fetch all culture deck articles from Airtable
export async function fetchCultureDeckArticles(): Promise<CultureDeckArticle[]> {
  try {
    const { table } = getAirtableConfig()
    const records: AirtableRecord[] = []
    
    // Fetch all records (handles pagination automatically)
    await table.select({
      // Sort by date in descending order (newest first)
      sort: [{ field: 'published_date', direction: 'desc' }],
      // Only fetch published articles
      filterByFormula: "AND({slug} != '', {title} != '', {title-es} != '', {status} = 'published')",
    }).eachPage((pageRecords, fetchNextPage) => {
      records.push(...pageRecords.map(record => ({
        id: record.id,
        createdTime: record._rawJson.createdTime,
        fields: record.fields as unknown as AirtableFields
      })))
      fetchNextPage()
    })

    // Transform records and apply image proxy URLs
    const articles = records.map(transformAirtableRecord)
    return articles.map(article => transformArticleImageUrls(article))
  } catch (error) {
    console.error('Error fetching culture deck articles from Airtable:', error)
    throw new Error('Failed to fetch articles from Airtable')
  }
}

// Fetch a single article by slug
export async function fetchArticleBySlug(slug: string): Promise<CultureDeckArticle | null> {
  try {
    const { table } = getAirtableConfig()
    const records = await table.select({
      filterByFormula: `{slug} = '${slug}'`,
      maxRecords: 1,
    }).firstPage()

    if (records.length === 0) {
      return null
    }

    const record = records[0]
    const article = transformAirtableRecord({
      id: record.id,
      createdTime: record._rawJson.createdTime,
      fields: record.fields as unknown as AirtableFields
    })
    
    // Apply image proxy transformation
    return transformArticleImageUrls(article)
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}" from Airtable:`, error)
    return null
  }
}

// Fetch articles by type
export async function fetchArticlesByType(type: CardType): Promise<CultureDeckArticle[]> {
  try {
    const { table } = getAirtableConfig()
    const records: AirtableRecord[] = []
    
    await table.select({
      filterByFormula: `{type} = '${type}'`,
      sort: [{ field: 'published_date', direction: 'desc' }],
    }).eachPage((pageRecords, fetchNextPage) => {
      records.push(...pageRecords.map(record => ({
        id: record.id,
        createdTime: record._rawJson.createdTime,
        fields: record.fields as unknown as AirtableFields
      })))
      fetchNextPage()
    })

    return records.map(transformAirtableRecord)
  } catch (error) {
    console.error(`Error fetching articles of type "${type}" from Airtable:`, error)
    throw new Error(`Failed to fetch ${type} articles from Airtable`)
  }
}

// Get available card types from Airtable (useful for dynamic filtering)
export async function fetchAvailableCardTypes(): Promise<CardType[]> {
  try {
    const { table } = getAirtableConfig()
    const records = await table.select({
      fields: ['type'],
    }).all()

    const types = new Set<CardType>()
    records.forEach(record => {
      const type = record.get('type') as CardType
      if (type) {
        types.add(type)
      }
    })

    return Array.from(types)
  } catch (error) {
    console.error('Error fetching available card types from Airtable:', error)
    return ['el insight', 'la tendencia', 'el movimiento', 'el flavor', 'el takeaway', 'el podcast']
  }
}