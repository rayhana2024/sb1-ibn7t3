import { motion } from 'framer-motion';
import { X, Sun, Cloud, Snowflake, Flower } from 'lucide-react';

interface SeasonalRemediesProps {
  onClose: () => void;
}

export function SeasonalRemedies({ onClose }: SeasonalRemediesProps) {
  const seasons = [
    {
      name: 'Printemps',
      icon: <Flower className="w-6 h-6" />,
      remedies: [
        {
          title: 'Détox printanière',
          ingredients: ['Ortie', 'Pissenlit', 'Bouleau'],
          method: 'Infusion détoxifiante à boire le matin',
          benefits: 'Purifie l\'organisme et ravive l\'éclat de la peau'
        },
        {
          title: 'Masque revitalisant',
          ingredients: ['Argile verte', 'Miel', 'Citron'],
          method: 'Appliquer 15 minutes sur le visage',
          benefits: 'Purifie et réveille la peau'
        }
      ]
    },
    {
      name: 'Été',
      icon: <Sun className="w-6 h-6" />,
      remedies: [
        {
          title: 'Brume rafraîchissante',
          ingredients: ['Eau de rose', 'Aloe vera', 'Menthe'],
          method: 'Vaporiser sur le visage et le corps',
          benefits: 'Hydrate et rafraîchit la peau'
        },
        {
          title: 'Masque après-soleil',
          ingredients: ['Yaourt', 'Concombre', 'Aloe vera'],
          method: 'Appliquer 20 minutes sur les zones exposées',
          benefits: 'Apaise et répare la peau'
        }
      ]
    },
    {
      name: 'Automne',
      icon: <Cloud className="w-6 h-6" />,
      remedies: [
        {
          title: 'Huile fortifiante',
          ingredients: ['Huile d\'argan', 'Romarin', 'Lavande'],
          method: 'Masser le cuir chevelu avant le shampooing',
          benefits: 'Renforce les cheveux et prévient la chute'
        },
        {
          title: 'Baume nourrissant',
          ingredients: ['Karité', 'Miel', 'Calendula'],
          method: 'Appliquer sur les zones sèches',
          benefits: 'Protège et nourrit la peau'
        }
      ]
    },
    {
      name: 'Hiver',
      icon: <Snowflake className="w-6 h-6" />,
      remedies: [
        {
          title: 'Baume protecteur',
          ingredients: ['Cire d\'abeille', 'Huile d\'amande', 'Vitamine E'],
          method: 'Appliquer avant de sortir',
          benefits: 'Protège du froid et du vent'
        },
        {
          title: 'Masque hydratant',
          ingredients: ['Avocat', 'Miel', 'Huile de coco'],
          method: 'Appliquer 30 minutes sur le visage',
          benefits: 'Hydrate intensément la peau'
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4
                      flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-800">Remèdes Saisonniers</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {seasons.map((season, index) => (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-rose-50/50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-rose-600">{season.icon}</div>
                <h3 className="text-lg font-medium text-rose-800">
                  {season.name}
                </h3>
              </div>

              <div className="space-y-6">
                {season.remedies.map((remedy, i) => (
                  <div key={i} className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-rose-700 mb-3">
                      {remedy.title}
                    </h4>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-rose-600">
                          Ingrédients:
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {remedy.ingredients.map((ing, j) => (
                            <span
                              key={j}
                              className="px-2 py-1 bg-rose-100 text-rose-700
                                       rounded-full text-sm"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-rose-600">
                          Méthode:
                        </span>
                        <p className="text-rose-600 text-sm mt-1">
                          {remedy.method}
                        </p>
                      </div>

                      <div>
                        <span className="text-sm font-medium text-rose-600">
                          Bienfaits:
                        </span>
                        <p className="text-rose-600 text-sm mt-1">
                          {remedy.benefits}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}