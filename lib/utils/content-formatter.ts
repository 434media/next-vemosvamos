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
  
  // First, let's handle Airtable's rich text format which often comes as markdown
  let processedContent = content
  
  // Check if content has markdown syntax (like **bold** or *italic*)
  const hasMarkdownSyntax = /(\*\*.*?\*\*|\*.*?\*|__.*?____|_.*?_)/g.test(processedContent)
  
  if (hasMarkdownSyntax) {
    // Parse as markdown first
    try {
      processedContent = marked.parse(processedContent) as string
      // Remove wrapping <p> tags if it's just a single paragraph
      if (processedContent.startsWith('<p>') && processedContent.endsWith('</p>\n') && processedContent.split('<p>').length === 2) {
        processedContent = processedContent.replace(/^<p>/, '').replace(/<\/p>\n?$/, '')
      }
      return processedContent
    } catch (error) {
      console.warn('Error parsing markdown:', error)
      // Fallback to manual markdown processing
    }
  }
  
  // Manual markdown processing as fallback
  processedContent = processedContent
    // Handle bold text **text** or __text__
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    // Handle italic text *text* or _text_
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    // Handle links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  
  // Check if content already contains HTML tags after markdown processing
  const hasHtmlTags = /<[^>]*>/g.test(processedContent)
  
  if (hasHtmlTags) {
    // Content has HTML - ensure proper paragraph structure
    if (!processedContent.includes('<p>') && processedContent.trim().length > 0) {
      // Split by double line breaks and wrap in paragraphs
      const paragraphs = processedContent.split(/\n\s*\n/).filter(p => p.trim())
      if (paragraphs.length > 1) {
        processedContent = paragraphs.map(p => `<p>${p.trim()}</p>`).join('')
      } else {
        processedContent = `<p>${processedContent.trim()}</p>`
      }
    }
    
    return processedContent
  }
  
  // Plain text - convert to proper paragraphs
  const paragraphs = processedContent.split(/\n\s*\n/).filter(p => p.trim())
  if (paragraphs.length > 1) {
    return paragraphs.map(p => `<p>${p.trim()}</p>`).join('')
  } else if (processedContent.trim()) {
    return `<p>${processedContent.trim()}</p>`
  }
  
  return processedContent
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