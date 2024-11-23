import { motion } from 'framer-motion';
import { X, AlertTriangle, Heart, Sparkles } from 'lucide-react';

interface MassageGuideProps {
  onClose: () => void;
}

export function MassageGuide({ onClose }: MassageGuideProps) {
  const massageGuide = {
    safetyGuidelines: [
      'Toujours utiliser des mouvements doux et non agressifs',
      'Éviter les zones sensibles ou blessées',
      'Ne pas masser en cas d\'inflammation ou de problèmes circulatoires',
      'Consulter un professionnel en cas de doute',
      'Respecter le sens de la circulation sanguine',
      'Arrêter immédiatement en cas d\'inconfort'
    ],
    techniques: [
      {
        name: 'Massage Lifting Visage',
        steps: [
          'Nettoyer soigneusement le visage',
          'Appliquer une huile adaptée',
          'Effectuer des mouvements ascendants',
          'Travailler les points de pression',
          'Insister sur les zones d\'expression'
        ],
        duration: '10-15 minutes',
        benefits: 'Raffermit la peau, réduit les rides d\'expression',
        precautions: 'Éviter le contour des yeux'
      },
      {
        name: 'Massage Double Menton',
        steps: [
          'Appliquer une huile raffermissante',
          'Pincer doucement la zone',
          'Effectuer des mouvements de drainage',
          'Masser en remontant vers les oreilles',
          'Terminer par des tapotements toniques'
        ],
        duration: '5-7 minutes',
        benefits: 'Raffermit l\'ovale du visage, améliore la circulation',
        precautions: 'Mouvements doux pour éviter d\'étirer la peau'
      },
      {
        name: 'Massage Lèvres Repulpant',
        steps: [
          'Exfolier doucement les lèvres',
          'Appliquer un baume nourrissant',
          'Masser en petits cercles',
          'Tapoter légèrement',
          'Stimuler le contour des lèvres'
        ],
        duration: '3-5 minutes',
        benefits: 'Repulpe naturellement, améliore la circulation',
        precautions: 'Très doux pour éviter les irritations'
      },
      {
        name: 'Massage Ventre Détox',
        steps: [
          'Commencer par des cercles dans le sens horaire',
          'Masser en suivant le colon',
          'Effectuer des pressions douces',
          'Alterner avec des mouvements de drainage',
          'Terminer par des effleurages'
        ],
        duration: '10-15 minutes',
        benefits: 'Améliore la digestion, draine les toxines',
        precautions: 'À éviter après les repas'
      },
      {
        name: 'Massage Anti-Rides Front',
        steps: [
          'Appliquer une huile anti-âge',
          'Lisser horizontalement',
          'Effectuer des points de pression',
          'Masser en mouvements circulaires',
          'Terminer par des lissages doux'
        ],
        duration: '5-7 minutes',
        benefits: 'Détend les muscles du front, lisse les rides',
        precautions: 'Pression modérée pour ne pas tirer la peau'
      },
      {
        name: 'Massage Pommettes Sculptant',
        steps: [
          'Commencer par des effleurages',
          'Pincer-rouler délicat',
          'Effectuer des mouvements circulaires',
          'Remonter vers les tempes',
          'Terminer par des tapotements'
        ],
        duration: '5-7 minutes',
        benefits: 'Sculpte les pommettes, active la circulation',
        precautions: 'Éviter si inflammation ou couperose'
      }
    ],
    oils: [
      {
        name: 'Huile d\'amande douce',
        benefits: 'Hydratante et apaisante',
        suitableFor: 'Tous types de peau'
      },
      {
        name: 'Huile de jojoba',
        benefits: 'Non grasse, équilibrante',
        suitableFor: 'Peaux mixtes à grasses'
      },
      {
        name: 'Huile de rose musquée',
        benefits: 'Anti-âge, régénérante',
        suitableFor: 'Peaux matures'
      }
    ]
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
          <h2 className="text-xl font-medium text-gray-800">Guide des Massages</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Consignes de sécurité */}
        <div className="bg-amber-50 p-4 border-b border-amber-100">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-800 mb-2">
                Consignes de sécurité importantes
              </h3>
              <ul className="text-sm text-amber-700 space-y-1">
                {massageGuide.safetyGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span>•</span> {guideline}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Techniques de massage */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Techniques d'auto-massage
            </h3>
            <div className="space-y-6">
              {massageGuide.techniques.map((technique, index) => (
                <motion.div
                  key={technique.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rose-50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-rose-600" />
                    <h4 className="font-medium text-rose-800">{technique.name}</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-rose-700 mb-2">Étapes</h5>
                      <ol className="space-y-2">
                        {technique.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-rose-600">
                            <span className="font-medium">{i + 1}.</span> {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-medium text-rose-700 mb-2">Durée recommandée</h5>
                      <p className="text-rose-600">{technique.duration}</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-rose-700 mb-2">Bienfaits</h5>
                      <p className="text-rose-600">{technique.benefits}</p>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4">
                      <h5 className="font-medium text-amber-700 mb-2">Précautions</h5>
                      <p className="text-amber-600">{technique.precautions}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Huiles de massage */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Huiles recommandées
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {massageGuide.oils.map((oil, index) => (
                <motion.div
                  key={oil.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-green-50 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-green-600" />
                    <h4 className="font-medium text-green-800">{oil.name}</h4>
                  </div>
                  <p className="text-green-600 text-sm mb-2">{oil.benefits}</p>
                  <p className="text-green-700 text-sm font-medium">
                    Convient pour : {oil.suitableFor}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}