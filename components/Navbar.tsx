'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary font-serif">
              Remhala <span className="text-accent">guesthouse</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-ink hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/9613377098"
              className="bg-primary text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-md"
            >
              <MessageCircle size={18} />
              <span>Book Now</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-lg font-medium text-ink border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="https://wa.me/9613377098"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-white px-6 py-4 rounded-xl flex items-center justify-center gap-2 font-bold"
              >
                <MessageCircle size={20} />
                Book via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
