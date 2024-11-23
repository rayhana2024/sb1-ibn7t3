import { motion } from 'framer-motion';
import { Sparkles, Droplet, Heart } from 'lucide-react';
import { CareCategory } from '../../types/natural-care';

interface CategoryTabsProps {
  activeCategory: CareCategory;
  onCategoryChange: (category: CareCategory) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const categories: Array<{
    value: CareCategory;
    label: string;
    icon: typeof Sparkles;
    description: string;
  }> = [
    {
      value: 'hair',
      label: 'Cheveux',
      icon: Sparkles,
      description: 'Soins capillaires naturels',
    },
    {
      value: 'body',
      label: 'Corps',
      icon: Heart,
      description: 'Soins corporels et gommages',
    },
    {
      value: 'skin',
      label: 'Visage',
      icon: Droplet,
      description: 'Soins du visage et masques',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.value;

        return (
          <motion.button
            key={category.value}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategoryChange(category.value)}
            className={`p-4 rounded-xl border transition-all duration-200
                     flex flex-col items-center text-center ${
                       isActive
                         ? 'border-rose-200 bg-rose-50 text-rose-700'
                         : 'border-gray-200 hover:border-rose-200 hover:bg-rose-50/50'
                     }`}
          >
            <Icon className={`w-6 h-6 mb-2 ${
              isActive ? 'text-rose-500' : 'text-gray-400'
            }`} />
            <span className="font-medium mb-1">{category.label}</span>
            <span className="text-xs text-gray-500">{category.description}</span>
          </motion.button>
        );
      })}
    </div>
  );
}