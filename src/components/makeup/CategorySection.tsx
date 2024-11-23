import { motion } from 'framer-motion';
import { MakeupTip } from '../../types/makeup';
import { Image } from '../common/Image';

interface CategorySectionProps {
  title: string;
  description: string;
  tips: MakeupTip[];
  onSelectTip: (tip: MakeupTip) => void;
}

export function CategorySection({ title, description, tips, onSelectTip }: CategorySectionProps) {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h3 className="text-2xl font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <motion.article
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            onClick={() => onSelectTip(tip)}
          >
            <div className="relative h-48">
              <Image
                src={tip.image || ''}
                alt={tip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-rose-600">
                  {tip.duration}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">{tip.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{tip.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <span className={`px-3 py-1 rounded-full ${
                  tip.difficulty === 'easy'
                    ? 'bg-green-50 text-green-600'
                    : tip.difficulty === 'medium'
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-rose-50 text-rose-600'
                }`}>
                  {tip.difficulty === 'easy' ? 'Facile' :
                   tip.difficulty === 'medium' ? 'Intermédiaire' : 'Pro'}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}