import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { User } from '../../types/auth';

export const userService = {
  async createUser(user: User) {
    try {
      const userRef = doc(db, 'users', user.id);
      await setDoc(userRef, {
        ...user,
        savedRoutines: [],
        savedRecipes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  async getUser(userId: string) {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      return userDoc.exists() ? userDoc.data() as User : null;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },

  async updateUser(userId: string, updates: Partial<User>) {
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // Créer l'utilisateur s'il n'existe pas
        await this.createUser({
          id: userId,
          ...updates,
        } as User);
        return;
      }

      await updateDoc(userRef, {
        ...updates,
        updatedAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  async ensureUserExists(userId: string, userData: Partial<User>) {
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        await this.createUser({
          id: userId,
          ...userData,
        } as User);
      }
    } catch (error) {
      console.error('Error ensuring user exists:', error);
      throw error;
    }
  }
};