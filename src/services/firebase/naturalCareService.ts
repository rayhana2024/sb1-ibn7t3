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
import { NaturalRecipe, NaturalCareSection } from '../../types/natural-care';

export const naturalCareService = {
  async createRecipe(recipe: NaturalRecipe) {
    try {
      await setDoc(doc(db, 'naturalRecipes', recipe.id), recipe);
      return recipe;
    } catch (error) {
      console.error('Error creating natural recipe:', error);
      throw error;
    }
  },

  async getRecipe(recipeId: string) {
    try {
      const recipeDoc = await getDoc(doc(db, 'naturalRecipes', recipeId));
      return recipeDoc.exists() ? recipeDoc.data() as NaturalRecipe : null;
    } catch (error) {
      console.error('Error getting natural recipe:', error);
      throw error;
    }
  },

  async getAllRecipes() {
    try {
      const querySnapshot = await getDocs(collection(db, 'naturalRecipes'));
      return querySnapshot.docs.map(doc => doc.data() as NaturalRecipe);
    } catch (error) {
      console.error('Error getting all natural recipes:', error);
      throw error;
    }
  },

  async getRecipesByCategory(category: string) {
    try {
      const q = query(collection(db, 'naturalRecipes'), where('category', '==', category));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => doc.data() as NaturalRecipe);
    } catch (error) {
      console.error('Error getting recipes by category:', error);
      throw error;
    }
  },

  async updateRecipe(recipeId: string, updates: Partial<NaturalRecipe>) {
    try {
      await updateDoc(doc(db, 'naturalRecipes', recipeId), updates);
    } catch (error) {
      console.error('Error updating natural recipe:', error);
      throw error;
    }
  },

  async deleteRecipe(recipeId: string) {
    try {
      await deleteDoc(doc(db, 'naturalRecipes', recipeId));
    } catch (error) {
      console.error('Error deleting natural recipe:', error);
      throw error;
    }
  },

  async createSection(section: NaturalCareSection) {
    try {
      await setDoc(doc(db, 'naturalCareSections', section.id), section);
      return section;
    } catch (error) {
      console.error('Error creating natural care section:', error);
      throw error;
    }
  },

  async getAllSections() {
    try {
      const querySnapshot = await getDocs(collection(db, 'naturalCareSections'));
      return querySnapshot.docs.map(doc => doc.data() as NaturalCareSection);
    } catch (error) {
      console.error('Error getting all natural care sections:', error);
      throw error;
    }
  }
};