export type MessageType = 'user' | 'bot' | 'system';
export type ChatStyle = 'formal' | 'fun' | 'motivating';
export type BotMode = 'chat' | 'quiz' | 'routine' | 'wellness';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: number;
  animation?: string;
}

export interface ChatState {
  messages: Message[];
  style: ChatStyle;
  mode: BotMode;
  userProfile?: UserProfile;
}

export interface UserProfile {
  skinType?: string;
  hairType?: string;
  concerns?: string[];
  goals?: string[];
}