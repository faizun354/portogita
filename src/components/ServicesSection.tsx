import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-24" id="services">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[11px] font-bold text-[#835500] uppercase tracking-widest block mb-1">
            — LAYANAN &amp; KEAHLIAN
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#032517] tracking-tight">
            Kompetensi Utama &amp; Layanan
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-semibold bg-[#e3f1e9] text-[#032517] hover:bg-[#deebe3] px-6 py-2.5 rounded-full self-start md:self-auto transition-colors border border-[#c7ebd4]"
        >
          <span>Konsultasi Layanan Kesehatan</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectService(service)}
            className="bg-white p-7 rounded-2xl shadow-[0_8px_30px_rgba(27,59,43,0.04)] hover:shadow-[0_12px_32px_rgba(27,59,43,0.08)] transition-all flex flex-col justify-between group cursor-pointer border border-[#e9f7ef] hover:border-[#c7ebd4]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService(service);
              }
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#e9f7ef] flex items-center justify-center text-[#032517] mb-6 group-hover:bg-[#032517] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[24px]">{service.iconName}</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-[#032517] mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-[#424843] leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-[#032517] text-xs font-bold group-hover:text-[#835500] transition-colors">
              <span>{service.actionText}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
