import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, LayoutGrid } from 'lucide-react';

export default function Slide19Closing({ onRestart, onToggleOverview }) {
  // 365 ticks for the full-year dial ring
  const ticks = useMemo(() => {
    const list = [];
    const R = 400;
    const cx = 440;
    const cy = 440;
    for (let i = 0; i < 365; i++) {
      const a = (i / 365) * Math.PI * 2;
      const isMajor = !(i % 30);
      const r1 = R - (isMajor ? 20 : 8);
      list.push({
        id: i,
        x1: cx + Math.cos(a) * r1,
        y1: cy + Math.sin(a) * r1,
        x2: cx + Math.cos(a) * R,
        y2: cy + Math.sin(a) * R,
        isMajor,
        stroke: isMajor ? '#F2A41F' : 'rgba(236, 234, 228, 0.35)',
        strokeWidth: isMajor ? 2.4 : 0.8
      });
    }
    return list;
  }, []);

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114] flex flex-col items-center justify-center text-center p-8">
      
      {/* Background Photography with Soft Contrast */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s19.jpeg"
          alt="Inspiring campus architecture"
          className="w-full h-full object-cover filter brightness-[0.25] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0D1114]/80 to-[#0D1114]"></div>
      </div>

      {/* Rotating 365-Day Circumference Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          className="w-[680px] h-[680px] sm:w-[840px] sm:h-[840px]"
        >
          <svg viewBox="0 0 880 880" className="w-full h-full opacity-60">
            <circle cx="440" cy="440" r="400" fill="none" stroke="rgba(236, 234, 228, 0.15)" strokeWidth="1.5" />
            {ticks.map((t) => (
              <line
                key={t.id}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                stroke={t.stroke}
                strokeWidth={t.strokeWidth}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Main Closing Foreground Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        
        {/* Prominent Official Council Logo & Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#1C252A]/90 border border-[#28343C] shadow-xl mb-4"
        >
          <img
            src="/lokha-logo.png"
            alt="Lokha Logo"
            className="w-7 h-7 object-contain drop-shadow"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#ECEAE4] uppercase">
            LOKHA INSTITUTIONAL COUNCIL
          </span>
        </motion.div>

        {/* 365° Giant Numeral */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-extrabold text-7xl sm:text-9xl lg:text-[160px] text-[#ECEAE4] font-display leading-none tracking-tight drop-shadow-2xl"
        >
          365°
        </motion.div>

        {/* Starting now */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif-italic text-4xl sm:text-6xl text-[#F2A41F] mt-2 drop-shadow"
        >
          Starting now.
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-[#ECEAE4]/90 max-w-xl font-sans italic leading-relaxed"
        >
          “The future is not something students should wait for. It is something they should be prepared to build.”
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-3 text-xs sm:text-sm text-[#8C969B] font-mono tracking-wider"
        >
          Three hundred and sixty-five degrees. Three hundred and sixty-five days. Across 586 campuses.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {onRestart && (
            <button
              onClick={onRestart}
              className="px-6 py-2.5 rounded-xl bg-[#F2A41F] text-[#0D1114] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#F5BA52] transition-colors shadow-lg shadow-[#F2A41F]/20 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Replay Presentation
            </button>
          )}

          {onToggleOverview && (
            <button
              onClick={onToggleOverview}
              className="px-6 py-2.5 rounded-xl bg-[#1C252A] text-[#ECEAE4] border border-[#28343C] font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#253138] transition-colors shadow-md cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4 text-[#F2A41F]" />
              View All 19 Slides
            </button>
          )}
        </motion.div>

      </div>

    </div>
  );
}
