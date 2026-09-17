# Gala asset dashboard

A single-page dashboard tracking every piece of collateral being built for the
Envision Gala 2026 ("A Night For Vision").

Open `index.html` in a browser. No build step, no dependencies beyond the
Montserrat webfont loaded from Google Fonts.

## What it shows

- 25 collateral pieces from the ClickUp **Gala** list, grouped by workstream
  (print and invitations, digital, event signage, show and presentation,
  program spotlight segments)
- Status, owner, and due date for each piece, with links to the ClickUp task
  and the working design file in Canva or Google Drive
- A production summary band and status filters
- Three themes (dark, light, high contrast) and an accessibility panel
  (text size, line spacing, reduced motion, readable text), per Envision's
  accessibility standards

## Data

The page is a static snapshot, last pulled **September 17, 2026** from:

- ClickUp: the Gala list (25 tasks) and the Gala 2026 project
- Canva: 2026-cycle design files
- Google Drive: the cocktail hour loop deck

To refresh, ask Claude to re-pull statuses and regenerate `index.html`.
