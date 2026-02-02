import React from 'react';

const navLinks = ['Home','Services','Case Studies','About Us','Contact'];

export default function Nav() {
  return (
    <nav className="top-0 left-0 right-0 bg-white z-50 border-b transform -translate-y-6 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/ioimachines_logo.png" alt="IOIMachines logo" className="w-40 h-40 object-contain" />
        </a>
        <div className="hidden md:flex items-center text-[14px] text-[#444444] font-semibold">
          {navLinks.map((link, index) => (
            <span key={link} className="flex items-center">
              <a href="#" className="hover:text-[#444444]">{link}</a>
              {index < navLinks.length - 1 && <span aria-hidden="true" className="mx-12 text-[#000000] text-xl">|</span>}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#EBEBEB]" />
    </nav>
  );
}
