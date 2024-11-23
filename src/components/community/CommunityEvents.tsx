import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

export function CommunityEvents() {
  const events = [
    {
      id: '1',
      title: 'Atelier Cosmétiques Naturels',
      date: '2024-03-15',
      time: '14:00',
      location: 'Paris',
      participants: 12,
      maxParticipants: 15,
      description: 'Apprenez à créer vos propres cosmétiques naturels.'
    },
    {
      id: '2',
      title: 'Masterclass Soins du Visage',
      date: '2024-03-20',
      time: '10:00',
      location: 'Lyon',
      participants: 8,
      maxParticipants: 10,
      description: 'Découvrez les techniques professionnelles de soin du visage.'
    }
  ];

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <motion.article
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            {event.title}
          </h3>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span>
                {new Date(event.date).toLocaleDateString()} à {event.time}
              </span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-rose-500" />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Users className="w-5 h-5 text-rose-500" />
              <span>
                {event.participants}/{event.maxParticipants} participants
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{event.description}</p>

          <button
            className="w-full py-2 bg-rose-500 text-white rounded-xl
                     hover:bg-rose-600 transition-colors"
          >
            S'inscrire
          </button>
        </motion.article>
      ))}
    </div>
  );
}