export type CareCategory = 'all' | 'face' | 'body' | 'hair' | 'massage' | 'aromatherapy';
export type HairType = 'dry' | 'oily' | 'curly' | 'normal';
export type SkinType = 'dry' | 'oily' | 'combination' | 'sensitive';
export type Frequency = 'daily' | 'weekly' | 'biweekly' | 'monthly';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface NaturalRecipe {
  id: string;
  title: string;
  description: string;
  category: CareCategory;
  imageUrl: string;
  duration: string;
  difficulty: Difficulty;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
  warnings?: string[];
  tags: string[];
}

export interface MassageTechnique {
  id: string;
  title: string;
  description: string;
  duration: string;
  steps: string[];
  benefits: string[];
  warnings?: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface NaturalCareSection {
  id: string;
  category: CareCategory;
  title: string;
  description: string;
  recipes: NaturalRecipe[];
  techniques?: MassageTechnique[];
}