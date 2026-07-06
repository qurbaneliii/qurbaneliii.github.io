# Gurbanali Feyzullayev Portfolio

Personal portfolio website for `qurbaneliii`, built with React, TypeScript, Vite, and Tailwind CSS, and deployed with GitHub Pages.

Live URL: <https://qurbaneliii.github.io>

## Overview

This repository contains the public portfolio website used to present projects, technical focus areas, and GitHub work. It is designed as a lightweight static frontend with curated project data and a GitHub Pages deployment workflow.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Deployment | GitHub Actions, GitHub Pages |

## Project Structure

```text
.
  src/                 Portfolio source code
  src/data/            Curated project data
  public/              Static assets
  .github/workflows/   GitHub Pages deployment
```

## Local Development

```bash
npm install
npm run dev
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite dev server |
| `npm run build` | Type-check and build the site |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Deployment

This repository is configured for GitHub Pages through `.github/workflows/deploy.yml`.

For the user Pages repository `qurbaneliii.github.io`, Vite uses `base: "/"`.

If Pages does not deploy automatically, enable:

```text
Settings -> Pages -> Source -> GitHub Actions
```

## Content Notes

Featured projects are curated in `src/data/projects.ts` using public repository evidence. The lightweight GitHub section uses the public unauthenticated GitHub API and falls back gracefully if rate-limited.

## Status

Status: Active portfolio website.
