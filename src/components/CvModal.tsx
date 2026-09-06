import React, { useState } from 'react';
import { PROFILE_DATA, EDUCATION_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summaryText = `CURRICULUM VITAE - ${PROFILE_DATA.name}, S.Kep
${PROFILE_DATA.title}
Kontak: ${PROFILE_DATA.email} | ${PROFILE_DATA.phone} | ${PROFILE_DATA.location}

PROFIL SINGKAT:
Lulusan Sarjana Keperawatan (S.Kep) Universitas IIKNU dengan IPK ${PROFILE_DATA.gpa}. Memiliki kompetensi mendalam dalam administrasi rumah sakit, rekam medis elektronik (RME), asuhan keperawatan klinis terstandar, dan komunikasi terapeutik.

PENDIDIKAN:
- Sarjana Keperawatan (S1), Universitas IIKNU (2022 - 2026) - IPK: 3.85 / 4.00
- SMA Negeri 3 Tuban (2019 - 2022) - Jurusan MIPA

PENGALAMAN & PRAKTIK:
- Praktik Keperawatan Klinis & Bangsal - Jaringan Layanan Kesehatan Regional, Tuban (450+ lembar asuhan klinis terdokumentasi)
- Manajemen Data Kesehatan & Front-Desk - Pusat Pelayanan Kesehatan Akademik (Implementasi RME & Efisiensi Pengarsipan 35%)

12 SERTIFIKASI PROFESI TERVERIFIKASI:
${CERTIFICATIONS_DATA.map((c, i) => `${i + 1}. ${c.title} (${c.issuer}, ${c.year})`).join('\n')}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadSimulatedPdf = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      window.print();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200 animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#effdf4]">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#1b3b2b] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">description</span>
            </span>
            <div>
              <h2 id="cv-modal-title" className="text-lg font-bold text-[#032517] leading-tight">
                Curriculum Vitae (CV) Resmi
              </h2>
              <p className="text-xs text-[#424843]">Gita Prasasti, S.Kep • Dokumen Akademik & Profesional</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-[#121e19]">
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 bg-[#e9f7ef] rounded-xl border border-[#c7ebd4]">
            <img
              src={PROFILE_DATA.photoUrl}
              alt={PROFILE_DATA.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="text-center sm:text-left space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#feae2c] text-[#291800] text-xs font-bold uppercase tracking-wider">
                Sarjana Keperawatan (S.Kep)
              </span>
              <h3 className="text-2xl font-bold text-[#032517]">{PROFILE_DATA.name}</h3>
              <p className="text-sm font-medium text-[#835500]">{PROFILE_DATA.title}</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-[#424843] pt-1">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#032517]">mail</span>
                  {PROFILE_DATA.email}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#032517]">call</span>
                  {PROFILE_DATA.phone}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-[#032517]">location_on</span>
                  Tuban, Jawa Timur
                </span>
              </div>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#835500] uppercase mb-2">Ringkasan Profesional</h4>
            <p className="text-sm text-[#424843] leading-relaxed">
              Lulusan Sarjana Keperawatan (S.Kep) dengan predikat sangat memuaskan (IPK 3.85/4.00) dari Universitas IIKNU. Memiliki perpaduan keahlian asuhan klinis medis dan spesialisasi administrasi kesehatan modern. Berpengalaman dalam pengelolaan rekam medis elektronik (RME), sistem antrean registrasi pasien, kepatuhan klaim asuransi BPJS, serta pemeliharaan standar keselamatan pasien WHO.
            </p>
          </div>

          {/* Pendidikan */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#835500] uppercase mb-3">Riwayat Pendidikan</h4>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-3.5 bg-stone-50 rounded-lg border border-stone-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-[#032517] block">{edu.degree}</span>
                      <span className="text-xs text-[#835500] font-medium">{edu.institution}</span>
                    </div>
                    <span className="text-[11px] font-semibold bg-[#e9f7ef] text-[#032517] px-2 py-0.5 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#424843] mt-1.5 leading-normal">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pengalaman Klinis & Administrasi */}
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#835500] uppercase mb-3">Pengalaman Klinis & Administrasi RS</h4>
            <div className="space-y-3">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="p-3.5 bg-stone-50 rounded-lg border border-stone-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-bold text-[#032517] block">{exp.title}</span>
                      <span className="text-xs text-[#835500] font-medium">{exp.institution}</span>
                    </div>
                    <span className="text-[11px] font-semibold bg-[#ffddb4] text-[#291800] px-2 py-0.5 rounded-full">
                      {exp.categoryLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#424843] mt-1.5 leading-normal">{exp.description}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <span className="material-symbols-outlined text-[14px] text-[#835500]">check_circle</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ringkasan 12 Sertifikasi */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold tracking-wider text-[#835500] uppercase">
                12 Kredensial & Sertifikasi Profesi Terverifikasi
              </h4>
              <span className="text-[11px] text-[#032517] font-semibold bg-[#c7ebd4] px-2 py-0.5 rounded-full">
                Terakreditasi
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="p-2.5 rounded-md bg-stone-50 border border-stone-200 flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#835500] text-base mt-0.5">verified</span>
                  <div>
                    <p className="font-semibold text-[#032517] leading-tight">{cert.title}</p>
                    <p className="text-[11px] text-[#424843]">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-stone-300 bg-white text-[#121e19] hover:bg-stone-100 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Teks Tersalin!' : 'Salin Ringkasan'}</span>
            </button>
            <a
              href={`mailto:${PROFILE_DATA.email}?subject=Permintaan Berkas CV Lengkap - ${PROFILE_DATA.name}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-stone-300 bg-white text-[#121e19] hover:bg-stone-100 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>Kirim ke Email</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg text-stone-600 hover:text-stone-900 transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handleDownloadSimulatedPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-[#032517] text-white hover:bg-[#1b3b2b] transition-colors shadow-md disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">
                {isDownloading ? 'hourglass_top' : 'print'}
              </span>
              <span>{isDownloading ? 'Menyiapkan...' : 'Cetak / Unduh PDF'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
