import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import LottieLoader from '../components/LottieLoader';

export default function Pricing() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [vehicleClass, setVehicleClass] = useState('sedan');
  const [serviceTier, setServiceTier] = useState('diagnostics');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Cost calculator helper
  const calculateEstimate = () => {
    let base = 0;
    if (serviceTier === 'diagnostics') base = 149;
    else if (serviceTier === 'maintenance') base = 299;
    else if (serviceTier === 'brakes') base = 499;

    let multiplier = 1.0;
    if (vehicleClass === 'luxury') multiplier = 1.25;
    else if (vehicleClass === 'exotic') multiplier = 1.5;

    return Math.round(base * multiplier);
  };

  const pricingFaqs = [
    {
      q: "Are replacement parts included in the package prices?",
      a: "Our baseline package prices (such as Elite Inspection or Signature Maintenance) cover standard labor and specific lubricants or filters. For physical part replacements like brake rotors, calipers, or alternators, parts are quoted separately and itemized upfront based on OEM catalog prices."
    },
    {
      q: "What payment channels do you accept on-site?",
      a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), Apple Pay, Google Pay, corporate ACH transfers, and secure electronic payment links sent via email alongside your digital invoice."
    },
    {
      q: "Do you charge an additional dispatch or travel fee?",
      a: "No. For all standard pre-booked appointments within our 35-mile metropolitan service radius, dispatch is fully included in the service cost. Only emergency roadside requests dispatched outside business hours incur a baseline dispatch fee."
    },
    {
      q: "How do you handle supplementary repairs found during service?",
      a: "If our technician discovers additional concerns during service, they build a high-definition video inspection log and upload an itemized digital work order. We do not proceed with any extra work until you review and authorize it digitally from your phone."
    }
  ];

  return (
    <div className="bg-clay-base text-clay-dark min-h-screen font-sans antialiased selection:bg-clay-accent selection:text-white relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-clay-accent/10 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-clay-orange/10 rounded-full mix-blend-multiply filter blur-[100px] pointer-events-none animate-blob animation-delay-2000" />

      {/* 1. Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center border-b border-clay-border text-center px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 clay-panel px-4 py-2 rounded-full mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-clay-accent animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-clay-accent">
              100% Itemized Transparency
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-clay-dark uppercase tracking-tight mb-8">
            Transparent <br />
            <span className="text-gradient-accent">Premium Pricing</span>
          </h1>
          <p className="text-xl text-clay-muted max-w-2xl mx-auto leading-relaxed font-inter mb-10">
            No hidden surcharges. Digital proposals detailing every component and fluid specification before any mechanical service begins.
          </p>
          <div className="w-16 h-[4px] bg-clay-accent mx-auto rounded-full" />
        </motion.div>
      </section>

      {/* 2. Packages */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Service <span className="text-gradient-accent">Packages</span>
            </h3>
            <p className="text-clay-muted text-xl max-w-2xl mx-auto font-inter">
              Choose the level of diagnostic investigation or routine maintenance matching your vehicle's specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {/* Package 1 */}
            <motion.div whileHover={{ y: -10 }} className="clay-panel p-10 flex flex-col h-full">
              <div className="flex-grow">
                <div className="w-20 h-20 bg-clay-base shadow-clay-inset rounded-full flex items-center justify-center text-clay-accent mb-8">
                  <LottieLoader data-lottie-url="diagnostics" animationUrl="https://lottie.host/8cb2142e-1317-43f1-bd29-a1789c669146/z3X65K3kKx.json" className="w-10 h-10" />
                </div>
                <span className="text-xs text-clay-accent font-bold uppercase tracking-widest block mb-4">Essential</span>
                <h4 className="text-3xl font-black text-clay-dark uppercase mb-6">Elite Inspection</h4>
                <div className="flex items-baseline mb-8 pb-8 border-b border-clay-base shadow-clay-inset">
                  <span className="text-6xl font-black text-clay-dark">$149</span>
                  <span className="text-clay-muted font-bold ml-2">/ event</span>
                </div>
                <p className="text-clay-muted font-inter leading-relaxed mb-8">
                  Perfect for seasonal health audits or diagnosing specific diagnostic error lights on-site.
                </p>
                <ul className="space-y-4 text-clay-dark font-inter mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-accent font-bold text-xs">&check;</span>
                    Full OBD-II ECU System Scan
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-accent font-bold text-xs">&check;</span>
                    Battery & Alternator Diode Check
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-accent font-bold text-xs">&check;</span>
                    Digital Inspection Health Report
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="clay-btn w-full text-center">
                Book Inspection
              </Link>
            </motion.div>

            {/* Package 2 */}
            <motion.div whileHover={{ y: -10 }} className="clay-panel border-4 border-clay-orange p-10 flex flex-col h-full relative">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-clay-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-clay-convex">
                Popular Choice
              </div>
              <div className="flex-grow">
                <div className="w-20 h-20 bg-clay-base shadow-clay-inset rounded-full flex items-center justify-center text-clay-orange mb-8">
                  <LottieLoader data-lottie-url="maintenance" animationUrl="https://lottie.host/17b9b736-22c6-43d9-95e2-6323cf10287d/Vkv2y53M9H.json" className="w-10 h-10" />
                </div>
                <span className="text-xs text-clay-orange font-bold uppercase tracking-widest block mb-4">Comprehensive</span>
                <h4 className="text-3xl font-black text-clay-dark uppercase mb-6">Signature Upkeep</h4>
                <div className="flex items-baseline mb-8 pb-8 border-b border-clay-base shadow-clay-inset">
                  <span className="text-6xl font-black text-clay-dark">$299</span>
                  <span className="text-clay-muted font-bold ml-2">/ event</span>
                </div>
                <p className="text-clay-muted font-inter leading-relaxed mb-8">
                  Complete synthetic oil renewal, new micro-filters, and comprehensive fluid level stabilization.
                </p>
                <ul className="space-y-4 text-clay-dark font-inter mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-orange font-bold text-xs">&check;</span>
                    All features in Elite Inspection
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-orange font-bold text-xs">&check;</span>
                    Synthetic Motor Oil (Liqui Moly / OEM)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-orange font-bold text-xs">&check;</span>
                    Cabin Air Filter Replacement
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-orange font-bold text-xs">&check;</span>
                    Brake Fluid Boiling Threshold Check
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="clay-btn w-full text-center bg-clay-base text-clay-orange">
                Book Signature Care
              </Link>
            </motion.div>

            {/* Package 3 */}
            <motion.div whileHover={{ y: -10 }} className="clay-panel p-10 flex flex-col h-full">
              <div className="flex-grow">
                <div className="w-20 h-20 bg-clay-base shadow-clay-inset rounded-full flex items-center justify-center text-clay-accent mb-8">
                  <LottieLoader data-lottie-url="brakes" animationUrl="https://lottie.host/29e160be-090c-4ec7-b89a-4c28f3258836/calendar.json" className="w-10 h-10" />
                </div>
                <span className="text-xs text-clay-accent font-bold uppercase tracking-widest block mb-4">High-End</span>
                <h4 className="text-3xl font-black text-clay-dark uppercase mb-6">Premier Mechanical</h4>
                <div className="flex items-baseline mb-8 pb-8 border-b border-clay-base shadow-clay-inset">
                  <span className="text-4xl font-black text-clay-dark">Quote Based</span>
                </div>
                <p className="text-clay-muted font-inter leading-relaxed mb-8">
                  Advanced brake replacements, specialized suspension tuning, spark plugs, and modular electronic coding.
                </p>
                <ul className="space-y-4 text-clay-dark font-inter mb-10">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-accent font-bold text-xs">&check;</span>
                    OEM Component Replacements
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-accent font-bold text-xs">&check;</span>
                    Pneumatic System Recalibrations
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-accent font-bold text-xs">&check;</span>
                    Live Diagnostics Scan Post-Repair
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="clay-btn w-full text-center">
                Request Custom Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Estimated Cost Calculator */}
      <section className="py-32 bg-white/40 border-y border-clay-border px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Pricing <span className="text-gradient-orange">Estimator</span>
            </h3>
            <p className="text-clay-muted text-xl font-inter">
              Receive a baseline projection of repair cost before dispatching our mobile lab units.
            </p>
          </div>

          <div className="clay-panel p-10 lg:p-16 relative overflow-hidden">
            {/* Selector 1 */}
            <div className="mb-10">
              <label className="block text-sm font-bold uppercase tracking-widest text-clay-dark mb-6">
                1. Select Vehicle Classification
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                  onClick={() => setVehicleClass('sedan')}
                  className={`clay-panel py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    vehicleClass === 'sedan'
                      ? 'bg-clay-accent text-white shadow-clay-convex'
                      : 'text-clay-dark hover:-translate-y-1'
                  }`}
                >
                  Sedan / Hatchback
                </button>
                <button
                  onClick={() => setVehicleClass('luxury')}
                  className={`clay-panel py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    vehicleClass === 'luxury'
                      ? 'bg-clay-accent text-white shadow-clay-convex'
                      : 'text-clay-dark hover:-translate-y-1'
                  }`}
                >
                  Premium SUV / Truck
                </button>
                <button
                  onClick={() => setVehicleClass('exotic')}
                  className={`clay-panel py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    vehicleClass === 'exotic'
                      ? 'bg-clay-accent text-white shadow-clay-convex'
                      : 'text-clay-dark hover:-translate-y-1'
                  }`}
                >
                  Sports / Exotic
                </button>
              </div>
            </div>

            {/* Selector 2 */}
            <div className="mb-12">
              <label className="block text-sm font-bold uppercase tracking-widest text-clay-dark mb-6">
                2. Select Core Service Tier
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button
                  onClick={() => setServiceTier('diagnostics')}
                  className={`clay-panel py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    serviceTier === 'diagnostics'
                      ? 'bg-clay-orange text-white shadow-clay-convex'
                      : 'text-clay-dark hover:-translate-y-1'
                  }`}
                >
                  Elite Inspection
                </button>
                <button
                  onClick={() => setServiceTier('maintenance')}
                  className={`clay-panel py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    serviceTier === 'maintenance'
                      ? 'bg-clay-orange text-white shadow-clay-convex'
                      : 'text-clay-dark hover:-translate-y-1'
                  }`}
                >
                  Signature Upkeep
                </button>
                <button
                  onClick={() => setServiceTier('brakes')}
                  className={`clay-panel py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    serviceTier === 'brakes'
                      ? 'bg-clay-orange text-white shadow-clay-convex'
                      : 'text-clay-dark hover:-translate-y-1'
                  }`}
                >
                  Brakes / Suspension
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8 bg-clay-base shadow-clay-inset rounded-[2rem] p-8">
              <div>
                <span className="text-sm text-clay-muted uppercase font-bold block mb-2">Projected Baseline Estimate</span>
                <span className="text-6xl font-black text-clay-dark">${calculateEstimate()}</span>
                <span className="text-xs text-clay-muted block mt-4 font-inter">*Excludes replacement components. Diagnostic scans included.</span>
              </div>
              <Link
                to="/contact"
                className="clay-btn bg-clay-base text-clay-accent px-10 py-5 text-lg"
              >
                Confirm & Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Comparative <span className="text-gradient-accent">Matrix</span>
            </h3>
            <p className="text-clay-muted text-xl max-w-xl mx-auto font-inter">
              Compare individual features and diagnostic validations across all three tiers.
            </p>
          </div>

          <div className="clay-panel overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-clay-base shadow-clay-inset">
                    <th className="p-6 text-sm font-bold uppercase tracking-widest text-clay-dark border-b-2 border-clay-border">Service Parameter</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-widest text-clay-accent text-center border-b-2 border-clay-border">Elite Inspection</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-widest text-clay-orange text-center border-b-2 border-clay-border">Signature Upkeep</th>
                    <th className="p-6 text-sm font-bold uppercase tracking-widest text-clay-accent text-center border-b-2 border-clay-border">Premier Mechanical</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-clay-border font-inter text-clay-dark">
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="p-6 font-bold uppercase tracking-wider text-sm">Full OBD-II Systems scan</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                    <td className="p-6 text-center text-clay-orange font-bold text-xl">&bull;</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="p-6 font-bold uppercase tracking-wider text-sm">Video diagnostic inspection log</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                    <td className="p-6 text-center text-clay-orange font-bold text-xl">&bull;</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="p-6 font-bold uppercase tracking-wider text-sm">Fluid baseline topping</td>
                    <td className="p-6 text-center text-clay-muted">-</td>
                    <td className="p-6 text-center text-clay-orange font-bold text-xl">&bull;</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="p-6 font-bold uppercase tracking-wider text-sm">Synthetic oil & filter renewal</td>
                    <td className="p-6 text-center text-clay-muted">-</td>
                    <td className="p-6 text-center text-clay-orange font-bold text-xl">&bull;</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="p-6 font-bold uppercase tracking-wider text-sm">EPB / BMS module resetting</td>
                    <td className="p-6 text-center text-clay-muted">-</td>
                    <td className="p-6 text-center text-clay-muted">-</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="p-6 font-bold uppercase tracking-wider text-sm">Physical mechanical updates</td>
                    <td className="p-6 text-center text-clay-muted">-</td>
                    <td className="p-6 text-center text-clay-muted">-</td>
                    <td className="p-6 text-center text-clay-accent font-bold text-xl">&bull;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Enterprise & Fleet Rates */}
      <section className="py-32 bg-white/40 border-y border-clay-border px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="clay-panel inline-block px-4 py-2 rounded-full mb-6">
              <span className="text-clay-orange font-bold uppercase tracking-widest text-xs">Corporate Accounts</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Business Fleet Subscriptions
            </h2>
            <p className="text-clay-muted text-lg leading-relaxed mb-6 font-inter">
              Keep your corporate transport or customer transport fleet at peak reliability. We offer monthly custom subscription agreements covering all scheduled maintenance, diagnostic updates, and priority roadside assistance with discounted labor rates.
            </p>
            <ul className="space-y-4 text-clay-dark font-inter mb-10">
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-orange font-bold">&check;</div>
                Guaranteed 24-Hour Service Call Response
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-orange font-bold">&check;</div>
                Itemized Monthly Administrative Invoicing
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-clay-base shadow-clay-inset flex items-center justify-center text-clay-orange font-bold">&check;</div>
                On-Site Multi-Vehicle Scheduling Blocks
              </li>
            </ul>
            <Link to="/contact" className="clay-btn inline-block bg-clay-base text-clay-orange shadow-clay-convex">
              Inquire Corporate Fleet
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="clay-panel p-4 rounded-[3rem] w-full max-w-lg transform hover:-translate-y-4 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" 
                alt="Corporate Luxury Transport Fleet" 
                className="w-full h-[500px] object-cover rounded-[2.5rem]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Guarantee & Warranty */}
      <section className="py-32 px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto clay-panel p-16 text-center"
        >
          <div className="w-24 h-24 mx-auto bg-clay-base shadow-clay-inset rounded-full flex items-center justify-center mb-8">
            <LottieLoader data-lottie-url="shield" animationUrl="https://lottie.host/68903e1e-28f0-4663-8a3c-b1bb363a032d/shield.json" className="w-12 h-12" />
          </div>
          <span className="text-clay-accent font-bold uppercase tracking-widest block mb-4">Official Guarantee</span>
          <h2 className="text-4xl lg:text-5xl font-black text-clay-dark uppercase tracking-tight mb-6">
            12-Month / 12,000-Mile Warranty
          </h2>
          <p className="text-clay-muted text-xl leading-relaxed max-w-3xl mx-auto font-inter">
            We operate with absolute confidence in our master-certified technicians and premium OEM component suppliers. All labor and parts are fully guaranteed to protect your vehicle from defects.
          </p>
        </motion.div>
      </section>

      {/* 7. Pricing FAQ */}
      <section className="py-32 bg-white/40 border-t border-clay-border px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Billing <span className="text-gradient-accent">Inquiries</span>
            </h3>
          </div>

          <div className="space-y-6">
            {pricingFaqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="clay-panel overflow-hidden"
                initial={false}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-6 font-bold text-xl text-clay-dark"
                >
                  <span className="uppercase tracking-tight pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-10 h-10 bg-clay-base shadow-clay-inset rounded-full flex items-center justify-center text-clay-accent">
                    {activeFaq === index ? (
                      <svg className="w-5 h-5 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 border-t border-clay-base shadow-clay-inset">
                        <p className="text-clay-muted text-lg leading-relaxed font-inter mt-6">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
