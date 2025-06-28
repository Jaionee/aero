import React from 'react';
import Link from 'next/link';
import { navItems } from '../lib/nav-data';

export default function Footer() {
  return (
    <footer className="bg-black p-4 border-t border-gray-600">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-12 pt-10">
        <div>
          <Link href="/" className="text-white flex items-center gap-2 text-xl font-bold md:text-2xl">
            <img src="/NZWOe56msmky6Wmx.png" alt="Logo" className="w-[40px] rounded-lg" />
            <span>Aero4</span>
          </Link>
          <p className="text-gray-400 max-w-[500px] mb-6">
            Servicios profesionales de vuelo de dron y edición por un freelance comprometido. Calidad accesible, enfoque profesional.
          </p>
        </div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              className="text-gray-400 hover:text-orange-500 transition duration-100"
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
