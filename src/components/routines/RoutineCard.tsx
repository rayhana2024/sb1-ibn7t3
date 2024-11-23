import { motion } from 'framer-motion';
import { Clock, Award, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { BeautyRoutine } from '../../types/routines';
import { useRoutineStore } from '../../store/routineStore';

interface RoutineCardProps {
  routine: BeautyRoutine;
  isSaved: boolean;
  onClick: () => void;
}

export function RoutineCard({ routine, isSaved, onClick }: RoutineCardProps) {
  const { saveRoutine, unsaveRoutine } = useRoutineStore();

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSaved) {
      unsaveRoutine(routine.id);
    } else {
      saveRoutine(routine.id);
    }
  };

  const totalDuration = routine.steps.reduce((acc, step) => acc + step.duration, 0);

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
            {routine.timeOfDay}
          </span>
          <button
            onClick={handleSave}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            {isSaved ? (
              <BookmarkCheck className="w-5 h-5 text-rose-600" />
            ) : (
              <BookmarkPlus className="w-5 h-5 text-rose-400" />
            )}
          </button>
        </div>

        <h3 className="text-lg font-medium text-gray-800 mb-2">{routine.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{routine.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{totalDuration} min</span>
          </div>
          {routine.likes > 0 && (
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-rose-500" />
              <span>{routine.likes} likes</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}