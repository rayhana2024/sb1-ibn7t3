export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  tags: string[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likes: number;
  createdAt: string;
}

export interface CommunityTip {
  id: string;
  title: string;
  description: string;
  author: string;
  likes: number;
  category: 'skin' | 'hair' | 'body' | 'wellness';
}