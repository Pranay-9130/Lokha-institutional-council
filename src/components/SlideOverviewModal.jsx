import React from 'react';
import { X, Check } from 'lucide-react';

export default function SlideOverviewModal({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onSelectSlide
}) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0D1114]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="All Slides Overview"
    >
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] bg-[#141B1F] border border-[#28343C] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#ECEAE4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#28343C] bg-[#101619]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#F2A41F] uppercase">
                LOKHA INSTITUTIONAL COUNCIL
              </span>
              <span className="text-[#8C969B]">·</span>
              <span className="text-xs text-[#8C969B] font-mono">19 Slide Architecture</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-[#ECEAE4] tracking-tight mt-0.5">
              Presentation Slide Index
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1C252A] hover:bg-[#28343C] text-[#8C969B] hover:text-[#ECEAE4] transition-colors cursor-pointer"
            title="Close Overview (Esc)"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Grid */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 custom-scrollbar">
          {slides.map((s) => {
            const isActive = s.number === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => {
                  onSelectSlide(s.number);
                  onClose();
                }}
                className={`group relative text-left p-4 rounded-xl border transition-all flex flex-col justify-between h-[155px] cursor-pointer ${
                  isActive
                    ? 'bg-[#1C252A] border-[#F2A41F] shadow-[0_0_20px_rgba(242,164,31,0.2)] ring-1 ring-[#F2A41F]'
                    : 'bg-[#182126] border-[#222B30] hover:bg-[#1E292F] hover:border-[#33424C]'
                }`}
              >
                {/* Top: Number & Category */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive ? 'bg-[#F2A41F] text-[#0D1114]' : 'bg-[#242F35] text-[#ECEAE4]'
                    }`}>
                      {String(s.number).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#8C969B]">
                      {s.category}
                    </span>
                  </div>

                  {isActive && (
                    <span className="flex items-center gap-1 text-[11px] text-[#F2A41F] font-mono font-bold">
                      <Check className="w-3.5 h-3.5" />
                      Active
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="my-1">
                  <h3 className={`text-sm font-semibold line-clamp-2 leading-snug group-hover:text-[#F2A41F] transition-colors ${
                    isActive ? 'text-[#F2A41F]' : 'text-[#ECEAE4]'
                  }`}>
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-[#8C969B] line-clamp-2 mt-1 leading-normal font-sans">
                    {s.subtitle}
                  </p>
                </div>

                {/* Footer indicator */}
                <div className="text-[10px] font-mono text-[#8C969B] group-hover:text-[#ECEAE4] flex items-center justify-between pt-1 border-t border-[#242F35]">
                  <span>Jump to slide</span>
                  <span className="group-hover:translate-x-0.5 transition-transform font-bold">#s{s.number} →</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#101619] border-t border-[#28343C] flex items-center justify-between text-xs font-mono text-[#8C969B]">
          <span>Keyboard: Press <kbd className="px-1.5 py-0.5 rounded bg-[#1C252A] text-[#ECEAE4]">O</kbd> to toggle overview</span>
          <span>586 Campuses · One Direction</span>
        </div>
      </div>
    </div>
  );
}
