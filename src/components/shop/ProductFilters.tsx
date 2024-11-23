import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ProductCategory } from '../../types/shop';

interface ProductFiltersProps {
  onClose: () => void;
}

export function ProductFilters({ onClose }: ProductFiltersProps) {
  const categories: ProductCategory[] = [
    'skincare',
    'haircare',
    'bodycare',
    'wellness',
    'accessories'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-2xl shadow-lg p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-800">Filtrer les produits</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Catégories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégories
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="text-rose-500 focus:ring-rose-500"
                />
                <span className="text-gray-700 capitalize">
                  {category === 'skincare' ? 'Soin du visage' :
                   category === 'haircare' ? 'Soin des cheveux' :
                   category === 'bodycare' ? 'Soin du corps' :
                   category === 'wellness' ? 'Bien-être' : 'Accessoires'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Prix */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prix
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                value="all"
                defaultChecked
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">Tous les prix</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                value="under-20"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">Moins de 20€</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                value="20-50"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">20€ - 50€</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                value="over-50"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">Plus de 50€</span>
            </label>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Certifications
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">Bio</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">Naturel</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">Vegan</span>
            </label>
          </div>
        </div>

        {/* Disponibilité */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Disponibilité
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">En stock uniquement</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="text-rose-500 focus:ring-rose-500"
              />
              <span className="text-gray-700">Promotions</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          className="px-4 py-2 text-rose-600 hover:text-rose-700
                   transition-colors duration-200"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </motion.div>
  );
}