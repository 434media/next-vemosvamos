import { notFound } from "next/navigation"
import { getArticleBySlugWithFallback } from "../../../lib/utils/culturedeck-fallback"
import { CultureDeckArticleContentWrapper } from "../../../components/culturedeck/article-content-wrapper"

// Force dynamic rendering to ensure fresh Airtable data on every request
export const dynamic = 'force-dynamic'

export default async function CultureDeckArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const article = await getArticleBySlugWithFallback(slug)

  if (!article) {
    notFound()
  }

  return <CultureDeckArticleContentWrapper article={article} />
}
