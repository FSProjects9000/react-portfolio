# Filipe Simões — personal site

A small single-page site built with React + Vite.

## Structure

```
├── src/            # React source (App.jsx, main.jsx, styles)
├── public/          # Static assets served as-is (profile photo)
├── package.json
└── vite.config.js
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

`dist/` is what you deploy — e.g. copy it to your EC2 instance (behind
nginx or similar) as part of a GitHub Actions workflow.
