import { motion } from 'framer-motion';
import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { Product } from '../../types/shop';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const handleAffiliateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.affiliate?.link) {
      window.open(product.affiliate.link, '_blank');
    }
  };

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {(product.isNatural || product.isBio) && (
          <div className="absolute top-2 left-2 flex gap-2">
            {product.isNatural && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                Naturel
              </span>
            )}
            {product.isBio && (
              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                Bio
              </span>
            )}
          </div>
        )}
        {product.affiliate && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 bg-amber-500 text-white text-xs rounded-full">
              {product.affiliate.partner}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} avis)
            </span>
          </div>
          <span className="font-medium text-rose-600">{product.price} €</span>
        </div>

        {!product.inStock && (
          <p className="text-sm text-red-500 mt-2">Rupture de stock</p>
        )}

        <button
          className={`w-full mt-4 py-2 ${
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
              <ExternalLink className="w-4 h-4" />
              Voir sur {product.affiliate.partner}
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Ajouter au panier
            </>
          )}
        </button>
      </div>
    </motion.article>
  );
}