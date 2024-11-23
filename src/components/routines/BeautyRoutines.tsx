import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Clock, Share2, BookmarkPlus, Award } from 'lucide-react';
import { useRoutineStore } from '../../store/routineStore';
import { RoutineCard } from './RoutineCard';
import { RoutineDetail } from './RoutineDetail';
import { RoutineFilters } from './RoutineFilters';
import { RoutineProgress } from './RoutineProgress';
import { QuickRoutineQuiz } from './QuickRoutineQuiz';
import { BeautyRoutine } from '../../types/routines';
import { beautyRoutines } from '../../data/routines';

export function BeautyRoutines() {
  const [selectedRoutine, setSelectedRoutine] = useState<BeautyRoutine | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const { filters, savedRoutines, progress } = useRoutineStore();

  // Initialiser les routines au premier rendu
  useState(() => {
    if (useRoutineStore.getState().routines.length === 0) {
      useRoutineStore.setState({ routines: beautyRoutines });
    }
  });

  const filteredRoutines = useRoutineStore.getState().routines.filter((routine) => {
    if (filters.timeOfDay && routine.timeOfDay !== filters.timeOfDay) return false;
    if (filters.skinType && routine.skinType !== filters.skinType) return false;
    if (filters.duration && routine.duration !== filters.duration) return false;
    if (filters.careType && routine.careType !== filters.careType) return false;
    return true;
  });

  const completedToday = progress.filter(
    (p) => new Date(p.date).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium text-rose-800">Routines Beauté</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowQuiz(true)}
            className="px-4 py-2 bg-rose-500 text-white rounded-xl
                     hover:bg-rose-600 transition-colors duration-200"
          >
            Quiz personnalisé
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-xl border border-rose-200 hover:bg-rose-50
                     transition-colors duration-200"
          >
            <Filter className="w-5 h-5 text-rose-600" />
          </button>
        </div>
      </div>

      <RoutineProgress completedToday={completedToday} />

      <AnimatePresence>
        {showFilters && <RoutineFilters onClose={() => setShowFilters(false)} />}
        {showQuiz && <QuickRoutineQuiz onClose={() => setShowQuiz(false)} />}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredRoutines.map((routine) => (
          <RoutineCard
            key={routine.id}
            routine={routine}
            isSaved={savedRoutines.includes(routine.id)}
            onClick={() => setSelectedRoutine(routine)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedRoutine && (
          <RoutineDetail
            routine={selectedRoutine}
            onClose={() => setSelectedRoutine(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}