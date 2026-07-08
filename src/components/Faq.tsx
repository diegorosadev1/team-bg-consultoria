import { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../config';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-zinc-950 overflow-hidden">
      
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-950/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-red-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black text-red-500 uppercase tracking-widest bg-red-950/40 px-3.5 py-1.5 rounded-full border border-red-900/30">
            DÚVIDAS COMUNS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
            Perguntas <span className="text-red-500">Frequentes:</span>
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base">
            Tem alguma dúvida sobre como a consultoria funciona? Encontre as respostas abaixo.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900 border-red-600/50 shadow-lg shadow-red-950/5'
                    : 'bg-zinc-900 border-white/5 hover:border-red-600/30'
                }`}
                id={`faq-item-${item.id}`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-red-500' : 'text-zinc-500'
                    }`} />
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {item.question}
                    </span>
                  </div>
                  <div className="p-1.5 rounded-sm bg-zinc-950/80 border border-white/5 text-zinc-400 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom fallback message */}
        <div className="text-center mt-20 p-8 sm:p-12 bg-gradient-to-r from-red-700 via-red-600 to-red-700 border border-red-500 rounded-none shadow-2xl relative overflow-hidden group">
          {/* Subtle design lines inside the red box */}
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <div className="absolute left-[20%] top-0 bottom-0 w-[1px] bg-white" />
            <div className="absolute right-[20%] top-0 bottom-0 w-[1px] bg-white" />
            <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-white" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase italic tracking-tight text-white leading-tight">
              Ficou com mais alguma dúvida que não está listada aqui?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 font-bold uppercase tracking-wider max-w-lg mx-auto leading-relaxed">
              Clique no botão abaixo para conversar de forma individualizada diretamente com o Bruno no WhatsApp e alinhar sua consultoria.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Olá Bruno! Tenho uma dúvida sobre a sua consultoria fitness.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-black uppercase tracking-widest text-white bg-green-500 hover:bg-green-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 rounded-none shadow-xl shadow-green-550/20 cursor-pointer"
                id="cta-faq-whatsapp"
              >
                <MessageSquare className="w-4.5 h-4.5 text-white" />
                FALE DIRETO COM O BRUNO NO WHATSAPP
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
