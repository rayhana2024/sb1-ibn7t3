import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus, Loader } from 'lucide-react';
import { Product } from '../../types/shop';
import { ProductCard } from './ProductCard';
import { ProductDetail } from './ProductDetail';
import { ProductFilters } from './ProductFilters';
import { AddAffiliateProduct } from './AddAffiliateProduct';
import { useAffiliateStore } from '../../store/affiliateStore';
import { useAuthStore } from '../../store/authStore';

export function NaturalShop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { products, isLoading, error, fetchProducts } = useAffiliateStore();
  const { user } = useAuthStore();

  // ID de l'administrateur
  const ADMIN_ID = 'admin123';
  const isAdmin = user?.id === ADMIN_ID;

  // Fetch products on mount and when admin adds/updates products
  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Une erreur est survenue lors du chargement des produits.</p>
        <button
          onClick={() => fetchProducts()}
          className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-xl hover:bg-rose-600"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium text-rose-800">Boutique Naturelle</h2>
        <div className="flex items-center gap-4">
          {isAdmin && (
            <button
              onClick={() => setShowAddProduct(true)}
              className="px-4 py-2 bg-rose-500 text-white rounded-xl
                       hover:bg-rose-600 transition-colors duration-200
                       flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Ajouter un produit
            </button>
          )}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-xl border border-rose-200 hover:bg-rose-50
                     transition-colors duration-200"
          >
            <Filter className="w-5 h-5 text-rose-600" />
          </button>
        </div>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200
                   focus:outline-none focus:ring-2 focus:ring-rose-500/50"
        />
      </div>

      <AnimatePresence>
        {showFilters && <ProductFilters onClose={() => setShowFilters(false)} />}
      </AnimatePresence>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader className="w-8 h-8 text-rose-500 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      )}

      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Aucun produit trouvé.</p>
        </div>
      )}

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            isAdmin={isAdmin}
          />
        )}
        {showAddProduct && isAdmin && (
          <AddAffiliateProduct onClose={() => setShowAddProduct(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}