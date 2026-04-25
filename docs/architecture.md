# GoWin Tools — Architecture

## Overview

GoWin Tools is a statically exported Next.js application deployed to Cloudflare Pages. There is no backend, no database, and no server-side processing of user data.

```
Browser
  └── Static HTML/CSS/JS (served from Cloudflare CDN)
        └── React components (run entirely client-side)
              └── Tool logic (pure TypeScript functions)
```

## Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | Next.js 16 (App Router) | File-based routing, TypeScript-first, strong ecosystem |
| Language | TypeScript | Type safety across all tool logic and UI |
| Styling | Tailwind CSS v4 | Utility-first, consistent design system |
| Export | `output: 'export'` | Generates static HTML/CSS/JS, no Node.js runtime needed |
| Hosting | Cloudflare Pages | Global CDN, generous free tier, edge caching |

## Directory Structure (conceptual)

```
app/
  page.tsx                  ← Homepage
  tools/
    [slug]/
      page.tsx              ← Tool page shell (layout + metadata)
  blog/
    [slug]/
      page.tsx              ← Blog post page

components/
  ToolName.tsx              ← Interactive tool component (client-side)

lib/
  tools.ts                  ← Tool registry (slug, name, category, articles)
  text.ts                   ← Pure text utility functions
  bmi.ts                    ← BMI calculation logic
  ...                       ← One file per tool domain
```

## Tool Registry

All tools are registered in a single `lib/tools.ts` file as a typed array. This drives:

- The homepage tool grid
- Navigation and search
- The sitemap (auto-generated from live tools)
- Article associations

Adding a new tool means adding one entry to the registry and creating one page file.

## Tool Page Pattern

Each tool page follows a three-column layout:

1. **Col 1 (tool card):** The interactive component — fills remaining space
2. **Col 2 (how it works):** Contextual explanation — 256px wide, hidden on mobile
3. **Col 3 (articles):** Related blog posts — 192px wide, hidden below xl

On mobile, only the tool card is shown. The information hierarchy prioritises getting to the tool immediately.

## Static Export Constraints

Because the site is statically exported, there is no:

- Server-side rendering at request time
- API routes that process user data
- Session management or authentication
- Dynamic data fetching on the server

Everything is either baked into the HTML at build time (metadata, content) or runs in the browser (tool logic, user input).

## Sitemap

`app/sitemap.ts` auto-generates from the tool registry. A tool appears in the sitemap when its `comingSoon` flag is removed. No manual edits required.

## Analytics

Page view counts are collected via a privacy-respecting aggregated counter. No personal identifiers, no session tracking, no cross-site fingerprinting. The analytics store only: page slug + increment.
