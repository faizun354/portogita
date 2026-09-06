import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-24" id="experience-and-education">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[11px] font-bold text-[#835500] uppercase tracking-widest block mb-2">
          — PENDIDIKAN &amp; PENGALAMAN
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#032517] tracking-tight">
          Perjalanan Akademik &amp; Profesional Saya
        </h2>
        <p className="text-sm sm:text-base text-[#424843] mt-3">
          Memadukan keunggulan akademik keperawatan klinis dengan pengalaman praktik langsung administrasi rumah sakit yang teruji.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Column 1: Education */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5 pb-2">
            <span className="w-8 h-8 rounded-full bg-[#e3f1e9] flex items-center justify-center text-[#032517]">
              <span className="material-symbols-outlined text-[18px]">school</span>
            </span>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-[#032517]">
              Kualifikasi Akademik
            </h3>
          </div>

          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow relative overflow-hidden border border-[#e9f7ef]"
            >
              <div className={`absolute top-0 right-0 font-bold text-[11px] px-3.5 py-1.5 rounded-bl-xl uppercase tracking-wider ${
                edu.badgeType === 'gpa'
                  ? 'bg-[#032517] text-white'
                  : 'bg-[#deebe3] text-[#424843]'
              }`}>
                {edu.period}
              </div>

              <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                edu.badgeType === 'gpa'
                  ? 'bg-[#ffddb4] text-[#291800]'
                  : 'bg-[#e3f1e9] text-[#032517]'
              }`}>
                {edu.badge}
              </span>

              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg sm:text-xl font-bold text-[#032517] leading-snug">
                {edu.degree}
              </h4>
              <p className="text-sm font-medium text-[#835500] mt-1 mb-3">{edu.institution}</p>
              <p className="text-sm text-[#424843] leading-relaxed">
                {edu.description}
              </p>

              {edu.tags && (
                <div className="mt-5 pt-3 border-t border-stone-100 flex flex-wrap gap-2">
                  {edu.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#deebe3] text-[#424843] text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Column 2: Clinical & Practice Experience */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5 pb-2">
            <span className="w-8 h-8 rounded-full bg-[#e3f1e9] flex items-center justify-center text-[#032517]">
              <span className="material-symbols-outlined text-[18px]">work</span>
            </span>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xl font-bold text-[#032517]">
              Praktik Klinis &amp; Administrasi
            </h3>
          </div>

          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow relative overflow-hidden border border-[#e9f7ef]"
            >
              <div className={`absolute top-0 right-0 font-bold text-[11px] px-3.5 py-1.5 rounded-bl-xl uppercase tracking-wider ${
                exp.badgeType === 'rotation'
                  ? 'bg-[#835500] text-white'
                  : 'bg-[#deebe3] text-[#424843]'
              }`}>
                {exp.categoryLabel}
              </div>

              <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${
                exp.badgeType === 'rotation'
                  ? 'bg-[#c7ebd4] text-[#002113]'
                  : 'bg-[#e3f1e9] text-[#032517]'
              }`}>
                {exp.badgeText}
              </span>

              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg sm:text-xl font-bold text-[#032517] leading-snug">
                {exp.title}
              </h4>
              <p className="text-sm font-medium text-[#835500] mt-1 mb-3">{exp.institution}</p>
              <p className="text-sm text-[#424843] leading-relaxed">
                {exp.description}
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#121e19]">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#835500] text-[18px] shrink-0">
                      check_circle
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
