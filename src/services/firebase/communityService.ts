import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Post, Comment, CommunityTip } from '../../types/community';

export const communityService = {
  async createPost(post: Post) {
    try {
      await setDoc(doc(db, 'posts', post.id), post);
      return post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  async getPost(postId: string) {
    try {
      const postDoc = await getDoc(doc(db, 'posts', postId));
      return postDoc.exists() ? postDoc.data() as Post : null;
    } catch (error) {
      console.error('Error getting post:', error);
      throw error;
    }
  },

  async getAllPosts() {
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => doc.data() as Post);
    } catch (error) {
      console.error('Error getting all posts:', error);
      throw error;
    }
  },

  async createComment(postId: string, comment: Comment) {
    try {
      await setDoc(doc(db, `posts/${postId}/comments`, comment.id), comment);
      return comment;
    } catch (error) {
      console.error('Error creating comment:', error);
      throw error;
    }
  },

  async getPostComments(postId: string) {
    try {
      const q = query(collection(db, `posts/${postId}/comments`), orderBy('createdAt', 'asc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => doc.data() as Comment);
    } catch (error) {
      console.error('Error getting post comments:', error);
      throw error;
    }
  },

  async createTip(tip: CommunityTip) {
    try {
      await setDoc(doc(db, 'communityTips', tip.id), tip);
      return tip;
    } catch (error) {
      console.error('Error creating community tip:', error);
      throw error;
    }
  },

  async getAllTips() {
    try {
      const querySnapshot = await getDocs(collection(db, 'communityTips'));
      return querySnapshot.docs.map(doc => doc.data() as CommunityTip);
    } catch (error) {
      console.error('Error getting all community tips:', error);
      throw error;
    }
  }
};