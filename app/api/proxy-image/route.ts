import { NextRequest, NextResponse } from 'next/server'

/**
 * Image proxy API route to handle Airtable images that might have authentication issues in production
 * This route fetches images from Airtable CDN and serves them through our domain
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  // Validate that the URL is from an allowed Airtable domain
  const allowedDomains = [
    'v5.airtableusercontent.com',
    'v4.airtableusercontent.com', 
    'v3.airtableusercontent.com',
    'dl.airtable.com',
    'attachments.airtable.com'
  ]

  if (!url) {
    return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 })
  }

  try {
    // Parse and validate the URL
    let urlObj: URL
    try {
      urlObj = new URL(url)
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 })
    }

    // Security checks to prevent SSRF attacks
    
    // 1. Ensure the URL uses HTTPS only (no HTTP, file://, ftp://, etc.)
    if (urlObj.protocol !== 'https:') {
      return NextResponse.json({ error: 'Only HTTPS URLs are allowed' }, { status: 403 })
    }

    // 2. Ensure the URL is from an allowed Airtable domain (strict whitelist)
    if (!allowedDomains.includes(urlObj.hostname)) {
      return NextResponse.json({ error: 'Domain not allowed' }, { status: 403 })
    }

    // 3. Prevent access to local/internal networks
    const hostname = urlObj.hostname.toLowerCase()
    
    // Block localhost, loopback, and private IP ranges
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '::1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.match(/^172\.(1[6-9]|2\d|3[01])\./) ||
      hostname.startsWith('169.254.') || // Link-local
      hostname.startsWith('fc00:') || // Private IPv6
      hostname.startsWith('fe80:') // Link-local IPv6
    ) {
      return NextResponse.json({ error: 'Access to internal networks is not allowed' }, { status: 403 })
    }

    // 4. Ensure the path looks like an image path
    const path = urlObj.pathname.toLowerCase()
    const validImageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const hasValidExtension = validImageExtensions.some(ext => path.includes(ext))
    
    if (!hasValidExtension && !path.includes('airtable')) {
      return NextResponse.json({ error: 'Invalid image URL' }, { status: 403 })
    }

    // 5. Reconstruct the URL to prevent any manipulation
    const safeUrl = `https://${urlObj.hostname}${urlObj.pathname}${urlObj.search}`

    // Fetch the image from Airtable with timeout and size limits
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch(safeUrl, {
        headers: {
          'User-Agent': 'Vemos-Vamos-Website/1.0',
        },
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        console.error('Failed to fetch image from Airtable:', response.status, response.statusText)
        return NextResponse.json({ error: 'Failed to fetch image' }, { status: 502 })
      }

      // Validate content type is actually an image
      const contentType = response.headers.get('content-type') || ''
      const allowedImageTypes = [
        'image/jpeg',
        'image/jpg', 
        'image/png',
        'image/gif',
        'image/webp',
        'image/svg+xml'
      ]

      if (!allowedImageTypes.some(type => contentType.toLowerCase().includes(type))) {
        return NextResponse.json({ error: 'Invalid content type' }, { status: 403 })
      }

      // Check content length to prevent extremely large files (max 10MB)
      const contentLength = response.headers.get('content-length')
      if (contentLength && parseInt(contentLength) > 10 * 1024 * 1024) {
        return NextResponse.json({ error: 'File too large' }, { status: 413 })
      }

      const imageData = await response.arrayBuffer()

      // Additional size check after download
      if (imageData.byteLength > 10 * 1024 * 1024) {
        return NextResponse.json({ error: 'File too large' }, { status: 413 })
      }

      // Return the image with appropriate headers
      return new NextResponse(imageData, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
          'Access-Control-Allow-Origin': '*',
          'X-Content-Type-Options': 'nosniff', // Prevent MIME type sniffing
          'Content-Security-Policy': "default-src 'none'", // Prevent any script execution
        },
      })
    } catch (fetchError) {
      clearTimeout(timeoutId)
      
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        return NextResponse.json({ error: 'Request timeout' }, { status: 408 })
      }
      
      console.error('Error fetching image:', fetchError)
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 502 })
    }
  } catch (error) {
    console.error('Error proxying image:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}