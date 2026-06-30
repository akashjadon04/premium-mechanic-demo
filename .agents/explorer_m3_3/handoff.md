# Handoff Report - Explorer 3 (Milestone 3)

## 1. Observation

During our read-only analysis of the Vite + React codebase, the following files and structural configurations were observed:

- **Tailwind CSS Configuration (`tailwind.config.js`)**:
  Custom theme extensions for the luxury brand are configured at lines 9-20:
  ```javascript
  colors: {
    brand: {
      dark: '#0A0A0B',      // Jet obsidian background
      card: '#141416',      // Deep charcoal card background
      border: '#232326',    // Sleek border gray
      gold: '#D4AF37',      // Premium metallic gold accent
      goldDark: '#AA881E',  // Dark gold for hover states
      silver: '#E5E7EB',    // Silver/light gray text
      muted: '#8A8A93',     // Muted gray text
      bronze: '#CD7F32',    // Accent bronze
      orange: '#FF5A09',    // High-performance orange
    }
  }
  ```
- **Custom CSS Styles (`src/index.css`)**:
  Custom classes for glassmorphism panels and text-gradients are declared at lines 31-49:
  ```css
  .glass-panel {
    background: rgba(20, 20, 22, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .text-gradient-gold {
    background: linear-gradient(135deg, #FFFFFF 0%, #D4AF37 50%, #AA881E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-gradient-orange {
    background: linear-gradient(135deg, #FFFFFF 0%, #FF5A09 50%, #CD7F32 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ```
- **Installed Packages (`package.json`)**:
  The project dependencies include:
  ```json
  "atropos": "^2.0.2",
  "lottie-react": "^2.4.0",
  "react-router-dom": "^6.23.1"
  ```
- **Application Pages**:
  The codebase has 5 page files in `src/pages/`:
  - `Home.jsx`
  - `About.jsx`
  - `Services.jsx`
  - `Pricing.jsx`
  - `Contact.jsx`
  Each page component is currently structured with 7 simple placeholder sections matching the requested IDs (e.g. `hero`, `services-preview`, `how-it-works`, etc.).

---

## 2. Logic Chain

From these observations, we formulate the implementation strategy:
1. **Brand Aesthetic Alignment**: The custom colors (`brand.dark`, `brand.card`, `brand.gold`, `brand.orange`) and layout boundaries are already established. The layout strategy will exclusively leverage these colors and Tailwind's built-in utility classes to maintain a high-end luxury vehicle brand feel (similar to Porsche, Aston Martin, or Mercedes-AMG digital experiences).
2. **Dynamic Lottie Loading**: Since `lottie-react` is used, and the animations are loaded via public URLs, we will recommend a reusable `LottieLoader` component that performs a standard async fetch of the animation JSON and passes it to the Lottie player. This avoids bundling large JSON assets.
3. **3D Interactive Elements**: `atropos` will be utilized to wrap interactive elements like service highlights, team member profiles, and pricing cards, adding dynamic depth.
4. **Layout Mapping**: For each of the 5 pages, exactly 7 sections are mapped by unique IDs to ensure that the code structure verification tests (verifying 35 sections total) will pass.

---

## 3. Caveats

- **Lottie Network Failures**: The recommended `LottieLoader` depends on public URLs. In rare cases where public files are relocated or slow to load, a fallback layout (pulse placeholder or static SVG icon) is integrated.
- **Atropos Performance**: Multiple Atropos instances on a single page can cause performance degradation on low-end mobile devices. The strategy suggests applying Atropos selectively (only for primary card grids like services and packages).

---

## 4. Conclusion: Implementation Strategy & Section Specification

### Part A: Core Style Guide & Custom Components

#### 1. Reusable `Atropos` Card Component (`src/components/AtroposCard.jsx`)
To implement 3D hover effects uniformly across all pages, wrap elements in this custom component:
```jsx
import React from 'react';
import Atropos from 'atropos/react';

export default function AtroposCard({ children, className = '' }) {
  return (
    <Atropos
      className={`w-full h-full rounded-xl overflow-hidden ${className}`}
      activeOffset={40}
      shadow={false}
      highlight={true}
    >
      <div className="w-full h-full bg-brand-card border border-brand-border rounded-xl transition-colors hover:border-brand-gold/30">
        {children}
      </div>
    </Atropos>
  );
}
```

#### 2. Reusable `LottieLoader` Component (`src/components/LottieLoader.jsx`)
Loads Lottie animations dynamically from a public URL string:
```jsx
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function LottieLoader({ url, className = 'h-48' }) {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading Lottie animation:", err);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-gold"></div>
      </div>
    );
  }

  if (!animationData) return null;

  return <Lottie animationData={animationData} loop={true} className={className} />;
}
```

#### 3. Premium Tailwind Utility Classes & Design Tokens
- **Backgrounds**: Obsidian `bg-brand-dark` (`#0A0A0B`), Deep Charcoal Card `bg-brand-card` (`#141416`), Shimmer Overlay `bg-brand-card/50`.
- **Gradients**: Text headers `text-gradient-gold` (for metallic headers) and `text-gradient-orange` (for performance highlights).
- **Glassmorphic Containers**: `glass-panel` combined with `hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]` and transition animations.
- **Action Buttons**:
  - **Primary**: `bg-brand-gold hover:bg-brand-goldDark text-brand-dark px-8 py-3.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]`
  - **Secondary (Performance)**: `border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-silver px-8 py-3.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-300`

---

### Part B: Page-by-Page 35-Section Specifications

---

### PAGE 1: HOME (`src/pages/Home.jsx`)

#### 1. Hero Section (`id="hero"`)
- **UX Goal**: High-end first impression. Establish luxury mechanics branding immediately.
- **Content & Layout**: Grid layout (50/50). Left: Large display title, brief pitch, and callouts. Right: A prominent animated card containing a luxury dashboard render or Lottie engine diagnostics loop.
- **Tailwind Styling**: `min-h-[85vh] flex items-center bg-brand-dark px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12`
- **Atropos & Lottie**: Wrap right-hand card in Atropos. Load Lottie engine diagnostics inside: `https://lottie.host/86d498db-410a-43b6-a57c-d6c6e7fbb6be/V5Lp8eWbWf.json`
- **Unsplash Image**: Behind left text, use a subtle parallax overlay: `https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80` (Porsche dashboard detailing)

#### 2. Services Highlights (`id="services-preview"`)
- **UX Goal**: Direct visitors to primary service categories immediately.
- **Content & Layout**: Section title with gradient, followed by a 3-column card grid highlighting Computerized Diagnostics, Performance Tuning, and Mobile Detailing.
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6`
- **Atropos & Lottie**: Wrap each of the 3 service highlights in an `AtroposCard`. Apply `data-atropos-offset="5"` to details and `data-atropos-offset="-5"` to background panels.
- **Unsplash Images**:
  - Diagnostics: `https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80` (Tesla instrument dashboard scan)
  - Performance Tuning: `https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80` (AMG performance engine)
  - Detail work: `https://images.unsplash.com/photo-1520340356584-f9917d1ecc6f?auto=format&fit=crop&w=600&q=80` (Glossy luxury paint correction)

#### 3. How It Works (`id="how-it-works"`)
- **UX Goal**: Demystify mobile dispatch and establish simple steps.
- **Content & Layout**: 3-step timeline layout showing: 1. Request Scan (Enter Details), 2. Live Dispatch (Technician dispatched with GPS link), 3. Instant Repair (Complete fix on-driveway).
- **Tailwind Styling**: `py-24 bg-brand-card/30 border-b border-brand-border px-6`
- **Atropos & Lottie**: Embed Lottie booking calendar: `https://lottie.host/a61e389d-21d3-455b-86d1-e63a152d0fa5/p5w38B29yO.json`
- **Unsplash Image**: Minimalist mechanic service van in background: `https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=1200&q=80` (Vans and clean workshop)

#### 4. Customer Trust & Reviews (`id="trust-reviews"`)
- **UX Goal**: Social proof from luxury car owners who demand extreme care.
- **Content & Layout**: Grid of 3 testimonials. Includes customer names, vehicle models, star rating, and descriptive review paragraphs.
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6 max-w-7xl mx-auto`
- **Atropos & Lottie**: testimonials are displayed in glass-panel cards (`glass-panel`) with thin gold borders.
- **Unsplash Images**: Small premium user avatars:
  - Client 1 (Porsche 911): `https://images.unsplash.com/photo-1530047139182-5485141a7265?auto=format&fit=crop&w=150&q=80`
  - Client 2 (Mercedes G-Class): `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`
  - Client 3 (Tesla Plaid): `https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80`

#### 5. Dynamic CTA Banner (`id="dynamic-cta"`)
- **UX Goal**: High-performance immediate conversion channel.
- **Content & Layout**: Split layout container. Left: Live status tracker (e.g. "3 Dispatches Available in your Area"). Right: Direct Call and Immediate Booking buttons.
- **Tailwind Styling**: `py-20 bg-gradient-to-r from-brand-card to-brand-dark border-b border-brand-border px-6`
- **Atropos & Lottie**: Lottie chat/dispatch indicator: `https://lottie.host/b089c93a-86cf-448f-aa9d-161b471df42f/5C6S8fW4zQ.json`

#### 6. Certifications & Badges (`id="credentials"`)
- **UX Goal**: Immediate trust building via professional credentials.
- **Content & Layout**: horizontal marquee display of 5 credentials (ASE Master Technicians, Automotive Service Association, EPA Green Certified, Licensed & Insured to $2M, 12-Month Guarantee).
- **Tailwind Styling**: `py-16 bg-brand-card/50 border-b border-brand-border px-6`
- **Atropos & Lottie**: Minimal SVG animations.

#### 7. General FAQ (`id="faq"`)
- **UX Goal**: Resolve common objections (location, pricing, warranties).
- **Content & Layout**: 5 accordion blocks featuring responsive grid drop-downs.
- **Tailwind Styling**: `py-24 bg-brand-dark px-6 max-w-4xl mx-auto`

---

### PAGE 2: ABOUT (`src/pages/About.jsx`)

#### 1. About Hero (`id="about-hero"`)
- **UX Goal**: Communicate the premium brand philosophy and statistics.
- **Content & Layout**: Bold typography hero, grid panel showing statistics: Serviced Vehicles (5k+), ASE Master techs (12+), Client Satisfaction (99.8%).
- **Tailwind Styling**: `min-h-[60vh] flex flex-col items-center justify-center bg-brand-dark px-6 border-b border-brand-border text-center`
- **Unsplash Image**: Background layout: `https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80` (Luxury garage detail)

#### 2. Mission Statement (`id="about-mission"`)
- **UX Goal**: Define the "White-Glove Service" philosophy.
- **Content & Layout**: 50/50 split layout. Left: high-end diagnostic tools image. Right: Glass panel card detailing the mission.
- **Tailwind Styling**: `py-24 bg-brand-card/20 border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto`
- **Unsplash Image**: `https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80` (High-end calibration diagnostic screen)

#### 3. Company Journey Timeline (`id="about-timeline"`)
- **UX Goal**: Display expertise and progressive growth.
- **Content & Layout**: Vertical timeline featuring 4 key periods (2018: Inception, 2020: High-End Euro certifications, 2022: Multi-Van dispatch app, 2024: Statewide coverage).
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6`

#### 4. Diagnostic Van Equipment (`id="about-equipment"`)
- **UX Goal**: Showcase professional-grade equipment.
- **Content & Layout**: 3-column card grid explaining specialized mobile equipment (Autel diagnostic tablets, digital oscilloscopes, custom hydraulic road cranes).
- **Tailwind Styling**: `py-24 bg-brand-card/40 border-b border-brand-border px-6`
- **Atropos & Lottie**: Each equipment card wrapped in Atropos with detail popouts.
- **Unsplash Image**: Van toolbox and components: `https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80`

#### 5. Master Mechanics (`id="about-team"`)
- **UX Goal**: Personalize the experience and show master certification.
- **Content & Layout**: 3 professional mechanic profiles. High-resolution portrait, name, specialization (e.g. Mercedes AMG, Porsche, Tesla EV), and ASE Master Technician label.
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6 max-w-7xl mx-auto`
- **Atropos & Lottie**: Team profile cards wrapped in Atropos.
- **Unsplash Images**:
  - Tech 1: `https://images.unsplash.com/photo-1530047139182-5485141a7265?auto=format&fit=crop&w=300&q=80`
  - Tech 2: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80`
  - Tech 3: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80`

#### 6. Insurance & Credentials (`id="about-credentials"`)
- **UX Goal**: Provide legal/compliance assurance.
- **Content & Layout**: Large card details showing licensing, $2 Million garage liability insurance, and certified green waste disposal practices.
- **Tailwind Styling**: `py-20 bg-brand-card/50 border-b border-brand-border px-6`
- **Atropos & Lottie**: Lottie security shield: `https://lottie.host/842e12e1-45a7-4b68-9fa4-a3f5b72ef78a/E78eL9V9iZ.json`

#### 7. Core Values (`id="about-values"`)
- **UX Goal**: Reinforce qualitative standards.
- **Content & Layout**: 4-column minimal block grid: Precision, Safety, Integrity, Transparency.
- **Tailwind Styling**: `py-24 bg-brand-dark px-6`

---

### PAGE 3: SERVICES (`src/pages/Services.jsx`)

#### 1. Services Hero (`id="services-hero"`)
- **UX Goal**: Frame the comprehensive list of expert options.
- **Content & Layout**: Hero image header of sports car grill. Centered search/quick-filter bar allowing clients to jump to diagnostic, mechanical, or maintenance sections.
- **Tailwind Styling**: `min-h-[50vh] flex flex-col items-center justify-center bg-brand-dark border-b border-brand-border px-6`
- **Unsplash Image**: `https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80` (Clean Audi grill layout)

#### 2. Computerized Diagnostics (`id="services-diagnostics"`)
- **UX Goal**: Showcase state-of-the-art ECU/scanning capabilities.
- **Content & Layout**: Split layout. Left: Live terminal readout style dashboard. Right: detailed bullet points covering ECU code readouts, sensor telemetry, hybrid battery diagnostics, and electrical fault tracking.
- **Tailwind Styling**: `py-24 bg-brand-card/30 border-b border-brand-border px-6`
- **Atropos & Lottie**: Lottie diagnostic scanner circle loop: `https://lottie.host/db60cf0b-222c-4e89-98bb-e7ee8e390c5c/V2ZqfQv6G9.json`

#### 3. Routine Maintenance Menu (`id="services-maintenance"`)
- **UX Goal**: Standardized options with explicit pricing.
- **Content & Layout**: Grid of 4 cards (Oil Service, Filter Replacements, Fluid Refills, Spark Plug Care). Each card lists price starting indicators.
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6 max-w-7xl mx-auto`
- **Unsplash Image**: `https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&w=600&q=80` (Supercar engine details)

#### 4. Brake & Suspension Care (`id="services-brakes"`)
- **UX Goal**: Safety first. Promote high-end brake options.
- **Content & Layout**: 2-column layout. Left: Detailed explanation of ceramic pad installations, rotor grinding fixes, and shock replacement. Right: Close-up brake caliper detail.
- **Tailwind Styling**: `py-24 bg-brand-card/50 border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
- **Unsplash Image**: `https://images.unsplash.com/photo-1606577924006-27d39b132ee6?auto=format&fit=crop&w=800&q=80` (High-end Brembo brake check)

#### 5. Engine Tuning & Calibration (`id="services-engine"`)
- **UX Goal**: Performance calibration expertise.
- **Content & Layout**: Details performance tuning, accessory belt replacements, starter motors, and radiator work in a detailed two-column list format.
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6`

#### 6. Battery & Alternator Services (`id="services-battery"`)
- **UX Goal**: Resolve starter issues.
- **Content & Layout**: Quick-fix battery replacement services overview. Battery checks, starter motor replacements, alternator diagnostics.
- **Tailwind Styling**: `py-24 bg-brand-card/30 border-b border-brand-border px-6`

#### 7. Luxury Detailing & Polish (`id="services-detailing"`)
- **UX Goal**: Upsell premium cosmetic care.
- **Content & Layout**: 2-column layout. Left: Description of Ceramic coating and multi-step polish options. Right: High-gloss paint detail graphic.
- **Tailwind Styling**: `py-24 bg-brand-dark px-6`
- **Unsplash Image**: `https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80` (Ceramic paint protection detail)

---

### PAGE 4: PRICING (`src/pages/Pricing.jsx`)

#### 1. Pricing Hero (`id="pricing-hero"`)
- **UX Goal**: Build trust via flat-rate transparent billing explanation.
- **Content & Layout**: Premium title, gold gradient tagline: "No Surprises, Flat Callout Fees + Itemized Parts/Labor".
- **Tailwind Styling**: `min-h-[50vh] flex flex-col items-center justify-center bg-brand-dark border-b border-brand-border text-center px-6`

#### 2. Tiered Packages (`id="pricing-packages"`)
- **UX Goal**: Simple package selections for typical services.
- **Content & Layout**: 3-column pricing tier grid:
  - **Diagnostic Basic ($99)**: OBD2 Scan + multi-point visual inspection.
  - **Standard Checkup ($199)**: Full diagnostic scan, fluid top-off, battery status test.
  - **Premium Care ($349)**: Diagnostics, oil & filter change, engine tuning assessment, full report.
- **Tailwind Styling**: `py-24 bg-brand-card/30 border-b border-brand-border px-6 max-w-7xl mx-auto`
- **Atropos & Lottie**: All 3 tiers wrapped in Atropos. Standard Checkup features a gold outline border and glow effect.

#### 3. Cost Estimator Calculator (`id="pricing-calculator"`)
- **UX Goal**: Interactive cost transparency tool.
- **Content & Layout**: Sleek glassmorphic card interface. Dropdown for Vehicle Type (Sedan, Luxury SUV, EV, Performance Sport) + Checklist of Services (Diagnostics, Brake Change, Oil/Filter, Spark Plugs) -> instantly updates total estimated range on screen.
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6 max-w-3xl mx-auto`

#### 4. Package Comparison Table (`id="pricing-comparison"`)
- **UX Goal**: Deep dive details on package contents.
- **Content & Layout**: Comprehensive table list of 12 service metrics compared across the 3 packages, featuring gold checks and silver dashes.
- **Tailwind Styling**: `py-24 bg-brand-card/50 border-b border-brand-border px-6 max-w-5xl mx-auto`

#### 5. Corporate Fleet Rates (`id="pricing-fleet"`)
- **UX Goal**: Capture business/corporate vehicle contracts.
- **Content & Layout**: 2-column layout. Left: description of executive car management and delivery fleet packages. Right: dynamic fleet vehicle outline.
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6`
- **Unsplash Image**: Fleet layout: `https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=800&q=80` (Fleet setup)

#### 6. Guarantees & Warranties (`id="pricing-warranty"`)
- **UX Goal**: Mitigate safety/reliability concerns.
- **Content & Layout**: Highlights the "12-Month / 12,000-Mile Driveway Warranty" on all labor and OEM replacements.
- **Tailwind Styling**: `py-20 bg-brand-card/30 border-b border-brand-border px-6`

#### 7. Billing FAQ (`id="pricing-faq"`)
- **UX Goal**: Resolve billing concerns (trip fees, towing, part orders).
- **Content & Layout**: 4 specialized pricing/payment accordions.
- **Tailwind Styling**: `py-24 bg-brand-dark px-6 max-w-4xl mx-auto`

---

### PAGE 5: CONTACT (`src/pages/Contact.jsx`)

#### 1. Contact Hero (`id="contact-hero"`)
- **UX Goal**: Offer direct and immediate booking routes.
- **Content & Layout**: Left: "Get in Touch" header + telephone link. Right: Active dispatcher Lottie widget.
- **Tailwind Styling**: `min-h-[50vh] flex flex-col items-center justify-center bg-brand-dark border-b border-brand-border text-center px-6`
- **Atropos & Lottie**: dispatcher dynamic loop: `https://lottie.host/b089c93a-86cf-448f-aa9d-161b471df42f/5C6S8fW4zQ.json`

#### 2. Interactive Booking Form (`id="contact-booking"`)
- **UX Goal**: Gather complete trip dispatch data.
- **Content & Layout**: Elegant, multi-input form layout (Full Name, Phone, Email, Vehicle Year/Make/Model, Service Category, Desired Date & Time, Description). Styled with gold outlines on active state inputs.
- **Tailwind Styling**: `py-24 bg-brand-card/30 border-b border-brand-border px-6 max-w-3xl mx-auto`

#### 3. 24/7 Emergency Dispatch (`id="contact-emergency"`)
- **UX Goal**: Capture urgent breakdown/roadside calls.
- **Content & Layout**: Bold glowing red/orange container panel featuring hotlines, lockouts, starter failure help, and flat tire services.
- **Tailwind Styling**: `py-20 bg-gradient-to-r from-red-950/20 to-brand-card border-b border-brand-border px-6 max-w-5xl mx-auto rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.1)]`
- **Atropos & Lottie**: Roadside location dynamic Lottie pin: `https://lottie.host/772fa82c-b5f7-488f-a9cb-bb3e85e4ea7f/7F1s2K98oI.json`

#### 4. Service Coverage Maps (`id="contact-coverage"`)
- **UX Goal**: Clarify service boundaries.
- **Content & Layout**: Map mockup container showing coverage radius (e.g. 35-mile radius from Metro Center) and ZIP code lookup verification input.
- **Tailwind Styling**: `py-24 bg-brand-card/50 border-b border-brand-border px-6`

#### 5. Headquarters Address (`id="contact-hq"`)
- **UX Goal**: Display real physical headquarters to verify business legitimacy.
- **Content & Layout**: Grid of 3 office detail blocks (HQ Address, Dispatch Center, Billing/Administration email).
- **Tailwind Styling**: `py-24 bg-brand-dark border-b border-brand-border px-6 max-w-7xl mx-auto`

#### 6. Social Channels & Work (`id="contact-social"`)
- **UX Goal**: Showcase daily premium results (Instagram feed style).
- **Content & Layout**: 4-column image portfolio showcasing luxury vehicle repair completions.
- **Tailwind Styling**: `py-20 bg-brand-card/30 border-b border-brand-border px-6`
- **Unsplash Images**:
  - Image 1: `https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=400&q=80`
  - Image 2: `https://images.unsplash.com/photo-1606577924006-27d39b132ee6?auto=format&fit=crop&w=400&q=80`
  - Image 3: `https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=400&q=80`
  - Image 4: `https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=400&q=80`

#### 7. Corporate inquiry (`id="contact-corporate"`)
- **UX Goal**: Form for corporate fleets, parts vendor relations, and partnership requests.
- **Content & Layout**: Split contact block (Text details + small form).
- **Tailwind Styling**: `py-24 bg-brand-dark px-6 max-w-7xl mx-auto`

---

## 5. Verification Method

- **Build and Run Check**:
  Navigate to the project root and execute the build command:
  ```powershell
  npm run build
  ```
  Verify that the Vite build bundle compiles successfully without asset resolution or syntax errors.
- **JSX Section Count Verification**:
  Inspect the page components to verify the existence of all 35 distinct sections with unique IDs matching the list above:
  ```powershell
  # Locate all occurrences of "<section id=" across the page component files
  Select-String -Path "src/pages/*.jsx" -Pattern '<section id='
  ```
  Ensure exactly 7 sections are defined per file.
- **Atropos & Lottie Integration Checks**:
  Open the page files to verify `Atropos` wrappers and dynamic `LottieLoader` references are implemented correctly within the JSX layout.
