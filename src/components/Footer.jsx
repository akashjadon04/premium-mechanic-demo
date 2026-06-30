import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#070e2b] text-white pt-24 pb-12 overflow-hidden z-20">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-black text-4xl tracking-widest text-white uppercase drop-shadow-md">YM<span className="text-blue-500">.</span></span>
            </Link>
            <p className="text-blue-100/70 font-inter text-lg leading-relaxed mb-6">
              The $50k experience for your driveway. Master-certified mechanics, elite telemetry, and absolute precision.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social, i) => (
                <motion.a 
                  key={social}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#" 
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-[5px_5px_15px_rgba(0,0,0,0.5)] transition-colors hover:bg-blue-600"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide uppercase">Services</h4>
            <ul className="space-y-4 font-inter text-blue-100/70">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Precision Diagnostics</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Performance Tuning</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">EV Battery Services</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Suspension Overhaul</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide uppercase">Company</h4>
            <ul className="space-y-4 font-inter text-blue-100/70">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Our Philosophy</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Investment</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Concierge Booking</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide uppercase">VIP Access</h4>
            <p className="text-blue-100/70 font-inter text-sm mb-6">
              Join our exclusive client list for priority booking and automotive insights.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-500 backdrop-blur-md shadow-inner"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full px-6 transition-colors shadow-lg"
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100/50 font-inter text-sm">
            &copy; {new Date().getFullYear()} Your Mechanic. Masterfully Engineered.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-blue-100/50 text-sm font-inter">All Mobile Units Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
