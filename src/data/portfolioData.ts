import { ServiceItem, EducationItem, ExperienceItem, CertificationItem } from '../types';

export const PROFILE_DATA = {
  name: "Gita Prasasti",
  title: "Lulusan Keperawatan & Spesialis Administrasi Kesehatan",
  institution: "Universitas IIKNU",
  degree: "Sarjana Keperawatan (S.Kep)",
  gpa: "3.85 / 4.00",
  graduationYear: "2026",
  email: "gitaprasasti266@gmail.com",
  phone: "+62 822-4573-2362",
  phoneRaw: "6282245732362",
  location: "Gedongombo, Tuban, Jawa Timur, Indonesia",
  // ✏️ GANTI NAMA FILE: letakkan foto profil di folder public/assets/ lalu ubah nama file di bawah ini
  photoUrl: "/assets/pas.png",
  stats: [
    { value: "3.85", label: "IPK AKADEMIK" },
    { value: "12+", label: "SERTIFIKASI PROFESI" },
    { value: "100%", label: "ETIKA & DEDIKASI" },
  ],
  aboutMetrics: [
    { value: "4 Tahun", label: "Perjalanan Akademik & Klinis" },
    { value: "100%", label: "Dedikasi & Integritas" },
    { value: "12+", label: "Kredensial Terverifikasi" },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "clinical-care",
    iconName: "clinical_notes",
    title: "Praktik Keperawatan Klinis",
    description: "Asuhan keperawatan komprehensif, pemantauan tanda-tanda vital berkelanjutan, pengelolaan medikasi akurat, serta kolaborasi tim medis multidisiplin.",
    actionText: "Rawat Inap & Rawat Jalan →",
    details: {
      overview: "Pelaksanaan asuhan keperawatan berbasis standar profesi dengan mengutamakan keselamatan dan kenyamanan pasien pada unit perawatan akut dan rawat inap.",
      competencies: [
        "Pemeriksaan tanda-tanda vital (TTV) dan interpretasi hemodinamik dasar",
        "Pemasangan kateter intravena dan pemantauan cairan infus",
        "Pelaksanaan teknik aseptik dan sterilisasi tindakan klinis",
        "Edukasi perawatan mandiri pasien pasca-tindakan"
      ],
      toolsAndProtocols: ["Standar Prosedur Operasional (SPO) RS", "Format Pengkajian Keperawatan Medikal Bedah", "Tensimeter Digital & Manual", "Infusion Pump & Syringe Pump"]
    }
  },
  {
    id: "medical-records",
    iconName: "dataset",
    title: "Administrasi Rekam Medis",
    description: "Pencatatan, penginputan, verifikasi, serta pengarsipan data riwayat rekam medis dan administrasi klaim asuransi kesehatan yang cepat dan akurat.",
    actionText: "Verifikasi & Audit RME →",
    details: {
      overview: "Manajemen siklus hidup rekam medis pasien baik konvensional maupun sistem Rekam Medis Elektronik (RME) yang selaras dengan regulasi SatuSehat Kemenkes RI.",
      competencies: [
        "Pencatatan rekam medis terstruktur dengan prinsip SOAPIE",
        "Pengarsipan digital dan pemeliharaan indeks diagnosis ICD-10",
        "Verifikasi kelengkapan berkas untuk proses klaim asuransi/BPJS Kesehatan",
        "Pencegahan duplikasi identitas pasien (Master Patient Index)"
      ],
      toolsAndProtocols: ["SIMRS (Sistem Informasi Manajemen Rumah Sakit)", "Platform SatuSehat Kemenkes", "ICD-10 & ICD-9-CM Coding System", "Electronic Health Records (EHR)"]
    }
  },
  {
    id: "patient-service",
    iconName: "volunteer_activism",
    title: "Keunggulan Layanan Kesehatan",
    description: "Standar komunikasi terapeutik tinggi, empati pelayanan pasien, konsultasi informasi, triase ramah, dan etika tata kelola administrasi publik.",
    actionText: "Pelayanan Berorientasi Pasien →",
    details: {
      overview: "Pemberian pelayanan garis depan institusi kesehatan yang humanis, responsif, dan menjunjung tinggi kode etik serta hak-hak privasi pasien.",
      competencies: [
        "Penerapan komunikasi terapeutik pada situasi kecemasan pasien dan keluarga",
        "Manajemen antrean registrasi dan customer care pelayanan kesehatan",
        "Penyampaian informasi alur rujukan dan persyaratan administrasi dengan jelas",
        "Penanganan komplain secara tenang dan solutif (Service Recovery)"
      ],
      toolsAndProtocols: ["Standar Hospitality Pelayanan Kesehatan", "Survei Kepuasan Pasien", "Protokol Komunikasi Terapeutik Perawat", "Alur Triase Front-Desk"]
    }
  },
  {
    id: "health-analytics",
    iconName: "monitoring",
    title: "Analitik Data & Perkantoran Digital",
    description: "Penyusunan laporan operasional harian, pengelolaan basis data rekam medis, visualisasi statistik pasien, dan administrasi digital berbasis Microsoft Office.",
    actionText: "Excel, Word & Presentasi →",
    details: {
      overview: "Pengolahan data kesehatan untuk menghasilkan laporan berkala yang akurat guna mendukung pengambilan keputusan manajerial fasilitas kesehatan.",
      competencies: [
        "Pengolahan sensus harian pasien dan indikator rawat inap (BOR, LOS, TOI)",
        "Penyusunan laporan administrasi rumah sakit dengan Microsoft Word & Excel",
        "Pembuatan grafik tren kunjungan dan demografi penyakit berbasis Pivot Table",
        "Manajemen persuratan dinas medis dan permohonan rujukan antar-faskes"
      ],
      toolsAndProtocols: ["Microsoft Excel (Pivot, VLOOKUP/XLOOKUP, Charting)", "Microsoft Word (Formulir Medis Terstandar)", "Google Workspace & Cloud Storage", "Dasbor Statistik Sensus Harian"]
    }
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-s1",
    period: "2022 — 2026",
    degree: "Sarjana Keperawatan (S1 Keperawatan, S.Kep)",
    institution: "Universitas IIKNU",
    badge: "IPK: 3.85 / 4.00",
    badgeType: "gpa",
    description: "Menyelesaikan kurikulum intensif 4 tahun dengan fokus pada asuhan keperawatan medikal-bedah, keperawatan anak, kesehatan komunitas, serta protokol tata kelola rekam medis rumah sakit.",
    tags: ["Farmakologi Klinis", "Manajemen RS", "Keselamatan Pasien"]
  },
  {
    id: "edu-sma",
    period: "2019 — 2022",
    degree: "Ilmu Pengetahuan Alam (MIPA)",
    institution: "SMA Negeri 3 Tuban",
    badge: "MIPA",
    badgeType: "general",
    description: "Lulus dengan predikat memuaskan dalam pemahaman sains biologi dan kimia dasar, aktif dalam organisasi Palang Merah Remaja (PMR) dan forum ilmiah pelajar."
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-clinical",
    badgeText: "ROTASI RUMAH SAKIT",
    badgeType: "rotation",
    categoryLabel: "PRAKTIK KLINIS",
    title: "Praktik Keperawatan Klinis & Manajemen Bangsal",
    institution: "Jaringan Layanan Kesehatan Regional, Tuban",
    description: "Melakukan pemantauan tanda-tanda vital teratur, asistensi terapi intravena, pengkajian awal pasien rawat inap, serta pemeliharaan berkas rekam medis harian di unit rawat inap dan IGD.",
    achievements: [
      "Mendokumentasikan 450+ lembar asuhan klinis pasien dengan kepatuhan prosedur 100%",
      "Bekerja sama erat dengan perawat penanggung jawab dan dokter spesialis"
    ]
  },
  {
    id: "exp-admin",
    badgeText: "PUSAT DATA KESEHATAN",
    badgeType: "admin",
    categoryLabel: "FOKUS ADMINISTRASI",
    title: "Manajemen Data Kesehatan & Administrasi Front-Desk",
    institution: "Pusat Pelayanan Kesehatan Akademik",
    description: "Mengelola sistem rekam medis elektronik (RME), antrean registrasi pasien, verifikasi berkas jaminan BPJS/asuransi, serta penyusunan rekapitulasi sensus harian pasien.",
    achievements: [
      "Menstandarisasi sistem pengarsipan berkas pasien, memangkas waktu tunggu layanan hingga 35%"
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Bantuan Hidup Dasar (BHD / BLS) & RJP",
    category: "KEGAWATDARURATAN",
    year: "2026",
    description: "Resusitasi darurat standar untuk penanganan kasus henti jantung dewasa & pediatrik.",
    issuer: "PPNI & Standar AHA",
    iconName: "cardiology",
    badgeClass: "amber",
    credentialId: "BLS-AHA-2026-9812",
    skills: ["Resusitasi Jantung Paru", "Defibrilasi AED", "Manajemen Jalan Napas", "Penanganan Tersedak"],
    imageUrl: "/assets/sertifikat-1.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-2",
    title: "Administrasi Rekam Medis Elektronik (RME)",
    category: "ADMINISTRASI",
    year: "2025",
    description: "Profilisasi pasien digital, regulasi privasi data, dan tata kelola rekam medis berbasis cloud.",
    issuer: "Kemenkes RI / Asosiasi Terakreditasi",
    iconName: "folder_managed",
    badgeClass: "green",
    credentialId: "RME-KMK-2025-4421",
    skills: ["Standar SatuSehat", "Master Patient Index", "Validasi Entri Data", "Privasi Medis UU PDP"],
    imageUrl: "/assets/sertifikat-2.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-3",
    title: "Pencegahan & Pengendalian Infeksi (PPI)",
    category: "KESELAMATAN PASIEN",
    year: "2025",
    description: "Pencegahan infeksi nosokomial, siklus sterilisasi instrumen, dan kepatuhan standar kebersihan WHO.",
    issuer: "Komite K3 & Mutu RS IIKNU",
    iconName: "sanitizer",
    badgeClass: "gray",
    credentialId: "PPI-K3M-2025-1033",
    skills: ["Kebersihan Tangan 5 Momen", "Penggunaan APD Standar", "Sterilisasi Autoklaf", "Isolasi Droplet & Airborne"],
    imageUrl: "/assets/sertifikat-3.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-4",
    title: "Komunikasi Terapeutik & Pelayanan Prima",
    category: "PELAYANAN PRIMA",
    year: "2025",
    description: "Teknik wawancara pasien empatik, resolusi penanganan keluhan, serta pendampingan keluarga pasien.",
    issuer: "Lembaga Sertifikasi Profesi (BNSP)",
    iconName: "handshake",
    badgeClass: "amber",
    credentialId: "BNSP-KTP-2025-7734",
    skills: ["Wawancara Motivasi", "De-eskalasi Emosi", "Konseling Pasien", "Customer Hospitality RS"],
    imageUrl: "/assets/sertifikat-4.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-5",
    title: "Dokumentasi Asuhan Keperawatan Berbasis SOAPIE",
    category: "KLINIS",
    year: "2024",
    description: "Penyusunan berkas klinis metode SOAPIE, mitigasi risiko hukum medis, dan akurasi diagnosis keperawatan.",
    issuer: "DPD PPNI Regional",
    iconName: "assignment_turned_in",
    badgeClass: "green",
    credentialId: "PPNI-SOAP-2024-5519",
    skills: ["Format SOAPIE Lengkap", "SDKI, SLKI, SIKI", "Audit Rekam Klinis", "Validasi Legalitas Tanda Tangan"],
    imageUrl: "/assets/sertifikat-5.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-6",
    title: "Pengolahan Data Kesehatan dengan Microsoft Excel",
    category: "ANALITIK",
    year: "2024",
    description: "Kalkulasi persentase BOR tempat tidur rawat inap, ringkasan sensus pasien harian, dan dasbor pivot.",
    issuer: "Sertifikasi Literasi Digital",
    iconName: "table_chart",
    badgeClass: "gray",
    credentialId: "SLD-XLS-2024-8190",
    skills: ["Rumus BOR, ALOS, TOI, BTO", "Pivot Table & Slicers", "Visualisasi Grafik Pasien", "Automasi Template Sensus"],
    imageUrl: "/assets/sertifikat-6.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-7",
    title: "Triase Pasien & Tanggap Darurat Bencana",
    category: "TRIASE",
    year: "2024",
    description: "Penerapan metode triase START, protap korban massal bencana, dan klasifikasi urgensi IGD.",
    issuer: "Kemenkes RI / IGD Training",
    iconName: "emergency",
    badgeClass: "amber",
    credentialId: "TRG-IGD-2024-3401",
    skills: ["Metode Triase START / ESI", "Kategori Merah/Kuning/Hijau/Hitam", "Manajemen Korban Bencana", "Alur Evakuasi Cepat"],
    imageUrl: "/assets/sertifikat-7.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-8",
    title: "Terminologi Medis & Sistem Tarif Klaim",
    category: "KLAIM & KEUANGAN",
    year: "2023",
    description: "Struktur penomoran kode ICD-10, validasi berkas klaim BPJS Kesehatan, dan penyesuaian tarif layanan.",
    issuer: "Institut Kesehatan IIKNU",
    iconName: "receipt_long",
    badgeClass: "green",
    credentialId: "IKN-KLAIM-2023-6204",
    skills: ["Kode Diagnosis ICD-10", "Kode Prosedur ICD-9-CM", "Verifikasi INA-CBGs", "Audit Berkas Penjaminan BPJS"],
    imageUrl: "/assets/sertifikat-8.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-9",
    title: "Perawatan Luka Modern & Teknik Aseptik",
    category: "PERAWATAN LUKA",
    year: "2023",
    description: "Metode balutan luka modern, penanganan ulkus kaki diabetik, dan pemeliharaan area steril tindakan.",
    issuer: "Terakreditasi InWCCA",
    iconName: "healing",
    badgeClass: "gray",
    credentialId: "WCCA-CWCCA-2023-9021",
    skills: ["Moist Wound Healing", "Pemilihan Dressing Hidrokoloid/Alginat", "Debridemen Autolitik", "Teknik Ganti Balut Aseptik"],
    imageUrl: "/assets/sertifikat-9.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-10",
    title: "Skrining Kesehatan Masyarakat & Telehealth",
    category: "KESEHATAN MASYARAKAT",
    year: "2023",
    description: "Pemantauan penyakit tidak menular di komunitas, triase pendaftaran daring, dan dukungan kegiatan Posyandu.",
    issuer: "Jaringan Puskesmas Wilayah",
    iconName: "cell_tower",
    badgeClass: "amber",
    credentialId: "PKM-TEL-2023-1188",
    skills: ["Skrining Hipertensi & Diabetes", "Aplikasi Mobile SehatQ/PeduliLindungi", "Edukasi Gizi Masyarakat", "Pelaporan SIP Puskesmas"],
    imageUrl: "/assets/sertifikat-10.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-11",
    title: "Keamanan Pemberian Obat & Farmakologi",
    category: "FARMAKOLOGI",
    year: "2022",
    description: "Prinsip 7 Benar pemberian obat, perhitungan dosis pediatrik yang cermat, dan penanganan obat berisiko tinggi.",
    issuer: "Departemen Klinis IIKNU",
    iconName: "medication",
    badgeClass: "green",
    credentialId: "FAR-KLI-2022-7712",
    skills: ["Prinsip 7 Benar Medikasi", "Perhitungan Pengenceran & Tetesan", "High-Alert Medications", "Pencegahan Medication Error"],
    imageUrl: "/assets/sertifikat-11.jpg", // ✏️ ganti dengan nama file fotomu
  },
  {
    id: "cert-12",
    title: "Keselamatan & Kesehatan Kerja Rumah Sakit (K3RS)",
    category: "K3RS",
    year: "2022",
    description: "Pencegahan cedera jarum suntik, ergonomi pemindahan posisi pasien, dan prosedur tumpahan limbah biologis.",
    issuer: "Sertifikasi K3 Nasional (BNSP)",
    iconName: "health_and_safety",
    badgeClass: "gray",
    credentialId: "BNSP-K3RS-2022-4490",
    skills: ["Prosedur Needle Stick Injury", "Ergonomi Angkat-Angkut Pasien", "Spill Kit Tumpahan Bahan Berbahaya", "Evakuasi Bencana Rumah Sakit"],
    imageUrl: "/assets/sertifikat-12.jpg", // ✏️ ganti dengan nama file fotomu
  }
];
