import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useChatStore } from '../../store/chatStore';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { greetings, quickTips, routines, wellnessExercises } from '../../data/responses';

export function ChatBot() {
  const { messages, addMessage, mode } = useChatStore();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = '';
    
    if (hour >= 5 && hour < 12) {
      greeting = greetings.morning[Math.floor(Math.random() * greetings.morning.length)];
    } else if (hour >= 12 && hour < 18) {
      greeting = greetings.afternoon[Math.floor(Math.random() * greetings.afternoon.length)];
    } else {
      greeting = greetings.evening[Math.floor(Math.random() * greetings.evening.length)];
    }

    addMessage({
      type: 'bot',
      content: greeting,
    });
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (content: string) => {
    addMessage({ type: 'user', content });

    // Simuler une réponse du bot
    setTimeout(() => {
      let response = '';
      
      if (content.toLowerCase().includes('conseil') || content.toLowerCase().includes('astuce')) {
        const tips = [...quickTips.skin, ...quickTips.hair, ...quickTips.wellness];
        response = tips[Math.floor(Math.random() * tips.length)];
      } else if (content.toLowerCase().includes('routine')) {
        response = "Voici une routine simple pour votre peau :\n\n" + 
                  routines.morning.join('\n');
      } else if (content.toLowerCase().includes('stress') || content.toLowerCase().includes('détente')) {
        const exercise = wellnessExercises[Math.floor(Math.random() * wellnessExercises.length)];
        response = `${exercise.name} (${exercise.duration}) :\n\n${exercise.steps.join('\n')}`;
      } else {
        response = "Je suis là pour vous aider avec vos questions beauté et bien-être ! 🌸\n" +
                  "Vous pouvez me demander :\n" +
                  "- Des conseils beauté\n" +
                  "- Une routine de soin\n" +
                  "- Des exercices de détente";
      }

      addMessage({ type: 'bot', content: response });
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}