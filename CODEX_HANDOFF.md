# CODEX_HANDOFF.md — CVS Project Excellence

## Executive summary

Project Excellence is a mobile-first operational knowledge website created for Zachery Jones’s CVS Retail Management Internship capstone. It is intended to provide fast point-of-need support for CVS Photo tasks through workstation hubs, step-by-step guides, supply references, troubleshooting, support contacts, and QR entry points.

The immediate focus has been the Epson SureColor P6000 **Load Roll Paper** guide. The central requirement is to use the exact approved visual set that Zachery previously supplied and that Atlas organized.

## Current repository and route

- Repository: `zachjones04/project-excellence`
- Branch used for the live site: `main`
- Live site: `https://zachjones04.github.io/project-excellence/`
- Target routes: `#poster-printer`, `#guide-load-paper`, `#guide-replace-ink`, `#guide-poster-troubleshooting`

## Current state as of July 9, 2026

End-session closeout: Zachery explicitly requested the public whole-site version bump and project record update. The site now displays version `2.6`, and `index.html` uses cache key `20260709-end-session-v26`.

Overnight-style follow-up work added Main Photo quick-guide coverage without changing the public version number. The Main Photo Product Guides now have text-first seven-step quick guides for Canvas, Photo Books, Calendars, Magnets, and Cards & Specialty Products. Main Photo Printer Maintenance is now a hub with dedicated equipment checks for the general checklist, Kodak 305, Kodak 7000, Kodak 8810, Fujifilm CX3240, and Kodak Kiosk.

The Google Drive photo library contains raw/reference photos for Kodak 305, Kodak 7000, Kodak 8810, Fujifilm CX3240, and Kodak Kiosk. Those photo sets are mapped in `MAIN_PHOTO_REFERENCE_PHOTO_MAP.md`. July 10, 2026 follow-up: selected Main Photo equipment photos are now exported into `assets/main-photo/` and wired into the Kodak 305, Kodak 7000, Kodak 8810, Fujifilm CX3240, and Kodak Kiosk guide steps. Each of those equipment guides now has a real in-store overview photo plus one practical inspection/action photo. Remaining Drive photos are still reference/source photos until specifically selected.

Second overnight follow-up work completed the remaining IPOS/Register guide placeholders. `#guide-photo-checkout`, `#guide-qr-pickup`, `#guide-register-troubleshooting`, and `#guide-customer-questions` now render as seven-step employee quick guides. The shared support pages no longer show blank contact placeholders; they now provide route-aware escalation guidance for Main Photo, Poster Printer, and IPOS. A full route audit after this update found zero placeholder routes.

The poster-printer hub is intentionally simplified to task categories only: Supplies & Item Numbers, Load Roll Paper, Replace Ink, Troubleshooting, and Support Contacts. The broader **Full Poster Printer Guide** route still exists at `#guide-poster-products` for reuse/reference, but it is not shown as a top-level hub card.

New website-ready P6000 assets added:

- `assets/p6000/overview.jpg`
- `assets/p6000/loaded-roll.jpg`

The Load Roll Paper guide now uses 10 local in-store photos:

- `assets/p6000/unlock-lever.jpg`
- `assets/p6000/slide-holder-left.jpg`
- `assets/p6000/holder-clear.jpg`
- `assets/p6000/remove.jpg`
- `assets/p6000/adapter-lever.jpg`
- `assets/p6000/adapter-removed.jpg`
- `assets/p6000/prepare.jpg`
- `assets/p6000/seat.jpg`
- `assets/p6000/feed.jpg`
- `assets/p6000/verify.jpg`

The placeholder `#guide-replace-ink` and `#guide-poster-troubleshooting` pages have been replaced with simple employee quick guides. The ink and troubleshooting pages are text-first until the Drive ink/output photos are selected and converted into approved website-ready assets.

## Current state as of July 7, 2026

The approved six JPG images are now present in the repository under `assets/p6000/`, and the current `data.js` references those local JPGs. The installation commit is:

- `2cfb64eb122ecc4d884749c61951664063a714db` — **Install approved P6000 guide photos**

The current `data.js` still displays whole-site version `2.5`. That number was created during an earlier single-page iteration and should not be incremented for further Load Roll Paper refinements.

The current site references:

- `assets/p6000/open.jpg`
- `assets/p6000/remove.jpg`
- `assets/p6000/prepare.jpg`
- `assets/p6000/seat.jpg`
- `assets/p6000/feed.jpg`
- `assets/p6000/verify.jpg`

The current `index.html` uses the cache key `20260706-p6000-approved-jpgs` for CSS and JS resources.

This handoff does **not** claim that the public GitHub Pages route has been independently rendered and verified after the latest commit. Codex must distinguish repository state, deployment status, and live browser verification.

## Approved image set

The approved web-ready visual set is:

- `open.jpg`
- `remove.jpg`
- `prepare.jpg`
- `seat.jpg`
- `feed.jpg`
- `verify.jpg`

These files originated from the visual guide Zachery approved and were organized earlier by Atlas. Zachery repeatedly stated that he needs these exact visuals, not replacements.

## Original uploaded P6000 source files

The original source set identified in the conversation is:

1. `IMG_D4135C68-02A7-4A8F-94E7-8BDBC56FCC4A.jpeg`
2. `IMG_EF19B919-ED7D-420C-85FC-CFB77CEC65C0.jpeg`
3. `IMG_845C079F-30B8-4AFD-BC80-951D05C57ADC.jpeg`
4. `IMG_422C8A2C-E4A6-4F11-9317-D54B74CD5EE3.jpeg`
5. `IMG_BC5EA69A-BA26-47C3-A62F-BA3083FEDF02.jpeg`
6. `IMG_9BEEF0A8-C87F-45F3-AA6E-AA449C73E3EE.jpeg`
7. `IMG_B738C539-7E2E-48CA-9129-4A2C462B0C93.jpeg`

These mostly show photographed instruction/manual pages and should be preserved as source evidence.

## Relevant project history

### v2.2 problems

An earlier v2.2 release had broken links, missing icons, and workaround behavior. It should not be treated as a trustworthy current baseline.

### v2.3 repair

The app shell, data structure, route behavior, icon handling, and Pages workflow were repaired. Deployment verification remained limited.

### v2.4 guide redesign

The internal “master guide template” treatment was removed from the public website and replaced with an employee-facing six-step guide. The public master-template concept was rejected because Zachery viewed it as an internal resource rather than website content.

The first v2.4 visual implementation used illustrations rather than the exact desired photos. Zachery rejected that direction.

### Poster reference

Zachery supplied a poster-style reference titled **Load Roll Paper — Epson SureColor P6000**. It contains a 12-step visual layout, materials, cautions, quality checks, common mistakes, escalation criteria, and a QR section. It is a design/reference source, not necessarily the exact final mobile page layout.

### Failed photo deployment attempts

Several failed or incomplete approaches occurred:

- Generated/illustrated images were used instead of Zachery’s approved visuals.
- Epson-hosted images were temporarily referenced.
- An incomplete JPG-inside-SVG wrapper workaround was attempted.
- The site version was incorrectly bumped during repeated work on a single page.
- Some responses claimed progress before the public site had been independently verified.
- One update stalled without a timely status report.

These failures led Zachery to establish stricter rules: exact photos, no page-only version bump, realistic time estimates, and immediate honesty about problems.

### Approved image installation

A later workflow successfully placed the approved JPG files in the repository and changed `data.js` to reference them. Relevant recent commits include:

- `13d9ba90d3ffa0aca921a94bfb24cb7a8b9b20fd` — Add approved photos to P6000 load guide
- `7c2eb76984fed40ffee4b84c08b845a9722d60a0` — Clean P6000 guide photo layout
- `00cb140306ef9800e42ab42e3fbcbb8206363095` — Publish P6000 photo guide cache refresh
- `c20917c72b46931c12eb7764590efdc698b9073e` — Add one-time approved P6000 photo publisher
- `3d4f2f20951af9b0dfeb2c4d2a3328add0e2a8ff` — Remove failed P6000 publishing workflow
- `cb8a0dd3dc17da0376434f1c11180fa7ead55e5e` — Add one-time P6000 image diagnostic
- `42d61fdf136990256266711e5783f71a2ad2e641` — Record P6000 historical image diagnostic
- `2cfb64eb122ecc4d884749c61951664063a714db` — Install approved P6000 guide photos

Codex should inspect the repository history before deleting any diagnostic or historical files.

## Zachery’s communication and workflow preferences

- Zachery calls the assistant **Atlas**.
- Give a realistic time estimate before substantial work.
- Do not use the old generic five-minute warning.
- Be honest rather than reassuring by default.
- Advice requests: explain recommendation, rationale, and risks, then wait for approval.
- Direct instructions: execute, subject to the preview/publish gate.
- For website changes: draft and test first; publish only after explicit approval.
- Do not claim device testing, QR testing, or public deployment verification unless it happened.
- Do not update the Excel dashboard or Project Bible during website implementation unless asked.

## GitHub Desktop and VS Code context

Zachery installed GitHub Desktop and VS Code to support the project. He initially instructed Atlas not to use them until the original images were found. The images were subsequently found and organized. Codex may work in the local repository, but must still explain any significant workflow change and honor the preview-before-publish rule.

## Repository boundary

The GitHub repository should remain focused on website code, website content, website assets, QR codes, deployment configuration, and minimal agent operating instructions. Project planning, research history, capstone records, testing history, and long-form revision history belong outside the public website repository unless Zachery explicitly approves otherwise.

## Immediate Codex onboarding task

Before making changes, Codex should:

1. Read `AGENTS.md` and this file.
2. Inspect the current branch, working tree, and recent commit history.
3. Confirm that all six approved JPGs exist and are referenced by `data.js`.
4. Run the site locally.
5. Open `#guide-load-paper` and verify the six images visually.
6. Check mobile and desktop layouts.
7. Report whether the live public route matches the repository.
8. Do not change the version number.
9. Do not publish a new change until Zachery approves the preview.

## Definition of done for the current guide

The Load Roll Paper guide is complete only when:

- The six approved local photos are displayed.
- No generated, SVG, or external Epson image is used as a replacement.
- The page is readable and useful on a phone.
- The route opens directly.
- Back navigation works.
- All images have useful alt text.
- No console errors occur.
- The page is previewed and approved by Zachery.
- The approved revision is published.
- The public page is independently opened and verified after deployment.
