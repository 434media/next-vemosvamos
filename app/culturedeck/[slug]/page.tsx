import { notFound } from "next/navigation"
import { getCultureDeckArticlesWithFallback, getArticleBySlugWithFallback } from "../../../lib/utils/culturedeck-fallback"
import { CultureDeckArticleContent } from "../../../components/culturedeck/article-content"

export async function generateStaticParams() {
  try {
    const articles = await getCultureDeckArticlesWithFallback()
    return articles.map((article) => ({
      slug: article.slug,
    }))
  } catch (error) {
    console.error('Error generating static params for culture deck articles:', error)
    return []
  }
}

export default async function CultureDeckArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  try {
    const article = await getArticleBySlugWithFallback(slug)

    if (!article) {
      notFound()
    }

    return <CultureDeckArticleContent article={article} />
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}":`, error)
    notFound()
  }
}
