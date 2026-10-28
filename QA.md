# Redesign verification — 28 October 2026

The showcase is buildless HTML, CSS, and JavaScript. There is no package installation, bundler, or application test suite to run.

## Checks completed

- `node --check app.js` passed.
- HTML references, stylesheet/script asset references, internal anchors, unique static IDs, and contact email targets passed a local source audit.
- The supplied replacement copy was checked verbatim. App names, age ranges, feature details, development status, optional video caveat, and privacy information remain accurate.
- Browser layout checks at **320, 390, 768, 1024, and 1440 CSS pixels** found no horizontal page overflow and no truncated descriptions or buttons. The collection uses one column on mobile and two on tablet/desktop.
- Desktop, tablet, and mobile layouts were visually inspected. On smaller screens, the hero illustration sits below the text so all characters remain visible.
- All three filters show the correct app sets and update their pressed states and live status message.
- All four preview dialogs open the correct details. Real development screenshots are kept in the product previews; Animated Stories explicitly labels its illustration.
- The skip link is the first keyboard target and focuses the main content. Keyboard activation, Tab/Shift+Tab within dialogs, Escape dismissal, backdrop dismissal, and focus return to the opening control passed. The privacy dialog also cycles between its close button and email link.
- FAQ expansion and collapse work with the keyboard. Contact and repository links retain their intended targets.
- A rendered-style contrast audit checked **58 text elements** on the main page with **no failures**. The minimum was **4.53:1** (blue headline against sky). White button labels have at least **5.03:1**; navy on the yellow button has **8.75:1**. The active filter count was corrected to keep its full button contrast.
- `prefers-reduced-motion: reduce` disables smooth scrolling, transitions, and animations. This was checked in the source; an operating-system preference change was not required.
- No browser console errors were observed during the local interaction checks.

## Delivery

Five new illustrations are exported as WebP assets, approximately **1.17 MB combined**. Full PNG masters remain in the local project workspace. The generation prompts are saved beside the images. Existing screenshot assets are unchanged.

The website continues to introduce apps in development. It does not offer app downloads, photo uploads, account creation, or story generation.
