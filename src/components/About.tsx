import { motion } from 'motion/react';
import { Award, CheckCircle2, Star } from 'lucide-react';
import BrunoImage from '../assets/images/bruno_trainer.jpeg'
export default function About() {
  const highlights = [
    'Certified Peptide Specialist - ISSCA',
    'Especialista em Recomposição Corporal e Estética',
    'Prescrição de Treino de Alta Intensidade Baseada em Evidências',
    'Acompanhamento Individualizado (Sem Intermediários/Robôs)',
    '500+ Alunos Atendidos com Resultados Reais',
    'Abordagem humanizada focada em adesão e constância'
  ];

  return (
    <section id="about" className="relative py-24 bg-zinc-950 overflow-hidden">
      
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Card Mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm rounded-none bg-zinc-900 border border-white/5 p-4 shadow-2xl shadow-black/40 hover:border-red-600/30 transition-all duration-300"
              id="about-bio-card"
            >
              {/* Bio picture using the generated image */}
              <div className="relative w-full aspect-[4/5] rounded-none bg-zinc-950 overflow-hidden border border-white/5 mb-6 flex flex-col justify-end">
                <img
                  src={BrunoImage}
                  alt="Bruno Gagliardi - Personal Trainer"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover  transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                <div className="relative z-10 p-5">
                  <div className="flex items-center gap-1 bg-red-600 text-white font-black text-[9px] uppercase tracking-widest px-2 py-1 rounded-none w-fit mb-2">
                    <Award className="w-3 h-3" />
                    ISSCA CERTIFIED
                  </div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter text-white leading-none">BRUNO GAGLIARDI</h3>
                  <span className="text-[9px] text-zinc-400 font-black uppercase tracking-widest mt-1 block">
                    Mentor & Coach de Performance
                  </span>
                </div>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-950 border border-white/5 p-3 rounded-none text-center">
                  <span className="block text-xl font-black italic text-white leading-none">100%</span>
                  <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1 block leading-none">
                    Individualizado
                  </span>
                </div>
                <div className="bg-zinc-950 border border-white/5 p-3 rounded-none text-center">
                  <span className="block text-xl font-black italic text-red-500 leading-none">24H</span>
                  <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1 block leading-none">
                    Suporte Direto
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <span className="text-xs font-black text-red-500 uppercase tracking-widest bg-red-600/10 px-3 py-1 rounded-none border border-red-600/30 inline-block">
                SOBRE O TREINADOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-white leading-tight">
                Quem é o <span className="text-red-600">Bruno Gagliardi?</span>
              </h2>
            </div>

            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed text-left">
              <p className="font-semibold text-zinc-300">
                Minha jornada na musculação começou há 22 anos, quando eu era um adolescente acima do peso e resolvi mudar a minha aparência. Desde então, venho estudando e aprimorando meus conhecimentos em métodos de treinamento e dieta.
              </p>
              <p className="font-semibold text-zinc-300">
                Com anos de estudo e dedicação na prática, desenvolvi um método focado em gerar resultados reais e definitivos para qualquer pessoa. Aplico o que há de mais moderno em otimização metabólica para oferecer um acompanhamento realmente personalizado e eficiente.
              </p>
              
              {/* Highlighted Box styled exactly like Leandro Twin's site */}
              <div className="bg-zinc-900 border-l-4 border-red-600 p-4 sm:p-5 my-6 text-zinc-200">
                <p className="text-xs sm:text-sm font-black uppercase tracking-wider leading-relaxed">
                  Minha consultoria é 100% online, atendendo alunos em todo o Brasil e no mundo. Todos os planos são criados e monitorados diretamente por mim. E posso dizer com toda certeza: eu amo o que faço.
                </p>
              </div>

              <p className="text-white font-black text-xs sm:text-sm uppercase tracking-wide border-t border-white/5 pt-4 italic">
                Através da consultoria 100% online, meu objetivo é o mesmo: transformar vidas através da disciplina, da constância e do conhecimento.
              </p>
            </div>

            {/* List of points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6 border-t border-white/5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-left">
                  <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-bold uppercase tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
