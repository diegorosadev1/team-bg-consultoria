import React from "react";
import { PLANS } from "../data";
import { Plan } from "../types";
import {
  User,
  Users,
  Star,
  Calendar,
  Crown,
  Check,
  ArrowRight,
  Globe,
  Info,
  CreditCard,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

interface PlansProps {
  onSelectPlan: (plan: Plan) => void;
}

export default function Plans({ onSelectPlan }: PlansProps) {
  // Helper to get the correct icon for each plan
  const getPlanIcon = (id: string) => {
    switch (id) {
      case "mensal":
        return <User className="w-5 h-5 text-red-500 sm:w-6 sm:h-6" />;
      case "bimestral":
        return <Users className="w-5 h-5 text-red-500 sm:w-6 sm:h-6" />;
      case "trimestral":
        return <Star className="w-5 h-5 text-amber-500 sm:w-6 sm:h-6" />;
      case "semestral":
        return <Calendar className="w-5 h-5 text-red-500 sm:w-6 sm:h-6" />;
      case "anual":
        return <Crown className="w-5 h-5 text-red-500 sm:w-6 sm:h-6" />;
      default:
        return <User className="w-5 h-5 text-red-500 sm:w-6 sm:h-6" />;
    }
  };

  // Format price helper (e.g. 1599 -> '1.599')
  const formatPriceInteger = (price: number) => {
    if (price >= 1000) {
      const thousands = Math.floor(price / 1000);
      const remainder = price % 1000;
      return `${thousands}.${remainder.toString().padStart(3, "0")}`;
    }
    return price.toString();
  };

  return (
    <section
      id="plans"
      className="relative py-24 bg-zinc-950 overflow-hidden border-t border-white/5"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-950/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-950/40 px-3.5 py-1.5 rounded border border-red-900/30 mb-6">
            INVESTIMENTO E MATRÍCULA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight mb-4">
            PLANOS DE <span className="text-red-500">CONSULTORIA</span>
          </h2>
          <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
            <div className="h-[1px] bg-red-600/30 flex-1" />
            <p className="text-[10px] sm:text-xs text-zinc-400 font-bold uppercase tracking-widest text-center whitespace-nowrap">
              ACOMPANHAMENTO COMPLETO PARA{" "}
              <span className="text-red-500">RESULTADOS REAIS</span>
            </p>
            <div className="h-[1px] bg-red-600/30 flex-1" />
          </div>
        </div>

        {/* Layout: Main Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left/Main Column: Vertical Plans List (8 cols) */}
          <div className="lg:col-span-8 space-y-3.5 w-full">
            {PLANS.map((plan) => {
              const isTrimestral = plan.id === "trimestral";
              return (
                <button
                  key={plan.id}
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full text-left flex items-center justify-between p-4 sm:p-5 transition-all duration-300 relative group cursor-pointer border ${
                    isTrimestral
                      ? "bg-zinc-900/95 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.08)] hover:border-amber-400"
                      : "bg-zinc-900 border-white/5 hover:border-red-600/30 hover:bg-zinc-900/90"
                  }`}
                  style={{ borderRadius: "12px" }}
                >
                  {/* Glowing background animation on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[12px] ${
                      isTrimestral
                        ? "bg-gradient-to-r from-amber-500/[0.02] to-amber-500/[0.05]"
                        : "bg-gradient-to-r from-red-600/[0.01] to-red-600/[0.04]"
                    }`}
                  />

                  {/* Star golden badge for Trimestral */}
                  {isTrimestral && (
                    <div
                      className="absolute -top-3 left-6 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 shadow-md flex items-center gap-1"
                      style={{ borderRadius: "4px" }}
                    >
                      <Sparkles className="w-3 h-3 text-black animate-pulse" />
                      PLANO MAIS INDICADO
                    </div>
                  )}

                  {/* Left Side: Icon + Label */}
                  <div className="flex items-center gap-3.5 sm:gap-5 flex-1 pr-4">
                    {/* Circle Icon Container */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                        isTrimestral
                          ? "bg-amber-500/10 border-amber-500/30"
                          : "bg-zinc-950 border-white/5 group-hover:border-red-600/30"
                      }`}
                    >
                      {getPlanIcon(plan.id)}
                    </div>

                    {/* Name and Subtitle */}
                    <div className="flex flex-col justify-center">
                      <span
                        className={`text-base sm:text-lg font-black uppercase tracking-wider transition-colors duration-300 ${
                          isTrimestral
                            ? "text-amber-400 group-hover:text-amber-300"
                            : "text-white group-hover:text-red-500"
                        }`}
                      >
                        {plan.name.split(" ")[1] || plan.name}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">
                        {plan.months} {plan.months === 1 ? "MÊS" : "MESES"} DE
                        ACOMPANHAMENTO
                      </span>
                    </div>
                  </div>

                  {/* Middle Divider */}
                  <div className="h-10 w-[1px] bg-white/5 group-hover:bg-red-600/20 transition-colors shrink-0 hidden sm:block mr-6" />

                  {/* Right Side: Price */}
                  <div className="text-right flex items-center gap-3 shrink-0">
                    <div className="flex items-baseline">
                      <span className="text-[10px] sm:text-xs font-black text-red-500 mr-1">
                        R$
                      </span>
                      <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-red-500 transition-colors">
                        {formatPriceInteger(plan.price)}
                      </span>
                      <span className="text-xs sm:text-sm font-black text-zinc-500 group-hover:text-zinc-400">
                        ,00
                      </span>
                    </div>

                    {/* CTA arrow icon */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isTrimestral
                          ? "bg-amber-500/10 border-amber-500/20 text-amber-500 group-hover:bg-amber-500 group-hover:text-black"
                          : "bg-zinc-950 border-white/5 text-zinc-500 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Formas de Pagamento Box */}
            <div
              className="border border-white/5 bg-zinc-900/50 p-6 space-y-4 shadow-xl"
              style={{ borderRadius: "12px" }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="h-[1px] bg-white/5 flex-1" />
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                  FORMAS DE PAGAMENTO
                </span>
                <div className="h-[1px] bg-white/5 flex-1" />
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-3 gap-5 pt-2 w-fit mx-auto">
                {" "}
                {/* Pix */}
                <div className="flex items-center gap-3 ">
                  <div className="w-7 h-7 rounded-lg bg-[#24b4a4]/10 border border-[#24b4a4]/20 flex items-center justify-center text-[#24b4a4] font-black text-xs">
                    ❖
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-white">
                      PIX
                    </span>
                    <span className="text-[8px] text-zinc-500 block uppercase font-bold">
                      PAGAMENTO À VISTA
                    </span>
                  </div>
                </div>
                {/* Parcelado no Cartão */}
                <div className="flex items-center gap-3 ">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-white">
                      PARCELADO NO CARTÃO
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[7.5px] bg-[#00a6ca]/10 text-[#00a6ca] border border-[#00a6ca]/20 px-1 py-0.2 rounded font-black tracking-wide uppercase">
                        MERCADO PAGO
                      </span>
                      <span className="text-[7.5px] bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20 px-1 py-0.2 rounded font-black tracking-wide uppercase">
                        INFINITEPAY
                      </span>
                    </div>
                  </div>
                </div>
                {/* Pagamento Recorrente */}
                <div className="flex items-center gap-3 ">
                  <div className="w-7 h-7 rounded-lg bg-[#34d399]/10 border border-[#34d399]/20 flex items-center justify-center text-[#34d399]">
                    <Zap className="w-4 h-4 animate-pulse" />
                  </div>
                  <div className="text-left">
                    {" "}
                    <span className="block text-[10px] font-black uppercase tracking-wider text-white">
                      PAGAMENTO RECORRENTE
                    </span>
                    <span className="text-[8px] text-[#34d399] block uppercase font-bold">
                      VIA INFINITEPAY
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Taxes warning */}
              <div className="border-t border-white/5 pt-3.5 flex items-center justify-center gap-2 text-center">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                  PARCELAMENTO DISPONÍVEL APENAS COM AS
                  <br className="block sm:hidden" />
                  <span className="text-amber-500"> TAXAS DAS OPERADORAS</span>.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Value Props & Presencial Option (4 cols) */}
          <div className="lg:col-span-4 space-y-4 w-full">
            {/* Features Panel (Online Consulting Features) */}
            <div
              className="bg-zinc-900 border border-white/5 p-6 space-y-5"
              style={{ borderRadius: "12px" }}
            >
              <div>
                <h4 className="text-sm font-black text-white uppercase italic tracking-tight flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-red-500" />O QUE VOCÊ VAI
                  RECEBER:
                </h4>
                <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mt-1">
                  Seu corpo blindado de forma inteligente
                </p>
              </div>

              <ul className="space-y-3.5">
                {[
                  "Treino 100% Individualizado focado em corrigir seus pontos fracos",
                  "Plano Alimentar flexível estruturado para o seu objetivo e rotina",
                  "Suporte diário diretamente com o Bruno no WhatsApp para dúvidas",
                  "Ajustes e correções constantes conforme sua evolução de shape",
                  "Protocolo avançado de ergogênicos, peptídeos e fitoterápicos",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-left"
                  >
                    <div className="w-4 h-4 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-red-500" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-zinc-300 leading-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 100% Online Global Option Card */}
            <div
              className="bg-zinc-900 border border-red-600/20 p-6 space-y-4 relative overflow-hidden group"
              style={{ borderRadius: "12px" }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/[0.04] rounded-full blur-xl" />

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-red-500" />
                <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">
                  ACOMPANHAMENTO GLOBAL
                </span>
              </div>

              <div className="space-y-1">
                <h5 className="text-sm font-black text-white uppercase tracking-tight">
                  CONSULTORIA 100% ONLINE
                </h5>
                <p className="text-[10px] text-zinc-400 font-semibold leading-relaxed uppercase">
                  Atendimento para qualquer lugar do Brasil e do mundo. Nosso
                  suporte e planos são totalmente digitais, direto no seu
                  WhatsApp.
                </p>
              </div>

              <div className="pt-2 space-y-2 border-t border-white/5">
                <div className="flex items-center gap-2 text-[9px] font-bold text-zinc-300 uppercase tracking-wider">
                  <span className="text-red-500">✓</span> Treino e Dieta na tela
                  do seu celular
                </div>
                <div className="flex items-center gap-2 text-[9px] font-bold text-zinc-300 uppercase tracking-wider">
                  <span className="text-red-500">✓</span> Suporte constante
                  direto com o Bruno
                </div>
                <div className="flex items-center gap-2 text-[9px] font-bold text-zinc-300 uppercase tracking-wider">
                  <span className="text-red-500">✓</span> Sem necessidade de
                  deslocamento físico
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
