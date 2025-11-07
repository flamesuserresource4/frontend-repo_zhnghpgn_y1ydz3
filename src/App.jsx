import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioAndTestimonials from './components/PortfolioAndTestimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <head>
        <title>Raven Security Bandung – Professional CCTV Solutions</title>
        <meta
          name="description"
          content="Raven Security Bandung – Expert CCTV Installation & Repair in Bandung. Neat guaranteed installation, responsive after-sales service, and professional technicians ready to assist 24/7."
        />
      </head>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioAndTestimonials />
      <footer className="border-t border-white/10 bg-zinc-950 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Raven Security Bandung. All rights reserved.
      </footer>
    </div>
  );
}
