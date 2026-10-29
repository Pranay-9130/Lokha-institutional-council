import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  LayoutGrid, 
  FileText
} from 'lucide-react';

export default function NavigationControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleOverview,
  onToggleNotes,
  isNotesOpen
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn('Fullscreen request failed:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.warn(err));
      }
    }
  };

  const progressPercent = (currentSlide / totalSlides) * 100;

  return (
    <footer 
      className="fixed bottom-0 left-0 right-0 z-40 h-14 px-4 sm:px-8 bg-[#0D1114]/95 border-t border-[#1C252A] flex items-center justify-between text-xs select-none backdrop-blur-md"
      role="region"
      aria-label="Presentation Controls"
    >
      {/* Top micro progress line in festival marigold */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#1C252A]">
        <div 
          className="h-full bg-[#F2A41F] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(242,164,31,0.6)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Left: Organization Wordmark */}
      <div className="flex items-center gap-2.5">
        <img 
          src="/lokha-logo.png" 
          alt="Lokha Logo" 
          className="w-5 h-5 object-contain filter drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]" 
        />
        <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-[#ECEAE4]/80 uppercase">
          LOKHA INSTITUTIONAL COUNCIL
        </span>
      </div>

      {/* Center: Keyboard Navigation Hints */}
      <div className="hidden lg:flex items-center gap-3 font-mono text-[10px] tracking-widest text-[#8C969B] uppercase">
        <span>→ NEXT</span>
        <span>·</span>
        <span>← PREV</span>
        <span>·</span>
        <span>N NOTES</span>
        <span>·</span>
        <span>F FULL SCREEN</span>
      </div>

      {/* Right: Sleek Reference Style Buttons */}
      <div className="flex items-center gap-2">
        {/* Prev Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide <= 1}
          className={`px-3 py-1.5 rounded bg-[#1C252A] border border-[#28343C] font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1 ${
            currentSlide <= 1 
              ? 'opacity-30 cursor-not-allowed text-[#8C969B]' 
              : 'text-[#ECEAE4] hover:bg-[#28343C] hover:border-[#8C969B] active:scale-95'
          }`}
          title="Previous Slide (←)"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>PREV</span>
        </button>

        {/* Next Button (Highlight with gold border) */}
        <button
          onClick={onNext}
          disabled={currentSlide >= totalSlides}
          className={`px-3.5 py-1.5 rounded bg-[#1C252A] border font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1 ${
            currentSlide >= totalSlides
              ? 'opacity-30 cursor-not-allowed border-[#28343C] text-[#8C969B]'
              : 'border-[#F2A41F] text-[#F2A41F] hover:bg-[#F2A41F]/15 active:scale-95 shadow-[0_0_10px_rgba(242,164,31,0.2)]'
          }`}
          title="Next Slide (→ or Space)"
          aria-label="Next Slide"
        >
          <span>NEXT</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Notes Toggle */}
        <button
          onClick={onToggleNotes}
          className={`px-3 py-1.5 rounded bg-[#1C252A] border font-mono text-xs uppercase tracking-wider transition-all hidden sm:flex items-center gap-1 ${
            isNotesOpen
              ? 'border-[#F2A41F] text-[#F2A41F]'
              : 'border-[#28343C] text-[#ECEAE4] hover:bg-[#28343C] hover:border-[#8C969B]'
          }`}
          title="Toggle Speaker Notes (N)"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>NOTES</span>
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="px-3 py-1.5 rounded bg-[#1C252A] border border-[#28343C] text-[#ECEAE4] hover:bg-[#28343C] hover:border-[#8C969B] font-mono text-xs uppercase tracking-wider transition-all hidden md:flex items-center gap-1"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span>FULL SCREEN</span>
        </button>

        {/* Slide Grid / Overview Button */}
        <button
          onClick={onToggleOverview}
          className="p-1.5 px-2 rounded bg-[#1C252A] border border-[#28343C] text-[#ECEAE4] hover:bg-[#28343C] hover:border-[#8C969B] font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1"
          title="View All Slides (O)"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-[#F2A41F]" />
          <span className="font-mono text-xs font-bold text-[#F2A41F]">
            {String(currentSlide).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
          </span>
        </button>
      </div>
    </footer>
  );
}
