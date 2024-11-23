import { motion } from 'framer-motion';
import { X, Clock, Star, AlertTriangle } from 'lucide-react';
import { MakeupTip } from '../../types/makeup';
import { Image } from '../common/Image';

interface TipDetailProps {
  tip: MakeupTip;
  onClose: () => void;
}

export function TipDetail({ tip, onClose }: TipDetailProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-50 text-green-700';
      case 'medium':
        return 'bg-amber-50 text-amber-700';
      case 'pro':
        return 'bg-rose-50 text-rose-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'Facile';
      case 'medium':
        return 'Intermédiaire';
      case 'pro':
        return 'Professionnel';
      default:
        return difficulty;
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
        <div className="relative">
          <Image
            src={tip.image || ''}
            alt={tip.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full
                     hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium text-gray-800">{tip.title}</h2>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-rose-500" />
                <span className="text-sm text-gray-600">{tip.duration}</span>
              </span>
              <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(tip.difficulty)}`}>
                {getDifficultyLabel(tip.difficulty)}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-8">{tip.description}</p>

          <div className="space-y-8">
            {/* Étapes */}
            <section>
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Étapes à suivre
              </h3>
              <div className="space-y-4">
                {tip.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-rose-50/50 rounded-xl p-4"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-rose-500 text-white
                                   rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Produits recommandés */}
            {tip.products && tip.products.length > 0 && (
              <section>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Produits recommandés
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tip.products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-4"
                    >
                      <span className="text-gray-700">{product}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Note importante */}
            <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-800 mb-1">
                  Note importante
                </h4>
                <p className="text-sm text-amber-700">
                  Testez toujours les produits sur une petite zone avant une utilisation complète.
                  En cas de réaction, cessez l'utilisation et consultez un professionnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}