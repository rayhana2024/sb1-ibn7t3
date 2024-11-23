import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Settings } from 'lucide-react';
import { useNotificationStore } from '../../store/notificationStore';
import { NotificationPreferences } from './NotificationPreferences';
import { NotificationItem } from './NotificationItem';
import { useNotifications } from '../../hooks/useNotifications';

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const { notifications, preferences } = useNotificationStore();
  const notificationService = useNotifications();
  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    if (preferences.wellnessReminders) {
      const now = new Date();
      const [hours, minutes] = preferences.notificationTime.split(':');
      const scheduleTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        parseInt(hours),
        parseInt(minutes)
      );

      if (now.getTime() >= scheduleTime.getTime()) {
        const wellnessReminders = [
          {
            type: 'wellness' as const,
            title: 'Moment de méditation',
            message: 'Prenez 5 minutes pour méditer et vous recentrer.',
            priority: 'medium' as const,
          },
          {
            type: 'care' as const,
            title: 'Hydratation',
            message: "N'oubliez pas de boire de l'eau régulièrement aujourd'hui.",
            priority: 'high' as const,
          },
          {
            type: 'routine' as const,
            title: 'Soin du visage',
            message: "C'est l'heure de votre routine du matin !",
            priority: 'high' as const,
          },
        ];

        const randomReminder = wellnessReminders[Math.floor(Math.random() * wellnessReminders.length)];
        useNotificationStore.getState().addNotification(randomReminder);
        
        notificationService.sendNotification(randomReminder.title, {
          body: randomReminder.message,
          tag: randomReminder.type,
        });
      }
    }
  }, [preferences.wellnessReminders, preferences.notificationTime]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-rose-50 rounded-full transition-colors"
      >
        <Bell className="w-5 h-5 text-rose-600" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white
                         text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-lg
                     overflow-hidden z-50"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-medium text-gray-800">Notifications</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="p-2 hover:bg-rose-50 rounded-full transition-colors"
                >
                  <Settings className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-rose-50 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {notifications.length > 0 ? (
                <div className="p-4 space-y-4">
                  <AnimatePresence>
                    {notifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  Aucune notification
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPreferences && (
          <NotificationPreferences onClose={() => setShowPreferences(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}