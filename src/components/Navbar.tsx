import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Award, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppUrl } from '../config';
import logo from "../assets/images/logo.png";

interface NavbarProps {
  onOpenAssessment: () => void;
}

export default function Navbar({ onOpenAssessment }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Sobre', href: '#about' },
    { label: 'Resultados/Depoimentos', href: '#results' },
    { label: 'Planos', href: '#plans' },
    { label: 'Perguntas', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black border-b border-zinc-900/80 py-3.5 shadow-lg shadow-black/50"
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
         {/* Logo Branding */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
            id="logo-link"
          >
            <img
              src={logo}
              alt="BG Consultoria Fitness"
              className="
    h-25
    sm:h-24
    lg:h-28
    w-auto
    object-contain
    transition-transform duration-300
    group-hover:scale-105
  "
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-900 border border-white/5 rounded focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="block text-zinc-400 hover:text-white py-2 text-xs font-bold uppercase tracking-widest border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <a
                  href={getWhatsAppUrl('Olá Bruno! Já sou aluno e gostaria de tirar uma dúvida.')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-400 bg-zinc-900 border border-white/5 rounded py-3 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  Área do Aluno
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenAssessment();
                  }}
                  className="text-[10px] font-black uppercase tracking-wider bg-red-600 text-white rounded py-3 shadow-lg text-center cursor-pointer"
                >
                  Quero Começar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
