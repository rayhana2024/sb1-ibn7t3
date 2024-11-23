import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types/shop';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

interface AffiliateStore {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  addProduct: (product: Product) => Promise<void>;
  removeProduct: (productId: string) => Promise<void>;
  updateProduct: (productId: string, updates: Partial<Product>) => Promise<void>;
  fetchProducts: () => Promise<void>;
}

export const useAffiliateStore = create<AffiliateStore>()(
  persist(
    (set, get) => ({
      products: [],
      isLoading: false,
      error: null,
      
      fetchProducts: async () => {
        set({ isLoading: true, error: null });
        try {
          const querySnapshot = await getDocs(collection(db, 'products'));
          const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Product[];
          
          set({ products, isLoading: false });
        } catch (error) {
          console.error('Error fetching products:', error);
          set({ error: 'Erreur lors du chargement des produits', isLoading: false });
          toast.error('Impossible de charger les produits');
        }
      },

      addProduct: async (product) => {
        set({ isLoading: true, error: null });
        try {
          const docRef = await addDoc(collection(db, 'products'), product);
          const newProduct = { ...product, id: docRef.id };
          
          set(state => ({
            products: [...state.products, newProduct],
            isLoading: false
          }));
          
          toast.success('Produit ajouté avec succès');
        } catch (error) {
          console.error('Error adding product:', error);
          set({ error: 'Erreur lors de l\'ajout du produit', isLoading: false });
          toast.error('Impossible d\'ajouter le produit');
        }
      },
      
      removeProduct: async (productId) => {
        set({ isLoading: true, error: null });
        try {
          await deleteDoc(doc(db, 'products', productId));
          
          set(state => ({
            products: state.products.filter(p => p.id !== productId),
            isLoading: false
          }));
          
          toast.success('Produit supprimé avec succès');
        } catch (error) {
          console.error('Error removing product:', error);
          set({ error: 'Erreur lors de la suppression du produit', isLoading: false });
          toast.error('Impossible de supprimer le produit');
        }
      },
      
      updateProduct: async (productId, updates) => {
        set({ isLoading: true, error: null });
        try {
          await updateDoc(doc(db, 'products', productId), updates);
          
          set(state => ({
            products: state.products.map(p =>
              p.id === productId ? { ...p, ...updates } : p
            ),
            isLoading: false
          }));
          
          toast.success('Produit mis à jour avec succès');
        } catch (error) {
          console.error('Error updating product:', error);
          set({ error: 'Erreur lors de la mise à jour du produit', isLoading: false });
          toast.error('Impossible de mettre à jour le produit');
        }
      }
    }),
    {
      name: 'affiliate-storage',
      partialize: (state) => ({ products: state.products })
    }
  )
);

// Initialize products fetch on store creation
useAffiliateStore.getState().fetchProducts().catch(console.error);