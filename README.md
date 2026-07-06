# Qurbanəli Feyzullayev Portfolio

Personal portfolio website for `qurbaneliii`, built for GitHub Pages.

Live URL: <https://qurbaneliii.github.io>

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- GitHub Actions
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

This repository is configured for GitHub Pages through `.github/workflows/deploy.yml`.

For the user Pages repository `qurbaneliii.github.io`, Vite uses:

```ts
base: '/'
```

If Pages does not deploy automatically, enable:

`Settings -> Pages -> Source -> GitHub Actions`

## Content Notes

Featured projects are curated in `src/data/projects.ts` using public repository evidence. The lightweight GitHub section uses the public unauthenticated GitHub API and falls back gracefully if rate-limited.
