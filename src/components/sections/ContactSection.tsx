'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import { openWhatsAppChat, openDirections } from '@/lib/whatsapp';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="section-title mt-2">Contact CHIKEN WORLD</h2>
          <p className="section-subtitle mt-3">We&apos;re just a call or WhatsApp away — reach out anytime!</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {/* Phone */}
          <motion.a
            href="tel:9611419180"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 card-shadow text-center group hover:border-red-100 hover:card-shadow-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C8102E] transition-colors duration-300">
              <Phone className="w-7 h-7 text-[#C8102E] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
            <p className="text-[#C8102E] font-semibold text-lg">9611419180</p>
            <p className="text-gray-400 text-sm mt-1">Available during store hours</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.button
            onClick={openWhatsAppChat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 card-shadow text-center group hover:border-green-100 hover:card-shadow-hover transition-all duration-300 w-full"
          >
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366] transition-colors duration-300">
              <svg className="w-7 h-7 text-[#25D366] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.099 1.523 5.822L.057 23.492a.5.5 0 0 0 .614.656l5.832-1.53A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.523-5.166-1.432l-.367-.22-3.802.998 1.017-3.712-.239-.376A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-[#25D366] font-semibold text-lg">9611419180</p>
            <p className="text-gray-400 text-sm mt-1">Reserve products instantly</p>
          </motion.button>

          {/* Location */}
          <motion.button
            onClick={openDirections}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 card-shadow text-center group hover:border-blue-100 hover:card-shadow-hover transition-all duration-300 w-full"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
              <MapPin className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Visit Our Store</h3>
            <p className="text-blue-500 font-semibold">CHIKEN WORLD</p>
            <p className="text-gray-400 text-sm mt-1">Click to get directions</p>
          </motion.button>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden card-shadow border border-gray-100 h-80 relative"
        >
          <iframe
            src="https://maps.google.com/maps?q=CHIKEN+WORLD&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="CHIKEN WORLD Store Location"
          />
          <button
            onClick={openDirections}
            className="absolute bottom-4 right-4 btn-primary text-sm py-2.5 px-5 shadow-lg"
          >
            <MapPin className="w-4 h-4 inline mr-1.5" />
            Get Directions
          </button>
        </motion.div>

        {/* Hours strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-gray-50 rounded-3xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-[#C8102E]" />
            <h3 className="font-bold text-gray-900">Store Hours</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { day: 'Monday – Friday', time: '6:00 AM – 9:00 PM', badge: 'Weekdays' },
              { day: 'Saturday', time: '5:30 AM – 9:30 PM', badge: 'Saturday' },
              { day: 'Sunday', time: '5:30 AM – 10:00 PM', badge: 'Sunday' },
            ].map(({ day, time, badge }) => (
              <div key={day} className="bg-white rounded-2xl p-4 border border-gray-100">
                <span className="text-xs font-semibold text-[#C8102E] bg-red-50 px-2 py-0.5 rounded-full">{badge}</span>
                <p className="text-gray-700 font-medium text-sm mt-2">{day}</p>
                <p className="text-gray-900 font-bold">{time}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
