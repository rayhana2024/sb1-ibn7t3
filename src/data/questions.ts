import { Question } from '../types/analysis';

export const questions: Question[] = [
  {
    id: 'hair-type',
    text: 'Quel est votre type de cheveux ?',
    category: 'hair',
    options: [
      { value: 'dry', label: 'Cheveux secs' },
      { value: 'oily', label: 'Cheveux gras' },
      { value: 'normal', label: 'Cheveux normaux' },
      { value: 'mixed', label: 'Cheveux mixtes' },
    ],
  },
  {
    id: 'hair-concern',
    text: 'Avez-vous des problèmes capillaires spécifiques ?',
    category: 'hair',
    options: [
      { value: 'dandruff', label: 'Pellicules' },
      { value: 'breakage', label: 'Cheveux cassants' },
      { value: 'loss', label: 'Chute de cheveux' },
      { value: 'dull', label: 'Cheveux ternes' },
    ],
  },
  {
    id: 'wellness-goal',
    text: 'Quel est votre objectif bien-être principal ?',
    category: 'wellness',
    options: [
      { value: 'relaxation', label: 'Relaxation' },
      { value: 'energy', label: 'Énergie' },
      { value: 'balance', label: 'Équilibre' },
      { value: 'sleep', label: 'Sommeil' },
    ],
  },
];