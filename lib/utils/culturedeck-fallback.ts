import { fetchCultureDeckArticles, fetchArticleBySlug } from '../services/culturedeck'
import { allFallbackArticles } from '../../data/culturedeck/articles'
import type { CultureDeckArticle } from '../types/culturedeck'

// Helper function to check if a newsletter article has complete content
function isCompleteNewsletterArticle(article: CultureDeckArticle): boolean {
  // All article types are now considered complete by default
  // since we removed the newsletter type distinction
  return true
}

// Helper function to find article by slug in local data
function getLocalArticleBySlug(slug: string): CultureDeckArticle | null {
  return allFallbackArticles.find(article => article.slug === slug) || null
}

// Wrapper function that falls back to local data if Firestore fails
export async function getCultureDeckArticlesWithFallback(): Promise<CultureDeckArticle[]> {
  try {
    // Try to fetch from Firestore first
    const articles = await fetchCultureDeckArticles()
    
    // If we get articles from Firestore, return them
    if (articles && articles.length > 0) {
      console.log(`Successfully fetched ${articles.length} articles from Firestore`)
      return articles
    }
    
    // If Firestore returns empty, fall back to local data (sorted by date)
    console.log('Firestore returned no articles, falling back to local data')
    return allFallbackArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Firestore fetch failed, falling back to local data:', error)
    return allFallbackArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
}

// Wrapper function for single articles with fallback
export async function getArticleBySlugWithFallback(slug: string): Promise<CultureDeckArticle | null> {
  try {
    // Try to fetch from Firestore first
    const article = await fetchArticleBySlug(slug)
    
    if (article && isCompleteNewsletterArticle(article)) {
      console.log(`Successfully fetched complete article "${slug}" from Firestore`)
      return article
    }
    
    if (article && !isCompleteNewsletterArticle(article)) {
      console.log(`Article "${slug}" from Firestore is incomplete, falling back to local data`)
    } else {
      console.log(`Article "${slug}" not found in Firestore, checking local data`)
    }
    
    return getLocalArticleBySlug(slug)
  } catch (error) {
    console.error(`Firestore fetch failed for article "${slug}", falling back to local data:`, error)
    return getLocalArticleBySlug(slug)
  }
}