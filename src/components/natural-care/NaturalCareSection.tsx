import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Bell } from 'lucide-react';
import { useNaturalCareStore } from '../../store/naturalCareStore';
import { NaturalRecipe, CareCategory } from '../../types/natural-care';
import { RecipeCard } from './RecipeCard';
import { RecipeDetail } from './RecipeDetail';
import { CategoryTabs } from './CategoryTabs';
import { SearchFilters } from './SearchFilters';
import { Notifications } from './Notifications';

export function NaturalCareSection() {
  const [selectedRecipe, setSelectedRecipe] = useState<NaturalRecipe | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CareCategory>('skin');
  const { recipes, filters, savedRecipes, notifications } = useNaturalCareStore();

  const filteredRecipes = recipes.filter((recipe) => {
    if (activeCategory && recipe.category !== activeCategory) return false;
    if (filters.tags?.length && !filters.tags.some(tag => recipe.tags.includes(tag))) return false;
    if (filters.difficulty && recipe.difficulty !== filters.difficulty) return false;
    if (filters.frequency && recipe.frequency !== filters.frequency) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        recipe.title.toLowerCase().includes(searchLower) ||
        recipe.description.toLowerCase().includes(searchLower) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium text-rose-800">Soins Naturels</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-xl border border-rose-200 hover:bg-rose-50
                     transition-colors duration-200"
          >
            <Filter className="w-5 h-5 text-rose-600" />
          </button>
          {notifications.length > 0 && (
            <button className="p-2 rounded-xl border border-rose-200 hover:bg-rose-50
                           transition-colors duration-200 relative">
              <Bell className="w-5 h-5 text-rose-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500
                           text-white text-xs rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            </button>
          )}
        </div>
      </div>

      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="relative flex items-center mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher une recette..."
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200
                   focus:outline-none focus:ring-2 focus:ring-rose-500/50"
          value={filters.search}
          onChange={(e) =>
            useNaturalCareStore.getState().setFilters({
              ...filters,
              search: e.target.value,
            })
          }
        />
      </div>

      <AnimatePresence>
        {showFilters && (
          <SearchFilters onClose={() => setShowFilters(false)} />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isSaved={savedRecipes.some((r) => r.recipeId === recipe.id)}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedRecipe && (
          <RecipeDetail
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}