import { useFirebaseSync } from './hooks/useFirebaseSync';

// Add to the top of your component
export default function App() {
  const isOnline = useFirebaseSync();
  
  // Rest of your component code...
}