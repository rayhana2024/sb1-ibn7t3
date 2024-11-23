import { motion } from 'framer-motion';
import { X, Clock, Share2, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { BeautyRoutine } from '../../types/routines';
import { useRoutineStore } from '../../store/routineStore';

interface RoutineDetailProps {
  routine: BeautyRoutine;
  onClose: () => void;
}

export function RoutineDetail({ routine, onClose }: RoutineDetailProps) {
  const { savedRoutines, saveRoutine, unsaveRoutine, completeStep, shareRoutine } = useRoutineStore();
  const isSaved = savedRoutines.includes(routine.id);

  const handleSave = () => {
    if (isSaved) {
      unsaveRoutine(routine.id);
    } else {
      saveRoutine(routine.id);
    }
  };

  const handleShare = () => {
    shareRoutine(routine.id);
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
                      flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-800">{routine.title}</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
            >
              <Share2 className="w-5 h-5 text-rose-600" />
            </button>
            <button
              onClick={handleSave}
              className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
            >
              {isSaved ? (
                <BookmarkCheck className="w-5 h-5 text-rose-600" />
              ) : (
                <BookmarkPlus className="w-5 h-5 text-rose-400" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
              {routine.timeOfDay}
            </span>
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
              {routine.skinType}
            </span>
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
              {routine.duration}
            </span>
          </div>

          <p className="text-gray-600 mb-8">{routine.description}</p>

          <div className="space-y-6">
            {routine.steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-rose-50/50 rounded-xl p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    <div className="bg-white rounded-lg p-3 mt-2">
                      <p className="text-sm text-rose-600 italic">
                        💡 Astuce naturelle : {step.naturalTip}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{step.duration} min</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {routine.products && routine.products.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Produits recommandés
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {routine.products.map((product) => (
                  <div
                    key={product.id}
                    className="p-4 border border-rose-100 rounded-xl"
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {product.name}
                    </span>
                    {product.natural && (
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-700
                                   rounded-full text-xs">
                        Naturel
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}