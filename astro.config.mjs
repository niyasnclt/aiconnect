// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update this to your production domain before deploying to Cloudflare Pages.
const SITE_URL = 'https://aiconnectkerala.in';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Static output is the best fit for Cloudflare Pages: pure HTML/CSS, zero JS by
  // default, instant cache hits at the edge, and top SEO + Core Web Vitals scores.
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Inline tiny stylesheets to cut render-blocking requests.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
