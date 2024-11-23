import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { BeautyRoutine } from '../../types/routines';
import { useRoutineStore } from '../../store/routineStore';

interface RoutinePlayerProps {
  routine: BeautyRoutine;
  onClose: () => void;
}

export function RoutinePlayer({ routine, onClose }: RoutinePlayerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [timer, setTimer] = useState(routine.steps[0].duration * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const { completeStep, completeRoutine } = useRoutineStore();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleStepComplete = () => {
    const stepId = routine.steps[currentStep].id;
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
      completeStep(routine.id, stepId);
    }

    if (currentStep < routine.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setTimer(routine.steps[currentStep + 1].duration * 60);
      setIsTimerRunning(false);
    } else {
      completeRoutine(routine.id);
      // Afficher le message de félicitations
      setShowCongrats(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const [showCongrats, setShowCongrats] = useState(false);

  if (showCongrats) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          </motion.div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            Félicitations ! 🎉
          </h3>
          <p className="text-gray-600 mb-6">
            Vous avez terminé votre routine beauté avec succès !
            Votre peau vous remercie pour ces moments de soin. ✨
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-rose-500 text-white rounded-xl
                     hover:bg-rose-600 transition-colors duration-200"
          >
            Terminer
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        className="bg-white rounded-2xl max-w-2xl w-full p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-medium text-gray-800">{routine.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              Étape {currentStep + 1} sur {routine.steps.length}
            </span>
            <span className="text-sm font-medium text-rose-600">
              {Math.round(((currentStep + 1) / routine.steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-rose-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / routine.steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-rose-50/50 rounded-xl p-6 mb-6"
          >
            <h4 className="text-lg font-medium text-gray-800 mb-4">
              {routine.steps[currentStep].title}
            </h4>
            <p className="text-gray-600 mb-4">
              {routine.steps[currentStep].description}
            </p>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-sm text-rose-600 italic">
                💡 Astuce naturelle : {routine.steps[currentStep].naturalTip}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-4 py-2 bg-rose-500 text-white rounded-xl
                           hover:bg-rose-600 transition-colors duration-200
                           flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  {isTimerRunning ? 'Pause' : 'Démarrer'}
                </button>
                <div className="text-2xl font-medium text-rose-600">
                  {formatTime(timer)}
                </div>
              </div>
              <button
                onClick={() => {
                  setTimer(routine.steps[currentStep].duration * 60);
                  setIsTimerRunning(false);
                }}
                className="p-2 hover:bg-rose-100 rounded-full
                         transition-colors duration-200"
              >
                <RotateCcw className="w-4 h-4 text-rose-600" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
                setTimer(routine.steps[currentStep - 1].duration * 60);
                setIsTimerRunning(false);
              }
            }}
            disabled={currentStep === 0}
            className="px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-xl
                     transition-colors duration-200 disabled:opacity-50
                     disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Précédent
          </button>
          <button
            onClick={handleStepComplete}
            className="px-4 py-2 bg-rose-500 text-white rounded-xl
                     hover:bg-rose-600 transition-colors duration-200
                     flex items-center gap-2"
          >
            {currentStep === routine.steps.length - 1 ? (
              <>
                Terminer
                <CheckCircle className="w-4 h-4" />
              </>
            ) : (
              <>
                Suivant
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}