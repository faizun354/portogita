import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    "PRAKTIK KEPERAWATAN KLINIS",
    "ADMINISTRASI DATA MEDIS",
    "MANAJEMEN REKAM MEDIS PASIEN",
    "KEUNGGULAN PELAYANAN KESEHATAN",
  ];

  return (
    <div className="w-full bg-[#feae2c] py-3.5 overflow-hidden shadow-inner flex items-center select-none border-y border-[#e59b20]">
      <div className="animate-marquee flex items-center whitespace-nowrap text-[#6b4500] text-sm font-bold uppercase tracking-widest gap-10">
        {/* Sequence 1 */}
        {items.map((text, idx) => (
          <span key={`a-${idx}`} className="flex items-center gap-3">
            <span className="text-[#6b4500] text-xs">✦</span>
            <span>{text}</span>
          </span>
        ))}
        {/* Sequence 2 */}
        {items.map((text, idx) => (
          <span key={`b-${idx}`} className="flex items-center gap-3">
            <span className="text-[#6b4500] text-xs">✦</span>
            <span>{text}</span>
          </span>
        ))}
        {/* Sequence 3 (for ultra-wide screens) */}
        {items.map((text, idx) => (
          <span key={`c-${idx}`} className="flex items-center gap-3">
            <span className="text-[#6b4500] text-xs">✦</span>
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
