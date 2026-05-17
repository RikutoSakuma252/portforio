export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  cta: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface Stat {
  numericTarget: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
}
