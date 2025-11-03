# Ironwood Renos

**Ironwood Renos** is a single-page static portfolio demo website built by [Code Forged Digital](https://codeforgeddigital.ca).  
It showcases a clean, modern renovation-services design using **Tailwind CSS** for full responsiveness and consistent branding.

---

## 🌐 Live Site
[https://ironwoodrenos.codeforgeddigital.ca](https://ironwoodrenos.codeforgeddigital.ca)

---

## 📁 Project Structure
/
├── index.html
├── css/
│ └── tw.css # Compiled Tailwind build output
├── src/
│ └── tailwind.css # Source Tailwind file with base + components
├── images/
│ ├── ironwood-renos-banner.webp
│ ├── project1.jpg
│ ├── project2.jpg
│ ├── project3.jpg
│ └── project4.jpg
├── tailwind.config.js
├── package.json
└── postcss.config.js

yaml
Copy code

---

## 🛠️ Technologies Used
- **HTML5** for structure  
- **Tailwind CSS v3** for utility-first styling  
- **PostCSS + Autoprefixer** for processing  
- **Netlify** for hosting and continuous deployment  
- Optional local preview using `http-server`

---

## ✨ Features
- Hero section with responsive background image  
- Service cards with consistent styling (`.card` component)  
- Gallery grid using `.img-tile` utilities  
- Testimonials section styled with Tailwind typography  
- Single call-to-action button in footer  
- Mobile-first layout with tight, consistent spacing (`.section` utility)

---

## 🚀 Local Development
1. Clone the repository  
   ```bash
   git clone https://github.com/YourUserName/ironwood-renos.git
   cd ironwood-renos
Install dependencies

bash
Copy code
npm install
Start Tailwind in watch mode

bash
Copy code
npm run tw:dev
Optional: run local preview

bash
Copy code
npm run dev
(opens http://localhost:5174)

📦 Build for Deployment
Generate a minified Tailwind build:

bash
Copy code
npm run tw:build
This outputs /css/tw.css, which is used directly in index.html.

🔗 Deployment
Automatically deployed to Netlify from the main branch.
No build command required when committing compiled tw.css.

🧱 Project Notes
Fully migrated to Tailwind — no legacy style.css remaining.

Placeholder footer CTA (“Request a Quote”) prepared for future Formspree integration.

No CMS integration in this version (static demo only).

Intended as a portfolio example under the Code Forged Digital brand.

🧑‍💻 Built By
Code Forged Digital
© 2025 Ironwood Renos · A Code Forged Digital Portfolio Project