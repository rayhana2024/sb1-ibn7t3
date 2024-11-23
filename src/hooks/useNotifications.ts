import { useEffect } from 'react';
import { useNotificationStore } from '../store/notificationStore';
import { notificationService } from '../services/notificationService';

export function useNotifications() {
  const { preferences } = useNotificationStore();

  useEffect(() => {
    if (preferences.routineReminders || 
        preferences.wellnessReminders || 
        preferences.careReminders) {
      notificationService.scheduleRoutineNotifications();
    }
  }, [
    preferences.routineReminders,
    preferences.wellnessReminders,
    preferences.careReminders,
    preferences.notificationTime
  ]);

  return notificationService;
}