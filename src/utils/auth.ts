// Simple authentication utilities using session storage
export const AUTH_CREDENTIALS = {
  username: 'admin',
  password: 'antonaxel2024'
};

export const AUTH_SESSION_KEY = 'antonaxel_admin_auth';

export interface AuthState {
  isAuthenticated: boolean;
  username: string;
  loginTime: number;
}

export const login = (username: string, password: string): boolean => {
  if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
    const authState: AuthState = {
      isAuthenticated: true,
      username,
      loginTime: Date.now()
    };
    
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(authState));
    }
    return true;
  }
  return false;
};

export const logout = (): void => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  }
};

export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const authData = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (!authData) return false;
    
    const authState: AuthState = JSON.parse(authData);
    
    // Check if session is still valid (24 hours)
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const isSessionValid = Date.now() - authState.loginTime < sessionDuration;
    
    if (!isSessionValid) {
      logout();
      return false;
    }
    
    return authState.isAuthenticated;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

export const getAuthState = (): AuthState | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const authData = sessionStorage.getItem(AUTH_SESSION_KEY);
    if (!authData) return null;
    
    return JSON.parse(authData);
  } catch (error) {
    console.error('Error getting auth state:', error);
    return null;
  }
};
