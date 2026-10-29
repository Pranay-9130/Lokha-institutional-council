import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Slide5SubscriptionValue() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 75;
    const duration = 1400;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT HALF: HEADLINE & COUNT-UP FIGURE */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-semibold"
        >
          LOKHA TECHNOLOGY PASS · AY 2026–27
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            We carry <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              the cost.
            </span>
          </motion.h1>

          {/* COUNT UP EFFECT */}
          <div className="mt-6 flex items-baseline gap-2">
            <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-[#F2A41F] tracking-tight leading-none">
              {count >= 70 ? '70–75' : count}%
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#8C969B]">
              Borne by Council
            </span>
          </div>

          {/* Mandatory Meeting Figure Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 p-3 rounded-xl bg-[#1C252A] border border-[#28343C] flex items-start gap-2.5 text-xs text-[#ECEAE4]"
          >
            <AlertCircle className="w-4 h-4 text-[#F2A41F] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#F2A41F] block">Meeting figure pending confirmation</span>
              <span className="text-[11px] text-[#8C969B]">
                Proposed institutional subsidy model discussed in council agenda; finalized upon college affiliation sign-off.
              </span>
            </div>
          </motion.div>

          <p className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed">
            Oxford & Cambridge-grade software suite on every campus. Everything is one annual subscription per student—Lokha Institutional Council bears the majority.
          </p>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          EQUAL ACCESSIBILITY · PER STUDENT MODEL
        </div>

      </div>

      {/* RIGHT HALF: PRINTED PASS BREAKDOWN SLIP */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden"
      >
        <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl bg-[#F5F2EA] text-[#1B1E20] shadow-2xl relative border border-[#D6D0C4] font-sans">
          
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#D6D0C4] pb-4 mb-4">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-[#8C969B] uppercase font-bold block">
                PARTNER INSTITUTION COPY
              </span>
              <h3 className="font-display font-black text-xl text-[#1B1E20]">
                Lokha Technology Pass
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#8C969B]">
              Ref: LIC-0586-2026
            </span>
          </div>

          {/* Item details */}
          <div className="space-y-3 text-xs mb-6">
            <div className="flex justify-between pb-2 border-b border-[#E5E0D5]">
              <span className="font-bold">Microsoft 365 + JetBrains Suite</span>
              <span className="font-mono font-bold">100% Tools Access</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-[#E5E0D5]">
              <span className="text-[#555]">24×7 Escalation & Technical Support</span>
              <span className="font-mono text-emerald-700 font-bold">Included</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-[#E5E0D5]">
              <span className="text-[#555]">Cloud Compute & AI Agent Sandbox</span>
              <span className="font-mono text-emerald-700 font-bold">Included</span>
            </div>
          </div>

          {/* Cost Allocation Bars */}
          <div className="p-4 rounded-xl bg-[#ECE7DC] border border-[#D6D0C4] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono font-bold">
              <span className="text-[#1B1E20]">Lokha Institutional Council Share:</span>
              <span className="text-[#C3362B] text-base">70–75%</span>
            </div>
            <div className="h-2.5 w-full bg-[#D6D0C4] rounded-full overflow-hidden flex">
              <div className="h-full bg-[#C3362B]" style={{ width: '75%' }} />
              <div className="h-full bg-[#8C969B]" style={{ width: '25%' }} />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#666]">
              <span>Nominal Student Copay:</span>
              <span className="font-bold text-[#1B1E20]">25–30% Only</span>
            </div>
          </div>

          {/* Stamp Badge */}
          <div className="mt-5 border-2 border-dashed border-[#C3362B] text-[#C3362B] font-mono font-bold text-center py-2 rounded-lg text-xs uppercase tracking-widest rotate-[-1deg]">
            ✓ 70–75% COUNCIL SUBSIDIZED
          </div>

        </div>
      </motion.div>

    </div>
  );
}
