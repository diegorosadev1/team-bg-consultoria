import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Star,
  Play,
  Pause,
} from "lucide-react";
import { TRANSFORMATION_CASES } from "../data";
import { TransformationCase } from "../types";

import Depoimento1 from "../assets/images/depoimento1.png";
import Depoimento2 from "../assets/images/depoimento2.png";
import Depoimento3 from "../assets/images/depoimento3.png";
import Depoimento4 from "../assets/images/depoimento4.png";

// ==========================================
// TYPES
// ==========================================

interface BeforeAfterProps {
  onOpenAssessment?: () => void;
}

interface Testimonial {
  id: string;
  name: string;
  text?: string;
  image: string;
  video?: string;
  stars?: number;
  duration?: string;
}

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, width: number) => React.ReactNode;
}

interface TabsProps {
  activeTab: "results" | "testimonials";
  onChange: (tab: "results" | "testimonials") => void;
}

interface SectionHeaderProps {
  activeTab: "results" | "testimonials";
}

interface ResultCardProps {
  item: TransformationCase;
  width: number;
}

interface TestimonialCardProps {
  item: Testimonial;
  width: number;
}

// ==========================================
// ARRAYS
// ==========================================

const RESULTS = TRANSFORMATION_CASES;

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Depoimento 1",
    image: Depoimento1,
    duration: "Aluno BG",
  },
  {
    id: "t2",
    name: "Depoimento 2",
    image: Depoimento2,
    duration: "Aluno BG",
  },
  {
    id: "t3",
    name: "Depoimento 3",
    image: Depoimento3,
    duration: "Aluno BG",
  },
  {
    id: "t4",
    name: "Depoimento 4",
    image: Depoimento4,
    duration: "Aluno BG",
  },
];

// ==========================================
// COMPONENTES AUXILIARES
// ==========================================

/**
 * Beautiful dynamic tabs switcher.
 * Uses Framer Motion shared layout transition for a stunning sliding red background.
 */
function Tabs({ activeTab, onChange }: TabsProps) {
  return (
    <div className="flex justify-center mb-8" id="beforeafter-tabs-wrapper">
      <div className="bg-zinc-900 border border-white/5 rounded-full p-1.5 flex items-center relative shadow-inner">
        <button
          id="btn-tab-results"
          onClick={() => onChange("results")}
          className={`relative px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-colors duration-300 rounded-full z-10 cursor-pointer ${
            activeTab === "results"
              ? "text-white"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {activeTab === "results" && (
            <motion.div
              layoutId="activeTabPill"
              className="absolute inset-0 bg-red-600 rounded-full -z-10 shadow-lg shadow-red-600/20"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          Resultados
        </button>
        <button
          id="btn-tab-testimonials"
          onClick={() => onChange("testimonials")}
          className={`relative px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-colors duration-300 rounded-full z-10 cursor-pointer ${
            activeTab === "testimonials"
              ? "text-white"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {activeTab === "testimonials" && (
            <motion.div
              layoutId="activeTabPill"
              className="absolute inset-0 bg-red-600 rounded-full -z-10 shadow-lg shadow-red-600/20"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          Depoimentos
        </button>
      </div>
    </div>
  );
}

/**
 * High impact Section Header with text styling matching the rest of the landing page.
 */
function SectionHeader({ activeTab }: SectionHeaderProps) {
  return (
    <div
      className="text-center max-w-3xl mx-auto mb-16"
      id="beforeafter-section-header"
    >
      {activeTab === "results" ? (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
          RESULTADOS QUE{" "}
          <span className="text-red-500 italic">COMPROVAM O MÉTODO</span>
        </h2>
      ) : (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
          O QUE NOSSOS <span className="text-red-500 italic">ALUNOS DIZEM</span>
        </h2>
      )}
    </div>
  );
}

/**
 * High-fidelity Antes/Depois visual comparison card.
 */
function ResultCard({ item, width }: ResultCardProps) {
  return (
    <div
      id={`result-card-${item.id}`}
      className="flex flex-col h-full rounded-3xl overflow-hidden border border-red-500/10 bg-zinc-900 shadow-2xl select-none"
      style={{ width }}
    >
      {/* Card Red Header */}
      <div className="bg-red-600 text-white flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider h-11 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[9px] text-red-600 font-black italic">
            BG
          </div>
          <span className="text-[10px] font-black tracking-widest text-white leading-none">
            TEAM
          </span>
        </div>
      </div>

      {/* Split Image Showcase (Antes vs Depois) with angled cut */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950 select-none shrink-0">
        {/* Before Image (Left angle) */}
        <div
          className="absolute inset-0 z-10"
          style={{ clipPath: "polygon(0 0, 52% 0, 48% 100%, 0 100%)" }}
        >
          <img
            src={item.beforeImg}
            alt="Antes"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale brightness-90"
          />
        </div>

        {/* After Image (Right angle) */}
        <div
          className="absolute inset-0 z-10"
          style={{ clipPath: "polygon(52% 0, 100% 0, 100% 100%, 48% 100%)" }}
        >
          <img
            src={item.afterImg}
            alt="Depois"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Red diagonal dividing line */}
        <div className="absolute top-0 bottom-0 left-[50%] w-[1.5px] bg-red-600 z-20 transform -translate-x-1/2 -skew-x-[2.3deg] shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
      </div>

      {/* Bottom "ANTES" / "DEPOIS" bar with matching diagonal cut */}
      <div className="relative h-9 w-full overflow-hidden select-none border-t border-white/5 shrink-0">
        {/* Background slants */}
        <div
          className="absolute inset-0 bg-zinc-800"
          style={{ clipPath: "polygon(0 0, 51% 0, 49% 100%, 0 100%)" }}
        />
        <div
          className="absolute inset-0 bg-zinc-950"
          style={{ clipPath: "polygon(51% 0, 100% 0, 100% 100%, 49% 100%)" }}
        />

        {/* Text overlays on top of slants, centered on each half */}
        <div className="absolute inset-0 flex z-10">
          {/* Left "ANTES" Half */}
          <div className="w-1/2 flex items-center justify-center pr-3">
            <span className="text-[9px] font-black text-white tracking-widest uppercase">
              ANTES
            </span>
          </div>
          {/* Right "DEPOIS" Half */}
          <div className="w-1/2 flex items-center justify-center pl-3">
            <span className="text-[9px] font-black text-white tracking-widest uppercase">
              DEPOIS
            </span>
          </div>
        </div>

        {/* Continued red diagonal split line overlay */}
        <div className="absolute top-0 bottom-0 left-[50%] w-[1.5px] bg-red-600 z-20 transform -translate-x-1/2 -skew-x-[2.3deg]" />
      </div>

      {/* Student Details overlaying below card */}
      <div className="p-5 text-center border-t border-white/5 bg-zinc-950/80 flex-1 flex flex-col justify-center min-h-[110px]">
        <span className="block text-xs sm:text-sm font-black text-white uppercase tracking-wider">
          {item.name}
        </span>
        <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1.5 block">
          {item.stats.weight}
        </span>
        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1 block leading-none font-mono">
          {item.stats.fatPercentage}
        </span>
      </div>
    </div>
  );
}

/**
 * Richly-styled Testimonial card designed to showcase high-fidelity prints/screenshots.
 */
function TestimonialCard({ item, width }: TestimonialCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .catch((err) => console.log("Video play interrupted:", err));
      setIsPlaying(true);
    }
  };

  return (
    <div
      id={`testimonial-card-${item.id}`}
      className="flex flex-col h-full rounded-3xl overflow-hidden border border-red-500/10 bg-zinc-900 shadow-2xl select-none"
      style={{ width }}
    >
      {/* Card Red Header */}
      <div className="bg-red-600 text-white flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider h-11 shrink-0">
        <span className="font-mono text-[10px] font-black text-zinc-100">
          [ {item.duration || "ALUNO BG"} ]
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[9px] text-red-600 font-black italic">
            BG
          </div>
          <span className="text-[10px] font-black tracking-widest text-white leading-none">
            TEAM
          </span>
        </div>
      </div>

      {/* Full scale image/video wrapper for high fidelity prints */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-950 select-none flex-1 flex items-center justify-center">
        {item.video ? (
          <div
            className="relative w-full h-full cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src={item.video}
              playsInline
              loop
              muted
              className="w-full h-full object-cover"
            />
            {/* Elegant overlay panel for standard play interaction */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? "bg-black/10 opacity-0 group-hover:opacity-100 group-hover:bg-black/35" : "bg-black/45"}`}
            >
              <div className="relative w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-2xl shadow-red-600/40 transform transition-all duration-300 group-hover:scale-110 active:scale-90">
                {!isPlaying && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 animate-ping pointer-events-none" />
                )}
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white fill-white" />
                ) : (
                  <Play className="w-5 h-5 text-white fill-white translate-x-0.5" />
                )}
              </div>
            </div>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

/**
 * Beautiful, fully generic infinite carousel.
 * Operates on standard ResizeObserver, infinite loop jumps, auto-play, and pause-on-hover logic.
 */
function Carousel<T extends { id: string }>({
  items,
  renderItem,
}: CarouselProps<T>) {
  const N = items.length;
  // Duplicate array 3 times for a seamless infinite loop scrolling effect
  const extendedItems = [...items, ...items, ...items];

  const [activeIndex, setActiveIndex] = useState(N); // Start in middle copy
  const [disableTransition, setDisableTransition] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // ResizeObserver to automatically measure container size
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

  // Auto-advance loop timer
  useEffect(() => {
    if (isHovered || disableTransition) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2500);

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

  // Immediate jump reset when wrap-around happens
  useEffect(() => {
    if (disableTransition) {
      const raft = requestAnimationFrame(() => {
        setDisableTransition(false);
      });
      return () => cancelAnimationFrame(raft);
    }
  }, [disableTransition]);

  // Handle seamless wrap transition complete
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

  const realIndex = activeIndex % N;

  return (
    <div
      className="relative max-w-5xl mx-auto px-4 sm:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="carousel-outer-wrapper"
    >
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors cursor-pointer hidden sm:block"
        aria-label="Anterior"
        id="carousel-prev-btn"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white transition-colors cursor-pointer hidden sm:block"
        aria-label="Próximo"
        id="carousel-next-btn"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Sliding Viewport Container */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden py-8 cursor-grab active:cursor-grabbing"
        id="carousel-viewport"
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
          style={{ width: "max-content" }}
        >
          {extendedItems.map((item, i) => (
            <div
              key={`${i}-${item.id}`}
              style={{ width: slideWidth }}
              className="flex-shrink-0 flex"
            >
              {renderItem(item, slideWidth)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Indicators */}
      <div
        className="flex justify-center items-center gap-1.5 mt-8 z-30 relative"
        id="carousel-dots-container"
      >
        {items.map((_, idx) => {
          const isActive = realIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                isActive ? "bg-red-600 w-3" : "bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
              id={`carousel-dot-${idx}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// HOOKS (Implemented within component lifecycle)
// ==========================================

// ==========================================
// HELPERS (None required)
// ==========================================

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function BeforeAfter({ onOpenAssessment }: BeforeAfterProps) {
  const [activeTab, setActiveTab] = useState<"results" | "testimonials">(
    "results",
  );

  return (
    <section
      id="results"
      className="relative py-24 bg-zinc-950 overflow-hidden border-t border-b border-white/5"
    >
      {/* Background Thin Red Grid Lines */}
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
        {/* Beautiful Selector Tabs */}
        <Tabs activeTab={activeTab} onChange={setActiveTab} />

        {/* Page Content with high fidelity fading wrapper */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Section Title */}
            <SectionHeader activeTab={activeTab} />

            {/* Reusable Carousel Component with conditional card rendering */}
            {activeTab === "results" ? (
              <Carousel
                items={RESULTS}
                renderItem={(item, width) => (
                  <ResultCard item={item} width={width} />
                )}
              />
            ) : (
              <Carousel
                items={TESTIMONIALS}
                renderItem={(item, width) => (
                  <TestimonialCard item={item} width={width} />
                )}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Main Red CTA Button */}
        <div className="text-center mt-12 z-35 relative">
          <button
            onClick={onOpenAssessment}
            className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white rounded-none font-black text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-xl shadow-red-600/35 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
            id="cta-results-begin-now"
          >
            <Flame className="w-4 h-4 text-white" />
            {activeTab === "results"
              ? "QUERO COMEÇAR AGORA"
              : "QUERO FAZER PARTE DA TEAM BG"}
          </button>
        </div>
      </div>
    </section>
  );
}
