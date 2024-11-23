import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Bell, Heart, Calendar, Sparkles, X } from 'lucide-react';
import { Notification } from '../../types/notifications';
import { useNotificationStore } from '../../store/notificationStore';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem = forwardRef<HTMLDivElement, NotificationItemProps>(
  ({ notification }, ref) => {
    const { markAsRead, removeNotification } = useNotificationStore();

    const getIcon = () => {
      switch (notification.type) {
        case 'routine':
          return <Calendar className="w-5 h-5" />;
        case 'wellness':
          return <Heart className="w-5 h-5" />;
        case 'care':
          return <Sparkles className="w-5 h-5" />;
        default:
          return <Bell className="w-5 h-5" />;
      }
    };

    const getPriorityColor = () => {
      switch (notification.priority) {
        case 'high':
          return 'bg-rose-50 border-rose-200';
        case 'medium':
          return 'bg-amber-50 border-amber-200';
        default:
          return 'bg-gray-50 border-gray-200';
      }
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`relative p-4 rounded-xl border ${getPriorityColor()}
                  ${!notification.read ? 'border-l-4' : ''}`}
        onClick={() => markAsRead(notification.id)}
      >
        <div className="flex items-start gap-3">
          <div className={`text-${notification.priority === 'high' ? 'rose' : 'amber'}-500`}>
            {getIcon()}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 mb-1">{notification.title}</h3>
            <p className="text-sm text-gray-600">{notification.message}</p>
            <span className="text-xs text-gray-500 mt-2 block">
              {new Date(notification.timestamp).toLocaleTimeString()}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeNotification(notification.id);
            }}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </motion.div>
    );
  }
);

NotificationItem.displayName = 'NotificationItem';