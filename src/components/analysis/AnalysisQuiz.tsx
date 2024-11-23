import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Category } from './PersonalAnalysis';
import { questions } from '../../data/analysis-questions';
import { AnalysisResult } from '../../types/analysis';

interface AnalysisQuizProps {
  category: Category;
  onComplete: (results: AnalysisResult[], answers: Record<string, string>) => void;
  onClose: () => void;
}

export function AnalysisQuiz({ category, onComplete, onClose }: AnalysisQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const categoryQuestions = questions[category] || [];

  const handleAnswer = (answer: string) => {
    const newAnswers = { 
      ...answers, 
      [categoryQuestions[currentQuestion].title]: answer 
    };
    setAnswers(newAnswers);

    if (currentQuestion < categoryQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const results = generateResults(category, newAnswers);
      onComplete(results, newAnswers);
    }
  };

  const generateResults = (category: Category, answers: Record<string, string>): AnalysisResult[] => {
    // Les résultats seront générés en fonction des réponses
    return [{
      category: category,
      recommendations: [],
      routines: []
    }];
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
        className="bg-white rounded-2xl max-w-2xl w-full p-6"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-medium text-gray-800">
            Analyse personnalisée - {category}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {categoryQuestions.length > 0 ? (
          <>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} sur {categoryQuestions.length}
                </span>
                <span className="text-sm font-medium text-rose-600">
                  {Math.round(((currentQuestion + 1) / categoryQuestions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-rose-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) / categoryQuestions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            <h4 className="text-lg font-medium text-gray-800 mb-6">
              {categoryQuestions[currentQuestion].title}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categoryQuestions[currentQuestion].options.map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.value)}
                  className="p-4 text-left rounded-xl border border-rose-100
                           hover:border-rose-200 hover:bg-rose-50/50
                           transition-colors duration-200"
                >
                  <span className="font-medium text-gray-800">
                    {option.label}
                  </span>
                  {option.description && (
                    <p className="text-sm text-gray-600 mt-1">
                      {option.description}
                    </p>
                  )}
                </motion.button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600">
            Aucune question disponible pour cette catégorie.
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}