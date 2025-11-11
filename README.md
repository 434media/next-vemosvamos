# Vemos Vamos - Next.js Application

A modern, bilingual web application built with Next.js 15.4.6, featuring an integrated Culture Deck content management system powered by Airtable. The application showcases dynamic content delivery with robust fallback systems and comprehensive internationalization support.

## 🌟 Features

- **Bilingual Support**: Complete English/Spanish internationalization
- **Culture Deck CMS**: Dynamic content management with Airtable integration
- **Newsletter Template**: Magazine-style layout with spotlights, featured posts, and events
- **Markdown Support**: Rich text formatting with automatic HTML conversion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Motion Animations**: Smooth interactions powered by Motion/React
- **SEO Optimized**: Static generation with dynamic imports for optimal performance
- **Robust Fallbacks**: Local data fallback when Airtable is unavailable

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion/React 12.23.12
- **CMS**: Airtable API integration
- **Content**: Markdown processing with marked
- **Icons**: Lucide React & Remix Icons
- **Package Manager**: pnpm
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
next-vemosvamos/
├── app/                          # App Router pages and layouts
│   ├── fonts.ts                  # Font configurations
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Homepage
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   ├── connect/              # Contact form handler
│   │   └── newsletter/           # Newsletter subscription
│   ├── connect/                  # Contact page
│   ├── content-hub/              # Content hub page
│   └── culturedeck/              # Culture Deck section
│       ├── page.tsx              # Culture Deck main page
│       └── [slug]/               # Dynamic article pages
│
├── components/                   # Reusable components
│   ├── abouthero.tsx            # About page hero
│   ├── connect-form.tsx         # Contact form
│   ├── custom-cursor.tsx        # Custom cursor component
│   ├── footer.tsx               # Site footer
│   ├── navbar.tsx               # Navigation bar
│   ├── newsletter.tsx           # Newsletter signup
│   └── culturedeck/             # Culture Deck components
│       ├── article-content.tsx  # Newsletter template layout
│       ├── card.tsx             # Article card component
│       ├── client-wrapper.tsx   # SSR wrapper
│       ├── filter.tsx           # Content filtering
│       ├── hero.tsx             # Culture Deck hero
│       └── page-client.tsx      # Main Culture Deck client
│
├── data/                        # Static data and fallbacks
│   └── culturedeck/
│       └── articles.ts          # Fallback article data
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx          # Mobile detection
│   └── use-toast.ts            # Toast notifications
│
├── lib/                         # Utilities and configurations
│   ├── language-context.tsx    # Internationalization context
│   ├── utils.ts                # General utilities
│   ├── services/               # External service integrations
│   │   └── airtable.ts         # Airtable API service
│   ├── types/                  # TypeScript definitions
│   │   └── culturedeck.ts      # Culture Deck interfaces
│   └── utils/                  # Utility functions
│       ├── content-formatter.ts # Markdown/HTML processing
│       └── culturedeck-fallback.ts # Fallback logic
│
├── public/                      # Static assets
│   ├── images/                 # Image assets
│   ├── Dice.cur               # Custom cursor files
│   └── suckertilt.cur         # Custom cursor files
│
├── Configuration Files
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and scripts
└── pnpm-lock.yaml            # Lock file for dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/434media/next-vemosvamos.git
   cd next-vemosvamos
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_base_id
   AIRTABLE_TABLE_NAME=culturedeck
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Development Workflow

### Creating a New Feature Branch

1. **Ensure you're on the main branch and up to date**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create a new feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
   Branch naming conventions:
   - `feature/new-component` - New features
   - `fix/bug-description` - Bug fixes  
   - `docs/update-readme` - Documentation updates
   - `style/ui-improvements` - Styling changes

3. **Make your changes**
   - Edit files as needed
   - Test your changes locally with `pnpm dev`
   - Run build test with `pnpm build`

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new component for user dashboard"
   ```
   
   Commit message format:
   - `feat:` - New features
   - `fix:` - Bug fixes
   - `docs:` - Documentation changes
   - `style:` - Code style changes
   - `refactor:` - Code refactoring
   - `test:` - Adding tests

5. **Push your branch to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

### Submitting a Pull Request

1. **Navigate to the GitHub repository**
   Go to [https://github.com/434media/next-vemosvamos](https://github.com/434media/next-vemosvamos)

2. **Create a Pull Request**
   - Click "Compare & pull request" button
   - Or go to "Pull requests" tab → "New pull request"
   - Select your feature branch to merge into `main`

3. **Fill out the PR template**
   ```markdown
   ## Description
   Brief description of what this PR does
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Style/UI improvement
   
   ## Testing
   - [ ] Tested locally
   - [ ] Build passes
   - [ ] No console errors
   
   ## Screenshots (if applicable)
   Add screenshots for UI changes
   ```

4. **Request Review**
   - Add relevant reviewers
   - Link any related issues
   - Add appropriate labels

5. **Address Review Feedback**
   - Make requested changes
   - Push updates to the same branch
   - Respond to review comments

## 🎨 Culture Deck Features

The Culture Deck is a comprehensive content management system featuring:

- **Newsletter Template**: Magazine-style layout with hero images, founder's notes, spotlights, and featured posts
- **Airtable Integration**: Dynamic content management with automatic fallback to local data
- **Bilingual Content**: Full English/Spanish support with topic translations
- **Rich Text Support**: Markdown and HTML formatting with automatic conversion
- **Responsive Design**: Mobile-optimized newsletter layout
- **Content Filtering**: Filter articles by type, tags, and language
- **SEO Optimization**: Static generation with proper meta tags

## 🌐 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production  
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript check
```

## 📚 Key Components

- **Language Context**: Manages bilingual content and translations
- **Airtable Service**: Handles API integration with robust error handling
- **Content Formatter**: Converts markdown to HTML with fallback support
- **Fallback System**: Ensures content availability when external services fail
- **Newsletter Template**: Complete magazine-style article layout

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to 434 Media.

---

**Built with ❤️ by the 434 Media team** 