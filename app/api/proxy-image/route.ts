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
    const urlObj = new URL(url)
    
    // Security check: ensure the URL is from an allowed Airtable domain
    if (!allowedDomains.includes(urlObj.hostname)) {
      return NextResponse.json({ error: 'Invalid domain' }, { status: 403 })
    }

    // Fetch the image from Airtable
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Vemos-Vamos-Website/1.0',
        // Include any necessary headers for Airtable API
      }
    })

    if (!response.ok) {
      console.error('Failed to fetch image from Airtable:', response.status, response.statusText)
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 502 })
    }

    const imageData = await response.arrayBuffer()
    const contentType = response.headers.get('content-type') || 'image/jpeg'

    // Return the image with appropriate headers
    return new NextResponse(imageData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
        'Access-Control-Allow-Origin': '*',
      },
    })
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