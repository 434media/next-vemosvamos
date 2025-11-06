# Culture Deck Airtable Integration

## Overview

The Culture Deck has been successfully migrated from local data to Airtable API integration, maintaining full bilingual support and backward compatibility through a fallback system. The integration connects to the **"thefeeds"** base in Airtable, specifically using the **"Culture Deck"** table.

## 🚀 Features

- **Airtable API Integration**: Real-time content management through Airtable
- **Bilingual Support**: Full English/Spanish content support maintained
- **Fallback System**: Graceful fallback to local data if Airtable is unavailable
- **Error Handling**: Comprehensive error states and loading indicators
- **Type Safety**: Full TypeScript support with proper interfaces
- **SEO Optimized**: Static generation with dynamic Airtable data

## 📋 Setup Instructions

### 1. Next.js Configuration

The `next.config.ts` file has been updated to allow images from Airtable's CDN:

```typescript
images: {
  remotePatterns: [
    // ... existing patterns
    {
      protocol: 'https',
      hostname: 'v5.airtableusercontent.com',
      pathname: '/**'
    },
    {
      protocol: 'https',
      hostname: 'dl.airtable.com',
      pathname: '/**'
    },
    {
      protocol: 'https',
      hostname: 'attachments.airtable.com',
      pathname: '/**'
    }
  ]
}
```

### 2. Environment Variables

Add these variables to your `.env.local` file:

```bash
# Airtable Configuration for Culture Deck
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_CULTURE_DECK_BASE_ID=appXXXXXXXXXXXXXX  # Base ID for "thefeeds"
AIRTABLE_CULTURE_DECK_TABLE=culturedeck
```

> **Important**: 
- We use `AIRTABLE_CULTURE_DECK_BASE_ID` (not `AIRTABLE_BASE_ID`) to avoid conflicts with existing newsletter Airtable integration
- The base ID should be the ID of your "thefeeds" Airtable base
- The table name should be `culturedeck` (lowercase) to match the existing table structure

### 3. Airtable Base Setup

Use your existing **"thefeeds"** base and the **"culturedeck"** table with the following field structure:

#### Core Content Fields:
| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| **id** | Single line text | Unique identifier | `deck001`, `deck002` |
| **published_date** | Date | Publication date | `2025-06-02` |
| **title** | Single line text | English title | `The Road to RGVSW` |
| **title-es** | Single line text | Spanish title | `El Camino a RGVSW` |
| **type** | Single select | Content type | `newsletter`, `insight`, `tendencia` |
| **summary** | Long text | English summary/description | Brief description for preview |
| **summary-es** | Long text | Spanish summary/description | Brief description for preview |
| **authors** | Single line text | Article authors | `Digital Canvas Team` |
| **topics** | Single line text | Comma-separated topics | `community, Innovation, creative` |
| **slug** | Single line text | URL-friendly identifier | `the-road-to-rgvsw` |
| **status** | Single select | Publication status | Options: `published`, `draft`, `archived` |

#### Image Fields:
| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| **og_image** | Attachment | Social media preview image | Upload OG image |
| **hero_image_desktop** | Attachment | Desktop hero image | Upload desktop hero |
| **hero_image_mobile** | Attachment | Mobile hero image | Upload mobile hero |

#### Founder's Note Section:
| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| **founders_note_text** | Long text | English founder's note | Personal message from founders |
| **founders_note_text-es** | Long text | Spanish founder's note | Personal message from founders |
| **founders_note_image** | Attachment | Founder's note image | Upload related image |

#### Visual Content:
| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| **last_month_gif** | Attachment | Previous month recap GIF | Upload GIF file |
| **the_drop_gif** | Attachment | Content drop GIF | Upload GIF file |

#### Featured Post Section:
| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| **featured_post_title** | Single line text | English featured post title | `434 Crashes SASW 10th Year` |
| **featured_post_title-es** | Single line text | Spanish featured post title | `434 Se Estrella en SASW Año 10` |
| **featured_post_image** | Attachment | Featured post image | Upload featured image |
| **featured_post_content** | Long text | English featured post content | Full article content |
| **featured_post_content-es** | Long text | Spanish featured post content | Full article content |

#### Upcoming Event Section:
| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| **upcoming_event_title** | Single line text | English event title | `The First Python Conference in San Antonio` |
| **upcoming_event_title-es** | Single line text | Spanish event title | `La Primera Conferencia de Python en San Antonio` |
| **upcoming_event_description** | Long text | English event description | Event details and description |
| **upcoming_event_description-es** | Long text | Spanish event description | Event details and description |
| **upcoming_event_image** | Attachment | Event image | Upload event image |
| **upcoming_event_cta_text** | Single line text | English CTA button text | `Explore Events` |
| **upcoming_event_cta_text-es** | Single line text | Spanish CTA button text | `Explorar Eventos` |
| **upcoming_event_cta_link** | URL | Event link | `https://www.434media.com/events` |

#### Spotlight Sections (1, 2, 3):
Each spotlight section has the same structure with numbered variants:

| Field Name | Field Type | Description | Example |
|------------|------------|-------------|---------|
| **spotlight_1_title** | Single line text | English spotlight 1 title | `Emerge and Rise Open House` |
| **spotlight_1_title-es** | Single line text | Spanish spotlight 1 title | `Casa Abierta de Emerge and Rise` |
| **spotlight_1_description** | Long text | English spotlight 1 description | Spotlight content description |
| **spotlight_1_description-es** | Long text | Spanish spotlight 1 description | Spotlight content description |
| **spotlight_1_image** | Attachment | Spotlight 1 image | Upload spotlight image |
| **spotlight_1_cta_text** | Single line text | English CTA button text | `Learn More` |
| **spotlight_1_cta_text-es** | Single line text | Spanish CTA button text | `Aprende Más` |
| **spotlight_1_cta_link** | URL | Spotlight 1 link | `https://emergeandrise.org/` |

> **Note**: Repeat the same structure for `spotlight_2_*` and `spotlight_3_*` fields

#### Field Configuration Notes:
- **type**: Configure as Single Select with options like: `newsletter`, `insight`, `tendencia`, `movimiento`, `flavor`, `takeaway`, `podcast`
- **topics**: Use comma-separated format - the system will automatically split and translate common topics
- **status**: Configure as Single Select with options: `published`, `draft`, `archived`
- **All Image Fields**: Support multiple file attachments, first attachment will be used as primary
- **Content Fields**: Support rich text content with line breaks and formatting
- **CTA Fields**: Use descriptive action words for buttons (e.g., "Learn More", "Explore Events", "Register Now")

### Example Record

Here's what a complete newsletter record looks like in your "thefeeds" Airtable base:

| Field | Value |
|-------|--------|
| **id** | `deck001` |
| **published_date** | `2025-06-02` |
| **title** | `The Road to RGVSW` |
| **title-es** | `El Camino a RGVSW` |
| **type** | `newsletter` |
| **summary** | `You can't tell meaningful stories from a distance which is why our team headed to Brownsville for RGV Startup Week 2025.` |
| **summary-es** | `No puedes contar historias significativas desde la distancia, por eso nuestro equipo se dirigió a Brownsville para la Semana de Startups RGV 2025.` |
| **authors** | `Digital Canvas Team` |
| **topics** | `community, Innovation, creative` |
| **slug** | `the-road-to-rgvsw` |
| **status** | `published` |
| **featured_post_title** | `The Road to RGVSW: Proximity Matters` |
| **featured_post_content** | `You can't tell meaningful stories from a distance which is why our team headed to Brownsville...` |
| **upcoming_event_title** | `AIM 2025 Health R&D Summit` |
| **upcoming_event_cta_text** | `Explore Events` |
| **upcoming_event_cta_link** | `https://www.434media.com/events` |
| **spotlight_1_title** | `Emerge and Rise Open House` |
| **spotlight_1_cta_text** | `Learn More` |
| **spotlight_1_cta_link** | `https://emergeandrise.org/` |

### 4. API Key Setup

1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Create a new personal access token with a descriptive name (e.g., "Culture Deck Integration")
3. Grant the following scopes:
   - `data.records:read` - Read records from tables
4. Grant access to your **"thefeeds"** base
5. Copy the generated token to your `.env.local` file as `AIRTABLE_API_KEY`
6. Copy your "thefeeds" base ID (found in the URL: `https://airtable.com/appXXXXXXXXXXXXXX`) to `AIRTABLE_CULTURE_DECK_BASE_ID`
7. Set the table name as `AIRTABLE_CULTURE_DECK_TABLE=culturedeck` (lowercase)

## 🏗️ Architecture

### Key Files Created/Modified:

```
lib/
├── types/
│   └── culturedeck.ts              # TypeScript interfaces for Airtable
├── services/
│   └── airtable.ts                 # Airtable API service layer
└── utils/
    └── culturedeck-fallback.ts     # Fallback utility with local data

app/culturedeck/
├── page.tsx                        # Updated to use Airtable API
├── loading.tsx                     # Loading state component
└── [slug]/
    └── page.tsx                    # Updated for dynamic Airtable content

components/culturedeck/
├── error-states.tsx                # Error handling components
└── article-content.tsx             # Updated type imports
```

### Data Flow:

1. **Server Components** fetch data from Airtable API
2. **Fallback System** provides local data if Airtable fails
3. **Client Components** handle interactivity (filtering, expansion)
4. **Error Boundaries** catch and display user-friendly error states

## 🔧 API Functions

### Main Functions:

- `fetchCultureDeckArticles()` - Get all articles from Airtable
- `fetchArticleBySlug(slug)` - Get single article by slug
- `fetchArticlesByType(type)` - Filter articles by card type
- `getCultureDeckArticlesWithFallback()` - Get articles with local fallback
- `getArticleBySlugWithFallback(slug)` - Get single article with fallback

### Error Handling:

- **Network Errors**: Automatic fallback to local data
- **Empty Results**: Display empty state component
- **Invalid Data**: Graceful error messages
- **Missing Environment Variables**: Clear setup instructions

## 🎨 User Experience

### Loading States:
- Skeleton loading animations
- Progressive content reveal
- Smooth transitions

### Error States:
- User-friendly error messages
- Retry functionality
- Fallback content availability
- Navigation options

### Performance:
- Server-side rendering maintained
- Static generation for SEO
- Efficient data caching
- Minimal client-side JavaScript

## 🌐 Bilingual Translation System

### Automatic Translations:
- **UI Elements**: All buttons, labels, and interface text switch between English and Spanish
- **Tags**: Common tags (Marketing, Bilingual, Gen Z, etc.) are automatically translated
- **Card Types**: All card type labels support both languages
- **Actions**: "Visit Link", "Read More", "Author" labels translate automatically

### Supported Tag Translations:

The system automatically translates these common tags:

| English Tag | Spanish Translation |
|-------------|-------------------|
| `Marketing` | `Marketing` |
| `Bilingual` | `Bilingüe` |
| `Gen Z` | `Gen Z` |
| `Trends` | `Tendencias` |
| `Culture` | `Cultura` |
| `Content Creation` | `Creación de Contenido` |
| `Events` | `Eventos` |
| `Tech` | `Tecnología` |
| `Entrepreneurship` | `Emprendimiento` |
| `Strategy` | `Estrategia` |
| `Content` | `Contenido` |
| `Framework` | `Marco de Trabajo` |

### Translation Keys Added:
```typescript
// UI Elements - English
"culturedeck.visitLink": "Visit Link"
"culturedeck.visitExternalLink": "Visit External Link" 
"culturedeck.readMore": "Read More"
"culturedeck.author": "Author"
"culturedeck.by": "By"
"culturedeck.backToFeed": "Back to Feed"

// Card Types - English
"culturedeck.card.insight": "Insight"
"culturedeck.card.tendencia": "Trend"
"culturedeck.card.movimiento": "Movement"
"culturedeck.card.flavor": "Flavor"
"culturedeck.card.takeaway": "Takeaway"
"culturedeck.card.podcast": "Podcast"

// UI Elements - Spanish
"culturedeck.visitLink": "Visitar Enlace"
"culturedeck.visitExternalLink": "Visitar Enlace Externo"
"culturedeck.readMore": "Leer Más"
"culturedeck.author": "Autor" 
"culturedeck.by": "Por"
"culturedeck.backToFeed": "Volver al Feed"

// Card Types - Spanish
"culturedeck.card.insight": "Insight"
"culturedeck.card.tendencia": "Tendencia"
"culturedeck.card.movimiento": "Movimiento"
"culturedeck.card.flavor": "Sabor"
"culturedeck.card.takeaway": "Conclusión"
"culturedeck.card.podcast": "Podcast"
```

### Content Management Workflow

### For Content Editors:

1. **Add New Article**:
   - Open the "thefeeds" Airtable base
   - Go to the "culturedeck" table
   - Create a new record
   - Fill all required fields:
     - **id**: Create unique identifier (e.g., `deck003`)
     - **published_date**: Select publication date
     - **title** & **title-es**: Add titles in both languages
     - **type**: Select content type (newsletter, insight, etc.)
     - **summary** & **summary-es**: Write brief descriptions for card preview
     - **authors**: Add author names
     - **topics**: Add comma-separated topics (e.g., `community, Innovation, creative`)
     - **slug**: Create URL-friendly identifier (e.g., `my-article-title`)
     - **status**: Set to `published` when ready
   - Optional: Add featured post content, upcoming events, spotlight sections, and images
   - Changes are live immediately

2. **Edit Existing Article**:
   - Find the record by id, slug, or title in Airtable
   - Update any fields (content updates in both languages recommended)
   - Changes reflect on the website within minutes

3. **Manage Categories & Topics**:
   - **type**: Use dropdown to select content category (newsletter, insight, tendencia, etc.)
   - **topics**: Enter comma-separated values (e.g., `community, Innovation, creative`)
   - **status**: Control publication status (published, draft, archived)
   - System automatically translates common topics to Spanish

### For Developers:

1. **Deploy Changes**:
   - Articles update automatically from Airtable
   - No code deployment needed for content changes
   - Fallback system ensures uptime during API issues

2. **Add New Content Types**:
   - Update TypeScript interface in `lib/types/culturedeck.ts`
   - Add new options to Airtable "type" select field
   - Update translations in `lib/language-context.tsx`
   - Update content type labels in components

3. **Add New Topic Translations**:
   - Update `lib/language-context.tsx` with new `topic.TopicName` entries
   - Topics automatically fallback to original text if no translation found

4. **Newsletter Structure Management**:
   - Featured posts, upcoming events, and spotlight sections are all optional
   - Each newsletter can have up to 3 spotlight sections
   - All content supports bilingual English/Spanish versions
   - Images uploaded to Airtable are automatically served from Airtable CDN

## 🔍 Monitoring & Debugging

### Logs to Monitor:
- Airtable API failures
- Fallback activations
- Missing environment variables
- Data transformation errors

### Debug Mode:
```bash
# Enable detailed logging
NODE_ENV=development npm run dev
```

### Health Check:
- Monitor Airtable API status
- Verify environment variables
- Test fallback scenarios
- Check content quality

## 🚨 Troubleshooting

### Common Issues:

2. **"Cannot find name 'fetchCultureDeckArticles'"**
   - Import from correct path: `lib/services/airtable`

3. **Environment Variables Not Found**
   - Check `.env.local` file exists in project root
   - Verify variable names match exactly:
     - `AIRTABLE_CULTURE_DECK_BASE_ID` (not `AIRTABLE_BASE_ID`)
     - Should be the base ID of your "thefeeds" base
   - Restart development server after adding variables

3. **Airtable API Rate Limits**
   - Implement caching layer
   - Use fallback system
   - Consider API key limits

4. **Type Errors**
   - Ensure field names match interface
   - Use proper type casting
   - Update TypeScript interfaces

### Recovery Steps:
1. Check environment variables
2. Verify Airtable API key permissions
3. Test fallback system
4. Review error logs
5. Validate data structure

## 🎯 Next Steps

### Potential Enhancements:
- **Caching Layer**: Redis/Memory cache for API responses
- **Preview Mode**: Draft content preview functionality
- **Rich Media**: Enhanced image/video content support
- **Analytics**: Track article engagement
- **Search**: Full-text search across articles
- **Automation**: Webhook integration for real-time updates

### Maintenance:
- Monitor API usage and limits
- Regular backup of Airtable data
- Update dependencies
- Performance optimization
- Content quality reviews

## ✅ Quick Setup Checklist

### Pre-Setup Requirements:
- [ ] Access to the "thefeeds" Airtable base
- [ ] Airtable account with API token creation permissions

### Setup Steps:
- [ ] Create "culturedeck" table in "thefeeds" base (if not exists)
- [ ] Add all required fields with correct types and options
- [ ] Create Airtable API token with read permissions for "thefeeds" base
- [ ] Add environment variables to `.env.local`:
  - [ ] `AIRTABLE_API_KEY`
  - [ ] `AIRTABLE_CULTURE_DECK_BASE_ID` (thefeeds base ID)
  - [ ] `AIRTABLE_CULTURE_DECK_TABLE=culturedeck`
- [ ] Add at least one test record with all required fields
- [ ] Restart development server
- [ ] Test by visiting `/culturedeck` page

### Verification:
- [ ] Culture Deck page loads without errors
- [ ] Articles display with bilingual content
- [ ] Individual article pages work (`/culturedeck/[slug]`)
- [ ] Images load from Airtable attachments
- [ ] Language switching works for all UI elements
- [ ] Tags translate correctly
- [ ] External links work when provided
- [ ] Fallback system works (test by temporarily breaking API key)

---

## 📞 Support

For questions or issues with the Airtable integration:

1. Check this documentation first
2. Review error logs for specific issues
3. Test the fallback system functionality
4. Verify Airtable base structure matches requirements

The integration is designed to be robust and maintainable, with clear separation of concerns and comprehensive error handling.