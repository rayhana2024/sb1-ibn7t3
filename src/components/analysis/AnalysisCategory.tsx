import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnalysisCategoryProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

export function AnalysisCategory({ icon: Icon, title, description, color, onClick }: AnalysisCategoryProps) {
  const colorClasses = {
    rose: 'bg-rose-50 hover:bg-rose-100/50 border-rose-200',
    amber: 'bg-amber-50 hover:bg-amber-100/50 border-amber-200',
    purple: 'bg-purple-50 hover:bg-purple-100/50 border-purple-200',
    green: 'bg-green-50 hover:bg-green-100/50 border-green-200',
    blue: 'bg-blue-50 hover:bg-blue-100/50 border-blue-200',
    indigo: 'bg-indigo-50 hover:bg-indigo-100/50 border-indigo-200'
  };

  const iconColorClasses = {
    rose: 'text-rose-500',
    amber: 'text-amber-500',
    purple: 'text-purple-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    indigo: 'text-indigo-500'
  };

  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-6 rounded-2xl text-left transition-colors duration-200 border ${colorClasses[color as keyof typeof colorClasses]}`}
    >
      <Icon className={`w-8 h-8 mb-4 ${iconColorClasses[color as keyof typeof iconColorClasses]}`} />
      <h3 className="text-lg font-medium text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.button>
  );
}