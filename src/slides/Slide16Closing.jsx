import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, LayoutGrid } from 'lucide-react';

export default function Slide16Closing({ onRestart, onToggleOverview }) {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Students Photo with Dark Vignette */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/images/s19.jpeg" 
          alt="Graduating Cohort" 
          className="w-full h-full object-cover filter brightness-[0.75] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1114] via-[#0D1114]/85 to-[#0D1114]/60" />
      </div>

      {/* LEFT HALF: THE GRAND STATEMENT */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Wordmark */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3.5"
        >
          <img 
            src="/lokha-logo.png" 
            alt="Lokha Logo" 
            className="w-9 h-9 object-contain filter drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
          />
          <span className="font-mono text-xs font-bold tracking-[0.22em] text-[#ECEAE4] uppercase">
            LOKHA INSTITUTIONAL COUNCIL
          </span>
        </motion.div>

        {/* Center: Quote & Thank You */}
        <div className="my-auto py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-none text-[#ECEAE4] font-display"
          >
            365°
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#ECEAE4] leading-tight tracking-tight mt-1"
          >
            Starting now.
          </motion.h1>

          <div className="mt-8 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-[#ECEAE4] leading-snug"
            >
              “The future is not something students should wait for.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-serif-italic font-normal text-[#F2A41F] leading-snug"
            >
              “It is something they should be prepared to build.”
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 flex items-center gap-3"
          >
            <button
              onClick={onRestart}
              className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#1C252A] hover:bg-[#F2A41F] text-[#ECEAE4] hover:text-[#0D1114] border border-[#28343C] font-mono text-xs uppercase tracking-wider transition-all active:scale-95 group"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay Presentation</span>
            </button>

            <button
              onClick={onToggleOverview}
              className="flex items-center gap-2 px-5 py-2.5 rounded bg-[#1C252A] hover:bg-[#28343C] text-[#ECEAE4] border border-[#28343C] font-mono text-xs uppercase tracking-wider transition-all"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#F2A41F]" />
              <span>All 16 Slides</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          LOKHA INSTITUTIONAL COUNCIL · THANK YOU
        </div>

      </div>

      {/* RIGHT HALF: GRADUATION COHORT IMAGE */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden z-10"
      >
        <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#28343C] shadow-2xl bg-[#1C252A]">
          <img 
            src="/images/s19.jpeg" 
            alt="Students" 
            className="w-full h-80 sm:h-96 object-cover filter brightness-[0.8] contrast-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1114] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 font-mono text-center">
            <span className="text-xl font-black text-white block mb-1">Thank You.</span>
            <span className="text-xs text-[#F2A41F]">Ready to Partner Across 586 Campuses</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
