import Airtable from 'airtable'
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
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_CULTURE_DECK_TABLE || 'CultureDeck'

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
  
  // Parse tags from comma-separated string
  const tags = fields.Tags 
    ? fields.Tags.split(',').map(tag => tag.trim()).filter(Boolean)
    : undefined
  
  // Get card image URL if available
  const cardImage = fields["Card Image"] && fields["Card Image"].length > 0
    ? fields["Card Image"][0].url
    : undefined

  return {
    id: record.id,
    slug: fields.Slug,
    date: fields.Date,
    type: fields.Type,
    title: {
      en: fields["Title (EN)"],
      es: fields["Title (ES)"],
    },
    summary: {
      en: fields["Summary (EN)"],
      es: fields["Summary (ES)"],
    },
    content: {
      en: fields["Content (EN)"],
      es: fields["Content (ES)"],
    },
    author: fields.Author,
    tags,
    link: fields.Link,
    cardImage,
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
      sort: [{ field: 'Date', direction: 'desc' }],
      // Only fetch published articles (you can add a "Published" boolean field if needed)
      filterByFormula: "AND({Slug} != '', {Title (EN)} != '', {Title (ES)} != '')",
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
    console.error('Error fetching culture deck articles from Airtable:', error)
    throw new Error('Failed to fetch articles from Airtable')
  }
}

// Fetch a single article by slug
export async function fetchArticleBySlug(slug: string): Promise<CultureDeckArticle | null> {
  try {
    const { table } = getAirtableConfig()
    const records = await table.select({
      filterByFormula: `{Slug} = '${slug}'`,
      maxRecords: 1,
    }).firstPage()

    if (records.length === 0) {
      return null
    }

    const record = records[0]
    return transformAirtableRecord({
      id: record.id,
      createdTime: record._rawJson.createdTime,
      fields: record.fields as unknown as AirtableFields
    })
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
      filterByFormula: `{Type} = '${type}'`,
      sort: [{ field: 'Date', direction: 'desc' }],
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
      fields: ['Type'],
    }).all()

    const types = new Set<CardType>()
    records.forEach(record => {
      const type = record.get('Type') as CardType
      if (type) {
        types.add(type)
      }
    })

    return Array.from(types)
  } catch (error) {
    console.error('Error fetching available card types from Airtable:', error)
    return ['insight', 'tendencia', 'movimiento', 'flavor', 'takeaway', 'podcast']
  }
}