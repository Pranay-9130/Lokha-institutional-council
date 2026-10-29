import React from 'react';
import { motion } from 'framer-motion';

export default function Slide12StudentBenefits() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Perks Photo */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/images/s11.jpeg" 
          alt="Student Pass" 
          className="w-full h-full object-cover filter brightness-[0.75] contrast-125"
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
          UNIDAYS-STYLE VERIFIED STUDENT PRICING
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Student offers. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Like students abroad get.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Students abroad enjoy verified student passes unlocking discounts on laptops, software, and tools. We bring that exact model here: verified credentials that open doors and save real money.
          </motion.p>

          <div className="mt-6 p-3 rounded-xl bg-[#1C252A] border border-[#28343C] text-[11px] font-mono text-[#8C969B]">
            *UNiDAYS operates independently for commercial consumer discounts; Lokha pass focuses on academic software, cloud compute, and developer tools.
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          VERIFIED STUDENT ADVANTAGE · WORLD-CLASS ACCESS
        </div>

      </div>

      {/* RIGHT HALF: VERIFIED DIGITAL PASS CARD */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden z-10"
      >
        <div className="w-full max-w-sm p-6 rounded-2xl bg-[#1C252A] border border-[#F2A41F]/40 shadow-2xl text-left space-y-4">
          <div className="flex items-center justify-between border-b border-[#28343C] pb-3">
            <span className="font-mono text-xs text-[#F2A41F] font-bold">VERIFIED STUDENT ID</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Active</span>
          </div>

          <div className="space-y-1 font-mono">
            <div className="text-base font-bold text-white">JNTU Student Pass</div>
            <div className="text-xs text-[#8C969B]">Academic Year 2026–27</div>
          </div>

          <div className="p-3 rounded-xl bg-[#0D1114] space-y-2 text-xs font-mono">
            <div className="flex justify-between text-[#8C969B]">
              <span>Hardware Discounts</span>
              <span className="text-[#ECEAE4]">Apple · Dell · Lenovo</span>
            </div>
            <div className="flex justify-between text-[#8C969B]">
              <span>Cloud & Dev Credits</span>
              <span className="text-[#F2A41F]">Azure · JetBrains Pro</span>
            </div>
            <div className="flex justify-between text-[#8C969B]">
              <span>Global Research Papers</span>
              <span className="text-emerald-400">Open IEEE Access</span>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
