import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post } from '../../types/community';

interface CommunityFeedProps {
  searchTerm: string;
}

export function CommunityFeed({ searchTerm }: CommunityFeedProps) {
  // Exemple de posts pour la démo
  const posts: Post[] = [
    {
      id: '1',
      userId: 'user1',
      userName: 'Sophie',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      content: 'J\'ai testé le masque à l\'avocat, ma peau est super douce ! 🥑✨',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883',
      likes: 24,
      comments: 5,
      tags: ['soin', 'naturel', 'masque'],
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      userId: 'user2',
      userName: 'Marie',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      content: 'Routine du matin avec des produits 100% naturels 🌿',
      likes: 18,
      comments: 3,
      tags: ['routine', 'bio', 'morning'],
      createdAt: new Date().toISOString()
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {filteredPosts.map((post) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.userAvatar}
                alt={post.userName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-800">{post.userName}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-gray-500">
              <button className="flex items-center gap-2 hover:text-rose-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-rose-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-rose-500 transition-colors">
                <Share2 className="w-5 h-5" />
                Partager
              </button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}