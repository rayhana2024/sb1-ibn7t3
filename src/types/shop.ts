export type ProductCategory = 'skincare' | 'haircare' | 'bodycare' | 'wellness' | 'accessories';
export type AffiliatePartner = 'amazon' | 'sephora' | 'nocibe' | 'other';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  rating: number;
  reviews: number;
  ingredients?: string[];
  benefits: string[];
  usage: string;
  inStock: boolean;
  isNatural: boolean;
  isBio: boolean;
  affiliate?: {
    partner: AffiliatePartner;
    link: string;
    commission?: string;
  };
  tags: string[];
}