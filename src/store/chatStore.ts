import { create } from 'zustand';
import { ChatState, Message, ChatStyle, BotMode } from '../types/chat';

interface ChatStore extends ChatState {
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setStyle: (style: ChatStyle) => void;
  setMode: (mode: BotMode) => void;
  updateProfile: (profile: Partial<ChatState['userProfile']>) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  style: 'fun',
  mode: 'chat',
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: Math.random().toString(36).substring(7),
          timestamp: Date.now(),
        },
      ],
    })),
  setStyle: (style) => set({ style }),
  setMode: (mode) => set({ mode }),
  updateProfile: (profile) =>
    set((state) => ({
      userProfile: { ...state.userProfile, ...profile },
    })),
  clearMessages: () => set({ messages: [] }),
}));