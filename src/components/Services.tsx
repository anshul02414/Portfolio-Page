/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { serviceItems } from '../data';

export default function Services() {
  return (
    <section id="services" className="bg-[#0c0c0c] py-24 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#FF7300]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-neutral-400 font-medium leading-relaxed max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I analyze raw data, identify trends, and transform complex datasets into meaningful insights that support business decisions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => {
            // Dynamically resolve the icon from Lucide
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative p-8 rounded-xl bg-[#0F0F0F] border border-neutral-900 overflow-hidden hover:border-[#FF7300]/40 transition-all duration-300 flex flex-col items-center text-center shadow-lg shadow-black/30 hover:shadow-black/60 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Hover backlight glow effect */}
                <div className="absolute -inset-10 bg-gradient-to-br from-[#FF7300]/0 via-[#FF7300]/2 to-[#FF7300]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl" />

                {/* Top Glowing Icon Block */}
                <div className="mb-6 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-[#FF7300] group-hover:bg-[#FF7300] group-hover:text-black transition-all duration-300 shadow-md">
                  <IconComponent className="h-7 w-7 stroke-[1.5]" />
                </div>

                {/* Service Details */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#FF7300] tracking-wide transition-colors duration-200 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-neutral-400 font-normal leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                  {service.description}
                </p>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#FF7300] group-hover:w-1/3 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
