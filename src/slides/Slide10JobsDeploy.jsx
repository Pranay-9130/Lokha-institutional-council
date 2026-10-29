import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Slide10JobsDeploy() {
  const dots = useMemo(() => {
    const cols = 40;
    const rows = 25;
    const gx = 800 / cols;
    const gy = 760 / rows;
    
    // Seeded selection of 64 intern track dots
    const internIndices = new Set([
      14, 42, 78, 105, 133, 167, 192, 218, 245, 273, 301, 329, 355, 388,
      412, 439, 461, 489, 512, 538, 566, 591, 619, 644, 672, 703, 728, 755,
      782, 811, 839, 864, 892, 917, 946, 971, 33, 85, 142, 204, 280, 344,
      408, 472, 534, 600, 660, 720, 788, 850, 910, 960, 50, 110, 175, 235,
      295, 360, 425, 490, 550, 615, 680, 745
    ]);

    const list = [];
    for (let i = 0; i < 1000; i++) {
      const cx = (i % cols) * gx + gx / 2;
      const cy = Math.floor(i / cols) * gy + gy / 2;
      const isIntern = internIndices.has(i);
      list.push({ id: i, cx, cy, isIntern });
    }
    return list;
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT COLUMN: 1,000 Jobs Headline & Copy */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-bold"
        >
          DIRECT PLACEMENT & INTERNSHIP PIPELINE
        </motion.div>

        {/* Center: Main Stat & Headline */}
        <div className="my-auto py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl text-[#ECEAE4] font-display leading-none tracking-tight"
          >
            1,000
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
              jobs, ready to deploy.
            </h1>
            <div className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl text-[#F2A41F] mt-1">
              Only for JNTU students.
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Every dot represents a real project role reserved exclusively for students across our 586 institutions. High performers advance directly to our paid intern track and build scalable solutions.
          </motion.p>
        </div>

        {/* Bottom Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[11px] text-[#8C969B] font-mono tracking-wider uppercase"
        >
          RESERVED CAPACITY · VERIFIED WORKPLACE READINESS
        </motion.div>

      </div>

      {/* RIGHT COLUMN: 1,000 Dots SVG Matrix */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative w-full max-w-[560px] aspect-[800/760]"
        >
          <svg viewBox="0 0 800 760" className="w-full h-full drop-shadow-2xl">
            {dots.map((d) => (
              <circle
                key={d.id}
                cx={d.cx}
                cy={d.cy}
                r={d.isIntern ? 5.5 : 4}
                fill={d.isIntern ? '#F2A41F' : '#ECEAE4'}
                opacity={d.isIntern ? 1 : 0.25}
                className={d.isIntern ? 'animate-pulse' : 'transition-opacity duration-300 hover:opacity-80'}
              />
            ))}
          </svg>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-4 flex items-center gap-8 font-mono text-xs text-[#ECEAE4]"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ECEAE4] opacity-50"></span>
            <span className="text-[#8C969B]">One role (936)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F2A41F]"></span>
            <span className="text-[#F2A41F] font-bold">Intern track (64)</span>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
