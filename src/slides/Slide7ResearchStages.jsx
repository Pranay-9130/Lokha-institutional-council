import React from 'react';
import { motion } from 'framer-motion';

const STAGES = [
  { step: '01', name: 'Read', desc: 'Global papers, IEEE repositories, and empirical patent records.' },
  { step: '02', name: 'Analyse', desc: 'Regional agriculture, transit telemetry, and sensor databases.' },
  { step: '03', name: 'Investigate', desc: 'Empirical lab tests, algorithmic simulation, and benchmarking.' },
  { step: '04', name: 'Write', desc: 'Structured academic papers meeting international publishing standards.' },
  { step: '05', name: 'Share', desc: 'Presentations at global conferences and open-source repositories.' },
];

export default function Slide7ResearchStages() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT HALF */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-semibold"
        >
          FIVE-STAGE RESEARCH LIFECYCLE
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Research as a habit. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Published globally.
            </span>
          </motion.h1>

          {/* 5 Stages Horizontal List */}
          <div className="mt-8 space-y-2.5">
            {STAGES.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-3 border-b border-[#1C252A] pb-2 text-xs"
              >
                <span className="font-mono font-bold text-[#F2A41F]">{s.step}</span>
                <span className="font-bold text-[#ECEAE4] w-24">{s.name}</span>
                <span className="text-[#8C969B] flex-1">{s.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          OUR PROBLEMS · RESEARCHED HERE · BY OUR STUDENTS
        </div>

      </div>

      {/* RIGHT HALF: LIVE GUEST PROFESSOR STREAM OVERLAY */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden"
      >
        <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-[#28343C] shadow-2xl bg-[#1C252A]">
          <img 
            src="/images/s16.jpeg" 
            alt="International Lecture" 
            className="w-full h-72 sm:h-84 object-cover filter brightness-[0.8] contrast-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1114] via-transparent to-black/50" />

          {/* Top Live Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#C3362B] text-white font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              LIVE LAB
            </span>
            <span className="font-mono text-[10px] text-white/90 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
              International Guest Professor
            </span>
          </div>

          {/* Bottom Stream Info */}
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0D1114]/90 border border-[#28343C] backdrop-blur-md flex items-center justify-between text-xs font-mono">
            <div>
              <div className="font-bold text-[#ECEAE4]">Live Global Review</div>
              <div className="text-[10px] text-[#8C969B]">London · Boston · Anantapur · Hyderabad</div>
            </div>
            <span className="text-[#F2A41F] font-bold">2,184 watching</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
