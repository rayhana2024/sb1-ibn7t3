import { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center space-x-2 p-4 border-t border-gray-100">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Écrivez votre message..."
        disabled={disabled}
        className="flex-1 resize-none rounded-xl border border-gray-200 p-3
                 focus:outline-none focus:ring-2 focus:ring-rose-500/50
                 disabled:opacity-50 disabled:cursor-not-allowed"
        rows={1}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        className="p-3 rounded-xl bg-rose-500 text-white
                 hover:bg-rose-600 transition-colors duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}