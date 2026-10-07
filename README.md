# Notica web (React + Vite)

Mobile-first redevelopment of notica.in. Site copy is carried over word-for-word from the old site and lives in `src/content.js`; store locations are in `src/data/locations.js`, reviews in `src/data/reviews.json`, menu in `src/data/categories.json`.

```bash
npm install
npm run dev       # local preview at http://localhost:5173
npm run build     # outputs dist/
npm run preview   # serve the built dist/ locally
```

## Deploy on a new server

`npm run build` creates a fully static `dist/` folder (relative paths, so it works at the domain root or in a sub-folder). Upload the **contents** of `dist/` to the web root (nginx / Apache / cPanel `public_html`, or Netlify / Vercel / Cloudflare Pages with build command `npm run build` and output directory `dist`). No server-side code is needed.

Note: `public/assets/media/` holds two ~71 MB videos; compress them before deploying if bandwidth matters.
