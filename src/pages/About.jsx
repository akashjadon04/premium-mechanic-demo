import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LottieLoader from '../components/LottieLoader';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Spinning Gear Scroll Trigger
  const gearRotation = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const gearY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);

  // 2. Zooming Parallax Image
  const { scrollYProgress: imageScroll } = useScroll();
  const imageScale = useTransform(imageScroll, [0, 1], [1, 1.3]);
  const imageY = useTransform(imageScroll, [0, 1], ["0%", "15%"]);

  return (
    <div ref={containerRef} className="bg-clay-base text-clay-dark min-h-screen font-sans antialiased selection:bg-clay-accent selection:text-white relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-clay-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-96 h-96 bg-clay-orange/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />

      {/* Floating Gear SVG (Scroll Trigger) */}
      <motion.div 
        style={{ rotate: gearRotation, top: gearY }}
        className="absolute left-8 z-50 pointer-events-none hidden lg:block opacity-30 mix-blend-overlay"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="#0F172A">
          <path d="M50 10 A40 40 0 1 0 90 50 A40 40 0 0 0 50 10 Z M50 75 A25 25 0 1 1 75 50 A25 25 0 0 1 50 75 Z" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect key={deg} x="45" y="0" width="10" height="20" transform={`rotate(${deg} 50 50)`} fill="#0F172A" />
          ))}
        </svg>
      </motion.div>

      {/* 1. Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center border-b border-clay-border px-6 relative z-10 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 clay-panel px-4 py-2 rounded-full mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-clay-accent">
              Established 2018
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-clay-dark uppercase tracking-tight mb-8">
            The Mobile <br />
            <span className="text-gradient-accent">Craftsmanship</span>
          </h1>
          <p className="text-xl text-clay-muted max-w-2xl mx-auto leading-relaxed font-inter mb-10">
            We didn't just mobilize mechanics; we engineered an elite concierge experience for vehicles that command respect. Absolute precision brought straight to your garage or corporate bay.
          </p>
          <div className="w-16 h-[4px] bg-clay-accent mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* 2. Mission Section */}
      <section className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-clay-accent font-bold uppercase tracking-widest block mb-4">
              Philosophy
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-clay-dark uppercase tracking-tight mb-6">
              White-Glove Care, Driven By Precision
            </h2>
            <p className="text-clay-muted text-lg leading-relaxed mb-6 font-inter">
              Automotive engineering is an art form. Our mission is to restore and maintain your vehicle's mechanical and electrical systems with the exact same standard of integrity you would expect from a factory workshop.
            </p>
            <div className="clay-panel p-6 my-8 italic text-clay-dark text-xl leading-relaxed border-l-4 border-clay-accent">
              "Every turn of a wrench is guided by a commitment to preserve engineering integrity. We treat your vehicle as a masterpiece of design."
            </div>
            <p className="text-clay-muted text-lg leading-relaxed font-inter">
              We operate under a simple ethos: zero driveway footprint, digital diagnostics, absolute transparency, and dealer-level tools.
            </p>
          </motion.div>

          {/* Parallax Zooming Image */}
          <div className="flex justify-center h-[500px] rounded-[3rem] overflow-hidden clay-panel p-2 shadow-2xl relative">
            <motion.img 
              style={{ scale: imageScale, y: imageY }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Porsche_911_GT3_RS_interior.jpg/2560px-Porsche_911_GT3_RS_interior.jpg" 
              alt="Luxury Automobile Cockpit Setup" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-[2.5rem]" />
          </div>
        </div>
      </section>

      {/* 3. Timeline */}
      <section className="py-32 bg-white/40 border-y border-clay-border px-6 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Our <span className="text-gradient-accent">Chronicles</span>
            </h3>
            <p className="text-clay-muted text-xl max-w-xl mx-auto font-inter">
              A history of mechanical refinement, advanced tooling integration, and building client trust.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              { year: "2018", title: "Scaffolding the Vision", desc: "Launched our first custom-fitted Mercedes-Benz Sprinter workshop, bringing diagnostic oil changes and inspections on-site.", color: "text-clay-accent" },
              { year: "2021", title: "Dealer-Grade Shift", desc: "Upgraded entire telemetry scanner arsenal to Autel Maxisys Elite and manufacturer interfaces, allowing on-site module programming.", color: "text-clay-orange" },
              { year: "2024", title: "EV Specialty Integration", desc: "Certified technicians in high-voltage safety, hybrid powertrain diagnostics, and electric vehicle cooling system care.", color: "text-green-600" },
              { year: "2026", title: "Modern Mobile Labs", desc: "Deployed custom heavy-duty sprinter rigs equipped with pneumatic lifts, onboard power grids, and climate-controlled awnings.", color: "text-blue-600" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, rotate: i % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className={`clay-panel p-8 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center border-4 border-white shadow-[15px_15px_30px_#d1d9e6,_-15px_-15px_30px_#ffffff]`}
              >
                <div className={`w-32 h-32 flex-shrink-0 clay-panel rounded-full flex items-center justify-center shadow-clay-inset text-3xl font-black ${item.color}`}>
                  {item.year}
                </div>
                <div className={i % 2 === 0 ? "text-left" : "text-left md:text-right"}>
                  <h4 className="text-3xl font-black text-clay-dark mb-4">{item.title}</h4>
                  <p className="text-clay-muted text-lg font-inter leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Equipment & Fleet (Unchanged but with vibrant colors) */}
      <section className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Mobile <span className="text-gradient-accent">Instrumentation</span>
            </h3>
            <p className="text-clay-muted text-xl max-w-xl mx-auto font-inter">
              Our mobile labs carry tools that exceed industry standards, ensuring exact parameter compliance on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -10 }} className="clay-panel p-10 bg-blue-50/50">
              <div className="w-16 h-16 bg-white flex items-center justify-center text-blue-600 mb-8 rounded-full shadow-clay-inset">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h4 className="text-xl font-bold text-clay-dark mb-4">Proprietary Sprinter Labs</h4>
              <p className="text-clay-muted font-inter leading-relaxed mb-6">Custom built with quiet solar generator systems, high-volume oil evacuation pumps, and heavy-duty mechanical tool racks.</p>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">On-Board Power Grid</span>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -10 }} className="clay-panel p-10 bg-amber-50/50">
              <div className="w-16 h-16 bg-white flex items-center justify-center text-amber-600 mb-8 rounded-full shadow-clay-inset">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-clay-dark mb-4">Dealer Telemetry Tablets</h4>
              <p className="text-clay-muted font-inter leading-relaxed mb-6">Equipped with Autel Maxisys Elite scanners and OEM diagnostic platforms (Porsche PIWIS, BMW ISTA, Mercedes Xentry).</p>
              <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Live ECU Interfacing</span>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -10 }} className="clay-panel p-10 bg-green-50/50">
              <div className="w-16 h-16 bg-white flex items-center justify-center text-green-600 mb-8 rounded-full shadow-clay-inset">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-clay-dark mb-4">Driveway Safety Measures</h4>
              <p className="text-clay-muted font-inter leading-relaxed mb-6">Using low-profile floor jacks wrapped in custom soft rubber pads to prevent direct asphalt or brick driveway markings.</p>
              <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Zero Surface Damage</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Master Mechanics */}
      <section className="py-32 bg-white/40 border-y border-clay-border px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Master <span className="text-gradient-accent">Technicians</span>
            </h3>
            <p className="text-clay-muted text-xl max-w-xl mx-auto font-inter">
              Our technicians undergo continuous brand-specific factory training and hold advanced ASE credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team 1 */}
            <motion.div whileHover={{ scale: 1.02 }} className="clay-panel p-6">
              <img 
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600" 
                alt="Alexander Vance" 
                className="w-full h-[400px] object-cover rounded-3xl mb-6 shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-bold text-clay-dark">Alexander Vance</h4>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full shadow-inner">ASE Master</span>
              </div>
              <p className="text-sm text-clay-muted font-inter mb-4">15 Years Experience &bull; Porsche Specialist</p>
              <p className="text-clay-muted font-inter leading-relaxed">Specializes in complex PDK transmission repair, CAN-Bus electronics mapping, and European engine diagnostics.</p>
            </motion.div>

            {/* Team 2 */}
            <motion.div whileHover={{ scale: 1.02 }} className="clay-panel p-6">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" 
                alt="Sarah Chen" 
                className="w-full h-[400px] object-cover rounded-3xl mb-6 shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-bold text-clay-dark">Sarah Chen</h4>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full shadow-inner">EV Expert</span>
              </div>
              <p className="text-sm text-clay-muted font-inter mb-4">10 Years Experience &bull; EV/Hybrid Systems</p>
              <p className="text-clay-muted font-inter leading-relaxed">Expert in luxury EV platforms including Tesla, Audi e-tron, Porsche Taycan high-voltage batteries, and electric cooling modules.</p>
            </motion.div>

            {/* Team 3 */}
            <motion.div whileHover={{ scale: 1.02 }} className="clay-panel p-6">
              <img 
                src="https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=600" 
                alt="Marcus Miller" 
                className="w-full h-[400px] object-cover rounded-3xl mb-6 shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-2xl font-bold text-clay-dark">Marcus Miller</h4>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full shadow-inner">Chassis Master</span>
              </div>
              <p className="text-sm text-clay-muted font-inter mb-4">12 Years Experience &bull; AMG/M-Series Specialist</p>
              <p className="text-clay-muted font-inter leading-relaxed">Focuses on adaptive suspension calibrations, active anti-roll system diagnostics, and precision high-performance braking overhauls.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Credentials */}
      <section className="py-32 px-6 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto clay-panel rounded-full flex items-center justify-center mb-10 shadow-clay-inset">
            <LottieLoader data-lottie-url="shield" animationUrl="https://lottie.host/68903e1e-28f0-4663-8a3c-b1bb363a032d/shield.json" className="w-12 h-12" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-clay-dark uppercase tracking-tight mb-8">
            Licensed, Bonded & <span className="text-gradient-accent">Insured</span>
          </h2>
          <p className="text-clay-muted text-xl max-w-2xl mx-auto mb-16 font-inter">
            Your piece of mind is our absolute priority. We operate with complete professional liability coverage to protect your investments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="clay-panel p-8 bg-gradient-to-br from-white to-clay-base border-2 border-white">
              <h4 className="text-clay-dark font-black text-xl uppercase mb-4 text-blue-600">$2M Liability Cover</h4>
              <p className="text-clay-muted font-inter leading-relaxed font-medium">Full comprehensive damage protection covering all vehicle classes, including exotics.</p>
            </div>
            <div className="clay-panel p-8 bg-gradient-to-br from-white to-clay-base border-2 border-white">
              <h4 className="text-clay-dark font-black text-xl uppercase mb-4 text-green-600">EPA Section 609</h4>
              <p className="text-clay-muted font-inter leading-relaxed font-medium">Certified refrigerant handling to ensure strict environmental compliance and fluid safety.</p>
            </div>
            <div className="clay-panel p-8 bg-gradient-to-br from-white to-clay-base border-2 border-white">
              <h4 className="text-clay-dark font-black text-xl uppercase mb-4 text-orange-600">12-Month Warranty</h4>
              <p className="text-clay-muted font-inter leading-relaxed font-medium">Standard backed service warranty on all diagnostics, parts, and execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Core Values */}
      <section className="py-32 bg-white/40 border-t border-clay-border px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Core <span className="text-gradient-accent">Tenets</span>
            </h3>
            <p className="text-clay-muted text-xl max-w-xl mx-auto font-inter">
              Our commitments define the standard of every mobile workshop visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div whileHover={{ y: -10 }} className="text-center p-12 clay-panel bg-white/60">
              <div className="w-20 h-20 mx-auto clay-panel bg-blue-50/50 rounded-full flex items-center justify-center mb-8 shadow-inner text-4xl font-black text-blue-600">01</div>
              <h4 className="text-2xl font-black text-clay-dark uppercase mb-4">Precision</h4>
              <p className="text-clay-muted font-inter leading-relaxed font-semibold">We follow factory torque specifications, use OEM-specified fluids, and calibrate sensors with micro-precision diagnostics.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center p-12 clay-panel bg-white/60">
              <div className="w-20 h-20 mx-auto clay-panel bg-orange-50/50 rounded-full flex items-center justify-center mb-8 shadow-inner text-4xl font-black text-orange-600">02</div>
              <h4 className="text-2xl font-black text-clay-dark uppercase mb-4">Convenience</h4>
              <p className="text-clay-muted font-inter leading-relaxed font-semibold">We bring the workshop to you. Avoid dealer queues and towing logistics; remain productive in your office or comfort of your home.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center p-12 clay-panel bg-white/60">
              <div className="w-20 h-20 mx-auto clay-panel bg-green-50/50 rounded-full flex items-center justify-center mb-8 shadow-inner text-4xl font-black text-green-600">03</div>
              <h4 className="text-2xl font-black text-clay-dark uppercase mb-4">Transparency</h4>
              <p className="text-clay-muted font-inter leading-relaxed font-semibold">We provide digital inspection logs, real-time diagnostic printouts, and itemized billing statements with no hidden surcharges.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

