import { motion } from 'motion/react';
import { Target, TrendingUp, Sparkles, Utensils, MessageCircle, Heart, Dumbbell, ShieldCheck, Flame } from 'lucide-react';
import FemaleImage from '../assets/images/female_abs_1783462701946.jpg'
import BrunoImage from '../assets/images/trainer_clipboard_1783462688330.jpg'
interface BenefitsProps {
  onOpenAssessment: () => void;
}

export default function Benefits({ onOpenAssessment }: BenefitsProps) {
  const conquests = [
    {
      title: 'Emagrecimento sólido e definitivo',
      description: 'Chega de perder peso e recuperar tudo depois. Você terá um plano feito para sua realidade, com acompanhamento e ajustes para emagrecer de forma saudável e definitiva.',
      icon: Target
    },
    {
      title: 'Hipertrofia com estratégia',
      description: 'Ganhe massa muscular sem desperdiçar tempo na academia. Cada treino e cada refeição têm um objetivo claro para acelerar sua evolução e maximizar seus resultados.',
      icon: TrendingUp
    },
    {
      title: 'Mais disposição para viver melhor',
      description: 'Transforme seu corpo e sua qualidade de vida. Durma melhor, tenha mais energia, melhore sua recuperação, sua libido e seu rendimento dentro e fora da academia.',
      icon: Sparkles
    }
  ];

  const pillars = [
    {
      num: '1',
      title: 'TREINO 100% PERSONALIZADO',
      subtitle: 'Um treino criado exclusivamente para você.',
      description: 'Nada de planilhas prontas. Seu treino é desenvolvido de acordo com seu objetivo, rotina e nível de condicionamento para maximizar sua evolução.'
    },
    {
      num: '2',
      title: 'DIETA SOB MEDIDA',
      subtitle: 'Uma alimentação que se adapta à sua rotina.',
      description: 'Seu plano alimentar é personalizado para seus objetivos e preferências, tornando a dieta mais fácil de seguir e sustentável no longo prazo.'
    },
    {
      num: '3',
      title: 'ACOMPANHAMENTO CONTÍNUO',
      subtitle: 'Você nunca ficará sem direção.',
      description: 'Sua evolução é acompanhada de perto, com ajustes estratégicos, suporte para dúvidas e acompanhamento constante para manter você evoluindo.'
    },
    {
      num: '4',
      title: 'RESULTADOS REAIS E DURADOUROS',
      subtitle: 'Mais do que mudar o corpo, mudar seus hábitos.',
      description: 'O foco é construir resultados consistentes através de uma rotina saudável, equilibrada e que você consiga manter ao longo do tempo.'
    }
  ];

  return (
    <section id="benefits" className="relative py-24 bg-zinc-950 overflow-hidden">
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Background thin layout lines ('faixas vermelhas por trás') extending across the entire section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        {/* Horizontal grid lines */}
        <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-red-600/10" />
        <div className="absolute top-[55%] left-0 right-0 h-[1px] bg-red-600/15" />
        <div className="absolute top-[85%] left-0 right-0 h-[1px] bg-red-600/10" />
        
        {/* Vertical grid lines */}
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-red-600/10" />
        <div className="absolute left-[45%] top-0 bottom-0 w-[1px] bg-red-600/15" />
        <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-red-600/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: O que eu te ajudo a conquistar (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* Left Column: Overlapping fitness portraits exactly like the user's screenshot */}
          <div className="lg:col-span-5 relative h-[480px] flex items-center justify-center">
            {/* Background thin layout lines ('faixas vermelhas por trás') specifically framing the overlapping cards */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Vertical line cutting between the photos */}
              <div className="absolute left-[35%] top-[-20%] bottom-[-10%] w-[1px] bg-red-600/25" />
              <div className="absolute left-[70%] top-[-10%] bottom-[-20%] w-[1px] bg-red-600/25" />
              {/* Horizontal line cutting across */}
              <div className="absolute top-[40%] left-[-10%] right-[-10%] h-[1px] bg-red-600/25" />
              <div className="absolute top-[75%] left-[-20%] right-[-10%] h-[1px] bg-red-600/25" />
            </div>

            {/* Overlapping photo grid container */}
            <div className="relative w-full max-w-[340px] h-[400px] z-10">
              {/* Left Image (lower) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute left-0 bottom-0 w-[180px] aspect-[3/4] overflow-hidden rounded-2xl border border-red-500/20 bg-zinc-900 shadow-2xl group"
              >
                <img
                  src={BrunoImage}
                  alt="Bruno Gagliardi Consultoria"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-red-600/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>

              {/* Right Image (higher and overlapping) */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute right-0 top-0 w-[180px] aspect-[3/4] overflow-hidden rounded-2xl border border-red-500/20 bg-zinc-900 shadow-2xl z-20 group"
              >
                <img
                  src={FemaleImage}
                  alt="Resultado de Treino"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-red-600/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>

          {/* Right Column: List of items */}
          <div className="lg:col-span-7 space-y-8 relative z-10">
            <div className="text-left space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-none uppercase tracking-tight">
                O QUE <span className="text-red-500 italic">VOCÊ VAI CONQUISTAR</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-bold uppercase tracking-widest">
                Com um acompanhamento totalmente personalizado.
              </p>
            </div>

            <div className="space-y-4">
              {conquests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl bg-zinc-950/40 border border-red-950/30 hover:border-red-600/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 border-2 border-red-500/30 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-transparent transition-all">
                        <Icon className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="text-left flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-300 leading-relaxed font-semibold">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Section 2: Com a minha consultoria você vai ter */}
        <div className="bg-zinc-900 border border-white/5 p-8 sm:p-12 rounded-none relative overflow-hidden">
          <div className="absolute inset-0 bg-red-950/[0.01] mix-blend-color-dodge" />
          
          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-tighter text-white">
              TUDO O QUE VOCÊ PRECISA
              <br />
              <span className="text-red-500">PARA TRANSFORMAR O SEU CORPO</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {pillars.map((item, idx) => {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-zinc-950 border border-white/5 rounded-none p-5 hover:border-red-600/40 transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex items-center justify-center w-7 h-7 bg-red-600 text-white font-black text-xs">
                        {item.num}
                      </span>
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-white mb-2">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-[11px] text-zinc-100 font-extrabold mb-2 leading-snug">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-semibold">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Call to action button */}
          <div className="text-center mt-12 relative z-10">
            <button
              onClick={onOpenAssessment}
              className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-none font-black text-xs tracking-widest uppercase transition-all cursor-pointer shadow-lg shadow-red-600/20"
              id="benefits-cta"
            >
              QUERO COMEÇAR AGORA
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
