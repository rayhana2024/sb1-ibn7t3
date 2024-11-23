import { NaturalRecipe } from '../types/natural-care';

export const naturalRecipes: NaturalRecipe[] = [
  {
    id: 'hair-mask-avocado',
    title: 'Masque hydratant à l\'avocat',
    description: 'Un masque nourrissant pour cheveux secs et abîmés',
    category: 'hair',
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578',  // Image d'avocat
    // ... reste de la recette identique
  },
  {
    id: 'face-mask-honey',
    title: 'Masque visage au miel',
    description: 'Un masque apaisant et hydratant pour tous types de peaux',
    category: 'skin',
    imageUrl: 'https://images.unsplash.com/photo-1612540139150-4e7f3d07b5d8',  // Image de miel
    // ... reste de la recette identique
  }
];