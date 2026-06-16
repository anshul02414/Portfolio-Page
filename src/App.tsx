/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { heroData } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call on load to identify initial visible section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white font-sans antialiased selection:bg-[#FF7300]/35 selection:text-white">
      {/* Scroll-spied Header */}
      <Header activeSection={activeSection} />

      {/* Main Single-page Layout Sections */}
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* SERVICES SECTION */}
        <Services />

        {/* ABOUT ME SECTION & SKILLS WHEELS */}
        <AboutMe />

        {/* INTERACTIVE GALLERY & FILTER FILTERING */}
        <Portfolio />

        {/* RESPONSE-DRIVEN CONTACT ENVELOPE */}
        <ContactMe />
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-[#0c0c0c] border-t border-neutral-950 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            
            {/* Left footer segment: Branding */}
            <div className="space-y-3 text-left">
              <span className="text-xl md:text-2xl font-black tracking-widest text-[#FF7300]">
                AK
              </span>
              <p className="text-xs text-neutral-400 font-medium max-w-xs leading-relaxed">
                Data Analyst transforming complex datasets into actionable insights and business solutions.
              </p>
            </div>

            {/* Middle Segment: Anchor paths */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-left">
              <button
                onClick={() => handleScrollToSection('home')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollToSection('services')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => handleScrollToSection('about')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                About Me
              </button>
              <button
                onClick={() => handleScrollToSection('portfolio')}
                className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleScrollToSection('contact')}
                className="text-xs font-bold uppercase tracking-wider text-[#FF7300] hover:text-[#fff] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Right Segment: Social networks */}
            <div className="flex items-center space-x-4">
              <a
                href={heroData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800/60 flex items-center justify-center text-neutral-400 hover:text-[#FF7300] hover:border-[#FF7300] transition-colors"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href={heroData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800/60 flex items-center justify-center text-neutral-400 hover:text-[#FF7300] hover:border-[#FF7300] transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={heroData.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800/60 flex items-center justify-center text-neutral-400 hover:text-[#FF7300] hover:border-[#FF7300] transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

          {/* Subcopyright info */}
          <div className="pt-8 border-t border-neutral-950 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-medium text-neutral-500 text-left">
            <span>
              &copy; {new Date().getFullYear()} @Anshul Kumawat. All rights reserved.
            </span>
            <span>
              Where Data Meets Decision-Making
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}
