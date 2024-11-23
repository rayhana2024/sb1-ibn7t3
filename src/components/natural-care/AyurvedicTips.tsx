import { motion } from 'framer-motion';
import { X, Moon, Sun, Cloud } from 'lucide-react';

interface AyurvedicTipsProps {
  onClose: () => void;
}

export function AyurvedicTips({ onClose }: AyurvedicTipsProps) {
  const doshas = [
    {
      name: 'Vata',
      icon: <Cloud className="w-6 h-6" />,
      characteristics: ['Peau sèche', 'Fine', 'Tendance aux rides'],
      recommendations: [
        'Massages à l\'huile de sésame chaude',
        'Bains aux huiles essentielles apaisantes',
        'Routine régulière et apaisante'
      ],
      herbs: ['Ashwagandha', 'Guggulu', 'Shatavari']
    },
    {
      name: 'Pitta',
      icon: <Sun className="w-6 h-6" />,
      characteristics: ['Peau sensible', 'Tendance aux rougeurs', 'Réactive'],
      recommendations: [
        'Masques rafraîchissants à l\'aloe vera',
        'Huile de coco pour le corps',
        'Éviter les soins trop stimulants'
      ],
      herbs: ['Neem', 'Manjistha', 'Brahmi']
    },
    {
      name: 'Kapha',
      icon: <Moon className="w-6 h-6" />,
      characteristics: ['Peau grasse', 'Épaisse', 'Résistante'],
      recommendations: [
        'Massages stimulants et drainants',
        'Exfoliation régulière douce',
        'Soins purifiants aux plantes'
      ],
      herbs: ['Triphala', 'Trikatu', 'Ginger']
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
          <h2 className="text-xl font-medium text-gray-800">Conseils Ayurvédiques</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {doshas.map((dosha, index) => (
            <motion.div
              key={dosha.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-amber-50/50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-amber-600">{dosha.icon}</div>
                <h3 className="text-lg font-medium text-amber-800">
                  Dosha {dosha.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-amber-700 mb-2">
                    Caractéristiques
                  </h4>
                  <ul className="list-disc list-inside text-amber-600">
                    {dosha.characteristics.map((char, i) => (
                      <li key={i}>{char}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-amber-700 mb-2">
                    Recommandations
                  </h4>
                  <ul className="list-disc list-inside text-amber-600">
                    {dosha.recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-amber-700 mb-2">
                    Herbes recommandées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dosha.herbs.map((herb, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-100 text-amber-700
                                 rounded-full text-sm"
                      >
                        {herb}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}