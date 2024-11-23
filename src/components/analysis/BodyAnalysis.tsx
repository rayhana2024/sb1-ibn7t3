import { motion } from 'framer-motion';
import { Heart, Droplet, AlertTriangle, Sparkles } from 'lucide-react';

interface BodyAnalysisProps {
  answers: Record<string, string>;
}

export function BodyAnalysis({ answers }: BodyAnalysisProps) {
  const getBodyRecommendations = () => {
    return {
      dailyRoutine: {
        morning: [
          {
            step: 'Brossage à sec',
            duration: '5 minutes',
            technique: 'Mouvements circulaires vers le cœur',
            benefits: 'Stimule la circulation, exfolie en douceur'
          },
          {
            step: 'Douche alternée',
            duration: '3-5 minutes',
            technique: 'Alterner eau chaude (30s) et froide (10s)',
            benefits: 'Tonifie, améliore la circulation'
          },
          {
            step: 'Hydratation active',
            duration: '2-3 minutes',
            technique: 'Application par massage sur peau humide',
            benefits: 'Hydratation optimale, fermeté'
          }
        ],
        evening: [
          {
            step: 'Auto-massage drainant',
            duration: '10 minutes',
            technique: 'Mouvements de bas en haut',
            benefits: 'Drainage lymphatique, détente'
          },
          {
            step: 'Soin ciblé',
            duration: '5 minutes',
            technique: 'Application de produits spécifiques',
            benefits: 'Traitement des zones concernées'
          }
        ]
      },
      treatments: {
        weekly: [
          {
            name: 'Gommage corps complet',
            frequency: '1-2 fois par semaine',
            ingredients: [
              'Sucre ou sel fin',
              'Huile de coco',
              'Huile essentielle de pamplemousse',
              'Café moulu'
            ],
            technique: 'Massage circulaire doux',
            benefits: 'Exfoliation, lissage, éclat'
          },
          {
            name: 'Enveloppement détox',
            frequency: '1 fois par semaine',
            ingredients: [
              'Argile verte',
              'Huile essentielle de cyprès',
              'Gel d\'aloe vera',
              'Huile de macadamia'
            ],
            technique: 'Application uniforme, repos 20min',
            benefits: 'Détoxification, fermeté'
          }
        ],
        targeted: [
          {
            zone: 'Jambes',
            treatment: 'Gel cryo-actif',
            frequency: 'Quotidien',
            technique: 'Massage ascendant',
            benefits: 'Légèreté, circulation'
          },
          {
            zone: 'Ventre',
            treatment: 'Huile raffermissante',
            frequency: 'Matin et soir',
            technique: 'Massage circulaire',
            benefits: 'Tonicité, digestion'
          }
        ]
      },
      exercises: {
        cardio: [
          {
            name: 'Marche rapide',
            duration: '30 minutes',
            frequency: '5 fois par semaine',
            intensity: 'Modérée'
          },
          {
            name: 'Natation',
            duration: '45 minutes',
            frequency: '2-3 fois par semaine',
            intensity: 'Variable'
          }
        ],
        musculation: [
          {
            name: 'Squats et fentes',
            sets: '3 séries de 15 répétitions',
            frequency: '3 fois par semaine',
            target: 'Jambes et fessiers'
          },
          {
            name: 'Gainage',
            sets: '3 séries de 30 secondes',
            frequency: 'Quotidien',
            target: 'Core et posture'
          }
        ]
      },
      nutrition: {
        hydration: [
          '2L d\'eau par jour minimum',
          'Thé vert (antioxydants)',
          'Eau de coco (minéraux)',
          'Infusions drainantes'
        ],
        superfoods: [
          {
            name: 'Baies de goji',
            benefits: 'Antioxydants, collagène',
            dosage: '2 cuillères par jour'
          },
          {
            name: 'Spiruline',
            benefits: 'Détox, minéraux',
            dosage: '1 cuillère par jour'
          }
        ],
        supplements: [
          {
            name: 'Collagène marin',
            dosage: '10g par jour',
            benefits: 'Élasticité, fermeté'
          },
          {
            name: 'Acide hyaluronique',
            dosage: '200mg par jour',
            benefits: 'Hydratation profonde'
          }
        ]
      },
      lifestyle: {
        habits: [
          'Dormir 7-8h par nuit',
          'Éviter les vêtements trop serrés',
          'Pratiquer la respiration profonde',
          'Limiter l\'exposition au soleil'
        ],
        toAvoid: [
          'Douches trop chaudes',
          'Position assise prolongée',
          'Déshydratation',
          'Stress chronique'
        ]
      }
    };
  };

  const recommendations = getBodyRecommendations();

  return (
    <div className="space-y-8">
      {/* Routine quotidienne */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Routine corporelle quotidienne
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
                      <span className="font-medium">Durée:</span> {step.duration}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Technique:</span> {step.technique}
                    </p>
                    <p className="text-sm text-rose-600">
                      <span className="font-medium">Bienfaits:</span> {step.benefits}
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
                      <span className="font-medium">Durée:</span> {step.duration}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Technique:</span> {step.technique}
                    </p>
                    <p className="text-sm text-rose-600">
                      <span className="font-medium">Bienfaits:</span> {step.benefits}
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
          {recommendations.treatments.weekly.map((treatment, index) => (
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
                <div>
                  <p className="font-medium text-purple-600 mb-1">Ingrédients:</p>
                  <ul className="list-disc list-inside text-purple-600 text-sm">
                    {treatment.ingredients.map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-purple-600">
                  <span className="font-medium">Technique:</span> {treatment.technique}
                </p>
                <p className="text-purple-600">
                  <span className="font-medium">Bienfaits:</span> {treatment.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Exercices */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4">
          Programme d'exercices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cardio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-4">Exercices cardio</h4>
            <div className="space-y-4">
              {recommendations.exercises.cardio.map((exercise, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-blue-700 mb-2">{exercise.name}</h5>
                  <div className="space-y-1 text-sm text-blue-600">
                    <p><span className="font-medium">Durée:</span> {exercise.duration}</p>
                    <p><span className="font-medium">Fréquence:</span> {exercise.frequency}</p>
                    <p><span className="font-medium">Intensité:</span> {exercise.intensity}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Musculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-blue-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-blue-800 mb-4">Exercices de musculation</h4>
            <div className="space-y-4">
              {recommendations.exercises.musculation.map((exercise, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-blue-700 mb-2">{exercise.name}</h5>
                  <div className="space-y-1 text-sm text-blue-600">
                    <p><span className="font-medium">Séries:</span> {exercise.sets}</p>
                    <p><span className="font-medium">Fréquence:</span> {exercise.frequency}</p>
                    <p><span className="font-medium">Zone ciblée:</span> {exercise.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nutrition et suppléments */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Droplet className="w-6 h-6" />
          Nutrition et suppléments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hydratation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-3">Hydratation</h4>
            <ul className="space-y-2">
              {recommendations.nutrition.hydration.map((item, index) => (
                <li key={index} className="text-green-600 flex items-center gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Superfoods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-3">Superfoods</h4>
            <div className="space-y-4">
              {recommendations.nutrition.superfoods.map((food, index) => (
                <div key={index} className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-green-700 mb-1">{food.name}</h5>
                  <p className="text-sm text-green-600">{food.benefits}</p>
                  <p className="text-sm text-green-600">
                    <span className="font-medium">Dosage:</span> {food.dosage}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Suppléments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-3">Suppléments</h4>
            <div className="space-y-4">
              {recommendations.nutrition.supplements.map((supplement, index) => (
                <div key={index} className="bg-white rounded-lg p-3">
                  <h5 className="font-medium text-green-700 mb-1">{supplement.name}</h5>
                  <p className="text-sm text-green-600">
                    <span className="font-medium">Dosage:</span> {supplement.dosage}
                  </p>
                  <p className="text-sm text-green-600">{supplement.benefits}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mode de vie */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4">
          Recommandations mode de vie
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bonnes habitudes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-amber-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-amber-800 mb-3">Bonnes habitudes</h4>
            <ul className="space-y-2">
              {recommendations.lifestyle.habits.map((habit, index) => (
                <li key={index} className="text-amber-600 flex items-center gap-2">
                  <span>•</span> {habit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* À éviter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-red-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-red-800 mb-3">À éviter</h4>
            <ul className="space-y-2">
              {recommendations.lifestyle.toAvoid.map((item, index) => (
                <li key={index} className="text-red-600 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
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
            Ces recommandations sont données à titre indicatif. Consultez un professionnel
            de santé avant de commencer un nouveau programme d'exercices ou en cas de
            conditions médicales particulières. Écoutez votre corps et adaptez les
            exercices à votre niveau.
          </p>
        </div>
      </div>
    </div>
  );
}