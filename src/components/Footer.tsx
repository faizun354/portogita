import React from 'react';

interface FooterProps {
  onOpenLegalModal: (type: 'privacy' | 'terms' | 'medical') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  return (
    <footer className="w-full bg-[#e9f7ef] mt-16 md:mt-24 border-t border-[#d8e6de]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-1">
            <span className="font-['EB_Garamond',serif] text-3xl font-medium text-[#032517] tracking-tight block">
              Gita Prasasti
            </span>
            <p className="text-xs sm:text-sm text-[#424843]">
              Administrasi Layanan Kesehatan, Tata Kelola Operasional Klinis &amp; Kepatuhan Regulasi
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold">
            <a href="#" className="text-[#032517] hover:text-[#1b3b2b] transition-colors">
              Beranda
            </a>
            <a href="#services" className="text-[#424843] hover:text-[#032517] transition-colors">
              Layanan
            </a>
            <a href="#about" className="text-[#424843] hover:text-[#032517] transition-colors">
              Tentang
            </a>
            <a href="#experience-and-education" className="text-[#424843] hover:text-[#032517] transition-colors">
              Pendidikan &amp; Pengalaman
            </a>
            <a href="#certifications" className="text-[#424843] hover:text-[#032517] transition-colors">
              Sertifikasi
            </a>
            <a href="#contact" className="text-[#424843] hover:text-[#032517] transition-colors">
              Kontak
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-[#d8e6de] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#424843]">
          <p>© 2026 Gita Prasasti. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#032517] cursor-pointer transition-colors"
            >
              Kebijakan Privasi
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#032517] cursor-pointer transition-colors"
            >
              Ketentuan Layanan
            </button>
            <button
              onClick={() => onOpenLegalModal('medical')}
              className="hover:text-[#032517] cursor-pointer transition-colors"
            >
              Kepatuhan Regulasi Medis
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
