import { fetchCultureDeckArticles, fetchArticleBySlug } from '../services/airtable'
import { articles as localArticles, getArticleBySlug as getLocalArticleBySlug } from '../../data/culturedeck/articles'
import type { CultureDeckArticle } from '../types/culturedeck'

// Wrapper function that falls back to local data if Airtable fails
export async function getCultureDeckArticlesWithFallback(): Promise<CultureDeckArticle[]> {
  try {
    // Try to fetch from Airtable first
    const airtableArticles = await fetchCultureDeckArticles()
    
    // If we get articles from Airtable, return them
    if (airtableArticles && airtableArticles.length > 0) {
      return airtableArticles
    }
    
    // If Airtable returns empty, fall back to local data
    console.log('Airtable returned no articles, falling back to local data')
    return localArticles
  } catch (error) {
    console.error('Airtable fetch failed, falling back to local data:', error)
    return localArticles
  }
}

// Wrapper function for single articles with fallback
export async function getArticleBySlugWithFallback(slug: string): Promise<CultureDeckArticle | null> {
  try {
    // Try to fetch from Airtable first
    const airtableArticle = await fetchArticleBySlug(slug)
    
    if (airtableArticle) {
      return airtableArticle
    }
    
    // If not found in Airtable, check local data
    console.log(`Article "${slug}" not found in Airtable, checking local data`)
    return getLocalArticleBySlug(slug) || null
  } catch (error) {
    console.error(`Airtable fetch failed for article "${slug}", falling back to local data:`, error)
    return getLocalArticleBySlug(slug) || null
  }
}