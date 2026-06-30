# Original User Request

## Initial Request — 2026-06-29T05:14:37Z

# Teamwork Project Prompt — Draft

> Status: Ready for launch — awaiting user approval.
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

A premium, highly animated 5-page Vite + React website for a mobile mechanic business named "Your Mechanic". The site will feature 7 sections per page, 3D hover effects using Atropos.js, human-like Lottie animations, and high-quality Unsplash images, aiming for a high-end $50k agency feel.

Working directory: ~/teamwork_projects/your_mechanic
Integrity mode: benchmark

## Requirements

### R1. Multi-Page Vite + React Application
Implement a 5-page Vite + React application using React Router. The pages should include Home, About, Services, Pricing, and Contact.

### R2. Advanced Animations and Effects
Integrate Atropos.js for 3D parallax hover effects on interactive elements (e.g., service cards, pricing tiers). Integrate a React Lottie player library to include human-like Lottie animations sourced from public URLs.

### R3. Premium 7-Section Layouts
Design exactly 7 distinct sections per page using modern, premium aesthetics (advanced CSS, smooth gradients, micro-animations, modern typography). Source high-resolution 8k imagery using Unsplash URLs.

## Acceptance Criteria

### Automated Build & Dependency Verification
- [ ] `npm run build` completes without errors and successfully generates the output bundle.
- [ ] `package.json` includes dependencies for `react-router-dom`, `atropos`, and a Lottie React library (e.g., `lottie-react`).

### Code Structure Verification
- [ ] A programmatic check confirms the definition of 5 distinct route components (Home, About, Services, Pricing, Contact).
- [ ] A programmatic check verifies the usage of Atropos and Lottie components within the JSX source code.
- [ ] A programmatic check verifies that at least 35 distinct section elements (`<section>` or styled equivalent) exist across the page components (5 pages * 7 sections).
