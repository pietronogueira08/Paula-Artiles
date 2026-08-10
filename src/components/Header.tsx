"use client";

import { useState } from "react";
import { Calendar, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "A Clínica", href: "#clinica" },
    { name: "Tratamentos", href: "#tratamentos" },
    { name: "Spa Exclusivo", href: "#spa" },
    { name: "Localização (Santo Amaro)", href: "#localizacao" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF8F5]/80 border-b border-[#D4A373]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="font-serif font-bold text-xl text-[#1A1A1A]">
                Dra. Paula Artiles
              </span>
              <span className="font-sans text-[0.65rem] tracking-widest text-[#D4A373] uppercase">
                Dermatologia & Spa
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#6B6560] hover:text-[#D4A373] font-sans text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5522999773756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#D4A373] to-[#C5A880] hover:scale-105 transition-transform duration-300 shadow-md shadow-[#D4A373]/20"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1A1A1A] hover:text-[#D4A373] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#D4A373]/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-[#6B6560] hover:text-[#D4A373] hover:bg-[#D4A373]/5 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/5522999773756"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-white bg-gradient-to-r from-[#D4A373] to-[#C5A880]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
