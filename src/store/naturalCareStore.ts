import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { NaturalRecipe, RecipeFilters, SavedRecipe } from '../types/natural-care';

interface NaturalCareState {
  recipes: NaturalRecipe[];
  savedRecipes: SavedRecipe[];
  filters: RecipeFilters;
  notifications: Array<{
    id: string;
    recipeId: string;
    time: string;
    message: string;
  }>;
  setFilters: (filters: RecipeFilters) => void;
  saveRecipe: (recipeId: string, reminder?: { enabled: boolean; time?: string }) => void;
  unsaveRecipe: (recipeId: string) => void;
  addNotification: (recipeId: string, time: string, message: string) => void;
  removeNotification: (id: string) => void;
  updateRecipeNotes: (recipeId: string, notes: string) => void;
}

export const useNaturalCareStore = create<NaturalCareState>()(
  persist(
    (set) => ({
      recipes: [],
      savedRecipes: [],
      filters: {},
      notifications: [],
      
      setFilters: (filters) => set({ filters }),
      
      saveRecipe: (recipeId, reminder) =>
        set((state) => ({
          savedRecipes: [
            ...state.savedRecipes,
            {
              recipeId,
              savedAt: new Date().toISOString(),
              reminderEnabled: reminder?.enabled ?? false,
              reminderTime: reminder?.time,
            },
          ],
        })),
      
      unsaveRecipe: (recipeId) =>
        set((state) => ({
          savedRecipes: state.savedRecipes.filter((r) => r.recipeId !== recipeId),
        })),
      
      addNotification: (recipeId, time, message) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            {
              id: Math.random().toString(36).substring(7),
              recipeId,
              time,
              message,
            },
          ],
        })),
      
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),
      
      updateRecipeNotes: (recipeId, notes) =>
        set((state) => ({
          savedRecipes: state.savedRecipes.map((recipe) =>
            recipe.recipeId === recipeId
              ? { ...recipe, notes }
              : recipe
          ),
        })),
    }),
    {
      name: 'natural-care',
    }
  )
);