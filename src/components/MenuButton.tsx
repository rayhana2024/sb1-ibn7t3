import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuButtonProps {
  icon: LucideIcon;
  label: string;
  description: string;
  color: string;
  onClick: () => void;
}

export function MenuButton({ icon: Icon, label, description, color, onClick }: MenuButtonProps) {
  const colorClasses = {
    rose: 'bg-rose-50 hover:bg-rose-100/50 border-rose-200 group-hover:text-rose-700',
    green: 'bg-green-50 hover:bg-green-100/50 border-green-200 group-hover:text-green-700',
    purple: 'bg-purple-50 hover:bg-purple-100/50 border-purple-200 group-hover:text-purple-700',
    blue: 'bg-blue-50 hover:bg-blue-100/50 border-blue-200 group-hover:text-blue-700',
    amber: 'bg-amber-50 hover:bg-amber-100/50 border-amber-200 group-hover:text-amber-700',
    indigo: 'bg-indigo-50 hover:bg-indigo-100/50 border-indigo-200 group-hover:text-indigo-700'
  };

  const iconColorClasses = {
    rose: 'text-rose-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    blue: 'text-blue-500',
    amber: 'text-amber-500',
    indigo: 'text-indigo-500'
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-start p-6 rounded-2xl shadow-lg border
                 backdrop-blur-sm transition-all duration-300 w-full
                 ${colorClasses[color as keyof typeof colorClasses]} group`}
    >
      <Icon 
        className={`w-10 h-10 mb-4 transition-transform duration-300
                   group-hover:-translate-y-1 ${iconColorClasses[color as keyof typeof iconColorClasses]}`}
      />
      <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-gray-900">
        {label}
      </h3>
      <p className="text-sm text-gray-600 group-hover:text-gray-700">
        {description}
      </p>
    </motion.button>
  );
}