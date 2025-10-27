import { notFound } from "next/navigation"
import { getArticleBySlug, articles } from "../../../data/culturedeck/articles"
import { CultureDeckArticleContent } from "../../../components/culturedeck/article-content"

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function CultureDeckArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return <CultureDeckArticleContent article={article} />
}
