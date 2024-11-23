import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Users, Sparkles, MessageCircle } from 'lucide-react';
import { CommunityFeed } from './CommunityFeed';
import { CreatePost } from './CreatePost';
import { TipsSection } from './TipsSection';
import { CommunityEvents } from './CommunityEvents';

export function Community() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [activeTab, setActiveTab] = useState<'feed' | 'tips' | 'events'>('feed');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium text-rose-800">Communauté Beauté</h2>
        <button
          onClick={() => setShowCreatePost(true)}
          className="px-4 py-2 bg-rose-500 text-white rounded-xl
                   hover:bg-rose-600 transition-colors duration-200
                   flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Partager
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher dans la communauté..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200
                   focus:outline-none focus:ring-2 focus:ring-rose-500/50"
        />
      </div>

      {/* Navigation */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('feed')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl
                   transition-colors duration-200 ${
                     activeTab === 'feed'
                       ? 'bg-rose-500 text-white'
                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
        >
          <Users className="w-5 h-5" />
          Fil d'actualité
        </button>
        <button
          onClick={() => setActiveTab('tips')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl
                   transition-colors duration-200 ${
                     activeTab === 'tips'
                       ? 'bg-rose-500 text-white'
                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
        >
          <Sparkles className="w-5 h-5" />
          Astuces
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl
                   transition-colors duration-200 ${
                     activeTab === 'events'
                       ? 'bg-rose-500 text-white'
                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
        >
          <Filter className="w-5 h-5" />
          Événements
        </button>
      </div>

      {/* Contenu principal */}
      <AnimatePresence mode="wait">
        {activeTab === 'feed' && <CommunityFeed searchTerm={searchTerm} />}
        {activeTab === 'tips' && <TipsSection searchTerm={searchTerm} />}
        {activeTab === 'events' && <CommunityEvents />}
      </AnimatePresence>

      {/* Modal de création de post */}
      <AnimatePresence>
        {showCreatePost && (
          <CreatePost onClose={() => setShowCreatePost(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}