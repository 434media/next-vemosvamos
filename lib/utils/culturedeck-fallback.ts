import { fetchCultureDeckArticles, fetchArticleBySlug } from '../services/airtable'
import { allFallbackArticles } from '../../data/culturedeck/articles'
import type { CultureDeckArticle } from '../types/culturedeck'

// Helper function to check if a newsletter article has complete content
function isCompleteNewsletterArticle(article: CultureDeckArticle): boolean {
  if (article.type !== 'newsletter') return true // Non-newsletter articles are considered complete
  
  // For newsletter articles, check if they have the essential content sections
  return !!(
    article.spotlights && article.spotlights.length > 0 &&
    article.featuredPost &&
    article.upcomingEvent
  )
}

// Helper function to find article by slug in local data
function getLocalArticleBySlug(slug: string): CultureDeckArticle | null {
  return allFallbackArticles.find(article => article.slug === slug) || null
}

// Wrapper function that falls back to local data if Airtable fails
export async function getCultureDeckArticlesWithFallback(): Promise<CultureDeckArticle[]> {
  try {
    // Try to fetch from Airtable first
    const airtableArticles = await fetchCultureDeckArticles()
    
    // If we get articles from Airtable, return them
    if (airtableArticles && airtableArticles.length > 0) {
      console.log(`Successfully fetched ${airtableArticles.length} articles from Airtable`)
      return airtableArticles
    }
    
    // If Airtable returns empty, fall back to local data (sorted by date)
    console.log('Airtable returned no articles, falling back to local data')
    return allFallbackArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Airtable fetch failed, falling back to local data:', error)
    return allFallbackArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
}

// Wrapper function for single articles with fallback
export async function getArticleBySlugWithFallback(slug: string): Promise<CultureDeckArticle | null> {
  try {
    // Try to fetch from Airtable first
    const airtableArticle = await fetchArticleBySlug(slug)
    
    if (airtableArticle && isCompleteNewsletterArticle(airtableArticle)) {
      console.log(`Successfully fetched complete article "${slug}" from Airtable`)
      return airtableArticle
    }
    
    if (airtableArticle && !isCompleteNewsletterArticle(airtableArticle)) {
      console.log(`Article "${slug}" from Airtable is incomplete, falling back to local data`)
    } else {
      console.log(`Article "${slug}" not found in Airtable, checking local data`)
    }
    
    return getLocalArticleBySlug(slug)
  } catch (error) {
    console.error(`Airtable fetch failed for article "${slug}", falling back to local data:`, error)
    return getLocalArticleBySlug(slug)
  }
}