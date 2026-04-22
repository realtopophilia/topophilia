# Topophilia

Personal site for writing and projects on civic technology and urban policy.

## Setup

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build
```

One extra dependency needed for the Tailwind typography plugin:
```bash
npm install @tailwindcss/typography
```

## Adding content

### A new essay
Create `src/content/writing/your-slug.mdx`:
```mdx
---
title: "Your Essay Title"
description: "One sentence that describes it."
date: 2026-05-01
tags: ["urbanism", "pittsburgh"]
draft: false
---

Your essay content here. Standard Markdown works.
You can also import React components if needed.
```

Set `draft: true` to write without publishing.

### A new project
Create `src/content/work/your-project.mdx`:
```mdx
---
title: "Project Name"
description: "What it does, one sentence."
tags: ["civic tech", "next.js"]
url: "https://your-live-url.com"          # optional
github: "https://github.com/you/repo"    # optional
featured: true                            # shows on homepage
order: 1                                  # sort order
---

Write about the project here.
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo (e.g. `realtopophilia/topophilia`)
2. Go to vercel.com → New Project → import the repo
3. Framework preset: **Astro** (Vercel detects it automatically)
4. Deploy — done

To use a custom domain (e.g. `topophilia.city`):
- Vercel → Project Settings → Domains → Add
- Point your domain's DNS to Vercel's nameservers

## Customization

- **Colors**: `tailwind.config.mjs` — change `brick` to your accent color
- **Fonts**: `src/layouts/BaseLayout.astro` — swap the Google Fonts link
- **About page**: `src/pages/about.astro` — replace the placeholder text
- **Site URL**: `astro.config.mjs` — update the `site` field to your domain
