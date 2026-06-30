# Environment and Testing Strategy Analysis

This document details the exploration of the system environment, workspace, package installation viability, and the proposed E2E and programmatic testing strategy for the **Your Mechanic** premium website.

---

## 1. System Environment Check

### Node and npm Versions
- **Node.js**: `v24.16.0`
- **npm**: `11.8.0`

### Pre-installed Global npm Packages
The following global packages are currently installed in the system environment (`C:\Users\Akash\AppData\Roaming\npm`):
- `@anthropic-ai/claude-code@2.1.195`
- `@playwright/mcp@0.0.76`
- `clawdbot@2026.1.24-3`
- `http-server@14.1.1`
- `npm@11.8.0`
- `openclaw@2026.1.30`

---

## 2. Testing Framework Availability & Installation Viability

### Global Availability
There are no global installations of primary testing frameworks (e.g. `playwright`, `jest`, `vitest`, `cypress`).

### Installation Viability
We verified that testing frameworks and their dependencies **can** be successfully installed in the workspace via npm. However, there is a configuration caveat:
- **npm Cache Environment Error**: The default system environment contains the variable `NPM_CONFIG_CACHE="E:\EvolnexOS\14-cache\npm"`. Because the `E:` drive does not exist in the active runtime context, any standard `npm install` or `npx` command will fail with:
  `ENOENT: no such file or directory, mkdir '\\?'`
- **Workaround/Fix**: Setting a custom cache directory using the `--cache` parameter bypasses this issue. 
  - For example, running `npm install --cache "$env:TEMP\npm-cache" <packages>` succeeds.
  - Using this workaround, dry-run installations of both **Jest** (`jest`, `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom`) and **Playwright** (`@playwright/test`) were successfully resolved and simulated without errors.

---

## 3. Project Workspace Analysis

The workspace directory (`c:\Users\Akash\Desktop\Sample-Mobile-Machenic\`) is currently empty of application code. 
- It contains only:
  - The `.agents/` metadata directory (containing plans, progress logs, and briefing files for the subagents).
  - A root-level `ORIGINAL_REQUEST.md`.
- There is no `package.json`, `vite.config.js`, or codebase directory scaffolded yet.
- This is intentional according to the **Dual-Track Model** (`plan.md`), where the E2E testing framework/infrastructure is designed in Milestone 1 before the implementation track scaffolds the application in Milestone 2.

---

## 4. Recommended Testing Strategy

We need to implement **60+ test cases across 4 tiers** plus programmatic checks, compile them, and verify they run.

### Evaluation of Options

| Testing Approach | Feasibility & Stability | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **Playwright / Cypress** | **Low** (due to sandboxed `CODE_ONLY` network mode) | • True end-to-end browser execution.<br>• Real visual rendering. | • `playwright install` requires downloading large browser binaries from Microsoft servers. In a `CODE_ONLY` firewalled environment, this is highly likely to fail or hang.<br>• Visual and mouse movement checks for complex animations (Atropos.js 3D hover) are notoriously flaky. |
| **Custom JSDOM Node runner** | **Medium-Low** (high maintenance) | • Lightweight.<br>• Zero framework overhead. | • Writing a custom test runner to run, group, and report 60+ test cases across 4 tiers is a massive wheel-reinvention that is error-prone. |
| **Jest + JSDOM + Testing Library** | **High** (recommended) | • Installs completely via npm (no browser binary downloads needed).<br>• Runs entirely in-memory (extremely fast execution for 60+ tests).<br>• Easy to mock Atropos.js and Lottie animations globally to prevent test flakiness.<br>• Fully supports simulated routing (using React Router `MemoryRouter`). | • Not a "real" browser (in-memory DOM). Does not execute GPU animations. (Can be solved with programmatic checks). |

---

### Detailed Strategy Recommendation

We recommend a **hybrid JSDOM + Static Programmatic Check** strategy:

1. **Test Runner & Engine**: **Jest** using the **JSDOM** environment (`jest-environment-jsdom`).
2. **Component & Integration Testing**: **React Testing Library** (`@testing-library/react`) combined with `@testing-library/jest-dom`.
3. **Application Routing Simulation**: Wrap tests in React Router's `MemoryRouter`. This allows us to simulate clicking navigation links (e.g., from Home -> Pricing -> Contact) and verify that the correct pages are rendered under their respective URL paths.
4. **Mocking Premium Animations (Atropos & Lottie)**:
   - Atropos.js relies heavily on real mouse coordinate events and 3D CSS transforms.
   - Lottie relies on requestAnimationFrame and rendering canvas/svg.
   - In Jest, we will write clean, simple mock components for both `Atropos` and `Lottie` to:
     - Verify they are correctly imported and rendered.
     - Verify they wrap the correct children (e.g. `.service-card`, `.pricing-tier-card`).
     - Verify they receive the expected options.
     - This isolates routing and page layout verification from the complex animation runtimes, avoiding test flakiness.
5. **Programmatic Checks**:
   - Write a Node-based validation script (e.g. `verify-layout.js` or a custom Jest test using AST parser / file-system checks) that:
     - Verifies that exactly 5 page files exist in `/src/pages/`.
     - Parses the page files to ensure each page implements exactly 7 distinct section tags or custom section components (totalling >= 35 sections).
     - Verifies that `react-router-dom`, `atropos`, and `lottie-react` are listed as dependencies in the final `package.json`.
6. **Execution Pipeline**:
   - Because of the cache issue, the E2E test runner command will be configured as:
     `npm test`
     which internally invokes:
     `jest --cache ./node_modules/.cache/jest` (or similar node-based flags)
     and we will initialize the project's `.npmrc` or setup a custom install script to always bypass the missing `E:` drive.
