# Scope: E2E Testing Track

## Architecture
- **E2E Test Runner**: Jest + JSDOM (`jest-environment-jsdom`) + React Testing Library (`@testing-library/react`). Routing is simulated using React Router's `MemoryRouter`. Animation libraries (Atropos and Lottie) are mocked to prevent test flakiness while ensuring compliance.
- **Features under test** (N = 5):
  1. Multi-page Routing (Home, About, Services, Pricing, Contact)
  2. Advanced Animations (Lottie animations)
  3. Advanced Hover Effects (Atropos.js 3D parallax effects)
  4. Premium 7-Section Layouts per page (35 sections total)
  5. Booking Form & Submission (Contact page functionality)

## Milestones
| # | Name | Scope | Dependencies | Status | Conv ID |
|---|---|---|---|---|---|
| 1 | Setup & Strategy | Explore workspace, define test framework, build runner infra | None | DONE | 2aebf095-d7a1-4b19-b42e-57c0c23fc086, 43329b80-7801-4950-a238-ece5e71f4347 |
| 2 | Tier 1 & 2 Test Suite | Implement Feature Coverage & Boundary/Edge tests (>=50 tests) | M1 | IN_PROGRESS | edfb6dd6-1f82-487c-a1e5-8f8228c3967e |
| 3 | Tier 3 & 4 Test Suite | Implement Cross-Feature & Real-World workloads (>=10 tests) | M2 | IN_PROGRESS | edfb6dd6-1f82-487c-a1e5-8f8228c3967e |
| 4 | Programmatic Checks | Implement verification scripts for routing, Atropos/Lottie usage, and section counts | M1 | IN_PROGRESS | edfb6dd6-1f82-487c-a1e5-8f8228c3967e |
| 5 | Verify & Publish | Run verification loop, check test suite compilation, publish TEST_READY.md and TEST_INFRA.md | M2, M3, M4 | PLANNED | edfb6dd6-1f82-487c-a1e5-8f8228c3967e |

## Interface Contracts
- **Test Runner Command**: `npm test` or `npm run test:e2e` (configured via package.json using custom npm cache override)
- **Test Artifact Locations**:
  - `/tests/e2e/` for test cases and utilities.
  - `TEST_READY.md` at project root.
  - `TEST_INFRA.md` at project root.
