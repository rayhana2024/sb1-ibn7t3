export type NotificationType = 'routine' | 'care' | 'wellness' | 'reminder';
export type NotificationPriority = 'low' | 'medium' | 'high';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  priority: NotificationPriority;
  timestamp: number;
  read: boolean;
  actionUrl?: string;
  category?: string;
  icon?: string;
}