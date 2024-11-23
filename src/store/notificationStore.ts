import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Notification, NotificationType, NotificationPriority } from '../types/notifications';

interface NotificationStore {
  notifications: Notification[];
  preferences: {
    routineReminders: boolean;
    wellnessReminders: boolean;
    careReminders: boolean;
    notificationTime: string;
    frequency: 'daily' | 'weekly';
  };
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  removeNotification: (id: string) => void;
  updatePreferences: (preferences: Partial<NotificationStore['preferences']>) => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set) => ({
      notifications: [],
      preferences: {
        routineReminders: true,
        wellnessReminders: true,
        careReminders: true,
        notificationTime: '09:00',
        frequency: 'daily',
      },

      addNotification: (notification) =>
        set((state) => ({
          notifications: [
            {
              ...notification,
              id: Math.random().toString(36).substring(7),
              timestamp: Date.now(),
              read: false,
            },
            ...state.notifications,
          ],
        })),

      markAsRead: (id) =>
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        })),

      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),

      updatePreferences: (preferences) =>
        set((state) => ({
          preferences: { ...state.preferences, ...preferences },
        })),

      clearAll: () => set({ notifications: [] }),
    }),
    {
      name: 'notifications',
    }
  )
);