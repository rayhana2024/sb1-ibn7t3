import { Category } from '../components/analysis/PersonalAnalysis';

interface Question {
  title: string;
  options: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
}

export const questions: Record<Category, Question[]> = {
  skin: [
    {
      title: 'Quel est votre type de peau ?',
      options: [
        { value: 'dry', label: 'Sèche', description: 'Tiraillements et inconfort fréquents' },
        { value: 'oily', label: 'Grasse', description: 'Brillance et pores dilatés' },
        { value: 'combination', label: 'Mixte', description: 'Zone T grasse, joues normales/sèches' },
        { value: 'sensitive', label: 'Sensible', description: 'Rougeurs et irritations fréquentes' }
      ]
    },
    {
      title: 'Quels sont vos principaux problèmes de peau ?',
      options: [
        { value: 'acne', label: 'Acné', description: 'Boutons et imperfections' },
        { value: 'aging', label: 'Signes de l\'âge', description: 'Rides et perte de fermeté' },
        { value: 'pigmentation', label: 'Taches pigmentaires', description: 'Taches brunes et irrégularités' },
        { value: 'dehydration', label: 'Déshydratation', description: 'Manque d\'eau dans la peau' }
      ]
    },
    {
      title: 'Comment réagit votre peau au soleil ?',
      options: [
        { value: 'burns', label: 'Brûle facilement', description: 'Rougit et brûle rapidement' },
        { value: 'tans', label: 'Bronze progressivement', description: 'Bronze lentement sans brûler' },
        { value: 'resistant', label: 'Résistante', description: 'Bronze facilement, brûle rarement' },
        { value: 'sensitive', label: 'Très sensible', description: 'Ne supporte pas le soleil' }
      ]
    }
  ],
  hair: [
    {
      title: 'Quel est votre type de cheveux ?',
      options: [
        { value: 'straight', label: 'Lisses', description: 'Cheveux droits et plats' },
        { value: 'wavy', label: 'Ondulés', description: 'Légères boucles naturelles' },
        { value: 'curly', label: 'Bouclés', description: 'Boucles bien définies' },
        { value: 'coily', label: 'Crépus', description: 'Boucles très serrées' }
      ]
    },
    {
      title: 'Quelle est la texture de vos cheveux ?',
      options: [
        { value: 'fine', label: 'Fins', description: 'Cheveux délicats et légers' },
        { value: 'medium', label: 'Moyens', description: 'Texture normale' },
        { value: 'thick', label: 'Épais', description: 'Cheveux denses et résistants' },
        { value: 'coarse', label: 'Rêches', description: 'Texture rugueuse' }
      ]
    },
    {
      title: 'Quels sont vos principaux problèmes capillaires ?',
      options: [
        { value: 'dryness', label: 'Sécheresse', description: 'Manque d\'hydratation' },
        { value: 'oiliness', label: 'Gras', description: 'Excès de sébum' },
        { value: 'dandruff', label: 'Pellicules', description: 'Présence de pellicules' },
        { value: 'breakage', label: 'Cassants', description: 'Cheveux qui se cassent facilement' }
      ]
    }
  ],
  body: [
    {
      title: 'Comment décririez-vous votre peau corporelle ?',
      options: [
        { value: 'dry', label: 'Sèche', description: 'Tiraillements et rugosité' },
        { value: 'normal', label: 'Normale', description: 'Ni trop sèche ni trop grasse' },
        { value: 'sensitive', label: 'Sensible', description: 'Réactive et facilement irritée' },
        { value: 'oily', label: 'Grasse', description: 'Tendance aux imperfections' }
      ]
    },
    {
      title: 'Avez-vous des préoccupations particulières ?',
      options: [
        { value: 'cellulite', label: 'Cellulite', description: 'Peau d\'orange' },
        { value: 'stretch', label: 'Vergetures', description: 'Marques d\'étirement' },
        { value: 'firmness', label: 'Manque de fermeté', description: 'Perte d\'élasticité' },
        { value: 'circulation', label: 'Circulation', description: 'Jambes lourdes' }
      ]
    },
    {
      title: 'Quelle est votre routine de soin corporel actuelle ?',
      options: [
        { value: 'minimal', label: 'Minimale', description: 'Hydratation basique' },
        { value: 'regular', label: 'Régulière', description: 'Soins quotidiens' },
        { value: 'extensive', label: 'Complète', description: 'Soins variés et réguliers' },
        { value: 'none', label: 'Aucune', description: 'Pas de routine établie' }
      ]
    }
  ],
  wellness: [
    {
      title: 'Quel est votre niveau d\'activité physique ?',
      options: [
        { value: 'sedentary', label: 'Sédentaire', description: 'Peu ou pas d\'exercice' },
        { value: 'moderate', label: 'Modéré', description: '1-3 fois par semaine' },
        { value: 'active', label: 'Actif', description: '3-5 fois par semaine' },
        { value: 'very-active', label: 'Très actif', description: 'Exercice quotidien' }
      ]
    },
    {
      title: 'Comment gérez-vous le stress ?',
      options: [
        { value: 'meditation', label: 'Méditation', description: 'Pratiques de pleine conscience' },
        { value: 'exercise', label: 'Sport', description: 'Activité physique' },
        { value: 'hobbies', label: 'Loisirs', description: 'Activités relaxantes' },
        { value: 'difficulty', label: 'Difficilement', description: 'Besoin d\'aide' }
      ]
    },
    {
      title: 'Quelle est la qualité de votre sommeil ?',
      options: [
        { value: 'excellent', label: 'Excellent', description: 'Sommeil réparateur' },
        { value: 'good', label: 'Bon', description: 'Quelques réveils' },
        { value: 'fair', label: 'Moyen', description: 'Sommeil perturbé' },
        { value: 'poor', label: 'Mauvais', description: 'Difficultés à dormir' }
      ]
    },
    {
      title: 'Quels sont vos objectifs bien-être ?',
      options: [
        { value: 'energy', label: 'Plus d\'énergie', description: 'Boost quotidien' },
        { value: 'balance', label: 'Équilibre', description: 'Corps et esprit' },
        { value: 'stress', label: 'Gestion du stress', description: 'Réduction de l\'anxiété' },
        { value: 'sleep', label: 'Meilleur sommeil', description: 'Qualité du repos' }
      ]
    }
  ],
  nutrition: [
    {
      title: 'Combien de portions de fruits et légumes consommez-vous par jour ?',
      options: [
        { value: 'low', label: '0-2 portions', description: 'Consommation à augmenter' },
        { value: 'medium', label: '3-4 portions', description: 'Sur la bonne voie' },
        { value: 'high', label: '5 portions ou plus', description: 'Excellent pour votre santé' }
      ]
    },
    {
      title: 'Quel est votre rapport aux aliments suivants ?',
      options: [
        { value: 'balanced', label: 'Alimentation équilibrée', description: 'Je mange de tout avec modération' },
        { value: 'restrictive', label: 'Régime restrictif', description: 'J\'évite certains groupes d\'aliments' },
        { value: 'irregular', label: 'Alimentation irrégulière', description: 'Mes repas ne sont pas réguliers' },
        { value: 'emotional', label: 'Rapport émotionnel', description: 'Je mange selon mes émotions' }
      ]
    }
  ],
  calendar: []
};