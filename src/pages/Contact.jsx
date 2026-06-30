import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LottieLoader from '../components/LottieLoader';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', vehicle: '', issue: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full bg-white/60 backdrop-blur-md border-2 border-white/80 rounded-2xl px-6 py-4 text-clay-dark font-medium shadow-[inset_2px_2px_10px_rgba(0,0,0,0.05),inset_-2px_-2px_10px_rgba(255,255,255,1)] focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all font-inter placeholder:text-clay-muted/70";

  return (
    <div className="bg-clay-base text-clay-dark min-h-screen font-sans antialiased relative overflow-hidden flex justify-center py-24 px-4 md:px-6">
      
      {/* Background Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob pointer-events-none" />
      <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />
      <div className="fixed bottom-0 left-1/3 w-96 h-96 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-md relative z-10 space-y-8 mt-10">
        
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="relative inline-block mb-4">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-gray-900 to-black p-1 shadow-[10px_10px_20px_#d1d9e6,_-10px_-10px_20px_#ffffff]">
              <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-black flex items-center justify-center">
                <span className="font-black text-3xl tracking-widest text-white uppercase">YM<span className="text-blue-500">.</span></span>
              </div>
            </div>
            {/* Verify Badge */}
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
            </div>
          </div>
          <h1 className="text-3xl font-black text-clay-dark uppercase tracking-tight">Your Mechanic</h1>
          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-1 mb-4 font-inter">Premium Mobile Concierge</p>
          <p className="text-clay-muted font-inter font-medium leading-relaxed px-4">
            Direct dispatch for luxury automotive diagnostics, maintenance, and emergency roadside assistance.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <a href="tel:1-800-555-0199" className="flex items-center gap-4 w-full bg-white border border-white/50 p-4 rounded-[2rem] shadow-[10px_10px_20px_#d1d9e6,_-10px_-10px_20px_#ffffff] transform hover:scale-[1.02] transition-transform group">
            <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center shadow-inner group-hover:bg-red-500 group-hover:text-white transition-colors">
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div className="text-left">
              <h3 className="font-black text-clay-dark uppercase tracking-tight">24/7 Emergency Dispatch</h3>
              <p className="text-xs text-clay-muted font-inter font-bold uppercase tracking-widest">Call (800) 555-0199</p>
            </div>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 w-full bg-white border border-white/50 p-4 rounded-[2rem] shadow-[10px_10px_20px_#d1d9e6,_-10px_-10px_20px_#ffffff] transform hover:scale-[1.02] transition-transform group">
            <div className="w-14 h-14 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shadow-inner group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-pink-500 group-hover:to-purple-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <div className="text-left">
              <h3 className="font-black text-clay-dark uppercase tracking-tight">Follow Workshop</h3>
              <p className="text-xs text-clay-muted font-inter font-bold uppercase tracking-widest">@yourmechanic</p>
            </div>
          </a>
        </motion.div>

        {/* Concierge Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="clay-panel p-8 bg-white/40 border-[3px] border-white/60 shadow-[20px_20px_40px_rgba(209,217,230,0.5),-20px_-20px_40px_rgba(255,255,255,0.8)] rounded-[3rem]"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <h2 className="text-xl font-black text-clay-dark uppercase tracking-widest text-center">Intake Portal</h2>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-24 h-24 mx-auto bg-green-50 shadow-inner border-2 border-green-200 rounded-full flex items-center justify-center mb-6">
                  <LottieLoader data-lottie-url="success" animationUrl="https://lottie.host/b00d6efc-974a-4e2a-8742-df21f7c16cd6/success.json" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-black text-clay-dark uppercase tracking-tight mb-2">Request Sent</h3>
                <p className="text-clay-muted font-inter font-medium leading-relaxed">
                  An advisor will text you shortly to coordinate your specialized service.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <input type="text" placeholder="Full Name" className={inputClass} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div>
                  <input type="tel" placeholder="Mobile Number" className={inputClass} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                </div>
                <div>
                  <input type="text" placeholder="Vehicle (e.g. 2023 Porsche 911)" className={inputClass} value={formData.vehicle} onChange={e => setFormData({...formData, vehicle: e.target.value})} required />
                </div>
                <div>
                  <textarea rows={3} placeholder="Briefly describe the issue or service needed..." className={`${inputClass} resize-none`} value={formData.issue} onChange={e => setFormData({...formData, issue: e.target.value})} required />
                </div>
                <button type="submit" className="w-full bg-clay-dark text-white font-black py-5 rounded-2xl shadow-[0_15px_30px_rgba(15,23,42,0.3)] transition-all uppercase tracking-widest text-sm transform hover:-translate-y-1 hover:bg-black">
                  Request Concierge
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-[10px] uppercase font-black tracking-widest text-clay-muted/50 pb-10">
          © {new Date().getFullYear()} Premium Mechanics Inc.
        </p>

      </div>
    </div>
  );
}
