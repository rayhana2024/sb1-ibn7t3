import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { makeupTips } from '../../data/makeupTips';
import { MakeupTip } from '../../types/makeup';
import { CategorySection } from './CategorySection';
import { TipDetail } from './TipDetail';

export function MakeupTips() {
  const [selectedTip, setSelectedTip] = useState<MakeupTip | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = {
    skin: {
      title: 'Teint Parfait',
      description: 'Techniques professionnelles pour un teint impeccable et naturel',
      tips: makeupTips.filter(tip => tip.category === 'skin')
    },
    eyes: {
      title: 'Regard & Sourcils',
      description: 'Sublimez votre regard avec des techniques adaptées à votre morphologie',
      tips: makeupTips.filter(tip => tip.category === 'eyes')
    },
    lips: {
      title: 'Lèvres Sublimes',
      description: 'Astuces pour des lèvres parfaitement définies et pulpeuses',
      tips: makeupTips.filter(tip => tip.category === 'lips')
    }
  };

  const filteredCategories = Object.entries(categories).map(([key, category]) => ({
    ...category,
    tips: category.tips.filter(tip =>
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-medium text-gray-800 mb-4">
          Astuces Makeup Pro
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos techniques professionnelles pour sublimer votre beauté naturelle
          avec des astuces simples et efficaces
        </p>
      </motion.div>

      <div className="relative mb-12">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher une astuce..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200
                   focus:outline-none focus:ring-2 focus:ring-rose-500/50"
        />
      </div>

      {filteredCategories.map((category) => (
        category.tips.length > 0 && (
          <CategorySection
            key={category.title}
            title={category.title}
            description={category.description}
            tips={category.tips}
            onSelectTip={setSelectedTip}
          />
        )
      ))}

      <AnimatePresence>
        {selectedTip && (
          <TipDetail tip={selectedTip} onClose={() => setSelectedTip(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}