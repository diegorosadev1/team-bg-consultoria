import { useState } from 'react';
import { Plan } from './types';
import { getWhatsAppUrl } from './config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import BeforeAfter from './components/BeforeAfter';
import Plans from './components/Plans';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AnamneseModal from './components/AnamneseModal';

export default function App() {
  const [isAnamneseOpen, setIsAnamneseOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Trigger WhatsApp redirection with a specific plan selected
  const handleSelectPlan = (plan: Plan) => {
    const text = `Olá Bruno! Quero começar a consultoria esportiva no plano: ${plan.name}. Como faço para dar início?`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  // Trigger WhatsApp redirection for general start query
  const handleOpenGeneralAssessment = () => {
    const text = 'Olá Bruno! Quero começar a minha consultoria esportiva e mudar o meu físico.';
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenAssessment={handleOpenGeneralAssessment} />

      {/* Main Page Core Layout */}
      <main>
        {/* Section 1: Hero Segment */}
        <Hero onOpenAssessment={handleOpenGeneralAssessment} />

        {/* Section 2: Core Offerings and Pillars */}
        <Benefits onOpenAssessment={handleOpenGeneralAssessment} />

        {/* Section 3: Profile Bio & Philosophy */}
        <About />

        {/* Section 4: Interactive Transformations & Comparisons */}
        <BeforeAfter onOpenAssessment={handleOpenGeneralAssessment} />

        {/* Section 5: Dynamic Plan Matrices and Checkout CTAs */}
        <Plans onSelectPlan={handleSelectPlan} />

        {/* Section 6: Standard Accordion FAQs */}
        <Faq />
      </main>

      {/* Footer & Blinking floating support badge */}
      <Footer onOpenAssessment={handleOpenGeneralAssessment} />

      {/* Master Interactive Questionnaire Modal */}
      {isAnamneseOpen && (
        <AnamneseModal
          isOpen={isAnamneseOpen}
          onClose={() => setIsAnamneseOpen(false)}
          selectedPlan={selectedPlan}
        />
      )}
    </div>
  );
}
