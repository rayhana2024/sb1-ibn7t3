import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { enableNetwork, disableNetwork } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

export function useFirebaseSync() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      enableNetwork(db).then(() => {
        toast.success('Connexion rétablie');
      }).catch(console.error);
    };

    const handleOffline = () => {
      setIsOnline(false);
      disableNetwork(db).then(() => {
        toast.warning('Mode hors ligne activé');
      }).catch(console.error);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}