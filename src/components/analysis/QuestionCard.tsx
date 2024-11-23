import { motion } from 'framer-motion';
import { Question } from '../../types/analysis';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: string) => void;
  className?: string;
}

export function QuestionCard({ question, onAnswer, className = '' }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg ${className}`}
    >
      <h3 className="text-xl font-medium text-rose-800 mb-6">{question.text}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(option.value)}
            className="p-4 text-left rounded-xl border border-rose-100 
                     hover:border-rose-200 hover:bg-rose-50/50 
                     transition-colors duration-200"
          >
            <span className="text-rose-700">{option.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}