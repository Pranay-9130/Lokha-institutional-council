import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Slide4Microsoft365() {
  // 10x10 building facade windows: 90 lit, 10 off
  const windows = useMemo(() => {
    // 10 fixed dark window indices out of 100
    const darkIndices = new Set([7, 19, 32, 48, 51, 64, 73, 85, 91, 98]);
    const list = [];
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        const i = r * 10 + c;
        const isDark = darkIndices.has(i);
        // variation in warm lit color
        const litColors = ['#F2A41F', '#F5BA52', '#E59210', '#F8CA76'];
        const color = isDark ? '#1C252A' : litColors[i % 4];
        list.push({
          id: i,
          x: 160 + c * 49,
          y: 170 + r * 86,
          isDark,
          color,
          delay: 0.3 + (i * 0.015)
        });
      }
    }
    return list;
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT COLUMN: Headings & Statistics */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-[#ECEAE4] uppercase"
        >
          Microsoft 365 · global footprint · 2026
        </motion.div>

        {/* Center: Main Headline & Stats */}
        <div className="my-auto py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
              Microsoft 365.
            </h1>
            <div className="font-serif-italic text-3xl sm:text-4xl lg:text-6xl text-[#F2A41F] mt-1">
              Where the world works.
            </div>
          </motion.div>

          {/* 4 Stats Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4 rounded-xl bg-[#151C20] border border-[#222B30]"
            >
              <span className="font-extrabold text-3xl sm:text-4xl text-[#ECEAE4] font-display block">450M+</span>
              <span className="text-xs text-[#ECEAE4] font-medium block mt-1">Paid commercial seats</span>
              <span className="text-[10px] text-[#8C969B] block font-mono mt-0.5">Microsoft earnings · Jan 2026</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="p-4 rounded-xl bg-[#151C20] border border-[#222B30]"
            >
              <span className="font-extrabold text-3xl sm:text-4xl text-[#ECEAE4] font-display block">320M+</span>
              <span className="text-xs text-[#ECEAE4] font-medium block mt-1">Teams monthly active users</span>
              <span className="text-[10px] text-[#8C969B] block font-mono mt-0.5">Microsoft earnings · Oct 2023</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-4 rounded-xl bg-[#151C20] border border-[#222B30]"
            >
              <span className="font-extrabold text-3xl sm:text-4xl text-[#ECEAE4] font-display block">30M+</span>
              <span className="text-xs text-[#ECEAE4] font-medium block mt-1">Paid Copilot seats</span>
              <span className="text-[10px] text-[#8C969B] block font-mono mt-0.5">Microsoft earnings · Jul 2026</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="p-4 rounded-xl bg-[#151C20] border border-[#222B30]"
            >
              <span className="font-extrabold text-3xl sm:text-4xl text-[#ECEAE4] font-display block">7.6M+</span>
              <span className="text-xs text-[#ECEAE4] font-medium block mt-1">Companies on Office 365</span>
              <span className="text-[10px] text-[#8C969B] block font-mono mt-0.5">Enlyft estimate</span>
            </motion.div>
          </div>
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[11px] text-[#8C969B] font-mono leading-relaxed"
        >
          Sources: Microsoft FY24 Q1, FY26 Q1, Q2 and Q4 earnings · Enlyft · each window is 1% of the Fortune 500
        </motion.div>

      </div>

      {/* RIGHT COLUMN: 90%+ Stat and Illuminated Building Facade */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-hidden">
        
        {/* Top 90%+ Stat */}
        <div className="w-full max-w-md text-left mb-4 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-extrabold text-6xl sm:text-7xl lg:text-8xl text-[#F2A41F] font-display leading-none"
          >
            90%+
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-mono text-xs sm:text-sm text-[#ECEAE4] mt-2 tracking-wide"
          >
            of the Fortune 500 use M365 Copilot
          </motion.div>
        </div>

        {/* Building Facade Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative w-full max-w-[420px] aspect-[760/1080] max-h-[560px]"
        >
          <svg
            viewBox="0 0 760 1080"
            className="w-full h-full drop-shadow-2xl"
          >
            {/* Building Base & Outline */}
            <rect x="120" y="120" width="560" height="920" fill="#151C20" stroke="#222B30" strokeWidth="2" rx="4" />
            <rect x="100" y="100" width="600" height="26" fill="#1C252A" rx="2" />
            
            {/* Antenna Mast & Warning Light */}
            <rect x="386" y="30" width="6" height="72" fill="#2A3439" />
            <circle cx="389" cy="30" r="6" fill="#DC2626" className="animate-pulse" />
            <circle cx="389" cy="30" r="14" fill="#DC2626" opacity="0.25" className="animate-ping" />

            {/* 100 Windows */}
            {windows.map((w) => (
              <g key={w.id}>
                <rect
                  x={w.x}
                  y={w.y}
                  width="34"
                  height="58"
                  rx="3"
                  fill={w.color}
                  opacity={w.isDark ? 0.35 : 0.95}
                  className="transition-all duration-700"
                />
                {!w.isDark && (
                  <rect
                    x={w.x + 2}
                    y={w.y + 2}
                    width="30"
                    height="18"
                    rx="1"
                    fill="#FFFFFF"
                    opacity="0.2"
                  />
                )}
              </g>
            ))}

            {/* Ground Base & Label */}
            <rect x="120" y="1040" width="560" height="40" fill="#0F1417" />
            <text
              x="400"
              y="1066"
              textAnchor="middle"
              fill="#8C969B"
              className="font-mono text-[16px] tracking-[0.25em] font-medium"
            >
              90 OF 100 LIT
            </text>
          </svg>
        </motion.div>

      </div>

    </div>
  );
}
