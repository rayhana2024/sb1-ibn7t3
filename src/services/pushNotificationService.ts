import { PushNotifications } from '@capacitor/push-notifications';
import { useNotificationStore } from '../store/notificationStore';
import { toast } from 'react-hot-toast';

export const initializePushNotifications = async () => {
  try {
    // Request permission
    const permission = await PushNotifications.requestPermissions();
    
    if (permission.receive === 'granted') {
      // Register for push notifications
      await PushNotifications.register();

      // Setup listeners
      PushNotifications.addListener('registration', (token) => {
        console.log('Push registration token:', token.value);
        // Send token to your server
      });

      PushNotifications.addListener('pushNotificationReceived', (notification) => {
        // Add notification to store
        useNotificationStore.getState().addNotification({
          title: notification.title || '',
          message: notification.body || '',
          type: 'notification',
          priority: 'medium'
        });

        // Play notification sound
        const audio = new Audio('/assets/sounds/notification.mp3');
        audio.play().catch(console.error);

        // Show toast
        toast(notification.title || '', {
          icon: '🔔',
          duration: 4000
        });
      });

      PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
        // Handle notification action (e.g., navigate to specific screen)
        console.log('Push action performed:', notification.actionId);
      });
    }
  } catch (error) {
    console.error('Error initializing push notifications:', error);
  }
};