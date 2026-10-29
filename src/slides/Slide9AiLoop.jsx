import React from 'react';
import { motion } from 'framer-motion';

export default function Slide9AiLoop() {
  const chips = ['Microsoft Copilot', 'ChatGPT', 'Gemini', 'Claude'];

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-[#0D1114]">
      
      {/* Background Circuit Machine Photo with Grayscale & Low Brightness */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/s9.jpeg"
          alt="An automated machine working over a circuit board"
          className="w-full h-full object-cover filter grayscale brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-[#0D1114]/60"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch p-8 sm:p-12 lg:p-16 justify-between">
        
        {/* LEFT COLUMN: Headline & Model Chips */}
        <div className="flex-1 flex flex-col justify-between max-w-xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="my-auto py-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
              Problems in. <br />
              Solutions out.
            </h1>
            <div className="font-serif-italic text-3xl sm:text-4xl lg:text-6xl text-[#F2A41F] mt-2">
              On loop.
            </div>

            <p className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed">
              We find a problem, build a solution, automate it so it runs securely on its own, then feed learnings back in. For every partner and problem, we architect custom AI agents built on the world's leading foundation models.
            </p>

            {/* AI Model Chips */}
            <div className="mt-8">
              <div className="font-mono text-xs tracking-widest text-[#ECEAE4] uppercase mb-3">
                Agents in the loop
              </div>
              <div className="flex flex-wrap gap-2.5">
                {chips.map((chip, i) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1C252A] border border-[#28343C] text-xs font-mono text-[#ECEAE4] hover:border-[#F2A41F] transition-colors"
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>

          <div className="text-[11px] text-[#8C969B] font-mono tracking-wider uppercase">
            EMPIRICAL PROBLEM-SOLVING · CONTINUOUS FEEDBACK
          </div>

        </div>

        {/* RIGHT COLUMN: Racetrack SVG Loop with Gliding Agent */}
        <div className="flex-1 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-full max-w-[620px] aspect-[1100/600]"
          >
            <svg viewBox="0 0 1100 600" className="w-full h-full drop-shadow-2xl">
              
              {/* Animated Racetrack Loop */}
              <path
                id="agentTrack"
                d="M300 120 H800 A180 180 0 0 1 800 480 H300 A180 180 0 0 1 300 120 Z"
                fill="none"
                stroke="rgba(236, 234, 228, 0.4)"
                strokeWidth="3"
                strokeDasharray="4 12"
                strokeLinecap="round"
              />

              {/* Glowing Aura Gliding Agent */}
              <circle r="18" fill="#F2A41F" opacity="0.25">
                <animateMotion dur="7s" repeatCount="indefinite">
                  <mpath href="#agentTrack" />
                </animateMotion>
              </circle>

              {/* Gliding Agent Core */}
              <circle r="9" fill="#F2A41F" stroke="#FFFFFF" strokeWidth="2">
                <animateMotion dur="7s" repeatCount="indefinite">
                  <mpath href="#agentTrack" />
                </animateMotion>
              </circle>

              {/* 4 Loop Milestone Nodes */}
              {/* 01 Problem */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="300" cy="120" r="12" fill="#ECEAE4" stroke="#F2A41F" strokeWidth="3" />
                <text x="300" y="80" textAnchor="middle" fill="#ECEAE4" className="font-mono text-sm font-bold">
                  <tspan fill="#F2A41F">01 </tspan>Problem
                </text>
              </g>

              {/* 02 Build */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="800" cy="120" r="12" fill="#ECEAE4" stroke="#F2A41F" strokeWidth="3" />
                <text x="800" y="80" textAnchor="middle" fill="#ECEAE4" className="font-mono text-sm font-bold">
                  <tspan fill="#F2A41F">02 </tspan>Build
                </text>
              </g>

              {/* 03 Automate */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="800" cy="480" r="12" fill="#ECEAE4" stroke="#F2A41F" strokeWidth="3" />
                <text x="800" y="535" textAnchor="middle" fill="#ECEAE4" className="font-mono text-sm font-bold">
                  <tspan fill="#F2A41F">03 </tspan>Automate
                </text>
              </g>

              {/* 04 Solved */}
              <g className="transition-transform duration-300 hover:scale-110">
                <circle cx="300" cy="480" r="12" fill="#ECEAE4" stroke="#F2A41F" strokeWidth="3" />
                <text x="300" y="535" textAnchor="middle" fill="#ECEAE4" className="font-mono text-sm font-bold">
                  <tspan fill="#F2A41F">04 </tspan>Solved
                </text>
              </g>

              {/* Center Core Label */}
              <text x="550" y="290" textAnchor="middle" fill="#ECEAE4" className="font-mono text-xl font-bold tracking-wider">
                Custom AI agent
              </text>
              <text x="550" y="322" textAnchor="middle" fill="#8C969B" className="font-mono text-xs tracking-wider">
                built per client · per problem
              </text>

            </svg>
          </motion.div>
        </div>

      </div>

    </div>
  );
}
