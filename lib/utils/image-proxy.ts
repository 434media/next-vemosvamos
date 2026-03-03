/**
 * Utility functions for handling image URLs
 */

/**
 * Get the optimal image URL (pass-through for non-proxied images)
 */
export function getOptimalImageUrl(originalUrl: string): string {
  if (!originalUrl) return ''
  return originalUrl
}

/**
 * Transform all image URLs in an article object
 */
export function transformArticleImageUrls<T extends Record<string, any>>(article: T): T {
  // No transformation needed since images are served directly from Firebase Storage
  return article
}