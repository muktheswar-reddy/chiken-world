'use client';

import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { openWhatsAppChat, openDirections } from '@/lib/whatsapp';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'Visit Store', href: '#visit-store' },
  { label: 'Offers', href: '#offers' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const categories = [
  'Country Chicken', 'Broiler Chicken', 'Boneless Chicken',
  'Chicken Breast', 'Chicken Wings', 'Chicken Drumsticks',
  'Chicken Liver', 'Fresh Eggs', 'Country Eggs',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-[#C8102E] to-[#a00d24] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Ready to Order?</h3>
            <p className="text-red-200 text-sm mt-1">Reserve your fresh chicken via WhatsApp & collect in store</p>
          </div>
          <div className="flex gap-3">
            <button onClick={openWhatsAppChat} className="btn-whatsapp px-6 py-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.822L.057 23.492a.5.5 0 0 0 .614.656l5.832-1.53A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.523-5.166-1.432l-.367-.22-3.802.998 1.017-3.712-.239-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Book via WhatsApp
            </button>
            <button onClick={openDirections} className="btn-secondary text-sm py-3 border-white text-white hover:bg-white hover:text-[#C8102E]">
              <MapPin className="w-4 h-4 inline mr-1" />
              Get Directions
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="text-2xl font-black text-gradient-red" style={{ fontFamily: 'Poppins' }}>
                CHIKEN WORLD
              </p>
              <p className="text-xs text-[#D4AF37] font-medium tracking-widest uppercase mt-1">
                Premium Fresh Chicken & Eggs
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted local chicken shop offering the freshest cuts, hygienically processed daily.
            </p>
            <div className="space-y-2">
              <a href="tel:9611419180" className="flex items-center gap-2 text-gray-300 hover:text-[#C8102E] transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#C8102E]" />
                9611419180
              </a>
              <button onClick={openWhatsAppChat} className="flex items-center gap-2 text-gray-300 hover:text-[#25D366] transition-colors text-sm">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.822L.057 23.492a.5.5 0 0 0 .614.656l5.832-1.53A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.523-5.166-1.432l-.367-.22-3.802.998 1.017-3.712-.239-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp Us
              </button>
              <button onClick={openDirections} className="flex items-center gap-2 text-gray-300 hover:text-[#C8102E] transition-colors text-sm">
                <MapPin className="w-4 h-4 text-[#C8102E]" />
                Get Directions
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#C8102E]" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-[#C8102E] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#C8102E]" />
              Our Products
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => scrollTo('#categories')}
                    className="text-gray-400 hover:text-[#C8102E] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#C8102E]" />
              Store Hours
            </h4>
            <div className="space-y-3">
              {[
                { day: 'Monday – Friday', time: '6:00 AM – 9:00 PM' },
                { day: 'Saturday', time: '5:30 AM – 9:30 PM' },
                { day: 'Sunday', time: '5:30 AM – 10:00 PM' },
              ].map(({ day, time }) => (
                <div key={day} className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#C8102E] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-gray-300 text-xs font-medium">{day}</p>
                    <p className="text-[#D4AF37] text-sm font-semibold">{time}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 bg-emerald-900/30 rounded-xl border border-emerald-800/50">
                <p className="text-emerald-400 text-xs font-semibold">✓ Fresh Stock Daily</p>
                <p className="text-gray-400 text-xs mt-1">Chicken arrives fresh every morning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} CHIKEN WORLD. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#C8102E]" fill="#C8102E" /> for fresh food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
