import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { CredentialModal } from './components/CredentialModal';
import { ServiceModal } from './components/ServiceModal';
import { LegalModal } from './components/LegalModal';
import { CertificationItem, ServiceItem } from './types';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'medical' | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForContact = (_serviceName: string) => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#effdf4] font-['Plus_Jakarta_Sans',sans-serif] text-[#121e19] selection:bg-[#c7ebd4] selection:text-[#002113]">
      {/* Navigation Bar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="w-full pt-20">
        {/* Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Marquee / Ticker Bar */}
        <MarqueeStrip />

        {/* Services & Competencies */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* Deep Forest Green About Section */}
        <AboutSection />

        {/* Academic Qualification & Clinical Practice Experience */}
        <ExperienceSection />

        {/* 12 Professional Certifications & Credentials Grid */}
        <CertificationsSection onSelectCertification={(cert) => setSelectedCert(cert)} />

        {/* Direct Contact & Interactive Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* Modals & Dialogs */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      <CredentialModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={handleSelectServiceForContact}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#032517] text-white shadow-xl hover:bg-[#1b3b2b] flex items-center justify-center transition-all animate-in fade-in duration-200 cursor-pointer hover:scale-105"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
        </button>
      )}
    </div>
  );
}
