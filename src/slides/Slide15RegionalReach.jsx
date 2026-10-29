import React from 'react';
import { motion } from 'framer-motion';
import { MAP } from '../data/mapData';

export default function Slide15RegionalReach() {
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
          ANDHRA PRADESH · TELANGANA
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-none text-[#ECEAE4] font-display"
          >
            570+
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight mt-1"
          >
            institutions. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Medical colleges too.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Now look at the scale. Over five hundred and seventy institutions across Andhra Pradesh and Telangana, covering engineering, pharmacy, management, architecture, and medical colleges.
          </motion.p>

          <div className="mt-6 p-3 rounded-xl bg-[#1C252A] border border-[#28343C] text-[11px] font-mono text-[#8C969B]">
            *Figure subject to formal internal confirmation and university affiliation register sync (approx. 570–586 campuses).
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          LARGEST CONNECTED REGIONAL LEARNING NETWORK
        </div>

      </div>

      {/* RIGHT HALF: VECTOR MAP OF AP & TELANGANA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-4 sm:p-8 z-10"
      >
        <svg 
          viewBox="0 0 1000 954" 
          className="w-full h-full max-h-[640px] object-contain"
        >
          {/* Andhra Pradesh Vector */}
          {MAP.apts?.ap && (
            <path
              d={MAP.apts.ap}
              fill="#141E24"
              stroke="#2E3C45"
              strokeWidth="2"
            />
          )}
          {/* Telangana Vector */}
          {MAP.apts?.ts && (
            <path
              d={MAP.apts.ts}
              fill="#1C272E"
              stroke="#F2A41F"
              strokeWidth="2"
            />
          )}

          {/* Key Dots */}
          <circle cx="480" cy="420" r="7" fill="#F2A41F" />
          <text x="500" y="425" fill="#ECEAE4" fontSize="18" fontFamily="IBM Plex Mono" fontWeight="bold">Hyderabad</text>

          <circle cx="620" cy="580" r="7" fill="#F2A41F" />
          <text x="640" y="585" fill="#ECEAE4" fontSize="18" fontFamily="IBM Plex Mono" fontWeight="bold">Amaravati</text>

          <circle cx="780" cy="380" r="6" fill="#ECEAE4" />
          <text x="800" y="385" fill="#8C969B" fontSize="16" fontFamily="IBM Plex Mono">Kakinada</text>

          <circle cx="410" cy="720" r="6" fill="#ECEAE4" />
          <text x="430" y="725" fill="#8C969B" fontSize="16" fontFamily="IBM Plex Mono">Anantapur</text>
        </svg>
      </motion.div>

    </div>
  );
}
