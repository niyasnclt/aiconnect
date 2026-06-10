# AI Connect Kerala — Website

The official landing page for **AI Connect Kerala**, Kerala's flagship AI community.
Built with [Astro](https://astro.build) for static output — zero client JavaScript by
default, fast Core Web Vitals, and excellent SEO. Designed to be hosted on **Cloudflare Pages**.

## Tech choices (and why)

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | **Astro (static)** | Ships pure HTML/CSS, no JS runtime → best Lighthouse/SEO scores on Cloudflare's edge |
| Styling | Hand-authored CSS + design tokens | No framework runtime, tiny payload, full design control |
| Fonts | Self-hosted (`@fontsource`) | Served from your own origin — no third-party requests, better privacy + LCP |
| SEO | Meta + Open Graph + Twitter + JSON-LD + sitemap | Rich previews and search indexing out of the box |
| Hosting | Cloudflare Pages | Global edge CDN, free TLS, instant cache via `_headers` |

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
public/            Static assets (favicon, OG image, robots.txt, _headers)
src/
  components/      Section components (Hero, About, Events, …)
  data/site.ts     Shared site metadata + content (edit links/contact here)
  layouts/         Base HTML layout with all SEO tags + JSON-LD
  pages/index.astro  Page composition
  styles/global.css  Design tokens + shared styles
astro.config.mjs   Set your production `site` URL here
```

## Deploying to Cloudflare Pages

1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare picks up `public/_headers` automatically for caching + security headers.

> Before going live, update the production domain in **two** places:
> `astro.config.mjs` (`site`) and `src/data/site.ts` (`url`), plus the `Sitemap:`
> line in `public/robots.txt`. This keeps canonical URLs, Open Graph tags, and the
> sitemap correct.

### Deploy from the CLI (optional)

```bash
npm run build
npx wrangler pages deploy dist --project-name ai-connect-kerala
```

## Editing content

Most copy lives inside the section components in `src/components/`. Shared values
(community name, email, phone, social links) live in `src/data/site.ts`.
