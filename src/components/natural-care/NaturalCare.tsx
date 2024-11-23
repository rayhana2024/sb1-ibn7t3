import { useState } from 'react';
import { Search, Filter, Leaf, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NaturalRecipe, CareCategory } from '../../types/natural-care';
import { RecipeCard } from './RecipeCard';
import { RecipeDetail } from './RecipeDetail';
import { HerbalGuide } from './HerbalGuide';
import { AyurvedicTips } from './AyurvedicTips';
import { SeasonalRemedies } from './SeasonalRemedies';
import { AromatherapyGuide } from './AromatherapyGuide';
import { MassageGuide } from './MassageGuide';
import { naturalCareSections } from '../../data/natural-care-sections';

export function NaturalCare() {
  const [selectedCategory, setSelectedCategory] = useState<CareCategory>('all');
  const [selectedRecipe, setSelectedRecipe] = useState<NaturalRecipe | null>(null);
  const [showHerbalGuide, setShowHerbalGuide] = useState(false);
  const [showAyurvedicTips, setShowAyurvedicTips] = useState(false);
  const [showSeasonalRemedies, setShowSeasonalRemedies] = useState(false);
  const [showAromatherapyGuide, setShowAromatherapyGuide] = useState(false);
  const [showMassageGuide, setShowMassageGuide] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Array<{ id: CareCategory; label: string; icon: JSX.Element }> = [
    { id: 'all', label: 'Tous les soins', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'face', label: 'Visage', icon: <Leaf className="w-5 h-5" /> },
    { id: 'body', label: 'Corps', icon: <Leaf className="w-5 h-5" /> },
    { id: 'hair', label: 'Cheveux', icon: <Leaf className="w-5 h-5" /> },
    { id: 'massage', label: 'Massages', icon: <Leaf className="w-5 h-5" /> },
    { id: 'aromatherapy', label: 'Aromathérapie', icon: <Leaf className="w-5 h-5" /> }
  ];

  const handleCategoryClick = (id: CareCategory) => {
    setSelectedCategory(id);
    if (id === 'massage') {
      setShowMassageGuide(true);
    } else if (id === 'aromatherapy') {
      setShowAromatherapyGuide(true);
    }
  };

  const filteredRecipes = naturalCareSections
    .filter(section => 
      selectedCategory === 'all' || section.category === selectedCategory
    )
    .flatMap(section => section.recipes || [])
    .filter(recipe => 
      !searchTerm || 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Section principale */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-rose-800">Soins Naturels</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowHerbalGuide(true)}
                className="px-4 py-2 text-sm bg-green-50 text-green-700 rounded-full
                         hover:bg-green-100 transition-colors duration-200"
              >
                Guide des plantes
              </button>
              <button
                onClick={() => setShowAyurvedicTips(true)}
                className="px-4 py-2 text-sm bg-amber-50 text-amber-700 rounded-full
                         hover:bg-amber-100 transition-colors duration-200"
              >
                Conseils ayurvédiques
              </button>
              <button
                onClick={() => setShowSeasonalRemedies(true)}
                className="px-4 py-2 text-sm bg-rose-50 text-rose-700 rounded-full
                         hover:bg-rose-100 transition-colors duration-200"
              >
                Remèdes saisonniers
              </button>
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un soin naturel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>

          {/* Catégories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                         transition-colors duration-200 ${
                           selectedCategory === cat.id
                             ? 'bg-rose-500 text-white'
                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                         }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grille de recettes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>

          {/* Message si aucune recette trouvée */}
          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                Aucune recette trouvée pour cette catégorie.
              </p>
            </div>
          )}
        </div>

        {/* Panneau latéral */}
        <div className="w-full md:w-80 space-y-6">
          {/* Conseil du jour */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-medium text-green-800 mb-4">
              Conseil du jour
            </h3>
            <p className="text-green-700 text-sm">
              Massez votre visage avec de l'huile de rose musquée pendant 5 minutes
              avant le coucher pour stimuler la régénération cellulaire.
            </p>
          </motion.div>

          {/* Ingrédient du moment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-medium text-amber-800 mb-4">
              Ingrédient du moment
            </h3>
            <div className="space-y-2">
              <h4 className="font-medium text-amber-700">Miel de Manuka</h4>
              <p className="text-amber-700 text-sm">
                Antibactérien puissant, il aide à purifier la peau et accélérer
                la cicatrisation.
              </p>
            </div>
          </motion.div>

          {/* Rituels lunaires */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6"
          >
            <h3 className="text-lg font-medium text-purple-800 mb-4">
              Rituels lunaires
            </h3>
            <p className="text-purple-700 text-sm">
              Nouvelle lune : moment idéal pour un masque détoxifiant à l'argile
              et préparer vos élixirs de plantes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Modales */}
      <AnimatePresence>
        {selectedRecipe && (
          <RecipeDetail
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        )}
        {showHerbalGuide && (
          <HerbalGuide onClose={() => setShowHerbalGuide(false)} />
        )}
        {showAyurvedicTips && (
          <AyurvedicTips onClose={() => setShowAyurvedicTips(false)} />
        )}
        {showSeasonalRemedies && (
          <SeasonalRemedies onClose={() => setShowSeasonalRemedies(false)} />
        )}
        {showAromatherapyGuide && (
          <AromatherapyGuide onClose={() => setShowAromatherapyGuide(false)} />
        )}
        {showMassageGuide && (
          <MassageGuide onClose={() => setShowMassageGuide(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}