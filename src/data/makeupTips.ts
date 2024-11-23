import { MakeupTip } from '../types/makeup';

export const makeupTips: MakeupTip[] = [
  // BASE TIPS
  {
    id: 'flawless-base',
    category: 'skin',
    title: 'Base Parfaite Longue Tenue',
    description: 'Technique pro pour une base impeccable qui tient toute la journée',
    duration: '10min',
    difficulty: 'medium',
    steps: [
      'Appliquer une crème hydratante adaptée à votre type de peau',
      'Laisser poser 2 minutes pour que la crème pénètre',
      'Appliquer un primer ciblé (matifiant sur zone T, illuminateur sur pommettes)',
      'Appliquer le fond de teint par petites touches avec un pinceau densifié',
      'Estomper avec une éponge humide en tapotant',
      'Fixer avec une poudre translucide appliquée au pinceau'
    ],
    products: [
      'Crème hydratante légère',
      'Primer multi-zones',
      'Fond de teint fluide',
      'Poudre fixante translucide',
      'Éponge à maquillage',
      'Pinceau densifié'
    ],
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800'
  },
  {
    id: 'natural-glow',
    category: 'skin',
    title: 'Teint Glowy Naturel',
    description: 'Technique pour un effet bonne mine lumineux',
    duration: '5min',
    difficulty: 'easy',
    steps: [
      'Mélanger une goutte d\'illuminateur liquide à la crème hydratante',
      'Appliquer un primer illuminateur sur les points hauts du visage',
      'Utiliser un fond de teint léger ou une BB crème',
      'Ajouter des touches d\'illuminateur crème sur les pommettes',
      'Fixer avec un spray hydratant brillant'
    ],
    products: [
      'Illuminateur liquide',
      'Primer illuminateur',
      'BB crème',
      'Spray fixateur brillant'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800'
  },

  // EYES TIPS
  {
    id: 'everyday-eyes',
    category: 'eyes',
    title: 'Regard Naturel Sublimé',
    description: 'Maquillage des yeux pour tous les jours',
    duration: '7min',
    difficulty: 'easy',
    steps: [
      'Appliquer une base sur toute la paupière',
      'Balayer une teinte neutre sur toute la paupière mobile',
      'Définir le pli de l\'œil avec une teinte plus foncée',
      'Illuminer le coin interne de l\'œil',
      'Appliquer du mascara en zigzag à la racine des cils'
    ],
    products: [
      'Base à paupières',
      'Palette de fards neutres',
      'Pinceau estompe',
      'Mascara volumateur'
    ],
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800'
  },
  {
    id: 'cat-eye',
    category: 'eyes',
    title: 'Eye-Liner Parfait',
    description: 'Technique pour un trait d\'eye-liner réussi',
    duration: '5min',
    difficulty: 'medium',
    steps: [
      'Tracer des points de repère le long de la ligne des cils',
      'Relier les points en suivant la ligne naturelle',
      'Dessiner la pointe de l\'œil de chat',
      'Remplir l\'espace entre les traits',
      'Affiner la ligne avec un coton-tige'
    ],
    products: [
      'Eye-liner liquide ou feutre',
      'Cotons-tiges',
      'Correcteur liquide pour nettoyer'
    ],
    image: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?q=80&w=800'
  },

  // BROWS & CONTOUR
  {
    id: 'perfect-brows',
    category: 'eyes',
    title: 'Sourcils Structurés',
    description: 'Technique pour des sourcils parfaitement dessinés',
    duration: '8min',
    difficulty: 'medium',
    steps: [
      'Brosser les sourcils vers le haut',
      'Tracer la ligne inférieure avec un crayon fin',
      'Dessiner de petits traits imitant les poils',
      'Estomper avec une brosse à sourcils',
      'Fixer avec un gel transparent'
    ],
    products: [
      'Crayon à sourcils fin',
      'Gel fixateur transparent',
      'Brosse à sourcils double embout'
    ],
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800'
  },
  {
    id: 'face-contour',
    category: 'skin',
    title: 'Contouring Naturel',
    description: 'Sculpter le visage en douceur',
    duration: '10min',
    difficulty: 'medium',
    steps: [
      'Appliquer la poudre bronzante sous les pommettes',
      'Définir le contour de la mâchoire',
      'Affiner le nez avec des touches légères',
      'Estomper avec un pinceau propre',
      'Ajouter du blush sur les pommettes'
    ],
    products: [
      'Poudre bronzante mate',
      'Blush',
      'Pinceau contour',
      'Pinceau estompe'
    ],
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800'
  },

  // LIPS
  {
    id: 'natural-lips',
    category: 'lips',
    title: 'Lèvres Naturellement Sublimées',
    description: 'Techniques douces pour mettre en valeur vos lèvres',
    duration: '5min',
    difficulty: 'easy',
    steps: [
      'Exfolier délicatement avec un gommage naturel',
      'Hydrater avec un baume nourrissant',
      'Appliquer un crayon nude ton sur ton',
      'Finaliser avec un gloss transparent'
    ],
    products: [
      'Gommage lèvres doux',
      'Baume hydratant',
      'Crayon contour naturel',
      'Gloss transparent'
    ],
    image: 'https://images.unsplash.com/photo-1600359746315-119f1360d663?q=80&w=800'
  },

  // SPECIAL TECHNIQUES
  {
    id: 'glass-skin',
    category: 'skin',
    title: 'Glass Skin Effect',
    description: 'Technique coréenne pour une peau cristalline',
    duration: '15min',
    difficulty: 'pro',
    steps: [
      'Double nettoyage du visage',
      'Application d\'un toner hydratant',
      'Superposition de sérums (hydratant puis illuminateur)',
      'Application d\'une crème gel légère',
      'Finition avec un illuminateur liquide',
      'Fixer avec un spray glowy'
    ],
    products: [
      'Huile nettoyante',
      'Toner hydratant',
      'Sérum à l\'acide hyaluronique',
      'Illuminateur liquide',
      'Spray fixateur glowy'
    ],
    image: 'https://images.unsplash.com/photo-1594146032116-80033545b0b8?q=80&w=800'
  },
  {
    id: 'no-makeup',
    category: 'skin',
    title: 'No Makeup Look',
    description: 'Maquillage invisible pour un effet naturel',
    duration: '10min',
    difficulty: 'medium',
    steps: [
      'Appliquer un soin teinté hydratant',
      'Corriger les imperfections avec un correcteur crémeux',
      'Ajouter un voile de blush crème',
      'Brosser les sourcils avec un gel teinté',
      'Appliquer un baume à lèvres teinté'
    ],
    products: [
      'Soin teinté',
      'Correcteur crémeux',
      'Blush crème',
      'Gel sourcils teinté',
      'Baume à lèvres teinté'
    ],
    image: 'https://images.unsplash.com/photo-1588387883823-4533e0d7fdd0?q=80&w=800'
  },
  {
    id: 'fixing-tricks',
    category: 'skin',
    title: 'Astuces de Fixation',
    description: 'Techniques pour faire tenir le maquillage toute la journée',
    duration: '5min',
    difficulty: 'easy',
    steps: [
      'Appliquer un primer fixateur',
      'Utiliser la technique du sandwich (poudre-spray-poudre)',
      'Presser un mouchoir sur les zones brillantes',
      'Vaporiser un spray fixateur à 20cm du visage',
      'Laisser sécher naturellement'
    ],
    products: [
      'Primer fixateur',
      'Poudre libre',
      'Spray fixateur longue tenue',
      'Mouchoirs matifiants'
    ],
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800'
  }
];