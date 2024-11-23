import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar as CalendarIcon, Plus, Check } from 'lucide-react';
import { format, addDays, startOfWeek } from 'date-fns';
import { fr } from 'date-fns/locale';

interface PersonalCalendarProps {
  onClose: () => void;
}

interface CalendarEvent {
  id: string;
  date: Date;
  title: string;
  type: 'skin' | 'hair' | 'body' | 'wellness';
}

export function PersonalCalendar({ onClose }: PersonalCalendarProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    type: 'skin' as const,
  });

  const weekDays = Array.from({ length: 7 }, (_, i) => 
    addDays(startOfWeek(selectedDate), i)
  );

  const handleAddEvent = () => {
    if (newEvent.title.trim()) {
      setEvents([
        ...events,
        {
          id: Math.random().toString(36).substring(7),
          date: selectedDate,
          title: newEvent.title,
          type: newEvent.type,
        },
      ]);
      setNewEvent({ title: '', type: 'skin' });
      setShowAddEvent(false);
    }
  };

  const getEventColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'skin':
        return 'bg-rose-100 text-rose-700';
      case 'hair':
        return 'bg-amber-100 text-amber-700';
      case 'body':
        return 'bg-purple-100 text-purple-700';
      case 'wellness':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-medium text-gray-800">
          Calendrier de Soins
        </h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-rose-50 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map((date) => (
            <div
              key={date.toString()}
              className="text-center text-sm font-medium text-gray-600"
            >
              {format(date, 'EEE', { locale: fr })}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((date) => {
            const dayEvents = events.filter(
              (event) => format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
            );
            const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');

            return (
              <motion.button
                key={date.toString()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDate(date)}
                className={`p-3 rounded-xl border transition-colors duration-200
                         ${isSelected
                           ? 'border-rose-300 bg-rose-50'
                           : 'border-gray-200 hover:border-rose-200'
                         }`}
              >
                <div className="text-sm font-medium mb-1">
                  {format(date, 'd')}
                </div>
                {dayEvents.length > 0 && (
                  <div className="flex flex-col gap-1">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`text-xs px-2 py-1 rounded-full ${getEventColor(event.type)}`}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {!showAddEvent ? (
        <button
          onClick={() => setShowAddEvent(true)}
          className="w-full py-2 flex items-center justify-center gap-2
                   bg-rose-500 text-white rounded-xl hover:bg-rose-600
                   transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          Ajouter un soin
        </button>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            placeholder="Nom du soin"
            className="w-full px-4 py-2 rounded-xl border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-rose-500/50"
          />
          <select
            value={newEvent.type}
            onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value as CalendarEvent['type'] })}
            className="w-full px-4 py-2 rounded-xl border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-rose-500/50"
          >
            <option value="skin">Soin du visage</option>
            <option value="hair">Soin des cheveux</option>
            <option value="body">Soin du corps</option>
            <option value="wellness">Bien-être</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={handleAddEvent}
              className="flex-1 py-2 flex items-center justify-center gap-2
                       bg-rose-500 text-white rounded-xl hover:bg-rose-600
                       transition-colors duration-200"
            >
              <Check className="w-4 h-4" />
              Ajouter
            </button>
            <button
              onClick={() => setShowAddEvent(false)}
              className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-xl
                       hover:bg-gray-200 transition-colors duration-200"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}