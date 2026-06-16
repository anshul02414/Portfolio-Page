/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { navItems } from '../data';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f0f]/90 backdrop-blur-md border-b border-orange-500/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-black tracking-widest text-[#FF7300] select-none hover:scale-105 transition-transform duration-200">
            AK
          </span>
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                id={`nav-${item.href.replace('#', '')}`}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                  isActive ? 'text-[#FF7300]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7300]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            id="header-hire-button"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="px-6 py-2 rounded-md bg-[#FF7300] hover:bg-[#E06600] text-black text-sm font-bold tracking-wider hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#FF7300]/20 transition-all duration-300 hover:shadow-[#FF7300]/40"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-sidebar"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-orange-500/10 bg-[#0f0f0f]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    id={`mobile-nav-${item.href.replace('#', '')}`}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`block py-2 text-base font-semibold transition-colors duration-200 ${
                      isActive ? 'text-[#FF7300] pl-2 border-l-2 border-[#FF7300]' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href="#contact"
                  id="mobile-hire-button"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="block w-full text-center py-2.5 rounded-md bg-[#FF7300] hover:bg-[#E06600] text-black font-bold tracking-wider shadow-md transition-colors duration-200"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
