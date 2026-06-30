# Milestone 3 Explorer Handoff Report

## 1. Observation
I have examined the codebase and project scope. The key findings and locations observed are:
* **Page Files**: Located in `c:\Users\Akash\Desktop\Sample-Mobile-Machenic\src\pages/`.
  * `Home.jsx` defines 7 placeholder sections with IDs: `hero` (line 7), `services-preview` (line 17), `how-it-works` (line 25), `trust-reviews` (line 33), `dynamic-cta` (line 41), `credentials` (line 49), and `faq` (line 57).
  * `About.jsx` defines 7 placeholder sections with IDs: `about-hero` (line 7), `about-mission` (line 17), `about-timeline` (line 25), `about-equipment` (line 33), `about-team` (line 41), `about-credentials` (line 49), and `about-values` (line 57).
  * `Services.jsx` defines 7 placeholder sections with IDs: `services-hero` (line 7), `services-diagnostics` (line 17), `services-maintenance` (line 25), `services-brakes` (line 33), `services-engine` (line 41), `services-battery` (line 49), and `services-detailing` (line 57).
  * `Pricing.jsx` defines 7 placeholder sections with IDs: `pricing-hero` (line 7), `pricing-packages` (line 17), `pricing-calculator` (line 25), `pricing-comparison` (line 33), `pricing-fleet` (line 41), `pricing-warranty` (line 49), and `pricing-faq` (line 57).
  * `Contact.jsx` defines 7 placeholder sections with IDs: `contact-hero` (line 7), `contact-booking` (line 17), `contact-emergency` (line 25), `contact-coverage` (line 33), `contact-hq` (line 41), `contact-social` (line 49), and `contact-corporate` (line 57).
* **Color Palette & Theme**: Defined in `tailwind.config.js` (lines 9-21) and custom styles in `src/index.css`:
  * Background Color: Obsidian (`#0A0A0B` / `bg-brand-dark`)
  * Card Background: Charcoal (`#141416` / `bg-brand-card`)
  * Border Color: Sleek gray (`#232326` / `border-brand-border`)
  * Accents: Metallic gold (`#D4AF37` / `text-brand-gold`), Dark gold hover (`#AA881E`), Bronze (`#CD7F32`), and High-performance orange (`#FF5A09` / `text-brand-orange`).
  * Custom Classes: `.glass-panel`, `.text-gradient-gold`, `.text-gradient-orange`.
* **Libraries**: As verified in `package.json` (lines 13-17), both `atropos` and `lottie-react` are installed and ready for integration.

---

## 2. Logic Chain
Based on these observations, the implementation strategy must fulfill the following goals:
1. **Preserve exact IDs**: The existing 35 IDs must be retained to maintain layout consistency and E2E test compliance.
2. **Implement Luxury Vehicle Visuals**: Build on top of the Jet Obsidian (`#0A0A0B`), Deep Charcoal (`#141416`), and Gold/Orange accents. Apply contrast gradients to prevent flat layouts.
3. **Incorporate Interactive Parallax & Animation**: Use `Atropos` to wrap cards, styling card interiors with multiple offsets (`data-atropos-offset`) to create a high-fidelity layered 3D tilt. Use `lottie-react` to inject vector animations mapped to specific page topics.
4. **Curate Assets**: Specify precise asset types (Unsplash premium 8k search queries, Lottie vectors) to ensure high-fidelity modern luxury design feel.

---

## 3. Caveats
* **Source Code Writing Restricted**: This document presents only the recommendations and implementation structure. The actual source code modifications in `/src/pages` must be performed by the Implementer agent.
* **Asset Loading**: High-resolution Unsplash URLs should include compression parameters (e.g. `auto=format&fit=crop&q=80&w=...`) to optimize loading speeds. Lottie files should be loaded using lightweight direct public CDN links.

---

## 4. Conclusion: Detailed Layout Strategy (35 Sections)

### General Styling & Interactive Directives
* **Obsidian Base**: Wrap each page with `bg-brand-dark text-brand-silver min-h-screen font-sans antialiased`.
* **Grids and Borders**: Divide sections using a clean bottom border: `border-b border-brand-border/60`. Use subtle offsets like alternating backgrounds (e.g., `bg-brand-dark` and `bg-brand-card/30`).
* **Hover Micro-interactions**: Buttons should transition smoothly (`transition-all duration-300`) with glow effects (`hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]`).
* **Atropos Setup**: Configure Atropos with `shadow={false}` to design custom CSS shadows that fit the dark theme. Set `activeOffset={40}` and custom offset layers (`-5%` for backgrounds, `5%` for texts, `10%` for gold callouts).

---

### PAGE 1: HOME (`src/pages/Home.jsx`)

#### 1. Hero Section (`#hero`)
* **Content Structure**: A high-impact split-screen layout. Left side: premium typographic hierarchy with taglines and two CTAs (Call Dispatch and Book Repair). Right side: a large interactive card displaying a luxury car cockpit/engine.
* **Tailwind CSS Classes**:
  * Section: `min-h-[85vh] lg:min-h-screen bg-brand-dark flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 relative overflow-hidden`
  * Heading: `text-gradient-gold font-display font-extrabold text-5xl lg:text-7xl uppercase tracking-wider mb-6 leading-tight`
  * Subtext: `text-brand-silver/90 text-lg mb-8 max-w-xl leading-relaxed`
  * Primary Button: `bg-brand-gold hover:bg-brand-goldDark text-brand-dark font-semibold font-display px-8 py-4 uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]`
  * Secondary Button: `border border-brand-border hover:border-brand-gold text-brand-silver hover:text-brand-gold font-semibold font-display px-8 py-4 uppercase tracking-wider transition-all duration-300 bg-brand-card/20 backdrop-blur-sm`
* **Styling & Animations**: Atropos wrapper surrounding the right-side visual component. Subtly animated decorative absolute elements (e.g. floating vertical lines).
* **Assets**: Unsplash image of a performance sportscar engine bay under dark garage spotlights. Lottie overlay of a rotating diagnostic radar scanning lines.

#### 2. Services Highlights (`#services-preview`)
* **Content Structure**: A structured 3-card grid featuring Core Diagnostics, Roadside Repair, and Luxury Fleet Maintenance. Each card contains a Lottie icon, service title, high-level features checklist, and a detailed "Learn More" link.
* **Tailwind CSS Classes**:
  * Section: `py-24 bg-brand-dark border-t border-b border-brand-border px-6`
  * Grid: `grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto`
  * Card: `bg-brand-card border border-brand-border p-8 relative overflow-hidden group hover:border-brand-gold/50 transition-all duration-500`
  * Card Title: `text-brand-gold font-display font-bold text-2xl mb-4 group-hover:text-white transition-colors duration-300`
* **Styling & Animations**: Atropos wrapped cards. Include a golden gradient line on the card bottom that expands width on hover (`w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-brand-gold absolute bottom-0 left-0`).
* **Assets**: 3 Lottie animations (engine rotating, diagnostics dashboard, tool wheel).

#### 3. How It Works (`#how-it-works`)
* **Content Structure**: Vertical or horizontal stepper layout outlining 3 phases: 1. Request/Book, 2. Dynamic Diagnostic Scan & Quote, 3. Complete & Approve.
* **Tailwind CSS Classes**:
  * Grid: `grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10`
  * Step Bubble: `w-16 h-16 rounded-full border-2 border-brand-gold bg-brand-dark flex items-center justify-center text-2xl font-bold font-display text-brand-gold mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]`
  * Connecting line: `hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-border via-brand-gold to-brand-border`
  * Step Text: `text-center text-brand-silver max-w-sm mx-auto`
* **Styling & Animations**: Pulse animation on active step bubble. Hover zoom on individual steps.
* **Assets**: Step-based vector icons and Lottie animations (booking calendar, diagnostic monitor scan, card checkout).

#### 4. Customer Trust & Reviews (`#trust-reviews`)
* **Content Structure**: Grid of high-end testimonial cards, featuring owner quotes, star rating, reviewer name, and dynamic vehicle badge (e.g. "Porsche Taycan Owner").
* **Tailwind CSS Classes**:
  * Card: `glass-panel p-8 relative border border-brand-border transition-all duration-300 hover:border-brand-gold/30`
  * Reviewer Info: `flex items-center gap-4 mt-6`
  * Stars: `flex text-brand-gold gap-1 mb-4`
* **Styling & Animations**: Subtly glowing border transitions. Scale-up of testimonial card on cursor hover.
* **Assets**: Curated customer profile photos from Unsplash (neutral professional tones).

#### 5. Dynamic CTA (`#dynamic-cta`)
* **Content Structure**: High-contrast, full-width emergency dispatch block. Contains dispatch status ticker, bold headline ("Driveway Breakdown?"), telephone click-to-call button, and ETA dispatch clock.
* **Tailwind CSS Classes**:
  * Banner: `py-20 px-6 bg-gradient-to-r from-brand-dark via-brand-card to-brand-dark border-y border-brand-border text-center relative overflow-hidden`
  * Status Badge: `inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6 animate-pulse-slow`
  * Call Button: `bg-brand-orange hover:bg-brand-orange/90 text-brand-silver font-bold px-8 py-4 uppercase tracking-widest text-lg transition-all duration-300 inline-block`
* **Styling & Animations**: Pulsing status badge indicator. Blinking radar icon represent mechanical response readiness.
* **Assets**: Dispatch radar indicator animation.

#### 6. Certifications & Badges (`#credentials`)
* **Content Structure**: Dynamic symmetrical showcase showing professional certifications (ASE Master Technicians, MACS, Brand Specialist credentials, Fully Insured status).
* **Tailwind CSS Classes**:
  * Container: `max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-300`
  * Badge Wrapper: `flex flex-col items-center text-center gap-3`
* **Styling & Animations**: Micro-float animation on badges (`animate-bounce-slow` custom setup or simple transitions).
* **Assets**: ASE Master logos, Insured Shields, Clean vector SVG assets.

#### 7. FAQ (`#faq`)
* **Content Structure**: An elegant, collapsible vertical accordion menu addressing pricing questions, service limits, warranty details, and parts specifications.
* **Tailwind CSS Classes**:
  * Accordion Item: `border-b border-brand-border py-6`
  * Trigger Button: `w-full flex justify-between items-center text-left font-display font-semibold text-lg text-brand-silver hover:text-brand-gold transition-colors duration-300`
  * Content Panel: `text-brand-muted mt-4 leading-relaxed max-w-3xl`
* **Styling & Animations**: Smooth height transition toggling. Chevron icon rotating 180 degrees when active.
* **Assets**: Minimalist plus/minus icons with gold border-color.

---

### PAGE 2: ABOUT (`src/pages/About.jsx`)

#### 1. Hero Section (`#about-hero`)
* **Content Structure**: A centered premium heading overlayed on a dark visual background, outlining our dedication to re-engineering vehicle service convenience.
* **Tailwind CSS Classes**:
  * Section: `min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative bg-brand-dark border-b border-brand-border`
  * Title: `text-gradient-gold font-display font-extrabold text-5xl lg:text-7xl uppercase tracking-widest mb-6`
  * Description: `text-brand-silver max-w-2xl text-lg leading-relaxed mb-8`
* **Styling & Animations**: Parallax overlay on scroll. Sleek golden line elements sliding in from edges on page load.
* **Assets**: Unsplash photo of a classic luxury car steering wheel.

#### 2. Mission Section (`#about-mission`)
* **Content Structure**: Split layout with high-contrast text on the left outlining company origin story and "white-glove mobile mechanic care", and an artistic vehicle mechanics image on the right.
* **Tailwind CSS Classes**:
  * Grid: `py-24 bg-brand-dark px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`
  * Quote Block: `border-l-4 border-brand-gold pl-6 italic text-brand-silver text-xl my-8`
* **Styling & Animations**: Right-hand image wrapped in Atropos with deep shadow.
* **Assets**: Unsplash image of a high-end luxury vehicle under clean repair lift lighting.

#### 3. Timeline (`#about-timeline`)
* **Content Structure**: Vertical timeline detailing milestones: 2018 (Launch), 2021 (Fleet expansion), 2024 (EV specialty service integration), 2026 (State-of-the-art mobile labs).
* **Tailwind CSS Classes**:
  * Line: `absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-brand-border`
  * Timeline Node: `absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]`
  * Event Card: `w-full lg:w-5/12 p-6 bg-brand-card border border-brand-border`
* **Styling & Animations**: Timeline card hover translation (slide-up or scale-up), scale-up on nodes.
* **Assets**: Milestone clock/schedule Lottie icon.

#### 4. Equipment & Fleet (`#about-equipment`)
* **Content Structure**: Showcase highlighting custom Mercedes-Benz Sprinter service vans, dealer-level diagnostic tablets, and specialized hydraulic jacks.
* **Tailwind CSS Classes**:
  * Card: `bg-brand-card border border-brand-border p-6 rounded-none relative overflow-hidden group hover:border-brand-gold/40 transition-all duration-300`
  * Icon Header: `text-brand-gold mb-6`
* **Styling & Animations**: Atropos wrapping. Subtle sliding highlight overlay on card hover.
* **Assets**: Unsplash high-res shots of mobile automotive tooling and custom diagnostic panels.

#### 5. Master Mechanics (`#about-team`)
* **Content Structure**: Symmetrical layout of mechanics' profiles, listing ASE Master status, years of experience, and brand specialties (e.g. BMW, Porsche, Tesla).
* **Tailwind CSS Classes**:
  * Profile Card: `bg-brand-dark border border-brand-border p-4 relative group hover:border-brand-gold/40 transition-colors duration-300`
  * Spec Tag: `text-xs bg-brand-gold/10 text-brand-gold px-2 py-1 uppercase`
* **Styling & Animations**: Atropos tilt effect. Certifications reveal with smooth fade-in.
* **Assets**: Unsplash portraits of mechanics in professional, high-end uniforms.

#### 6. Credentials & Insurance (`#about-credentials`)
* **Content Structure**: Text layout highlighting corporate insurance guarantees, environmental certification, and general warranty agreements.
* **Tailwind CSS Classes**:
  * Item: `flex items-start gap-4 p-6 bg-brand-card border border-brand-border hover:border-brand-orange/30 transition-all duration-300`
  * Check Icon: `text-brand-orange mt-1`
* **Styling & Animations**: Shield Lottie rotating dynamically on enter.
* **Assets**: Lottie rotating safety shield icon.

#### 7. Core Values (`#about-values`)
* **Content Structure**: Three columns summarizing: Precision (exact tooling specs), Integrity (transparent video logs), and Convenience (complete driveway diagnostics).
* **Tailwind CSS Classes**:
  * Section: `py-24 bg-brand-dark px-6`
  * Grid: `grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto`
  * Headline: `text-gradient-orange text-center text-4xl font-display font-bold uppercase mb-16 tracking-wider`
* **Styling & Animations**: Custom card shadow expansion. Icon pulsing.
* **Assets**: 3 Lottie assets mapping to time (clock), precision (calipers), and trust (shield).

---

### PAGE 3: SERVICES (`src/pages/Services.jsx`)

#### 1. Hero Section (`#services-hero`)
* **Content Structure**: Elegant header introducing our full suite of professional mobile diagnostics, servicing, and luxury vehicle repair menu.
* **Tailwind CSS Classes**:
  * Section: `min-h-[65vh] flex flex-col items-center justify-center text-center px-6 relative bg-brand-dark border-b border-brand-border`
  * Title: `text-gradient-gold font-display font-extrabold text-5xl lg:text-7xl uppercase tracking-wider mb-6`
* **Assets**: Unsplash photo showing an active vehicle ECU scanner connection.

#### 2. Computerized Diagnostics (`#services-diagnostics`)
* **Content Structure**: Left: Complex diagnostic telemetry animation. Right: Detailed description of ECU reading, code scanning, module reprograming, and electrical troubleshooting.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-card/30 border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`
  * Tag: `inline-block bg-brand-gold/10 text-brand-gold text-xs font-bold px-3 py-1 uppercase tracking-widest`
* **Styling & Animations**: Tooltip displays on hovering diagnostic codes. Smooth text slide-in.
* **Assets**: Complex Lottie showing diagnostic scanner telemetry.

#### 3. Routine Maintenance (`#services-maintenance`)
* **Content Structure**: Left: Technical list explaining premium engine lubricants (Liqui Moly), filter renewals, and fluid checks. Right: Curated vehicle oil-change image.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-dark border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`
  * Layout: `order-first lg:order-last` for the right side image.
* **Styling & Animations**: Image wrapped in Atropos for 3D depth effect.
* **Assets**: Unsplash image of clean synthetic motor oil being poured.

#### 4. Brake & Suspension Care (`#services-brakes`)
* **Content Structure**: Detail overview of OEM rotors, caliper overhauls, high-performance pads, and shock absorber/strut replacements.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-card/50 border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`
* **Styling & Animations**: Highlight glow on high-performance caliper image.
* **Assets**: Unsplash photo showing red Brembo braking components.

#### 5. Engine Tuning & Repair (`#services-engine`)
* **Content Structure**: High-resolution engine repair description including drive-belts, cooling radiators, spark plug installation, and diagnostic pressure checks.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-dark border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`
  * Spec Grid: `grid grid-cols-2 gap-4 mt-6`
* **Assets**: Unsplash picture of an exposed high-performance engine cylinder block.

#### 6. Battery & Alternator Services (`#services-battery`)
* **Content Structure**: Detailed options for AGM/Gel battery swaps, alternator testing, starter motor troubleshooting, and electrical fuse checks.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-card/30 border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`
  * Action CTA: `bg-brand-orange text-brand-silver font-display py-3 px-6 uppercase tracking-wider hover:bg-brand-orange/80 transition-all duration-300`
* **Assets**: Lottie battery charging status indicator.

#### 7. Luxury Detailing (`#services-detailing`)
* **Content Structure**: 3-column detailing sub-packages (Interior Deep Clean, Paint Correction, Ceramic Shield Coating) designed with full lists of tasks and pricing.
* **Tailwind CSS Classes**:
  * Card: `glass-panel p-8 text-left hover:border-brand-gold transition-colors duration-300`
  * Header: `text-gradient-gold text-2xl font-bold font-display uppercase mb-4`
* **Assets**: Unsplash close-up of water beading on a freshly ceramic-coated dark hood.

---

### PAGE 4: PRICING (`src/pages/Pricing.jsx`)

#### 1. Hero Section (`#pricing-hero`)
* **Content Structure**: Sleek typography emphasizing our straightforward pricing model. Includes a visual badge outlining our 100% itemized transparency commitment.
* **Tailwind CSS Classes**:
  * Section: `min-h-[60vh] flex flex-col items-center justify-center text-center px-6 relative bg-brand-dark border-b border-brand-border`
  * Badge: `border border-brand-gold text-brand-gold text-xs font-display px-4 py-2 uppercase tracking-widest mb-6`
* **Assets**: Dynamic Lottie trust seal.

#### 2. Service Tiers (`#pricing-packages`)
* **Content Structure**: 3-tier card setup (Elite Diagnostics, Signature Maintenance, Premier Mechanical Service). The Standard "Signature" plan features premium gold borders and a subtle overlay highlighting its popularity.
* **Tailwind CSS Classes**:
  * Standard Card: `bg-brand-card border border-brand-border p-8 relative flex flex-col justify-between`
  * Premium Card: `bg-brand-card border-2 border-brand-gold p-8 relative shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col justify-between`
  * Price Text: `text-5xl font-display font-extrabold text-brand-silver my-4`
* **Styling & Animations**: Atropos wrapping on all cards. Price numbers scale up smoothly on card hover.
* **Assets**: Service lists, checklist icons.

#### 3. Estimated Cost Calculator (`#pricing-calculator`)
* **Content Structure**: Interactive sliders where clients choose Vehicle Category (Sedan, Premium SUV, Sports/Exotic) and Service Detail Level to receive a real-time price estimation.
* **Tailwind CSS Classes**:
  * Slider Track: `w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-gold`
  * Estimate Box: `bg-brand-card border border-brand-border p-8 mb-8`
* **Styling & Animations**: Live updates on price numbers with state hooks. Fade transitions on value display.
* **Assets**: Calculator Lottie icon.

#### 4. Compare Services (`#pricing-comparison`)
* **Content Structure**: Horizontal matrix checking details across all packages, such as OBD-II scans, video inspection links, and road test verifications.
* **Tailwind CSS Classes**:
  * Table Header: `bg-brand-dark text-brand-gold font-display font-semibold uppercase tracking-wider py-4 px-6`
  * Row: `border-b border-brand-border hover:bg-brand-card/75 transition-colors duration-300`
* **Assets**: Premium checkmarks (Gold SVGs) and cross icons.

#### 5. Corporate Fleet Rates (`#pricing-fleet`)
* **Content Structure**: Text block outlining monthly packages and priorities for fleet managers and commercial vehicle setups.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-dark border-b border-brand-border px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center`
  * Badge: `bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs px-3 py-1 font-bold uppercase tracking-widest inline-block`
* **Assets**: Unsplash picture of a line of luxury business transport vans.

#### 6. Our Service Guarantee (`#pricing-warranty`)
* **Content Structure**: Full-width trust block explaining the 12-Month / 12,000-Mile labor and parts warranty.
* **Tailwind CSS Classes**:
  * Card: `border border-brand-gold/25 p-12 bg-gradient-to-br from-brand-card to-brand-dark text-center max-w-5xl mx-auto`
* **Styling & Animations**: Golden border hover glow transition.
* **Assets**: Official warranty gold stamp icon.

#### 7. Billing & Payments FAQ (`#pricing-faq`)
* **Content Structure**: FAQs addressing payment terms, electronic invoices, authorization processes, and secure gateways.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-dark px-6 max-w-4xl mx-auto`
* **Assets**: SVG payment processor logos (Visa, Mastercard, Apple Pay, Google Pay).

---

### PAGE 5: CONTACT (`src/pages/Contact.jsx`)

#### 1. Hero Section (`#contact-hero`)
* **Content Structure**: Header block showcasing all available communication routes: Emergency Dispatch, Custom Booking Form, and Office HQ.
* **Tailwind CSS Classes**:
  * Section: `min-h-[60vh] flex flex-col items-center justify-center text-center px-6 relative bg-brand-dark border-b border-brand-border`
  * Title: `text-gradient-gold font-display font-extrabold text-5xl lg:text-7xl uppercase tracking-wider mb-6`
* **Assets**: Unsplash moody shot of dynamic phone lines.

#### 2. Interactive Booking Form (`#contact-booking`)
* **Content Structure**: Multi-step booking flow wizard. Steps include: 1. Vehicle specs (Make, Model, Year), 2. Location (ZIP Code, Address), 3. Date Selection, 4. Confirm.
* **Tailwind CSS Classes**:
  * Form Box: `bg-brand-card border border-brand-border p-8 lg:p-12 max-w-4xl mx-auto`
  * Input: `w-full bg-brand-dark border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold text-brand-silver px-4 py-3 rounded-none outline-none transition-all duration-300`
  * Submit: `w-full bg-brand-gold hover:bg-brand-goldDark text-brand-dark font-display font-semibold py-4 uppercase tracking-widest transition-all duration-300`
* **Styling & Animations**: Smooth slide transitions between steps. Green checkmark Lottie plays on final submission success.
* **Assets**: Lottie success checkmark.

#### 3. 24/7 Emergency Dispatch (`#contact-emergency`)
* **Content Structure**: Critical response block. Features an orange outline, call links, and active technician status indicators for roadside dispatch.
* **Tailwind CSS Classes**:
  * Section: `py-24 bg-brand-dark border-b border-brand-border px-6 max-w-5xl mx-auto text-center border-2 border-brand-orange/20 relative overflow-hidden`
  * Hotline: `inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/80 text-brand-silver font-display font-bold text-2xl px-10 py-5 uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,90,9,0.3)] hover:shadow-[0_0_30px_rgba(255,90,9,0.6)]`
* **Styling & Animations**: Radar scanner pulse styling. Urgency blinking animation.
* **Assets**: Dispatch radar indicator animation.

#### 4. Coverage Maps (`#contact-coverage`)
* **Content Structure**: Map section displaying our service radius (e.g. 35-mile radius), coupled with lists of covered metropolitan areas.
* **Tailwind CSS Classes**:
  * Container: `max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
  * City List: `grid grid-cols-2 gap-4 text-brand-silver`
* **Assets**: Unsplash outline map or service coverage schematic.

#### 5. Business Office (`#contact-hq`)
* **Content Structure**: Layout detailing headquarters addresses, invoice processing emails, and administrative contact channels.
* **Tailwind CSS Classes**:
  * Block: `bg-brand-card border border-brand-border p-8 hover:border-brand-gold/30 transition-colors duration-300`
* **Assets**: Clean address, phone, and mailbox SVGs.

#### 6. Social Channels (`#contact-social`)
* **Content Structure**: Symmetrical layout of social posts showing recent luxury vehicle diagnostics, shop overviews, and mechanic vlogs.
* **Tailwind CSS Classes**:
  * Grid: `grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto`
  * Post Box: `relative aspect-square bg-brand-card overflow-hidden group border border-brand-border`
* **Styling & Animations**: Atropos card tilt. Highlight overlays on hover.
* **Assets**: Unsplash luxury vehicle servicing photos (Porsche, Aston Martin, BMW).

#### 7. Corporate Inquiry (`#contact-corporate`)
* **Content Structure**: Form for vendor inquiries, partnerships, fleet proposals, and general feedback.
* **Tailwind CSS Classes**:
  * Container: `py-24 bg-brand-dark px-6 max-w-4xl mx-auto`
  * Title: `text-center text-3xl font-display font-bold text-brand-gold uppercase tracking-wider mb-8`
* **Assets**: Symmetrical form styling options.

---

## 5. Verification Method

To verify the correct implementation of the proposed strategy:
1. **Compilation Check**: Run the command:
   ```powershell
   npm run build
   ```
   *Expected outcome*: Vite compiles without errors, outputting assets to `/dist`.
2. **Structure Verification**:
   * Inspect page components: `Home.jsx`, `About.jsx`, `Services.jsx`, `Pricing.jsx`, `Contact.jsx`.
   * Confirm that each component contains exactly 7 `<section>` tags (or styled container equivalents) with the exact IDs listed under Section 4.
3. **Interactive & Style Check**:
   * Inspect code imports in each page to verify that `Atropos` and a Lottie player component (e.g. `import Lottie from 'lottie-react'`) are correctly imported and wrapping designated elements.
   * Verify that the color classes (`bg-brand-dark`, `bg-brand-card`, `border-brand-border`, `text-brand-gold`, `text-brand-orange`) match the configuration in `tailwind.config.js`.
