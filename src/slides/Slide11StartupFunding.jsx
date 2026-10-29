import React from 'react';
import { motion } from 'framer-motion';

export default function Slide11StartupFunding() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT HALF */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-semibold"
        >
          LOKHA STARTUP SEED GRANTS
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Good idea? <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Funded.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Some of your students already have an idea that could become a company. Today that idea often dies because there is no money and no mentor. If the idea is good and feasible, we will fund it.
          </motion.p>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          SEED CAPITAL · ARCHITECT ADVISORY · INCUBATION
        </div>

      </div>

      {/* RIGHT HALF: PRINTED LOKHA STARTUP CHEQUE */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden"
      >
        <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#F5F2EA] text-[#1B1E20] shadow-2xl relative border border-[#D6D0C4] font-sans">
          
          <div className="flex items-start justify-between border-b border-[#D6D0C4] pb-3 mb-4">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#8C969B] uppercase font-bold block">
                A/C PAYEE ONLY
              </span>
              <h3 className="font-display font-black text-lg text-[#1B1E20]">
                LOKHA STARTUP FUND
              </h3>
              <span className="text-[10px] text-[#666] font-mono">Amaravati · Hyderabad</span>
            </div>
            <span className="font-mono text-[11px] text-[#8C969B]">2026 10 29</span>
          </div>

          <div className="space-y-3 text-xs mb-6">
            <div className="flex items-baseline justify-between border-b border-[#D6D0C4] pb-1.5">
              <span className="text-[#666] font-mono text-[11px]">Pay:</span>
              <span className="font-bold text-sm text-[#1B1E20]">Your student idea or bearer</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-[#D6D0C4] pb-1.5">
              <span className="text-[#666] font-mono text-[11px]">Rupees:</span>
              <span className="font-bold text-sm text-[#1B1E20]">Whatever a good idea needs to launch</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[#ECE7DC] border border-[#D6D0C4] mb-4">
            <span className="font-mono text-xs text-[#666]">Amount:</span>
            <span className="font-mono text-xl font-black text-[#C3362B]">₹ As needed /–</span>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#8C969B] pt-2 border-t border-[#D6D0C4]">
            <span>A/c no. your-startup-v1</span>
            <span className="text-[#1B1E20] font-bold">Lokha Council Authorised Signatory</span>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
