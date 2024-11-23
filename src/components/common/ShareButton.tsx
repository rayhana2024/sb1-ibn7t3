import { Share } from '@capacitor/share';
import { Share2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ShareButtonProps {
  title: string;
  description: string;
  url: string;
  className?: string;
}

export function ShareButton({ title, description, url, className = '' }: ShareButtonProps) {
  const handleShare = async () => {
    try {
      await Share.share({
        title,
        text: description,
        url,
        dialogTitle: 'Partager avec'
      });
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error('Impossible de partager le contenu');
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`p-2 hover:bg-rose-50 rounded-full transition-colors ${className}`}
    >
      <Share2 className="w-5 h-5 text-rose-600" />
    </button>
  );
}