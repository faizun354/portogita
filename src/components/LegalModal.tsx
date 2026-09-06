import React from 'react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'medical' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: "Kebijakan Privasi Data & Informasi Pasien",
      body: "Portofolio profesional ini mematuhi standar kerahasiaan informasi medis serta Undang-Undang Perlindungan Data Pribadi (UU PDP). Seluruh data rekam medis, sensus klinis, dan riwayat pasien yang disajikan dalam portofolio ini telah dianonimkan (de-identified) sepenuhnya dan tidak mengandung informasi identitas pasien langsung."
    },
    terms: {
      title: "Ketentuan Layanan & Kode Etik Profesi",
      body: "Seluruh informasi kualifikasi, pengalaman praktik klinis, dan sertifikasi profesi keperawatan yang tercantum adalah sah dan dapat diverifikasi melalui lembaga sertifikasi resmi (PPNI, Kemenkes RI, BNSP). Penggunaan portofolio ini ditujukan khusus untuk keperluan rekrutmen profesional, kemitraan institusi kesehatan, dan kredensial rumah sakit."
    },
    medical: {
      title: "Kepatuhan Regulasi Medis & Standar Akreditasi RS",
      body: "Penerapan seluruh asuhan keperawatan dan administrasi rekam medis berpedoman pada Standar Akreditasi Rumah Sakit (STARKES), regulasi Rekam Medis Elektronik (Permenkes No. 24 Tahun 2022), serta prinsip keselamatan pasien dan sasaran keselamatan pasien (SKP) nasional."
    }
  };

  const item = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#e9f7ef] text-[#032517] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">policy</span>
            </span>
            <h3 className="text-base font-bold text-[#032517] leading-snug">{item.title}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="w-7 h-7 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 flex items-center justify-center"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
        <p className="text-sm text-[#424843] leading-relaxed mb-6">
          {item.body}
        </p>
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-[#032517] text-white hover:bg-[#1b3b2b]"
          >
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
