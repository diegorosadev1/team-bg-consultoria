import { motion } from "motion/react";
import { Flame, Sparkles } from "lucide-react";
import { CONFIG } from "../config";
import BrunoImage from "../assets/images/bruno_trainer.jpeg";
interface HeroProps {
  onOpenAssessment: () => void;
}

export default function Hero({ onOpenAssessment }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950 pt-36 lg:pt-28 pb-16"
    >
      {/* Background Gradients and Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-950 z-0" />

      {/* Red ambient background glow behind the trainer */}
      <div className="absolute right-0 top-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none z-0 hidden lg:block" />
      <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
          {" "}
          {/* Hero Left Content */}
          <div className="lg:col-span-7 max-w-[720px] space-y-8 text-left">
            {" "}
            {/* Main Heading & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-black uppercase tracking-tight leading-[0.92]">
                {/* Mobile */}
                <div className="block lg:hidden text-[50px] text-white">
                  <div>CONQUISTE O SHAPE</div>

                  <div className="mt-2 italic">DOS SEUS SONHOS,</div>

                  <div className="mt-6 italic">ATRAVÉS DA</div>

                  <div className="mt-6 mb-6 text-red-500 italic">
                    <div>CONSULTORIA</div>
                    <div>ESPECIALIZADA</div>
                  </div>
                    <div className="text-red-500 italic">TEAM BG</div>
                </div>

                {/* Desktop */}
                <div className="hidden lg:block text-7xl text-white">
                  CONQUISTE O SHAPE <br />
                  DOS SEUS SONHOS, <br />
                  ATRAVÉS DA <br />
                  <span className="text-red-500 italic">
                    CONSULTORIA ESPECIALIZADA <br />
                    TEAM BG
                  </span>
                </div>
              </h1>
              <p className="text-base text-zinc-300 max-w-2xl leading-relaxed">
                Treino estratégico e plano alimentar sob medida para sua rotina.
                Conquiste emagrecimento definitivo ou hipertrofia acelerada com
                acompanhamento próximo e individualizado.
              </p>
            </motion.div>
            {/* CTA button with bottom small caption */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-2"
            >
              <button
                onClick={onOpenAssessment}
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs tracking-widest uppercase rounded-none transition-all duration-300 cursor-pointer shadow-lg shadow-red-600/20"
                id="hero-cta-main"
              >
                <Flame className="w-4 h-4 text-white" />
                QUERO TRANSFORMAR MEU CORPO AGORA
              </button>

              <p className="text-[11px] font-bold text-zinc-400 max-w-xl leading-relaxed uppercase tracking-wider">
                Acompanhamento direto e próximo com Bruno Gagliardi. Avaliações
                periódicas e suporte diário para garantir a sua evolução
                constante.
              </p>
            </motion.div>
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-8 pt-6 border-t border-white/5"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black italic text-white tracking-tight leading-none">
                  ISSCA
                </span>
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                  Especialista em Peptídeos
                </span>
              </div>
              <div className="w-px h-8 bg-white/5 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black italic text-white tracking-tight leading-none">
                  500+
                </span>
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                  Vidas Transformadas
                </span>
              </div>
              <div className="w-px h-8 bg-white/5 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-black italic text-red-500 tracking-tight leading-none">
                  100%
                </span>
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                  Protocolo Individualizado
                </span>
              </div>
            </motion.div>
          </div>
          {/* Hero Right Visual Column - Cutout Trainer with Glow background */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-sm shadow-2xl p-4 rounded-none group hover:border-red-600/30 transition-all duration-500"
              id="hero-trainer-card"
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-950 flex flex-col justify-end">
                <img
                  src={BrunoImage}
                  alt="Bruno Gagliardi - Personal Trainer"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover  group-hover:scale-105 transition-all duration-700"
                />

                {/* Red lighting gradient overlap overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                <div
                  className="absolute inset-0 z-10 opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at bottom, rgba(220,38,38,.18) 0%, transparent 70%)",
                  }}
                />
                {/* Info badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-2.5 py-1 bg-black/85 border border-red-600/40 text-[9px] font-black tracking-widest text-red-500 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-red-500 animate-pulse" />
                    CERTIFIED PEPTIDES - ISSCA
                  </span>
                </div>

                {/* Small overlay badge bottom right */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-green-600 text-white font-black text-[8px] uppercase tracking-widest px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  VAGAS ABERTAS
                </div>
              </div>

              {/* Bio and Social Follow details */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
                    CONECTE-SE
                  </span>
                  <a
                    href={CONFIG.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-black text-white hover:text-red-500 transition-colors block uppercase mt-0.5"
                  >
                    {CONFIG.instagramHandle}
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block font-mono">
                    SEGUIDORES
                  </span>
                  <span className="text-xs font-black text-white block mt-0.5">
                    27.4K+
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
