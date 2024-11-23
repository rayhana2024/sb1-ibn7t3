import { motion } from 'framer-motion';
import { X, Clock, Droplet, Heart } from 'lucide-react';
import { Recipe } from '../../types/natural-care';

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeDetail({ recipe, onClose }: RecipeDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full
                     hover:bg-white transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium text-gray-800">{recipe.title}</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-rose-500" />
                <span className="text-sm text-gray-600">{recipe.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Droplet className="w-4 h-4 text-rose-500" />
                <span className="text-sm text-gray-600">{recipe.difficulty}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{recipe.description}</p>

          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Bienfaits</h3>
              <ul className="space-y-2">
                {recipe.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-rose-500" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Ingrédients</h3>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-gray-800 mb-3">Instructions</h3>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex space-x-3">
                    <span className="font-medium text-rose-500">{index + 1}.</span>
                    <span className="text-gray-600">{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}