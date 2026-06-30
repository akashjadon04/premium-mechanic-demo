## 2026-06-29T05:20:12Z
You are the Setup Worker for the E2E Testing Track.
Your working directory is: c:\Users\Akash\Desktop\Sample-Mobile-Machenic\.agents\worker_setup_1
Your identity: type: teamwork_preview_worker, role: Setup Worker

Your task is to set up the E2E test infrastructure, dependencies, and runner:
1. Create a local `.npmrc` file in the project root (`c:\Users\Akash\Desktop\Sample-Mobile-Machenic`) to set the npm cache path. Use a path in the Temp folder, e.g., `cache=C:\Users\Akash\AppData\Local\Temp\npm-cache` to bypass the system's incorrect E: drive cache configuration.
2. Initialize `package.json` in the project root if it does not exist (or update it if it does) to include the required dependencies and devDependencies:
   - Dependencies: `react`, `react-dom`, `react-router-dom`, `atropos`, `lottie-react`
   - DevDependencies: `jest`, `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@babel/core`, `@babel/preset-env`, `@babel/preset-react`, `babel-jest`
3. Install these dependencies. Make sure to use the `--cache C:\Users\Akash\AppData\Local\Temp\npm-cache` flag (or ensure the `.npmrc` is correctly used by npm) to avoid ENOENT errors.
4. Create the Babel and Jest configurations (e.g., `babel.config.js` and `jest.config.js`) so that ES6 modules and JSX are supported.
5. Create a `/tests/e2e/` directory and write a simple test runner script or test file (e.g., `sample.test.js`) to verify that the environment is fully working.
6. Create dummy/placeholder React files for the 5 pages (`/src/pages/Home.jsx`, `/src/pages/About.jsx`, `/src/pages/Services.jsx`, `/src/pages/Pricing.jsx`, `/src/pages/Contact.jsx`) with minimal component structures, so that routing and component tests can import them.
7. Run `npm test` or the configured test command to verify that Jest compiles and runs the sample test successfully.
Write your handoff.md in your working directory and message me when done.

MANDATORY INTEGRITY WARNING:
> DO NOT CHEAT. All implementations must be genuine. DO NOT
> hardcode test results, create dummy/facade implementations, or
> circumvent the intended task. A Forensic Auditor will independently
> verify your work. Integrity violations WILL be detected and your
> work WILL be rejected.
