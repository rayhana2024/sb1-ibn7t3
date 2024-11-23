import { Recipe } from '../types/natural-care';

export const recipes: Recipe[] = [
  {
    id: 'honey-mask',
    title: 'Masque hydratant au miel',
    description: 'Un masque naturel qui nourrit et apaise la peau en profondeur',
    category: 'skin',
    tags: ['hydratation', 'anti-inflammatoire', 'nourrissant'],
    imageUrl: 'https://images.unsplash.com/photo-1612540139150-4e7f3d07b5d8',  // Image de miel
    // ... reste de la recette identique
  },
  {
    id: 'avocado-hair-mask',
    title: 'Masque capillaire à l\'avocat',
    description: 'Un soin réparateur intense pour cheveux secs et abîmés',
    category: 'hair',
    tags: ['réparation', 'nutrition', 'brillance'],
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578',  // Image d'avocat
    // ... reste de la recette identique
  }
];