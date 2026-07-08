import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, Check, Flame, Droplet, User, Scale, Activity, Award } from 'lucide-react';
import { AnamneseState, Plan } from '../types';
import { getWhatsAppUrl } from '../config';

interface AnamneseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: Plan | null;
}

const INITIAL_STATE: AnamneseState = {
  name: '',
  whatsapp: '',
  gender: 'masculino',
  age: '',
  weight: '',
  height: '',
  activityLevel: 'moderado',
  goal: 'hipertrofia',
  limitations: '',
};

export default function AnamneseModal({ isOpen, onClose, selectedPlan }: AnamneseModalProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<AnamneseState>(INITIAL_STATE);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderSelect = (gender: 'masculino' | 'feminino') => {
    setFormData((prev) => ({ ...prev, gender }));
  };

  const handleGoalSelect = (goal: 'hipertrofia' | 'emagrecimento' | 'performance') => {
    setFormData((prev) => ({ ...prev, goal }));
  };

  const handleActivitySelect = (activityLevel: 'sedentario' | 'moderado' | 'ativo') => {
    setFormData((prev) => ({ ...prev, activityLevel }));
  };

  // Calculations
  const weightNum = parseFloat(formData.weight) || 0;
  const heightNum = parseFloat(formData.height) || 0;
  const ageNum = parseFloat(formData.age) || 0;

  // BMI (IMC)
  const heightM = heightNum / 100;
  const bmi = heightM > 0 ? (weightNum / (heightM * heightM)).toFixed(1) : '0';

  // Basal Metabolic Rate (BMR) - Mifflin-St Jeor
  let bmr = 0;
  if (weightNum > 0 && heightNum > 0 && ageNum > 0) {
    if (formData.gender === 'masculino') {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
    }
  }

  // TDEE (Gasto Energético Diário)
  let tdee = 0;
  if (bmr > 0) {
    if (formData.activityLevel === 'sedentario') tdee = bmr * 1.2;
    else if (formData.activityLevel === 'moderado') tdee = bmr * 1.55;
    else tdee = bmr * 1.725;
  }

  // Water intake
  const waterIntake = weightNum > 0 ? Math.round(weightNum * 35) : 0; // 35ml per kg

  const isStepValid = () => {
    if (step === 1) {
      return formData.name.trim().length > 2 && formData.whatsapp.trim().length > 7;
    }
    if (step === 2) {
      return weightNum > 30 && heightNum > 100 && ageNum > 10;
    }
    return true;
  };

  const handleNext = () => {
    if (isStepValid() && step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const formatWhatsAppMessage = () => {
    const goalText =
      formData.goal === 'hipertrofia'
        ? '💪 Hipertrofia (Ganho de Massa)'
        : formData.goal === 'emagrecimento'
        ? '🔥 Emagrecimento (Definição)'
        : '⚡ Performance & Saúde';

    const activityText =
      formData.activityLevel === 'sedentario'
        ? 'Sedentário (Trabalho sentado, pouco movimento)'
        : formData.activityLevel === 'moderado'
        ? 'Moderadamente ativo (Treina 3-4x na semana)'
        : 'Muito ativo (Treina pesado 5-7x na semana)';

    const planName = selectedPlan ? selectedPlan.name : 'Avaliação Inicial';
    const planPrice = selectedPlan ? `R$ ${selectedPlan.price.toFixed(2)}` : 'Consultar';

    const text = `Olá Bruno! Acabei de preencher minha Ficha de Anamnese no site da BG Consultoria Fitness e gostaria de iniciar.

*DADOS PESSOAIS:*
- Nome: ${formData.name}
- WhatsApp: ${formData.whatsapp}
- Gênero: ${formData.gender.toUpperCase()}
- Idade: ${formData.age} anos

*MEDIDAS E ROTINA:*
- Peso: ${formData.weight} kg
- Altura: ${formData.height} cm
- Nível de atividade: ${activityText}
- Objetivo principal: ${goalText}
- Limitações físicas/lesões: ${formData.limitations || 'Nenhuma'}

*MÉTRICAS ESTIMADAS (Cálculo Automático):*
- IMC Estimado: ${bmi}
- Metabolismo Basal: ${Math.round(bmr)} kcal
- Gasto Energético Diário (TDEE): ${Math.round(tdee)} kcal
- Consumo diário recomendado de Água: ${(waterIntake / 1000).toFixed(1)}L por dia

*PLANO ESCOLHIDO:*
- ${planName} (${planPrice})`;

    return text;
  };

  const handleSubmit = () => {
    const message = formatWhatsAppMessage();
    const whatsappUrl = getWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
    onClose();
    setStep(1);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl overflow-hidden bg-zinc-950 border border-white/5 rounded-xl shadow-2xl shadow-red-950/5"
        id="anamnese-modal-container"
      >
        {/* Header background glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-zinc-900 to-red-600" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white bg-zinc-900 border border-white/5 rounded transition-all cursor-pointer"
          id="close-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {/* Header Title */}
          <div className="mb-6 text-left">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-600/10 px-2.5 py-1 rounded border border-red-600/30">
              {selectedPlan ? `Plano Selecionado: ${selectedPlan.name}` : 'Análise de Shape Grátis'}
            </span>
            <h3 className="mt-3 text-2xl font-black italic uppercase tracking-tighter text-white">
              Ficha de Anamnese & Metas
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mt-1">
              Responda estas perguntas rápidas para que o Bruno elabore o planejamento perfeito para você.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex-1 flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded border text-xs font-black transition-all ${
                    step >= num
                      ? 'bg-red-600 border-transparent text-white shadow-lg shadow-red-600/30'
                      : 'bg-zinc-900 border-white/5 text-zinc-500'
                  }`}
                >
                  {step > num ? <Check className="w-4 h-4" /> : num}
                </div>
                {num < 4 && (
                  <div
                    className={`flex-1 h-[2px] mx-2 transition-all ${
                      step > num ? 'bg-red-600' : 'bg-zinc-900'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-red-500" />
                    Quem é você?
                  </h4>
                  <div className="space-y-3">
                    <div className="text-left">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: João Silva"
                        className="w-full bg-zinc-900 border border-white/5 rounded px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                        required
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                        Seu WhatsApp com DDD
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Ex: (16) 99999-9999"
                        className="w-full bg-zinc-900 border border-white/5 rounded px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                        required
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                        Gênero Biológico
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleGenderSelect('masculino')}
                          className={`py-3 rounded border text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                            formData.gender === 'masculino'
                              ? 'bg-red-600/10 border-red-600 text-red-500'
                              : 'bg-zinc-900 border-white/5 text-zinc-400 hover:border-red-600/30'
                          }`}
                        >
                          Masculino
                        </button>
                        <button
                          type="button"
                          onClick={() => handleGenderSelect('feminino')}
                          className={`py-3 rounded border text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                            formData.gender === 'feminino'
                              ? 'bg-red-600/10 border-red-600 text-red-500'
                              : 'bg-zinc-900 border-white/5 text-zinc-400 hover:border-red-600/30'
                          }`}
                        >
                          Feminino
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                    <Scale className="w-4 h-4 text-red-500" />
                    Suas Medidas Atuais
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-left">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                        Idade (anos)
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Ex: 27"
                        className="w-full bg-zinc-900 border border-white/5 rounded px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                        required
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                        Peso (kg)
                      </label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="Ex: 82"
                        className="w-full bg-zinc-900 border border-white/5 rounded px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                        required
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                        Altura (cm)
                      </label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        placeholder="Ex: 178"
                        className="w-full bg-zinc-900 border border-white/5 rounded px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all text-sm font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                      Nível de Atividade Física
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'sedentario', label: 'Sedentário', desc: 'Trabalho sentado, sem atividades extras regulares' },
                        { id: 'moderado', label: 'Moderadamente Ativo', desc: 'Treina musculação ou esportes 3 a 4x na semana' },
                        { id: 'ativo', label: 'Altamente Ativo', desc: 'Musculação intensa de 5 a 7x na semana ou trabalho físico pesado' },
                      ].map((act) => (
                        <button
                          key={act.id}
                          type="button"
                          onClick={() => handleActivitySelect(act.id as any)}
                          className={`w-full text-left p-3 rounded border flex flex-col transition-all cursor-pointer ${
                            formData.activityLevel === act.id
                              ? 'bg-red-600/10 border-red-600 text-red-500'
                              : 'bg-zinc-900 border-white/5 text-zinc-400 hover:border-red-600/30'
                          }`}
                        >
                          <span className="text-xs font-black uppercase tracking-widest">{act.label}</span>
                          <span className="text-xs text-zinc-500 mt-0.5 font-medium">{act.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-black italic uppercase tracking-tighter text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-red-500" />
                    Seu Grande Objetivo
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { id: 'hipertrofia', label: 'Hipertrofia', desc: 'Massa e densidade' },
                      { id: 'emagrecimento', label: 'Definição', desc: 'Queima de gordura' },
                      { id: 'performance', label: 'Recomposição', desc: 'Estética & Saúde' },
                    ].map((g) => (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => handleGoalSelect(g.id as any)}
                        className={`text-center p-4 rounded border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          formData.goal === g.id
                            ? 'bg-red-600/10 border-red-600 text-red-500 shadow-md shadow-red-950/20'
                            : 'bg-zinc-900 border-white/5 text-zinc-400 hover:border-red-600/30'
                        }`}
                      >
                        <span className="text-2xl mb-1">{g.id === 'hipertrofia' ? '💪' : g.id === 'emagrecimento' ? '🔥' : '⚡'}</span>
                        <span className="text-xs font-black uppercase tracking-wider">{g.label}</span>
                        <span className="text-[10px] text-zinc-500 mt-1 font-medium leading-tight">{g.desc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-1.5">
                      Você tem alguma lesão, limitação física ou problema de saúde?
                    </label>
                    <textarea
                      name="limitations"
                      value={formData.limitations}
                      onChange={handleInputChange}
                      placeholder="Ex: Dor na lombar ao agachar, hérnia de disco, sensibilidade alimentar, etc. (Opcional)"
                      className="w-full h-24 bg-zinc-900 border border-white/5 rounded px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 transition-all resize-none text-sm font-medium"
                    />
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <div className="text-center py-2">
                    <Award className="w-10 h-10 text-red-500 mx-auto mb-2" />
                    <h4 className="text-xl font-black italic uppercase tracking-tighter text-white">Pronto, {formData.name.split(' ')[0]}!</h4>
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Calculamos suas métricas estimadas com base na ciência aplicada.
                    </p>
                  </div>

                  {/* Body Metrics Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-zinc-900 border border-white/5 p-4 rounded-lg">
                    <div className="text-center p-2 bg-zinc-950 rounded border border-white/5">
                      <span className="block text-[8px] uppercase font-black text-zinc-500 tracking-wider">IMC Estimado</span>
                      <span className="block text-lg font-black italic text-white mt-1 leading-none">{bmi}</span>
                      <span className="block text-[9px] text-red-500 font-bold uppercase mt-1 leading-none">
                        {parseFloat(bmi) < 18.5
                          ? 'Abaixo do Peso'
                          : parseFloat(bmi) < 25
                          ? 'Saudável'
                          : parseFloat(bmi) < 30
                          ? 'Sobrepeso'
                          : 'Obesidade'}
                      </span>
                    </div>

                    <div className="text-center p-2 bg-zinc-950 rounded border border-white/5">
                      <span className="block text-[8px] uppercase font-black text-zinc-500 tracking-wider">Metabolismo Basal</span>
                      <span className="block text-lg font-black italic text-white mt-1 flex items-center justify-center gap-1 leading-none">
                        <Flame className="w-4 h-4 text-red-500 inline" />
                        {Math.round(bmr)}
                      </span>
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase mt-1 leading-none">kcal/dia</span>
                    </div>

                    <div className="text-center p-2 bg-zinc-950 rounded border border-white/5">
                      <span className="block text-[8px] uppercase font-black text-zinc-500 tracking-wider">Gasto Diário (TDEE)</span>
                      <span className="block text-lg font-black italic text-white mt-1 leading-none">
                        {Math.round(tdee)}
                      </span>
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase mt-1 leading-none">kcal/dia</span>
                    </div>

                    <div className="text-center p-2 bg-zinc-950 rounded border border-white/5">
                      <span className="block text-[8px] uppercase font-black text-zinc-500 tracking-wider">Meta de Água</span>
                      <span className="block text-lg font-black italic text-white mt-1 flex items-center justify-center gap-1 leading-none">
                        <Droplet className="w-4 h-4 text-blue-500 inline" />
                        {(waterIntake / 1000).toFixed(1)}
                      </span>
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase mt-1 leading-none">Litros/dia</span>
                    </div>
                  </div>

                  <div className="bg-red-600/10 border border-red-600/30 p-4 rounded">
                    <p className="text-xs text-zinc-300 leading-relaxed text-center font-semibold">
                      ⚠️ <strong>Observação:</strong> Estes valores são estimativas científicas iniciais baseadas no seu perfil. 
                      O Bruno irá analisar e recalcular detalhadamente os seus macros no planejamento definitivo.
                    </p>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                      Ao clicar abaixo, você será direcionado para o WhatsApp com seu relatório formatado.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all bg-zinc-900 rounded border border-white/5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
            )}
            <div className="flex-1" />
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 px-6 py-3 rounded font-bold text-xs tracking-widest uppercase transition-all shadow-lg cursor-pointer ${
                  isStepValid()
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/20 hover:scale-[1.02]'
                    : 'bg-zinc-900 text-zinc-600 border border-white/5 cursor-not-allowed'
                }`}
              >
                Próximo Passo
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white rounded font-bold text-xs tracking-widest uppercase shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
              >
                ENVIAR FICHA E INICIAR CONSULTORIA
                <Check className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
