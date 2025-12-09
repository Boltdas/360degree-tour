export type Page = 'home' | 'services' | 'about' | 'contact';

export interface NavItem {
  label: string;
  id: Page;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}