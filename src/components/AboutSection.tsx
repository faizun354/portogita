import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-[#1b3b2b] text-white py-16 md:py-24" id="about">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Circular Photo Composition */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[280px] sm:w-[360px] h-[280px] sm:h-[360px]">
              {/* Golden Background Shape */}
              <div className="absolute inset-0 bg-[#feae2c] rounded-full"></div>
              
              {/* Concentric decorative arc */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#ffb955]/40 animate-[spin_40s_linear_infinite]"></div>
              
              <div className="absolute inset-2 rounded-full overflow-hidden bg-[#032517] shadow-2xl p-2 border-2 border-white/20">
                <img
                  src={PROFILE_DATA.photoUrl}
                  alt="Potret Gita Prasasti"
                  className="w-full h-full object-cover rounded-full select-none"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Skills Chips at Bottom of Portrait */}
              <div className="absolute -bottom-5 inset-x-0 flex flex-wrap justify-center gap-1.5 z-10 px-2">
                <span className="bg-[#feae2c] text-[#291800] text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  Lulusan S.Kep
                </span>
                <span className="bg-[#effdf4] text-[#032517] text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  Praktik Klinis
                </span>
                <span className="bg-[#032517] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md border border-white/20">
                  Administrasi RS
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative and Metrics */}
          <div className="lg:col-span-7 flex flex-col items-start mt-6 lg:mt-0">
            <span className="text-[11px] font-bold text-[#ffb955] uppercase tracking-widest block mb-2">
              — TENTANG SAYA
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Siapa Gita Prasasti?
            </h2>
            <p className="text-base sm:text-lg text-[#e6f4ec] leading-relaxed mb-4">
              Seorang lulusan Sarjana Keperawatan (Universitas IIKNU, 2022–2026) yang memiliki ketelitian analitis tinggi, kecakapan administrasi medis, dan komunikasi proaktif. Berkomitmen untuk menghadirkan pelayanan kesehatan yang penuh empati serta tata kelola administrasi yang terstruktur dan andal di institusi pelayanan kesehatan.
            </p>
            <p className="text-sm sm:text-base text-[#83a590] leading-relaxed mb-8">
              Selama menempuh pendidikan akademik dan praktik klinik di rumah sakit, saya terbiasa menjaga kerahasiaan data pasien (etika medis), menerapkan rekam medis terstandar, mengelola administrasi garis depan, dan berinteraksi secara empatik dengan pasien.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full mb-8 pt-6 border-t border-white/10">
              <div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-4xl text-[#ffb955] font-bold block leading-none">
                  4 Tahun
                </span>
                <span className="text-xs sm:text-sm text-[#e6f4ec] block mt-1.5 font-medium">
                  Perjalanan Akademik &amp; Klinis
                </span>
              </div>
              <div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-4xl text-[#ffb955] font-bold block leading-none">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[#e6f4ec] block mt-1.5 font-medium">
                  Dedikasi &amp; Integritas
                </span>
              </div>
              <div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-4xl text-[#ffb955] font-bold block leading-none">
                  12+
                </span>
                <span className="text-xs sm:text-sm text-[#e6f4ec] block mt-1.5 font-medium">
                  Kredensial Terverifikasi
                </span>
              </div>
            </div>

            {/* Bottom Action with Cursive Signature Accent */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 w-full">
              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Halo%20Gita%20Prasasti%20-%20Peluang%20Kerja%20Kesehatan`}
                className="inline-flex items-center gap-2 bg-[#feae2c] text-[#291800] hover:bg-[#ffb955] text-sm font-bold pl-6 pr-1.5 py-1.5 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <span>Hubungi Langsung</span>
                <span className="w-8 h-8 rounded-full bg-[#032517] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                </span>
              </a>

              <div className="flex items-center gap-2">
                <span className="font-['EB_Garamond',serif] text-3xl font-normal text-[#ffddb4] italic">
                  Gita Prasasti
                </span>
                <span className="text-[11px] text-[#83a590] uppercase tracking-wider font-semibold">
                  (TANDA TANGAN RESMI)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
