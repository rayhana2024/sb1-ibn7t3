import { NaturalCareSection } from '../types/natural-care';

export const naturalCareSections: NaturalCareSection[] = [
  {
    id: 'face-treatments',
    category: 'face',
    title: 'Soins du Visage',
    description: 'Recettes naturelles pour une peau rayonnante',
    recipes: [
      {
        id: 'honey-mask',
        title: 'Masque au Miel et Curcuma',
        description: 'Un masque illuminateur et anti-inflammatoire',
        category: 'face',
        imageUrl: 'https://images.unsplash.com/photo-1551446591-142875a901a1', // Image de miel
        duration: '15 minutes',
        difficulty: 'easy',
        ingredients: [
          '1 cuillère à soupe de miel bio',
          '1/2 cuillère à café de curcuma',
          '1 cuillère à café de yaourt grec',
          'Quelques gouttes de jus de citron'
        ],
        instructions: [
          'Mélanger le miel et le curcuma',
          'Ajouter le yaourt grec',
          'Incorporer quelques gouttes de jus de citron',
          'Appliquer sur le visage propre',
          'Laisser poser 15 minutes',
          'Rincer à l\'eau tiède'
        ],
        benefits: [
          'Illumine le teint',
          'Propriétés anti-inflammatoires',
          'Hydrate la peau'
        ],
        warnings: [
          'Le curcuma peut tacher, protégez vos vêtements',
          'Éviter le contour des yeux'
        ],
        tags: ['éclat', 'anti-inflammatoire', 'hydratant']
      },
      {
        id: 'clay-mask',
        title: 'Masque à l\'Argile Verte',
        description: 'Un soin purifiant pour peaux mixtes à grasses',
        category: 'face',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883', // Image d'argile
        duration: '10 minutes',
        difficulty: 'easy',
        ingredients: [
          '1 cuillère à soupe d\'argile verte',
          'Eau florale de rose',
          '2 gouttes d\'huile essentielle de tea tree'
        ],
        instructions: [
          'Mélanger l\'argile avec l\'eau florale',
          'Ajouter l\'huile essentielle',
          'Appliquer en couche fine',
          'Laisser sécher 10 minutes',
          'Rincer à l\'eau tiède'
        ],
        benefits: [
          'Purifie la peau',
          'Resserre les pores',
          'Régule l\'excès de sébum'
        ],
        tags: ['purifiant', 'pores', 'sébum']
      }
    ]
  },
  {
    id: 'body-treatments',
    category: 'body',
    title: 'Soins du Corps',
    description: 'Recettes naturelles pour une peau douce et ferme',
    recipes: [
      {
        id: 'coffee-scrub',
        title: 'Gommage au Café',
        description: 'Un gommage tonifiant anti-cellulite',
        category: 'body',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', // Image de café
        duration: '20 minutes',
        difficulty: 'medium',
        ingredients: [
          '4 cuillères à soupe de marc de café',
          '2 cuillères à soupe d\'huile de coco',
          '1 cuillère à soupe de sucre brun',
          'Zeste d\'un citron'
        ],
        instructions: [
          'Mélanger le marc de café avec l\'huile de coco fondue',
          'Ajouter le sucre brun et les zestes',
          'Masser sur peau humide',
          'Insister sur les zones à cellulite',
          'Rincer abondamment'
        ],
        benefits: [
          'Action anti-cellulite',
          'Exfolie en douceur',
          'Tonifie la peau'
        ],
        tags: ['gommage', 'anti-cellulite', 'tonifiant']
      },
      {
        id: 'milk-bath',
        title: 'Bain au Lait et Miel',
        description: 'Un soin nourrissant façon Cléopâtre',
        category: 'body',
        imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15', // Image de bain
        duration: '30 minutes',
        difficulty: 'easy',
        ingredients: [
          '2 tasses de lait en poudre',
          '1/2 tasse de miel',
          '1/2 tasse de bicarbonate',
          'Huiles essentielles de lavande'
        ],
        instructions: [
          'Mélanger tous les ingrédients',
          'Verser dans le bain chaud',
          'Remuer pour dissoudre',
          'Se relaxer 20-30 minutes'
        ],
        benefits: [
          'Adoucit la peau',
          'Nourrit en profondeur',
          'Effet relaxant'
        ],
        tags: ['bain', 'nourrissant', 'relaxant']
      }
    ]
  },
  {
    id: 'hair-treatments',
    category: 'hair',
    title: 'Soins Capillaires',
    description: 'Traitements naturels pour des cheveux sains et brillants',
    recipes: [
      {
        id: 'egg-mask',
        title: 'Masque à l\'Œuf Fortifiant',
        description: 'Un soin protéiné pour des cheveux plus forts',
        category: 'hair',
        imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388',
        duration: '25 minutes',
        difficulty: 'medium',
        ingredients: [
          '1 œuf entier',
          'Huile d\'olive',
          'Jus de citron',
          'Miel'
        ],
        instructions: [
          'Battre l\'œuf dans un bol',
          'Ajouter 2 cuillères à soupe d\'huile d\'olive',
          'Ajouter 1 cuillère à café de jus de citron et 1 cuillère à café de miel',
          'Appliquer sur cheveux humides',
          'Laisser poser 20 minutes sous une charlotte',
          'Rincer à l\'eau tiède'
        ],
        benefits: [
          'Renforce les cheveux',
          'Apporte de la brillance',
          'Nourrit en profondeur'
        ],
        warnings: [
          'Rincer à l\'eau tiède (pas chaude) pour éviter que l\'œuf ne cuise',
          'Ne pas appliquer sur le cuir chevelu si irrité'
        ],
        tags: ['masque', 'fortifiant', 'cheveux']
      }
    ]
  }
];