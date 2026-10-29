import React from 'react';
import { motion } from 'framer-motion';

const STAGES = [
  { step: '01', title: '2nd Year Foundation', desc: 'Mastering real tools: IntelliJ, Git, Excel models and cloud pipelines.' },
  { step: '02', title: 'Demonstrated Skills', desc: 'Shipping functioning apps, automated flows, and verified micro-projects.' },
  { step: '03', title: 'Part-Time Work', desc: 'Remote work sprints under veteran engineers with academic credit balance.' },
  { step: '04', title: 'Internship Tracks', desc: 'Merit-based competitive placement without requiring 6 months of retraining.' }
];

export default function Slide6FinancialIndependence() {
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
          STUDENT PROGRESSION LIFECYCLE
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-extrabold text-7xl sm:text-8xl lg:text-9xl tracking-tight leading-none text-[#ECEAE4] font-display"
          >
            1,000
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight mt-1"
          >
            jobs, ready to deploy. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Only for JNTU students.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            The path from classroom to a real job runs through our projects. We create opportunities on our own platforms reserved exclusively for our partner students.
          </motion.p>

          <div className="mt-6 text-[11px] font-mono text-[#8C969B]">
            *Performance-oriented progression based on demonstrated technical contributions; non-guaranteed employment.
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          MERIT-BASED STUDENT ADVANCEMENT
        </div>

      </div>

      {/* RIGHT HALF: 4-STAGE JOURNEY CARDS OVER WORKSPACE */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex flex-col justify-center p-6 sm:p-12 overflow-hidden gap-3"
      >
        <div className="space-y-3 w-full max-w-lg mx-auto">
          {STAGES.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
              className="p-4 rounded-xl bg-[#1C252A] border border-[#28343C] flex items-center justify-between gap-4 group hover:border-[#F2A41F]/60 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs font-bold text-[#F2A41F] px-2 py-1 rounded bg-[#0D1114]">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#ECEAE4] group-hover:text-[#F2A41F] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#8C969B] mt-0.5 leading-snug">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
