/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ExternalLink, X, FolderOpen, Calendar, User } from 'lucide-react';
import { projectItems, portfolioCategories } from '../data';
import { ProjectItem } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectItems
    : projectItems.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-[#0c0c0c] py-24 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-[20%] right-[-15%] w-[400px] h-[400px] rounded-full bg-[#FF7300]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.h2>
          <div className="w-16 h-1 bg-[#FF7300] mx-auto rounded-full" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16 max-w-4xl mx-auto">
          {portfolioCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                id={`filter-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'text-black bg-[#FF7300] font-black shadow-lg shadow-[#FF7300]/25'
                    : 'text-neutral-400 border border-neutral-800 bg-neutral-900/40 hover:text-white hover:border-neutral-600'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Layout Animation */}
        <motion.div
          id="portfolio-grid-wrapper"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-xl bg-[#0f0f0f] border border-neutral-900/60 overflow-hidden shadow-lg hover:border-[#FF7300]/30 transition-all duration-300"
              >
                {/* Thumbnail Image Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 grayscale brightness-90 saturate-[0.8] group-hover:grayscale-0 group-hover:brightness-100 group-hover:saturate-100"
                  />

                  {/* Dark Glass Info Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0F0F0F]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none">
                    
                    {/* Hidden interactive controls */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        id={`quick-preview-${project.id}`}
                        onClick={() => setActiveProject(project)}
                        className="p-2 bg-neutral-800 hover:bg-[#FF7300] hover:text-black rounded-full text-neutral-200 transition-all duration-200"
                        title="View Case Study"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="space-y-2 pointer-events-none">
                      <span className="text-[10px] font-black tracking-widest text-[#FF7300] uppercase block">
                        {project.category}
                      </span>
                      <h3 className="text-base font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      {project.tags && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[9px] font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Always-visible Title Block underneath */}
                <div
                  className="p-5 flex justify-between items-center bg-[#0F0F0F] border-t border-neutral-900/40 cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#FF7300] transition-colors duration-200 truncate pr-4">
                      {project.title}
                    </h4>
                    <p className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">
                      {project.category}
                    </p>
                  </div>
                  <div className="p-2 rounded-full border border-neutral-800 text-neutral-400 group-hover:border-[#FF7300] group-hover:text-[#FF7300] group-hover:bg-[#FF7300]/5 transition-all duration-300">
                    <ExternalLink className="h-4 w-4 stroke-[1.5]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Large Case Study Modal Overlay */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              id="case-study-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
            >
              <motion.div
                id="case-study-modal-container"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative bg-[#0F0F0F] border border-neutral-800 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl my-8"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Image backdrop box */}
                <div className="relative aspect-video w-full bg-neutral-950">
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover saturate-100"
                  />
                  {/* Vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/60" />

                  {/* Top Close Control */}
                  <button
                    id="close-case-study"
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-[#FF7300] hover:text-black rounded-full text-white transition-all duration-200 border border-neutral-800"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Header Title embedded on image banner */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-black tracking-widest text-[#FF7300] uppercase px-2.5 py-1 rounded bg-black/80 backdrop-blur border border-[#FF7300]/20 inline-block mb-3">
                      {activeProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white filter drop-shadow">
                      {activeProject.title}
                    </h2>
                  </div>
                </div>

                {/* Case Study Meta & Content */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                  
                  {/* Left core column: Descriptions */}
                  <div className="md:col-span-8 space-y-4">
                    <h3 className="text-lg font-bold text-white tracking-tight border-b border-neutral-900 pb-2">
                      Case Study Description
                    </h3>
                    <p className="text-sm text-neutral-300 font-normal leading-relaxed text-justify">
                      {activeProject.description}
                    </p>
                    <p className="text-sm text-neutral-400">
                      We developed strict brand layout guides, responsive styling arrays, visual benchmarks, and user tests over multiple sprints to guarantee pristine pixel layout alignments.
                    </p>
                  </div>

                  {/* Right side panel: Metadata */}
                  <div className="md:col-span-4 space-y-6">
                    <div className="space-y-4 rounded-lg bg-neutral-900/60 border border-neutral-800/40 p-4">
                      
                      {/* Section tag metadata */}
                      <h4 className="text-xs font-black uppercase text-neutral-400 tracking-wider">
                        Project Specs
                      </h4>

                      {/* Client */}
                      {activeProject.client && (
                        <div className="flex items-start space-x-3 text-neutral-300">
                          <User className="h-4 w-4 text-[#FF7300] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] text-neutral-500 font-black uppercase block">Client</span>
                            <span className="text-xs font-semibold">{activeProject.client}</span>
                          </div>
                        </div>
                      )}

                      {/* Date */}
                      {activeProject.date && (
                        <div className="flex items-start space-x-3 text-neutral-300">
                          <Calendar className="h-4 w-4 text-[#FF7300] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] text-neutral-500 font-black uppercase block">Completed</span>
                            <span className="text-xs font-semibold">{activeProject.date}</span>
                          </div>
                        </div>
                      )}

                      {/* Category */}
                      <div className="flex items-start space-x-3 text-neutral-300">
                        <FolderOpen className="h-4 w-4 text-[#FF7300] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] text-neutral-500 font-black uppercase block">Industry Type</span>
                          <span className="text-xs font-semibold">{activeProject.category}</span>
                        </div>
                      </div>

                    </div>

                    {/* Tags List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase text-neutral-400 tracking-wider">
                        Key Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

                {/* Footer Modal Controls */}
                <div className="px-6 py-4 bg-neutral-900/50 border-t border-neutral-900/80 flex justify-end">
                  <button
                    id="modal-footer-close"
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2 text-xs font-bold text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800 rounded transition-all duration-200"
                  >
                    Close Showcase
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
