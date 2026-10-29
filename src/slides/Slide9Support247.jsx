import React from 'react';
import { motion } from 'framer-motion';

export default function Slide9Support247() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Night Desk Photo */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img 
          src="/images/s8.jpeg" 
          alt="Night Desk" 
          className="w-full h-full object-cover filter brightness-[0.7] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1114] via-[#0D1114]/85 to-[#0D1114]/60" />
      </div>

      {/* LEFT HALF */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-semibold"
        >
          CONTINUOUS INFRASTRUCTURE COVERAGE
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-none text-[#ECEAE4] font-display"
          >
            24×7
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight mt-1"
          >
            Support that <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              never logs off.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Technology fails at the worst possible moment: the night before a submission, five minutes before an online exam. When that happens, your faculty should not have to wait until Monday.
          </motion.p>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          CONTINUOUS MONITORING · MULTI-TIER ESCALATION
        </div>

      </div>

      {/* RIGHT HALF: 24-HOUR ROTATING DIAL MOTIF */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden z-10"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-[#28343C] flex items-center justify-center bg-[#0D1114]/90 backdrop-blur-md shadow-2xl">
          
          {/* Rotating scan hand in gold */}
          <motion.div
            className="absolute w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#F2A41F] to-[#FFD27A] origin-right left-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />

          {/* Center Hub */}
          <div className="w-32 h-32 rounded-full bg-[#1C252A] border border-[#F2A41F]/40 flex flex-col items-center justify-center text-center p-2 shadow-inner">
            <span className="font-mono text-2xl font-black text-white">24×7</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#F2A41F] mt-0.5">Continuous</span>
          </div>

          {/* Hour markers */}
          <span className="absolute top-3 font-mono text-[10px] text-[#8C969B]">00:00</span>
          <span className="absolute right-4 font-mono text-[10px] text-[#8C969B]">06:00</span>
          <span className="absolute bottom-3 font-mono text-[10px] text-[#8C969B]">12:00</span>
          <span className="absolute left-4 font-mono text-[10px] text-[#8C969B]">18:00</span>
        </div>
      </motion.div>

    </div>
  );
}
