import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function WelcomeMessage() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Bonjour ! Prenez soin de vous aujourd\'hui');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Bon après-midi ! Un moment pour vous ressourcer');
    } else {
      setGreeting('Bonsoir ! Accordez-vous un instant de détente');
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 w-full max-w-[1400px] mx-auto px-4"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-rose-800 mb-6
                   tracking-wide leading-snug max-w-full mx-auto text-center
                   whitespace-normal md:whitespace-nowrap overflow-hidden
                   text-ellipsis font-serif"
      >
        {greeting}
      </h1>
      
      <div className="space-y-6">
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-full mx-auto 
                   tracking-wide leading-relaxed font-light text-center
                   whitespace-normal md:whitespace-nowrap overflow-hidden
                   text-ellipsis px-2 md:px-8"
        >
          Découvrez des soins naturels, des routines personnalisées et des conseils experts pour révéler votre beauté naturelle
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 text-rose-600 
                   bg-white/50 backdrop-blur-sm rounded-full py-3 px-6
                   w-fit mx-auto shadow-sm"
        >
          <Sparkles className="w-5 h-5" />
          <p className="text-sm md:text-base font-medium tracking-wide whitespace-nowrap">
            Nouvelle recette et astuce beauté chaque jour !
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}