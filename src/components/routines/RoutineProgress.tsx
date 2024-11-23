import { motion } from 'framer-motion';
import { Trophy, Sparkles } from 'lucide-react';

interface RoutineProgressProps {
  completedToday: number;
}

export function RoutineProgress({ completedToday }: RoutineProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-rose-100 to-rose-50 rounded-2xl p-6 mb-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-rose-800 mb-2">
            Votre progression aujourd'hui
          </h3>
          <p className="text-rose-600">
            {completedToday > 0
              ? `Bravo ! Vous avez complété ${completedToday} routine${
                  completedToday > 1 ? 's' : ''
                } aujourd'hui.`
              : 'Commencez votre première routine de la journée !'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Trophy className="w-8 h-8 text-rose-500" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <Sparkles className="w-6 h-6 text-rose-400" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}