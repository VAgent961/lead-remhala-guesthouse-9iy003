import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Remhala guesthouse</h3>
            <p className="text-gray-400 leading-relaxed">
              Experience authentic Lebanese mountain hospitality in the heart of the Chouf. A sanctuary for art, nature, and peace.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#reviews" className="text-gray-400 hover:text-white transition-colors">Guest Reviews</Link></li>
              <li><Link href="#location" className="text-gray-400 hover:text-white transition-colors">Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span>PHR7+J3F, Remhala, Lebanon</span>
              </li>
              <li>
                <a href="tel:+9613377098" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone className="text-secondary shrink-0" size={20} />
                  <span>+961 3 377 098</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/9613377098" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="text-secondary shrink-0" size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Remhala Guesthouse. Experience authentic Lebanese mountain hospitality.</p>
        </div>
      </div>
    </footer>
  );
}
