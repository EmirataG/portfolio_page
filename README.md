# portfolio_page: (Don't) README (not very usefule, read the portfolio page instead)

My personal site: resume, projects and blog posts.

Live at https://emiratag.github.io/portfolio_page/

Plain HTML, CSS and a few lines of TypeScript (for the lamp switch), built with Vite.

## Develop

```bash
npm install
npm run dev
```

## Structure

- `index.html` — the resume page
- `blog/` — the blog index and one HTML file per post
- `src/style.css`, `src/main.ts` — shared styles and the light/dark switch
- `public/` — favicon and blog images

A new blog post needs its own file in `blog/`, a link in `blog/index.html`, and an entry in `vite.config.ts`.

## Deploy

Every push to `main` is built and published to GitHub Pages by `.github/workflows/deploy.yml`.
