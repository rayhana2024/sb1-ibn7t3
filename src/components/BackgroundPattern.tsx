import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export function BackgroundPattern() {
  // Générer des positions aléatoires pour les éléments
  const elements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 0.5,
    rotate: Math.random() * 360,
    type: Math.random() > 0.5 ? 'heart' : 'sparkle'
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [element.scale, element.scale * 1.1, element.scale],
            rotate: [element.rotate, element.rotate + 10, element.rotate]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          className="text-rose-200/20"
        >
          {element.type === 'heart' ? (
            <Heart className="w-6 h-6" />
          ) : (
            <Sparkles className="w-5 h-5" />
          )}
        </motion.div>
      ))}

      {/* Effet de dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 via-transparent to-pink-50/20" />
    </div>
  );
}