import { motion } from 'framer-motion';
import { SkinAnalysis } from './SkinAnalysis';
import { HairAnalysis } from './HairAnalysis';
import { BodyAnalysis } from './BodyAnalysis';
import { WellnessAnalysis } from './WellnessAnalysis';
import { NutritionRecommendations } from './NutritionRecommendations';

interface AnalysisResultsProps {
  category?: string;
  results: any[];
  answers: Record<string, string>;
  onClose: () => void;
}

export function AnalysisResults({ category, results, answers, onClose }: AnalysisResultsProps) {
  // Fonction pour générer des recommandations personnalisées basées sur les réponses
  const getPersonalizedRecommendations = () => {
    const recommendations = {
      skinType: answers['skin-type'] || 'normal',
      concerns: answers['concerns'] || [],
      hairType: answers['hair-type'] || 'normal',
      bodyGoals: answers['body-goals'] || [],
      wellnessLevel: answers['wellness-level'] || 'moderate',
      nutritionHabits: answers['nutrition-habits'] || 'balanced'
    };

    return recommendations;
  };

  const personalizedRecommendations = getPersonalizedRecommendations();

  return (
    <div className="space-y-8">
      {category === 'skin' && (
        <SkinAnalysis answers={personalizedRecommendations} />
      )}
      
      {category === 'hair' && (
        <HairAnalysis answers={personalizedRecommendations} />
      )}
      
      {category === 'body' && (
        <BodyAnalysis answers={personalizedRecommendations} />
      )}

      {category === 'wellness' && (
        <WellnessAnalysis answers={personalizedRecommendations} />
      )}

      {category === 'nutrition' && (
        <NutritionRecommendations answers={personalizedRecommendations} />
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClose}
        className="w-full py-3 px-6 bg-rose-500 text-white rounded-xl
                   hover:bg-rose-600 transition-colors duration-200
                   shadow-lg hover:shadow-xl"
      >
        Fermer
      </motion.button>
    </div>
  );
}