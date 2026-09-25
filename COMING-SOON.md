# Temporary landing page

The current release is an interactive coming-soon canvas. Nothing is deployed until you push changes through the existing GitHub Pages workflow.

- `release.mjs` controls the release. Change `comingSoon` to `false` to restore the full portfolio.
- The original homepage is preserved in `src/components/PortfolioHome.astro`.
- About, Contact, and case studies are preserved in `src/portfolio/`. Their routes are only registered for the full release.
- Coming-soon builds use `public-landing/`, so project images and videos in `public/work/` are not included.
- Add your public email and LinkedIn URL in `src/config.ts`. Until configured, the contact card shows non-clickable coming-soon labels.
- Drawings are temporary and local to the page. They are not uploaded or saved.

## Before publishing

Run `npm run build`, then `node scripts/check-landing.mjs`. Preview at desktop and mobile sizes. Confirm contact details, then commit and push when ready.

Changing the published site does not erase previous Git history, third-party caches, or copies of previously public work.
