import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useRoutineStore } from '../../store/routineStore';
import { TimeOfDay, SkinType, Duration, CareType } from '../../types/routines';

interface RoutineFiltersProps {
  onClose: () => void;
}

export function RoutineFilters({ onClose }: RoutineFiltersProps) {
  const { filters, setFilters } = useRoutineStore();

  const timeOptions: Array<{ value: TimeOfDay; label: string }> = [
    { value: 'morning', label: 'Matin' },
    { value: 'evening', label: 'Soir' },
    { value: 'weekend', label: 'Week-end' },
  ];

  const skinOptions: Array<{ value: SkinType; label: string }> = [
    { value: 'dry', label: 'Peau sèche' },
    { value: 'oily', label: 'Peau grasse' },
    { value: 'combination', label: 'Peau mixte' },
    { value: 'sensitive', label: 'Peau sensible' },
  ];

  const durationOptions: Array<{ value: Duration; label: string }> = [
    { value: 'express', label: 'Express' },
    { value: 'complete', label: 'Complet' },
  ];

  const careOptions: Array<{ value: CareType; label: string }> = [
    { value: 'face', label: 'Visage' },
    { value: 'hair', label: 'Cheveux' },
    { value: 'body', label: 'Corps' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Filtrer les routines</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Moment de la journée
          </label>
          <div className="space-y-2">
            {timeOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="timeOfDay"
                  value={option.value}
                  checked={filters.timeOfDay === option.value}
                  onChange={(e) =>
                    setFilters({ ...filters, timeOfDay: e.target.value as TimeOfDay })
                  }
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de peau
          </label>
          <div className="space-y-2">
            {skinOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="skinType"
                  value={option.value}
                  checked={filters.skinType === option.value}
                  onChange={(e) =>
                    setFilters({ ...filters, skinType: e.target.value as SkinType })
                  }
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Durée
          </label>
          <div className="space-y-2">
            {durationOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="duration"
                  value={option.value}
                  checked={filters.duration === option.value}
                  onChange={(e) =>
                    setFilters({ ...filters, duration: e.target.value as Duration })
                  }
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de soin
          </label>
          <div className="space-y-2">
            {careOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="careType"
                  value={option.value}
                  checked={filters.careType === option.value}
                  onChange={(e) =>
                    setFilters({ ...filters, careType: e.target.value as CareType })
                  }
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => setFilters({})}
          className="px-4 py-2 text-rose-600 hover:text-rose-700
                   transition-colors duration-200"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </motion.div>
  );
}