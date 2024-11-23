import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Post, Comment, CommunityTip } from '../types/community';

interface CommunityState {
  posts: Post[];
  tips: CommunityTip[];
  comments: Record<string, Comment[]>;
  loading: boolean;
  error: string | null;
  addPost: (post: Post) => void;
  addTip: (tip: CommunityTip) => void;
  addComment: (postId: string, comment: Comment) => void;
  removePost: (postId: string) => void;
  removeTip: (tipId: string) => void;
  removeComment: (postId: string, commentId: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useCommunityStore = create<CommunityState>()(
  persist(
    (set) => ({
      posts: [],
      tips: [],
      comments: {},
      loading: false,
      error: null,

      addPost: (post) =>
        set((state) => ({
          posts: [post, ...state.posts],
        })),

      addTip: (tip) =>
        set((state) => ({
          tips: [tip, ...state.tips],
        })),

      addComment: (postId, comment) =>
        set((state) => ({
          comments: {
            ...state.comments,
            [postId]: [...(state.comments[postId] || []), comment],
          },
        })),

      removePost: (postId) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== postId),
        })),

      removeTip: (tipId) =>
        set((state) => ({
          tips: state.tips.filter((tip) => tip.id !== tipId),
        })),

      removeComment: (postId, commentId) =>
        set((state) => ({
          comments: {
            ...state.comments,
            [postId]: state.comments[postId]?.filter(
              (comment) => comment.id !== commentId
            ) || [],
          },
        })),

      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'community-storage',
    }
  )
);