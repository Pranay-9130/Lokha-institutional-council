import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { SLIDES } from './data/slidesData';
import NavigationControls from './components/NavigationControls';
import SlideOverviewModal from './components/SlideOverviewModal';
import SpeakerNotesDrawer from './components/SpeakerNotesDrawer';

// 19 Bespoke Presentation Slides
import Slide1Opening from './slides/Slide1Opening';
import Slide2Vision from './slides/Slide2Vision';
import Slide3GlobalResearch from './slides/Slide3GlobalResearch';
import Slide4Microsoft365 from './slides/Slide4Microsoft365';
import Slide5CampusIndustry from './slides/Slide5CampusIndustry';
import Slide6DayOneTools from './slides/Slide6DayOneTools';
import Slide7CloudIntelligence from './slides/Slide7CloudIntelligence';
import Slide8Support247 from './slides/Slide8Support247';
import Slide9AiLoop from './slides/Slide9AiLoop';
import Slide10JobsDeploy from './slides/Slide10JobsDeploy';
import Slide11StudentOffers from './slides/Slide11StudentOffers';
import Slide12Hackathons from './slides/Slide12Hackathons';
import Slide13StartupFund from './slides/Slide13StartupFund';
import Slide14WorldOffers from './slides/Slide14WorldOffers';
import Slide15InstitutionsMap from './slides/Slide15InstitutionsMap';
import Slide16LiveProfessor from './slides/Slide16LiveProfessor';
import Slide17QuantumValley from './slides/Slide17QuantumValley';
import Slide18CarryCost from './slides/Slide18CarryCost';
import Slide19Closing from './slides/Slide19Closing';

// Directional slide variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 36 },
      opacity: { duration: 0.3 }
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 320, damping: 36 },
      opacity: { duration: 0.2 }
    }
  })
};

export default function App() {
  const getInitialSlide = () => {
    const hash = window.location.hash;
    const match = hash.match(/^#s(\d+)$/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num >= 1 && num <= SLIDES.length) return num;
    }
    return 1;
  };

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);
  const [direction, setDirection] = useState(1);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  // Sync hash with current slide
  useEffect(() => {
    window.location.hash = `s${currentSlide}`;
  }, [currentSlide]);

  // Listen to hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const target = getInitialSlide();
      if (target !== currentSlide) {
        setDirection(target > currentSlide ? 1 : -1);
        setCurrentSlide(target);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < SLIDES.length) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const handleJumpToSlide = useCallback((slideNum) => {
    if (slideNum >= 1 && slideNum <= SLIDES.length) {
      setDirection(slideNum > currentSlide ? 1 : -1);
      setCurrentSlide(slideNum);
    }
  }, [currentSlide]);

  const handleRestart = useCallback(() => {
    setDirection(-1);
    setCurrentSlide(1);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNotesOpen(prev => !prev);
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setIsOverviewOpen(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      } else if (e.key === 'Escape') {
        if (isOverviewOpen) setIsOverviewOpen(false);
        if (isNotesOpen) setIsNotesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isOverviewOpen, isNotesOpen]);

  // Current Slide Component
  const CurrentSlideComponent = useMemo(() => {
    switch (currentSlide) {
      case 1:
        return <Slide1Opening onNext={handleNext} />;
      case 2:
        return <Slide2Vision />;
      case 3:
        return <Slide3GlobalResearch />;
      case 4:
        return <Slide4Microsoft365 />;
      case 5:
        return <Slide5CampusIndustry />;
      case 6:
        return <Slide6DayOneTools />;
      case 7:
        return <Slide7CloudIntelligence />;
      case 8:
        return <Slide8Support247 />;
      case 9:
        return <Slide9AiLoop />;
      case 10:
        return <Slide10JobsDeploy />;
      case 11:
        return <Slide11StudentOffers />;
      case 12:
        return <Slide12Hackathons />;
      case 13:
        return <Slide13StartupFund />;
      case 14:
        return <Slide14WorldOffers />;
      case 15:
        return <Slide15InstitutionsMap />;
      case 16:
        return <Slide16LiveProfessor />;
      case 17:
        return <Slide17QuantumValley />;
      case 18:
        return <Slide18CarryCost />;
      case 19:
        return <Slide19Closing onRestart={handleRestart} onToggleOverview={() => setIsOverviewOpen(true)} />;
      default:
        return <Slide1Opening onNext={handleNext} />;
    }
  }, [currentSlide, handleNext, handleRestart]);

  const activeMeta = SLIDES[currentSlide - 1] || SLIDES[0];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0D1114] text-[#ECEAE4] flex flex-col font-sans select-none">
      
      {/* Main Slide Deck Area (with Directional Transitions) */}
      <main className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center pb-14">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {CurrentSlideComponent}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls matching reference site */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={SLIDES.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onToggleOverview={() => setIsOverviewOpen(true)}
        onToggleNotes={() => setIsNotesOpen(prev => !prev)}
        isNotesOpen={isNotesOpen}
      />

      {/* Slide Overview Grid Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={SLIDES}
        currentSlide={currentSlide}
        onSelectSlide={handleJumpToSlide}
      />

      {/* Presenter Speaker Notes Drawer */}
      <SpeakerNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slideNumber={currentSlide}
        title={activeMeta.title}
        notes={activeMeta.notes}
      />

    </div>
  );
}
