# Changelog

All notable changes to the BeepWeep parent-company site are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed
- Scale partner logo sizing by +30% across desktop, tablet, and mobile with broadened grid layout for enhanced legibility.
- Complete Dark Theme across the entire site (`data-theme="dark"`) with automatic system preference detection and localStorage persistence.
- Theme Switcher button right at the top header actions (desktop and mobile) and inside the mobile navigation drawer.
- Razor-sharp white monochrome partner logos in dark theme (`brightness(0) invert(1)`) eliminating muddy contrast against dark obsidian surfaces.
- Dedicated silk artwork backgrounds and live interface overlays across all four fleet panels (ClusterBid, Neev, Curat, VeriCite).
- Redesigned 1200x630 Open Graph card (`assets/images/og-beepweep.png`) with editorial branding, canonical product roster, and architectural strip.
- New "BW" monogram favicon system: `favicon.svg`, multi-resolution `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, and `site.webmanifest`.
- Complete Schema.org JSON-LD structured data on all pages (`Organization`, `WebSite`, `ItemList`, `ContactPage`, `WebPage`).
- Outbound product link and CTA lead intent event tracking in Google Analytics 4.

### Changed
- Update ClusterBid messaging to reflect its live production status and production cluster availability.
- Apply a shared layered product visual to all four fleet panels, using an edge-to-edge background and subtle foreground reveal animation.
- Refresh sitemap.xml with current lastmod timestamps and image metadata.

### Fixed
- Point VeriCite showcase badge and fleet panel "Visit Website" button to https://vericite.ai instead of the console sign-in URL.
- Calibrate optical logo sizing across all 8 partner logos so wide marks (DAMAC, Australia) and chunky marks (AWS, Zoho, PwC, Reliance, VIT, DigitalOcean) share uniform visual stature.
- Remove scale transforms and ambient wave loops on partner logos for completely stable, zero-shift hover behavior.
- Compact single-line announcement on mobile and tablet.
- Consolidate mobile actions in the hamburger menu, correct drawer height and touch scrolling, tighten link spacing, and restore CTA contrast.

## [2026-09-17]

### Added
- Harvey-neutral editorial redesign for beepweep.com
- Product fleet in canonical order: ClusterBid, Neev, Curat, VeriCite
- Live product logos, login destinations, and Visit Website CTAs
- Interactive journey timeline with cursor line and row highlight
- Self-hosted serif/sans fonts under `assets/fonts/`

### Changed
- Brand is BeepWeep only (no Ventures in chrome)
- Header CTA is Book a Call
- Leadership grid lists CTO Abhishek Kaushik first
- SEO title uses Built with Purpose. For what comes next.
- Mobile header prevents flex wrapping and preserves clean 72px single-row layout
- Mobile navigation drawer redesigned with left-aligned full-width links, Book a Call CTA, and dedicated Fleet & Platform Logins section
- Section anchor targets offset by sticky header height via scroll-margin-top

### Fixed
- Fixed mobile header wrapping into two rows on narrow viewports
- Fixed desktop login dropdown clipping off-screen when opened on mobile
- Fixed mobile nav and login dropdown opening simultaneously
- Decoupled login dropdown and ambient partner wave initialization from cookie banner scope
- Added body scroll lock on open mobile menu and smooth close on anchor navigation

### Removed
- Pre-production / stage pills on live products
- Footer Dubai · Gurgaon line
- Em dashes site-wide
