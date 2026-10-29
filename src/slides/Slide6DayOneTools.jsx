import React from 'react';
import { motion } from 'framer-motion';

export default function Slide6DayOneTools() {
  return (
    <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch select-none overflow-hidden bg-[#0D1114]">
      
      {/* LEFT HALF */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 z-10 max-w-2xl">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-[#F2A41F] uppercase font-semibold"
        >
          Microsoft 365 + JetBrains
        </motion.div>

        {/* Center: Main Headline */}
        <div className="my-auto py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
              Trained on
            </h1>
            <div className="font-serif-italic text-3xl sm:text-4xl lg:text-6xl text-[#F2A41F] mt-1">
              day-one tools.
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            Excel for lab data. Word for project reports. Teams for classes, reviews, client calls and interviews. And for engineering students, JetBrains professional IDEs used by 88 of the Fortune Global 100.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 grid grid-cols-2 gap-4 font-mono text-xs"
          >
            <div className="p-4 rounded-xl bg-[#1C252A] border border-[#28343C]">
              <span className="font-bold text-3xl text-[#ECEAE4] block font-display">88</span>
              <span className="text-[11px] text-[#8C969B] uppercase tracking-wider block mt-1">of the Fortune Global 100 use JetBrains</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1C252A] border border-[#28343C]">
              <span className="font-bold text-3xl text-[#F2A41F] block font-display">11.4M+</span>
              <span className="text-[11px] text-[#8C969B] uppercase tracking-wider block mt-1">developers · real projects, real code</span>
            </div>
          </motion.div>
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[11px] text-[#8C969B] font-mono"
        >
          Source: JetBrains Annual Highlights 2024
        </motion.div>

      </div>

      {/* RIGHT HALF: DAY-ONE TOOLS INTERACTIVE MOCKUPS */}
      <div className="flex-1 flex flex-col justify-center p-6 sm:p-12 overflow-hidden gap-4">
        
        {/* Top: Excel + Word + Teams Mini Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto">
          
          {/* Mock Excel Sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-xl bg-[#1C252A] border border-[#28343C] overflow-hidden text-xs font-mono shadow-xl"
          >
            <div className="bg-[#242F35] px-3 py-1.5 flex items-center justify-between text-[11px] border-b border-[#28343C]">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <span>📊</span> Excel Lab Model
              </span>
              <span className="text-[#8C969B]">fx =AVERAGE(C2:C6)</span>
            </div>
            <table className="w-full text-left">
              <thead className="bg-[#182126] text-[#8C969B] text-[10px]">
                <tr>
                  <th className="p-2">Batch</th>
                  <th className="p-2">Lab</th>
                  <th className="p-2">Score</th>
                  <th className="p-2">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242F35] text-[11px]">
                <tr>
                  <td className="p-2 text-[#ECEAE4]">CSE-A</td>
                  <td className="p-2 text-[#8C969B]">ML-04</td>
                  <td className="p-2 text-[#ECEAE4]">82</td>
                  <td className="p-2 text-emerald-400">▲ 6</td>
                </tr>
                <tr>
                  <td className="p-2 text-[#ECEAE4]">ECE-A</td>
                  <td className="p-2 text-[#8C969B]">VLSI-2</td>
                  <td className="p-2 text-[#ECEAE4]">71</td>
                  <td className="p-2 text-emerald-400">▲ 9</td>
                </tr>
                <tr>
                  <td className="p-2 text-[#ECEAE4]">CIVIL</td>
                  <td className="p-2 text-[#8C969B]">GIS-3</td>
                  <td className="p-2 text-[#ECEAE4]">74</td>
                  <td className="p-2 text-emerald-400">▲ 5</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Teams Video + Word Report */}
          <div className="flex flex-col gap-3">
            {/* Word Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-3 rounded-xl bg-[#1C252A] border border-[#28343C] flex items-center gap-3 text-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-base">
                W
              </div>
              <div>
                <span className="text-[10px] text-[#8C969B] uppercase font-mono block">Microsoft Word</span>
                <span className="text-[#ECEAE4] font-medium">Final-year project report</span>
              </div>
            </motion.div>

            {/* Teams Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="p-3 rounded-xl bg-[#1C252A] border border-[#28343C] text-xs font-mono"
            >
              <div className="flex items-center justify-between text-[11px] text-[#8C969B] mb-2">
                <span className="text-purple-400 font-bold flex items-center gap-1">
                  <span>📹</span> Teams Live Review
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                <div className="bg-[#242F35] p-1.5 rounded text-[#ECEAE4] font-bold">SR (You)</div>
                <div className="bg-[#242F35] p-1.5 rounded text-[#8C969B]">AK (Mentor)</div>
                <div className="bg-[#242F35] p-1.5 rounded text-[#8C969B]">PM (Client)</div>
                <div className="bg-[#242F35] p-1.5 rounded text-[#F2A41F]">+24 Class</div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom: IntelliJ IDEA Real Kotlin Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-lg mx-auto rounded-xl bg-[#141B1F] border border-[#28343C] overflow-hidden text-xs font-mono shadow-2xl"
        >
          <div className="bg-[#1C252A] px-4 py-2 flex items-center justify-between text-[11px] border-b border-[#28343C]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="text-[#8C969B] ml-2">IntelliJ IDEA · placement-portal / OfferController.kt</span>
            </div>
            <span className="text-emerald-400 font-semibold text-[10px]">✓ tests pass</span>
          </div>
          <div className="p-4 space-y-1 text-[#ECEAE4] leading-relaxed text-[11px] sm:text-xs bg-[#101619]">
            <p><span className="text-[#8C969B] select-none mr-3">12</span><span className="text-amber-400">@GetMapping</span>(<span className="text-emerald-400">"/offers"</span>)</p>
            <p><span className="text-[#8C969B] select-none mr-3">13</span><span className="text-purple-400">fun</span> <span className="text-sky-300">offers</span>(student: Student): List&lt;Offer&gt; =</p>
            <p><span className="text-[#8C969B] select-none mr-3">14</span>  repo.<span className="text-sky-300">findOpen</span>()</p>
            <p><span className="text-[#8C969B] select-none mr-3">15</span>    .<span className="text-sky-300">filter</span> &#123; it.<span className="text-sky-300">matches</span>(student.skills) &#125;</p>
            <p><span className="text-[#8C969B] select-none mr-3">16</span>    .<span className="text-sky-300">sortedByDescending</span> &#123; it.ctc &#125;</p>
          </div>
        </motion.div>

      </div>

    </div>
  );
}
