// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { comingSoon } from './release.mjs';

// Custom-domain deployment. Configure this domain in GitHub Pages before publishing.
const SITE = 'https://lucasclutter.com';
const BASE = '/';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  publicDir: comingSoon ? './public-landing' : './public',
  integrations: [mdx(), sitemap(), {
    name: 'portfolio-release',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        if (comingSoon) return;
        injectRoute({ pattern: '/about', entrypoint: './src/portfolio/about.astro' });
        injectRoute({ pattern: '/contact', entrypoint: './src/portfolio/contact.astro' });
        injectRoute({ pattern: '/work/[...slug]', entrypoint: './src/portfolio/work/[...slug].astro' });
      },
    },
  }],
});
