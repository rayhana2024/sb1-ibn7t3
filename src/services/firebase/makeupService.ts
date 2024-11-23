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

export interface MakeupTip {
  id: string;
  category: 'skin' | 'eyes' | 'lips' | 'contour' | 'glow' | 'brows' | 'quick';
  title: string;
  description: string;
  duration: '5min' | '10min' | '15min+';
  difficulty: 'easy' | 'medium' | 'pro';
  steps: string[];
  products?: string[];
  image?: string;
  createdAt: number;
  updatedAt: number;
}

export const makeupService = {
  async createTip(tip: MakeupTip) {
    try {
      const timestamp = Date.now();
      const newTip = {
        ...tip,
        createdAt: timestamp,
        updatedAt: timestamp
      };
      await setDoc(doc(db, 'makeupTips', tip.id), newTip);
      return newTip;
    } catch (error) {
      console.error('Error creating makeup tip:', error);
      throw error;
    }
  },

  async getTip(tipId: string) {
    try {
      const tipDoc = await getDoc(doc(db, 'makeupTips', tipId));
      return tipDoc.exists() ? tipDoc.data() as MakeupTip : null;
    } catch (error) {
      console.error('Error getting makeup tip:', error);
      throw error;
    }
  },

  async getAllTips() {
    try {
      const querySnapshot = await getDocs(collection(db, 'makeupTips'));
      return querySnapshot.docs.map(doc => doc.data() as MakeupTip);
    } catch (error) {
      console.error('Error getting all makeup tips:', error);
      throw error;
    }
  },

  async getTipsByCategory(category: MakeupTip['category']) {
    try {
      const q = query(collection(db, 'makeupTips'), where('category', '==', category));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => doc.data() as MakeupTip);
    } catch (error) {
      console.error('Error getting makeup tips by category:', error);
      throw error;
    }
  },

  async updateTip(tipId: string, updates: Partial<MakeupTip>) {
    try {
      const updatedTip = {
        ...updates,
        updatedAt: Date.now()
      };
      await updateDoc(doc(db, 'makeupTips', tipId), updatedTip);
    } catch (error) {
      console.error('Error updating makeup tip:', error);
      throw error;
    }
  },

  async deleteTip(tipId: string) {
    try {
      await deleteDoc(doc(db, 'makeupTips', tipId));
    } catch (error) {
      console.error('Error deleting makeup tip:', error);
      throw error;
    }
  }
};