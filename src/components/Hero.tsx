/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Github, ArrowRight, Download } from 'lucide-react';
import { heroData, statItems } from '../data';

export default function Hero() {
  const handleScrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // const handleDownloadCV = () => {
  //   // Elegant temporary trigger showing standard download experience simulation
  //   const link = document.createElement('a');
  //   link.href = '#';
  //   alert('Simulating download of "Anshul_Kumawat.pdf"');
  // };

  const handleDownloadCV = () => {
  window.open(heroData.cvUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0F0F0F] pt-24 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#FF7300]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-[#FF7300]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            id="hero-intro-column"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="space-y-2">
              <span className="text-lg md:text-xl font-medium text-neutral-400 tracking-wide block">
                {heroData.greeting}
              </span>
              <h1 id="hero-designer-name" className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                {heroData.name}
              </h1>
              <h2 id="hero-designer-title" className="text-4xl md:text-6xl font-black tracking-tight text-[#FF7300] uppercase pt-1">
                {heroData.role}
              </h2>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                id="social-instagram"
                href={heroData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#FF7300] hover:border-[#FF7300] transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                id="social-linkedin"
                href={heroData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#FF7300] hover:border-[#FF7300] transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                id="social-github"
                href={heroData.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-[#FF7300] hover:border-[#FF7300] transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                id="hero-hire-cta"
                onClick={handleScrollToContact}
                className="group px-8 py-3.5 rounded-md bg-[#FF7300] hover:bg-[#E06600] text-black font-extrabold tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#FF7300]/20 hover:shadow-[#FF7300]/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <button
                id="hero-download-cv-cta"
                onClick={handleDownloadCV}
                className="px-8 py-3.5 rounded-md border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-200 hover:text-white font-bold tracking-wider flex items-center justify-center space-x-2 hover:border-[#FF7300] transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Stats list with staggered entries */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-neutral-800/60">
              {statItems.map((stat) => (
                <div key={stat.id} id={`stat-tile-${stat.id}`} className="space-y-1">
                  <h4 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    <span className="text-[#FF7300]">{stat.value.replace('+', '')}</span>+
                  </h4>
                  <p className="text-xs md:text-sm font-medium text-neutral-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Image Concentric Column */}
          <motion.div
            id="hero-image-column"
            className="lg:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              {/* Spinning / Decorative concentric borders */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#FF7300]/20 animate-[spin_80s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-solid border-neutral-800" />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-[#FF7300]/40 animate-[spin_40s_linear_reverse_infinite]" />
              
              {/* Outer decorative accents */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full border border-[#FF7300]/40 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF7300] animate-ping" />
              </div>
              <div className="absolute bottom-6 -left-6 w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
              </div>

              {/* Main portrait visual structure */}
              <div className="absolute inset-12 rounded-full overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-2xl border-2 border-[#FF7300]/50 group select-none">
                <img
                  src={heroData.avatarUrl}
                  alt={heroData.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 saturate-120 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
