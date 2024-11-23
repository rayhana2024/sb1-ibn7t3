import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Droplet, Scissors, Apple, 
  Heart, Calendar, AlertTriangle 
} from 'lucide-react';
import { AnalysisCategory } from './AnalysisCategory';
import { AnalysisQuiz } from './AnalysisQuiz';
import { AnalysisResults } from './AnalysisResults';
import { PersonalCalendar } from './PersonalCalendar';
import { WellnessAnalysis } from './WellnessAnalysis';

export type Category = 'skin' | 'hair' | 'body' | 'nutrition' | 'wellness' | 'calendar';

interface CategoryInfo {
  id: Category;
  icon: typeof User;
  title: string;
  description: string;
  color: string;
}

export function PersonalAnalysis() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizResults, setQuizResults] = useState<any>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const categories: CategoryInfo[] = [
    {
      id: 'skin',
      icon: Droplet,
      title: 'Analyse de la Peau',
      description: 'Découvrez votre type de peau et obtenez des conseils personnalisés',
      color: 'rose'
    },
    {
      id: 'hair',
      icon: Scissors,
      title: 'Analyse Capillaire',
      description: 'Évaluez l\'état de vos cheveux et trouvez les soins adaptés',
      color: 'amber'
    },
    {
      id: 'body',
      icon: Heart,
      title: 'Analyse Corporelle',
      description: 'Identifiez vos besoins en matière de soins corporels',
      color: 'purple'
    },
    {
      id: 'nutrition',
      icon: Apple,
      title: 'Analyse Nutritionnelle',
      description: 'Optimisez votre alimentation pour votre beauté',
      color: 'green'
    },
    {
      id: 'wellness',
      icon: User,
      title: 'Sport & Bien-être',
      description: 'Évaluez votre routine bien-être et gestion du stress',
      color: 'blue'
    },
    {
      id: 'calendar',
      icon: Calendar,
      title: 'Calendrier Personnalisé',
      description: 'Planifiez vos soins sur mesure',
      color: 'indigo'
    }
  ];

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    if (category === 'calendar') {
      setShowQuiz(false);
    } else {
      setShowQuiz(true);
    }
  };

  const handleQuizComplete = (results: any, answers: Record<string, string>) => {
    setQuizResults(results);
    setQuizAnswers(answers);
    setShowQuiz(false);
  };

  const renderAnalysis = () => {
    if (!selectedCategory || showQuiz) return null;

    switch (selectedCategory) {
      case 'wellness':
        return <WellnessAnalysis answers={quizAnswers} />;
      case 'calendar':
        return (
          <PersonalCalendar onClose={() => setSelectedCategory(null)} />
        );
      default:
        return (
          <AnalysisResults
            category={selectedCategory}
            results={quizResults}
            answers={quizAnswers}
            onClose={() => {
              setSelectedCategory(null);
              setQuizResults(null);
              setQuizAnswers({});
            }}
          />
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">
          Analyse Personnalisée
        </h2>
        <p className="text-gray-600">
          Découvrez des recommandations sur mesure pour votre routine beauté et bien-être
        </p>
      </div>

      {!selectedCategory && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <AnalysisCategory
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
              color={category.color}
              onClick={() => handleCategorySelect(category.id)}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {selectedCategory && showQuiz && (
          <AnalysisQuiz
            category={selectedCategory}
            onComplete={handleQuizComplete}
            onClose={() => {
              setSelectedCategory(null);
              setShowQuiz(false);
            }}
          />
        )}

        {renderAnalysis()}
      </AnimatePresence>

      <div className="mt-8 p-4 bg-amber-50 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-amber-800 mb-1">
            Précautions importantes
          </h4>
          <p className="text-sm text-amber-700">
            Les recommandations sont données à titre indicatif. En cas de doute ou de
            condition médicale particulière, consultez un professionnel de santé.
            Testez toujours les nouveaux produits sur une petite zone avant utilisation.
          </p>
        </div>
      </div>
    </div>
  );
}