import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Slide12Hackathons() {
  const [secondsLeft, setSecondsLeft] = useState(48 * 3600 - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hrs = Math.floor(secondsLeft / 3600);
  const mins = Math.floor((secondsLeft % 3600) / 60);
  const secs = secondsLeft % 60;
  const timerStr = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Hackathon Image with Contrast & Dark Vignette */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s12.jpeg"
          alt="Students working together at laptops during a hackathon"
          className="w-full h-full object-cover filter saturate-[0.85] brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1114] via-[#0D1114]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 max-w-4xl">
        
        {/* TOP: Countdown Timer Display */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs sm:text-sm tracking-widest text-[#ECEAE4] uppercase"
          >
            Hackathon ends in
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-extrabold text-6xl sm:text-8xl lg:text-9xl text-[#F2A41F] font-display tracking-tight leading-none mt-2 drop-shadow-2xl font-mono"
          >
            {timerStr}
          </motion.div>
        </div>

        {/* CENTER: Main Headline & Editorial Copy */}
        <div className="my-auto py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
              Build with people
            </h1>
            <div className="font-serif-italic text-4xl sm:text-6xl lg:text-7xl text-[#F2A41F] mt-1">
              who've built.
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-sm sm:text-base text-[#ECEAE4]/80 max-w-xl font-sans leading-relaxed"
          >
            Skills grow fastest around people who have already done it. We collaborate with successful founders, senior engineers and tech leaders, bringing them to your students through intensive sprints, bootcamps and workshops. Forty-eight hours, a real-world problem, a team, and a mentor who has shipped software at scale.
          </motion.p>
        </div>

        {/* BOTTOM: Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-mono text-xs tracking-[0.2em] text-[#ECEAE4] uppercase font-bold"
        >
          Bootcamps · hackathons · workshops · mentors
        </motion.div>

      </div>

    </div>
  );
}
