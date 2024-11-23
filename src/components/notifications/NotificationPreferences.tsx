import { motion } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { useNotificationStore } from '../../store/notificationStore';
import { useNotifications } from '../../hooks/useNotifications';

interface NotificationPreferencesProps {
  onClose: () => void;
}

export function NotificationPreferences({ onClose }: NotificationPreferencesProps) {
  const { preferences, updatePreferences } = useNotificationStore();
  const notificationService = useNotifications();

  const handleTestNotification = () => {
    notificationService.sendNotification('Test de notification', {
      body: 'Ceci est une notification test pour vérifier le bon fonctionnement ! ✨',
      icon: '🔔'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        className="bg-white rounded-2xl max-w-md w-full"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium text-gray-800">Préférences</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Bouton de test des notifications */}
          <button
            onClick={handleTestNotification}
            className="w-full py-2 bg-rose-500 text-white rounded-xl
                     hover:bg-rose-600 transition-colors duration-200
                     flex items-center justify-center gap-2 mb-6"
          >
            <Bell className="w-5 h-5" />
            Tester les notifications
          </button>

          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Rappels de routines</span>
              <input
                type="checkbox"
                checked={preferences.routineReminders}
                onChange={(e) =>
                  updatePreferences({ routineReminders: e.target.checked })
                }
                className="w-4 h-4 text-rose-500 rounded focus:ring-rose-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Rappels bien-être</span>
              <input
                type="checkbox"
                checked={preferences.wellnessReminders}
                onChange={(e) =>
                  updatePreferences({ wellnessReminders: e.target.checked })
                }
                className="w-4 h-4 text-rose-500 rounded focus:ring-rose-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <span className="text-gray-700">Rappels de soins</span>
              <input
                type="checkbox"
                checked={preferences.careReminders}
                onChange={(e) =>
                  updatePreferences({ careReminders: e.target.checked })
                }
                className="w-4 h-4 text-rose-500 rounded focus:ring-rose-500"
              />
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Heure des notifications
            </label>
            <input
              type="time"
              value={preferences.notificationTime}
              onChange={(e) =>
                updatePreferences({ notificationTime: e.target.value })
              }
              className="w-full px-4 py-2 rounded-xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Fréquence
            </label>
            <select
              value={preferences.frequency}
              onChange={(e) =>
                updatePreferences({
                  frequency: e.target.value as 'daily' | 'weekly',
                })
              }
              className="w-full px-4 py-2 rounded-xl border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-rose-500/50"
            >
              <option value="daily">Quotidienne</option>
              <option value="weekly">Hebdomadaire</option>
            </select>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}