export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  actionText: string;
  details: {
    overview: string;
    competencies: string[];
    toolsAndProtocols: string[];
  };
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  badge: string;
  badgeType: 'gpa' | 'general';
  description: string;
  tags?: string[];
}

export interface ExperienceItem {
  id: string;
  badgeText: string;
  badgeType: 'rotation' | 'admin';
  categoryLabel: string;
  title: string;
  institution: string;
  description: string;
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  issuer: string;
  iconName: string;
  badgeClass: 'amber' | 'green' | 'gray';
  credentialId: string;
  skills: string[];
  imageUrl?: string; // opsional: nama file foto sertifikat di folder /public/assets/ (contoh: "sertifikat-bls.jpg")
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
