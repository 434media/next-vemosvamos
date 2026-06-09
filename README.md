# Vemos Vamos

**A bicultural creative media operating system.**

`Acciones hablan más fuerte.` — *See the signal · Shape the story · Move the market*

This repository is the public-facing surface of Vemos Vamos: a single-page Next.js application built around a hero masthead, a bilingual newsletter footer, and an easter-egg "operator console" that explains how the system actually works. The site is intentionally minimal — a clean baseline that the rest of the brand will grow from.

Live site: [vemosvamos.com](https://www.vemosvamos.com) · Parent: [434 Media](https://434media.com)

---

## The Stack

| | |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack, edge runtime for OG image) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 (no config file — `@theme` blocks in CSS) |
| **Animation** | Motion (the package formerly known as Framer Motion) |
| **Forms persistence** | Firebase Firestore — named database `vemosvamos` |
| **Transactional email** | Resend (verified domain: `send.434media.com`) |
| **Bot protection** | Vercel BotID (server-checked on the newsletter API route) |
| **Analytics** | Vercel Analytics · Google Analytics · Meta Pixel |
| **Fonts** | Inter (sans) + Fraunces (serif, SOFT and opsz axes) via `next/font/google` |
| **Package manager** | pnpm (v10+) |
| **Deployment** | Vercel |

Production dependencies are **deliberately minimal** — 8 packages, each justified by a live import. If you find yourself wanting to add a dep, double-check whether an inline implementation would work first.

---

## What renders

The live route tree is small on purpose. The home page renders a single hero component; everything else is infrastructure.

```
app/
├── api/newsletter/route.ts    Firestore write + Resend email
├── globals.css                Tailwind v4 entry
├── layout.tsx                 Root layout, metadata, analytics, BotID
├── manifest.json              PWA manifest
├── not-found.tsx              404
├── opengraph-image.tsx        OG image generator (edge runtime)
├── page.tsx                   Home — renders <HeroMasthead />
├── robots.txt                 Robots directives
└── sitemap.xml                Sitemap

components/
├── footer.tsx                 Bilingual close + newsletter + colophon
├── hero-section.tsx           Masthead + sticker + easter-egg trigger
├── language-toggle.tsx        EN/ES switcher
├── layout-wrapper.tsx         Provides LanguageProvider + <Navbar> + <Footer>
├── navbar.tsx                 Wordmark + language toggle
├── operator-console.tsx       Easter-egg modal (the "operating system")
└── ornament.tsx               Lotería-style flourish SVG

lib/
├── emails/welcome.ts          Resend welcome email template
├── language-context.tsx       EN/ES dictionary + React context (33 keys, two locales)
├── operator.ts                OPERATOR + SKILLS + FEEDS data for the console
└── services/firebase.ts       Firestore admin client

instrumentation-client.ts      BotID client init for /api/newsletter
next.config.ts                 Next config + BotID wrapper
```

If a file isn't reachable from `app/page.tsx`, `app/layout.tsx`, or one of the other entry points above, it shouldn't exist. **No orphans.**

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+ (`corepack enable pnpm`)
- A `.env.local` file with the variables below

### Install

```bash
git clone https://github.com/434media/next-vemosvamos.git
cd next-vemosvamos
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` at the repo root:

```env
# Firebase service account JSON for the "vemosvamos" Firestore database.
# Accepts raw JSON, base64-encoded JSON, or JSON with escaped newlines.
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"groovy-ego-462522-v2",...}

# Resend API key for transactional email (welcome email on newsletter signup).
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Vercel BotID and Vercel Analytics auto-configure when deployed to Vercel — no env vars needed for those.

---

## 🚀 Pull Request Workflow

This is the section to read carefully. The project moves fast and the PR loop is how we keep it coherent.

### 1. Start fresh from `main`

```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

**Branch naming** — pick the prefix that matches the change:

| Prefix | When to use |
|---|---|
| `feature/` | New component, page, or capability |
| `fix/` | Bug fix |
| `docs/` | README, comments, or in-repo docs |
| `style/` | Visual or CSS changes with no logic change |
| `refactor/` | Code restructure with no behavior change |
| `chore/` | Dependency bumps, lint config, build tooling |
| `voice/` | Brand-copy / translation string changes |

Use kebab-case after the prefix: `feature/operator-console-glow`, `voice/footer-newsletter-rewrite`.

### 2. Make your changes

While you work, run the dev server and the type checker in parallel:

```bash
pnpm dev              # Dev server on :3000
pnpm exec tsc --noEmit  # Typecheck only (no build output)
```

Before you commit, run a production build at least once. It catches things `pnpm dev` misses (edge runtime issues, static generation problems, missing env vars at build time):

```bash
pnpm build
```

### 3. Commit with the conventional prefix

We use **Conventional Commits**. The prefix should match (or be compatible with) the branch prefix.

| Prefix | Example |
|---|---|
| `feat:` | `feat: add team-strip section below hero` |
| `fix:` | `fix: prevent eyebrow ornament from rendering on mobile` |
| `docs:` | `docs: update README env var section` |
| `style:` | `style: nudge hero headline -1px for optical alignment` |
| `refactor:` | `refactor: extract social SVGs from footer into icon component` |
| `chore:` | `chore: bump next from 16.0.7 to 16.0.8` |
| `voice:` | `voice: replace "drops" with "lands" in newsletter copy` |

**Rules for commit messages:**

- First line ≤ 72 characters, imperative mood ("add" not "added").
- No trailing period in the subject line.
- If the change is non-obvious, include a body that explains **the why**, not the what. The diff already shows the what.
- Reference an issue or PR in the body if relevant: `Closes #42`.
- **Never** commit `.env.local`, service-account JSON, or anything containing a secret. If you do, rotate the secret immediately and force-push only with a maintainer's coordination.

### 4. Push and open the PR

```bash
git push -u origin feature/your-feature-name
```

Then open the PR on GitHub. Use this template in the PR description:

```markdown
## What this does
One or two sentences. What changed, in plain language.

## Why
The motivation — the user need, the bug, the inconsistency, the brand-voice
alignment, the dependency cleanup. Be specific.

## Type of change
- [ ] Feature (new capability)
- [ ] Fix (bug)
- [ ] Voice (brand copy / translations)
- [ ] Refactor (code restructure, no behavior change)
- [ ] Docs (README or comments)
- [ ] Chore (deps, build, tooling)

## Surfaces affected
- [ ] Hero masthead
- [ ] Footer
- [ ] Operator console
- [ ] Welcome email
- [ ] Translation dictionary (en + es)
- [ ] Build config / deps
- [ ] None (infrastructure only)

## Verification
- [ ] `pnpm build` succeeds locally
- [ ] `pnpm exec tsc --noEmit` clean
- [ ] Tested on mobile viewport (Chrome DevTools or real device)
- [ ] Tested EN ↔ ES language toggle
- [ ] If newsletter form touched: tested submit + welcome email delivery

## Screenshots / before-after
(For any visual or copy change — required for `voice/` and `style/` PRs.)

## Brand-voice check (for `voice/` PRs only)
- [ ] EN and ES values both updated in `lib/language-context.tsx`
- [ ] No agency-speak ("content, campaigns, experiences")
- [ ] No drop-culture vocabulary ("drops", "the next thing")
- [ ] No pre-launch framing ("rebuilding", "stay close")
- [ ] Active verbs from the skills vocabulary preferred (read, propose, draft, review)
```

### 5. Before requesting review — the checklist

| Check | How |
|---|---|
| Build passes | `pnpm build` returns ✓ |
| Typecheck passes | `pnpm exec tsc --noEmit` returns no errors |
| No new orphan files | Every new component must be reachable from `app/page.tsx` or `app/layout.tsx`. Run `grep -rn "from.*new-file" app components` to verify. |
| No new untracked deps | `pnpm install` should be a no-op. If you added a dep, justify it in the PR description. |
| Bilingual coverage | If you added any `t("key")` calls, the key exists in both `en` and `es` blocks of `lib/language-context.tsx`. |
| No secrets | `git diff main` shows no `.env*` or service-account content. |
| No console.logs | `git diff main \| grep "console\.log"` is empty (except intentional ones). |

### 6. Review etiquette

- **Reviewers** — Look at the PR description first. If the "why" isn't clear, ask before reviewing the diff. Comment on **what** could be different and **why**, not just style nits. Brand-voice PRs need a second pair of eyes on the copy; technical PRs need a second pair on the cascade implications.
- **Authors** — Respond to every comment, even with just 👍 or "good catch, fixed in [hash]." Don't force-push during review unless you've rebased onto main — it scrambles the comment threads. Use additional commits instead and squash at merge time.

### 7. Merging

- **Default merge strategy: Squash.** One PR = one commit on `main`. The squash message should match the PR title (which should match Conventional Commits).
- **Don't merge your own PR** unless explicitly approved to. Ask for review.
- **After merge**: delete the branch (GitHub will prompt you). Local cleanup: `git checkout main && git pull && git branch -d feature/your-feature-name`.

---

## Brand voice + bilingual content

The site speaks in two registers — editorial (the hero, the footer, the email) and technical (the operator console). All user-facing copy lives in `lib/language-context.tsx`. The dictionary has exactly **33 keys**, each consumed by a live component. Adding a key without a live consumer is a lint smell.

When writing or editing copy, follow the brand voice rules captured during the rebrand:
- **Spanish-first where both languages share space**: the hero tagline `Acciones hablan más fuerte.` is the same in both locales — Spanish carries the brand emotion.
- **Both locales always**: every key in the EN block must have a counterpart in the ES block. The dictionary's `t()` function falls back to the key name itself if a translation is missing, which makes the bug visible — but don't ship that.

---

## Scripts

```bash
pnpm dev          # Dev server with Turbopack (port 3000)
pnpm build        # Production build
pnpm start        # Production server (after build)
pnpm lint         # ESLint
```

For typechecking, use `npx tsc --noEmit` directly — there's no shorthand script (yet).

## License

Private and proprietary to 434 Media. Not for redistribution.

---