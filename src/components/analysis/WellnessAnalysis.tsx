import { motion } from 'framer-motion';
import { Heart, Activity, Moon, Brain, AlertTriangle } from 'lucide-react';

interface WellnessAnalysisProps {
  answers: Record<string, string>;
}

export function WellnessAnalysis({ answers }: WellnessAnalysisProps) {
  const getWellnessRecommendations = () => {
    return {
      exerciseRoutines: [
        {
          name: 'Routine Énergisante',
          duration: '20 minutes',
          frequency: '3-4 fois par semaine',
          exercises: [
            'Yoga dynamique',
            'Stretching matinal',
            'Marche rapide',
            'Exercices de respiration'
          ],
          benefits: 'Boost d\'énergie, amélioration de la circulation'
        },
        {
          name: 'Routine Détente',
          duration: '15 minutes',
          frequency: 'Quotidien',
          exercises: [
            'Méditation guidée',
            'Exercices de relaxation',
            'Étirements doux',
            'Respiration profonde'
          ],
          benefits: 'Réduction du stress, meilleur sommeil'
        }
      ],
      stressManagement: [
        {
          technique: 'Respiration 4-7-8',
          description: 'Inspirez sur 4 temps, retenez sur 7, expirez sur 8',
          frequency: '2-3 fois par jour',
          benefits: 'Calme immédiat, régulation du système nerveux'
        },
        {
          technique: 'Scan corporel',
          description: 'Méditation progressive des pieds à la tête',
          frequency: 'Avant le coucher',
          benefits: 'Détente musculaire, conscience corporelle'
        }
      ],
      sleepOptimization: {
        routine: [
          'Éviter les écrans 1h avant le coucher',
          'Maintenir une température idéale (18-20°C)',
          'Créer un environnement calme et sombre',
          'Pratiquer des exercices de relaxation'
        ],
        supplements: [
          'Magnésium (300-400mg)',
          'Mélatonine naturelle',
          'Tisanes relaxantes (camomille, valériane)'
        ],
        habits: [
          'Se coucher et se lever à heures fixes',
          'Éviter la caféine après 14h',
          'Pratiquer une activité physique en journée',
          'Créer un rituel du soir apaisant'
        ]
      },
      mentalWellness: {
        dailyPractices: [
          'Méditation pleine conscience (10 min)',
          'Journal de gratitude',
          'Pauses régulières dans la journée',
          'Connexion sociale positive'
        ],
        exercises: [
          'Visualisation positive',
          'Exercices de pleine conscience',
          'Pratique de la gratitude',
          'Techniques de respiration'
        ]
      }
    };
  };

  const recommendations = getWellnessRecommendations();

  return (
    <div className="space-y-8">
      {/* Routines d'exercices */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6" />
          Routines d'exercices personnalisées
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.exerciseRoutines.map((routine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h4 className="font-medium text-rose-700 mb-3">{routine.name}</h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Durée:</span> {routine.duration}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Fréquence:</span> {routine.frequency}
                </p>
                <div>
                  <span className="font-medium text-gray-600">Exercices:</span>
                  <ul className="mt-1 space-y-1">
                    {routine.exercises.map((exercise, i) => (
                      <li key={i} className="text-gray-600 flex items-center gap-2">
                        <span>•</span> {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-rose-600">
                  <span className="font-medium">Bienfaits:</span> {routine.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gestion du stress */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6" />
          Techniques de gestion du stress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.stressManagement.map((technique, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <h4 className="font-medium text-blue-800 mb-3">{technique.technique}</h4>
              <div className="space-y-2">
                <p className="text-blue-600">{technique.description}</p>
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Fréquence:</span> {technique.frequency}
                </p>
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Bienfaits:</span> {technique.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optimisation du sommeil */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Moon className="w-6 h-6" />
          Optimisation du sommeil
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-indigo-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-indigo-800 mb-3">Routine du soir</h4>
            <ul className="space-y-2">
              {recommendations.sleepOptimization.routine.map((item, i) => (
                <li key={i} className="text-indigo-600 flex items-center gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-indigo-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-indigo-800 mb-3">Suppléments naturels</h4>
            <ul className="space-y-2">
              {recommendations.sleepOptimization.supplements.map((item, i) => (
                <li key={i} className="text-indigo-600 flex items-center gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-indigo-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-indigo-800 mb-3">Bonnes habitudes</h4>
            <ul className="space-y-2">
              {recommendations.sleepOptimization.habits.map((item, i) => (
                <li key={i} className="text-indigo-600 flex items-center gap-2">
                  <span>•</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Bien-être mental */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Bien-être mental
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-3">Pratiques quotidiennes</h4>
            <ul className="space-y-2">
              {recommendations.mentalWellness.dailyPractices.map((practice, i) => (
                <li key={i} className="text-green-600 flex items-center gap-2">
                  <span>•</span> {practice}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-green-50 rounded-xl p-6"
          >
            <h4 className="font-medium text-green-800 mb-3">Exercices de bien-être</h4>
            <ul className="space-y-2">
              {recommendations.mentalWellness.exercises.map((exercise, i) => (
                <li key={i} className="text-green-600 flex items-center gap-2">
                  <span>•</span> {exercise}
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
            conditions médicales particulières.
          </p>
        </div>
      </div>
    </div>
  );
}