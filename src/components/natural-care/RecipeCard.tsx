import { motion } from 'framer-motion';
import { Clock, Droplet, ChevronRight } from 'lucide-react';
import { NaturalRecipe } from '../../types/natural-care';

interface RecipeCardProps {
  recipe: NaturalRecipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef'; // Image par défaut
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 p-4">
          <span className="px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-rose-600">
            {recipe.category === 'face' ? 'Visage' : 
             recipe.category === 'hair' ? 'Cheveux' : 
             recipe.category === 'body' ? 'Corps' : 
             'Soin naturel'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{recipe.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{recipe.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Droplet className="w-4 h-4" />
            <span>{recipe.difficulty === 'easy' ? 'Facile' : 
                   recipe.difficulty === 'medium' ? 'Moyen' : 'Difficile'}</span>
          </div>
          <ChevronRight className="w-5 h-5 text-rose-500" />
        </div>
      </div>
    </motion.article>
  );
}