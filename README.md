# Ramona’s Little Worlds

A public, responsive showcase for **Colorland Adventures**, **Animated Stories**, **PuzzlesKids**, and **Little World of Discovery**, by Bondor Ramona Anisoara.

Live website: https://ramonabondor.github.io/ramona-kids-games/

## Run locally

No dependencies or build step are required. From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. The site includes responsive layouts, category filtering, accessible native preview dialogs, a family section, FAQ, and email contact. It has no analytics, cookies, uploads, or account system. All assets are local.

## Publish with GitHub Pages

In repository **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, and save. GitHub Pages serves `index.html` directly. The `.nojekyll` file disables Jekyll processing.

## Content and release status

Content reflects the existing local project documentation at the time this showcase was created. All four projects are presented as in development. No store availability, testimonials, reviews, download counts, or performance claims are implied. Add official store links only after publication is verified.

- Colorland: ages 3–7, 100 pictures, ten worlds, creative/learning modes, EN/FR/RO, offline.
- PuzzlesKids (in-app title: Puzzle Kids): ages 2–4, 60 levels, six worlds, sticker book, English voice, offline.
- Little World of Discovery: ages 2–6, 50 levels, five worlds, adjustable difficulty, EN/RO.
- Animated Stories: family storytelling, up to four characters, 6–8 pages, private library, PDF and optional MP4 export. Video availability depends on the release configuration. The open-book graphic is an illustration, not a product screenshot.

The public repository contains only the showcase and selected public-facing artwork/screenshots. It contains no game source, APKs, photo uploads, account data, environment files, keys, or credentials.

## Artwork and fonts

Project artwork and screenshots remain the property of their respective project owner. `flower.svg` and `storybook.svg` were created for this showcase. No third-party stock photography is used. Nunito by the Nunito Project Authors is bundled under the SIL Open Font License 1.1; see `assets/Nunito-OFL.txt`. Public repository visibility does not grant a license to the project artwork or application branding.

## Updating

Edit `index.html` for page copy, `styles.css` for layout, and `app.js` for modal details and filtering. Replace images in `assets/` as projects evolve. If the repository name changes, update the live link above, the footer repository link, and the Open Graph image URL.
