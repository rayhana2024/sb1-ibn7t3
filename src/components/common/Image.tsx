import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function Image({ src, alt, className = '', fallbackSrc }: ImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultFallback = "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800";

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  if (error) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <div className="text-center p-4">
          <ImageOff className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <span className="text-sm text-gray-500">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        src={src || fallbackSrc || defaultFallback}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}