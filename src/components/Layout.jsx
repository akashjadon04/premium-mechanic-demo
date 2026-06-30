import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import BubbleMenu from './BubbleMenu';
import Bb8Toggle from './Bb8Toggle';
import Footer from './Footer';

export default function Layout() {
  const [theme, setTheme] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col ${theme ? 'dark-theme' : ''}`}>
      <header className="absolute top-0 w-full z-50 p-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <Link to="/" className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full hover:scale-105 transition-transform bg-black/30 backdrop-blur-md border border-white/20 shadow-lg">
          {/* SVG Hypercar Logo */}
          <svg width="32" height="32" className="md:w-10 md:h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 60 C 15 40, 30 30, 45 30 L 70 30 C 85 30, 90 40, 95 50 L 95 65 C 95 75, 85 75, 80 75 L 15 75 C 10 75, 5 65, 10 60 Z" fill="#3B82F6" opacity="0.9"/>
            <circle cx="30" cy="75" r="12" fill="#FFFFFF"/>
            <circle cx="70" cy="75" r="12" fill="#FFFFFF"/>
            <path d="M45 30 L 60 15 L 75 30" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <span className="font-black text-xl md:text-2xl tracking-widest text-white uppercase drop-shadow-md">YM<span className="text-blue-500">.</span></span>
        </Link>
        <div className="flex items-center gap-6 z-[1000]">
          <div className="transform scale-[0.6] origin-right relative top-1">
            <Bb8Toggle checked={theme} onChange={(e) => setTheme(e.target.checked)} />
          </div>
          <BubbleMenu className="!static !m-0 !p-0" style={{ position: 'relative', top: 'auto', right: 'auto' }} />
        </div>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
