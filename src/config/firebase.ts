import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence, initializeFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBToMhdzjMyGStRU38nuiMQ7g4OSIXX_Fw",
  authDomain: "glowify-175e4.firebaseapp.com",
  projectId: "glowify-175e4",
  storageBucket: "glowify-175e4.firebasestorage.app",
  messagingSenderId: "821325740690",
  appId: "1:821325740690:web:ac733daea4cd9c7d32c44b",
  measurementId: "G-7C8PY555G0"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with settings for better offline support
const db = initializeFirestore(app, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});

export const auth = getAuth(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support persistence');
  }
});

// Export the db instance
export { db };

export default app;