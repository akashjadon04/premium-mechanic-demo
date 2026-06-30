# Handoff Report: Premium 35-Section UI/UX Implementation Strategy

This report details the layout, styling, and content strategy for exactly 7 premium sections across the 5 pages of "Your Mechanic", incorporating Tailwind CSS, Atropos.js 3D parallax effects, Lottie animations, and curated Unsplash imagery.

---

## 1. Observation
We examined the directory structure and specific layout files within `c:\Users\Akash\Desktop\Sample-Mobile-Machenic\`:

*   **Tailwind Theme Setup (`tailwind.config.js`)**:
    We observed that custom brand colors, font families, and animation keys are defined under the extended theme:
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
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Montserrat', 'sans-serif'],
    }
    ```

*   **Custom CSS Classes (`src/index.css`)**:
    We verified that the following base and utility classes are ready for use:
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

*   **Page Component Scaffolds**:
    We inspected all five main page components and verified they contain exactly 7 empty section blocks. Below are their current layouts:
    *   `src/pages/Home.jsx` contains:
        1.  `hero` (lines 7-14)
        2.  `services-preview` (lines 17-22)
        3.  `how-it-works` (lines 25-30)
        4.  `trust-reviews` (lines 33-38)
        5.  `dynamic-cta` (lines 41-46)
        6.  `credentials` (lines 49-54)
        7.  `faq` (lines 57-62)
    *   `src/pages/About.jsx` contains:
        1.  `about-hero` (lines 7-14)
        2.  `about-mission` (lines 17-22)
        3.  `about-timeline` (lines 25-30)
        4.  `about-equipment` (lines 33-38)
        5.  `about-team` (lines 41-46)
        6.  `about-credentials` (lines 49-54)
        7.  `about-values` (lines 57-62)
    *   `src/pages/Services.jsx` contains:
        1.  `services-hero` (lines 7-14)
        2.  `services-diagnostics` (lines 17-22)
        3.  `services-maintenance` (lines 25-30)
        4.  `services-brakes` (lines 33-38)
        5.  `services-engine` (lines 41-46)
        6.  `services-battery` (lines 49-54)
        7.  `services-detailing` (lines 57-62)
    *   `src/pages/Pricing.jsx` contains:
        1.  `pricing-hero` (lines 7-14)
        2.  `pricing-packages` (lines 17-22)
        3.  `pricing-calculator` (lines 25-30)
        4.  `pricing-comparison` (lines 33-38)
        5.  `pricing-fleet` (lines 41-46)
        6.  `pricing-warranty` (lines 49-54)
        7.  `pricing-faq` (lines 57-62)
    *   `src/pages/Contact.jsx` contains:
        1.  `contact-hero` (lines 7-14)
        2.  `contact-booking` (lines 17-22)
        3.  `contact-emergency` (lines 25-30)
        4.  `contact-coverage` (lines 33-38)
        5.  `contact-hq` (lines 41-46)
        6.  `contact-social` (lines 49-54)
        7.  `contact-corporate` (lines 57-62)

---

## 2. Logic Chain
To elevate the mobile mechanic service to a $50k high-end agency standard, we map our styling strategy to the established codebase variables:
1.  **Background Transition Rules**: Alternating section background colors (e.g., swapping between jet obsidian `bg-brand-dark` and charcoal card elements `bg-brand-card/30` or `bg-brand-card/50` or using `.glass-panel`) prevents design fatigue and keeps pages visual, structured, and easy to scan.
2.  **Typography Visual Hierarchy**: Main headings must use the display font Montserrat (`font-display`) and be capitalized/spaced (`tracking-wider uppercase`). Secondary elements must utilize Inter (`font-sans`) to maintain legibility.
3.  **Aesthetics and Accents**: We apply metallic gold accents (`#D4AF37`) for highlights, premium borders (`#232326`), and gold/orange text gradients for core titles. High-performance orange (`#FF5A09`) is applied strictly to highlight mechanical alerts, emergency hotlines, and brake/suspension elements.
4.  **Parallax Interactive Components**: Atropos.js should wrap crucial items like pricing cards, team cards, and service cards to add luxury feel.
5.  **Lottie Vector Placement**: Sourced from public URLs (using `@lottiefiles/react-lottie-player` or `lottie-react`), Lottie loaders must represent mechanical activity, scheduling checks, and coverage maps.
6.  **Unsplash Imagery**: Dark linear/radial gradients must overlay 8k vehicle images to integrate cleanly with the obsidian background without washing out text.

---

## 3. Caveats
*   **Asset Accessibility**: We assume the public Lottie and Unsplash URLs are reachable over the internet.
*   **Third-party Libraries**: The exact syntax for integrating Atropos depends on the React Atropos package imports, which are configured globally but require specific JSX structures (e.g., `<Atropos activeOffset={40} shadow={false}>...`).
*   **Code-Only Restriction**: We did not execute or modify files directly. The implementation will need to be written by the Implementer agent.

---

## 4. Conclusion: Structured Section Implementation Strategy
We recommend implementing the following 35 distinct premium sections:

### Page 1: Home Page (`src/pages/Home.jsx`)

#### 1. Hero Section (`id="hero"`)
*   **Layout**: Split 2-column layout (Left: Text & Action CTAs, Right: Lottie animation).
*   **Tailwind Recipe**:
    ```jsx
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark px-4 sm:px-6 lg:px-8 py-24 overflow-hidden border-b border-brand-border">
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <span>●</span> On-Demand Luxury Mobile Service
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight mb-6">
            Dealer-Level Precision <br />
            <span className="text-gradient-gold">At Your Doorstep</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-muted max-w-xl mb-8">
            Skip the dealership lounge. Our certified master technicians bring advanced diagnostics and white-glove repair directly to your home or office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact-booking" className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-dark font-display font-extrabold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-brand-goldDark hover:shadow-lg hover:shadow-brand-gold/20 rounded">
              Book Appointment
            </a>
            <a href="#services-preview" className="inline-flex items-center justify-center px-8 py-4 border border-brand-border text-brand-silver font-display font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:border-brand-gold hover:text-brand-gold rounded bg-brand-card/45">
              Explore Menu
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center lg:h-auto h-72">
          {/* Lottie Diagnostic Animation */}
          <div className="w-full max-w-md h-full min-h-[300px]">
            <Lottie src="https://assets10.lottiefiles.com/packages/lf20_t9gkkhz4.json" loop autoplay className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
    ```

#### 2. Services Highlights (`id="services-preview"`)
*   **Layout**: Headline banner + 3-column Atropos 3D cards grid.
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-preview" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Services Showcase</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-brand-silver mt-2">Elite Repair Offerings</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "ECU Diagnostics", desc: "Full-system dealership-grade scanning, error reset, and mapping.", icon: "⚙️" },
            { title: "Bespoke Maintenance", desc: "Precision mobil oil changes, fluid purges, and filter swaps.", icon: "🔧" },
            { title: "Performance Brakes", desc: "Calipers, carbon ceramic discs, and master cylinder servicing.", icon: "🏎️" }
          ].map((item, idx) => (
            <Atropos key={idx} className="my-atropos-card cursor-pointer">
              <div className="bg-brand-card border border-brand-border p-8 rounded-lg relative overflow-hidden group h-full flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-300">
                <div>
                  <div className="text-4xl mb-6 text-brand-gold" data-atropos-offset="5">{item.icon}</div>
                  <h3 className="text-xl font-display font-extrabold text-brand-silver uppercase tracking-wider mb-3" data-atropos-offset="2">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed" data-atropos-offset="1">{item.desc}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-brand-goldDark">
                  Learn More <span>→</span>
                </div>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
    ```

#### 3. How It Works (`id="how-it-works"`)
*   **Layout**: 3-step structured horizontal path with connector gradients and glassmorphism.
*   **Tailwind Recipe**:
    ```jsx
    <section id="how-it-works" className="py-24 bg-brand-dark/40 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Simplified Process</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-brand-silver mt-2">White-Glove Convenience</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {[
            { num: "01", title: "Instant Booking", desc: "Select services, supply vehicle details, and pick your preferred time slot online." },
            { num: "02", title: "Mobile Dispatch", desc: "Our fully equipped service van drives directly to your specified address with specialized diagnostic gear." },
            { num: "03", title: "Approve & Go", desc: "Review digital breakdown reports, approve itemized estimates, and pay securely on your phone." }
          ].map((step, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-xl relative flex flex-col items-center text-center border border-white/5">
              {idx < 2 && <div className="absolute top-1/2 left-full w-full h-[1px] bg-gradient-to-r from-brand-gold/30 to-transparent hidden lg:block z-0" />}
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 bg-brand-dark flex items-center justify-center text-brand-gold font-display font-extrabold text-xl mb-6 relative z-10">
                {step.num}
              </div>
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-brand-silver mb-3">{step.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 4. Customer Trust & Reviews (`id="trust-reviews"`)
*   **Layout**: Centered titles + grid of client cards featuring luxury vehicles.
*   **Tailwind Recipe**:
    ```jsx
    <section id="trust-reviews" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Verified Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-brand-silver mt-2">Client Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "Absolute perfection. Diagnosed and fixed the air suspension on my AMG GT in my own driveway. Saved me a towing bill and dealership markups.", author: "Marcus V.", car: "Mercedes-AMG GT" },
            { quote: "Extremely professional. They arrived on time, used seat covers and fender protectors, and completed the Mobil 1 oil service efficiently.", author: "Sophia R.", car: "Porsche Macan GTS" },
            { quote: "Dealer-level scanner diagnostics. Solved an electrical draw issue that two previous independent shops failed to trace.", author: "David K.", car: "BMW M5 Competition" }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-card border border-brand-border p-8 rounded-lg flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300 relative">
              <span className="text-6xl text-brand-gold/10 font-serif absolute top-4 left-4">“</span>
              <p className="text-brand-silver italic text-sm leading-relaxed mb-6 z-10 relative mt-4">{item.quote}</p>
              <div>
                <h4 className="font-display font-semibold text-brand-gold uppercase text-xs tracking-wider">{item.author}</h4>
                <span className="text-brand-muted text-xs font-mono">{item.car}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 5. Dynamic CTA (`id="dynamic-cta"`)
*   **Layout**: High-performance orange theme, grid layout, emergency dispatch contact.
*   **Tailwind Recipe**:
    ```jsx
    <section id="dynamic-cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto relative bg-gradient-to-br from-brand-card to-[#120F0C] border border-brand-orange/20 p-8 sm:p-12 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-wider mb-4">
              🚨 24/7 Mobile Dispatch Active
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-gradient-orange mb-4 leading-none">
              Stranded or Due <br />For Diagnostics?
            </h2>
            <p className="text-brand-muted text-sm sm:text-base max-w-lg">
              Our mobile technicians are fully loaded with commercial tools and diagnostics. Average dispatch time is under 45 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a href="tel:5551234567" className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-brand-silver font-display font-black uppercase tracking-widest text-xs transition-all duration-300 hover:bg-brand-orange/95 hover:shadow-lg hover:shadow-brand-orange/20 rounded text-center">
              Call Hotline: (555) 123-4567
            </a>
            <a href="#contact-booking" className="inline-flex items-center justify-center px-8 py-4 border border-brand-border text-brand-silver font-display font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:border-brand-orange hover:text-brand-orange rounded bg-brand-dark/50 text-center">
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
    ```

#### 6. Certifications & Badges (`id="credentials"`)
*   **Layout**: Row of sepia-toned high-end certification badges with hover opacity.
*   **Tailwind Recipe**:
    ```jsx
    <section id="credentials" className="py-16 bg-brand-dark/30 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase mb-8">Accredited Engineering & Certifications</span>
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-50 hover:opacity-85 transition-opacity duration-300">
          {["ASE Master Tech", "EV Specialist", "Bosch Authorized", "BMW Certified", "Mercedes Specialist"].map((cred, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <span className="text-3xl text-brand-gold">🛡️</span>
              <span className="font-display text-[10px] font-extrabold uppercase tracking-widest text-brand-silver">{cred}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 7. FAQ (`id="faq"`)
*   **Layout**: Vertical stack accordion listing frequently asked diagnostics questions.
*   **Tailwind Recipe**:
    ```jsx
    <section id="faq" className="py-24 bg-brand-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Quick Answers</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase text-brand-silver mt-2">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "What locations do you cover?", a: "We service the entire metropolitan area and surrounding suburbs up to a 35-mile radius from the city center." },
            { q: "Can you perform diagnostics during rainy weather?", a: "Yes, our technicians carry pop-up mechanical canopies that fit over the engine bay, ensuring a dry workspace." },
            { q: "Are you fully insured for luxury vehicles?", a: "Yes, we maintain a comprehensive $2,000,000 commercial liability policy specifically covering elite exotics, electric vehicles, and sports cars." }
          ].map((item, idx) => (
            <details key={idx} className="group border-b border-brand-border py-4 outline-none">
              <summary className="flex justify-between items-center font-display font-bold uppercase tracking-wider text-sm text-brand-silver hover:text-brand-gold transition-colors duration-200 cursor-pointer list-none">
                <span>{item.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-brand-gold">▼</span>
              </summary>
              <p className="text-brand-muted text-sm leading-relaxed mt-4 pl-2 border-l border-brand-gold/30">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
    ```

---

### Page 2: About Page (`src/pages/About.jsx`)

#### 1. About Hero (`id="about-hero"`)
*   **Layout**: Full-width header panel with an 8k Unsplash image backdrop (supercar engine) and a radial gradient mask.
*   **Tailwind Recipe**:
    ```jsx
    <section id="about-hero" className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 scale-105 transition-transform duration-[15s] hover:scale-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070')" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
      <div className="relative z-10 max-w-4xl">
        <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Engineered for Excellence</span>
        <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-gradient-gold my-4">Our Story & Heritage</h1>
        <p className="text-brand-muted text-base max-w-2xl mx-auto">
          Established in 2018 with a single vehicle and a commitment to precision. We have revolutionized the mobile auto-repair market for exotic, luxury, and daily drivers.
        </p>
      </div>
    </section>
    ```

#### 2. Mission Section (`id="about-mission"`)
*   **Layout**: 2-column layout. Left: Gold bold quote. Right: Paragraph detailing our mission.
*   **Tailwind Recipe**:
    ```jsx
    <section id="about-mission" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="border-l-4 border-brand-gold pl-8">
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-brand-silver leading-tight">
            "Redefining car care by eliminating the wait time."
          </h3>
          <span className="block text-brand-gold uppercase tracking-wider font-bold text-xs mt-4">— Executive Team</span>
        </div>
        <div className="text-brand-muted text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            Our mission is simple: deliver high-end dealer-level mechanical repairs right to your home, office, or roadside coordinate. We believe that premium service shouldn't require losing your car to a physical workshop for days.
          </p>
          <p>
            By using advanced onboard computers, mobile generators, and master mechanics, we bring clean-room workshop diagnostics direct to you.
          </p>
        </div>
      </div>
    </section>
    ```

#### 3. Timeline (`id="about-timeline"`)
*   **Layout**: Centered timeline path, nodes on alternating sides, gold date markers.
*   **Tailwind Recipe**:
    ```jsx
    <section id="about-timeline" className="py-24 bg-brand-dark/30 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Evolution</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2">Our Journey</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-border -translate-x-1/2 hidden md:block" />
          {[
            { year: "2018", title: "Single Mobile Unit", desc: "Launched in North Metro with one customized mechanical van focusing on emergency diagnostics." },
            { year: "2020", title: "Fleet Expansion", desc: "Grew to 5 custom sprinter vans loaded with heavy tools, hydraulic vehicle jacks, and OBD scanners." },
            { year: "2023", title: "Luxury Concierge Tier", desc: "Partnered with local sports car clubs and dealerships to provide on-site trackside track preparation." }
          ].map((item, idx) => (
            <div key={idx} className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 last:mb-0 ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
              <div className={idx % 2 !== 0 ? 'md:order-2 md:text-left pl-8 border-l border-brand-gold/25' : 'pr-8 md:text-right md:border-r border-brand-gold/25'}>
                <span className="font-display font-black text-3xl text-brand-gold">{item.year}</span>
                <h4 className="font-display font-bold uppercase text-brand-silver mt-1">{item.title}</h4>
                <p className="text-brand-muted text-sm mt-2">{item.desc}</p>
              </div>
              <div className="hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 4. Equipment & Fleet (`id="about-equipment"`)
*   **Layout**: 4-column glassmorphism cards.
*   **Tailwind Recipe**:
    ```jsx
    <section id="about-equipment" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Onboard Hardware</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2">Mobile Infrastructure</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AUTEL Elite Scanner", desc: "Full-system ECU flash programming, vehicle keycoding, and sensor calibration." },
            { title: "Digital Scopes", desc: "Endoscope inspection probes mapping engine cylinders without block disassembly." },
            { title: "Smart Air Jacks", desc: "Low-profile hydraulic lifts designed to lift supercars safely on sloped surfaces." },
            { title: "Pneumatic Evacuators", desc: "Closed fluid extractors ensuring oil changes leave zero residue in driveways." }
          ].map((eq, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-lg border border-brand-border hover:border-brand-gold/20 transition-all duration-300">
              <span className="text-3xl text-brand-gold block mb-4">⚙️</span>
              <h4 className="font-display font-bold uppercase text-brand-silver text-sm mb-2">{eq.title}</h4>
              <p className="text-brand-muted text-xs leading-relaxed">{eq.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 5. Master Mechanics (`id="about-team"`)
*   **Layout**: 3-column team bios with Atropos wrappers.
*   **Tailwind Recipe**:
    ```jsx
    <section id="about-team" className="py-24 bg-brand-dark/50 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Certified Staff</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2">Meet the Master Mechanics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Robert Chen", role: "Master Diagnostic Technician", cert: "ASE L1 / BMW Certified", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256" },
            { name: "Marcus Thorne", role: "Drivetrain & Brake Specialist", cert: "Penske Racing Academy", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256" },
            { name: "Sarah Lin", role: "Hybrid & EV Systems Specialist", cert: "Tesla Advanced Service", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256" }
          ].map((tech, idx) => (
            <Atropos key={idx} className="cursor-pointer">
              <div className="bg-brand-card border border-brand-border p-6 rounded-lg flex flex-col items-center text-center hover:border-brand-gold/30 transition-all duration-300">
                <img src={tech.img} alt={tech.name} className="w-24 h-24 rounded-full object-cover border-2 border-brand-border mb-4" />
                <h4 className="font-display font-bold uppercase text-brand-silver tracking-wider">{tech.name}</h4>
                <span className="text-brand-gold text-xs font-medium uppercase mt-1">{tech.role}</span>
                <span className="inline-block mt-3 px-3 py-1 bg-brand-dark border border-brand-border rounded text-[10px] text-brand-muted font-mono">{tech.cert}</span>
              </div>
            </Atropos>
          ))}
        </div>
      </div>
    </section>
    ```

#### 6. Credentials & Insurance (`id="about-credentials"`)
*   **Layout**: Centered detail shield panel.
*   **Tailwind Recipe**:
    ```jsx
    <section id="about-credentials" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-card to-brand-dark border border-brand-border p-8 sm:p-12 rounded-xl flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="text-6xl text-brand-gold">🛡️</div>
        <div>
          <h3 className="font-display text-2xl font-bold uppercase text-brand-silver mb-3">Licensed, Bonded & $2M Insured</h3>
          <p className="text-brand-muted text-sm leading-relaxed mb-4">
            We hold full state licensing and a $2,000,000 commercial garage liability policy. When we lift your AMG, Porsche, or custom build in your driveway, you are protected by the industry's highest insurance standard.
          </p>
          <div className="flex gap-4 text-xs font-bold uppercase text-brand-gold">
            <span>✓ Garage Keepers Policy</span>
            <span>✓ Complete Vehicle Protection</span>
          </div>
        </div>
      </div>
    </section>
    ```

#### 7. Core Values (`id="about-values"`)
*   **Layout**: 3-column list using stylized transparent number digits.
*   **Tailwind Recipe**:
    ```jsx
    <section id="about-values" className="py-24 bg-brand-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { num: "01", val: "Engineering Rigor", desc: "No shortcuts. Every torque value matches the original manufacturer service manual guidelines." },
          { num: "02", val: "Bespoke Cleanliness", desc: "We employ protective wraps and fluid extractors, leaving your driveway cleaner than when we arrived." },
          { num: "03", val: "Upfront Integrity", desc: "No shadow markups. We provide digital reports detailing parts and labor before any service begins." }
        ].map((item, idx) => (
          <div key={idx} className="relative pl-6 border-l border-brand-border">
            <span className="absolute top-0 right-0 font-display text-7xl font-black text-brand-border/30 select-none leading-none z-0">{item.num}</span>
            <div className="relative z-10">
              <h4 className="font-display font-bold uppercase text-brand-gold tracking-widest text-sm mb-2">{item.val}</h4>
              <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    ```

---

### Page 3: Services Page (`src/pages/Services.jsx`)

#### 1. Services Hero (`id="services-hero"`)
*   **Layout**: Centered header block + interactive smooth-scroll quick-links.
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-hero" className="py-20 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Mechanical Menu</span>
        <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-brand-silver my-4">Our Services</h1>
        <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto mb-10">
          Professional diagnostic testing, scheduled oil change intervals, performance brakes, and mechanical systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4 bg-brand-card/40 border border-brand-border rounded-full p-2 max-w-2xl mx-auto">
          {["Diagnostics", "Oil Change", "Brakes", "Engine", "Battery", "Detailing"].map((item, idx) => (
            <a key={idx} href={`#services-${item.toLowerCase()}`} className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-gold hover:bg-brand-dark transition-all duration-300">
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
    ```

#### 2. Computerized Diagnostics (`id="services-diagnostics"`)
*   **Layout**: Split row. Left: ECU Diagnostic image. Right: Feature breakdown with diagnostic badges.
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-diagnostics" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex gap-2 items-center bg-brand-gold/10 border border-brand-gold/25 px-3 py-1 rounded text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">
            Diagnostics
          </div>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mb-6">ECU Mapping & Scanning</h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
            We bypass local mechanic guesswork. Using advanced Autel diagnostic systems, we scan active and historical trouble codes across your vehicle’s engine, transmission, body control, and suspension modules.
          </p>
          <ul className="space-y-3 text-sm text-brand-silver">
            <li className="flex items-center gap-3">✓ Check Engine Light & Reset</li>
            <li className="flex items-center gap-3">✓ Live Sensor Data Graphing</li>
            <li className="flex items-center gap-3">✓ Fuel Trim Mapping</li>
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-brand-border shadow-2xl">
          <img src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800" alt="ECU Diagnostic Scanning" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
    ```

#### 3. Routine Maintenance (`id="services-maintenance"`)
*   **Layout**: 3-column pricing or detail block. Card backgrounds showcase brand compatibility (e.g. Mobil 1, Pentosin).
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-maintenance" className="py-24 bg-brand-dark/20 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Periodic Service</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2">Bespoke Maintenance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Synthetic Oil Change", detail: "Mobil 1 or Liqui Moly engine lubricants, OEM filter swap, and multi-point checklist." },
            { title: "Fluid Purge", desc: "Flush and fill coolant, power steering, and active braking systems with premium synthetics." },
            { title: "Spark Plugs", desc: "Install high-performance spark plugs and ignition coils to maximize performance." }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-card border border-brand-border p-8 rounded-lg hover:border-brand-gold/20 transition-all duration-300">
              <span className="text-brand-gold text-2xl">🔧</span>
              <h3 className="font-display font-bold uppercase text-brand-silver mt-4 mb-2">{item.title}</h3>
              <p className="text-brand-muted text-xs leading-relaxed">{item.desc || item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 4. Brake & Suspension Care (`id="services-brakes"`)
*   **Layout**: Warning-styled performance orange theme.
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-brakes" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-brand-border">
          <img src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=800" alt="Brakes Calibration" className="w-full h-80 object-cover" />
        </div>
        <div className="order-1 lg:order-2 border-l-4 border-brand-orange pl-8 py-2">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-widest block mb-2">Performance Stop</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mb-6">Brakes & Chassis Tuning</h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
            Brake fade is not an option. We replace front/rear brake pads, performance rotors, wear sensors, and service suspension elements like dampers and bushings.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs font-mono text-brand-silver">
            <div>⚙️ Pad & Rotor Swap</div>
            <div>⚙️ Brake Fluid Flush</div>
            <div>⚙️ Suspension Control Arms</div>
            <div>⚙️ OEM Caliper Service</div>
          </div>
        </div>
      </div>
    </section>
    ```

#### 5. Engine Tuning & Repair (`id="services-engine"`)
*   **Layout**: Tabbed panels showcasing different mechanical repairs.
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-engine" className="py-24 bg-brand-dark/20 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Under the Hood</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2">Engine System Repairs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { sys: "Cooling", desc: "Radiator changes, coolant pump replacements, hose upgrades, and thermostat calibrations." },
            { sys: "Drivetrain", desc: "Serpentine accessory belt replacements, fuel injectors, throttle cleanups, and sensor diagnostics." },
            { sys: "Gaskets", desc: "Valve cover gaskets, engine oil leak repairs, filter adapter seals, and intake cleaning." }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-card border border-brand-border p-8 rounded-lg hover:border-brand-gold/25 transition-all duration-300">
              <span className="text-xs font-bold uppercase text-brand-gold tracking-widest block mb-2">{item.sys} System</span>
              <h4 className="font-display font-extrabold text-brand-silver uppercase text-base mb-3">Mechanical Fixes</h4>
              <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 6. Battery & Alternator Services (`id="services-battery"`)
*   **Layout**: Diagnostic digital display layout representing battery state.
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-battery" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Charging & Power</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2 mb-6">Battery, Starter & Alternator</h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
            Cold cranks? We perform real-time charging system diagnostics, battery load test outputs, starter solenoid repairs, and alternators on-site.
          </p>
          <div className="bg-[#141416] border border-brand-border p-6 rounded-lg font-mono text-xs text-brand-silver">
            <div className="flex justify-between border-b border-brand-border pb-2">
              <span>BATTERY HEALTH TEST</span>
              <span className="text-green-500">PASS (98%)</span>
            </div>
            <div className="flex justify-between pt-2">
              <span>VOLTAGE RATING</span>
              <span>12.6V (Idle) / 14.2V (Running)</span>
            </div>
          </div>
        </div>
        <div>
          {/* Lottie battery animation */}
          <div className="w-full max-w-sm mx-auto h-64">
            <Lottie src="https://assets6.lottiefiles.com/packages/lf20_fpqsz9.json" loop autoplay />
          </div>
        </div>
      </div>
    </section>
    ```

#### 7. Luxury Detailing (`id="services-detailing"`)
*   **Layout**: Single column layout showcasing high-end exterior protection.
*   **Tailwind Recipe**:
    ```jsx
    <section id="services-detailing" className="py-24 bg-brand-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden border border-brand-border">
          <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800" alt="Ceramic Coating Finish" className="w-full h-80 object-cover" />
        </div>
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Aesthetic Care</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2 mb-6">Mobile Detailing & Ceramic Coatings</h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-6">
            We provide deep interior detailing, multi-stage machine paint correction, and industry-grade ceramic coatings inside your enclosed garage space.
          </p>
          <div className="flex gap-4">
            <a href="#contact-booking" className="inline-flex px-6 py-3 bg-brand-gold text-brand-dark font-display font-extrabold uppercase tracking-widest text-xs rounded transition-all duration-300 hover:bg-brand-goldDark">
              Request Detailing Quote
            </a>
          </div>
        </div>
      </div>
    </section>
    ```

---

### Page 4: Pricing Page (`src/pages/Pricing.jsx`)

#### 1. Pricing Hero (`id="pricing-hero"`)
*   **Layout**: Centered header + Toggle switch for luxury vs everyday car packages.
*   **Tailwind Recipe**:
    ```jsx
    <section id="pricing-hero" className="py-20 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Rate Cards</span>
        <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-brand-silver my-4">Transparent Pricing</h1>
        <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">
          We maintain absolute transparency. Our rates are flat and itemized with no hidden trip fees or call-out surcharges.
        </p>
        <div className="inline-flex items-center bg-brand-card border border-brand-border rounded-full p-1 mt-8">
          <button className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-brand-dark transition-all duration-300">
            Everyday Vehicles
          </button>
          <button className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-brand-silver hover:text-brand-gold transition-all duration-300">
            Luxury / Exotics
          </button>
        </div>
      </div>
    </section>
    ```

#### 2. Service Tiers (`id="pricing-packages"`)
*   **Layout**: 4-column tier grid. The 3rd card (Premium Engine Tuning) is highlighted with gold outlines and raised layout.
*   **Tailwind Recipe**:
    ```jsx
    <section id="pricing-packages" className="py-24 bg-brand-dark/20 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Standard Diagnostic", price: "$149", desc: "Obd2 error code scans, sensor check, digital health report.", popular: false },
          { title: "Bespoke Service", price: "$299", desc: "Oil change, fluid top-off, safety test, diagnostic report.", popular: false },
          { title: "Elite Tune", price: "$499", desc: "Spark plug swap, fuel system flush, computer diagnostic calibration.", popular: true },
          { title: "Concierge Fleet", price: "Custom", desc: "B2B rates, periodic onsite diagnostics, multi-car discounts.", popular: false }
        ].map((pkg, idx) => (
          <Atropos key={idx} className="cursor-pointer">
            <div className={`bg-brand-card p-8 rounded-lg flex flex-col justify-between h-full border relative ${pkg.popular ? 'border-2 border-brand-gold lg:-translate-y-3 shadow-xl shadow-brand-gold/10' : 'border-brand-border hover:border-brand-gold/25'}`}>
              {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded">Best Value</span>}
              <div>
                <h4 className="font-display font-extrabold uppercase text-brand-silver tracking-wider text-sm mb-4">{pkg.title}</h4>
                <div className="my-6">
                  <span className="font-display text-4xl sm:text-5xl font-black text-brand-silver">{pkg.price}</span>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed mb-6">{pkg.desc}</p>
              </div>
              <a href="#contact-booking" className={`w-full py-3 text-center rounded font-display text-xs font-black uppercase tracking-widest transition-all duration-300 ${pkg.popular ? 'bg-brand-gold text-brand-dark hover:bg-brand-goldDark' : 'border border-brand-border text-brand-silver hover:border-brand-gold hover:text-brand-gold bg-brand-dark/50'}`}>
                Book Tier
              </a>
            </div>
          </Atropos>
        ))}
      </div>
    </section>
    ```

#### 3. Estimated Cost Calculator (`id="pricing-calculator"`)
*   **Layout**: Interactive form inputs returning dynamic calculated price estimate.
*   **Tailwind Recipe**:
    ```jsx
    <section id="pricing-calculator" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-brand-card border border-brand-border p-8 rounded-xl text-left shadow-2xl">
        <div className="mb-6 text-center">
          <h3 className="font-display text-2xl font-bold uppercase text-brand-silver">Instant Estimate Calculator</h3>
          <p className="text-brand-muted text-xs">Simulate your call-out quote parameters instantly.</p>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Select Service</label>
            <select className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold">
              <option>Full diagnostics scan ($149)</option>
              <option>Premium synthetic oil change ($299)</option>
              <option>Engine Tune-up ($499)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Vehicle Category</label>
            <select className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold">
              <option>Everyday / Sedans (+$0)</option>
              <option>Luxury SUVs / Sports Cars (+$75)</option>
              <option>Exotics / Track Vehicles (+$150)</option>
            </select>
          </div>
          <div className="bg-brand-dark border border-brand-border p-6 rounded-lg text-center">
            <span className="text-xs font-bold uppercase text-brand-muted">Projected Cost</span>
            <div className="font-display text-4xl font-black text-brand-gold mt-2">$149.00 - $224.00</div>
            <p className="text-[10px] text-brand-muted mt-2">Tax and diagnostic deduction applicable upon checkout.</p>
          </div>
        </div>
      </div>
    </section>
    ```

#### 4. Compare Services (`id="pricing-comparison"`)
*   **Layout**: Comprehensive table checking off diagnostic features.
*   **Tailwind Recipe**:
    ```jsx
    <section id="pricing-comparison" className="py-24 bg-brand-dark/50 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto overflow-x-auto rounded-lg border border-brand-border">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-card border-b border-brand-border">
              <th className="px-6 py-4 text-xs font-bold uppercase text-brand-gold">Package Features</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-brand-gold text-center">Diagnostics</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-brand-gold text-center">Standard</th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-brand-gold text-center">Elite</th>
            </tr>
          </thead>
          <tbody className="text-xs text-brand-silver">
            <tr className="border-b border-brand-border">
              <td className="px-6 py-4">ECU Scanning & Diagnostic Log</td>
              <td className="px-6 py-4 text-center text-brand-gold">✓</td>
              <td className="px-6 py-4 text-center text-brand-gold">✓</td>
              <td className="px-6 py-4 text-center text-brand-gold">✓</td>
            </tr>
            <tr className="border-b border-brand-border">
              <td className="px-6 py-4">Fluid Top-off & Safety Check</td>
              <td className="px-6 py-4 text-center text-brand-muted">—</td>
              <td className="px-6 py-4 text-center text-brand-gold">✓</td>
              <td className="px-6 py-4 text-center text-brand-gold">✓</td>
            </tr>
            <tr className="border-b border-brand-border">
              <td className="px-6 py-4">High-performance Spark Plug Install</td>
              <td className="px-6 py-4 text-center text-brand-muted">—</td>
              <td className="px-6 py-4 text-center text-brand-muted">—</td>
              <td className="px-6 py-4 text-center text-brand-gold">✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    ```

#### 5. Corporate Fleet Rates (`id="pricing-fleet"`)
*   **Layout**: Single column luxury fleet promo callout.
*   **Tailwind Recipe**:
    ```jsx
    <section id="pricing-fleet" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto glass-panel p-8 sm:p-12 rounded-xl flex flex-col lg:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Business solutions</span>
          <h3 className="font-display text-2xl font-bold uppercase text-brand-silver mt-1">Multi-Vehicle & Corporate Fleet Rates</h3>
          <p className="text-brand-muted text-sm mt-3 max-w-xl">
            We provide structured monthly billing, routine diagnostic logging, and priority dispatch schedules for luxury corporate motor fleets and multi-car households.
          </p>
        </div>
        <a href="#contact-corporate" className="px-8 py-4 bg-brand-gold text-brand-dark font-display font-extrabold uppercase tracking-widest text-xs rounded hover:bg-brand-goldDark transition-all duration-300">
          Inquire Fleet
        </a>
      </div>
    </section>
    ```

#### 6. Our Service Guarantee (`id="pricing-warranty"`)
*   **Layout**: 2-column warranty info block.
*   **Tailwind Recipe**:
    ```jsx
    <section id="pricing-warranty" className="py-24 bg-brand-dark/20 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Reliability</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2 mb-6">12-Month / 12,000-Mile Parts & Labor Warranty</h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            All services completed by our technicians are backed by a full warranty guarantee. If any replaced mechanical part fails under normal operations, we drive out to replace it free of charge.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full border-4 border-brand-gold/30 flex flex-col items-center justify-center text-center p-4">
            <span className="font-display font-black text-4xl text-brand-gold">12</span>
            <span className="text-xs font-bold uppercase text-brand-silver tracking-widest mt-1">Months</span>
            <span className="text-[10px] text-brand-muted uppercase">Coverage</span>
          </div>
        </div>
      </div>
    </section>
    ```

#### 7. Billing & Payments FAQ (`id="pricing-faq"`)
*   **Layout**: Two-column layout grid of simple text questions.
*   **Tailwind Recipe**:
    ```jsx
    <section id="pricing-faq" className="py-24 bg-brand-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Financial</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2">Billing & Payment Policies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="font-display font-bold uppercase text-brand-gold text-sm mb-2">When am I charged?</h4>
            <p className="text-brand-muted text-xs leading-relaxed">
              We process payments only after the diagnostic scan or mechanical repair is completed and approved.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold uppercase text-brand-gold text-sm mb-2">Is there a trip fee?</h4>
            <p className="text-brand-muted text-xs leading-relaxed">
              No. Our flat fees are inclusive of dispatch, diagnostic setup, and tooling. The quote you receive is final.
            </p>
          </div>
        </div>
      </div>
    </section>
    ```

---

### Page 5: Contact Page (`src/pages/Contact.jsx`)

#### 1. Connect with Us (`id="contact-hero"`)
*   **Layout**: Centered header panel with live indicator.
*   **Tailwind Recipe**:
    ```jsx
    <section id="contact-hero" className="py-20 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
          Live Dispatch Desk Online
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-brand-silver mb-4">Connect With Us</h1>
        <p className="text-brand-muted text-sm sm:text-base max-w-2xl mx-auto">
          Submit diagnostic repair details to queue a call-out slot, or access our 24/7 hotline.
        </p>
      </div>
    </section>
    ```

#### 2. Schedule a Callout (`id="contact-booking"`)
*   **Layout**: Interactive multi-field booking card.
*   **Tailwind Recipe**:
    ```jsx
    <section id="contact-booking" className="py-24 bg-brand-dark/20 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-brand-card border border-brand-border p-8 rounded-xl shadow-2xl text-left">
        <h3 className="font-display text-xl font-bold uppercase text-brand-silver mb-8 text-center">Book Your Mobile Service</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Name</label>
              <input type="text" className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Email</label>
              <input type="email" className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Year / Make / Model</label>
              <input type="text" placeholder="e.g. 2021 Porsche 911" className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Requested Date</label>
              <input type="date" className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Desired Time</label>
              <select className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold">
                <option>Morning (8am - 12pm)</option>
                <option>Afternoon (12pm - 4pm)</option>
                <option>Evening (4pm - 8pm)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-brand-muted mb-2">Diagnostic / Repair Detail</label>
            <textarea rows="4" placeholder="Detail any warning lights or mechanical symptoms..." className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
          </div>
          <button type="submit" className="w-full py-4 bg-brand-gold text-brand-dark font-display font-extrabold uppercase tracking-widest text-xs hover:bg-brand-goldDark transition-all duration-300 rounded">
            Submit Schedule Request
          </button>
        </form>
      </div>
    </section>
    ```

#### 3. 24/7 Emergency Dispatch (`id="contact-emergency"`)
*   **Layout**: Emergency theme utilizing high-contrast orange.
*   **Tailwind Recipe**:
    ```jsx
    <section id="contact-emergency" className="py-20 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-card via-[#1A0B0B] to-brand-dark border border-[#3A1414] p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
        <div>
          <span className="text-xs font-bold uppercase text-brand-orange block mb-2">🚨 Urgent Roadside</span>
          <h3 className="font-display text-2xl font-bold uppercase text-brand-silver">Immediate Dispatch Desk</h3>
          <p className="text-brand-muted text-sm mt-2 max-w-md">
            If you have a break failure or ignition lock-out, call our hot-desk for direct, prioritized mechanic dispatch.
          </p>
        </div>
        <a href="tel:5551234567" className="inline-flex px-8 py-4 bg-brand-orange text-brand-silver font-display font-black uppercase tracking-wider text-xs rounded hover:bg-brand-orange/95">
          Call: (555) 123-4567
        </a>
      </div>
    </section>
    ```

#### 4. Service Coverage Areas (`id="contact-coverage"`)
*   **Layout**: Zip search validation block.
*   **Tailwind Recipe**:
    ```jsx
    <section id="contact-coverage" className="py-24 bg-brand-dark/20 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Zip Check</span>
        <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2 mb-6">Service Coverage Areas</h2>
        <p className="text-brand-muted text-sm max-w-xl mx-auto mb-8">
          We service standard regions within a 35-mile radius. Input your zipcode below to check your address coverage instantly.
        </p>
        <div className="flex max-w-md mx-auto border border-brand-border bg-brand-dark rounded-lg p-1">
          <input type="text" placeholder="Enter Zip Code..." className="flex-grow bg-transparent border-0 text-brand-silver text-sm px-4 focus:outline-none" />
          <button className="px-6 py-2.5 bg-brand-gold text-brand-dark uppercase font-bold text-xs tracking-wider hover:bg-brand-goldDark transition-colors duration-300 rounded">
            Check
          </button>
        </div>
      </div>
    </section>
    ```

#### 5. Business Office (`id="contact-hq"`)
*   **Layout**: 3-column physical details.
*   **Tailwind Recipe**:
    ```jsx
    <section id="contact-hq" className="py-24 bg-brand-dark border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Direct Phone", data: "(555) 123-4567", desc: "Mon-Sun, 24 Hours dispatch" },
          { title: "Support Email", data: "service@yourmechanic.com", desc: "General inquires and receipts" },
          { title: "Business HQ", data: "100 Prestige Parkway", desc: "Suite 400 (Corporate office only)" }
        ].map((block, idx) => (
          <div key={idx} className="bg-brand-card border border-brand-border p-8 rounded-lg text-center">
            <span className="text-2xl text-brand-gold">📍</span>
            <h4 className="font-display font-bold uppercase text-brand-silver text-sm mt-4 mb-2">{block.title}</h4>
            <span className="block font-mono text-brand-gold text-sm font-semibold">{block.data}</span>
            <span className="text-brand-muted text-xs block mt-1">{block.desc}</span>
          </div>
        ))}
      </div>
    </section>
    ```

#### 6. Follow Us (`id="contact-social"`)
*   **Layout**: 4-column photo grid.
*   **Tailwind Recipe**:
    ```jsx
    <section id="contact-social" className="py-24 bg-brand-dark/20 border-b border-brand-border px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Social Feed</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2">See Our Work</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=400",
            "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=400",
            "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=400",
            "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400"
          ].map((url, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded border border-brand-border group cursor-pointer">
              <img src={url} alt="Service Gallery Item" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-dark/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">View Post</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    ```

#### 7. Partnerships & Feedback (`id="contact-corporate"`)
*   **Layout**: 2-column B2B feedback panel.
*   **Tailwind Recipe**:
    ```jsx
    <section id="contact-corporate" className="py-24 bg-brand-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">B2B Relations</span>
          <h2 className="text-3xl font-display font-extrabold uppercase text-brand-silver mt-2 mb-6">Partnerships & Vendor Feedback</h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Interested in listing your commercial fleet or requesting vendor partnership agreements? Reach out to our B2B desk for custom terms.
          </p>
        </div>
        <div className="bg-brand-card border border-brand-border p-6 rounded-lg">
          <form className="space-y-4">
            <input type="text" placeholder="Company Name" className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            <input type="email" placeholder="Contact Email" className="w-full bg-brand-dark border border-brand-border text-brand-silver rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-gold" />
            <button className="w-full py-3 bg-brand-gold text-brand-dark font-display font-bold uppercase tracking-widest text-xs hover:bg-brand-goldDark transition-colors duration-300 rounded">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
    ```

---

## 5. Verification Method
To verify compliance and ensure all 35 sections are properly structured:
1.  **Check Route & Files presence**:
    Confirm the files `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Services.jsx`, `src/pages/Pricing.jsx`, and `src/pages/Contact.jsx` exist and define exactly 7 `<section>` elements (matching the exact IDs described in this document).
2.  **Verify Tailwind Build**:
    Run `npm run build` from the workspace folder to ensure all custom color configurations (`bg-brand-dark`, `bg-brand-card`, etc.) and classes compile correctly without any syntax errors.
3.  **Inspect CSS Imports**:
    Ensure `src/index.css` is loaded and configures `@import 'atropos/css';` correctly at the top.
