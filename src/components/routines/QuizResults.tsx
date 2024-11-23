import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Calendar, Heart } from 'lucide-react';
import { useRoutineStore } from '../../store/routineStore';
import { beautyRoutines } from '../../data/routines';
import { RoutinePlayer } from './RoutinePlayer';

interface QuizResultsProps {
  answers: Record<string, string>;
  onClose: () => void;
}

export function QuizResults({ answers, onClose }: QuizResultsProps) {
  const { saveRoutine } = useRoutineStore();
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const getPersonalizedRecommendations = () => {
    const skinType = answers['skin-type'];
    const timePreference = answers['time-preference'];
    const duration = answers['duration'];
    const concerns = answers['concerns'];

    const recommendations = {
      routines: beautyRoutines
        .filter(routine => {
          const matchesSkinType = routine.skinType === skinType || routine.skinType === 'all';
          const matchesTime = routine.timeOfDay === timePreference;
          const matchesDuration = routine.duration === duration;
          
          let score = 0;
          if (matchesSkinType) score += 2;
          if (matchesTime) score += 2;
          if (matchesDuration) score += 1;
          
          return { ...routine, relevanceScore: score };
        })
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, 3),
      tips: [
        {
          icon: <Sparkles className="w-5 h-5 text-amber-500" />,
          title: 'Astuce beauté',
          content: skinType === 'dry' 
            ? 'Appliquez votre crème hydratante sur peau légèrement humide pour une meilleure absorption.'
            : 'Utilisez un tonique sans alcool pour équilibrer votre peau sans l\'irriter.'
        },
        {
          icon: <Clock className="w-5 h-5 text-rose-500" />,
          title: 'Conseil timing',
          content: timePreference === 'morning'
            ? 'Privilégiez la vitamine C le matin pour protéger votre peau.'
            : 'Le soir est idéal pour les soins réparateurs et anti-âge.'
        },
        {
          icon: <Calendar className="w-5 h-5 text-indigo-500" />,
          title: 'Rituel hebdomadaire',
          content: 'Prévoyez un masque nourrissant le week-end pour un boost d\'hydratation.'
        }
      ],
      naturalRemedies: [
        {
          icon: <Heart className="w-5 h-5 text-green-500" />,
          title: 'Soin naturel recommandé',
          content: skinType === 'dry'
            ? 'Masque à l\'avocat et miel pour une hydratation intense'
            : 'Masque à l\'argile verte pour purifier la peau'
        }
      ]
    };

    return recommendations;
  };

  const recommendations = getPersonalizedRecommendations();

  if (selectedRoutine) {
    return (
      <RoutinePlayer
        routine={selectedRoutine}
        onClose={() => setSelectedRoutine(null)}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="space-y-6">
        <h4 className="text-lg font-medium text-rose-800">
          Routines recommandées
        </h4>
        <div className="grid grid-cols-1 gap-4">
          {recommendations.routines.map((routine) => (
            <motion.div
              key={routine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 bg-rose-50/50 rounded-xl cursor-pointer
                       hover:bg-rose-100/50 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-gray-800">{routine.title}</h5>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      saveRoutine(routine.id);
                    }}
                    className="px-3 py-1 text-sm bg-rose-500 text-white rounded-full
                             hover:bg-rose-600 transition-colors duration-200
                             active:transform active:scale-95"
                  >
                    Sauvegarder
                  </button>
                  <button
                    onClick={() => setSelectedRoutine(routine)}
                    className="px-3 py-1 text-sm bg-rose-600 text-white rounded-full
                             hover:bg-rose-700 transition-colors duration-200
                             active:transform active:scale-95"
                  >
                    Commencer
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{routine.description}</p>
              <div className="flex items-center gap-4 text-sm text-rose-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {routine.steps.reduce((acc, step) => acc + step.duration, 0)} min
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{routine.timeOfDay}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-lg font-medium text-rose-800">
          Conseils personnalisés
        </h4>
        <div className="space-y-4">
          {recommendations.tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
            >
              {tip.icon}
              <div>
                <h6 className="font-medium text-gray-800 mb-1">{tip.title}</h6>
                <p className="text-sm text-gray-600">{tip.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-medium text-rose-800">
          Soins naturels suggérés
        </h4>
        {recommendations.naturalRemedies.map((remedy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-3 p-4 bg-green-50/50 rounded-xl"
          >
            {remedy.icon}
            <div>
              <h6 className="font-medium text-gray-800 mb-1">{remedy.title}</h6>
              <p className="text-sm text-gray-600">{remedy.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-rose-500 text-white rounded-xl
                   hover:bg-rose-600 transition-colors duration-200"
        >
          Fermer
        </button>
      </div>
    </motion.div>
  );
}