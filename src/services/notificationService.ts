import { useNotificationStore } from '../store/notificationStore';

class NotificationService {
  private static instance: NotificationService;
  private permission: NotificationPermission = 'default';
  private notificationSound: HTMLAudioElement;

  private constructor() {
    this.init();
    // Créer l'élément audio avec un son de notification doux
    this.notificationSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    this.notificationSound.volume = 0.5; // Volume à 50%
  }

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  private async init() {
    if ('Notification' in window) {
      this.permission = await Notification.permission;
      if (this.permission === 'default') {
        await this.requestPermission();
      }
    }
  }

  private async requestPermission(): Promise<void> {
    try {
      const permission = await Notification.requestPermission();
      this.permission = permission;
    } catch (error) {
      console.error('Erreur lors de la demande de permission:', error);
    }
  }

  private playNotificationSound() {
    try {
      // Réinitialiser le son au début
      this.notificationSound.currentTime = 0;
      // Jouer le son
      this.notificationSound.play().catch(error => {
        console.warn('Impossible de jouer le son de notification:', error);
      });
    } catch (error) {
      console.warn('Erreur lors de la lecture du son:', error);
    }
  }

  public async sendNotification(title: string, options: NotificationOptions = {}) {
    if (!('Notification' in window)) {
      console.warn('Les notifications ne sont pas supportées par ce navigateur');
      return;
    }

    if (this.permission !== 'granted') {
      await this.requestPermission();
    }

    if (this.permission === 'granted') {
      // Jouer le son avant d'afficher la notification
      this.playNotificationSound();

      const notification = new Notification(title, {
        icon: '/logo.png',
        badge: '/badge.png',
        ...options,
        silent: true // Désactiver le son par défaut car nous utilisons notre propre son
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    }
  }

  public scheduleNotification(
    title: string,
    options: NotificationOptions = {},
    delay: number
  ) {
    setTimeout(() => {
      this.sendNotification(title, options);
    }, delay);
  }

  public scheduleRoutineNotifications() {
    const { preferences } = useNotificationStore.getState();
    if (!preferences.routineReminders) return;

    const [hours, minutes] = preferences.notificationTime.split(':');
    const now = new Date();
    const scheduledTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      parseInt(hours),
      parseInt(minutes)
    );

    if (now > scheduledTime) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }

    const delay = scheduledTime.getTime() - now.getTime();

    const routineNotifications = [
      {
        title: 'Routine du matin',
        body: 'Il est temps de prendre soin de votre peau ! 🌟',
      },
      {
        title: 'Hydratation',
        body: "N'oubliez pas de boire de l'eau régulièrement aujourd'hui ! 💧",
      },
      {
        title: 'Moment bien-être',
        body: 'Prenez 5 minutes pour vous détendre et méditer 🧘‍♀️',
      },
    ];

    const randomNotification = routineNotifications[
      Math.floor(Math.random() * routineNotifications.length)
    ];

    this.scheduleNotification(randomNotification.title, {
      body: randomNotification.body,
      tag: 'routine',
    }, delay);
  }
}

export const notificationService = NotificationService.getInstance();