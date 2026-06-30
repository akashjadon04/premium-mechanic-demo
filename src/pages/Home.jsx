import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import LottieLoader from '../components/LottieLoader';
import RotatingText from '../components/RotatingText';
import ElectricBorder from '../components/ElectricBorder';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const carX = useTransform(scrollYProgress, [0, 1], ["-100vw", "100vw"]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do you service exotic and luxury European imports?",
      a: "Yes. Our master technicians are factory-trained and equipped with dealer-level diagnostic systems specifically calibrated for European marques, including Porsche, BMW, Mercedes-Benz, Audi, and exotic brands."
    },
    {
      q: "How does your mobile service pricing compare to standard dealerships?",
      a: "On average, our clients save 15% to 25% compared to franchise dealer service departments. We pass our lack of real estate overhead directly to you."
    },
    {
      q: "Will utilizing your mobile services void my new vehicle warranty?",
      a: "Absolutely not. Under the Magnuson-Moss Warranty Act, you are legally protected to have your vehicle serviced by any qualified independent facility."
    }
  ];

  return (
    <div className="bg-clay-base text-clay-dark min-h-screen font-sans antialiased relative overflow-hidden">
      
      {/* Vibrant Background Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[50rem] h-[50rem] bg-clay-green rounded-full filter blur-[120px] opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[45rem] h-[45rem] bg-clay-yellow rounded-full filter blur-[120px] opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-clay-orangeBg rounded-full filter blur-[120px] opacity-70 animate-blob animation-delay-4000 pointer-events-none" />

      {/* 1. Massive Image Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-6 overflow-hidden">
        {/* Full screen background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-porsche.jpg" 
            alt="Hero Mechanic Porsche" 
            className="w-full h-full object-cover"
          />
          {/* Vibrant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/80 via-[#2563EB]/40 to-[#0F172A]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center w-full max-w-6xl mx-auto flex flex-col items-center relative z-10 pt-20"
        >
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/40 px-8 py-3 rounded-full mb-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_15px_#facc15]" />
            <span className="text-sm font-bold uppercase tracking-widest text-white shadow-sm">
              Hyper-Premium Mobile Service
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tight mb-8 leading-[1.05] text-white">
            The Dealership, <br/>
            <RotatingText
              texts={['Reinvented', 'Mobilized', 'Perfected']}
              mainClassName="text-white inline-block px-4 bg-[#2563EB]/30 backdrop-blur-sm rounded-3xl"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </h1>

          <p className="text-white/90 text-lg lg:text-3xl mb-16 max-w-4xl leading-relaxed font-inter font-light drop-shadow-lg">
            We bring master-certified precision directly to your driveway. No waiting rooms, no transport logistics. Just absolute vehicular perfection.
          </p>

          <ElectricBorder color="#fef3c7" speed={1.5} chaos={0.15} borderRadius={999} className="rounded-full">
            <Link
              to="/contact"
              className="bg-white text-[#0F172A] hover:bg-yellow-400 hover:text-[#0F172A] font-black px-16 py-6 rounded-full uppercase tracking-widest text-xl w-full h-full block shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Book Priority Service
            </Link>
          </ElectricBorder>
        </motion.div>
      </section>

      {/* 2. Advanced Scroll Animation - The Moving Car */}
      <section ref={scrollRef} className="py-40 relative overflow-hidden z-10 bg-clay-base">
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-6xl font-black text-clay-dark uppercase tracking-tight mb-4">
              We Come To You
            </h2>
            <p className="text-clay-muted text-xl max-w-2xl mx-auto font-inter">
              Watch as our mobile lab approaches your location in real time.
            </p>
          </div>
        </div>
        
        {/* Moving Car Track */}
        <div className="relative h-72 w-full bg-clay-base shadow-clay-inset flex items-center overflow-hidden border-y-2 border-clay-border/50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAwJSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMiIgZmlsbD0iI2QxZDllNiIvPjwvc3ZnPg==')] bg-repeat-x opacity-40" style={{ backgroundPositionY: 'center' }} />
          
          <motion.div 
            style={{ x: carX }}
            className="absolute left-0 h-56 flex items-center"
          >
            {/* Real Transparent PNG 8k Hypercar */}
            <img 
              src="/supercar.png" 
              alt="Scrolling Supercar" 
              className="w-[450px] md:w-[600px] h-auto object-contain drop-shadow-[20px_20px_25px_rgba(0,0,0,0.4)] transform scale-x-[-1]"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Creative Services Highlights (Vibrant Colors) */}
      <section id="services-preview" className="py-24 px-6 z-10 relative bg-clay-base">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12 order-2 lg:order-1">
            <h3 className="text-5xl lg:text-7xl font-black text-clay-dark tracking-tight leading-none">
              Precision <br/><span className="text-gradient-accent">Engineering.</span>
            </h3>
            <p className="text-clay-muted text-xl font-inter leading-relaxed max-w-lg">
              We don't just fix cars; we optimize complex engineering marvels using telemetry data directly from your vehicle's ECU.
            </p>
            <div className="flex flex-col gap-6 relative pt-10 pb-20">
              {[
                { title: "Computerized Diagnostics", desc: "Deep ECU scans & fault logging", bg: "bg-[#dcfce7]", text: "text-green-700" },
                { title: "Performance Tuning", desc: "Suspension & brake overhauls", bg: "bg-[#fef3c7]", text: "text-amber-700" },
                { title: "Brake Systems Overhaul", desc: "Absolute stopping power calibration", bg: "bg-[#ffedd5]", text: "text-orange-700" },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 1.02 }} 
                  key={i} 
                  className={`clay-panel p-8 ${item.bg} border-4 border-white shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] rounded-[2rem] sticky`}
                  style={{ top: `${150 + i * 30}px`, zIndex: i }}
                >
                  <div className={`w-12 h-12 rounded-full bg-white shadow-sm mb-6 flex items-center justify-center font-black ${item.text}`}>{i+1}</div>
                  <h4 className={`font-black text-2xl mb-3 ${item.text}`}>{item.title}</h4>
                  <p className="text-lg font-inter text-clay-dark/80 font-semibold">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
             <div className="clay-panel p-4 rounded-[3rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700 bg-[#ffedd5] border-4 border-white">
              {/* Working high res image */}
              <img 
                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Engine diagnostic" 
                className="w-full h-[600px] object-cover rounded-[2.5rem] mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Electric CTA Section */}
      <section className="py-40 px-6 z-10 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          <ElectricBorder color="#FF5A09" speed={2} chaos={0.2} borderRadius={48} className="rounded-3xl p-1 md:p-2 shadow-2xl">
             <div className="clay-panel p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden bg-clay-base text-center border-4 border-white">
              <h2 className="text-5xl lg:text-7xl font-black text-clay-dark tracking-tight mb-8">
                Emergency Breakdown?
              </h2>
              <p className="text-clay-muted text-xl mb-12 max-w-2xl mx-auto font-inter">
                Our rapid-response units are equipped for immediate diagnostic lookup and roadside stabilization.
              </p>
              
              <a href="tel:1-800-555-0199" className="clay-btn bg-clay-orange text-white font-black px-12 py-6 uppercase tracking-widest text-lg shadow-[5px_5px_15px_rgba(255,90,9,0.3)] hover:shadow-[8px_8px_20px_rgba(255,90,9,0.4)] transition-all inline-flex items-center gap-4 hover:scale-105">
                <LottieLoader data-lottie-url="siren" animationUrl="https://lottie.host/17b9b736-22c6-43d9-95e2-6323cf10287d/Vkv2y53M9H.json" className="w-8 h-8 filter brightness-0 invert" />
                (800) 555-0199
              </a>
            </div>
          </ElectricBorder>
        </div>
      </section>

      {/* 5. Minimal FAQ with vibrant accents */}
      <section className="py-24 px-6 z-10 relative mb-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-5xl font-black text-clay-dark tracking-tight mb-12 text-center">
            Common Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="clay-panel p-8 cursor-pointer group bg-white border-2 border-clay-border/30 hover:border-clay-accent transition-colors duration-300" onClick={() => toggleFaq(index)}>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-xl text-clay-dark group-hover:text-clay-accent transition-colors">{faq.q}</h4>
                  <div className="w-10 h-10 flex-shrink-0 clay-btn flex items-center justify-center text-clay-accent shadow-clay-inset p-0 bg-clay-yellow border border-white">
                    <motion.svg 
                      animate={{ rotate: activeFaq === index ? 180 : 0 }} 
                      className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </div>
                </div>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-clay-dark/70 mt-6 font-inter leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
