# Culture Deck Airtable Integration

## Overview

The Culture Deck has been successfully migrated from local data to Airtable API integration, maintaining full bilingual support and backward compatibility through a fallback system.

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

Create a `.env.local` file in your project root:

```bash
# Airtable Configuration
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_CULTURE_DECK_BASE_ID=your_culture_deck_base_id_here
AIRTABLE_CULTURE_DECK_TABLE=Culture_Deck
```

> **Important**: We use `AIRTABLE_CULTURE_DECK_BASE_ID` (not `AIRTABLE_BASE_ID`) to avoid conflicts with existing newsletter Airtable integration.

### 3. Airtable Base Setup

Create a new Airtable base with a table called "Culture_Deck" containing the following fields:

#### Required Fields:
- **Slug** (Single line text) - URL-friendly identifier
- **Date** (Single line text) - Format: "YYYY.MM.DD"
- **Type** (Single select) - Options: insight, tendencia, movimiento, flavor, takeaway, podcast
- **Title (EN)** (Single line text) - English title
- **Title (ES)** (Single line text) - Spanish title
- **Summary (EN)** (Long text) - English summary/description
- **Summary (ES)** (Long text) - Spanish summary/description
- **Content (EN)** (Long text) - English article content
- **Content (ES)** (Long text) - Spanish article content

#### Optional Fields:
- **Author** (Single line text) - Article author
- **Link** (URL) - External link
- **Tags** (Single line text) - Comma-separated tags
- **Card Image** (Attachment) - Article header image

### 4. API Key Setup

1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Create a new personal access token
3. Grant the following scopes:
   - `data.records:read` - Read records
4. Grant access to your Culture Deck base
5. Copy the token to your environment variables

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

### Translation Keys Added:
```typescript
// English
"culturedeck.visitLink": "Visit Link"
"culturedeck.visitExternalLink": "Visit External Link" 
"culturedeck.author": "Author"
"culturedeck.by": "By"
"tag.Marketing": "Marketing"
"tag.Bilingual": "Bilingual" 
// ... more tags

// Spanish  
"culturedeck.visitLink": "Visitar Enlace"
"culturedeck.visitExternalLink": "Visitar Enlace Externo"
"culturedeck.author": "Autor" 
"culturedeck.by": "Por"
"tag.Marketing": "Marketing"
"tag.Bilingual": "Bilingüe"
// ... more tags
```

### Content Management Workflow

### For Content Editors:

1. **Add New Article**:
   - Create new record in Airtable
   - Fill required bilingual fields
   - Set appropriate card type
   - Publish when ready

2. **Edit Existing Article**:
   - Find article by slug
   - Update content in both languages
   - Changes reflect immediately

3. **Manage Categories**:
   - Use Type field dropdown
   - Consistent with existing categories
   - Maintains filter functionality

### For Developers:

1. **Deploy Changes**:
   - Articles update automatically
   - No code deployment needed
   - Fallback ensures uptime

2. **Add New Card Types**:
   - Update TypeScript interface
   - Add to Airtable select options
   - Update language translations

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

1. **"Cannot find name 'fetchCultureDeckArticles'"**
   - Import from correct path: `lib/services/airtable`

2. **Environment Variables Not Found**
   - Check `.env.local` file exists
   - Verify variable names match exactly: `AIRTABLE_CULTURE_DECK_BASE_ID` (not `AIRTABLE_BASE_ID`)
   - Restart development server

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

---

## 📞 Support

For questions or issues with the Airtable integration:

1. Check this documentation first
2. Review error logs for specific issues
3. Test the fallback system functionality
4. Verify Airtable base structure matches requirements

The integration is designed to be robust and maintainable, with clear separation of concerns and comprehensive error handling.