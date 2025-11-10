# Ironwood Renos (Plain CSS)

A single-page static portfolio demo built by Code Forged Digital. This refactor removes Tailwind/PostCSS and uses a small, fast, hand-authored stylesheet for the same look and responsiveness.

## Structure
- `index.html` — single page
- `css/site.css` — minimal, mobile-first CSS
- `images/` — optimized WebP/JPG assets
- `_headers` — optional Netlify headers

## Usage
- Open `index.html` directly in a browser, or
- Serve locally with any static server (e.g., VS Code Live Server). No build step required.

## Notes
- Colors, spacing, and responsiveness match the original Tailwind design.
- Images use `srcset`/`sizes` and `loading="lazy"` where appropriate for fast loads.
- Accessibility helpers include a visible-on-focus skip link and focus outlines on interactive elements.
