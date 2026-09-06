import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface CertificationsSectionProps {
  onSelectCertification: (cert: CertificationItem) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectCertification }) => {
  const [activeFilter, setActiveFilter] = useState<string>('SEMUA');

  const filterCategories = [
    { key: 'SEMUA', label: 'Semua (12)' },
    { key: 'ADMINISTRASI', label: 'Administrasi & Data' },
    { key: 'KLINIS', label: 'Praktik Klinis' },
    { key: 'KEGAWATDARURATAN', label: 'Gawat Darurat & Triase' },
    { key: 'KESELAMATAN', label: 'Keselamatan & K3' },
  ];

  const filteredCerts = CERTIFICATIONS_DATA.filter((cert) => {
    if (activeFilter === 'SEMUA') return true;
    if (activeFilter === 'ADMINISTRASI') {
      return ['ADMINISTRASI', 'ANALITIK', 'KLAIM & KEUANGAN'].includes(cert.category);
    }
    if (activeFilter === 'KLINIS') {
      return ['KLINIS', 'PERAWATAN LUKA', 'PELAYANAN PRIMA', 'FARMAKOLOGI'].includes(cert.category);
    }
    if (activeFilter === 'KEGAWATDARURATAN') {
      return ['KEGAWATDARURATAN', 'TRIASE'].includes(cert.category);
    }
    if (activeFilter === 'KESELAMATAN') {
      return ['KESELAMATAN PASIEN', 'K3RS', 'KESEHATAN MASYARAKAT'].includes(cert.category);
    }
    return true;
  });

  const getBadgeStyle = (badgeClass: 'amber' | 'green' | 'gray') => {
    switch (badgeClass) {
      case 'amber':
        return 'bg-[#ffddb4] text-[#291800]';
      case 'green':
        return 'bg-[#c7ebd4] text-[#002113]';
      case 'gray':
      default:
        return 'bg-[#deebe3] text-[#424843]';
    }
  };

  return (
    <section className="w-full bg-[#e9f7ef] py-16 md:py-24" id="certifications">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#835500] uppercase tracking-widest block mb-1">
              — KREDENSIAL PROFESIONAL
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#032517] tracking-tight">
              Sertifikasi Profesi &amp; Prestasi
            </h2>
            <p className="text-sm text-[#424843] mt-2">
              12 sertifikasi dan pelatihan kompetensi kesehatan terverifikasi selama periode 2022–2026.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-xs text-[#032517] text-xs font-semibold self-start md:self-auto border border-[#c7ebd4]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#835500]"></span>
            <span>12 Dokumen Terverifikasi</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterCategories.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === filter.key
                  ? 'bg-[#032517] text-white shadow-sm'
                  : 'bg-white text-[#424843] hover:bg-[#deebe3] border border-[#d8e6de]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 12 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCertification(cert)}
              className="bg-white p-6 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer border border-[#d8e6de]/70 hover:border-[#835500]/40"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCertification(cert);
                }
              }}
            >
            <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${getBadgeStyle(cert.badgeClass)}`}>
                    {cert.category}
                  </span>
                  <span className="text-xs text-[#424843] font-semibold">{cert.year}</span>
                </div>

                {/* Foto sertifikat atau icon fallback */}
                {cert.imageUrl ? (
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-3 bg-[#e9f7ef]">
                    <img
                      src={cert.imageUrl}
                      alt={`Sertifikat ${cert.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // fallback ke icon jika foto tidak ditemukan
                        (e.currentTarget.parentElement as HTMLElement).innerHTML =
                          `<div class="w-full h-full flex items-center justify-center"><span class="material-symbols-outlined text-[32px] text-[#032517]">${cert.iconName}</span></div>`;
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-[#e9f7ef] flex items-center justify-center text-[#032517] mb-3 group-hover:bg-[#feae2c] group-hover:text-[#291800] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">{cert.iconName}</span>
                  </div>
                )}

                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[17px] font-bold text-[#032517] leading-tight mb-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-[#424843] leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[#424843] font-medium truncate pr-2" title={cert.issuer}>
                  {cert.issuer}
                </span>
                <span className="material-symbols-outlined text-[#835500] text-[18px] shrink-0" title="Terverifikasi">
                  verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
