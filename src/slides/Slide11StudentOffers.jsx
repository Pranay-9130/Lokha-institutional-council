import React from 'react';
import { motion } from 'framer-motion';

export default function Slide11StudentOffers() {
  const cards = [
    { cat: 'Books', bg: '#F4F1EA', fg: '#1B2428', r: -15, num: '01/04', delay: 0.3 },
    { cat: 'Travel', bg: '#2A3439', fg: '#ECEAE4', r: -5, num: '02/04', delay: 0.45 },
    { cat: 'Software', bg: '#F2A41F', fg: '#1B2428', r: 5, num: '03/04', delay: 0.6 },
    { cat: 'Laptops', bg: '#ECEAE4', fg: '#1B2428', r: 15, num: '04/04', delay: 0.75 }
  ];

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Student Photo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s11.jpeg"
          alt="Student smiling while using a laptop on campus"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1114] via-[#0D1114]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch p-8 sm:p-12 lg:p-16 justify-between">
        
        {/* LEFT COLUMN: Headings & UNiDAYS Context */}
        <div className="flex-1 flex flex-col justify-between max-w-xl">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-bold"
          >
            GLOBAL ACADEMIC PRIVILEGES
          </motion.div>

          <div className="my-auto py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
                Student offers.
              </h1>
              <div className="font-serif-italic text-3xl sm:text-4xl lg:text-6xl text-[#F2A41F] mt-1">
                Like students abroad get.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 font-mono text-xs tracking-wide text-[#ECEAE4]"
            >
              UNiDAYS-style verified student pricing
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
            >
              Students abroad enjoy verified passes giving substantial discounts on laptops, software, research tools and travel. We are bringing that same standard to our students: a verified academic pass that opens doors and reduces costs.
            </motion.p>
          </div>

          <div className="text-[11px] text-[#8C969B] font-mono tracking-wider uppercase">
            VERIFIED CREDENTIAL · DIRECT HARDWARE & SOFTWARE SAVINGS
          </div>

        </div>

        {/* RIGHT COLUMN: Fanned Pass Cards with Chip & Barcode */}
        <div className="flex-1 flex items-center justify-center p-4 relative">
          <div className="relative w-full max-w-[420px] h-[360px] flex items-center justify-center">
            {cards.map((c, idx) => (
              <motion.div
                key={c.cat}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: c.r }}
                transition={{ duration: 0.8, delay: c.delay }}
                whileHover={{ scale: 1.08, zIndex: 40, transition: { duration: 0.2 } }}
                style={{
                  backgroundColor: c.bg,
                  color: c.fg,
                  zIndex: idx + 10
                }}
                className="absolute w-64 sm:w-72 h-40 sm:h-44 rounded-2xl p-4 shadow-2xl flex flex-col justify-between border border-black/10 cursor-pointer select-none"
              >
                {/* Card Top: Wordmark & Index */}
                <div className="flex items-center justify-between text-[11px] font-mono tracking-wider font-bold opacity-80">
                  <span>Lokha student pass</span>
                  <span>{c.num}</span>
                </div>

                {/* Smart Chip Graphic */}
                <div className="w-9 h-7 rounded-md bg-amber-400/30 border border-amber-600/40 relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-[1px] bg-amber-700/40 absolute top-2"></div>
                  <div className="w-full h-[1px] bg-amber-700/40 absolute bottom-2"></div>
                  <div className="h-full w-[1px] bg-amber-700/40"></div>
                </div>

                {/* Card Main Category Title */}
                <div className="font-extrabold text-2xl tracking-tight font-display">
                  {c.cat}
                </div>

                {/* Card Footer: Verified Price & Mini Barcode */}
                <div className="flex items-end justify-between pt-1 border-t border-current/20">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-75">
                    Verified student price
                  </span>
                  {/* SVG Barcode */}
                  <svg className="w-20 h-6 opacity-85">
                    {[3, 1, 4, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3].map((w, bi) => (
                      <rect
                        key={bi}
                        x={bi * 4.4}
                        y="0"
                        width={w * 0.75}
                        height="24"
                        fill="currentColor"
                      />
                    ))}
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
