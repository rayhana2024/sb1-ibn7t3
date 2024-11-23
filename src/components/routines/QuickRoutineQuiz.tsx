import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Sun, Moon, Calendar } from 'lucide-react';
import { useRoutineStore } from '../../store/routineStore';
import { SkinType, TimeOfDay, Duration } from '../../types/routines';
import { QuizResults } from './QuizResults';

interface QuickRoutineQuizProps {
  onClose: () => void;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: Array<{
    value: string;
    label: string;
    description: string;
    icon?: JSX.Element;
  }>;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'skin-type',
    question: 'Quel est votre type de peau ?',
    options: [
      {
        value: 'dry',
        label: 'Peau sèche',
        description: 'Tiraillements, manque de confort',
        icon: <Sparkles className="w-5 h-5 text-rose-500" />
      },
      {
        value: 'oily',
        label: 'Peau grasse',
        description: 'Brillance, pores dilatés'
      },
      {
        value: 'combination',
        label: 'Peau mixte',
        description: 'Zone T grasse, joues normales'
      },
      {
        value: 'sensitive',
        label: 'Peau sensible',
        description: 'Rougeurs, réactivité'
      }
    ]
  },
  {
    id: 'time-preference',
    question: 'Quand préférez-vous prendre soin de vous ?',
    options: [
      {
        value: 'morning',
        label: 'Le matin',
        description: 'Pour bien commencer la journée',
        icon: <Sun className="w-5 h-5 text-amber-500" />
      },
      {
        value: 'evening',
        label: 'Le soir',
        description: 'Pour un moment de détente',
        icon: <Moon className="w-5 h-5 text-indigo-500" />
      },
      {
        value: 'weekend',
        label: 'Le week-end',
        description: 'Pour des soins en profondeur',
        icon: <Calendar className="w-5 h-5 text-rose-500" />
      }
    ]
  },
  {
    id: 'duration',
    question: 'Combien de temps pouvez-vous consacrer à votre routine ?',
    options: [
      {
        value: 'express',
        label: 'Express (5-10 min)',
        description: 'L\'essentiel rapidement'
      },
      {
        value: 'complete',
        label: 'Complète (15-30 min)',
        description: 'Pour un soin optimal'
      }
    ]
  },
  {
    id: 'concerns',
    question: 'Quelles sont vos préoccupations principales ?',
    options: [
      {
        value: 'hydration',
        label: 'Hydratation',
        description: 'Apporter confort et souplesse'
      },
      {
        value: 'glow',
        label: 'Éclat',
        description: 'Raviver le teint terne'
      },
      {
        value: 'anti-aging',
        label: 'Anti-âge',
        description: 'Prévenir les signes du temps'
      },
      {
        value: 'purifying',
        label: 'Purification',
        description: 'Nettoyer et assainir'
      }
    ]
  }
];

export function QuickRoutineQuiz({ onClose }: QuickRoutineQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { setFilters } = useRoutineStore();

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      // Appliquer les filtres basés sur les réponses
      setFilters({
        skinType: newAnswers['skin-type'] as SkinType,
        timeOfDay: newAnswers['time-preference'] as TimeOfDay,
        duration: newAnswers['duration'] as Duration
      });
    }
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
        className="bg-white rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-medium text-gray-800">
            {showResults ? 'Vos recommandations personnalisées' : 'Trouvez votre routine idéale'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    Question {currentQuestion + 1} sur {quizQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-rose-600">
                    {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-rose-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`
                    }}
                  />
                </div>
              </div>

              <h4 className="text-lg font-medium text-gray-800 mb-6">
                {quizQuestions[currentQuestion].question}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.value)}
                    className="p-4 text-left rounded-xl border border-rose-100
                             hover:border-rose-200 hover:bg-rose-50/50
                             transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {option.icon}
                      <span className="font-medium text-gray-800">
                        {option.label}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {option.description}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <QuizResults answers={answers} onClose={onClose} />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}