import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { BeautyRoutine } from '../../types/routines';

export const routineService = {
  async createRoutine(routine: BeautyRoutine) {
    try {
      await setDoc(doc(db, 'routines', routine.id), routine);
      return routine;
    } catch (error) {
      console.error('Error creating routine:', error);
      throw error;
    }
  },

  async getRoutine(routineId: string) {
    try {
      const routineDoc = await getDoc(doc(db, 'routines', routineId));
      return routineDoc.exists() ? routineDoc.data() as BeautyRoutine : null;
    } catch (error) {
      console.error('Error getting routine:', error);
      throw error;
    }
  },

  async getUserRoutines(userId: string) {
    try {
      const q = query(collection(db, 'routines'), where('createdBy', '==', userId));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => doc.data() as BeautyRoutine);
    } catch (error) {
      console.error('Error getting user routines:', error);
      throw error;
    }
  },

  async updateRoutine(routineId: string, updates: Partial<BeautyRoutine>) {
    try {
      await updateDoc(doc(db, 'routines', routineId), updates);
    } catch (error) {
      console.error('Error updating routine:', error);
      throw error;
    }
  },

  async deleteRoutine(routineId: string) {
    try {
      await deleteDoc(doc(db, 'routines', routineId));
    } catch (error) {
      console.error('Error deleting routine:', error);
      throw error;
    }
  }
};