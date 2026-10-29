import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Slide16LiveProfessor() {
  const [viewers, setViewers] = useState(2184);

  useEffect(() => {
    const interval = setInterval(() => {
      // Natural viewer count fluctuations
      const delta = Math.floor(Math.random() * 7) - 3;
      setViewers((prev) => Math.max(2150, prev + delta));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Lecture Photo with Dark Atmospheric Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s16.jpeg"
          alt="International guest professor lecturing at whiteboard"
          className="w-full h-full object-cover filter brightness-[0.3] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-[#0D1114]/50"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 max-w-5xl">
        
        {/* TOP: Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-bold mb-2">
            GLOBAL TELE-PRESENCE & LIVE SESSIONS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
            Every student in the room.
          </h1>
          <div className="font-serif-italic text-3xl sm:text-5xl lg:text-6xl text-[#F2A41F] mt-1">
            Live.
          </div>
        </motion.div>

        {/* CENTER: High-Definition Live Streaming Player Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="my-auto w-full max-w-3xl bg-[#141B1F] rounded-2xl border border-[#28343C] shadow-2xl overflow-hidden"
        >
          {/* Player Top Bar */}
          <div className="bg-[#1C252A] px-4 py-2.5 flex items-center justify-between border-b border-[#28343C] text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold flex items-center gap-1.5 text-[11px] animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span> LIVE
              </span>
              <span className="text-[#ECEAE4] font-medium hidden sm:inline">
                Live lab · International guest professor
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-[#8C969B]">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[#ECEAE4] font-bold">{viewers.toLocaleString()}</span>
              <span>watching across 586 campuses</span>
            </div>
          </div>

          {/* Player Video Frame */}
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <img
              src="/images/s16.jpeg"
              alt="Professor lecturing at whiteboard"
              className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
            />
            {/* Player HUD Overlays */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
              <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md text-[#ECEAE4] border border-white/10">
                Professor commentary · English
              </span>
              <span className="px-2 py-0.5 rounded bg-[#F2A41F] text-[#0D1114] font-bold text-[11px]">
                HD 1080p
              </span>
            </div>
          </div>

          {/* Channels / Streams Bar */}
          <div className="bg-[#182126] px-4 py-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono text-[#8C969B]">
            <div className="py-1 px-2 rounded bg-[#202B31] text-[#ECEAE4] font-semibold border border-white/5">
              Guest professors
            </div>
            <div className="py-1 px-2 rounded bg-[#202B31] text-[#ECEAE4] font-semibold border border-white/5">
              International competitions
            </div>
            <div className="py-1 px-2 rounded bg-[#202B31] text-[#ECEAE4] font-semibold border border-white/5">
              University collaborations
            </div>
            <div className="py-1 px-2 rounded bg-[#202B31] text-[#F2A41F] font-semibold border border-white/5">
              Hands-on workshops
            </div>
          </div>
        </motion.div>

        {/* BOTTOM: Narrative Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs sm:text-sm text-[#8C969B] max-w-2xl font-sans leading-relaxed"
        >
          A student in Anantapur or Kakinada joins the exact same session as a student in London, in real time, with international faculty explaining complex concepts and taking questions live.
        </motion.p>

      </div>

    </div>
  );
}
