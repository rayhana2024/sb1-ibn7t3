import { motion } from 'framer-motion';
import { X, AlertTriangle, Wind, Heart } from 'lucide-react';

interface AromatherapyGuideProps {
  onClose: () => void;
}

export function AromatherapyGuide({ onClose }: AromatherapyGuideProps) {
  const aromatherapyGuide = {
    safetyFirst: [
      'Toujours diluer les huiles essentielles avant utilisation',
      'Faire un test cutané 24h avant',
      'Ne pas utiliser pures sur la peau',
      'Éviter pendant la grossesse et l\'allaitement',
      'Tenir hors de portée des enfants',
      'Ne pas ingérer'
    ],
    basicBlends: [
      {
        name: 'Mélange relaxant',
        oils: [
          { name: 'Lavande', drops: 3 },
          { name: 'Camomille', drops: 2 },
          { name: 'Ylang-ylang', drops: 1 }
        ],
        baseOil: '30ml d\'huile de jojoba',
        usage: 'Massage doux avant le coucher',
        benefits: 'Favorise la détente et le sommeil',
        precautions: 'Éviter en cas d\'allergie aux fleurs'
      },
      {
        name: 'Mélange énergisant',
        oils: [
          { name: 'Menthe poivrée', drops: 2 },
          { name: 'Citron', drops: 2 },
          { name: 'Romarin', drops: 1 }
        ],
        baseOil: '30ml d\'huile d\'amande douce',
        usage: 'Massage tonique le matin',
        benefits: 'Stimule et dynamise',
        precautions: 'Ne pas utiliser avant l\'exposition au soleil'
      },
      {
        name: 'Mélange respiratoire',
        oils: [
          { name: 'Eucalyptus', drops: 2 },
          { name: 'Tea tree', drops: 2 },
          { name: 'Ravintsara', drops: 1 }
        ],
        baseOil: '30ml d\'huile de coco',
        usage: 'Massage thoracique doux',
        benefits: 'Facilite la respiration',
        precautions: 'Ne pas utiliser chez les asthmatiques sans avis médical'
      }
    ],
    diffusion: {
      safe: ['Lavande', 'Orange douce', 'Citron', 'Mandarine'],
      duration: '15-20 minutes maximum par heure',
      precautions: [
        'Aérer la pièce régulièrement',
        'Ne pas diffuser en continu',
        'Éviter en présence d\'animaux'
      ]
    }
  };

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
                      flex items-center justify-between z-10">
          <h2 className="text-xl font-medium text-gray-800">Guide d'Aromathérapie</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Avertissement de sécurité */}
        <div className="bg-amber-50 p-4 border-b border-amber-100">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                Précautions essentielles
              </h3>
              <ul className="text-sm text-amber-700 space-y-1">
                {aromatherapyGuide.safetyFirst.map((rule, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>•</span> {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Mélanges de base */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Mélanges sécurisés pour débutants
            </h3>
            <div className="space-y-6">
              {aromatherapyGuide.basicBlends.map((blend, index) => (
                <motion.div
                  key={blend.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-purple-50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Wind className="w-6 h-6 text-purple-600" />
                    <h4 className="font-medium text-purple-800">{blend.name}</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Composition</h5>
                      <ul className="space-y-1 text-purple-600">
                        {blend.oils.map((oil, i) => (
                          <li key={i}>
                            {oil.name}: {oil.drops} gouttes
                          </li>
                        ))}
                        <li className="mt-2">{blend.baseOil}</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Utilisation</h5>
                      <p className="text-purple-600">{blend.usage}</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Bienfaits</h5>
                      <p className="text-purple-600">{blend.benefits}</p>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4">
                      <h5 className="font-medium text-amber-700 mb-2">Précautions</h5>
                      <p className="text-amber-600">{blend.precautions}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Guide de diffusion */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Guide de diffusion sécurisée
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">
                    Huiles adaptées à la diffusion
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aromatherapyGuide.diffusion.safe.map((oil, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {oil}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-blue-700 mb-2">
                    Durée recommandée
                  </h4>
                  <p className="text-blue-600">{aromatherapyGuide.diffusion.duration}</p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-700 mb-2">
                    Précautions de diffusion
                  </h4>
                  <ul className="space-y-2">
                    {aromatherapyGuide.diffusion.precautions.map((precaution, index) => (
                      <li key={index} className="flex items-center gap-2 text-amber-600">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        {precaution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}