import { motion } from 'framer-motion';
import { X, Star, ShoppingCart, Leaf, AlertTriangle, ExternalLink, Trash, Edit } from 'lucide-react';
import { Product } from '../../types/shop';
import { useAffiliateStore } from '../../store/affiliateStore';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  isAdmin: boolean;
}

export function ProductDetail({ product, onClose, isAdmin }: ProductDetailProps) {
  const { removeProduct } = useAffiliateStore();

  const handleAffiliateClick = () => {
    if (product.affiliate?.link) {
      window.open(product.affiliate.link, '_blank');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      removeProduct(product.id);
      onClose();
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
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-gray-800">{product.name}</h2>
            <div className="flex items-center gap-2">
              {isAdmin && (
                <>
                  <button
                    onClick={handleDelete}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full
                             transition-colors duration-200"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {/* Ajoutez la logique d'édition ici */}}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-full
                             transition-colors duration-200"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                </>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>
              <span className="font-medium text-rose-600">{product.price} €</span>
            </div>

            {product.ingredients && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Ingrédients</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.benefits && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Bienfaits</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className={`w-full py-3 ${
                product.affiliate
                  ? 'bg-amber-500 hover:bg-amber-600'
                  : 'bg-rose-500 hover:bg-rose-600'
              } text-white rounded-xl
              transition-colors duration-200
              flex items-center justify-center gap-2`}
              onClick={product.affiliate ? handleAffiliateClick : undefined}
              disabled={!product.inStock && !product.affiliate}
            >
              {product.affiliate ? (
                <>
                  <ExternalLink className="w-5 h-5" />
                  Voir sur {product.affiliate.partner}
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  {product.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
                </>
              )}
            </button>

            {product.affiliate && (
              <p className="text-xs text-gray-500 text-center">
                *En cliquant sur ce lien, vous serez redirigé vers {product.affiliate.partner}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}