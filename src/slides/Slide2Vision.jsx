import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Cpu, Microscope, Briefcase, Rocket } from 'lucide-react';

const NODES = [
  { name: 'Education', icon: GraduationCap, sub: '586 Campuses' },
  { name: 'Technology', icon: Cpu, sub: 'M365 & JetBrains' },
  { name: 'Research', icon: Microscope, sub: 'Local Solutions' },
  { name: 'Employment', icon: Briefcase, sub: 'Day-One Value' },
  { name: 'Innovation', icon: Rocket, sub: 'Funded Startups' }
];

export default function Slide2Vision() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT HALF */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs tracking-widest text-[#8C969B] uppercase"
        >
          HERE · TOKYO · 20 YEARS
        </motion.div>

        {/* Center: Headline */}
        <div className="my-auto py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-none text-[#ECEAE4] font-display"
          >
            20
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight mt-1"
          >
            The gap. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Measured in years.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 flex items-center gap-8 font-mono text-xs"
          >
            <div>
              <span className="text-2xl font-bold text-[#8C969B] block">2006</span>
              <span className="text-[#8C969B] uppercase tracking-wider text-[11px]">Where we are</span>
            </div>
            <ArrowRight className="w-5 h-5 text-[#F2A41F]" />
            <div>
              <span className="text-2xl font-bold text-[#F2A41F] block">2026</span>
              <span className="text-[#ECEAE4] uppercase tracking-wider text-[11px]">Where they are</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            In technology and research, countries like Japan and the UK are roughly twenty years ahead. A gap measured in years can be closed in years. That is the work.
          </motion.p>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          CLOSING THE 20-YEAR LAG · 2026–2030
        </div>

      </div>

      {/* RIGHT HALF: COMPARISON VISUALS & PIPELINE */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex flex-col justify-center p-6 sm:p-12 overflow-hidden gap-6"
      >
        {/* Visual Split Photos */}
        <div className="grid grid-cols-2 gap-3.5 w-full max-w-lg mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#28343C] h-48 sm:h-60 group shadow-lg">
            <img 
              src="/images/s2_0.jpeg" 
              alt="Classroom" 
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]" 
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-[#0D1114]/80 text-[10px] font-mono text-[#8C969B]">
              Standard Campus Lab
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#F2A41F]/40 h-48 sm:h-60 group shadow-lg">
            <img 
              src="/images/s2_1.jpeg" 
              alt="Tokyo Tech City" 
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]" 
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-[#0D1114]/80 text-[10px] font-mono text-[#F2A41F]">
              Tokyo Advanced R&D
            </div>
          </div>
        </div>

        {/* The 5-Node Animated Pipeline */}
        <div className="w-full max-w-lg mx-auto p-4 rounded-xl bg-[#0D1114]/90 border border-[#28343C] backdrop-blur-md">
          <div className="font-mono text-[10px] tracking-widest text-[#8C969B] uppercase mb-3 text-center">
            UNIFIED INSTITUTIONAL PIPELINE
          </div>
          <div className="grid grid-cols-5 gap-2">
            {NODES.map((n, i) => {
              const Icon = n.icon;
              return (
                <div key={n.name} className="flex flex-col items-center text-center p-2 rounded-lg bg-[#1C252A] border border-[#28343C]">
                  <Icon className="w-4 h-4 text-[#F2A41F] mb-1" />
                  <span className="text-[11px] font-bold text-white leading-tight">{n.name}</span>
                  <span className="text-[8px] font-mono text-[#8C969B] mt-0.5">{n.sub}</span>
                </div>
              );
            })}
          </div>
        </div>

      </motion.div>

    </div>
  );
}
