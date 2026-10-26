# myportfolio

React + Vite + TypeScript portfolio site, deployed to GitHub Pages via `gh-pages` (`npm run deploy`), hosted at nathanuel0322.github.io/myportfolio/.

## Commands
- `npm run dev` — start dev server (Vite, port 5173)
- `npm run build` — production build
- `npm run deploy` — build + publish `dist/` to GitHub Pages

## Content data pattern
Project/experience content lives in `src/projectarr.ts` as typed arrays (`projects`, `homelabProjects`, `experiences`), consumed by `src/components/MyHomelab.tsx` and `src/components/Experience.tsx`. Don't hardcode copy in components — edit the arrays instead.

- `description` strings use `.` as a bullet-item delimiter (split into `<li>` items).
- `|text|` marks a highlighted span within a bullet (alternating segments render as `highlighted` / `highlighted-white`).

## Animation
Import from `@react-spring/web`, not the `react-spring` umbrella package — the umbrella package pulls in unused `@react-spring/native` (React Native/Metro/Jest toolchain) as a transitive dependency, which was the source of most npm audit / Dependabot findings (fixed in `5f7d88c`).

## Homelab content
The "My Homelab" section is sourced from `../homelab` (a separate private repo). That repo's CLAUDE.md marks certain files/facts as secret (IPs, hostnames, tokens, internal file paths) — never copy those into this public repo. Only general, non-sensitive descriptions of services/architecture belong here.

## Known remaining vulnerabilities
Tailwind v3's build-time dep chain (`chokidar`/`braces`/`micromatch`/`fast-glob`) accounts for all remaining `npm audit` findings as of `5f7d88c`. Fixing requires a Tailwind v4 migration — not yet done, deliberately deferred.
