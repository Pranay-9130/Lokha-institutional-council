import React from 'react';
import { X, Volume2 } from 'lucide-react';

export default function SpeakerNotesDrawer({ isOpen, onClose, slideNumber, title, notes }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#141B1F] border-l border-[#28343C] shadow-2xl p-6 flex flex-col justify-between text-[#ECEAE4] select-text"
      role="dialog"
      aria-modal="true"
      aria-label="Speaker Notes"
    >
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-[#28343C]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#1C252A] text-[#F2A41F] font-bold">
              SLIDE {String(slideNumber).padStart(2, '0')}
            </span>
            <span className="font-mono text-xs text-[#8C969B] uppercase tracking-wider">
              Speaker Notes
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded text-[#8C969B] hover:text-white hover:bg-[#28343C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-lg font-bold text-white mt-4 mb-2">
          {title}
        </h3>

        <div className="mt-4 p-4 rounded-xl bg-[#0D1114] border border-[#28343C] text-sm text-[#ECEAE4]/90 leading-relaxed font-sans max-h-[60vh] overflow-y-auto custom-scrollbar">
          {notes || "No notes available for this slide."}
        </div>
      </div>

      <div className="pt-4 border-t border-[#28343C] flex items-center justify-between text-xs font-mono text-[#8C969B]">
        <span>Press N to close notes</span>
        <span className="text-[#F2A41F]">Lokha Presenter View</span>
      </div>
    </div>
  );
}
