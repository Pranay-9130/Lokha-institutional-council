import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MAP } from '../data/mapData';

export default function Slide15InstitutionsMap() {
  const apts = MAP.apts;

  // Build the 586 dots (570 original + 16 jittered copies to fill up to exactly 586)
  const dots = useMemo(() => {
    if (!apts || !apts.dots) return [];
    const base = apts.dots.slice();
    // Deterministic pseudo-jitter for the 16 remaining dots
    let seed = 42;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    while (base.length < 586) {
      const idx = Math.floor(rnd() * apts.dots.length);
      const [x, y] = apts.dots[idx];
      base.push([x + (rnd() - 0.5) * 10, y + (rnd() - 0.5) * 10]);
    }
    return base;
  }, [apts]);

  const labelOffsets = {
    Hyderabad: { dx: -18, dy: -14, anchor: 'end' },
    Amaravati: { dx: 24, dy: 34, anchor: 'start' },
    Visakhapatnam: { dx: -18, dy: -22, anchor: 'end' },
    Tirupati: { dx: 18, dy: 30, anchor: 'start' },
    Warangal: { dx: 16, dy: -16, anchor: 'start' }
  };

  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT COLUMN: 586 Numeral & Network Copy */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-bold"
        >
          REGIONAL FOOTPRINT · UNIFIED NETWORK
        </motion.div>

        {/* Center: Main Stat & Headline */}
        <div className="my-auto py-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl text-[#ECEAE4] font-display leading-none tracking-tight"
          >
            586
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
              institutions.
            </h1>
            <div className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl text-[#F2A41F] mt-1">
              Medical colleges too.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-4 font-mono text-xs tracking-wide text-[#ECEAE4]"
          >
            Andhra Pradesh · Telangana
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Covering engineering, pharmacy, management, architecture, and medical colleges across Andhra Pradesh and Telangana. When one institution builds a breakthrough, all 586 can benefit.
          </motion.p>
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[11px] text-[#8C969B] font-mono"
        >
          Dots show indicative placement across university jurisdictions
        </motion.div>

      </div>

      {/* RIGHT COLUMN: Interactive Map with 586 Glowing Dots */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full max-w-[640px] aspect-[1000/954]"
        >
          <svg viewBox="0 0 1000 954" className="w-full h-full drop-shadow-2xl">
            {/* Telangana Boundary */}
            <path
              d={apts.ts}
              fill="#151C20"
              stroke="#28343C"
              strokeWidth="1.8"
              className="transition-colors hover:fill-[#1C252A]"
            />

            {/* Andhra Pradesh Boundary */}
            <path
              d={apts.ap}
              fill="#182126"
              stroke="#2E3C45"
              strokeWidth="1.8"
              className="transition-colors hover:fill-[#1F2B32]"
            />

            {/* 586 Campus Dots */}
            {dots.map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={3.8}
                fill="#F2A41F"
                opacity={0.7}
                className="transition-all duration-300 hover:scale-150 hover:opacity-100"
              />
            ))}

            {/* Amaravati Pulse Highlight */}
            {apts.labels && apts.labels.Amaravati && (
              <g>
                <circle
                  cx={apts.labels.Amaravati[0]}
                  cy={apts.labels.Amaravati[1]}
                  r={18}
                  fill="#F2A41F"
                  opacity={0.3}
                  className="animate-ping"
                />
                <circle
                  cx={apts.labels.Amaravati[0]}
                  cy={apts.labels.Amaravati[1]}
                  r={8}
                  fill="#F2A41F"
                />
              </g>
            )}

            {/* Major City Nodes & Labels */}
            {apts.labels &&
              Object.entries(apts.labels).map(([city, [x, y]]) => {
                const off = labelOffsets[city] || { dx: 14, dy: 14, anchor: 'start' };
                return (
                  <g key={city}>
                    <circle cx={x} cy={y} r={5} fill="#ECEAE4" stroke="#0D1114" strokeWidth="1.5" />
                    <text
                      x={x + off.dx}
                      y={y + off.dy}
                      textAnchor={off.anchor}
                      fill="#ECEAE4"
                      className="font-mono text-xs font-bold tracking-wider drop-shadow-md"
                    >
                      {city}
                    </text>
                  </g>
                );
              })}
          </svg>
        </motion.div>
      </div>

    </div>
  );
}
