# Quick Start Guide: Culture Deck Airtable Integration

## 🎯 What's New

Your Culture Deck is now powered by Airtable! This means you can manage all your content directly through Airtable's user-friendly interface, without needing to touch any code.

## 📋 Setup Checklist (5 minutes)

### Step 1: Create Your Airtable Base

1. **Sign up/Login** to [Airtable.com](https://airtable.com)
2. **Create a new base** called "Vemos Vamos Content"
3. **Rename the default table** to "Culture_Deck"

### Step 2: Set Up Your Table Structure

Copy this table structure exactly:

| Field Name | Field Type | Options/Notes |
|------------|------------|---------------|
| Slug | Single line text | URL-friendly (e.g., "bilingual-marketing-trends") |
| Date | Single line text | Format: 2025.01.15 |
| Type | Single select | Options: insight, tendencia, movimiento, flavor, takeaway, podcast |
| Title (EN) | Single line text | English title |
| Title (ES) | Single line text | Spanish title |
| Summary (EN) | Long text | English description |
| Summary (ES) | Long text | Spanish description |
| Content (EN) | Long text | English article content |
| Content (ES) | Long text | Spanish article content |
| Author | Single line text | Optional: Author name |
| Link | URL | Optional: External link |
| Tags | Single line text | Optional: Comma-separated tags |
| Card Image | Attachment | Optional: Header image |

### Step 3: Get Your API Credentials

1. **Go to** [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. **Click "Create new token"**
3. **Name it** "Vemos Vamos Culture Deck"
4. **Add these scopes:**
   - ☑️ `data.records:read`
5. **Add access to your base**
6. **Copy the token** (starts with `pat...`)

### Step 4: Configure Your Website

Send your developer these two items:
- **API Token**: `pat1234567890abcdef` (your actual token)  
- **Culture Deck Base ID**: Found in your Airtable URL: `https://airtable.com/app[THIS_PART]/table...`

> **Note**: This is separate from any existing newsletter Airtable base - this is specifically for your Culture Deck content.

## ✨ How to Use

### Adding a New Article

1. **Click "+ Add record"** in Airtable
2. **Fill out the fields:**
   - **Slug**: Make it URL-friendly (e.g., "new-latino-trends-2025")
   - **Type**: Choose the card type
   - **Titles**: Write in both English and Spanish
   - **Content**: Write your full articles in both languages
3. **Save** - Your article goes live immediately!

### Editing Articles

1. **Click on any article** in your Airtable
2. **Make your changes** 
3. **Changes appear on your website** within minutes!

### Card Types Explained

- **Insight**: Industry analysis and data-driven content
- **Tendencia**: Current trends and cultural movements  
- **Movimiento**: Community events and initiatives
- **Flavor**: Collaborations and brand spotlights
- **Takeaway**: Actionable advice and frameworks
- **Podcast**: Audio content and series highlights

## 🔧 Pro Tips

### Content Best Practices

- **Keep slugs simple**: Use hyphens, lowercase, no spaces
- **Date format**: Always use YYYY.MM.DD (2025.01.15)
- **Bilingual quality**: Ensure both languages tell the complete story
- **Tags**: Use consistent tags for better organization

### Image Guidelines

- **Size**: Aim for 1200x800px or larger
- **Format**: JPG or PNG work best
- **Content**: Should represent your article theme

## 🚨 Safety Features

### Don't Worry About Mistakes!

- **Your old content is safe**: We keep backups of everything
- **Website won't break**: If Airtable is down, your old content still shows
- **Preview before publishing**: You can test articles before making them live

### Getting Help

**Something not working?**
1. Check that all required fields are filled
2. Verify your slug doesn't have spaces or special characters  
3. Make sure dates follow the YYYY.MM.DD format

## 🎉 You're Ready!

Your Culture Deck is now:
- ✅ Fully manageable through Airtable
- ✅ Bilingual (English/Spanish) 
- ✅ Mobile-friendly
- ✅ SEO optimized
- ✅ Fast and reliable

Start adding your content and watch your Culture Deck come to life!

---

**Questions?** Your development team has full documentation and can help with any technical setup.