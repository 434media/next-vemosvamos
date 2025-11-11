import { getCultureDeckArticlesWithFallback } from "../../lib/utils/culturedeck-fallback"
import { CultureDeckError, CultureDeckEmptyState } from "../../components/culturedeck/error-states"
import { CultureDeckClientWrapper } from "../../components/culturedeck/client-wrapper"

// Enable Incremental Static Regeneration to refresh Airtable data
export const revalidate = 3600 // Revalidate every hour

export default async function CultureDeckPage() {
  try {
    const articles = await getCultureDeckArticlesWithFallback()
    
    if (articles.length === 0) {
      return <CultureDeckEmptyState />
    }
    
    return <CultureDeckClientWrapper articles={articles} />
  } catch (error) {
    console.error('Failed to fetch culture deck articles:', error)
    return (
      <CultureDeckError 
        error={error instanceof Error ? error.message : 'Unknown error occurred'}
      />
    )
  }
}
