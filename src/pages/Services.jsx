import React, { useRef } from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  const containerRef = useRef(null);
  
  // Tracing path animation based on overall scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Intro parallax
  const { scrollYProgress: introScroll } = useScroll();
  const introY = useTransform(introScroll, [0, 1], ["0%", "50%"]);
  const introOpacity = useTransform(introScroll, [0, 0.5], [1, 0]);

  const servicesList = [
    {
      title: "Computerized Diagnostics",
      desc: "Deep ECU scans, fault logging, modular reprogramming, and comprehensive system optimization using dealer-level proprietary software.",
      price: "$149 / scan",
      color: "text-green-600",
      bg: "bg-gradient-to-br from-[#dcfce7] to-white border-green-200"
    },
    {
      title: "Precision Maintenance",
      desc: "Mobilized synthetic oil updates, custom micro-filtrations, and comprehensive multi-system fluid evaluations right in your driveway.",
      price: "From $189",
      color: "text-amber-600",
      bg: "bg-gradient-to-br from-[#fef3c7] to-white border-amber-200"
    },
    {
      title: "Brake Systems Overhaul",
      desc: "High-performance pad replacements, rotor resurfacing, sensor line integrations, and absolute stopping power calibration.",
      price: "From $299 / axle",
      color: "text-orange-600",
      bg: "bg-gradient-to-br from-[#ffedd5] to-white border-orange-200"
    },
    {
      title: "Suspension & Tuning",
      desc: "Strut assemblies, adaptive damping system resets, and total geometry alignment to ensure a flawless ride quality.",
      price: "Custom Quote",
      color: "text-blue-600",
      bg: "bg-gradient-to-br from-[#dbeafe] to-white border-blue-200"
    }
  ];

  return (
    <div ref={containerRef} className="bg-clay-base text-clay-dark min-h-screen font-sans antialiased relative overflow-hidden">
      
      {/* Scroll Tracing SVG Path */}
      <div className="absolute left-[5%] md:left-[10%] top-0 bottom-0 w-[4px] z-0 hidden lg:block opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 1000">
          <motion.path 
            d="M 50 0 L 50 1000"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="10"
            style={{ pathLength: scrollYProgress }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Intro Section with 8K Parallax Garage */}
      <section className="h-[60vh] flex flex-col items-center justify-center px-6 relative z-10 text-center overflow-hidden border-b border-white/20 shadow-lg mb-20">
        <motion.div 
          style={{ y: introY, opacity: introOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2500" 
            alt="Luxury Garage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 text-white drop-shadow-xl">
            Our <span className="text-blue-500">Services</span>
          </h1>
          <p className="text-white/80 text-xl lg:text-3xl font-inter font-light">
            Keep scrolling to explore our comprehensive suite of mobilized automotive engineering solutions.
          </p>
        </motion.div>
      </section>

      {/* Interactive Scroll Stack */}
      <section className="relative z-10 min-h-[150vh]">
        <ScrollStack 
          itemDistance={120} 
          itemScale={0.04} 
          stackPosition="25%" 
          rotationAmount={2}
          blurAmount={2}
        >
          {servicesList.map((svc, i) => (
            <ScrollStackItem key={i} itemClassName={`flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-16 border-[3px] shadow-[20px_20px_40px_#d1d9e6,_-20px_-20px_40px_#ffffff] rounded-[3rem] ${svc.bg}`}>
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full shadow-inner bg-white flex items-center justify-center font-black ${svc.color} text-2xl`}>
                    0{i + 1}
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-black ${svc.color}`}>{svc.title}</h2>
                </div>
                <p className="text-clay-dark/70 text-lg md:text-2xl font-inter leading-relaxed font-semibold">
                  {svc.desc}
                </p>
              </div>
              
              <div className="mt-10 md:mt-0 text-left md:text-right">
                <p className="text-sm uppercase tracking-widest text-clay-dark/60 font-bold mb-2">Starting At</p>
                <p className="text-4xl font-black text-clay-dark mb-6">{svc.price}</p>
                <Link to="/contact" className="inline-block bg-white text-clay-dark font-black px-10 py-5 rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)] border border-white hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all uppercase text-sm">
                  Book Now
                </Link>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

    </div>
  );
}
