/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { heroData, aboutMeData, skillItems } from '../data';

// Helper component for animated circular progress indicators
function SkillCircularProgress({
  name,
  percentage,
  abbr,
}: {
  name: string;
  percentage: number;
  abbr: string;
}) {
  const [currentPercent, setCurrentPercent] = useState(0);

  // Trigger animation when the element is in view
  useEffect(() => {
    const timer = setTimeout(() => {
      // Smooth increment representation
      setCurrentPercent(percentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {/* Circle wrap */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Background track */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-neutral-800 fill-none"
            strokeWidth="5"
          />
          {/* Active orange glow bar */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-[#FF7300] fill-none drop-shadow-[0_0_6px_rgba(255,115,0,0.5)]"
            strokeWidth="5"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            strokeLinecap="round"
          />
        </svg>

        {/* Center label brand letters */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-sm font-black text-white leading-none tracking-tight uppercase">
            {abbr}
          </span>
          <span className="text-[10px] font-bold text-neutral-400 leading-none pt-0.5">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Label underneath */}
      <div className="text-center">
        <h4 className="text-sm font-semibold text-white tracking-wide">{name}</h4>
      </div>
    </div>
  );
}

export default function AboutMe() {
  const handleDownloadCV = () => {
    window.open(heroData.cvUrl, '_blank');
  };

  // Abbreviations mapping as styled in the screenshot circular badges
const abbrMap: Record<string, string> = {
  'Python': 'Py',
  'NumPy': 'Np',
  'Pandas': 'Pd',
  'Matplotlib': 'Mp',
  'MS Excel': 'Ex',
  'Power BI': 'BI',
};

  return (
    <section id="about" className="bg-[#0F0F0F] py-24 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#FF7300]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* About Me header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {aboutMeData.title}
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-neutral-400 font-medium tracking-wide uppercase max-w-lg mx-auto leading-relaxed border-b border-neutral-800 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {aboutMeData.subtitle}
          </motion.p>
        </div>

        {/* Main Grid: Portrait and bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left arched portrait */}
          <motion.div
            id="about-portrait-wrapper"
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              {/* Outer arched frame rings */}
              <div className="absolute -inset-4 border border-dashed border-[#FF7300]/10 rounded-t-full scale-102" />
              <div className="absolute -inset-2 border border-solid border-neutral-900 rounded-t-full" />
              
              {/* Main portrait inside arched mask */}
              <div className="absolute inset-0 rounded-t-full overflow-hidden bg-gradient-to-b from-neutral-800 to-neutral-950 shadow-2xl border-2 border-[#FF7300]/30 select-none">
                <img
                  src={aboutMeData.avatarUrl}
                  alt="Mahmood portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* High-contrast overlay dots asset */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-20 pointer-events-none bg-[radial-gradient(#FF7300_1px,transparent_1px)] [background-size:10px_10px]" />
            </div>
          </motion.div>

          {/* Right bio details */}
          <motion.div
            id="about-bio-wrapper"
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed text-justify space-y-4">
              <p>{aboutMeData.description}</p>
            </div>

            <div className="pt-2">
              <button
                id="about-download-cv-button"
                onClick={handleDownloadCV}
                className="group px-7 py-3 rounded-md bg-[#FF7300] hover:bg-[#E06600] text-black font-extrabold tracking-wider flex items-center space-x-2 shadow-lg shadow-[#FF7300]/10 hover:shadow-[#FF7300]/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Skills circle grid */}
        <div id="skills-circles-wrapper" className="pt-12 border-t border-neutral-900">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center">
            {skillItems.map((skill, index) => (
              <motion.div
                key={skill.id}
                id={`skill-circle-${skill.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCircularProgress
                  name={skill.name}
                  percentage={skill.percentage}
                  abbr={abbrMap[skill.name] || 'SK'}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
