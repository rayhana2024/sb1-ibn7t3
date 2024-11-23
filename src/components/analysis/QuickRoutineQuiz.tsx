import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Sun, Moon, Calendar } from 'lucide-react';
import { useRoutineStore } from '../../store/routineStore';
import { SkinType, TimeOfDay, Duration } from '../../types/routines';
import { QuizResults } from './QuizResults';

interface QuickRoutineQuizProps {
  onClose: () => void;
}

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

  // Questions spécifiques selon la catégorie
  const quizQuestions = {
    skin: [
      {
        id: 'skin-type',
        question: 'Quel est votre type de peau ?',
        options: [
          { value: 'dry', label: 'Peau sèche', description: 'Tiraillements, manque de confort' },
          { value: 'oily', label: 'Peau grasse', description: 'Brillance, pores dilatés' },
          { value: 'combination', label: 'Peau mixte', description: 'Zone T grasse, joues normales' },
          { value: 'sensitive', label: 'Peau sensible', description: 'Rougeurs, réactivité' }
        ]
      },
      {
        id: 'skin-concerns',
        question: 'Quelles sont vos préoccupations principales ?',
        options: [
          { value: 'aging', label: 'Anti-âge', description: 'Rides, fermeté' },
          { value: 'acne', label: 'Acné', description: 'Imperfections, points noirs' },
          { value: 'pigmentation', label: 'Taches', description: 'Taches brunes, irrégularités' },
          { value: 'sensitivity', label: 'Sensibilité', description: 'Rougeurs, irritations' }
        ]
      }
    ],
    hair: [
      {
        id: 'hair-type',
        question: 'Quel est votre type de cheveux ?',
        options: [
          { value: 'straight', label: 'Lisses', description: 'Cheveux droits' },
          { value: 'wavy', label: 'Ondulés', description: 'Vagues naturelles' },
          { value: 'curly', label: 'Bouclés', description: 'Boucles définies' },
          { value: 'coily', label: 'Crépus', description: 'Boucles très serrées' }
        ]
      },
      {
        id: 'hair-concerns',
        question: 'Quels sont vos problèmes capillaires ?',
        options: [
          { value: 'dryness', label: 'Sécheresse', description: 'Cheveux secs et cassants' },
          { value: 'oiliness', label: 'Gras', description: 'Excès de sébum' },
          { value: 'dandruff', label: 'Pellicules', description: 'Cuir chevelu qui démange' },
          { value: 'loss', label: 'Chute', description: 'Perte de cheveux' }
        ]
      }
    ],
    body: [
      {
        id: 'body-type',
        question: 'Quel est votre type de peau corporelle ?',
        options: [
          { value: 'dry', label: 'Sèche', description: 'Tiraillements, rugosité' },
          { value: 'normal', label: 'Normale', description: 'Équilibrée' },
          { value: 'sensitive', label: 'Sensible', description: 'Réactive' },
          { value: 'mature', label: 'Mature', description: 'Manque de fermeté' }
        ]
      },
      {
        id: 'body-concerns',
        question: 'Quelles sont vos préoccupations corporelles ?',
        options: [
          { value: 'cellulite', label: 'Cellulite', description: 'Peau d\'orange' },
          { value: 'stretch', label: 'Vergetures', description: 'Marques d\'étirement' },
          { value: 'firmness', label: 'Fermeté', description: 'Relâchement cutané' },
          { value: 'circulation', label: 'Circulation', description: 'Jambes lourdes' }
        ]
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      {/* ... (reste du code du composant) ... */}
    </motion.div>
  );
}