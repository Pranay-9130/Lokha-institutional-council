import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { num: '01', title: 'Problem', desc: 'Identify real institutional or enterprise friction.' },
  { num: '02', title: 'Build', desc: 'Architect tailored agent logic and workflow memory.' },
  { num: '03', title: 'Automate', desc: 'Deploy with enterprise security & monitoring guardrails.' },
  { num: '04', title: 'Improve', desc: 'Evaluate outputs and feed learnings back into the loop.' },
];

export default function Slide8AiAutomation() {
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
          AUTONOMOUS WORKFLOW SYSTEMS
        </motion.div>

        {/* Headline */}
        <div className="my-auto py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#ECEAE4] leading-tight tracking-tight"
          >
            Problems in. <br />
            <span className="font-serif-italic font-normal text-4xl sm:text-5xl lg:text-6xl text-[#F2A41F]">
              Solutions out. On loop.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm text-[#8C969B] max-w-md font-sans leading-relaxed"
          >
            We use AI to solve verified operational problems. We build custom agents tailored to real enterprise data rather than generic chatbots.
          </motion.p>

          {/* 4 Loop Steps */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {STEPS.map((s) => (
              <div key={s.num} className="p-3 rounded-xl bg-[#1C252A] border border-[#28343C]">
                <div className="font-mono text-xs font-bold text-[#F2A41F] mb-1">{s.num} {s.title}</div>
                <div className="text-xs text-[#8C969B]">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#8C969B] uppercase">
          HUMAN-IN-THE-LOOP · SECURE DEPLOYMENT
        </div>

      </div>

      {/* RIGHT HALF: CONTINUOUS PROCESS LOOP VISUAL */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 relative flex items-center justify-center p-6 sm:p-12 overflow-hidden"
      >
        <div className="relative w-full max-w-md p-6 rounded-2xl bg-[#1C252A] border border-[#28343C] shadow-2xl space-y-4">
          <div className="font-mono text-xs text-[#F2A41F] uppercase tracking-wider font-semibold">
            Agents in the Loop
          </div>

          <div className="space-y-2">
            {['Microsoft Copilot', 'Anthropic Claude', 'Google Gemini', 'OpenAI ChatGPT'].map((m) => (
              <div key={m} className="p-3 rounded-xl bg-[#0D1114] border border-[#28343C] flex items-center justify-between text-xs font-mono">
                <span className="text-[#ECEAE4] font-bold">{m}</span>
                <span className="text-[#8C969B]">Custom Orchestration</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-[#0D1114]/60 border border-[#28343C] text-[11px] font-mono text-[#8C969B]">
            A general chatbot lacks institutional knowledge. We construct custom agents around verified campus and enterprise problems.
          </div>
        </div>
      </motion.div>

    </div>
  );
}
