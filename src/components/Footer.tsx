import React from "react";
import {
  Dumbbell,
  Instagram,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { CONFIG, getWhatsAppUrl } from "../config";
import logo from "../assets/images/logo.png";

interface FooterProps {
  onOpenAssessment: () => void;
}

export default function Footer({ onOpenAssessment }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className="bg-black border-t border-white/5 pt-16 pb-12 relative z-30"
      id="main-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Branding & Contact Details */}
          <div className="space-y-5 text-left">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="inline-flex items-center gap-3 group justify-start focus:outline-none"
            >
              <img
                src={logo}
                alt="BG Consultoria Fitness"
                className="h-40 object-contain"
              />
            </a>

            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm font-medium">
              Método científico individualizado para acelerar seus resultados
              estéticos, físicos e de saúde corporal profunda com o
              acompanhamento do Bruno Gagliardi (BG).
            </p>

            {/* Red Contact Details like the image */}
            <div className="space-y-3 pt-1 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-2.5 justify-start">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-wide">
                  {CONFIG.whatsappPhoneDisplay}
                </span>
              </div>
              <div className="flex items-center gap-2.5 justify-start">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-[11px] font-bold tracking-wide">
                  {CONFIG.contactEmail}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-3 pt-1">
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 border border-white/5 text-zinc-400 hover:text-red-500 hover:border-red-600/50 rounded transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl(
                  "Olá Bruno! Vim pelo site e gostaria de saber mais sobre a sua consultoria fitness.",
                )}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-zinc-900 border border-white/5 text-zinc-400 hover:text-green-500 hover:border-green-600/50 rounded transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation with Red Line Header and Chevron Arrows */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-black text-white uppercase tracking-widest pl-3 border-l-2 border-red-600">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs">
              {[
                { label: "Início", href: "#home" },
                { label: "Benefícios", href: "#benefits" },
                { label: "Sobre o Bruno", href: "#about" },
                { label: "Resultados dos Alunos", href: "#results" },
                { label: "Planos & Preços", href: "#plans" },
                { label: "Dúvidas Frequentes", href: "#faq" },
              ].map((link) => (
                <li key={link.label} className="flex items-center text-left">
                  <span className="text-red-500 font-black mr-2 select-none">
                    &gt;
                  </span>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-zinc-400 hover:text-white transition-colors font-bold uppercase tracking-wider text-[11px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Information with Red Line Header and Chevron Arrows */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-black text-white uppercase tracking-widest pl-3 border-l-2 border-red-600">
              Informações
            </h4>
            <ul className="space-y-3.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2 text-left font-bold uppercase tracking-wide text-[11px]">
                <span className="text-red-500 font-black select-none">
                  &gt;
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
                  Peptide Specialist (ISSCA)
                </span>
              </li>
              <li className="flex items-start gap-2 text-left font-bold uppercase tracking-wide text-[11px]">
                <span className="text-red-500 font-black select-none leading-none">
                  &gt;
                </span>
                <span className="leading-tight">
                  Acompanhamento 100% Humano
                </span>
              </li>
              <li className="flex items-start gap-2 text-left font-bold uppercase tracking-wide text-[11px]">
                <span className="text-red-500 font-black select-none leading-none">
                  &gt;
                </span>
                <span className="leading-tight">Plano alimentar flexível</span>
              </li>
              <li className="flex items-start gap-2 text-left font-bold uppercase tracking-wide text-[11px]">
                <span className="text-red-500 font-black select-none leading-none">
                  &gt;
                </span>
                <span className="leading-tight">Atendimento Global</span>
              </li>
              <li className="flex items-start gap-2 text-left font-bold uppercase tracking-wide text-[11px]">
                <span className="text-red-500 font-black select-none leading-none">
                  &gt;
                </span>
                <span className="leading-tight">
                  Foco em adesão sustentável
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Sales Box (WhatsApp Integration for conversion) */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-black text-white uppercase tracking-widest pl-3 border-l-2 border-red-600">
              Consultoria e Suporte
            </h4>

            {/* WhatsApp Widget Box */}
            <a
              href={getWhatsAppUrl(
                "Olá Bruno! Vim pelo site e gostaria de saber mais sobre a sua consultoria fitness.",
              )}
              target="_blank"
              rel="noreferrer"
              className="block bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/5 hover:border-red-600/20 rounded-xl p-4 transition-all duration-300 group shadow-lg text-left"
            >
              <div className="flex items-center gap-3">
                {/* Avatar with glow online dot */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center font-black text-xs text-red-500">
                    BG
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-black rounded-full animate-pulse" />
                </div>

                {/* Status and Info */}
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      CONSULTORIA DIGITAL
                    </span>
                    <span className="text-[7px] font-black tracking-widest text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20 uppercase">
                      ONLINE
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mt-0.5">
                    Chama no WhatsApp
                  </span>
                </div>
              </div>

              {/* Separator */}
              <div className="h-[1px] bg-white/5 my-3 group-hover:bg-red-600/10 transition-colors" />

              {/* Action */}
              <div className="flex items-center justify-between text-[#22c55e] group-hover:text-green-400 font-black text-[10px] uppercase tracking-widest">
                <span>Conversar Agora</span>
                <MessageSquare className="w-4 h-4 text-green-500 shrink-0" />
              </div>
            </a>

            {/* lead generation button */}
            <button
              onClick={onOpenAssessment}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-[10px] tracking-widest uppercase rounded shadow-lg shadow-red-600/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Fazer Avaliação Gratuita
            </button>
          </div>
        </div>

        {/* Legal Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-zinc-600 font-medium">
            © {currentYear} BG Consultoria Fitness. Todos os direitos
            reservados. Todas as recomendações e profissionais são altamente
            qualificados.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
            <a
              href="#plans"
              onClick={(e) => handleScrollTo(e, "#plans")}
              className="hover:text-zinc-400"
            >
              Termos de Uso
            </a>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <a
              href="#plans"
              onClick={(e) => handleScrollTo(e, "#plans")}
              className="hover:text-zinc-400"
            >
              Políticas de Privacidade
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Button - Direct WhatsApp conversion */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        {/* Pulsing ripple effects */}
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-60 animate-ping pointer-events-none" />
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-30 animate-ping pointer-events-none [animation-delay:0.3s]" />

        <a
          href={getWhatsAppUrl(
            "Olá Bruno! Gostaria de conversar sobre sua consultoria fitness.",
          )}
          target="_blank"
          rel="noreferrer"
          className="relative p-3.5 bg-[#25D366] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 text-white rounded-full shadow-2xl shadow-green-950/50 transition-all flex items-center justify-center group"
          aria-label="Talk on WhatsApp"
          id="whatsapp-floating-btn"
        >
          {/* Official WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-6.5 h-6.5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.012 2c-5.506 0-9.982 4.476-9.982 9.984 0 1.76.458 3.413 1.258 4.86l-1.288 4.7 4.814-1.263a9.92 9.92 0 0 0 4.88 1.288c5.506 0 9.98-4.476 9.98-9.984C21.992 6.476 17.518 2 12.012 2zm5.727 14.183c-.244.693-1.423 1.265-1.95 1.326-.476.056-.948.243-3.05-.58-2.67-1.045-4.383-3.76-4.516-3.942-.134-.18-.99-1.316-.99-2.512 0-1.195.626-1.782.846-2.025.22-.243.481-.304.64-.304.16 0 .32.002.46.008.147.006.34-.056.53.395.195.462.67 1.642.728 1.764.06.12.098.263.018.423-.08.16-.12.26-.24.398-.12.14-.253.313-.36.42-.12.12-.246.252-.106.49.14.24.623 1.026 1.336 1.662.918.816 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7 1.066-1.246.12-.14.28-.12.44-.06.16.06.918.433 1.24.593.32.16.533.24.61.37.078.13.078.753-.166 1.447z" />
          </svg>
          <span className="absolute right-0 top-0 w-3.5 h-3.5 bg-red-600 border-2 border-[#25D366] rounded-full animate-pulse" />

          {/* Floating tooltip label on hover */}
          <span className="absolute left-14 bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none tracking-wider whitespace-nowrap shadow-lg">
            Dúvidas no WhatsApp?
          </span>
        </a>
      </div>
    </footer>
  );
}
