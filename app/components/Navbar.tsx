"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { navItems } from '../lib/nav-data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="min-h-[60px] sm:flex sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 border-b border-gray-600">
      <nav className="relative max-w-screen-2xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex text-xl gap-2 items-center font-semibold text-white" aria-label="Aero4">
            <img src="/NZWOe56msmky6Wmx.png" alt="Logo" className="w-[40px] rounded-lg" />
            <span className="text-[20px] leading-none">Aero4</span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-700 bg-gray-800 text-white shadow-sm hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              aria-controls="navbar-collapse"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {/* Icono de hamburguesa */}
              <svg className={`flex-shrink-0 w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="15" y1="18" y2="18"/></svg>
              {/* Icono de cierre (X) */}
              <svg className={`flex-shrink-0 w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
        <div id="navbar-collapse" className={`${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="font-medium text-white hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
