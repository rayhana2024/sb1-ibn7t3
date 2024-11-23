import { motion } from 'framer-motion';
import { X, Leaf, AlertTriangle } from 'lucide-react';

interface HerbalGuideProps {
  onClose: () => void;
}

export function HerbalGuide({ onClose }: HerbalGuideProps) {
  const herbs = [
    {
      name: 'Aloe Vera',
      benefits: ['Hydratant', 'Cicatrisant', 'Anti-inflammatoire'],
      usage: 'Appliquez directement le gel sur la peau ou les cheveux. Pour les cheveux, mélangez avec votre après-shampooing habituel.',
      precautions: 'Ne pas appliquer sur des plaies ouvertes. Éviter en cas d\'allergie aux liliacées.',
      alerts: ['Faire un test cutané 24h avant', 'Usage externe uniquement']
    },
    {
      name: 'Lavande',
      benefits: ['Apaisant', 'Antiseptique', 'Anti-stress'],
      usage: 'En huile essentielle diluée pour massage, en infusion pour bain relaxant, ou en eau florale pour tonifier la peau.',
      precautions: 'Toujours diluer l\'huile essentielle. Déconseillé aux femmes enceintes et allaitantes.',
      alerts: ['Ne pas utiliser pure sur la peau', 'Éviter pendant la grossesse']
    },
    {
      name: 'Romarin',
      benefits: ['Stimulant capillaire', 'Tonifiant', 'Antioxydant'],
      usage: 'En infusion pour rinçage des cheveux, en huile de massage pour le cuir chevelu.',
      precautions: 'Éviter en cas d\'hypertension. Ne pas utiliser le soir car stimulant.',
      alerts: ['Contre-indiqué en cas d\'épilepsie', 'Peut interagir avec certains médicaments']
    },
    {
      name: 'Camomille',
      benefits: ['Apaisant', 'Anti-inflammatoire', 'Éclaircissant naturel'],
      usage: 'En infusion pour compresses apaisantes, en rinçage pour éclaircir naturellement les cheveux.',
      precautions: 'Éviter en cas d\'allergie aux astéracées.',
      alerts: ['Peut provoquer une photosensibilisation', 'Tester avant utilisation prolongée']
    },
    {
      name: 'Menthe Poivrée',
      benefits: ['Rafraîchissant', 'Purifiant', 'Stimulant'],
      usage: 'En infusion pour tonifier la peau, en huile essentielle diluée pour le cuir chevelu gras.',
      precautions: 'Ne pas utiliser pure. Éviter sur les peaux sensibles.',
      alerts: ['Ne pas utiliser chez les enfants de moins de 7 ans', 'Peut irriter les yeux et les muqueuses']
    },
    {
      name: 'Arbre à Thé (Tea Tree)',
      benefits: ['Antibactérien', 'Antifongique', 'Purifiant'],
      usage: 'En huile essentielle diluée pour traiter l\'acné, les pellicules, ou en soin des ongles.',
      precautions: 'Toujours diluer. Ne pas utiliser pur sur la peau.',
      alerts: ['Usage externe uniquement', 'Peut provoquer des irritations si non dilué']
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
                      flex items-center justify-between z-10">
          <h2 className="text-xl font-medium text-gray-800">Guide des Plantes</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Avertissement général */}
        <div className="bg-amber-50 p-4 border-b border-amber-100">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-800 mb-1">
                Précautions importantes
              </h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Toujours faire un test cutané avant première utilisation</li>
                <li>• Consulter un professionnel en cas de doute ou de condition médicale</li>
                <li>• Les plantes peuvent interagir avec certains médicaments</li>
                <li>• En cas de grossesse ou d'allaitement, consulter un médecin</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {herbs.map((herb, index) => (
            <motion.div
              key={herb.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-green-50/50 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-medium text-green-800">{herb.name}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Bienfaits</h4>
                  <ul className="list-disc list-inside text-green-600">
                    {herb.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-green-700 mb-2">Utilisation</h4>
                  <p className="text-green-600">{herb.usage}</p>
                </div>

                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-700 mb-2">Précautions</h4>
                  <p className="text-amber-600">{herb.precautions}</p>
                  {herb.alerts && (
                    <div className="mt-3 space-y-2">
                      {herb.alerts.map((alert, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                          <span className="text-sm text-amber-700">{alert}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}