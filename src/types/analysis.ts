export type AnalysisCategory = 'hair' | 'wellness' | 'skin' | 'body' | 'nutrition';

export interface Question {
  id: string;
  text: string;
  category: AnalysisCategory;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export interface AnalysisResult {
  category: AnalysisCategory;
  recommendations: string[];
  routines: string[];
}