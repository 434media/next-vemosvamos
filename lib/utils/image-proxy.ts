/**
 * Utility functions for handling Airtable image URLs and proxy fallbacks
 */

const AIRTABLE_DOMAINS = [
  'v5.airtableusercontent.com',
  'v4.airtableusercontent.com', 
  'v3.airtableusercontent.com',
  'dl.airtable.com',
  'attachments.airtable.com'
]

/**
 * Check if a URL is from an Airtable CDN
 */
export function isAirtableImageUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return AIRTABLE_DOMAINS.includes(urlObj.hostname)
  } catch {
    return false
  }
}

/**
 * Transform an Airtable image URL to use our proxy API
 * This helps avoid issues with time-sensitive authentication tokens
 */
export function getProxiedImageUrl(originalUrl: string): string {
  if (!isAirtableImageUrl(originalUrl)) {
    return originalUrl
  }
  
  // Use our proxy API to serve the image
  const encodedUrl = encodeURIComponent(originalUrl)
  return `/api/proxy-image?url=${encodedUrl}`
}

/**
 * Get the best image URL with fallback to proxy
 * In development, use direct URLs. In production, prefer proxy for reliability.
 */
export function getOptimalImageUrl(originalUrl: string): string {
  if (!originalUrl) return ''
  
  // In development, use direct URLs for better performance
  if (process.env.NODE_ENV === 'development') {
    return originalUrl
  }
  
  // In production, use proxy for Airtable images to avoid authentication issues
  if (isAirtableImageUrl(originalUrl)) {
    return getProxiedImageUrl(originalUrl)
  }
  
  return originalUrl
}

/**
 * Transform all image URLs in an article object to use optimal URLs
 */
export function transformArticleImageUrls<T extends Record<string, any>>(article: T): T {
  const transformed = { ...article } as any
  
  // Transform common image fields
  if (transformed.cardImage) {
    transformed.cardImage = getOptimalImageUrl(transformed.cardImage)
  }
  
  if (transformed.heroImage) {
    if (transformed.heroImage.desktop) {
      transformed.heroImage.desktop = getOptimalImageUrl(transformed.heroImage.desktop)
    }
    if (transformed.heroImage.mobile) {
      transformed.heroImage.mobile = getOptimalImageUrl(transformed.heroImage.mobile)
    }
  }
  
  // Transform spotlight images
  if (Array.isArray(transformed.spotlights)) {
    transformed.spotlights = transformed.spotlights.map((spotlight: any) => ({
      ...spotlight,
      image: spotlight.image ? getOptimalImageUrl(spotlight.image) : spotlight.image
    }))
  }
  
  // Transform upcoming event image
  if (transformed.upcomingEvent?.image) {
    transformed.upcomingEvent.image = getOptimalImageUrl(transformed.upcomingEvent.image)
  }
  
  // Transform featured post image
  if (transformed.featuredPost?.image) {
    transformed.featuredPost.image = getOptimalImageUrl(transformed.featuredPost.image)
  }
  
  return transformed
}