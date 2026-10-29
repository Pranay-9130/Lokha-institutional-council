import React from 'react';
import { motion } from 'framer-motion';

export default function Slide7CloudIntelligence() {
  const ramp = ['#1F2A30', '#3A3A2C', '#6B5426', '#A8731F', '#F2A41F'];

  const m365Apps = [
    { name: 'Teams', use: 1, x: 198, y: 170, lx: 220, ly: 176, anchor: 'start' },
    { name: 'Word', use: 0.8, x: 168, y: 220, lx: 190, ly: 226, anchor: 'start' },
    { name: 'Excel', use: 0.75, x: 148, y: 270, lx: 170, ly: 276, anchor: 'start' },
    { name: 'PowerPoint', use: 0.6, x: 144, y: 320, lx: 166, ly: 326, anchor: 'start' },
    { name: 'Outlook', use: 0.5, x: 148, y: 370, lx: 170, ly: 376, anchor: 'start' },
    { name: 'OneDrive', use: 0.45, x: 168, y: 420, lx: 190, ly: 426, anchor: 'start' },
    { name: 'SharePoint', use: 0.2, x: 202, y: 470, lx: 224, ly: 476, anchor: 'start' }
  ];

  const dynApps = [
    { name: 'Customer Service', use: 0.05, x: 1002, y: 160, lx: 980, ly: 166, anchor: 'end' },
    { name: 'Business Central', use: 0, x: 1032, y: 225, lx: 1010, ly: 231, anchor: 'end' },
    { name: 'Supply Chain', use: 0.1, x: 1052, y: 290, lx: 1030, ly: 296, anchor: 'end' },
    { name: 'Finance', use: 0.2, x: 1056, y: 355, lx: 1034, ly: 361, anchor: 'end' },
    { name: 'Sales', use: 0.25, x: 1042, y: 420, lx: 1020, ly: 426, anchor: 'end' }
  ];

  const azureApps = [
    { name: 'Entra ID', use: 0.9, x: 450, y: 720, lx: 450, ly: 750, anchor: 'middle' },
    { name: 'Intune', use: 0.5, x: 600, y: 720, lx: 600, ly: 750, anchor: 'middle' },
    { name: 'Purview', use: 0.15, x: 750, y: 720, lx: 750, ly: 750, anchor: 'middle' },
    { name: 'Azure AI', use: 0.3, x: 525, y: 800, lx: 525, ly: 830, anchor: 'middle' },
    { name: 'Defender', use: 0.4, x: 675, y: 800, lx: 675, ly: 830, anchor: 'middle' }
  ];

  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT COLUMN: Headings */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-[#ECEAE4] uppercase"
        >
          One Microsoft cloud · lit by use
        </motion.div>

        {/* Center: Main Headline */}
        <div className="my-auto py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
              We'll know <br />
              what's used.
            </h1>
            <div className="font-serif-italic text-3xl sm:text-4xl lg:text-6xl text-[#F2A41F] mt-2">
              And what isn't.
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-sm text-[#8C969B] max-w-sm font-sans leading-relaxed"
          >
            Giving licences is easy. Making sure they are used is the real job. We analyse adoption across every institution and circle, showing exactly where to run training and push capability.
          </motion.p>
        </div>

        {/* Bottom Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[11px] text-[#8C969B] font-mono tracking-wider uppercase"
        >
          CONTINUOUS TELEMETRY · ZERO GUESSWORK
        </motion.div>

      </div>

      {/* RIGHT COLUMN: 3 Cloud Circles SVG Diagram */}
      <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full max-w-[720px] aspect-[1180/930]"
        >
          <svg viewBox="0 0 1180 930" className="w-full h-full drop-shadow-2xl">
            
            {/* Circle 1: Microsoft 365 */}
            <circle cx="400" cy="330" r="300" fill="none" stroke="#222B30" strokeWidth="2" strokeDasharray="4 6" />
            <text x="330" y="118" textAnchor="middle" fill="#ECEAE4" className="font-mono text-sm tracking-widest font-bold">
              MICROSOFT 365
            </text>

            {/* Circle 2: Dynamics 365 */}
            <circle cx="800" cy="330" r="300" fill="none" stroke="#222B30" strokeWidth="2" strokeDasharray="4 6" />
            <text x="870" y="118" textAnchor="middle" fill="#ECEAE4" className="font-mono text-sm tracking-widest font-bold">
              DYNAMICS 365
            </text>

            {/* Circle 3: Azure & Entra */}
            <circle cx="600" cy="620" r="300" fill="none" stroke="#222B30" strokeWidth="2" strokeDasharray="4 6" />
            <text x="600" y="885" textAnchor="middle" fill="#ECEAE4" className="font-mono text-sm tracking-widest font-bold">
              AZURE & ENTRA
            </text>

            {/* Intersection: Power Platform */}
            <g className="transition-transform duration-300 hover:scale-105">
              <circle cx="600" cy="232" r="11" fill={ramp[Math.round(0.35 * 4)]} stroke="#ECEAE4" strokeWidth="1.5" />
              <text x="600" y="266" textAnchor="middle" fill="#ECEAE4" className="font-mono text-xs font-bold">
                Power Platform
              </text>
              <text x="600" y="286" textAnchor="middle" fill="#8C969B" className="font-mono text-[10px] tracking-widest">
                BI · APPS · AUTOMATE
              </text>
            </g>

            {/* Center Core: Copilot + Agents */}
            <g className="transition-transform duration-500 hover:scale-110">
              <circle cx="600" cy="437" r="62" fill="#F2A41F" opacity="0.15" className="animate-ping" />
              <circle cx="600" cy="437" r="54" fill="#F2A41F" stroke="#F2A41F" strokeWidth="2" />
              <text x="600" y="434" textAnchor="middle" fill="#0D1114" className="font-mono text-base font-extrabold tracking-widest">
                COPILOT
              </text>
              <text x="600" y="456" textAnchor="middle" fill="#0D1114" className="font-mono text-[11px] font-bold tracking-wider">
                + AGENTS
              </text>
            </g>

            {/* M365 App Nodes */}
            {m365Apps.map((a, i) => (
              <g key={`m365-${i}`} className="transition-all duration-300 hover:scale-110">
                <circle cx={a.x} cy={a.y} r="11" fill={ramp[Math.round(a.use * 4)]} stroke="rgba(236,234,228,0.5)" strokeWidth="1.5" />
                <text x={a.lx} y={a.ly} textAnchor={a.anchor} fill="#ECEAE4" className="font-mono text-xs">
                  {a.name}
                </text>
              </g>
            ))}

            {/* Dynamics App Nodes */}
            {dynApps.map((a, i) => (
              <g key={`dyn-${i}`} className="transition-all duration-300 hover:scale-110">
                <circle cx={a.x} cy={a.y} r="11" fill={ramp[Math.round(a.use * 4)]} stroke="rgba(236,234,228,0.5)" strokeWidth="1.5" />
                <text x={a.lx} y={a.ly} textAnchor={a.anchor} fill="#ECEAE4" className="font-mono text-xs">
                  {a.name}
                </text>
              </g>
            ))}

            {/* Azure App Nodes */}
            {azureApps.map((a, i) => (
              <g key={`azure-${i}`} className="transition-all duration-300 hover:scale-110">
                <circle cx={a.x} cy={a.y} r="11" fill={ramp[Math.round(a.use * 4)]} stroke="rgba(236,234,228,0.5)" strokeWidth="1.5" />
                <text x={a.lx} y={a.ly} textAnchor={a.anchor} fill="#ECEAE4" className="font-mono text-xs">
                  {a.name}
                </text>
              </g>
            ))}

            {/* Sample Usage Legend */}
            <g transform="translate(30, 896)">
              <text x="0" y="14" fill="#8C969B" className="font-mono text-[11px] tracking-wider">
                SAMPLE USAGE · LOW
              </text>
              {ramp.map((col, i) => (
                <rect key={`ramp-${i}`} x={170 + i * 30} y="1" width="24" height="15" rx="3" fill={col} stroke="rgba(236,234,228,0.3)" />
              ))}
              <text x="170 + 5 * 30 + 10" y="14" fill="#ECEAE4" className="font-mono text-[11px] tracking-wider font-bold">
                HIGH
              </text>
            </g>

          </svg>
        </motion.div>
      </div>

    </div>
  );
}
