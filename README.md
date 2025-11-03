# Ironwood Renos

**Ironwood Renos** is a single-page static demo website built by [Code Forged Digital](https://codeforgeddigital.ca).  
This rebooted version focuses on simplicity, clean structure, and fast performance — serving as a baseline before adding Tailwind CSS or CMS integration.

---

## 🌐 Live Site

[https://ironwoodrenos.codeforgeddigital.ca](https://ironwoodrenos.codeforgeddigital.ca)

---

## 📁 Project Structure

    /
├── index.html # Static one-page layout (no JSON or JS loaders)
├── css/
│ └── style.css # Minimal responsive CSS using custom variables
├── images/
│ ├── ironwood-renos-banner.webp
│ ├── project1.jpg
│ ├── project2.jpg
│ ├── project3.jpg
│ └── project4.jpg
├── .gitignore
├── package.json
└── README.md


---

## 🛠️ Technologies Used

- **HTML5** — semantic, single-page structure  
- **CSS3** — lightweight custom styles (no frameworks)  
- **Node (http-server)** — simple local dev server  
- **Netlify** — hosting and continuous deployment  

---

## ✨ Features

- Hero section with banner and call-to-action  
- Services section with three key offerings  
- Gallery showcasing four projects  
- Testimonials from clients  
- Static contact section (form disabled for demo)  
- Responsive layout optimized for mobile and desktop  

---

## 🚀 Development

### Run locally
```bash
npm install
npm run dev

Then open: http://localhost:5174

Deploy

Push to GitHub and connect to Netlify.
No build command required — just serve index.html as the site root.