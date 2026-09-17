# BeepWeep Ventures — Reference-Grounded Design Specification

## Overview

A ground-up redesign of BeepWeep Ventures as a parent company holding four frontier flagships: **ClusterBid**, **curat.money**, **VeriCite**, and **Neev**. Strictly aligned with the enterprise design system of **Harvey** (`https://www.harvey.ai/`).

## Color System (Harvey Neutral Tokens)

Directly measured from Harvey production stylesheets:
- `Canvas Primary`: `#fafaf9` (Warm Ivory)
- `Canvas Secondary`: `#f2f1f0` (Pale Gray)
- `Canvas Dark`: `#0f0e0d` (Pitch Ink)
- `Text Primary`: `#0f0e0d` (Dark Charcoal Ink)
- `Text Secondary`: `#706d66` (Muted Neutral Gray)
- `Text Tertiary`: `#57534e` (Darker Neutral Gray for WCAG AA contrast)
- `Text Inverse`: `#fafaf9` (Ivory)
- `Border Subtle`: `#e5e5e3` (Hairline Divider)
- `Border Primary`: `#cccac6` (Structural Line)
- `Border Dark`: `#383531` (Dark Section Divider)
- `Button Hover Dark`: `#33312c`
- `Accent Highlight`: `#f6f202` (Canary Yellow micro-badge accent)
- `Status Verified Green`: `#166534` (WCAG AA compliant green)

## Typography

Self-hosted local webfonts in `assets/fonts/`:
- `HarveySerifFont` (Regular & Italic `.woff2`)
- `HarveySansFont` (Diatype Variable `.woff2`)

Scale:
- `Hero H1`: clamp(3rem, 6vw, 4.75rem), line-height 1.04, tracking -0.025em
- `Section H2`: clamp(2rem, 3.5vw, 3rem), line-height 1.1, tracking -0.015em
- `H3`: clamp(1.35rem, 2vw, 1.75rem), line-height 1.25
- `Body Text`: 15px/16px, line-height 1.6
- `Subtitles`: 19px/20px, line-height 1.45

## Component & Section Architecture

1. **Announcement Bar**: Top subtle banner announcing the 2026 Fleet with persistent dismiss logic.
2. **Site Header**: Blur-glass backdrop (`rgba(250, 250, 249, 0.88)`), brand typographic mark, platform/fleet/philosophy/journey navigation, Client Login portal link, and solid 4px radius action button.
3. **Hero Section**:
   - Massive editorial serif headline: *"A haven for the 10x builders. The quiet architects."*
   - Executive lead and subtext.
   - Dual action buttons: Solid ink primary + outlined secondary.
   - Active Fleet Command View window with 4 live product cards (ClusterBid, curat.money, VeriCite, Neev).
4. **Partner Trust Grid**: 8 enterprise partners in clean monochrome styling with hover opacity lift (AWS, PwC, Reliance, DAMAC, DigitalOcean, Zoho, VIT, Australian Government).
5. **Operating Thesis**: Two strategic pillars (Frontier AI & Infrastructure vs Operational Commerce & Finance).
6. **The Fleet Showcase**: Interactive tabbed system with simulated software interfaces:
   - ClusterBid: Terminal gateway latency nodes & NATS token stream.
   - curat.money: Crypto card custody matrix & fee breakdown table.
   - VeriCite: Tenant boundary auditor & cross-encoder rerank metrics.
   - Neev: Distributor order stream, credit ledger, and GST matching.
7. **Executive Philosophy**: Centered pull quote in pale gray section (`data-theme="gray"`).
8. **Provenance & Compounding Stats**: Dramatic pitch-black section (`data-theme="black"`) featuring 10+ Years, 4 Flagships, 2 Coordinates, and 8 Ecosystems.
9. **Historical Arenas Timeline**: 7 eras from News Media (2015) to Infra + AI (2025 onwards) with original strategic insights.
10. **The Architects**: Madhur Satija (CEO) and Abhishek Kaushik (CTO) with verified biographies, roles, and direct social links.
11. **Security & Governance**: 4-card grid detailing multi-tenant isolation, audit receipts, modular architecture, and global compliance.
12. **Global Coordinates**: Dubai Global HQ & Gurgaon Systems Hub.
13. **Final Grand CTA**: Black full-width conversion banner.

## Verification & Status

- Automated Playwright suite: 125/125 assertions passed.
- axe accessibility audit: 0 violations across all 6 pages/product states.
- Viewports 320px to 1440px+: 0 horizontal overflow.
