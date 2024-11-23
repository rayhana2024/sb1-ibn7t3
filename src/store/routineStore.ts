import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BeautyRoutine, RoutineProgress, RoutineFilters } from '../types/routines';

interface RoutineState {
  routines: BeautyRoutine[];
  savedRoutines: string[]; // routine ids
  progress: RoutineProgress[];
  filters: RoutineFilters;
  setFilters: (filters: RoutineFilters) => void;
  saveRoutine: (routineId: string) => void;
  unsaveRoutine: (routineId: string) => void;
  completeRoutine: (routineId: string) => void;
  completeStep: (routineId: string, stepId: string) => void;
  shareRoutine: (routineId: string) => void;
  customizeRoutine: (routineId: string, updates: Partial<BeautyRoutine>) => void;
}

export const useRoutineStore = create<RoutineState>()(
  persist(
    (set) => ({
      routines: [],
      savedRoutines: [],
      progress: [],
      filters: {},
      
      setFilters: (filters) => set({ filters }),
      
      saveRoutine: (routineId) =>
        set((state) => ({
          savedRoutines: [...state.savedRoutines, routineId],
        })),
      
      unsaveRoutine: (routineId) =>
        set((state) => ({
          savedRoutines: state.savedRoutines.filter((id) => id !== routineId),
        })),
      
      completeRoutine: (routineId) =>
        set((state) => ({
          progress: [
            ...state.progress,
            {
              routineId,
              date: new Date().toISOString(),
              completed: true,
              steps: [],
            },
          ],
        })),
      
      completeStep: (routineId, stepId) =>
        set((state) => ({
          progress: state.progress.map((p) =>
            p.routineId === routineId
              ? { ...p, steps: [...p.steps, stepId] }
              : p
          ),
        })),
      
      shareRoutine: (routineId) =>
        set((state) => ({
          routines: state.routines.map((routine) =>
            routine.id === routineId
              ? { ...routine, shared: true }
              : routine
          ),
        })),
      
      customizeRoutine: (routineId, updates) =>
        set((state) => ({
          routines: state.routines.map((routine) =>
            routine.id === routineId
              ? { ...routine, ...updates }
              : routine
          ),
        })),
    }),
    {
      name: 'beauty-routines',
    }
  )
);