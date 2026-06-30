import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-clay-border bg-clay-base/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight text-gradient-accent font-sans">
            Your Mechanic
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-clay-accent ${
                  isActive ? 'text-clay-accent font-bold' : 'text-clay-muted'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center">
          <Link
            to="/contact"
            className="clay-btn inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-clay-accent hover:text-clay-accentHover"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
