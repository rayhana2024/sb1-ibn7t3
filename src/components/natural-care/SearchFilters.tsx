import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useNaturalCareStore } from '../../store/naturalCareStore';
import { Difficulty, Frequency } from '../../types/natural-care';

interface SearchFiltersProps {
  onClose: () => void;
}

export function SearchFilters({ onClose }: SearchFiltersProps) {
  const { filters, setFilters } = useNaturalCareStore();

  const difficultyOptions: Array<{ value: Difficulty; label: string }> = [
    { value: 'easy', label: 'Facile' },
    { value: 'medium', label: 'Intermédiaire' },
    { value: 'hard', label: 'Avancé' },
  ];

  const frequencyOptions: Array<{ value: Frequency; label: string }> = [
    { value: 'daily', label: 'Quotidien' },
    { value: 'weekly', label: 'Hebdomadaire' },
    { value: 'biweekly', label: 'Bi-hebdomadaire' },
    { value: 'monthly', label: 'Mensuel' },
  ];

  const commonTags = [
    'hydratant',
    'purifiant',
    'nourrissant',
    'anti-âge',
    'apaisant',
    'détox',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Filtrer les recettes</h3>
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
            Difficulté
          </label>
          <div className="space-y-2">
            {difficultyOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="difficulty"
                  value={option.value}
                  checked={filters.difficulty === option.value}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      difficulty: e.target.value as Difficulty,
                    })
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
            Fréquence
          </label>
          <div className="space-y-2">
            {frequencyOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="frequency"
                  value={option.value}
                  checked={filters.frequency === option.value}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      frequency: e.target.value as Frequency,
                    })
                  }
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {commonTags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setFilters({
                    ...filters,
                    tags: filters.tags?.includes(tag)
                      ? filters.tags.filter((t) => t !== tag)
                      : [...(filters.tags || []), tag],
                  })
                }
                className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                  filters.tags?.includes(tag)
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tag}
              </button>
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