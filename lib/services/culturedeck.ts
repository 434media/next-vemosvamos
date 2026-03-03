import { db } from './firebase'
import { formatContent } from '../utils/content-formatter'
import type { CultureDeckArticle, CardType } from '../types/culturedeck'

const COLLECTION = 'culturedeck'

// Transform a Firestore document to CultureDeckArticle
function transformFirestoreDoc(doc: FirebaseFirestore.DocumentSnapshot): CultureDeckArticle {
  const data = doc.data()
  if (!data) {
    throw new Error(`Document ${doc.id} has no data`)
  }

  // Parse topics
  let tags: string[] | undefined = undefined
  if (data.topics) {
    if (typeof data.topics === 'string') {
      tags = data.topics.split(',').map((t: string) => t.trim()).filter(Boolean)
    } else if (Array.isArray(data.topics)) {
      tags = data.topics.map((t: any) => String(t).trim()).filter(Boolean)
    }
  }

  // Build spotlights array
  const spotlights: CultureDeckArticle['spotlights'] = []
  for (let i = 1; i <= 3; i++) {
    const title = data[`spotlight_${i}_title`]
    const titleEs = data[`spotlight_${i}_title-es`]
    if (title && titleEs) {
      spotlights.push({
        title: { en: title, es: titleEs },
        description: {
          en: formatContent(data[`spotlight_${i}_description`] || ''),
          es: formatContent(data[`spotlight_${i}_description-es`] || ''),
        },
        image: data[`spotlight_${i}_image`] || undefined,
        ctaText: {
          en: data[`spotlight_${i}_cta_text`] || 'Learn More',
          es: data[`spotlight_${i}_cta_text-es`] || 'Aprende Más',
        },
        ctaLink: data[`spotlight_${i}_cta_link`],
      })
    }
  }

  return {
    id: data.id || doc.id,
    slug: data.slug,
    date: data.published_date,
    type: data.type,
    title: {
      en: data.title,
      es: data['title-es'],
    },
    summary: {
      en: formatContent(data.summary || ''),
      es: formatContent(data['summary-es'] || ''),
    },
    content: {
      en: formatContent(data.summary || ''),
      es: formatContent(data['summary-es'] || ''),
    },
    author: data.authors,
    tags,
    cardImage: data.og_image || undefined,
    heroImage: {
      desktop: data.hero_image_desktop || undefined,
      mobile: data.hero_image_mobile || undefined,
    },
    foundersNote: data.founders_note_text && data['founders_note_text-es'] ? {
      text: {
        en: formatContent(data.founders_note_text),
        es: formatContent(data['founders_note_text-es']),
      },
      image: data.founders_note_image || undefined,
    } : undefined,
    lastMonthGif: data.last_month_gif || undefined,
    theDropGif: data.the_drop_gif || undefined,
    featuredPost: data.featured_post_title && data['featured_post_title-es'] ? {
      title: {
        en: data.featured_post_title,
        es: data['featured_post_title-es'],
      },
      content: {
        en: formatContent(data.featured_post_content || ''),
        es: formatContent(data['featured_post_content-es'] || ''),
      },
      image: data.featured_post_image || undefined,
    } : undefined,
    upcomingEvent: data.upcoming_event_title && data['upcoming_event_title-es'] ? {
      title: {
        en: data.upcoming_event_title,
        es: data['upcoming_event_title-es'],
      },
      description: {
        en: data.upcoming_event_description || '',
        es: data['upcoming_event_description-es'] || '',
      },
      image: data.upcoming_event_image || undefined,
      ctaText: {
        en: data.upcoming_event_cta_text || 'Learn More',
        es: data['upcoming_event_cta_text-es'] || 'Aprende Más',
      },
      ctaLink: data.upcoming_event_cta_link,
    } : undefined,
    spotlights: spotlights.length > 0 ? spotlights : undefined,
  }
}

// Fetch all culture deck articles from Firestore
export async function fetchCultureDeckArticles(): Promise<CultureDeckArticle[]> {
  try {
    const snapshot = await db
      .collection(COLLECTION)
      .where('status', '==', 'published')
      .orderBy('published_date', 'desc')
      .get()

    return snapshot.docs.map(transformFirestoreDoc)
  } catch (error) {
    console.error('Error fetching culture deck articles from Firestore:', error)
    throw new Error('Failed to fetch articles from Firestore')
  }
}

// Fetch a single article by slug
export async function fetchArticleBySlug(slug: string): Promise<CultureDeckArticle | null> {
  try {
    const snapshot = await db
      .collection(COLLECTION)
      .where('slug', '==', slug)
      .limit(1)
      .get()

    if (snapshot.empty) {
      return null
    }

    return transformFirestoreDoc(snapshot.docs[0])
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}" from Firestore:`, error)
    return null
  }
}

// Fetch articles by type
export async function fetchArticlesByType(type: CardType): Promise<CultureDeckArticle[]> {
  try {
    const snapshot = await db
      .collection(COLLECTION)
      .where('type', '==', type)
      .orderBy('published_date', 'desc')
      .get()

    return snapshot.docs.map(transformFirestoreDoc)
  } catch (error) {
    console.error(`Error fetching articles of type "${type}" from Firestore:`, error)
    throw new Error(`Failed to fetch ${type} articles from Firestore`)
  }
}

// Get available card types from Firestore
export async function fetchAvailableCardTypes(): Promise<CardType[]> {
  try {
    const snapshot = await db.collection(COLLECTION).select('type').get()
    const types = new Set<CardType>()
    snapshot.docs.forEach(doc => {
      const type = doc.data().type as CardType
      if (type) types.add(type)
    })
    return Array.from(types)
  } catch (error) {
    console.error('Error fetching available card types from Firestore:', error)
    return ['el insight', 'la tendencia', 'el movimiento', 'el flavor', 'el takeaway', 'el podcast']
  }
}
