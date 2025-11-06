import { marked } from 'marked'

// Configure marked options
marked.setOptions({
  breaks: true, // Convert line breaks to <br>
  gfm: true,    // GitHub Flavored Markdown
})

/**
 * Convert markdown or rich text content to HTML
 * @param content - The content string (could be markdown, HTML, or plain text)
 * @returns HTML string ready for dangerouslySetInnerHTML
 */
export function formatContent(content: string): string {
  if (!content) return ''
  
  // Check if content already contains HTML tags
  const hasHtmlTags = /<[^>]*>/g.test(content)
  
  if (hasHtmlTags) {
    // Content already has HTML, just clean up line breaks
    return content
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>')
  }
  
  // Check if content looks like markdown
  const hasMarkdownSyntax = /(\*\*|__|\*|_|`|#|\[.*\]\(.*\)|!\[.*\]\(.*\))/g.test(content)
  
  if (hasMarkdownSyntax) {
    // Parse as markdown
    try {
      return marked.parse(content) as string
    } catch (error) {
      console.warn('Error parsing markdown:', error)
      // Fallback to simple line break conversion
      return content
        .replace(/\n\n/g, '<br/><br/>')
        .replace(/\n/g, '<br/>')
    }
  }
  
  // Plain text - just convert line breaks
  return content
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>')
}

/**
 * Format content for display, handling both markdown and HTML
 * @param content - The content to format
 * @returns Formatted HTML string
 */
export function safeFormatContent(content: string | undefined): string {
  if (!content) return ''
  return formatContent(content)
}