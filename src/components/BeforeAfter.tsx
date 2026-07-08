import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { TRANSFORMATION_CASES } from '../data';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';

interface BeforeAfterProps {
  onOpenAssessment?: () => void;
}

export default function BeforeAfter({ onOpenAssessment }: BeforeAfterProps) {
  const N = TRANSFORMATION_CASES.length;
  // Duplicate array 3 times for a seamless infinite loop scrolling effect
  const extendedCases = [
    ...TRANSFORMATION_CASES,
    ...TRANSFORMATION_CASES,
    ...TRANSFORMATION_CASES,
  ];

  const [activeIndex, setActiveIndex] = useState(N); // Start in middle copy (index 5)
  const [disableTransition, setDisableTransition] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // ResizeObserver to automatically measure the container size
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance timer: 2.5 seconds pause
  useEffect(() => {
    if (isHovered || disableTransition) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2500); // 2.5 seconds auto-advance

    return () => clearInterval(timer);
  }, [disableTransition, resetTimer, isHovered]);

  const handleNext = () => {
    if (disableTransition) return;
    setActiveIndex((prev) => prev + 1);
    setResetTimer((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (disableTransition) return;
    setActiveIndex((prev) => prev - 1);
    setResetTimer((prev) => prev + 1);
  };

  const handleDotClick = (idx: number) => {
    if (disableTransition) return;
    setActiveIndex(idx + N);
    setResetTimer((prev) => prev + 1);
  };

  // Re-enable transition if it was disabled for jump reset
  useEffect(() => {
    if (disableTransition) {
      const raft = requestAnimationFrame(() => {
        setDisableTransition(false);
      });
      return () => cancelAnimationFrame(raft);
    }
  }, [disableTransition]);

  // Handle the seamless infinite wrap
  const handleAnimationComplete = () => {
    if (activeIndex >= 2 * N) {
      setDisableTransition(true);
      setActiveIndex(activeIndex - N);
    } else if (activeIndex < N) {
      setDisableTransition(true);
      setActiveIndex(activeIndex + N);
    }
  };

  const getSlideWidth = () => {
    if (containerWidth === 0) return 340;
    if (containerWidth < 480) return Math.min(containerWidth - 40, 280);
    if (containerWidth < 768) return 300;
    if (containerWidth < 1024) return 320;
    return 340;
  };

  const slideWidth = getSlideWidth();
  const gap = 24;
  const centerOffset = (containerWidth - slideWidth) / 2;
  const xTranslation = -activeIndex * (slideWidth + gap) + centerOffset;

  // Render original index for active dot and labels
  const realIndex = activeIndex % N;

  return (
    <section id="results" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-b border-white/5">
      
      {/* Background Thin Red Grid Lines ('faixas vermelhas por trás') exactly like the shared screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        {/* Horizontal grid lines */}
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-red-600/15" />
        <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-red-600/20" />
        <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-red-600/15" />
        
        {/* Vertical grid lines */}
        <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-red-600/15" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-red-600/20" />
        <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-red-600/15" />

        {/* Large atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            RESULTADOS QUE <span className="text-red-500 italic">COMPROVAM O MÉTODO</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto px-4 sm:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors cursor-pointer hidden sm:block"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors cursor-pointer hidden sm:block"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Sliding Viewport Container */}
          <div 
            ref={containerRef} 
            className="w-full overflow-hidden py-8 cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={{ x: xTranslation }}
              transition={
                disableTransition
                  ? { duration: 0 }
                  : { ease: [0.25, 1, 0.5, 1], duration: 0.5 }
              }
              onAnimationComplete={handleAnimationComplete}
              className="flex items-stretch gap-6"
              style={{ width: 'max-content' }}
            >
              {extendedCases.map((caseItem, i) => {
                return (
                  <motion.div
                    key={`${i}-${caseItem.id}`}
                    className="flex flex-col rounded-3xl overflow-hidden border border-red-500/10 bg-zinc-900 shadow-2xl select-none flex-shrink-0"
                    style={{
                      width: slideWidth,
                    }}
                  >
                    {/* Card Red Header */}
                    <div className="bg-red-600 text-white flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider h-11">
                      <span className="font-mono text-[10px] font-black text-zinc-100">
                        [ {caseItem.duration} ]
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[9px] text-red-600 font-black italic">
                          BG
                        </div>
                        <span className="text-[10px] font-black tracking-widest text-white leading-none">TEAM</span>
                      </div>
                    </div>

                    {/* Split Image Showcase (Antes vs Depois) with angled cut */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950 select-none">
                      
                      {/* Before Image (Left angle) */}
                      <div 
                        className="absolute inset-0 z-10" 
                        style={{ clipPath: 'polygon(0 0, 52% 0, 48% 100%, 0 100%)' }}
                      >
                        <img 
                          src={caseItem.beforeImg} 
                          alt="Antes"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale brightness-90" 
                        />
                      </div>

                      {/* After Image (Right angle) */}
                      <div 
                        className="absolute inset-0 z-10" 
                        style={{ clipPath: 'polygon(52% 0, 100% 0, 100% 100%, 48% 100%)' }}
                      >
                        <img 
                          src={caseItem.afterImg} 
                          alt="Depois"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                        />
                      </div>

                      {/* Red diagonal dividing line */}
                      <div className="absolute top-0 bottom-0 left-[50%] w-[1.5px] bg-red-600 z-20 transform -translate-x-1/2 -skew-x-[2.3deg] shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
                    </div>

                    {/* Bottom "ANTES" / "DEPOIS" bar with matching diagonal cut */}
                    <div className="relative h-9 w-full overflow-hidden select-none border-t border-white/5">
                      {/* Background slants */}
                      <div 
                        className="absolute inset-0 bg-zinc-800" 
                        style={{ clipPath: 'polygon(0 0, 51% 0, 49% 100%, 0 100%)' }}
                      />
                      <div 
                        className="absolute inset-0 bg-zinc-950" 
                        style={{ clipPath: 'polygon(51% 0, 100% 0, 100% 100%, 49% 100%)' }}
                      />

                      {/* Text overlays on top of slants, centered on each half */}
                      <div className="absolute inset-0 flex z-10">
                        {/* Left "ANTES" Half */}
                        <div className="w-1/2 flex items-center justify-center pr-3">
                          <span className="text-[9px] font-black text-white tracking-widest uppercase">ANTES</span>
                        </div>
                        {/* Right "DEPOIS" Half */}
                        <div className="w-1/2 flex items-center justify-center pl-3">
                          <span className="text-[9px] font-black text-white tracking-widest uppercase">DEPOIS</span>
                        </div>
                      </div>

                      {/* Continued red diagonal split line overlay */}
                      <div className="absolute top-0 bottom-0 left-[50%] w-[1.5px] bg-red-600 z-20 transform -translate-x-1/2 -skew-x-[2.3deg]" />
                    </div>

                    {/* Student Details overlaying below card */}
                    <div className="p-5 text-center border-t border-white/5 bg-zinc-950/80 flex-1 flex flex-col justify-center">
                      <span className="block text-xs sm:text-sm font-black text-white uppercase tracking-wider">{caseItem.name}</span>
                      <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1.5 block">
                        {caseItem.stats.weight}
                      </span>
                      <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1 block leading-none font-mono">
                        {caseItem.stats.fatPercentage}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-1.5 mt-8 z-30 relative">
            {TRANSFORMATION_CASES.map((_, idx) => {
              const isActive = realIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    isActive ? 'bg-red-600 w-3' : 'bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Main Red CTA Button directly styled like the screenshot */}
          <div className="text-center mt-12 z-35 relative">
            <button
              onClick={onOpenAssessment}
              className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white rounded-none font-black text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-xl shadow-red-600/35 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
              id="cta-results-beging"
            >
              <Flame className="w-4 h-4 text-white" />
              QUERO COMEÇAR AGORA
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
