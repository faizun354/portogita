import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#deebe3] shadow-xs mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#feae2c]"></span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#032517]">
              Halo! Selamat Datang di Portofolio Saya
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#032517] leading-[1.1] tracking-tight mb-5">
            Saya <span className="text-[#835500]">Gita Prasasti</span>,<br />
            <span className="font-['EB_Garamond',serif] italic font-normal text-[#121e19]">
              Lulusan Keperawatan &amp; Spesialis Administrasi Kesehatan.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#424843] max-w-xl mb-8 leading-relaxed">
            Lulusan Sarjana Keperawatan (S.Kep) dari Universitas IIKNU dengan keahlian kuat dalam administrasi kesehatan, ketelitian pencatatan rekam medis klinis, dan keunggulan pelayanan berorientasi pasien.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#certifications"
              className="inline-flex items-center gap-2 bg-[#032517] text-white hover:bg-[#1b3b2b] text-sm font-bold pl-6 pr-1.5 py-1.5 rounded-full shadow-md transition-all group"
            >
              <span>Lihat Sertifikasi</span>
              <span className="w-9 h-9 rounded-full bg-[#feae2c] text-[#6b4500] flex items-center justify-center transition-transform group-hover:translate-x-1">
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </a>

            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 bg-[#e3f1e9] text-[#032517] hover:bg-[#deebe3] text-sm font-bold px-6 py-3 rounded-full transition-all shadow-xs border border-[#835500]/30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#835500]">description</span>
              <span>Unduh CV</span>
            </button>
          </div>

          {/* Trust Stats Sub-strip */}
          <div className="mt-10 pt-6 border-t border-[#d8e6de] w-full sm:w-auto flex items-center gap-6 sm:gap-10">
            <div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#032517] block leading-none">
                3.88
              </span>
              <span className="text-xs font-semibold text-[#424843] uppercase tracking-wider block mt-1.5">
                IPK Akademik
              </span>
            </div>
            <div className="w-px h-10 bg-[#d8e6de]"></div>
            <div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#032517] block leading-none">
                12+
              </span>
              <span className="text-xs font-semibold text-[#424843] uppercase tracking-wider block mt-1.5">
                Sertifikasi Profesi
              </span>
            </div>
            <div className="w-px h-10 bg-[#d8e6de]"></div>
            <div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#032517] block leading-none">
                100%
              </span>
              <span className="text-xs font-semibold text-[#424843] uppercase tracking-wider block mt-1.5">
                Etika &amp; Dedikasi
              </span>
            </div>
          </div>
        </div>

        {/* Hero Right Portrait Composition */}
        <div className="lg:col-span-5 flex justify-center relative mt-4 lg:mt-0">
          <div className="relative w-[320px] sm:w-[420px] h-[320px] sm:h-[420px]">
            {/* Amber Sun Backing Shape */}
            <div className="absolute -inset-2 bg-[#feae2c] rounded-full transform -rotate-3 scale-95 opacity-90 shadow-xl"></div>

            {/* Soft Green Ambient Disc */}
            <div className="absolute inset-4 bg-[#c7ebd4] rounded-full transform rotate-6"></div>

            {/* Profile Image Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-white shadow-2xl p-3 border-4 border-white">
              <img
                src={PROFILE_DATA.photoUrl}
                alt="Gita Prasasti - Profil Profesional Keperawatan & Administrasi Kesehatan"
                className="w-full h-full object-cover rounded-full select-none"
                loading="eager"
              />
            </div>

            {/* Floating Badge Top Left: Pelayanan Prima */}
            <div className="absolute -top-3 -left-3 sm:-left-4 bg-white text-[#032517] px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-[#d8e6de]">
              <span className="material-symbols-outlined text-[#835500] text-[18px]">verified_user</span>
              <span className="text-xs font-semibold">Pelayanan Prima</span>
            </div>

            {/* Floating Badge Bottom Left: Praktik Klinis */}
            <div className="absolute bottom-6 -left-4 sm:-left-6 bg-[#835500] text-white px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">medical_services</span>
              <span className="text-[11px] font-bold uppercase tracking-wider">Praktik Klinis</span>
            </div>

            {/* Floating Badge Right: Rekam Medis */}
            <div className="absolute top-1/3 -right-3 sm:-right-6 bg-white text-[#032517] px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 border border-[#d8e6de]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#835500]"></span>
              <span className="text-xs font-semibold">Rekam Medis</span>
            </div>

            {/* Floating Badge Bottom Right: Administrasi Kesehatan */}
            <div className="absolute -bottom-3 right-4 sm:right-6 bg-[#032517] text-white px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 border border-[#1b3b2b]">
              <span className="material-symbols-outlined text-[#ffddb4] text-[18px]">local_hospital</span>
              <span className="text-xs font-medium">Administrasi Kesehatan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
