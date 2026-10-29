import React from 'react';
import { motion } from 'framer-motion';

export default function Slide17QuantumValley() {
  const cards = [
    { title: 'Health', desc: 'Faster drug discovery' },
    { title: 'Energy', desc: 'Better batteries & materials' },
    { title: 'Industry', desc: 'Logistics, optimised' },
    { title: 'Security', desc: 'Quantum-safe networks' }
  ];

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Quantum Chandelier Photo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s17.jpeg"
          alt="A glowing quantum computing chandelier in a dark laboratory"
          className="w-full h-full object-cover filter saturate-[0.85] brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-[#0D1114]/60"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch p-8 sm:p-12 lg:p-16 justify-between">
        
        {/* LEFT COLUMN: Headings & 4 Domain Cards */}
        <div className="flex-1 flex flex-col justify-between max-w-xl">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-bold"
          >
            Amaravati Quantum Valley
          </motion.div>

          <div className="my-auto py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
                Quantum is coming <br />
                to Amaravati.
              </h1>
              <div className="font-serif-italic text-3xl sm:text-5xl lg:text-6xl text-[#F2A41F] mt-2">
                So are we.
              </div>
            </motion.div>

            {/* 4 Domain Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.12 }}
                  className="p-4 rounded-xl bg-[#151C20]/90 border border-[#222B30] hover:border-[#F2A41F] transition-colors"
                >
                  <h4 className="font-mono text-sm text-[#F2A41F] font-bold">{c.title}</h4>
                  <p className="text-xs text-[#ECEAE4] mt-1 font-sans">{c.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>

          <div className="text-[11px] text-[#8C969B] font-mono">
            Sources: McKinsey Quantum Technology Monitor 2025 · DST / PIB · IBM, YourStory 2026
          </div>

        </div>

        {/* RIGHT COLUMN: Big Quantum Stats & IBM System Two Highlight */}
        <div className="flex-1 flex flex-col justify-center items-end p-6 sm:p-12 gap-6 text-right">
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#1C252A]/90 border border-[#28343C] w-full max-w-md shadow-2xl"
          >
            <span className="font-extrabold text-5xl sm:text-6xl text-[#ECEAE4] font-display block">
              $97B
            </span>
            <span className="text-sm font-semibold text-[#ECEAE4] block mt-1">
              Quantum revenue by 2035
            </span>
            <span className="text-xs text-[#8C969B] font-mono block mt-0.5">
              McKinsey, upper estimate
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="p-6 rounded-2xl bg-[#1C252A]/90 border border-[#28343C] w-full max-w-md shadow-2xl"
          >
            <span className="font-extrabold text-5xl sm:text-6xl text-[#F2A41F] font-display block">
              ₹6,003 Cr
            </span>
            <span className="text-sm font-semibold text-[#ECEAE4] block mt-1">
              National Quantum Mission
            </span>
            <span className="text-xs text-[#8C969B] font-mono block mt-0.5">
              Govt of India · to 2031
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="p-6 rounded-2xl bg-[#182126] border-2 border-[#F2A41F]/40 w-full max-w-md shadow-2xl"
          >
            <span className="font-mono text-xl sm:text-2xl font-bold text-[#ECEAE4] block tracking-tight">
              IBM Quantum System Two · 156 qubits
            </span>
            <span className="text-xs font-mono text-[#F2A41F] block mt-1 uppercase tracking-wider">
              TCS · India's largest quantum facility · Early 2027
            </span>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
