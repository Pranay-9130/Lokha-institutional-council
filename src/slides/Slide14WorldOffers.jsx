import React from 'react';
import { motion } from 'framer-motion';

export default function Slide14WorldOffers() {
  const passes = [
    {
      from: 'HYD',
      fromName: 'Hyderabad',
      to: 'AMS',
      toName: 'Amsterdam Schiphol',
      flight: 'LK 365',
      gate: 'Gate J1',
      seat: '1A',
      purpose: 'Job offer',
      r: -2,
      delay: 0.35
    },
    {
      from: 'VGA',
      fromName: 'Vijayawada',
      to: 'LHR',
      toName: 'London Heathrow',
      flight: 'LK 586',
      gate: 'Gate R2',
      seat: '2A',
      purpose: 'Research',
      r: 2,
      delay: 0.55
    }
  ];

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Airplane Photo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s14.jpeg"
          alt="An aircraft climbing through sunset clouds"
          className="w-full h-full object-cover filter saturate-[0.85] brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-[#0D1114]/60"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch p-8 sm:p-12 lg:p-16 justify-between">
        
        {/* LEFT COLUMN: Headline & Comparative Metrics */}
        <div className="flex-1 flex flex-col justify-between max-w-xl">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-bold"
          >
            INTERNATIONAL PLACEMENTS & RESEARCH LABS
          </motion.div>

          <div className="my-auto py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
                Next stop:
              </h1>
              <div className="font-serif-italic text-4xl sm:text-6xl lg:text-7xl text-[#F2A41F] mt-1">
                the world.
              </div>
            </motion.div>

            {/* Benchmark Salary Offer Comparison */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-4 rounded-xl bg-[#1C252A]/90 border border-[#28343C]"
              >
                <span className="font-extrabold text-3xl sm:text-4xl text-[#F2A41F] font-display block">
                  ₹2.5 Cr
                </span>
                <span className="text-xs text-[#ECEAE4] font-medium block mt-1">
                  International offer · IIT Hyderabad, 2026
                </span>
                <span className="text-[10px] text-[#8C969B] block font-mono mt-0.5">
                  Trading firm · Netherlands
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="p-4 rounded-xl bg-[#1C252A]/90 border border-[#28343C]"
              >
                <span className="font-extrabold text-3xl sm:text-4xl text-[#ECEAE4] font-display block">
                  ₹52 L
                </span>
                <span className="text-xs text-[#ECEAE4] font-medium block mt-1">
                  Highest offer · JNTUH, 2025–26
                </span>
                <span className="text-[10px] text-[#8C969B] block font-mono mt-0.5">
                  Domestic ceiling
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
            >
              Our students are not less capable; they are simply less exposed. We bridge them directly to international employers, overseas internships, and top research institutions in Europe and the US.
            </motion.p>
          </div>

          <div className="text-[11px] text-[#8C969B] font-mono">
            Per year · Careers360, Collegedunia · routes shown are examples
          </div>

        </div>

        {/* RIGHT COLUMN: Authentic Airline Boarding Passes */}
        <div className="flex-1 flex flex-col justify-center items-center gap-5 p-4">
          {passes.map((p) => (
            <motion.div
              key={p.flight}
              initial={{ opacity: 0, x: 40, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: p.r }}
              transition={{ duration: 0.8, delay: p.delay }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="w-full max-w-[480px] bg-[#F7F5EE] text-[#1B2428] rounded-xl shadow-2xl border border-black/15 overflow-hidden flex flex-col sm:flex-row select-none cursor-pointer"
            >
              {/* Main Ticket Section */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-dashed border-[#C5BFB0]">
                {/* Header Strip */}
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#556066] font-bold pb-2 border-b border-[#D8D4C7]">
                  <span>Boarding Pass</span>
                  <span className="text-blue-900 font-extrabold">{p.purpose} class</span>
                </div>

                {/* Airport Route with Airplane Vector */}
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <span className="font-extrabold text-2xl sm:text-3xl font-display text-[#0D1114] block leading-none">
                      {p.from}
                    </span>
                    <span className="text-[10px] text-[#556066] font-mono block mt-1">
                      {p.fromName}
                    </span>
                  </div>

                  <svg className="w-16 h-6 text-[#F2A41F]" viewBox="0 0 90 40">
                    <path d="M2 20h70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 5" />
                    <path d="M62 8l20 12-20 12 4-12z" fill="currentColor" />
                  </svg>

                  <div className="text-right">
                    <span className="font-extrabold text-2xl sm:text-3xl font-display text-[#0D1114] block leading-none">
                      {p.to}
                    </span>
                    <span className="text-[10px] text-[#556066] font-mono block mt-1">
                      {p.toName}
                    </span>
                  </div>
                </div>

                {/* Flight & Passenger Info */}
                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#D8D4C7] font-mono text-[10px] text-[#556066]">
                  <div>
                    <span>Passenger</span>
                    <b className="block text-[#0D1114] text-[11px] truncate">Your student</b>
                  </div>
                  <div>
                    <span>Flight</span>
                    <b className="block text-[#0D1114] text-[11px]">{p.flight}</b>
                  </div>
                  <div>
                    <span>Gate</span>
                    <b className="block text-[#0D1114] text-[11px]">{p.gate.split(' ')[1]}</b>
                  </div>
                  <div>
                    <span>Seat</span>
                    <b className="block text-[#0D1114] text-[11px]">{p.seat}</b>
                  </div>
                </div>
              </div>

              {/* Stub Section with Barcode */}
              <div className="w-full sm:w-36 p-4 bg-[#EFECE1] flex flex-col justify-between items-center text-center">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#556066] font-bold">
                  {p.from} → {p.to}
                </span>

                <div className="font-mono text-[10px] text-[#556066] my-1">
                  <span>Purpose</span>
                  <b className="block text-[#0D1114] text-[11px]">{p.purpose}</b>
                </div>

                {/* SVG Barcode */}
                <svg className="w-24 h-10 opacity-80">
                  {[2, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4].map((w, bi) => (
                    <rect key={bi} x={bi * 4.4} y="0" width={w * 0.8} height="40" fill="#1B2428" />
                  ))}
                </svg>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
}
