# BeepWeep

Parent-company site for **ClusterBid, Neev, Curat, and VeriCite**.

Live: [beepweep.com](https://beepweep.com)

Tagline: **Built with purpose. For what comes next.**

## Product fleet

Canonical order used everywhere (hero cards, tabs, login dropdown, footer):

1. **ClusterBid** — AI and GPU infrastructure. Region-pinned inference cloud. [clusterbid.com](https://clusterbid.com)
2. **Neev** — MSME supply-chain operations. WhatsApp orders, ledgers, GST. [app.onneev.com](https://app.onneev.com)
3. **Curat** — Loyalty layer for crypto cards, plus card discovery. [curat.money](https://curat.money)
4. **VeriCite** — Institutional knowledge retrieval (multi-tenant RAG). [vericite.ai](https://vericite.ai)

## Design

Harvey-inspired editorial system. Neutral tokens only:

| Token | Hex |
| --- | --- |
| Ivory canvas | `#fafaf9` |
| Ink | `#0f0e0d` |
| Pale gray | `#f2f1f0` |
| Hairline | `#e5e5e3` |
| Border | `#cccac6` |
| Muted | `#706d66` |
| Hover | `#33312c` |

Typography is self-hosted in `assets/fonts/` (`HarveySerifFont`, `HarveySansFont`). Do not hotlink Harvey CDN.

Brand name is **BeepWeep** only. No “Ventures” in logo, header, footer, or copyright.

## Pages

- `index.html` — home
- `contact.html` — Book a Call
- `privacy.html` — legal body is byte-preserved from the original policy

## Local preview

```bash
python3 -m http.server 4173 --bind 127.0.0.1
# Open http://127.0.0.1:4173
```

© 2015–present BeepWeep. All rights reserved.
