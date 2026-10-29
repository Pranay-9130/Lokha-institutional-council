import React from 'react';
import { motion } from 'framer-motion';

export default function Slide5CampusIndustry() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none overflow-y-auto lg:overflow-hidden bg-[#0D1114]">
      
      {/* HEADER: Title & Subtitle */}
      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ECEAE4] leading-tight tracking-tight">
            Built for campuses.
          </h1>
          <div className="font-serif-italic text-3xl sm:text-4xl lg:text-5xl text-[#F2A41F] mt-1">
            Ready for industry.
          </div>
        </motion.div>
      </div>

      {/* MAIN TWO-COLUMN COMPARISON / ECOSYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 my-auto py-4 z-10">
        
        {/* LEFT COLUMN: Campus 3-Layer Stack & Proof Metrics */}
        <div className="flex flex-col justify-between gap-6">
          
          <div>
            <div className="font-mono text-xs tracking-widest text-[#ECEAE4] uppercase mb-3">
              Microsoft 365 Education · three layers
            </div>
            
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-4 rounded-xl bg-[#151C20] border border-[#222B30] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[#F2A41F] font-bold sm:w-28">Students</span>
                <span className="text-sm font-semibold text-[#ECEAE4] flex-1">Learning Accelerators · study agents · Copilot Chat</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="p-4 rounded-xl bg-[#151C20] border border-[#222B30] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[#F2A41F] font-bold sm:w-28">Faculty</span>
                <span className="text-sm font-semibold text-[#ECEAE4] flex-1">Course planning · auto-grading · assessment drafts</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-4 rounded-xl bg-[#151C20] border border-[#222B30] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[#F2A41F] font-bold sm:w-28">Campus IT</span>
                <span className="text-sm font-semibold text-[#ECEAE4] flex-1">Intune for Education · Entra ID · Purview security</span>
              </motion.div>
            </div>
          </div>

          {/* Proof Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="p-3 rounded-xl bg-[#1C252A] border border-[#28343C]"
            >
              <span className="font-extrabold text-2xl sm:text-3xl text-[#ECEAE4] font-display block">161%</span>
              <span className="text-[11px] text-[#8C969B] block mt-1 leading-snug">ROI on M365 A5 in higher education</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="p-3 rounded-xl bg-[#1C252A] border border-[#28343C]"
            >
              <span className="font-extrabold text-2xl sm:text-3xl text-[#ECEAE4] font-display block">93%</span>
              <span className="text-[11px] text-[#8C969B] block mt-1 leading-snug">students used AI for school (87% faculty)</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="p-3 rounded-xl bg-[#1C252A] border border-[#28343C]"
            >
              <span className="font-extrabold text-2xl sm:text-3xl text-[#F2A41F] font-display block">9.3 h</span>
              <span className="text-[11px] text-[#8C969B] block mt-1 leading-snug">saved/week per educator in Copilot pilot</span>
            </motion.div>
          </div>

        </div>

        {/* RIGHT COLUMN: What Employers Expect & The India Gap */}
        <div className="flex flex-col justify-between gap-6">
          
          <div>
            <div className="font-mono text-xs tracking-widest text-[#ECEAE4] uppercase mb-3">
              What employers expect
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-4 rounded-xl bg-[#151C20] border border-[#222B30]"
              >
                <h4 className="font-bold text-sm text-[#F2A41F] mb-2">Data literacy</h4>
                <div className="text-xs text-[#8C969B] space-y-1.5 font-mono">
                  <p>Power BI dashboards</p>
                  <p>Excel data models</p>
                  <p>Copilot data analysis</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="p-4 rounded-xl bg-[#151C20] border border-[#222B30]"
              >
                <h4 className="font-bold text-sm text-[#F2A41F] mb-2">Security & compliance</h4>
                <div className="text-xs text-[#8C969B] space-y-1.5 font-mono">
                  <p>Data loss prevention</p>
                  <p>Sensitivity labels</p>
                  <p>Entra ID access control</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="p-4 rounded-xl bg-[#151C20] border border-[#222B30]"
              >
                <h4 className="font-bold text-sm text-[#F2A41F] mb-2">Workflow automation</h4>
                <div className="text-xs text-[#8C969B] space-y-1.5 font-mono">
                  <p>Power Automate flows</p>
                  <p>Copilot Studio agents</p>
                  <p>Teams app integration</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* The India Gap Callout Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="p-5 rounded-xl bg-[#1C252A] border-l-4 border-l-[#F2A41F] border border-[#28343C]"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[#F2A41F] font-bold mb-1">
              The India gap
            </div>
            <p className="text-sm text-[#ECEAE4] leading-relaxed">
              The world's workplaces already run on these tools. Most of our campuses don't, so our graduates spend their first months catching up.
            </p>
          </motion.div>

        </div>

      </div>

      {/* FOOTER: Official Sources */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="text-[11px] text-[#8C969B] font-mono leading-relaxed z-10"
      >
        Sources: Forrester TEI of Microsoft 365 A5 for higher education · Microsoft 2025 AI in Education Report · Microsoft Education blog, Brisbane Catholic Education pilot
      </motion.div>

    </div>
  );
}
