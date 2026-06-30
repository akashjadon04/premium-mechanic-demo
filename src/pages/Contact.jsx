import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import LottieLoader from '../components/LottieLoader';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, rotateX: -20, z: -50 },
  visible: { opacity: 1, y: 0, rotateX: 0, z: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
};

const STEPS = [
  { id: 1, label: 'Vehicle' },
  { id: 2, label: 'Location' },
  { id: 3, label: 'Schedule' },
  { id: 4, label: 'Contact' },
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    year: '', make: '', model: '',
    address: '', zip: '',
    date: '', time: '',
    name: '', phone: '', email: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState(null);
  
  const containerRef = useRef(null);
  
  // Scrolling Map Pin
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const pinY = useTransform(scrollYProgress, [0, 1], ["0vh", "350vh"]);
  const pinRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  // Hero Parallax
  const { scrollYProgress: heroScroll } = useScroll();
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => { if (step < 4) setStep(step + 1); };
  const handlePrevStep = () => { if (step > 1) setStep(step - 1); };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const handleZipCheck = (e) => {
    e.preventDefault();
    const clean = zipInput.trim();
    if (clean.length === 5 && (clean.startsWith('9') || clean.startsWith('1') || clean.startsWith('3'))) {
      setZipResult('active');
    } else {
      setZipResult('inactive');
    }
  };

  const inputClass = 'clay-input border-2 border-white/50 bg-white shadow-[inset_5px_5px_10px_#e6e6e6,inset_-5px_-5px_10px_#ffffff] focus:shadow-[inset_2px_2px_5px_#e6e6e6,inset_-2px_-2px_5px_#ffffff] transition-all';

  return (
    <div ref={containerRef} className="bg-clay-base text-clay-dark min-h-screen font-sans antialiased selection:bg-blue-500 selection:text-white relative overflow-hidden">

      {/* Floating Map Pin */}
      <motion.div 
        style={{ top: pinY, rotate: pinRotate }}
        className="absolute right-[8%] z-50 pointer-events-none hidden xl:flex flex-col items-center justify-center w-24 h-24"
      >
        <div className="w-16 h-16 bg-red-500 rounded-full shadow-[0_20px_40px_rgba(239,68,68,0.5)] flex items-center justify-center border-4 border-white mb-2 relative">
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-50 z-0" />
        </div>
        <div className="w-4 h-4 bg-red-600/30 rounded-full blur-[2px]" />
      </motion.div>

      {/* ─────────────────────────────────────
          1. HERO
      ───────────────────────────────────── */}
      <section className="h-[65vh] flex flex-col items-center justify-center text-center px-6 relative z-10 overflow-hidden shadow-2xl mb-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2500" 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full mb-10 border border-white/20 shadow-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100 font-inter">
              Active Support Channels
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white uppercase tracking-tight mb-8 leading-[1] drop-shadow-2xl">
            Connect With <br />
            <span className="text-blue-500 drop-shadow-lg">The Workshop</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-inter mb-10 font-medium">
            Schedule an appointment, verify local coverage coordinates, or connect directly with our emergency dispatch desk.
          </p>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────
          2. BOOKING FORM
      ───────────────────────────────────── */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto bg-white shadow-[10px_10px_20px_#d1d9e6,_-10px_-10px_20px_#ffffff] rounded-full flex items-center justify-center mb-6 border-2 border-white">
              <LottieLoader data-lottie-url="scheduler" animationUrl="https://lottie.host/29e160be-090c-4ec7-b89a-4c28f3258836/calendar.json" className="w-10 h-10" />
            </div>
            <h2 className="text-5xl font-black text-clay-dark uppercase tracking-tight mb-4">
              Book an <span className="text-gradient-accent">Appointment</span>
            </h2>
            <p className="text-clay-muted text-lg font-inter">
              Complete the intake fields below to request a concierge diagnostic callout.
            </p>
          </div>

          <div className="clay-panel p-10 lg:p-16 border-[4px] border-white shadow-[30px_30px_60px_#d1d9e6,_-30px_-30px_60px_#ffffff] rounded-[3rem] bg-gradient-to-br from-white to-blue-50/30">
            {bookingSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 mx-auto bg-green-50 shadow-inner border-2 border-green-200 rounded-full flex items-center justify-center mb-8">
                  <LottieLoader data-lottie-url="success" animationUrl="https://lottie.host/b00d6efc-974a-4e2a-8742-df21f7c16cd6/success.json" className="w-12 h-12" />
                </div>
                <h4 className="text-3xl font-black text-clay-dark uppercase tracking-tight mb-4">
                  Request Successfully Logged
                </h4>
                <p className="text-clay-muted text-lg max-w-md mx-auto font-inter leading-relaxed font-medium">
                  Your appointment reservation has been submitted. A service manager will contact you in approximately 10 minutes to verify details.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleBookingSubmit}>
                {/* Step Indicators */}
                <div className="flex justify-between items-center mb-16 relative">
                  <div className="absolute top-6 left-0 right-0 h-[4px] bg-blue-100 shadow-inner z-0 mx-12 rounded-full" />
                  {STEPS.map((s) => (
                    <div key={s.id} className="flex flex-col items-center gap-3 z-10">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black shadow-lg transition-colors border-2 ${
                        step > s.id 
                          ? 'bg-blue-500 text-white border-blue-500' 
                          : step === s.id 
                            ? 'bg-white text-blue-600 border-blue-600 ring-4 ring-blue-100' 
                            : 'bg-white text-gray-400 border-gray-200 shadow-inner'
                      }`}>
                        {step > s.id ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : s.id}
                      </div>
                      <span className={`text-xs font-black uppercase tracking-wider font-inter ${step >= s.id ? 'text-blue-600' : 'text-gray-400'}`}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step 1: Vehicle */}
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-6"
                    >
                      <h5 className="text-xl font-black text-clay-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">1</span> 
                        Vehicle Specifications
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Model Year</label>
                          <input type="text" name="year" value={formData.year} onChange={handleInputChange} placeholder="e.g. 2023" className={inputClass} required />
                        </div>
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Make</label>
                          <input type="text" name="make" value={formData.make} onChange={handleInputChange} placeholder="e.g. Porsche" className={inputClass} required />
                        </div>
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Model</label>
                          <input type="text" name="model" value={formData.model} onChange={handleInputChange} placeholder="e.g. 911 Carrera S" className={inputClass} required />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Location */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-6"
                    >
                      <h5 className="text-xl font-black text-clay-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">2</span>
                        Service Location
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-3">
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Street Address</label>
                          <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="e.g. 4500 Wilshire Blvd" className={inputClass} required />
                        </div>
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">ZIP Code</label>
                          <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} placeholder="90210" className={inputClass} required />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Schedule */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-6"
                    >
                      <h5 className="text-xl font-black text-clay-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">3</span>
                        Schedule Preference
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Preferred Date</label>
                          <input type="date" name="date" value={formData.date} onChange={handleInputChange} className={inputClass} required />
                        </div>
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Time Window</label>
                          <select name="time" value={formData.time} onChange={handleInputChange} className={inputClass} required>
                            <option value="">Select Time Window</option>
                            <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                            <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                            <option value="evening">Late Afternoon (4:00 PM – 7:00 PM)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Contact */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-6"
                    >
                      <h5 className="text-xl font-black text-clay-dark uppercase tracking-tight mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">4</span>
                        Contact Details
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Full Name</label>
                          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. Richard Hammond" className={inputClass} required />
                        </div>
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Phone Number</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(310) 555-0122" className={inputClass} required />
                        </div>
                        <div>
                          <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Email Address</label>
                          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="richard@topgear.com" className={inputClass} required />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nav Buttons */}
                <div className="flex justify-between items-center pt-10 mt-10 border-t border-blue-100">
                  {step > 1 ? (
                    <button type="button" onClick={handlePrevStep} className="inline-block bg-white text-gray-500 hover:text-blue-600 hover:bg-blue-50 font-black px-8 py-4 rounded-full transition-colors uppercase text-sm border-2 border-gray-200">
                      ← Back
                    </button>
                  ) : <div />}

                  {step < 4 ? (
                    <button type="button" onClick={handleNextStep} className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all uppercase text-sm transform hover:-translate-y-1">
                      Next Step →
                    </button>
                  ) : (
                    <button type="submit" className="inline-block bg-green-500 hover:bg-green-400 text-white font-black px-12 py-4 rounded-full shadow-[0_10px_20px_rgba(34,197,94,0.3)] transition-all uppercase text-sm transform hover:-translate-y-1">
                      Submit Booking
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          3. EMERGENCY DISPATCH
      ───────────────────────────────────── */}
      <section className="py-28 bg-gradient-to-r from-orange-50 via-white to-orange-50 border-y border-clay-border px-6 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-5 py-2.5 rounded-full mb-10 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
              <span className="text-xs font-black uppercase tracking-widest text-orange-600 font-inter">
                24/7 Roadside Assistance
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6 drop-shadow-sm">
              Roadside Breakdown <span className="text-orange-500">Hotline</span>
            </h2>
            <p className="text-clay-muted text-xl mb-12 max-w-xl mx-auto font-inter leading-relaxed font-medium">
              Urgent diagnostic stabilization or tow redirection. Connect immediately with our active dispatcher.
            </p>
            <a
              href="tel:1-800-555-0199"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-black text-xl px-12 py-6 rounded-full shadow-[0_15px_40px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-2 uppercase"
            >
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Call: (800) 555-0199
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          4. COVERAGE MAP / ZIP CHECKER
      ───────────────────────────────────── */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="clay-panel bg-white border border-blue-100 inline-block px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs font-inter">Coverage Radius</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Service Coverage <span className="text-gradient-accent">Regions</span>
            </h2>
            <p className="text-clay-muted text-lg leading-relaxed mb-10 font-inter font-medium">
              We operate mobile workshop laboratory vans within a 35-mile radius of Metro HQ, ensuring rapid diagnostic response times.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Downtown Core', 'Western Tech Bay', 'Northside Hills', 'Southshore Suburbs'].map((zone) => (
                <div key={zone} className="clay-panel bg-white border-2 border-white/50 p-4 rounded-2xl flex items-center gap-3 transform hover:scale-105 transition-transform shadow-sm">
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex-shrink-0" />
                  <span className="font-black text-clay-dark text-sm font-inter uppercase">{zone}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="perspective-[1000px]"
          >
            <div className="clay-panel p-10 bg-gradient-to-br from-white to-gray-50 border-[4px] border-white shadow-[20px_20px_40px_#d1d9e6,_-20px_-20px_40px_#ffffff] rounded-[3rem] transform-gpu">
              <h4 className="text-2xl font-black text-clay-dark uppercase tracking-tight mb-2">ZIP Code Checker</h4>
              <p className="text-clay-muted text-sm mb-8 font-inter font-medium">
                Enter your 5-digit postal code to check if our sprinter labs are active in your area.
              </p>
              <form onSubmit={handleZipCheck} className="flex gap-4">
                <input
                  type="text"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                  placeholder="e.g. 90210"
                  maxLength={5}
                  className={inputClass}
                  style={{ flexGrow: 1 }}
                  required
                />
                <button type="submit" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-xl shadow-lg transition-colors uppercase text-sm">
                  Verify
                </button>
              </form>

              <AnimatePresence mode="wait">
                {zipResult === 'active' && (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mt-6 bg-green-50 border-2 border-green-200 p-4 rounded-2xl flex items-center gap-4 shadow-inner"
                  >
                    <span className="w-4 h-4 bg-green-500 rounded-full animate-ping flex-shrink-0" />
                    <span className="text-sm font-black text-green-700 font-inter uppercase tracking-wider">
                      Service Available · Rapid Dispatch Active
                    </span>
                  </motion.div>
                )}
                {zipResult === 'inactive' && (
                  <motion.div
                    key="inactive"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mt-6 bg-orange-50 border-2 border-orange-200 p-4 rounded-2xl flex items-center gap-4 shadow-inner"
                  >
                    <span className="w-4 h-4 bg-orange-500 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                    <span className="text-sm font-black text-orange-700 font-inter uppercase tracking-wider">
                      Outside Standard Radius · Inquire for Special Quote
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          5. BUSINESS OFFICES
      ───────────────────────────────────── */}
      <section className="py-32 bg-white/40 border-y border-clay-border px-6 relative z-10 perspective-[2000px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Business <span className="text-gradient-accent">Offices</span>
            </h2>
            <p className="text-clay-muted text-xl max-w-xl mx-auto font-inter">
              Connect with our administrative departments for invoicing or scheduling changes.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { title: 'Metro HQ', detail: '4500 Wilshire Blvd\nLos Angeles, CA 90210', icon: '📍', color: 'bg-blue-50 text-blue-600 border-blue-200' },
              { title: 'Support Desk', detail: 'support@yourmechanic.com\n(800) 555-0199', icon: '📞', color: 'bg-orange-50 text-orange-500 border-orange-200' },
              { title: 'Fleet Proposals', detail: 'fleets@yourmechanic.com\n(800) 555-0188', icon: '🚛', color: 'bg-green-50 text-green-600 border-green-200' },
            ].map((office, i) => (
              <motion.div
                key={office.title}
                variants={cardVariant}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="clay-panel bg-white border-2 border-white/50 p-10 transform-gpu shadow-[15px_15px_30px_#d1d9e6,_-15px_-15px_30px_#ffffff]"
              >
                <div className={`w-20 h-20 shadow-inner border-2 rounded-full flex items-center justify-center text-4xl mb-8 ${office.color}`}>
                  {office.icon}
                </div>
                <h4 className="font-black text-clay-dark uppercase tracking-tight text-2xl mb-4">{office.title}</h4>
                <p className="text-clay-muted font-inter leading-relaxed whitespace-pre-line font-medium text-lg">{office.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          6. WORKSHOP GALLERY / SOCIAL FEED
      ───────────────────────────────────── */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-6">
              Workshop <span className="text-gradient-accent">Broadcasts</span>
            </h3>
            <p className="text-clay-muted text-xl max-w-xl mx-auto font-inter">
              Follow our daily mechanics diagnostic cases and exotic vehicle tune-ups.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { src: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200', alt: 'Luxury Porsche 911 Detail' },
              { src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200', alt: 'Black Mercedes Reflection' },
              { src: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=1200', alt: 'Diagnostics Screen' },
              { src: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=1200', alt: 'Brake Calipers Assembly' },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className="clay-panel p-2 rounded-[2rem] aspect-square overflow-hidden bg-white shadow-lg border-2 border-white/50 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-[1.6rem] transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          7. CORPORATE INQUIRY FORM
      ───────────────────────────────────── */}
      <section className="py-32 bg-white/40 border-t border-clay-border px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-orange-100 border border-orange-200 inline-block px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <span className="text-orange-600 font-black uppercase tracking-widest text-xs font-inter">Corporate</span>
            </div>
            <h2 className="text-5xl font-black text-clay-dark uppercase tracking-tight mb-4">
              Fleet & Vendor <span className="text-gradient-orange">Inquiries</span>
            </h2>
            <p className="text-clay-muted text-lg max-w-xl mx-auto font-inter">
              Tell us about your fleet and we'll build a custom maintenance subscription tailored to your needs.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="clay-panel bg-white p-10 lg:p-16 border-[4px] border-white shadow-[20px_20px_40px_#d1d9e6,_-20px_-20px_40px_#ffffff] rounded-[3rem]"
          >
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Fleet inquiry logged. We will contact you within 24 hours.'); }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Company Name</label>
                  <input type="text" placeholder="e.g. Gotham Transport" className={inputClass} required />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Estimated Fleet Size</label>
                  <input type="number" placeholder="e.g. 12" className={inputClass} required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Contact Name</label>
                  <input type="text" placeholder="e.g. James Gordon" className={inputClass} required />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Business Email</label>
                  <input type="email" placeholder="james@gothamtransport.com" className={inputClass} required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-clay-muted mb-3 font-inter">Message Description</label>
                <textarea
                  rows={5}
                  placeholder="Outline your fleet logistics and scheduling requirements..."
                  className={`${inputClass} resize-none w-full`}
                  required
                />
              </div>
              <button type="submit" className="inline-block w-full bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-6 rounded-2xl shadow-xl transition-all uppercase text-base transform hover:-translate-y-1">
                Submit Corporate Proposal
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
