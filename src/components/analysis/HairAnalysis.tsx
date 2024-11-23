import { motion } from 'framer-motion';
import { Scissors, Droplet, AlertTriangle, Sparkles } from 'lucide-react';

interface HairAnalysisProps {
  answers: Record<string, string>;
}

export function HairAnalysis({ answers }: HairAnalysisProps) {
  const getHairRecommendations = () => {
    return {
      dailyRoutine: {
        morning: [
          {
            step: 'Brossage revitalisant',
            products: ['Brosse en poils naturels', 'Huile protectrice légère'],
            duration: '3-5 minutes',
            technique: 'Brossage doux de la racine vers les pointes'
          },
          {
            step: 'Protection thermique',
            products: ['Spray thermo-protecteur', 'Sérum protecteur'],
            duration: '1-2 minutes',
            technique: 'Application uniforme sur cheveux humides'
          }
        ],
        evening: [
          {
            step: 'Massage du cuir chevelu',
            products: ['Huile de massage', 'Lotion stimulante'],
            duration: '5-10 minutes',
            technique: 'Mouvements circulaires avec les doigts'
          },
          {
            step: 'Protection nocturne',
            products: ['Huile nourrissante', 'Bonnet en soie'],
            duration: '2-3 minutes',
            technique: 'Application sur longueurs et pointes'
          }
        ]
      },
      weeklyTreatments: [
        {
          name: 'Masque nourrissant profond',
          frequency: '1-2 fois par semaine',
          duration: '20-30 minutes',
          ingredients: [
            'Huile de coco',
            'Huile d\'avocat',
            'Beurre de karité',
            'Protéines de soie'
          ],
          benefits: 'Hydratation intense, réparation, brillance'
        },
        {
          name: 'Gommage du cuir chevelu',
          frequency: '1 fois par semaine',
          duration: '10 minutes',
          ingredients: [
            'Sucre fin',
            'Huile de jojoba',
            'Huile essentielle de menthe',
            'Aloe vera'
          ],
          benefits: 'Exfoliation douce, stimulation, purification'
        }
      ],
      naturalRemedies: {
        growth: [
          {
            name: 'Masque stimulant',
            ingredients: ['Romarin', 'Huile de ricin', 'Gingembre'],
            usage: 'Application hebdomadaire sur le cuir chevelu'
          },
          {
            name: 'Lotion fortifiante',
            ingredients: ['Ortie', 'Prêle', 'Huile de coco'],
            usage: 'Vaporisation quotidienne sur racines'
          }
        ],
        repair: [
          {
            name: 'Masque réparateur',
            ingredients: ['Avocat', 'Miel', 'Jaune d\'œuf'],
            usage: 'Application bi-hebdomadaire sur longueurs'
          },
          {
            name: 'Sérum pointes',
            ingredients: ['Huile d\'argan', 'Huile de macadamia'],
            usage: 'Application quotidienne sur pointes'
          }
        ]
      },
      lifestyle: {
        nutrition: [
          'Protéines maigres',
          'Oméga-3',
          'Vitamines B',
          'Zinc et fer',
          'Biotine'
        ],
        habits: [
          'Éviter les attaches trop serrées',
          'Utiliser une taie d\'oreiller en soie',
          'Limiter la chaleur des outils',
          'Sécher à l\'air libre quand possible'
        ],
        supplements: [
          {
            name: 'Complexe capillaire',
            dosage: '1 gélule par jour',
            ingredients: ['Biotine', 'Zinc', 'Fer', 'Vitamines B']
          },
          {
            name: 'Levure de bière',
            dosage: '2 gélules par jour',
            ingredients: ['Vitamines B', 'Protéines', 'Minéraux']
          }
        ]
      },
      hairTypes: {
        dry: {
          care: [
            'Shampooing sans sulfates',
            'Après-shampooing riche',
            'Huile nourrissante quotidienne',
            'Masque hebdomadaire'
          ],
          avoid: [
            'Shampoings agressifs',
            'Eau très chaude',
            'Brushing fréquent',
            'Produits alcoolisés'
          ]
        },
        oily: {
          care: [
            'Shampooing purifiant doux',
            'Après-shampooing léger',
            'Lotion purifiante',
            'Masque à l\'argile'
          ],
          avoid: [
            'Produits trop riches',
            'Contact fréquent avec les mains',
            'Brossage excessif',
            'Rinçage insuffisant'
          ]
        }
      }
    };
  };

  const recommendations = getHairRecommendations();

  return (
    <div className="space-y-8">
      {/* Routine quotidienne */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Scissors className="w-6 h-6" />
          Routine capillaire quotidienne
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Routine du matin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h4 className="font-medium text-rose-700 mb-4">Routine du matin</h4>
            <div className="space-y-4">
              {recommendations.dailyRoutine.morning.map((step, index) => (
                <div key={index} className="border-b border-rose-100 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600
                                   flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <h5 className="font-medium text-gray-800">{step.step}</h5>
                  </div>
                  <div className="pl-8 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Produits:</span>{' '}
                      {step.products.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Durée:</span> {step.duration}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Technique:</span> {step.technique}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Routine du soir */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h4 className="font-medium text-rose-700 mb-4">Routine du soir</h4>
            <div className="space-y-4">
              {recommendations.dailyRoutine.evening.map((step, index) => (
                <div key={index} className="border-b border-rose-100 pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-600
                                   flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <h5 className="font-medium text-gray-800">{step.step}</h5>
                  </div>
                  <div className="pl-8 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Produits:</span>{' '}
                      {step.products.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Durée:</span> {step.duration}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Technique:</span> {step.technique}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soins hebdomadaires */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          Soins hebdomadaires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.weeklyTreatments.map((treatment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-50 rounded-xl p-6"
            >
              <h4 className="font-medium text-purple-800 mb-3">{treatment.name}</h4>
              <div className="space-y-2">
                <p className="text-purple-600">
                  <span className="font-medium">Fréquence:</span> {treatment.frequency}
                </p>
                <p className="text-purple-600">
                  <span className="font-medium">Durée:</span> {treatment.duration}
                </p>
                <div>
                  <p className="font-medium text-purple-600 mb-1">Ingrédients:</p>
                  <ul className="list-disc list-inside text-purple-600 text-sm">
                    {treatment.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-purple-600">
                  <span className="font-medium">Bienfaits:</span> {treatment.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Remèdes naturels */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Droplet className="w-6 h-6" />
          Remèdes naturels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Croissance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-4">Stimulation de la croissance</h4>
            <div className="space-y-4">
              {recommendations.naturalRemedies.growth.map((remedy, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-green-700 mb-2">{remedy.name}</h5>
                  <p className="text-sm text-green-600 mb-1">
                    <span className="font-medium">Ingrédients:</span>{' '}
                    {remedy.ingredients.join(', ')}
                  </p>
                  <p className="text-sm text-green-600">
                    <span className="font-medium">Utilisation:</span> {remedy.usage}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Réparation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-4">Réparation et soin</h4>
            <div className="space-y-4">
              {recommendations.naturalRemedies.repair.map((remedy, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-green-700 mb-2">{remedy.name}</h5>
                  <p className="text-sm text-green-600 mb-1">
                    <span className="font-medium">Ingrédients:</span>{' '}
                    {remedy.ingredients.join(', ')}
                  </p>
                  <p className="text-sm text-green-600">
                    <span className="font-medium">Utilisation:</span> {remedy.usage}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mode de vie et nutrition */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4">
          Mode de vie et nutrition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nutrition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-3">Nutrition essentielle</h4>
            <ul className="space-y-2">
              {recommendations.lifestyle.nutrition.map((item, index) => (
                <li key={index} className="text-blue-600 flex items-center gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Habitudes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-3">Bonnes habitudes</h4>
            <ul className="space-y-2">
              {recommendations.lifestyle.habits.map((habit, index) => (
                <li key={index} className="text-blue-600 flex items-center gap-2">
                  <span>•</span> {habit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Suppléments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-3">Suppléments recommandés</h4>
            <div className="space-y-4">
              {recommendations.lifestyle.supplements.map((supplement, index) => (
                <div key={index} className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-blue-700 mb-1">{supplement.name}</h5>
                  <p className="text-sm text-blue-600">
                    <span className="font-medium">Dosage:</span> {supplement.dosage}
                  </p>
                  <p className="text-sm text-blue-600">
                    <span className="font-medium">Composition:</span>{' '}
                    {supplement.ingredients.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avertissement */}
      <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-amber-800 mb-1">
            Recommandations importantes
          </h4>
          <p className="text-sm text-amber-700">
            Ces recommandations sont adaptées à votre type de cheveux, mais il est conseillé
            de faire un test de tolérance avant d'utiliser un nouveau produit. En cas de
            problème persistant, consultez un professionnel de la santé capillaire.
          </p>
        </div>
      </div>
    </div>
  );
}