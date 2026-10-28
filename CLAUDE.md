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
- Because `.` splits bullets, names containing dots must be written without them (`NextJS`, `NodeJS`, not `Next.js`).
- `projects[0]` is the "Featured Project" card in `mywork.tsx`, which hardcodes widgie's screenshot grid — reordering the array changes the featured card.
- `link1` must be a public URL that actually loads, and `sourceCode` must be a public repo (a private repo 404s for visitors). With neither, set `inprogress: true` to show an "In Progress" label, or the card shows no button.
- `src/components/Buttons.tsx` renders an `<a target="_blank">` when it has a link and a plain `<span>` for "In Progress"/no link; use it for project and source-code links rather than `window.open` buttons.
- The `<noscript>` fallback in `index.html` duplicates the content for crawlers; update it when the arrays change.

## Navigation
- Section links are listed twice: in `Header.tsx` (desktop) and `TemporaryDrawer.tsx` (mobile drawer). Keep them in sync, and use `<a href="#id">` with `preventDefault` + smooth scroll, not clickable divs.
- The desktop nav only shows at ≥1440px (`header.css`); below that the drawer button is used. Six links + "Contact me" don't fit on one row any narrower — re-check the breakpoint if adding a link.

## File-name case
Several component files are lowercase (`mywork.tsx`, `aboutmeskills.tsx`, `specialized.tsx`, `contactme.tsx`, `topblock.tsx`). Import them with the exact on-disk case: macOS ignores case so mismatches build locally but break on Linux.

## Animation
Import from `@react-spring/web`, not the `react-spring` umbrella package — the umbrella package pulls in unused `@react-spring/native` (React Native/Metro/Jest toolchain) as a transitive dependency, which was the source of most npm audit / Dependabot findings (fixed in `5f7d88c`).

## Homelab content
The "My Homelab" section is sourced from `../homelab` (a separate private repo). That repo's CLAUDE.md marks certain files/facts as secret (IPs, hostnames, tokens, internal file paths) — never copy those into this public repo. Only general, non-sensitive descriptions of services/architecture belong here.

## Dependency vulnerability history
- `esbuild` (GHSA-67mh-4wv8-2f99, dev-server request forgery) — fixed in `a9b5449` by bumping `vite` ^4.5.5 → ^6.4.3 (pulls esbuild 0.25+); `@vitejs/plugin-react` and `vite-plugin-svgr` bumped alongside for compatibility.
- `js-yaml` (CVE-2026-59869/59870, quadratic-CPU DoS via YAML merge keys) — fixed by `npm audit fix` plus removal of the `react-spring` umbrella package's React Native toolchain in `5f7d88c`, which was the other source of the vulnerable 3.x line.

## Known remaining vulnerabilities
Tailwind v3's build-time dep chain (`chokidar`/`braces`/`micromatch`/`fast-glob`) accounts for all remaining `npm audit` findings as of `5f7d88c`. GitHub's Dependabot rescan confirms this is down to 1 moderate alert. Fixing requires a Tailwind v4 migration — not yet done, deliberately deferred.

## Spelling and grammar

`copycheck` (`~/SideWork/copycheck`) checks user-facing text with cspell and a local LanguageTool server. The local pre-commit hook runs `copycheck --staged --warn`, so it only warns; it lives in `.git/hooks`, not the repo, so a fresh clone needs `copycheck hook`. Run `copycheck` before committing copy changes and fix real mistakes. Proper nouns and project words go in `cspell.json`.
