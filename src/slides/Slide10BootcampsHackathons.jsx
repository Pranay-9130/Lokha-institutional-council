import React from 'react';
import { motion } from 'framer-motion';

export default function Slide10BootcampsHackathons() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Hackathon Photo */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/images/s12.jpeg" 
          alt="Hackathon Team" 
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
          BOOTCAMPS · HACKATHONS · WORKSHOPS · MENTORS
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Build with people <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              who've built.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Skills grow fastest around people who have already done it. We will collaborate with successful founders, engineers and leaders and bring them to your students through bootcamps, hackathons and live workshops.
          </motion.p>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          48 HOURS · A PROBLEM · A TEAM · A REAL MENTOR
        </div>

      </div>

      {/* RIGHT HALF: 48-HOUR SPRINT TIMER & TEAM OVERLAY */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden z-10"
      >
        <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#1C252A]/90 border border-[#28343C] shadow-2xl backdrop-blur-md text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-[#8C969B] mb-2 font-semibold">
            HACKATHON ENDS IN
          </div>

          <div className="font-display font-black text-5xl sm:text-6xl text-[#F2A41F] tracking-tight mb-4">
            47:59:59
          </div>

          <div className="p-4 rounded-xl bg-[#0D1114] border border-[#28343C] text-left text-xs font-mono space-y-2">
            <div className="flex justify-between text-[#8C969B]">
              <span>Team Assignment</span>
              <span className="text-[#ECEAE4]">Cross-Campus Squad</span>
            </div>
            <div className="flex justify-between text-[#8C969B]">
              <span>Assigned Mentor</span>
              <span className="text-[#F2A41F]">Senior Tech Founder</span>
            </div>
            <div className="flex justify-between text-[#8C969B]">
              <span>Challenge Track</span>
              <span className="text-emerald-400">Autonomous Regional AI</span>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
