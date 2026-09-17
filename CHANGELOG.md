# Changelog

All notable changes to the BeepWeep parent-company site are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Fixed
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
