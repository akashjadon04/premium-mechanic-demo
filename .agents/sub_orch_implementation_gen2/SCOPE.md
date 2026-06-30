# Scope: Implementation Track

## Architecture
- **Framework**: Vite + React
- **Routing**: React Router DOM (5 pages: Home, About, Services, Pricing, Contact)
- **Styling**: Tailwind CSS
- **Animations/Interactive**: Atropos.js for 3D parallax hover, Lottie for vector animations.
- **Assets**: Curated 8k Unsplash images and public Lottie URLs.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|---|---|---|---|
| 2 | Code Scaffold & Routing | Setup Vite, Tailwind, React Router, configure 5 main page components | None | DONE |
| 3 | Page Component Section Dev | Design exactly 7 distinct sections per page (total 35 sections) | M2 | DONE |
| 4 | Effects, Animations & Imagery | Integrate Atropos.js, Lottie player animations, and 8k Unsplash imagery | M3 | PLANNED |
| 5 | Phase 1 E2E Test Gating | Run and pass 100% of E2E tests for Tiers 1-4 | M2, M3, M4 | PLANNED |
| 6 | Phase 2 Adversarial Hardening | Run Challenger adversarial checks (Tier 5) and fix code coverage | M5 | PLANNED |
| 7 | Verification & Audit | Run Forensic Auditor checks | M6 | PLANNED |

## Interface Contracts
- Routing paths: `/`, `/about`, `/services`, `/pricing`, `/contact`
- Page component file names: `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Services.jsx`, `src/pages/Pricing.jsx`, `src/pages/Contact.jsx`
- Main CSS: `src/index.css`
- App structure: `src/App.jsx` and `src/main.jsx`
