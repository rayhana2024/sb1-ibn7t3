import { useEffect } from 'react';
import { useRoutineStore } from '../../store/routineStore';
import { BeautyRoutine } from '../../types/routines';

// Routine de test
const testRoutine: BeautyRoutine = {
  id: 'test-routine-1',
  title: 'Routine Test du Matin',
  description: 'Une routine complète pour commencer la journée',
  timeOfDay: 'morning',
  skinType: 'combination',
  duration: 'complete',
  careType: 'face',
  steps: [
    {
      id: 'step-1',
      title: 'Nettoyage doux',
      description: 'Nettoyer le visage avec un produit doux',
      naturalTip: 'Utilisez de l\'eau micellaire maison à la camomille',
      icon: '🧴',
      duration: 2
    },
    {
      id: 'step-2',
      title: 'Tonique naturel',
      description: 'Tonifier la peau pour la préparer aux soins',
      naturalTip: 'L\'eau de rose est un excellent tonique naturel',
      icon: '💧',
      duration: 1
    }
  ],
  likes: 0,
  shared: false,
  createdBy: 'system'
};

export function RoutineTest() {
  const { 
    routines,
    savedRoutines,
    progress,
    saveRoutine,
    completeRoutine,
    completeStep,
    shareRoutine
  } = useRoutineStore();

  // Ajouter la routine de test au démarrage
  useEffect(() => {
    if (!routines.some(r => r.id === testRoutine.id)) {
      useRoutineStore.setState({ routines: [...routines, testRoutine] });
    }
  }, []);

  const runTests = () => {
    // Test 1: Sauvegarder une routine
    saveRoutine(testRoutine.id);
    console.log('Test 1 - Routine sauvegardée:', 
      savedRoutines.includes(testRoutine.id) ? '✅' : '❌');

    // Test 2: Compléter une étape
    completeStep(testRoutine.id, 'step-1');
    console.log('Test 2 - Étape complétée:', 
      progress.some(p => p.steps.includes('step-1')) ? '✅' : '❌');

    // Test 3: Compléter la routine
    completeRoutine(testRoutine.id);
    console.log('Test 3 - Routine complétée:', 
      progress.some(p => p.routineId === testRoutine.id && p.completed) ? '✅' : '❌');

    // Test 4: Partager la routine
    shareRoutine(testRoutine.id);
    console.log('Test 4 - Routine partagée:', 
      routines.find(r => r.id === testRoutine.id)?.shared ? '✅' : '❌');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-medium text-gray-800 mb-4">
        Test des fonctionnalités
      </h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">
            État actuel :
          </p>
          <ul className="text-sm space-y-1">
            <li>Routines: {routines.length}</li>
            <li>Routines sauvegardées: {savedRoutines.length}</li>
            <li>Progrès enregistrés: {progress.length}</li>
          </ul>
        </div>

        <button
          onClick={runTests}
          className="w-full py-2 bg-rose-500 text-white rounded-lg
                   hover:bg-rose-600 transition-colors duration-200"
        >
          Lancer les tests
        </button>
      </div>
    </div>
  );
}