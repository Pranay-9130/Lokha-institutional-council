import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Slide8Support247() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const sec = time.getSeconds() + time.getMilliseconds() / 1000;
  const min = time.getMinutes() + sec / 60;
  const hr = (time.getHours() % 12) + min / 60;

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Campus Photo with subtle zoom and dark overlay */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/s8.jpeg"
          alt="Campus buildings at dusk with lit windows"
          className="w-full h-full object-cover object-[30%_50%] filter brightness-[0.4] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1114] via-[#0D1114]/40 to-transparent"></div>
      </motion.div>

      {/* Real-time Analog Wall Clock in Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-10 right-10 sm:top-14 sm:right-16 z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full shadow-2xl"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Bezel Rings */}
          <circle cx="100" cy="100" r="99" fill="#1A1E21" stroke="#2B3135" strokeWidth="2" />
          <circle cx="100" cy="100" r="94" fill="#2B3135" />
          <circle cx="100" cy="100" r="88" fill="#F4F1EA" />

          {/* Minute & Hour Tick Marks */}
          {[...Array(60).keys()].map((i) => {
            const a = (i / 60) * Math.PI * 2;
            const isMajor = !(i % 5);
            const r1 = isMajor ? 76 : 82;
            return (
              <line
                key={i}
                x1={100 + Math.sin(a) * r1}
                y1={100 - Math.cos(a) * r1}
                x2={100 + Math.sin(a) * 85}
                y2={100 - Math.cos(a) * 85}
                stroke="#1B2428"
                strokeWidth={isMajor ? 2.2 : 0.8}
              />
            );
          })}

          {/* Numbers 1 to 12 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => {
            const a = (n / 12) * Math.PI * 2;
            return (
              <text
                key={n}
                x={100 + Math.sin(a) * 66}
                y={100 - Math.cos(a) * 66 + 4}
                textAnchor="middle"
                fill="#1B2428"
                className="font-mono text-[13px] font-bold"
              >
                {n}
              </text>
            );
          })}

          {/* Clock Branding */}
          <text
            x="100"
            y="64"
            textAnchor="middle"
            fill="#8C969B"
            className="font-mono text-[8px] tracking-[0.25em] font-bold"
          >
            LOKHA
          </text>
          <text
            x="100"
            y="138"
            textAnchor="middle"
            fill="#8C969B"
            className="font-mono text-[8px] tracking-[0.25em] font-bold"
          >
            24 × 7
          </text>

          {/* Hour Hand */}
          <line
            x1="100"
            y1={100 + 8}
            x2="100"
            y2={100 - 44}
            stroke="#1B2428"
            strokeWidth="5"
            strokeLinecap="round"
            transform={`rotate(${hr * 30} 100 100)`}
          />

          {/* Minute Hand */}
          <line
            x1="100"
            y1={100 + 10}
            x2="100"
            y2={100 - 66}
            stroke="#1B2428"
            strokeWidth="3.4"
            strokeLinecap="round"
            transform={`rotate(${min * 6} 100 100)`}
          />

          {/* Second Hand (Sweep in Red) */}
          <line
            x1="100"
            y1={100 + 18}
            x2="100"
            y2={100 - 74}
            stroke="#DC2626"
            strokeWidth="1.4"
            strokeLinecap="round"
            transform={`rotate(${sec * 6} 100 100)`}
          />

          {/* Center Pivot */}
          <circle cx="100" cy="100" r="4.5" fill="#DC2626" />
          <circle cx="100" cy="100" r="1.5" fill="#F4F1EA" />
        </svg>
      </motion.div>

      {/* Main Bottom-Left Content */}
      <div className="absolute left-8 sm:left-16 bottom-16 sm:bottom-20 z-20 max-w-2xl">
        
        {/* Giant 24×7 Numeral */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-7xl sm:text-9xl lg:text-[160px] text-[#F2A41F] font-display leading-none tracking-tight drop-shadow-2xl"
        >
          24×7
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
            Support that
          </h1>
          <div className="font-serif-italic text-4xl sm:text-5xl lg:text-6xl text-[#ECEAE4] mt-1">
            never logs off.
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm sm:text-base text-[#8C969B] max-w-lg leading-relaxed font-sans"
        >
          Technology fails at the worst possible moment: the night before a submission, five minutes before an online exam. We are providing continuous support to every partner institution 24 hours a day, 7 days a week.
        </motion.p>

      </div>

    </div>
  );
}
