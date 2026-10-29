import React from 'react';
import { motion } from 'framer-motion';

const APPS = [
  { name: 'Health', sub: 'Faster drug discovery' },
  { name: 'Energy', sub: 'Better batteries & materials' },
  { name: 'Industry', sub: 'Logistics, optimised' },
  { name: 'Security', sub: 'Quantum-safe networks' },
];

export default function Slide14QuantumTech() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Quantum Photo */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/images/s17.jpeg" 
          alt="Quantum Processor" 
          className="w-full h-full object-cover filter brightness-[0.7] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1114] via-[#0D1114]/85 to-[#0D1114]/60" />
      </div>

      {/* LEFT HALF */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-semibold"
        >
          AMARAVATI QUANTUM VALLEY · ANDHRA PRADESH
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Quantum is coming <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              to Amaravati. So are we.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            IBM and TCS are installing a 156-qubit IBM Quantum System Two in Amaravati, targeting operations in early 2027. We ensure our students are builders in the quantum era.
          </motion.p>

          <div className="mt-6 flex items-center gap-6 font-mono text-xs">
            <div>
              <span className="text-xl font-bold text-white block font-display">156 Qubits</span>
              <span className="text-[10px] text-[#8C969B] uppercase">IBM Quantum System Two</span>
            </div>
            <div>
              <span className="text-xl font-bold text-[#F2A41F] block font-display">₹6,003 Cr</span>
              <span className="text-[10px] text-[#8C969B] uppercase">National Quantum Mission</span>
            </div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          SOURCES: MCKINSEY QUANTUM MONITOR 2025 · DST / PIB · IBM 2026
        </div>

      </div>

      {/* RIGHT HALF: 4 APPLICATION CARDS */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden z-10"
      >
        <div className="w-full max-w-md grid grid-cols-2 gap-3">
          {APPS.map((app) => (
            <div key={app.name} className="p-4 rounded-xl bg-[#1C252A]/90 border border-[#28343C] backdrop-blur-md">
              <span className="font-mono text-xs text-[#F2A41F] font-bold block mb-1 uppercase">
                {app.name}
              </span>
              <span className="text-xs text-[#ECEAE4] leading-snug block">
                {app.sub}
              </span>
            </div>
          ))}
          <div className="col-span-2 p-3 rounded-xl bg-[#0D1114]/80 border border-[#28343C] text-[11px] font-mono text-[#8C969B]">
            Quantum simulation models molecules and materials ordinary supercomputers cannot solve.
          </div>
        </div>
      </motion.div>

    </div>
  );
}
