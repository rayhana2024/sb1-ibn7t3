import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, LoginCredentials, RegisterData, User } from '../types/auth';
import { toast } from 'react-hot-toast';

const ADMIN_CREDENTIALS = {
  email: 'admin@glowify.com',
  password: 'gL0w1fy#2024@Adm!n$3cur3P@ss',
  id: 'admin123',
  firstName: 'Admin',
  preferences: {
    theme: 'light',
    notifications: true,
    newsletter: true,
  },
  createdAt: new Date().toISOString(),
  lastLogin: new Date().toISOString()
} as User;

export const useAuthStore = create<AuthState & {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));

          if (credentials.email === ADMIN_CREDENTIALS.email && 
              credentials.password === ADMIN_CREDENTIALS.password) {
            set({
              user: ADMIN_CREDENTIALS,
              isAuthenticated: true,
              isLoading: false
            });
            toast.success('Connexion réussie !');
          } else {
            throw new Error('Identifiants invalides');
          }
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          toast.error(error.message);
          throw error;
        }
      },

      register: async (data) => {
        set({ isLoading: true, error: null });
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));

          const newUser: User = {
            id: Math.random().toString(36).substring(7),
            email: data.email,
            firstName: data.firstName,
            preferences: {
              theme: 'light',
              notifications: true,
              newsletter: true,
            },
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
          };

          set({
            user: newUser,
            isAuthenticated: true,
            isLoading: false
          });
          
          toast.success('Compte créé avec succès !');
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          toast.error(error.message);
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null
        });
        toast.success('Déconnexion réussie');
      },

      resetPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          if (email !== ADMIN_CREDENTIALS.email) {
            throw new Error('Email non trouvé');
          }
          
          toast.success('Instructions de réinitialisation envoyées par email');
          set({ isLoading: false });
        } catch (error: any) {
          set({ error: error.message, isLoading: false });
          toast.error(error.message);
          throw error;
        }
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);