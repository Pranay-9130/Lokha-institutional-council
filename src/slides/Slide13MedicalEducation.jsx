import React from 'react';
import { motion } from 'framer-motion';

export default function Slide13MedicalEducation() {
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
          CLINICAL TELE-EDUCATION & ETHICS
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Medical education. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Direct to campus.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Clean medical-learning connectivity: linking premier teaching hospitals, senior clinical specialists, and student classrooms in real time without geographical barriers.
          </motion.p>

          <div className="mt-6 p-3 rounded-xl bg-[#1C252A] border border-[#28343C] text-[11px] font-mono text-[#8C969B]">
            *Strict ethical compliance: zero graphic surgery imagery. Governed by formal hospital ethics approval, explicit informed patient consent, and data anonymization.
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          NDHM & HIPAA ALIGNED · PRIVACY FIRST
        </div>

      </div>

      {/* RIGHT HALF: CLEAN CONNECTED MEDICAL NODES */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex flex-col justify-center p-6 sm:p-12 overflow-hidden gap-3"
      >
        <div className="w-full max-w-md mx-auto space-y-3">
          <div className="p-4 rounded-xl bg-[#1C252A] border border-[#28343C] flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#F2A41F] uppercase font-bold block">Node 01</span>
              <h4 className="text-sm font-bold text-white">Teaching Hospital & Telemetry</h4>
              <p className="text-xs text-[#8C969B] mt-0.5">Non-invasive digital feed & diagnostic telemetry</p>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">Encrypted</span>
          </div>

          <div className="p-4 rounded-xl bg-[#1C252A] border border-[#F2A41F]/40 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#F2A41F] uppercase font-bold block">Node 02</span>
              <h4 className="text-sm font-bold text-white">Chief Specialist Faculty</h4>
              <p className="text-xs text-[#8C969B] mt-0.5">Real-time case study commentary & student Q&A</p>
            </div>
            <span className="text-[10px] font-mono text-[#F2A41F] bg-[#F2A41F]/10 px-2 py-0.5 rounded">Specialist</span>
          </div>

          <div className="p-4 rounded-xl bg-[#1C252A] border border-[#28343C] flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-[#F2A41F] uppercase font-bold block">Node 03</span>
              <h4 className="text-sm font-bold text-white">Medical & Pharmacy Colleges</h4>
              <p className="text-xs text-[#8C969B] mt-0.5">Synchronous broadcast across partner institutions</p>
            </div>
            <span className="text-[10px] font-mono text-[#8C969B] bg-[#0D1114] px-2 py-0.5 rounded">Campuses</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
