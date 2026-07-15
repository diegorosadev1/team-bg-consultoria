import { Plan, TransformationCase, FaqItem } from './types';

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
    id: '1',
    name: 'Lucas Silva',
    age: 28,
    goal: 'Hipertrofia & Definição',
    duration: '3 meses',
    beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop',
    stats: {
      weight: 'De 86kg para 79kg (-7kg de gordura)',
      fatPercentage: 'De 22% para 11% (-11%)'
    }
  },
  {
    id: '2',
    name: 'Mariana Costa',
    age: 31,
    goal: 'Recomposição Corporal',
    duration: '4 meses',
    beforeImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
    stats: {
      weight: 'De 68kg para 62kg (-6kg)',
      fatPercentage: 'De 28% para 17% (-11%)'
    }
  },
  {
    id: '3',
    name: 'Rodrigo Alves',
    age: 26,
    goal: 'Hipertrofia Máxima',
    duration: '6 meses',
    beforeImg: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    stats: {
      weight: 'De 71kg para 82kg (+11kg de massa magra)',
      fatPercentage: 'De 10% para 12% (Limpo)'
    }
  },
  {
    id: '4',
    name: 'Felipe Camargo',
    age: 29,
    goal: 'Secar e Definir',
    duration: '2 meses',
    beforeImg: 'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    stats: {
      weight: 'De 94kg para 84kg (-10kg de peso)',
      fatPercentage: 'De 24% para 14% (-10%)'
    }
  },
  {
    id: '5',
    name: 'Amanda Ramos',
    age: 25,
    goal: 'Definição Abdominal',
    duration: '5 meses',
    beforeImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
    stats: {
      weight: 'De 64kg para 58kg (-6kg)',
      fatPercentage: 'De 26% para 16% (-10%)'
    }
  }
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
