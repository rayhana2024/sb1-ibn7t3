export interface User {
  id: string;
  email: string;
  firstName: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
    newsletter: boolean;
  };
  createdAt: string;
  lastLogin: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData extends LoginCredentials {
  firstName: string;
}