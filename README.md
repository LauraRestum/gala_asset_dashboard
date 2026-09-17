# Gala asset dashboard

A collateral matrix for the Envision Gala 2026 ("A Night For Vision"),
Saturday, October 24, 2026 at the Wichita Art Museum. Built in the same
style as the Wichita Fore Vision golf tournament collateral matrix.

Open `index.html` in a browser. Static site, no build step; the only
external dependency is the Montserrat webfont from Google Fonts.

## What it shows

- A sticky sidebar with the event details, overall progress, and section
  navigation (Invitations & Print, Digital, Event Signage, Show &
  Presentation, Program Spotlight Segments)
- One tile per collateral piece: art preview with click-to-zoom modal
  (prev/next arrows), or a dashed placeholder for pieces without art yet
- A status chip on every tile (Complete / Draft / In production /
  Not started) plus due-date chips where deadlines exist
- Links on each tile to the full design in Canva and to the piece's
  ClickUp task, where the gala team leaves notes

## Structure

- `index.html`, `styles.css`, `script.js` — the site; the collateral list
  lives in `sectionConfig` at the top of `script.js`
- `assets/` — preview images exported from the Canva working files

## Data

Snapshot of September 17, 2026, pulled from the ClickUp Gala list (25
tasks), Canva, and Google Drive. To refresh, ask Claude to re-pull
statuses, re-export previews, and republish.
