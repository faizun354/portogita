import { ServiceItem, EducationItem, ExperienceItem, CertificationItem } from '../types';

export const PROFILE_DATA = {
  name: "Gita Prasasti",
  title: "Lulusan Keperawatan & Spesialis Administrasi Kesehatan",
  institution: "Universitas IIKNU",
  degree: "Sarjana Keperawatan (S.Kep)",
  gpa: "3.88 / 4.00",
  graduationYear: "2026",
  email: "gitaprasasti266@gmail.com",
  phone: "+62 822-4573-2362",
  phoneRaw: "6282245732362",
  location: "Gedongombo, Tuban, Jawa Timur, Indonesia",
  // ✏️ GANTI NAMA FILE: letakkan foto profil di folder public/assets/ lalu ubah nama file di bawah ini
  photoUrl: "/assets/pas.png",
  stats: [
    { value: "3.88", label: "IPK AKADEMIK" },
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
    title: "Penanggulangan Tuberkulosis (TBC) bagi Perawat",
    category: "KLINIS",
    year: "2025",
    description: "Tata laksana klinis, skrining terstandar, dan asuhan keperawatan kasus Tuberkulosis di fasyankes swasta.",
    issuer: "Kemenkes RI - Ditjen P2P",
    iconName: "coronavirus",
    badgeClass: "green",
    credentialId: "PL.02.03/F.V/14608/2025",
    skills: ["Tata Laksana TB DOTS", "Skrining Pasien TBC", "Pencegahan Penularan Airborne", "Edukasi Kepatuhan OAT"],
    imageUrl: "/assets/tbc.jpeg",
  },
  {
    id: "cert-2",
    title: "Simulasi Penanggulangan Bencana di Rumah Sakit",
    category: "TANGGAP DARURAT",
    year: "2025",
    description: "Strategi komando bencana, manajemen evakuasi pasien massal, dan kesiapsiagaan krisis internal rumah sakit.",
    issuer: "Pusdiklat RS Bhina Bhakti Husada & Kemenkes RI",
    iconName: "emergency",
    badgeClass: "amber",
    credentialId: "KT.03.02/F.V/816985/2025",
    skills: ["Hospital Disaster Plan (HDP)", "Triase Korban Bencana", "Jalur Evakuasi Kritis", "Mitigasi Insiden Massal"],
    imageUrl: "/assets/simulasi.jpeg",
  },
  {
    id: "cert-3",
    title: "Webinar Gizi Nasional: Makanan Bergizi PMT Balita",
    category: "GIZI & KIA",
    year: "2025",
    description: "Edukasi intervensi pangan bergizi seimbang dan tata kelola program Pemberian Makanan Tambahan (PMT) balita.",
    issuer: "Kemenkes RI - Ditjen Gizi dan KIA",
    iconName: "nutrition",
    badgeClass: "gray",
    credentialId: "KT.03.02/F.V/549198/2025",
    skills: ["Pencegahan Stunting", "Kebutuhan Nutrisi Tumbuh Kembang", "Manajemen PMT Berbasis Pangan Lokal", "Konseling Gizi Keluarga"],
    imageUrl: "/assets/pmt.jpeg",
  },
  {
    id: "cert-4",
    title: "Dampak Konsumsi Rokok Elektronik Bagi Kesehatan",
    category: "PROMOSI KESEHATAN",
    year: "2025",
    description: "Kajian klinis risiko paparan aerosol rokok elektrik terhadap sistem respirasi serta strategi edukasi promotif.",
    issuer: "Kemenkes RI - Ditjen P2PTM",
    iconName: "smoke_free",
    badgeClass: "green",
    credentialId: "KT.03.02/F.V/420357/2025",
    skills: ["Penyuluhan Bahaya Nikotin", "Patofisiologi Respirasi", "Promosi Berhenti Merokok", "Pencegahan Penyakit Tidak Menular"],
    imageUrl: "/assets/rokok.jpeg",
  },
  {
    id: "cert-5",
    title: "Hari Pendengaran Sedunia: Ear & Hearing Care",
    category: "PROMOSI KESEHATAN",
    year: "2025",
    description: "Kampanye promotif preventif kesehatan indra pendengaran, deteksi dini penurunan fungsi dengar, dan perawatan telinga.",
    issuer: "Kemenkes RI - Ditjen P2PTM",
    iconName: "hearing",
    badgeClass: "amber",
    credentialId: "KP.03.05/A.XII/68059/2025",
    skills: ["Edukasi Kebersihan Telinga", "Skrining Gangguan Dengar", "Pencegahan Polusi Suara", "Komunikasi Ramah Tunarungu"],
    imageUrl: "/assets/sedunia.jpeg",
  },
  {
    id: "cert-6",
    title: "Seminar Nasional: Tantangan Gagal Jantung",
    category: "KEGAWATDARURATAN",
    year: "2024",
    description: "Deteksi dini abnormalitas hemodinamik, farmakoterapi primer, dan tatalaksana komprehensif sindrom gagal jantung.",
    issuer: "SMART EMERGENCY & Kemenkes RI",
    iconName: "cardiology",
    badgeClass: "green",
    credentialId: "KT.03.02/F.V/75752/2024",
    skills: ["Pemantauan Hemodinamik", "Interpretasi Klinis Jantung", "Manajemen Retensi Cairan", "Asuhan Keperawatan Kardiak"],
    imageUrl: "/assets/jantung.jpeg",
  },
  {
    id: "cert-7",
    title: "Pengurus Himpunan Mahasiswa Keperawatan (HIMKANU)",
    category: "KEPEMIMPINAN",
    year: "2023",
    description: "Pengelolaan program kerja divisi, koordinasi organisasi mahasiswa, administrasi persuratan, dan kepemimpinan tim.",
    issuer: "IIK NU Tuban",
    iconName: "groups",
    badgeClass: "gray",
    credentialId: "HIMKANU-SK-2023-0109",
    skills: ["Koordinasi Antar-Lembaga", "Penyusunan LPJ & Notulensi", "Manajemen Acara Kampus", "Kepemimpinan Tim"],
    imageUrl: "/assets/himkanu.jpeg",
  },
  {
    id: "cert-8",
    title: "Penyuluhan Pengendalian Stres & Depresi Remaja",
    category: "KESEHATAN JIWA",
    year: "2023",
    description: "Kepanitiaan Hari Kesehatan Jiwa Sedunia dalam edukasi kesehatan mental dan manajemen stres di kalangan pelajar.",
    issuer: "HIMKANU IIK NU Tuban",
    iconName: "psychology",
    badgeClass: "amber",
    credentialId: "HKJS-HIMKANU-2023-1510",
    skills: ["Penyuluhan Kesehatan Mental", "Identifikasi Tanda Depresi Remaja", "Konseling Teman Sebaya", "Public Speaking Edukatif"],
    imageUrl: "/assets/stress.jpeg",
  },
  {
    id: "cert-9",
    title: "Kepanitiaan PKKMB NURS 2023",
    category: "PENGEMBANGAN DIRI",
    year: "2023",
    description: "Fasilitasi orientasi program studi keperawatan, pembinaan etika profesi, serta kedisiplinan mahasiswa baru.",
    issuer: "HIMKANU IIK NU Tuban",
    iconName: "school",
    badgeClass: "green",
    credentialId: "PKKMB-NURS-2023-1011",
    skills: ["Manajemen Tata Tertib", "Orientasi Disiplin Profesi", "Komunikasi Publik Interaktif", "Fasilitasi Kelompok Mahasiswa"],
    imageUrl: "/assets/pkkmb.jpeg",
  },
  {
    id: "cert-10",
    title: "Seminar & Workshop Nursepreneur",
    category: "KEWIRAUSAHAAN",
    year: "2022",
    description: "Eksplorasi integrasi kompetensi keperawatan ke dalam peluang bisnis layanan kesehatan mandiri berstandar profesi.",
    issuer: "IIK NU Tuban & DPD PPNI",
    iconName: "storefront",
    badgeClass: "gray",
    credentialId: "0146/DPW.PPNI/SK/K.S/VII/2022",
    skills: ["Konsep Layanan Home Care", "Peluang Usaha Kesehatan", "Etika Bisnis Keperawatan", "Perencanaan Finansial Layanan"],
    imageUrl: "/assets/entreu.jpeg",
  },
  {
    id: "cert-11",
    title: "Safety Officer & K3 Awareness",
    category: "K3 & KESELAMATAN",
    year: "2026",
    description: "Kompetensi inspeksi K3, penilaian risiko bahaya (HIRADC), investigasi insiden, serta kepatuhan implementasi SMK3.",
    issuer: "PT Micasa Edukasi Indonesia",
    iconName: "health_and_safety",
    badgeClass: "green",
    credentialId: "547/MCS/IX/2026",
    skills: ["Identifikasi Risiko HIRADC", "Inspeksi K3 & Audit", "Investigasi Kecelakaan Kerja", "Pengelolaan APD & SMK3"],
    imageUrl: "/assets/k3.jpg",
  },
  {
    id: "cert-12",
    title: "Kepanitiaan Beauty Talkshow with HIMKANU",
    category: "PROMOSI KESEHATAN",
    year: "2024",
    description: "Pelaksanaan seminar edukasi kesehatan kulit, tata kelola kepanitiaan event, serta fasilitasi komunikasi publik.",
    issuer: "HIMKANU IIK NU Tuban",
    iconName: "spa",
    badgeClass: "amber",
    credentialId: "HIMKANU-BT-2024-0503",
    skills: ["Edukasi Kesehatan Kulit", "Manajemen Kepanitiaan Event", "Komunikasi Publik", "Koordinasi Lintas Tim"],
    imageUrl: "/assets/beauty.jpeg",
  },
];