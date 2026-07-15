export interface Plan {
  id: string;
  name: string;
  price: number;
  months: number;
  monthlyPrice: number;
  highlighted?: boolean;
  tag?: string;
  durationLabel?: string;
  shortName?: string;
  features: string[];
}

export interface TransformationCase {
  id: string;
  name: string;
  age: number;
  goal: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
  stats: {
    weight: string;
    fatPercentage: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AnamneseState {
  name: string;
  whatsapp: string;
  gender: 'masculino' | 'feminino';
  age: string;
  weight: string; // in kg
  height: string; // in cm
  activityLevel: 'sedentario' | 'moderado' | 'ativo';
  goal: 'hipertrofia' | 'emagrecimento' | 'performance';
  limitations: string;
}
