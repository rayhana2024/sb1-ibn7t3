import { motion } from 'framer-motion';

export function FlowerAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute top-0 right-0 w-96 h-96"
      >
        <div className="absolute inset-0 animate-spin-slow">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="absolute w-40 h-40 transform origin-center"
              style={{
                transform: `rotate(${i * 30}deg) translateX(8rem)`,
              }}
            >
              <div className="w-8 h-8 bg-rose-200 rounded-full transform-origin-center" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute bottom-0 left-0 w-80 h-80"
      >
        <div className="absolute inset-0 animate-spin-slow">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="absolute w-32 h-32 transform origin-center"
              style={{
                transform: `rotate(${i * 45}deg) translateX(6rem)`,
              }}
            >
              <div className="w-6 h-6 bg-green-200 rounded-full transform-origin-center" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}