# ADR: Ship the parent-company redesign as one replace, not a split

Date: 2026-09-17

## Status
Accepted

## Context
Trellis PR hygiene caps a push at 800 lines. This change rewrites the static BeepWeep site (HTML, CSS, JS, fonts, images) to replace production at beepweep.com.

## Decision
Keep the redesign in one deployable unit on `main`. Splitting HTML from CSS, fonts, or product assets would ship a broken GitHub Pages site between commits.

## Consequences
- One production cutover instead of a half-styled live site
- Diff is large by nature of a full static-site replace
