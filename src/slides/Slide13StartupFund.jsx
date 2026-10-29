import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Slide13StartupFund() {
  const dateBoxes = useMemo(() => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear());
    return `${day}${month}${year}`.split('');
  }, []);

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Photography with Soft Contrast */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s13.jpeg"
          alt="Hands sketching prototype diagram"
          className="w-full h-full object-cover filter brightness-[0.35] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-[#0D1114]/60"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch p-8 sm:p-12 lg:p-16 justify-between">
        
        {/* LEFT: Headline & Startup Guidance Context */}
        <div className="flex-1 flex flex-col justify-between max-w-md">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-bold"
          >
            LOKHA PROTOTYPING & SEED CAPITAL
          </motion.div>

          <div className="my-auto py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
                Good idea?
              </h1>
              <div className="font-serif-italic text-4xl sm:text-6xl lg:text-7xl text-[#F2A41F] mt-1">
                Funded.
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-sm text-[#8C969B] leading-relaxed font-sans"
            >
              Some of your students already hold the seed of an extraordinary company. Today that ambition often stalls for lack of initial seed funding and senior technical mentorship. If an idea is defensible, feasible, and solves a real problem, we provide the capital and direction to build it.
            </motion.p>
          </div>

          <div className="text-[11px] text-[#8C969B] font-mono tracking-wider uppercase">
            FEASIBILITY VALIDATION · SEED CHEQUES · FOUNDER MENTORSHIP
          </div>

        </div>

        {/* RIGHT: High-Fidelity Lokha Startup Fund Cheque */}
        <div className="flex-1 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[620px] bg-[#F7F5EE] text-[#1B2428] rounded-xl p-6 sm:p-8 shadow-2xl border border-black/10 select-none overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(242, 164, 31, 0.04) 0%, transparent 80%)'
            }}
          >
            {/* Top Bar: A/C Payee & Header & Date */}
            <div className="flex items-start justify-between pb-4 border-b border-[#D8D4C7]">
              {/* Crossed A/C Payee Lines */}
              <div className="relative pl-3 pr-4 py-1 border-l-2 border-r-2 border-[#1B2428] font-mono text-[10px] tracking-widest uppercase font-bold text-[#1B2428]">
                A/C Payee
              </div>

              {/* Fund Title */}
              <div className="text-center">
                <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-[#0D1114] block">
                  LOKHA
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#556066] uppercase tracking-widest block">
                  Startup Fund · Amaravati · Hyderabad
                </span>
              </div>

              {/* Date Boxes */}
              <div className="flex items-center gap-1 font-mono text-xs">
                {dateBoxes.map((digit, i) => (
                  <span
                    key={i}
                    className="w-5 h-6 border border-[#9A9483] bg-white/70 flex items-center justify-center text-[11px] font-bold text-[#0D1114]"
                  >
                    {digit}
                  </span>
                ))}
              </div>
            </div>

            {/* Payee Line */}
            <div className="mt-5 flex items-baseline gap-2 border-b border-[#D8D4C7] pb-1">
              <span className="font-mono text-xs uppercase text-[#556066] font-semibold w-10">Pay</span>
              <span className="flex-1 font-serif-italic text-2xl sm:text-3xl text-blue-900 font-semibold px-2">
                Your idea
              </span>
              <span className="font-mono text-[11px] text-[#556066]">or bearer</span>
            </div>

            {/* Rupees Line & Amount Box */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex-1 flex items-baseline gap-2 border-b border-[#D8D4C7] pb-1">
                <span className="font-mono text-xs uppercase text-[#556066] font-semibold w-14">Rupees</span>
                <span className="flex-1 font-serif-italic text-lg sm:text-xl text-blue-900 font-medium px-2">
                  whatever a good idea needs
                </span>
              </div>

              {/* Amount Box */}
              <div className="px-4 py-2 bg-white/90 border-2 border-[#1B2428] rounded-md font-mono text-lg font-bold flex items-center gap-2">
                <span className="text-[#556066]">₹</span>
                <span className="font-serif-italic text-xl text-blue-900 font-semibold">as needed /–</span>
              </div>
            </div>

            {/* Account & Signature Line */}
            <div className="mt-4 flex items-end justify-between gap-4">
              <div className="flex items-baseline gap-2 border-b border-[#D8D4C7] pb-1 flex-1 max-w-[220px]">
                <span className="font-mono text-[10px] uppercase text-[#556066] font-semibold">A/c no.</span>
                <span className="font-serif-italic text-sm text-blue-900 px-2 font-medium">your startup</span>
              </div>

              {/* Signature Graphic */}
              <div className="text-right flex flex-col items-end">
                <svg className="w-36 h-10 -mb-2" viewBox="0 0 240 80">
                  <path
                    d="M8 58 C 30 10, 40 10, 44 52 S 70 20, 82 46 S 104 62, 118 30 C 126 14, 132 60, 150 44 S 190 28, 230 36"
                    fill="none"
                    stroke="#1D3A8A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#556066]">
                  For Lokha Startup Fund · Authorised signatory
                </span>
              </div>
            </div>

            {/* MICR Encoding Strip */}
            <div className="mt-6 pt-3 border-t border-[#D8D4C7] flex items-center justify-around font-mono text-[11px] tracking-[0.25em] text-[#556066]">
              <span>⑈000365⑈</span>
              <span>520586001⑆</span>
              <span>202610⑈</span>
              <span>29</span>
            </div>

          </motion.div>
        </div>

      </div>

    </div>
  );
}
