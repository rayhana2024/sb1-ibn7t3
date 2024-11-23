export type MakeupCategory = 'skin' | 'eyes' | 'lips';
export type Duration = '5min' | '10min' | '15min+';
export type Difficulty = 'easy' | 'medium' | 'pro';

export interface MakeupTip {
  id: string;
  category: MakeupCategory;
  title: string;
  description: string;
  duration: Duration;
  difficulty: Difficulty;
  steps: string[];
  products?: string[];
  image?: string;
}