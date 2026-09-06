import React from 'react';
import { CertificationItem } from '../types';

interface CredentialModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Certificate Card Header */}
        <div className="relative p-6 bg-gradient-to-br from-[#1b3b2b] to-[#032517] text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#feae2c] text-[#291800] text-[11px] font-bold uppercase tracking-wider">
              {certification.category}
            </span>
            <span className="text-xs text-[#abcfb8]">Tahun Terbit: {certification.year}</span>
          </div>

          <h2 id="cert-modal-title" className="text-xl font-bold leading-snug pr-6">
            {certification.title}
          </h2>
          <p className="text-xs text-[#abcfb8] mt-1">Lembaga Penerbit: {certification.issuer}</p>
        </div>

        {/* Certificate Details */}
        <div className="p-6 space-y-4 text-[#121e19]">

          {/* Foto Sertifikat (jika tersedia) */}
          {certification.imageUrl && (
            <div className="w-full rounded-xl overflow-hidden border border-[#d8e6de] shadow-sm">
              <img
                src={certification.imageUrl}
                alt={`Foto Sertifikat ${certification.title}`}
                className="w-full h-auto object-contain max-h-64"
                onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none'; }}
              />
            </div>
          )}
          <div className="flex items-center justify-between p-3 bg-[#effdf4] rounded-xl border border-[#c7ebd4]">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#c7ebd4] text-[#032517] flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">verified</span>
              </span>
              <div>
                <p className="text-xs font-bold text-[#032517]">Status: Terverifikasi & Aktif</p>
                <p className="text-[11px] text-[#424843] font-mono">No. Kredensial: {certification.credentialId}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 bg-white text-[#032517] rounded border border-[#c7ebd4]">
              RESMI
            </span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#835500] uppercase tracking-wider mb-1">Deskripsi Kompetensi</h4>
            <p className="text-sm text-[#424843] leading-relaxed">
              {certification.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#835500] uppercase tracking-wider mb-2">Cakupan Keahlian yang Diuji</h4>
            <div className="flex flex-wrap gap-1.5">
              {certification.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-full bg-[#e9f7ef] text-[#032517] font-medium border border-[#c7ebd4]"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 bg-stone-50">
          <span className="text-xs text-[#424843] flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#835500]">lock</span>
            Sertifikat Sah & Tervalidasi
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-[#032517] text-white hover:bg-[#1b3b2b] transition-colors shadow-sm"
          >
            Tutup Pratinjau
          </button>
        </div>
      </div>
    </div>
  );
};
