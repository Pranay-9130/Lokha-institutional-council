import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Slide18CarryCost() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 75;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Photography with Soft Contrast */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s18.jpeg"
          alt="Students learning in technology classroom"
          className="w-full h-full object-cover filter brightness-[0.35] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-[#0D1114]/60"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch p-8 sm:p-12 lg:p-16 justify-between">
        
        {/* LEFT COLUMN: Headings & Count-Up */}
        <div className="flex-1 flex flex-col justify-between max-w-xl">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest text-[#ECEAE4] uppercase"
          >
            Oxford & Cambridge-grade tools on every JNTU campus
          </motion.div>

          <div className="my-auto py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
                We carry
              </h1>
              <div className="font-serif-italic text-4xl sm:text-6xl lg:text-7xl text-[#F2A41F] mt-1">
                the cost.
              </div>
            </motion.div>

            {/* Dynamic Count-Up Display */}
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#F2A41F] tracking-tight leading-none">
                {count >= 70 ? '70–75' : count}%
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#8C969B]">
                Borne by Lokha Institution Council
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
            >
              Everything shown today—Microsoft 365, JetBrains professional developer tools, live faculty tele-presence, 24×7 support, and cloud telemetry—is provided as a single unified annual subscription per student. We carry the bulk of the financial commitment so your faculty can focus solely on teaching.
            </motion.p>
          </div>

          <div className="text-[11px] text-[#8C969B] font-mono tracking-wider uppercase">
            70–75% COUNCIL SUBSIDY · 25–30% STUDENT SHARE
          </div>

        </div>

        {/* RIGHT COLUMN: Official Printed Slip with Rubber Stamp */}
        <div className="flex-1 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[480px] bg-[#F7F5EE] text-[#1B2428] rounded-xl p-6 sm:p-8 shadow-2xl border border-black/15 select-none"
          >
            {/* Slip Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#1B2428] font-mono text-xs text-[#556066]">
              <span className="font-bold text-[#0D1114]">Lokha technology pass · per student</span>
              <span>AY 2026–27</span>
            </div>

            <div className="mt-5 mb-4">
              <h4 className="font-mono text-xs tracking-wider uppercase text-[#556066] font-bold">
                Who pays for it
              </h4>
            </div>

            {/* Rows */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-[#D8D4C7]">
                <span className="text-[#556066]">Microsoft 365 · tools, training & support, per year</span>
                <b className="text-sm font-bold text-[#0D1114]">100%</b>
              </div>

              <div className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[#ECE8DB] border border-[#DDD8C9]">
                <span className="font-bold text-[#0D1114]">Borne by Lokha Institution Council</span>
                <b className="text-base sm:text-lg font-black text-[#F2A41F]">70–75%</b>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-[#D8D4C7]">
                <span className="text-[#556066]">Student share</span>
                <b className="text-sm font-bold text-[#0D1114]">25–30%</b>
              </div>
            </div>

            {/* Slip Footer */}
            <div className="mt-8 pt-3 border-t border-[#D8D4C7] flex items-center justify-between font-mono text-[10px] text-[#7A7363]">
              <span>Partner institution copy</span>
              <span>Ref LIC-0586-2026</span>
            </div>

            {/* Red Rubber Stamp Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 1.4, rotate: -24 }}
              animate={{ opacity: 0.9, scale: 1, rotate: -16 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-6 right-6 border-4 border-red-700/80 rounded-lg p-2 text-center text-red-700/90 font-mono select-none pointer-events-none drop-shadow-md"
            >
              <div className="text-[8px] font-black tracking-widest uppercase">
                LOKHA · INSTITUTION COUNCIL
              </div>
              <div className="font-display font-black text-2xl tracking-tighter my-0.5">
                70–75%
              </div>
              <div className="text-[10px] font-black tracking-widest uppercase border-t border-red-700/60 pt-0.5">
                PAID
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>

    </div>
  );
}
