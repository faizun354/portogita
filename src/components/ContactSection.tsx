import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject || 'admin',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'admin',
        message: '',
      });
    }, 600);
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-16 md:py-24" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Contact Info Left */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="text-[11px] font-bold text-[#835500] uppercase tracking-widest block mb-1">
            — HUBUNGI SAYA
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl font-bold text-[#032517] tracking-tight mb-4">
            Mari Terhubung &amp; Berkolaborasi
          </h2>
          <p className="text-base sm:text-lg text-[#424843] mb-8 leading-relaxed">
            Terbuka untuk peluang karier penuh waktu di bidang administrasi rumah sakit, asuhan keperawatan klinis, pengelolaan rekam medis, dan peningkatan mutu layanan kesehatan.
          </p>

          {/* Direct Contact Pills */}
          <div className="flex flex-col gap-4 w-full">
            {/* Email Pill */}
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-xs hover:shadow-md transition-all group border border-[#e9f7ef] hover:border-[#c7ebd4]"
            >
              <div className="w-12 h-12 rounded-full bg-[#e3f1e9] flex items-center justify-center text-[#032517] group-hover:bg-[#032517] group-hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-semibold text-[#424843] uppercase tracking-wider block">
                  Alamat Email
                </span>
                <span className="text-sm sm:text-base text-[#032517] font-bold truncate block">
                  {PROFILE_DATA.email}
                </span>
              </div>
            </a>

            {/* Phone / WhatsApp Pill */}
            <a
              href={`https://wa.me/${PROFILE_DATA.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-xs hover:shadow-md transition-all group border border-[#e9f7ef] hover:border-[#c7ebd4]"
            >
              <div className="w-12 h-12 rounded-full bg-[#e3f1e9] flex items-center justify-center text-[#032517] group-hover:bg-[#032517] group-hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined text-[22px]">call</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#424843] uppercase tracking-wider block">
                  Telepon / WhatsApp
                </span>
                <span className="text-sm sm:text-base text-[#032517] font-bold">
                  {PROFILE_DATA.phone}
                </span>
              </div>
            </a>

            {/* Location Pill */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-xs border border-[#e9f7ef]">
              <div className="w-12 h-12 rounded-full bg-[#e3f1e9] flex items-center justify-center text-[#032517] shrink-0">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#424843] uppercase tracking-wider block">
                  Lokasi Domisili
                </span>
                <span className="text-sm sm:text-base text-[#032517] font-bold">
                  {PROFILE_DATA.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Contact Form Right */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgba(27,59,43,0.04)] border border-[#e9f7ef] w-full">
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold text-[#032517] mb-2">
            Kirim Pesan
          </h3>
          <p className="text-sm text-[#424843] mb-8 leading-relaxed">
            Tertarik mendiskusikan peluang kerja, administrasi rumah sakit, atau kebutuhan konsultasi? Silakan tinggalkan pesan Anda:
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#121e19] block mb-1.5" htmlFor="name">
                  Nama Lengkap Anda
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="dr. Hendra Wijaya / Rekruter"
                  className="w-full bg-[#e9f7ef] px-4 py-3 rounded-xl text-sm text-[#121e19] placeholder:text-[#727973] focus:outline-none focus:ring-2 focus:ring-[#835500] transition-colors border border-transparent focus:bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#121e19] block mb-1.5" htmlFor="email">
                  Email Institusi / Pribadi
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@rumah-sakit.org"
                  className="w-full bg-[#e9f7ef] px-4 py-3 rounded-xl text-sm text-[#121e19] placeholder:text-[#727973] focus:outline-none focus:ring-2 focus:ring-[#835500] transition-colors border border-transparent focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#121e19] block mb-1.5" htmlFor="subject">
                Keperluan / Jenis Minat
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-[#e9f7ef] px-4 py-3 rounded-xl text-sm text-[#121e19] focus:outline-none focus:ring-2 focus:ring-[#835500] transition-colors border border-transparent focus:bg-white"
              >
                <option value="admin">Perekrutan Tenaga Administrasi RS</option>
                <option value="clinical">Posisi Keperawatan Klinis</option>
                <option value="emr">Verifikasi Berkas Rekam Medis</option>
                <option value="other">Kerja Sama &amp; Konsultasi Lainnya</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#121e19] block mb-1.5" htmlFor="message">
                Pesan Anda
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tuliskan deskripsi peluang institusi atau kebutuhan proyek Anda..."
                className="w-full bg-[#e9f7ef] px-4 py-3 rounded-xl text-sm text-[#121e19] placeholder:text-[#727973] focus:outline-none focus:ring-2 focus:ring-[#835500] transition-colors resize-none border border-transparent focus:bg-white"
              ></textarea>
            </div>

            {/* Success Feedback Banner */}
            {isSubmitted && (
              <div className="p-4 rounded-xl bg-[#c7ebd4] text-[#002113] text-sm flex items-start gap-2.5 animate-in fade-in duration-200 border border-[#abcfb8]">
                <span className="material-symbols-outlined text-[20px] text-[#002113] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Terima kasih! Pesan Anda telah berhasil dikirim. Gita akan segera menghubungi Anda kembali.
                </span>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 bg-[#032517] text-white hover:bg-[#1b3b2b] text-sm font-bold pl-7 pr-1.5 py-1.5 rounded-full shadow-md transition-all group disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan Sekarang'}</span>
                <span className="w-9 h-9 rounded-full bg-[#feae2c] text-[#6b4500] flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </span>
              </button>

              <span className="text-xs text-[#424843] flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[16px] text-[#835500]">lock</span>
                Kerahasiaan data terjamin
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
