import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Image, Tag } from 'lucide-react';

interface CreatePostProps {
  onClose: () => void;
}

export function CreatePost({ onClose }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
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
        className="bg-white rounded-2xl max-w-xl w-full"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-xl font-medium text-gray-800">Créer un post</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Partagez votre expérience..."
            className="w-full h-32 p-3 rounded-xl border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-rose-500/50
                     resize-none"
          />

          <div className="flex items-center gap-2">
            <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
              <Image className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                placeholder="Ajouter un tag..."
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200
                         focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              />
            </div>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full
                           flex items-center gap-2"
                >
                  #{tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="w-4 h-4 flex items-center justify-center
                             hover:bg-rose-200 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-end pt-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-rose-500 text-white rounded-xl
                       hover:bg-rose-600 transition-colors"
            >
              Publier
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}