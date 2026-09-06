import React from 'react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        <div className="p-6 bg-[#032517] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#feae2c] block mb-1">
            LAYANAN & SPESIALISASI
          </span>
          <h2 id="service-modal-title" className="text-xl font-bold">
            {service.title}
          </h2>
        </div>

        <div className="p-6 space-y-4 text-[#121e19]">
          <p className="text-sm text-[#424843] leading-relaxed">
            {service.details.overview}
          </p>

          <div>
            <h4 className="text-xs font-bold text-[#835500] uppercase tracking-wider mb-2">
              Keahlian Inti yang Diterapkan
            </h4>
            <ul className="space-y-1.5 text-xs text-[#121e19]">
              {service.details.competencies.map((comp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#835500] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#835500] uppercase tracking-wider mb-2">
              Alat, Sistem & Standar Operasional
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.details.toolsAndProtocols.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#e9f7ef] text-[#032517] font-medium border border-[#c7ebd4]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 bg-stone-50">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-stone-600 hover:text-stone-900"
          >
            Kembali
          </button>
          <button
            onClick={() => {
              onSelectService(service.title);
              onClose();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-[#032517] text-white hover:bg-[#1b3b2b] transition-colors shadow-sm"
          >
            <span>Konsultasikan Kebutuhan Ini</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
