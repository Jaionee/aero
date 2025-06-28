import React from 'react';
import Link from 'next/link';
import { navItems } from '../lib/nav-data';

export default function Navbar() {
  return (
    <header className="min-h-[60px] flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-sm py-3 border-b border-gray-600">
      <nav className="relative max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex text-xl gap-2 items-center font-semibold text-white">
          <img src="/NZWOe56msmky6Wmx.png" alt="Logo" className="w-[40px] rounded-lg" />
          <span className="text-[20px] leading-none">Aero4</span>
        </Link>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link} className="font-medium text-white hover:text-orange-500">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
