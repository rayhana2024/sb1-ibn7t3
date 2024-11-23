import { motion } from 'framer-motion';
import { Droplet, Sun, Shield, Sparkles, AlertTriangle } from 'lucide-react';

interface SkinAnalysisProps {
  answers: Record<string, string>;
}

export function SkinAnalysis({ answers }: SkinAnalysisProps) {
  const getSkinRecommendations = () => {
    return {
      dailyRoutine: {
        morning: [
          {
            step: 'Nettoyage doux',
            products: ['Gel nettoyant sans savon', 'Eau micellaire'],
            duration: '2-3 minutes',
            technique: 'Mouvements circulaires doux, rincer à l\'eau tiède'
          },
          {
            step: 'Tonification',
            products: ['Lotion sans alcool', 'Eau florale'],
            duration: '30 secondes',
            technique: 'Tapoter délicatement avec un coton'
          },
          {
            step: 'Sérum',
            products: ['Vitamine C', 'Acide hyaluronique'],
            duration: '1 minute',
            technique: 'Appliquer par tapotements légers'
          },
          {
            step: 'Hydratation',
            products: ['Crème adaptée au type de peau', 'Gel hydratant'],
            duration: '1-2 minutes',
            technique: 'Massage doux en mouvements ascendants'
          }
        ],
        evening: [
          {
            step: 'Double nettoyage',
            products: ['Huile démaquillante', 'Gel nettoyant'],
            duration: '3-4 minutes',
            technique: 'Massage circulaire doux, rincer entre chaque étape'
          },
          {
            step: 'Exfoliation (2-3 fois/semaine)',
            products: ['Gommage enzymatique', 'Acides AHA/BHA'],
            duration: '2-3 minutes',
            technique: 'Mouvements circulaires très doux, éviter le contour des yeux'
          },
          {
            step: 'Soin ciblé',
            products: ['Sérum anti-âge', 'Traitement spécifique'],
            duration: '1-2 minutes',
            technique: 'Application ciblée sur les zones concernées'
          }
        ]
      },
      treatments: {
        weekly: [
          {
            name: 'Masque hydratant',
            frequency: '1-2 fois par semaine',
            duration: '15-20 minutes',
            ingredients: ['Acide hyaluronique', 'Aloe vera', 'Glycérine'],
            benefits: 'Hydratation profonde, éclat, apaisement'
          },
          {
            name: 'Masque détoxifiant',
            frequency: '1 fois par semaine',
            duration: '10 minutes',
            ingredients: ['Argile verte', 'Charbon actif'],
            benefits: 'Purification, resserrement des pores'
          }
        ],
        monthly: [
          {
            name: 'Peeling doux',
            frequency: '1 fois par mois',
            duration: '5-10 minutes',
            ingredients: ['AHA/BHA', 'Enzymes de fruits'],
            benefits: 'Renouvellement cellulaire, éclat'
          }
        ]
      },
      specificCare: {
        hydration: [
          'Utiliser un humidificateur la nuit',
          'Boire 2L d\'eau par jour minimum',
          'Éviter l\'eau trop chaude',
          'Privilégier les textures riches'
        ],
        protection: [
          'SPF 30-50 quotidien',
          'Renouveler toutes les 2 heures en extérieur',
          'Porter un chapeau en cas de forte exposition',
          'Utiliser des antioxydants'
        ],
        lifestyle: [
          'Dormir 7-8h par nuit',
          'Limiter le sucre et les produits laitiers',
          'Pratiquer une activité physique régulière',
          'Gérer son stress'
        ]
      },
      ingredients: {
        recommended: [
          {
            name: 'Acide hyaluronique',
            benefits: 'Hydratation profonde, repulpant',
            usage: 'Matin et soir, sur peau humide'
          },
          {
            name: 'Vitamine C',
            benefits: 'Antioxydant, éclat, anti-taches',
            usage: 'Le matin, avant la crème solaire'
          },
          {
            name: 'Niacinamide',
            benefits: 'Régulation du sébum, anti-inflammatoire',
            usage: 'Matin et/ou soir, concentration 5-10%'
          },
          {
            name: 'Peptides',
            benefits: 'Anti-âge, fermeté, réparation',
            usage: 'Soir, en sérum ou crème'
          }
        ],
        toAvoid: [
          'Alcool dans les produits',
          'Parfums artificiels',
          'Huiles comédogènes',
          'Exfoliants trop agressifs'
        ]
      }
    };
  };

  const recommendations = getSkinRecommendations();

  return (
    <div className="space-y-8">
      {/* Routine quotidienne */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Droplet className="w-6 h-6" />
          Routine quotidienne personnalisée
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

      {/* Soins spécifiques */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          Soins spécifiques
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soins hebdomadaires */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-purple-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-purple-800 mb-4">Soins hebdomadaires</h4>
            <div className="space-y-4">
              {recommendations.treatments.weekly.map((treatment, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-purple-700 mb-2">{treatment.name}</h5>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Fréquence:</span> {treatment.frequency}</p>
                    <p><span className="font-medium">Durée:</span> {treatment.duration}</p>
                    <p><span className="font-medium">Ingrédients:</span> {treatment.ingredients.join(', ')}</p>
                    <p><span className="font-medium">Bienfaits:</span> {treatment.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soins mensuels */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-purple-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-purple-800 mb-4">Soins mensuels</h4>
            <div className="space-y-4">
              {recommendations.treatments.monthly.map((treatment, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-purple-700 mb-2">{treatment.name}</h5>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Fréquence:</span> {treatment.frequency}</p>
                    <p><span className="font-medium">Durée:</span> {treatment.duration}</p>
                    <p><span className="font-medium">Ingrédients:</span> {treatment.ingredients.join(', ')}</p>
                    <p><span className="font-medium">Bienfaits:</span> {treatment.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Protection et mode de vie */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Protection et mode de vie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hydratation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-3">Hydratation</h4>
            <ul className="space-y-2">
              {recommendations.specificCare.hydration.map((tip, index) => (
                <li key={index} className="text-blue-600 flex items-center gap-2">
                  <span>•</span> {tip}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-3">Protection solaire</h4>
            <ul className="space-y-2">
              {recommendations.specificCare.protection.map((tip, index) => (
                <li key={index} className="text-blue-600 flex items-center gap-2">
                  <span>•</span> {tip}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mode de vie */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-3">Mode de vie</h4>
            <ul className="space-y-2">
              {recommendations.specificCare.lifestyle.map((tip, index) => (
                <li key={index} className="text-blue-600 flex items-center gap-2">
                  <span>•</span> {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Ingrédients */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Sun className="w-6 h-6" />
          Guide des ingrédients
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ingrédients recommandés */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-4">Ingrédients recommandés</h4>
            <div className="space-y-4">
              {recommendations.ingredients.recommended.map((ingredient, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-green-700 mb-2">{ingredient.name}</h5>
                  <p className="text-sm text-green-600 mb-1">{ingredient.benefits}</p>
                  <p className="text-sm text-green-600">
                    <span className="font-medium">Utilisation:</span> {ingredient.usage}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ingrédients à éviter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-red-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-red-800 mb-4">Ingrédients à éviter</h4>
            <div className="space-y-2">
              {recommendations.ingredients.toAvoid.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{ingredient}</span>
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
            Ces recommandations sont adaptées à votre type de peau, mais il est conseillé
            de faire un test de tolérance avant d'utiliser un nouveau produit. En cas de
            réaction, cessez l'utilisation et consultez un dermatologue.
          </p>
        </div>
      </div>
    </div>
  );
}