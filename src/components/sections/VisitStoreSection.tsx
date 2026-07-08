'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, CheckCircle } from 'lucide-react';
import { openWhatsAppChat, openDirections } from '@/lib/whatsapp';

const features = [
  { icon: '🕐', title: 'Store Timing', desc: 'Open daily from 6:00 AM to 9:00 PM (Weekends 5:30 AM – 10:00 PM)' },
  { icon: '🐓', title: 'Fresh Stock Every Day', desc: 'New fresh chicken arrives every morning — always the freshest cuts available' },
  { icon: '🧹', title: 'Clean Environment', desc: 'Hygienically maintained store with regular sanitization and clean workspaces' },
  { icon: '🏆', title: 'Premium Quality', desc: 'Every piece is inspected for quality before display — we never compromise' },
  { icon: '😊', title: 'Friendly Staff', desc: 'Our team is always ready to assist you with cuts, portions, and advice' },
];

export default function VisitStoreSection() {
  return (
    <section id="visit-store" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">Come Visit Us</span>
              <h2 className="section-title mt-2 mb-4">
                Experience Freshness
                <br />
                <span className="text-gradient-red">In Person</span>
              </h2>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                Our physical store is where the magic happens — fresh cuts prepared in front of you, 
                friendly service, and a clean, premium shopping experience every single day.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                      <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openDirections}
                  className="btn-primary flex items-center gap-2 px-6 py-3"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </button>
                <button
                  onClick={openWhatsAppChat}
                  className="btn-whatsapp px-6 py-3"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.822L.057 23.492a.5.5 0 0 0 .614.656l5.832-1.53A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.523-5.166-1.432l-.367-.22-3.802.998 1.017-3.712-.239-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Reserve on WhatsApp
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Map + Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 card-shadow h-72 bg-gray-50 relative">
              <iframe
                src="https://maps.google.com/maps?q=CHIKEN+WORLD&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="CHIKEN WORLD Location"
                className="w-full h-full"
              />
              <button
                onClick={openDirections}
                className="absolute bottom-4 right-4 btn-primary text-sm py-2 px-4 shadow-lg"
              >
                <MapPin className="w-3.5 h-3.5 inline mr-1" />
                Open in Maps
              </button>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-2xl p-4">
                <Clock className="w-5 h-5 text-[#C8102E] mb-2" />
                <p className="font-bold text-gray-900 text-sm">Opening Hours</p>
                <p className="text-gray-500 text-xs mt-1">Mon–Fri: 6AM – 9PM</p>
                <p className="text-gray-500 text-xs">Weekends: 5:30AM – 10PM</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <Phone className="w-5 h-5 text-[#C8102E] mb-2" />
                <p className="font-bold text-gray-900 text-sm">Call Us</p>
                <a href="tel:9611419180" className="text-[#C8102E] font-semibold text-sm hover:underline">
                  9611419180
                </a>
              </div>
              <div className="bg-red-50 rounded-2xl p-4 col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <p className="font-bold text-gray-900 text-sm">Fresh Stock Every Day</p>
                </div>
                <p className="text-gray-500 text-xs">
                  Fresh chicken arrives every morning. Reserve via WhatsApp — collect at store!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
