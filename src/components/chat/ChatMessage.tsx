import { motion } from 'framer-motion';
import { Message } from '../../types/chat';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === 'bot';
  const isSystem = message.type === 'system';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot || isSystem ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isBot
            ? 'bg-rose-50 text-rose-800'
            : isSystem
            ? 'bg-gray-100 text-gray-600 italic'
            : 'bg-rose-500 text-white'
        }`}
      >
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="m-0">{children}</p>,
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}