# Project: Your Mechanic Website

## Architecture
- **Framework**: Vite + React
- **Routing**: React Router DOM (5 distinct page routes)
- **Styling**: Tailwind CSS (dark/premium luxury vehicle aesthetic, sleek typography, micro-gradients)
- **Animations**: Atropos.js for 3D parallax hover effects on interactive cards, and a Lottie React library (e.g., `lottie-react`) for high-quality human-like vector animations.
- **Imagery**: High-resolution 8k vehicle/service imagery using curated Unsplash URLs.
- **Pages**:
  - Home: Main landing page (hero, services summary, how it works, trust/reviews, dynamic CTA, team, FAQ).
  - About: Mission, story, team, values, timeline, equipment, credentials.
  - Services: Comprehensive detail of services (emergency roadside, diagnostics, brake repair, mobile oil change, engine tuning, battery service, detailing).
  - Pricing: Transparent tiered packages (basic inspect, standard check, premium service, enterprise fleet), calculator, FAQs, service comparison.
  - Contact: Dynamic booking form, support, service area map, emergency contact, custom inquiry.

## Code Layout
- `/src/`
  - `/components/` (Common UI: Navbar, Footer, AtroposCard, LottieLoader)
  - `/pages/` (Home.jsx, About.jsx, Services.jsx, Pricing.jsx, Contact.jsx)
  - `/assets/` (images, public animations)
  - `App.jsx` (Routing and layout wrapper)
  - `main.jsx` (Vite entry point)
  - `index.css` (Tailwind and custom animations)
- `/tests/`
  - `/e2e/` (E2E Test cases and runner setup)
- `package.json`
- `vite.config.js`
- `tailwind.config.js`

## Milestones
| # | Name | Scope | Dependencies | Status | Conv ID |
|---|---|---|---|---|---|
| 1 | E2E Testing Track | Build test infra, write E2E tests for Tiers 1-4, publish `TEST_READY.md` | None | IN_PROGRESS | 40f79769-2bf5-47aa-bcb2-71264ec44be5 |
| 2 | Code Scaffold & Routing | Setup Vite, Tailwind, React Router, configure 5 main page components | None | PLANNED | 6753ff27-d6c4-413f-b1eb-84b6ab075c91 |
| 3 | Page Component Section Dev | Design exactly 7 distinct sections per page (total 35 sections) | M2 | PLANNED | 6753ff27-d6c4-413f-b1eb-84b6ab075c91 |
| 4 | Effects, Animations & Imagery | Integrate Atropos.js, Lottie player animations, and 8k Unsplash imagery | M3 | PLANNED | 6753ff27-d6c4-413f-b1eb-84b6ab075c91 |
| 5 | Phase 1 E2E Test Gating | Run and pass 100% of E2E tests for Tiers 1-4 | M1, M4 | PLANNED | 6753ff27-d6c4-413f-b1eb-84b6ab075c91 |
| 6 | Phase 2 Adversarial Hardening | Run Challenger adversarial checks (Tier 5) and fix code coverage | M5 | PLANNED | 6753ff27-d6c4-413f-b1eb-84b6ab075c91 |
| 7 | Verification & Audit | Run Forensic Auditor checks | M6 | PLANNED | 6753ff27-d6c4-413f-b1eb-84b6ab075c91 |

## Interface Contracts
### Routing & Entry Points
- Home: `/`
- About: `/about`
- Services: `/services`
- Pricing: `/pricing`
- Contact: `/contact`

### Animation & UI Integration
- Atropos wrapper must be used for card highlights (e.g., `.service-card`, `.pricing-tier-card`).
- Lottie animations must load using public URL references.
