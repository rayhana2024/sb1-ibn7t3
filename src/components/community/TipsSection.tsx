import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CommunityTip } from '../../types/community';

interface TipsSectionProps {
  searchTerm: string;
}

export function TipsSection({ searchTerm }: TipsSectionProps) {
  // Exemple d'astuces pour la démo
  const tips: CommunityTip[] = [
    {
      id: '1',
      title: 'Masque hydratant express',
      description: 'Mélangez du miel avec du yaourt nature pour un masque hydratant express de 10 minutes.',
      author: 'Sophie',
      likes: 45,
      category: 'skin'
    },
    {
      id: '2',
      title: 'Soin cheveux brillants',
      description: 'Rincez vos cheveux à l\'eau froide après le shampooing pour plus de brillance.',
      author: 'Marie',
      likes: 32,
      category: 'hair'
    }
  ];

  const filteredTips = tips.filter(tip =>
    tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredTips.map((tip) => (
        <motion.article
          key={tip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-rose-500" />
            <h3 className="text-lg font-medium text-gray-800">{tip.title}</h3>
          </div>

          <p className="text-gray-600 mb-4">{tip.description}</p>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Par {tip.author}</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full hover:bg-rose-100">
                ❤️ {tip.likes}
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}