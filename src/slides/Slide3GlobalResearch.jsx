import React from 'react';
import { motion } from 'framer-motion';
import { MAP } from '../data/mapData';

const RECORDS = [
  {
    category: 'EDUCATION · USA',
    headline: "MIT: world's No. 1 university, 14 years running"
  },
  {
    category: 'HEALTHCARE · UK',
    headline: '500,000 whole genomes sequenced for research'
  },
  {
    category: 'TRANSPORT · JAPAN',
    headline: 'Bullet trains since 1964. No passenger deaths.'
  },
  {
    category: 'GREEN ENERGY · GERMANY',
    headline: '56% of public power from renewables'
  },
  {
    category: 'INNOVATION · SWITZERLAND',
    headline: 'No. 1 on innovation, 15 years. India: 38th.'
  }
];

export default function Slide3GlobalResearch() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Library Photo with Heavy Dark Vignette */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/images/s3.jpeg" 
          alt="Research Library" 
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1114] via-[#0D1114]/90 to-[#0D1114]/60" />
      </div>

      {/* LEFT HALF: Sector Records & R&D Stats */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top: Headline */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Our problems. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Researched elsewhere.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase mt-4 mb-6 font-semibold"
          >
            20 YEARS AHEAD · ONE RECORD PER SECTOR
          </motion.div>

          {/* 5 Sector Records */}
          <div className="space-y-4">
            {RECORDS.map((r, i) => (
              <motion.div
                key={r.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="border-b border-[#1C252A] pb-3"
              >
                <div className="font-mono text-[10px] tracking-widest text-[#F2A41F] uppercase mb-0.5 font-medium">
                  {r.category}
                </div>
                <div className="text-sm sm:text-base font-bold text-[#ECEAE4] leading-snug">
                  {r.headline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom R&D Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="pt-4 border-t border-[#1C252A] font-mono text-[11px] text-[#8C969B] space-y-1"
        >
          <div className="text-[#ECEAE4] font-semibold tracking-wider">
            R&D, % OF GDP · USA 3.5 · JAPAN 3.4 · GERMANY 3.1 · INDIA 0.65
          </div>
          <div className="text-[9px] uppercase tracking-wider text-[#8C969B]">
            SOURCES: QS VIA MIT NEWS 2026 · UK BIOBANK 2023 · FRAUNHOFER ISE 2025 · WIPO GII 2025
          </div>
        </motion.div>

      </div>

      {/* RIGHT HALF: VECTOR MAP OF INDIA WITH GOLDEN TRAJECTORY ARCS */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 relative flex items-center justify-center p-4 sm:p-8 z-10"
      >
        <svg 
          viewBox="0 0 1000 800" 
          className="w-full h-full max-h-[680px] object-contain overflow-visible"
        >
          <defs>
            <linearGradient id="arcGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F2A41F" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F2A41F" stopOpacity="0.4" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* India Vector Outline */}
          <g transform="translate(320, 160) scale(0.68)">
            <path
              d={MAP.india.path}
              fill="#141E24"
              stroke="#2E3C45"
              strokeWidth="1.5"
              className="drop-shadow-lg"
            />
            {/* Andhra Pradesh & Telangana Highlight */}
            {MAP.india.amaravati && (
              <circle
                cx={MAP.india.amaravati[0]}
                cy={MAP.india.amaravati[1]}
                r="6"
                fill="#F2A41F"
                filter="url(#goldGlow)"
              />
            )}
          </g>

          {/* Golden Arcs Flying In from Global Centers */}
          {/* 1. USA */}
          <path
            d="M 120 180 Q 160 520 540 620"
            fill="none"
            stroke="url(#arcGold)"
            strokeWidth="2.5"
            strokeDasharray="800"
            strokeDashoffset="800"
            className="arc-path"
            style={{ animationDelay: '0.1s' }}
          />
          <circle cx="120" cy="180" r="6" fill="#F2A41F" />
          <text x="120" y="155" fill="#ECEAE4" fontSize="13" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">USA</text>

          {/* 2. UK */}
          <path
            d="M 280 90 Q 340 380 540 620"
            fill="none"
            stroke="url(#arcGold)"
            strokeWidth="2.5"
            strokeDasharray="800"
            strokeDashoffset="800"
            className="arc-path"
            style={{ animationDelay: '0.3s' }}
          />
          <circle cx="280" cy="90" r="6" fill="#F2A41F" />
          <text x="280" y="65" fill="#ECEAE4" fontSize="13" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">UK</text>

          {/* 3. Switzerland */}
          <path
            d="M 460 140 Q 520 400 540 620"
            fill="none"
            stroke="url(#arcGold)"
            strokeWidth="2.5"
            strokeDasharray="800"
            strokeDashoffset="800"
            className="arc-path"
            style={{ animationDelay: '0.5s' }}
          />
          <circle cx="460" cy="140" r="6" fill="#F2A41F" />
          <text x="460" y="115" fill="#ECEAE4" fontSize="13" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">Switzerland</text>

          {/* 4. Germany */}
          <path
            d="M 640 80 Q 720 360 540 620"
            fill="none"
            stroke="url(#arcGold)"
            strokeWidth="2.5"
            strokeDasharray="800"
            strokeDashoffset="800"
            className="arc-path"
            style={{ animationDelay: '0.7s' }}
          />
          <circle cx="640" cy="80" r="6" fill="#F2A41F" />
          <text x="640" y="55" fill="#ECEAE4" fontSize="13" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">Germany</text>

          {/* 5. Japan */}
          <path
            d="M 880 220 Q 820 540 540 620"
            fill="none"
            stroke="url(#arcGold)"
            strokeWidth="2.5"
            strokeDasharray="800"
            strokeDashoffset="800"
            className="arc-path"
            style={{ animationDelay: '0.9s' }}
          />
          <circle cx="880" cy="220" r="6" fill="#F2A41F" />
          <text x="880" y="195" fill="#ECEAE4" fontSize="13" fontFamily="IBM Plex Mono" textAnchor="middle" fontWeight="bold">Japan</text>

          {/* Destination Target Pulse at Andhra Pradesh / Telangana */}
          <circle cx="540" cy="620" r="8" fill="#F2A41F" className="animate-ping opacity-75" />
          <circle cx="540" cy="620" r="5" fill="#F2A41F" />
          <text x="560" y="625" fill="#F2A41F" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="bold">Indian Institutions</text>
        </svg>
      </motion.div>

    </div>
  );
}
