# Ironwood Renos (Static HTML/CSS)

Minimal, three-page static site (Home, Contact, Thank You) ready to host on Netlify from a GitHub repo. No build step, frameworks, or dependencies—just plain HTML, a single CSS file, and a tiny JS helper.

## Pages
- `index.html` – hero, services, gallery tiles, testimonials, and CTA.
- `contact.html` – contact info and a simple form that navigates to the thank-you page (GET action, no external submission).
- `thank-you.html` – confirmation page with a link back to Home.

## Assets
- `css/style.css` – mobile-first styles, responsive grids, nav toggle styling, and footer logo treatment.
- `js/main.js` – mobile nav toggle + Escape close, body no-scroll lock, close on nav link, and dynamic footer year.
- `images/` – hero and gallery assets plus the Code Forged Digital logo.
- `_headers` – optional Netlify headers (CSP, HSTS, X-Frame-Options, etc.).

## Running locally
Just open `index.html` in your browser or serve the folder (e.g., VS Code Live Server or `npx serve`). There’s nothing to install.

## Deploying to Netlify from GitHub
1) Push this folder to a GitHub repository.  
2) In Netlify, click “Add new site” → “Import from Git”.  
3) Select your repo, leave build settings empty (no build command), and set the publish directory to the repo root.  
4) Deploy. The `_headers` file will apply security headers automatically.

## Notes
- Responsive by default; grids collapse to single column on small screens.
- Hero uses `preload` for LCP; other images use `loading="lazy"` where appropriate.
- No external dependencies, no analytics, no forms posting off-site; the contact form simply routes to `thank-you.html`.
