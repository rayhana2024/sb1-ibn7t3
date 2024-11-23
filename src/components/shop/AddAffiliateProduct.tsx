import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Plus, Trash } from 'lucide-react';
import { useAffiliateStore } from '../../store/affiliateStore';
import { Product, AffiliatePartner } from '../../types/shop';

interface AddAffiliateProductProps {
  onClose: () => void;
}

export function AddAffiliateProduct({ onClose }: AddAffiliateProductProps) {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    category: 'skincare',
    image: '',
    rating: 5,
    reviews: 0,
    ingredients: [],
    benefits: [],
    usage: '',
    inStock: true,
    isNatural: true,
    isBio: false,
    tags: [],
    affiliate: {
      partner: 'amazon',
      link: '',
    }
  });

  const [currentTag, setCurrentTag] = useState('');
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [currentBenefit, setCurrentBenefit] = useState('');

  const { addProduct } = useAffiliateStore();

  const handleSubmit = () => {
    if (formData.name && formData.description && formData.affiliate?.link) {
      addProduct({
        ...formData,
        id: Date.now().toString(),
      } as Product);
      onClose();
    }
  };

  const handleAddTag = () => {
    if (currentTag && !formData.tags?.includes(currentTag)) {
      setFormData({
        ...formData,
        tags: [...(formData.tags || []), currentTag]
      });
      setCurrentTag('');
    }
  };

  const handleAddIngredient = () => {
    if (currentIngredient && !formData.ingredients?.includes(currentIngredient)) {
      setFormData({
        ...formData,
        ingredients: [...(formData.ingredients || []), currentIngredient]
      });
      setCurrentIngredient('');
    }
  };

  const handleAddBenefit = () => {
    if (currentBenefit && !formData.benefits?.includes(currentBenefit)) {
      setFormData({
        ...formData,
        benefits: [...(formData.benefits || []), currentBenefit]
      });
      setCurrentBenefit('');
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
                      flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-800">
            Ajouter un produit affilié
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Informations de base */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image du produit
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="URL de l'image"
                  className="flex-1 px-4 py-2 rounded-xl border border-gray-200
                           focus:outline-none focus:ring-2 focus:ring-rose-500/50"
                />
                <button className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                  <Upload className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom du produit
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50
                         resize-none h-32"
              />
            </div>
          </div>

          {/* Prix et catégorie */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix (€)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              >
                <option value="skincare">Soin du visage</option>
                <option value="haircare">Soin des cheveux</option>
                <option value="bodycare">Soin du corps</option>
                <option value="wellness">Bien-être</option>
              </select>
            </div>
          </div>

          {/* Informations d'affiliation */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Plateforme d'affiliation
              </label>
              <select
                value={formData.affiliate?.partner}
                onChange={(e) => setFormData({
                  ...formData,
                  affiliate: {
                    ...formData.affiliate,
                    partner: e.target.value as AffiliatePartner
                  }
                })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              >
                <option value="amazon">Amazon</option>
                <option value="sephora">Sephora</option>
                <option value="nocibe">Nocibé</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lien d'affiliation
              </label>
              <input
                type="text"
                value={formData.affiliate?.link}
                onChange={(e) => setFormData({
                  ...formData,
                  affiliate: {
                    ...formData.affiliate,
                    link: e.target.value
                  }
                })}
                className="w-full px-4 py-2 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50"
                placeholder="Ajouter un tag"
              />
              <button
                onClick={handleAddTag}
                className="p-2 bg-rose-500 text-white rounded-xl"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full
                           flex items-center gap-2"
                >
                  {tag}
                  <button
                    onClick={() => setFormData({
                      ...formData,
                      tags: formData.tags?.filter(t => t !== tag)
                    })}
                    className="hover:bg-rose-100 rounded-full p-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Boutons de validation */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800
                       transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-rose-500 text-white rounded-xl
                       hover:bg-rose-600 transition-colors"
            >
              Ajouter le produit
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}