import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { questions } from '../../data/questions';
import { QuestionCard } from './QuestionCard';
import { AnalysisResults } from './AnalysisResults';
import { AnalysisResult } from '../../types/analysis';

export function AnalysisForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestionIndex].id]: value,
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      generateResults(newAnswers);
    }
  };

  const generateResults = (finalAnswers: Record<string, string>) => {
    const results: AnalysisResult[] = [
      {
        category: 'hair',
        recommendations: [
          'Utilisez un shampoing doux sans sulfates',
          'Appliquez un masque nourrissant hebdomadaire',
          'Évitez l\'eau trop chaude pour le rinçage',
        ],
        routines: [
          'Routine du matin : brossage doux, huile protectrice',
          'Routine du soir : massage du cuir chevelu, tresse de protection',
        ],
      },
      {
        category: 'wellness',
        recommendations: [
          'Pratiquez 10 minutes de méditation quotidienne',
          'Adoptez une routine de yoga matinale',
          'Privilégiez les tisanes relaxantes le soir',
        ],
        routines: [
          'Routine détente : bain aux huiles essentielles, automassage',
          'Routine énergisante : exercices de respiration, étirements doux',
        ],
      },
    ];
    
    setShowResults(true);
  };

  const restartAnalysis = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <QuestionCard
            key={currentQuestionIndex}
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            className="w-full"
          />
        ) : (
          <AnalysisResults
            results={[
              {
                category: 'hair',
                recommendations: [
                  'Utilisez un shampoing doux sans sulfates',
                  'Appliquez un masque nourrissant hebdomadaire',
                  'Évitez l\'eau trop chaude pour le rinçage',
                ],
                routines: [
                  'Routine du matin : brossage doux, huile protectrice',
                  'Routine du soir : massage du cuir chevelu, tresse de protection',
                ],
              },
              {
                category: 'wellness',
                recommendations: [
                  'Pratiquez 10 minutes de méditation quotidienne',
                  'Adoptez une routine de yoga matinale',
                  'Privilégiez les tisanes relaxantes le soir',
                ],
                routines: [
                  'Routine détente : bain aux huiles essentielles, automassage',
                  'Routine énergisante : exercices de respiration, étirements doux',
                ],
              },
            ]}
            onRestart={restartAnalysis}
          />
        )}
      </AnimatePresence>
    </div>
  );
}