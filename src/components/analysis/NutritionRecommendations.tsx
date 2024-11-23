import { motion } from 'framer-motion';
import { Apple, Coffee, Droplet, Sun, AlertTriangle } from 'lucide-react';

interface NutritionRecommendationsProps {
  answers: Record<string, string>;
}

export function NutritionRecommendations({ answers }: NutritionRecommendationsProps) {
  const generateRecommendations = () => {
    const recommendations = {
      beautifyingFoods: [
        {
          category: 'Peau rayonnante',
          foods: [
            { name: 'Baies', benefits: 'Riches en antioxydants, protègent contre le vieillissement' },
            { name: 'Avocat', benefits: 'Acides gras essentiels pour l\'hydratation' },
            { name: 'Noix', benefits: 'Oméga-3 pour la souplesse de la peau' },
            { name: 'Patate douce', benefits: 'Bêta-carotène pour un teint lumineux' }
          ]
        },
        {
          category: 'Cheveux brillants',
          foods: [
            { name: 'Œufs', benefits: 'Protéines et biotine pour la force' },
            { name: 'Saumon', benefits: 'Oméga-3 et vitamine D pour la brillance' },
            { name: 'Épinards', benefits: 'Fer et vitamines pour la croissance' },
            { name: 'Graines de citrouille', benefits: 'Zinc pour des cheveux sains' }
          ]
        }
      ],
      hydrationTips: [
        'Commencez la journée avec un grand verre d\'eau tiède et citron',
        'Alternez eau plate et eau gazeuse pour plus de minéraux',
        'Consommez des tisanes beauté aux plantes (ortie, prêle)',
        'Enrichissez votre eau avec des fruits frais et des herbes'
      ],
      supplements: [
        {
          name: 'Collagène',
          benefits: 'Fermeté de la peau',
          dosage: '5-10g par jour',
          precautions: 'À prendre le matin à jeun'
        },
        {
          name: 'Acide hyaluronique',
          benefits: 'Hydratation profonde',
          dosage: '100-200mg par jour',
          precautions: 'À combiner avec de la vitamine C'
        },
        {
          name: 'Zinc',
          benefits: 'Santé des cheveux et des ongles',
          dosage: '15mg par jour',
          precautions: 'À prendre pendant les repas'
        }
      ],
      mealPlanning: {
        breakfast: [
          {
            name: 'Smoothie bowl beauté',
            ingredients: [
              'Baies mixtes',
              'Banane',
              'Graines de chia',
              'Lait végétal',
              'Protéine de pois'
            ],
            benefits: 'Antioxydants et protéines pour la peau'
          },
          {
            name: 'Toast complet beauté',
            ingredients: [
              'Pain complet',
              'Avocat',
              'Graines de courge',
              'Œuf poché',
              'Pousses d\'épinards'
            ],
            benefits: 'Acides gras essentiels et protéines'
          }
        ],
        snacks: [
          'Poignée de noix du Brésil (sélénium)',
          'Kiwi frais (vitamine C)',
          'Yaourt grec aux baies (probiotiques)',
          'Carotte et houmous (bêta-carotène)'
        ]
      }
    };

    return recommendations;
  };

  const recommendations = generateRecommendations();

  return (
    <div className="space-y-8">
      {/* Aliments beautifiants */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Apple className="w-6 h-6" />
          Aliments beautifiants recommandés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.beautifyingFoods.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h4 className="font-medium text-rose-700 mb-4">{category.category}</h4>
              <div className="space-y-3">
                {category.foods.map((food) => (
                  <div key={food.name} className="border-b border-rose-100 pb-2">
                    <span className="font-medium text-gray-800">{food.name}</span>
                    <p className="text-sm text-gray-600">{food.benefits}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hydratation */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Droplet className="w-6 h-6" />
          Conseils d'hydratation
        </h3>
        <div className="bg-blue-50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.hydrationTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <Droplet className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="text-gray-700">{tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compléments */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Sun className="w-6 h-6" />
          Compléments beauté
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.supplements.map((supplement) => (
            <motion.div
              key={supplement.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h4 className="font-medium text-rose-700 mb-2">{supplement.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{supplement.benefits}</p>
              <p className="text-sm font-medium text-gray-700">Dosage: {supplement.dosage}</p>
              <div className="mt-3 flex items-start gap-2 text-amber-600 text-sm">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>{supplement.precautions}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Planning repas */}
      <section>
        <h3 className="text-xl font-medium text-rose-800 mb-4 flex items-center gap-2">
          <Coffee className="w-6 h-6" />
          Idées de repas beauté
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.mealPlanning.breakfast.map((meal) => (
            <motion.div
              key={meal.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h4 className="font-medium text-rose-700 mb-3">{meal.name}</h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Ingrédients:</span>
                  <ul className="list-disc list-inside mt-1">
                    {meal.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                  <span className="font-medium">Bienfaits:</span> {meal.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 bg-green-50 rounded-xl p-6">
          <h4 className="font-medium text-green-800 mb-3">Collations beauté</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.mealPlanning.snacks.map((snack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm text-gray-700"
              >
                {snack}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}