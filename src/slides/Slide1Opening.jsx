import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const COLLEGES = [
  { name: 'JNTU Anantapur', count: '160' },
  { name: 'JNTU Kakinada', count: '159' },
  { name: 'JNTU Hyderabad', count: '215' },
  { name: 'JNTU-GV', sub: 'VIZIANAGARAM', count: '37' },
  { name: 'JNAFAU', sub: 'HYDERABAD', count: '15+' },
];

export default function Slide1Opening({ onNext }) {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT HALF: BRANDING & GIANT TYPOGRAPHY */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Wordmark */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3.5"
        >
          <img 
            src="/lokha-logo.png" 
            alt="Lokha Logo" 
            className="w-10 h-10 object-contain filter drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]" 
          />
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-2xl tracking-[0.22em] text-[#ECEAE4] font-display">
              LOKHA
            </span>
            <div className="border-l border-[#8C969B]/40 pl-3 leading-tight font-mono text-[10px] text-[#8C969B] uppercase tracking-widest">
              <div>INSTITUTIONAL</div>
              <div>COUNCIL</div>
            </div>
          </div>
        </motion.div>

        {/* Center: Massive Number & Headline */}
        <div className="my-auto py-8">
          {/* Giant 586 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-none text-[#ECEAE4] font-display"
          >
            586
          </motion.div>

          {/* Headline: campuses. One direction. */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight mt-1"
          >
            campuses. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              One direction.
            </span>
          </motion.h1>

          {/* Organisation Mission Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 space-y-1.5"
          >
            <div className="text-xl sm:text-2xl font-bold text-[#ECEAE4] tracking-tight">
              Building Talent. <span className="font-serif-italic text-[#F2A41F] font-normal">Advancing Technology.</span>
            </div>
            <p className="text-xs sm:text-sm text-[#8C969B] max-w-md font-sans leading-relaxed">
              Connecting Education, Industry, Research and Opportunity.
            </p>
          </motion.div>

          {/* Action Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex items-center gap-3"
          >
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-5 py-2 rounded bg-[#1C252A] hover:bg-[#F2A41F] text-[#ECEAE4] hover:text-[#0D1114] border border-[#28343C] font-mono text-xs uppercase tracking-wider transition-all active:scale-95 group shadow-md"
            >
              <span>Begin Presentation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-[11px] font-mono text-[#8C969B] hidden sm:inline">
              Press → to advance
            </span>
          </motion.div>
        </div>

        {/* Bottom Regional Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase"
        >
          ANDHRA PRADESH · TELANGANA · 2026
        </motion.div>

      </div>

      {/* RIGHT HALF: VISUAL CAMPUS PHOTO & AFFILIATED DATA TABLE */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden"
      >
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/s1.jpeg" 
            alt="Campus Students" 
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1114] via-[#0D1114]/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1114] via-transparent to-[#0D1114]/60 z-10" />
        </div>

        {/* Overlay Table: Affiliated Colleges */}
        <div className="relative z-20 w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#0D1114]/85 border border-[#28343C] backdrop-blur-md shadow-2xl">
          <div className="font-mono text-xs tracking-widest text-[#8C969B] uppercase mb-4 font-semibold pb-2 border-b border-[#28343C]">
            JNTU FAMILY · AFFILIATED COLLEGES
          </div>

          <div className="space-y-3 font-sans">
            {COLLEGES.map((col) => (
              <div key={col.name} className="flex items-baseline justify-between border-b border-[#1C252A] pb-2 text-sm">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-[#ECEAE4]">{col.name}</span>
                  {col.sub && (
                    <span className="font-mono text-[10px] text-[#8C969B] tracking-wider uppercase">
                      {col.sub}
                    </span>
                  )}
                </div>
                <span className="font-mono font-bold text-base text-[#ECEAE4]">
                  {col.count}
                </span>
              </div>
            ))}
          </div>

          {/* Total Line in Golden Amber */}
          <div className="mt-4 pt-3 border-t-2 border-[#F2A41F]/40 flex items-baseline justify-between">
            <span className="text-base sm:text-lg font-bold text-[#F2A41F]">
              Total affiliated colleges
            </span>
            <span className="font-mono font-black text-2xl sm:text-3xl text-[#F2A41F]">
              586
            </span>
          </div>

          <div className="mt-4 text-[10px] font-mono text-[#8C969B] leading-tight">
            APPROXIMATE · UNIVERSITY WEBSITES, COLLEGEDUNIA, INDCAREER · 2023–26
          </div>
        </div>

      </motion.div>

    </div>
  );
}
