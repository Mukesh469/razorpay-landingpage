# Razorpay Landing Page (React + Vite)

Clean, responsive landing page built with React, Vite and Tailwind CSS. This repository contains the UI for a Razorpay-style product highlight landing page with stacked card animations using GSAP.



**Tech stack:** `React 19`, `Vite`, `Tailwind CSS`, `GSAP`, `Framer Motion`, `React Router`, `Swiper`.

**Contents:** source files are under `src/` and static assets under `public/` and `src/assets/`.

**Status:** Development-ready. Use the instructions below to run locally, build and publish to GitHub Pages, Netlify or Vercel.

**Screenshots / Demo**
- Add screenshots or a link to a deployed demo here (optional).

**Project structure (important files)**
- `index.html` — Vite entry HTML
- `src/main.jsx` — React entry
- `src/App.jsx` — App wrapper and routes
- `src/components/` — UI components (header, footer, pages)
- `src/hooks/` — custom hooks (e.g., `useStackScroll`)
- `src/assets/` — images and static assets
- `vite.config.js`, `package.json` — project config and scripts

**Prerequisites**
- Node.js 18+ (LTS recommended)
- npm (or yarn/pnpm if you prefer)

**Quick start (development)**
1. Clone the repository:

```bash
git clone https://github.com/<your-username>/razorpay-landing-page.git
cd razorpay-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server with HMR:

```bash
npm run dev
```

Open `http://localhost:5173` (or the address printed by Vite) to view the site.

**Available scripts**
- `npm run dev` — start development server (Vite)
- `npm run build` — build production assets
- `npm run preview` — locally preview production build
- `npm run lint` — run ESLint across the project

**Build & deploy**
1. Build for production:

```bash
npm run build
```

2. Preview the built site locally:

```bash
npm run preview
```

3. Deploy options:
- GitHub Pages: push the `dist/` build to the `gh-pages` branch (use a simple action or the `gh-pages` npm package).
- Netlify / Vercel: connect your repo and configure the build command `npm run build` and publish directory `dist`.

**Styling & assets**
- Tailwind is used for utility-first CSS. Check `tailwind.config.js` (if present) to adjust theme and paths.

**Animation**
- GSAP + ScrollTrigger are used for the stacked card reveal (`useStackScroll` hook). If you need to tune spacing or the scroll pin behavior, edit `src/hooks/useStackScroll.js`.

**Common tweaks**
- If content appears cut off after the pinned stacked section, increase the spacing option passed to `useStackScroll` or add extra bottom padding to the section. Example: `useStackScroll(sectionRef, cardRefs, { spacing: 600 })`.

**Contributing**
- Fork the repo and create a branch for your feature: `git checkout -b feat/your-feature`
- Open a pull request with a clear description and screenshots (if UI changes).

**License**
- This project is licensed under the MIT License. See the `LICENSE` file for details: `./LICENSE`.

**Contact / Author**
- Mukesh Kumar
- Gmail: mukesh512004@gmail.com
- Github: https://github.com/Mukesh469/


## 📸 Screenshots

### Desktop View
![Desktop](./screenshots/desktop.png)

### Mobile View
![Mobile](./screenshots/mobile.png)

![Mobile](./screenshots/mobile2.png)

### Animation / Tablet View
![Tablet / Animation](./screenshots/tablet.png)