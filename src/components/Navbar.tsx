import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', href: '#', label: 'Beranda' },
    { id: 'services', href: '#services', label: 'Layanan & Keahlian' },
    { id: 'about', href: '#about', label: 'Tentang' },
    { id: 'experience-and-education', href: '#experience-and-education', label: 'Pendidikan & Pengalaman' },
    { id: 'certifications', href: '#certifications', label: 'Sertifikasi' },
    { id: 'contact', href: '#contact', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sections = ['contact', 'certifications', 'experience-and-education', 'about', 'services'];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#effdf4]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="h-20 w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-['EB_Garamond',serif] text-3xl font-medium text-[#032517] tracking-tight group-hover:text-[#1b3b2b] transition-colors">
            Gita P.
          </span>
          <span className="hidden sm:inline-block text-[11px] font-bold text-[#424843] bg-[#deebe3] px-2.5 py-1 rounded-full uppercase tracking-wider">
            ADMINISTRASI KESEHATAN
          </span>
        </a>

        {/* Desktop Navigation Pill */}
        <nav 
          aria-label="Navigasi Utama" 
          className="hidden lg:flex items-center bg-[#e9f7ef] p-1 rounded-full shadow-[0_2px_8px_rgba(27,59,43,0.04)]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1b3b2b] text-[#ffffff] shadow-sm'
                    : 'text-[#424843] hover:text-[#121e19] hover:bg-white/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full border border-[#835500]/30 text-[#032517] hover:bg-[#e9f7ef] transition-colors"
            title="Lihat & Unduh Curriculum Vitae"
          >
            <span className="material-symbols-outlined text-[16px] text-[#835500]">description</span>
            <span>CV</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#032517] text-white hover:bg-[#1b3b2b] text-sm font-semibold pl-5 pr-1.5 py-1 rounded-full shadow-[0_4px_12px_rgba(27,59,43,0.08)] transition-all group"
          >
            <span className="py-1">Hubungi Saya</span>
            <span className="w-8 h-8 rounded-full bg-[#feae2c] text-[#6b4500] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>

          {/* Profile Mini Thumbnail */}
          <div className="relative group">
            <img
              src={PROFILE_DATA.photoUrl}
              alt="Foto Profil Gita Prasasti"
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-[#c7ebd4] cursor-pointer"
              onClick={onOpenCvModal}
              title="Gita Prasasti, S.Kep (Klik untuk buka CV)"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#032517] ring-2 ring-white" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#e9f7ef] text-[#032517] flex items-center justify-center hover:bg-[#deebe3] transition-colors"
            aria-label="Buka Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#effdf4] border-b border-[#d8e6de] shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#1b3b2b] text-white'
                    : 'text-[#424843] hover:bg-[#e9f7ef] hover:text-[#032517]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#d8e6de] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#deebe3] text-[#032517] text-sm font-bold"
              >
                <span className="material-symbols-outlined text-base text-[#835500]">description</span>
                <span>Buka & Unduh CV Resmi</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
