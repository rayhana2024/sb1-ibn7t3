import { BeautyRoutine } from '../types/routines';

export const beautyRoutines: BeautyRoutine[] = [
  // Routines du matin
  {
    id: 'morning-dry',
    title: 'Routine Matinale - Peau Sèche',
    description: 'Une routine douce et hydratante pour commencer la journée',
    timeOfDay: 'morning',
    skinType: 'dry',
    duration: 'complete',
    careType: 'face',
    steps: [
      {
        id: 'step-1',
        title: 'Nettoyage doux',
        description: 'Nettoyer le visage avec une eau micellaire douce',
        naturalTip: 'Utilisez de l\'eau de rose comme alternative naturelle',
        icon: '🧴',
        duration: 2
      },
      {
        id: 'step-2',
        title: 'Tonique hydratant',
        description: 'Tonifier et préparer la peau',
        naturalTip: 'L\'hydrolat de camomille apaise et hydrate',
        icon: '💧',
        duration: 1
      },
      {
        id: 'step-3',
        title: 'Sérum vitaminé',
        description: 'Application d\'un sérum à la vitamine C',
        naturalTip: 'Quelques gouttes d\'huile d\'argousier riche en vitamine C',
        icon: '✨',
        duration: 1
      },
      {
        id: 'step-4',
        title: 'Crème hydratante',
        description: 'Protection et hydratation',
        naturalTip: 'Mélangez votre crème avec une goutte d\'huile d\'argan',
        icon: '🌸',
        duration: 1
      }
    ],
    likes: 0,
    shared: false,
    createdBy: 'system',
    products: [
      {
        id: 'prod-1',
        name: 'Eau micellaire à la rose',
        type: 'cleanser',
        natural: true
      },
      {
        id: 'prod-2',
        name: 'Crème riche au karité',
        type: 'moisturizer',
        natural: true
      }
    ]
  },
  // Routine express du matin
  {
    id: 'morning-express',
    title: 'Routine Express - 3 minutes',
    description: 'Le minimum vital pour un teint frais',
    timeOfDay: 'morning',
    skinType: 'combination',
    duration: 'express',
    careType: 'face',
    steps: [
      {
        id: 'step-1',
        title: 'Nettoyage rapide',
        description: 'Passage rapide d\'eau micellaire',
        naturalTip: 'Utilisez de l\'aloe vera pur',
        icon: '⚡',
        duration: 1
      },
      {
        id: 'step-2',
        title: 'Hydratation + Protection',
        description: 'Crème hydratante avec SPF',
        naturalTip: 'Ajoutez une goutte d\'huile essentielle de lavande',
        icon: '☀️',
        duration: 2
      }
    ],
    likes: 0,
    shared: false,
    createdBy: 'system'
  },
  // Routine du soir relaxante
  {
    id: 'evening-spa',
    title: 'Soirée Spa à la maison',
    description: 'Un moment de détente absolue',
    timeOfDay: 'evening',
    skinType: 'all',
    duration: 'complete',
    careType: 'face',
    steps: [
      {
        id: 'step-1',
        title: 'Double nettoyage',
        description: 'Huile démaquillante puis gel nettoyant',
        naturalTip: 'Utilisez de l\'huile de jojoba puis un savon d\'Alep',
        icon: '🧴',
        duration: 5
      },
      {
        id: 'step-2',
        title: 'Gommage doux',
        description: 'Exfoliation douce aux enzymes',
        naturalTip: 'Mélange miel et sucre fin',
        icon: '✨',
        duration: 5
      },
      {
        id: 'step-3',
        title: 'Masque relaxant',
        description: 'Masque nourrissant et apaisant',
        naturalTip: 'Masque avocat-miel-yaourt',
        icon: '🌺',
        duration: 15
      },
      {
        id: 'step-4',
        title: 'Massage facial',
        description: 'Massage drainant et relaxant',
        naturalTip: 'Utilisez un gua sha ou une pierre de jade',
        icon: '💆‍♀️',
        duration: 10
      },
      {
        id: 'step-5',
        title: 'Soin de nuit',
        description: 'Huile ou crème réparatrice',
        naturalTip: 'Huile de rose musquée pure',
        icon: '🌙',
        duration: 2
      }
    ],
    likes: 0,
    shared: false,
    createdBy: 'system'
  },
  // Routine week-end détox
  {
    id: 'weekend-detox',
    title: 'Détox du Week-end',
    description: 'Reset complet pour peau et esprit',
    timeOfDay: 'weekend',
    skinType: 'all',
    duration: 'complete',
    careType: 'face',
    steps: [
      {
        id: 'step-1',
        title: 'Bain de vapeur',
        description: 'Ouvrir les pores en douceur',
        naturalTip: 'Ajoutez de la lavande ou de la camomille',
        icon: '💨',
        duration: 10
      },
      {
        id: 'step-2',
        title: 'Masque détox',
        description: 'Purification en profondeur',
        naturalTip: 'Argile verte + eau florale de menthe',
        icon: '🌿',
        duration: 15
      },
      {
        id: 'step-3',
        title: 'Soin capillaire',
        description: 'Masque nourrissant',
        naturalTip: 'Huile de coco tiède en bain d\'huile',
        icon: '💆‍♀️',
        duration: 30
      }
    ],
    likes: 0,
    shared: false,
    createdBy: 'system'
  }
];