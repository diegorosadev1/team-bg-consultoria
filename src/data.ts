import { Plan, TransformationCase, FaqItem } from './types';
import resultados1 from "./assets/images/resultados1.png";
import resultados2 from "./assets/images/resultados2.png";
import resultados3 from "./assets/images/resultados3.png";
import resultados4 from "./assets/images/resultados4.png";
import resultados5 from "./assets/images/resultados5.png";
import resultados6 from "./assets/images/resultados6.png";
import resultados8 from "./assets/images/resultados8.png";
import resultados9 from "./assets/images/resultados9.png";
import resultados10 from "./assets/images/resultados10.png";
import resultados11 from "./assets/images/resultados11.png";
import resultados12 from "./assets/images/resultados12.png";

export const PLANS: Plan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal Completo (Treino, Dieta e Protocolo)',
    price: 239,
    months: 1,
    monthlyPrice: 239,
    durationLabel: '1 MÊS — ACOMPANHAMENTO COMPLETO (TREINO, DIETA E PROTOCOLO)',
    shortName: 'Plano Mensal Completo',
    features: [
      'Treino 100% Individualizado',
      'Plano Alimentar de Acordo com seu Objetivo',
      'Suporte Diretamente com o Bruno pelo WhatsApp',
      'Ajustes no Treino e Dieta Sempre que Necessário',
      'Análise de Exames e Suplementação',
      'Protocolo Completo de Peptídeos e Hormônios (Sem taxas extras!)'
    ]
  },
  {
    id: 'bimestral',
    name: 'Plano Bimestral Completo (Treino, Dieta e Protocolo)',
    price: 399,
    months: 2,
    monthlyPrice: 199,
    durationLabel: '2 MESES — ACOMPANHAMENTO COMPLETO (TREINO, DIETA E PROTOCOLO)',
    shortName: 'Plano Bimestral Completo',
    features: [
      'Acompanhamento por 2 Meses Completos',
      'Treino 100% Individualizado',
      'Plano Alimentar de Acordo com seu Objetivo',
      'Suporte Diretamente com o Bruno pelo WhatsApp',
      'Ajustes e Feedback Quinzenal',
      'Análise de Exames e Suplementação',
      'Protocolo Completo de Peptídeos e Hormônios (Sem taxas extras!)'
    ]
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral Completo (Treino, Dieta e Protocolo)',
    price: 499,
    months: 3,
    monthlyPrice: 166,
    durationLabel: '3 MESES — ACOMPANHAMENTO COMPLETO (TREINO, DIETA E PROTOCOLO)',
    shortName: 'Plano Trimestral Completo',
    highlighted: true,
    tag: 'MAIS RECOMENDADO',
    features: [
      'Acompanhamento por 3 Meses Completos',
      'Treino Focado em Correção de Pontos Fracos',
      'Dieta Flexível com Variedade de Alimentos',
      'Suporte Prioritário com o Bruno pelo WhatsApp',
      'Ajustes Frequentes Conforme sua Evolução',
      'Análise Avançada de Exames e Ergogênicos/Peptídeos',
      'Protocolo Completo de Peptídeos e Hormônios (Sem taxas extras!)'
    ]
  },
  {
    id: 'semestral',
    name: 'Plano Semestral Completo (Treino, Dieta e Protocolo)',
    price: 899,
    months: 6,
    monthlyPrice: 149,
    durationLabel: '6 MESES — ACOMPANHAMENTO COMPLETO (TREINO, DIETA E PROTOCOLO)',
    shortName: 'Plano Semestral Completo',
    features: [
      'Acompanhamento por 6 Meses Completos',
      'Planejamento de Longo Prazo (Bulk & Cut)',
      'Treinos Periodizados e Mudanças de Estímulos',
      'Ajuste Total de Macronutrientes e Calorias',
      'Contato Direto com o Bruno pelo WhatsApp',
      'Análise Completa de Exames e Saúde Geral',
      'Protocolo Completo de Peptídeos e Hormônios (Sem taxas extras!)'
    ]
  },
  {
    id: 'anual',
    name: 'Plano Anual Completo (Treino, Dieta e Protocolo)',
    price: 1599,
    months: 12,
    monthlyPrice: 133,
    durationLabel: '12 MESES — ACOMPANHAMENTO COMPLETO (TREINO, DIETA E PROTOCOLO)',
    shortName: 'Plano Anual Completo',
    tag: 'ESTILO DE VIDA',
    features: [
      'Acompanhamento por 12 Meses (1 Ano Inteiro)',
      'Protocolo Anual com Fases de Ganho e Definição',
      'Suporte Máximo e Prioridade Total',
      'Consultoria para Construção de Hábitos Definitivos',
      'Análise de Exames Periódicos',
      'Ideal para uma Mudança Drástica de Estilo de Vida',
      'Protocolo Completo de Peptídeos e Hormônios (Sem taxas extras!)'
    ]
  },
  {
    id: 'protocolo',
    name: 'Somente Protocolo de Peptídeos/Hormônios e Suplementação (Sem Treino e Dieta)',
    price: 240,
    months: 2,
    monthlyPrice: 120,
    durationLabel: '8 SEMANAS — EXCLUSIVO PARA PROTOCOLO E SUPLEMENTAÇÃO (SEM TREINO/DIETA)',
    shortName: 'Somente Protocolo',
    features: [
      'Acompanhamento de 8 Semanas Focado em Protocolo',
      'Protocolo Exclusivo de Peptídeos e Hormônios (se indicado)',
      'Planejamento de Suplementação Inteligente',
      'Suporte Direto com o Bruno pelo WhatsApp',
      'Análise de Exames Laboratoriais Otimizada',
      '⚠️ Sem Planilha de Treino ou Plano Alimentar (Ideal para quem já tem treinador/nutricionista)'
    ]
  }
];


export const TRANSFORMATION_CASES: TransformationCase[] = [
  {
    id: "1",
    name: "Aluno Team BG",
    age: 26,
    goal: "Hipertrofia",
    duration: "6 meses",
    beforeImg: resultados1,
    afterImg: resultados1,
    stats: {
      weight: "Ganho expressivo de massa muscular",
      fatPercentage: "Mais definição e volume muscular",
    },
  },
  {
    id: "2",
    name: "Aluna Team BG",
    age: 31,
    goal: "Emagrecimento",
    duration: "2 meses",
    beforeImg: resultados2,
    afterImg: resultados2,
    stats: {
      weight: "Redução visível de gordura corporal",
      fatPercentage: "Cintura mais fina e glúteos mais firmes",
    },
  },
  {
    id: "3",
    name: "Aluno Team BG",
    age: 34,
    goal: "Definição",
    duration: "5 meses",
    beforeImg: resultados3,
    afterImg: resultados3,
    stats: {
      weight: "Grande evolução na composição corporal",
      fatPercentage: "Abdômen definido e maior vascularização",
    },
  },
  {
    id: "4",
    name: "Aluno Team BG",
    age: 29,
    goal: "Recomposição Corporal",
    duration: "5 meses",
    beforeImg: resultados4,
    afterImg: resultados4,
    stats: {
      weight: "Ganho de massa muscular e definição",
      fatPercentage: "Redução do percentual de gordura",
    },
  },
  {
    id: "5",
    name: "Aluno Team BG",
    age: 30,
    goal: "Hipertrofia",
    duration: "7 meses",
    beforeImg: resultados5,
    afterImg: resultados5,
    stats: {
      weight: "Aumento significativo de massa magra",
      fatPercentage: "Maior definição muscular",
    },
  },

  {
    id: "10",
    name: "Aluno Team BG",
    age: 32,
    goal: "Hipertrofia",
    duration: "9 meses",
    beforeImg: resultados10,
    afterImg: resultados10,
    stats: {
      weight: "Excelente ganho muscular",
      fatPercentage: "Maior densidade muscular",
    },
  },
  {
    id: "11",
    name: "Aluna Team BG",
    age: 29,
    goal: "Emagrecimento",
    duration: "3 meses",
    beforeImg: resultados11,
    afterImg: resultados11,
    stats: {
      weight: "Transformação expressiva",
      fatPercentage: "Redução visível do percentual de gordura",
    },
  },
 
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O que está incluso na Consultoria Fitness?',
    answer: 'Você receberá uma planilha de treino completa e personalizada para o seu nível (seja iniciante ou avançado), um plano alimentar detalhado (dieta flexível, calculada com base nos seus macronutrientes e rotina), indicação de suplementação inteligente, e acompanhamento próximo direto no WhatsApp do Bruno Gagliardi (BG) para tirar dúvidas, fazer ajustes quinzenais ou mensais e analisar sua evolução.'
  },
  {
    id: 'faq-2',
    question: 'O suporte é realmente com o Bruno Gagliardi (BG)?',
    answer: 'Sim, absolutamente! Aqui não há robôs ou equipe de estagiários respondendo de forma genérica. Todo o suporte, envio de feedbacks e análise dos seus exames/treinos são feitos diretamente pelo Bruno através de contato direto via WhatsApp (segunda a quinta, com respostas rápidas em até 24 horas).'
  },
  {
    id: 'faq-3',
    question: 'Eu preciso treinar em academia ou posso fazer em casa?',
    answer: 'Você pode treinar onde preferir. O treino é adaptado de acordo com a sua realidade e ferramentas disponíveis. Se você treina em uma mega academia, montaremos uma divisão com aparelhos específicos. Se treina em casa ou em um condomínio com poucos pesos, montaremos um planejamento focado em calistenia e pesos livres para extrair o máximo de resultados.'
  },
  {
    id: 'faq-4',
    question: 'Como funciona a elaboração da dieta?',
    answer: 'A dieta é montada com base na sua anamnese (questionário de rotina). Nós calculamos o seu gasto calórico diário (TDEE) e dividimos os macronutrientes de forma ideal para o seu objetivo. Nós não tiramos o que você gosta de comer (pão, arroz, frutas); nós ajustamos as quantidades e ensinamos a fazer substituições inteligentes para que a dieta seja sustentável no longo prazo.'
  },
  {
    id: 'faq-5',
    question: 'Qual é o prazo para receber o meu protocolo?',
    answer: 'Após a confirmação do pagamento e envio do seu formulário de anamnese preenchido, os seus planos de treino, dieta e recomendações serão entregues de forma personalizada em até 3 dias úteis.'
  },
  {
    id: 'faq-6',
    question: 'O que são Peptídeos e por que o Bruno é especialista?',
    answer: 'O Bruno Gagliardi possui certificação pela ISSCA (International Society for Stem Cell Application) como Certified Peptide Specialist. Peptídeos são compostos de aminoácidos altamente específicos que atuam na regeneração celular, queima de gordura visceral, melhora articular, aumento da secreção natural de GH e melhora cognitiva. Se for do seu interesse e houver indicação, o Bruno pode incluir recomendações e orientações sobre esses protocolos inovadores para otimizar seus resultados.'
  },
  {
    id: 'faq-7',
    question: 'E se eu tiver dúvidas sobre a execução de algum exercício?',
    answer: 'Você pode gravar pequenos vídeos da sua execução durante o treino e enviar no WhatsApp do Bruno. Ele fará uma análise postural e biomecânica do seu movimento, corrigindo sua postura para evitar lesões e garantir o recrutamento muscular máximo.'
  }
];
