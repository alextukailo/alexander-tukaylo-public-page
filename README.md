# Alexander Tukaylo — React CV

Simple, ATS-readable personal resume website built with **React 19, TypeScript and Vite**. Includes all **13 projects** from both CVs.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Update CV content

Edit **`src/cv.json`** to update personal details, employment history, project descriptions, or skills. The React components live in `src/App.tsx`; styling and print rules live in `src/styles.css (Tailwind import, theme, print rules)`.

## Publish on GitHub Pages

1. Create a GitHub repository (for example, `YOUR_USERNAME.github.io` or `cv`).
2. Commit and push these files to the `main` branch.
3. Under **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`.
5. Open the Pages URL from the completed deployment. `base: './'` in Vite supports both root and repository subpaths.

> You do not need to upload a PDF. The **Print / Save as PDF** button opens the browser print dialog, letting recruiters download a local PDF copy. Some ATS systems still require an uploaded PDF or DOCX; a resume website alone does not guarantee ATS import.

## Design choices

- All project content remains in HTML after React renders; no hidden project tabs or animations.
- Semantic headings and articles, responsive design, keyboard focus states, reduced motion, and print stylesheet.
- No analytics, forms, external fonts or back-end service.
- Birth date and phone number are intentionally excluded from the public page.

## Commands

- `npm run dev` — development server
- `npm run build` — typecheck + production build
- `npm run preview` — locally preview compiled site

## Tailwind styling

This project uses Tailwind CSS v4 with the official `@tailwindcss/vite` plugin. Most styling is expressed as utility classes in `src/App.tsx`. The small `src/styles.css` file contains the Tailwind import, global typography and A4 print rules. No `tailwind.config.js` is needed.
