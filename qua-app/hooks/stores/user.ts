// hooks/stores/user.ts
import { create } from 'zustand';

interface UserState {
  accessToken: string | null;
  userInfo: any | null;
  setAccessToken: (token: string | null) => void;
  setUserInfo: (info: any | null) => void;
  isLoggedIn: boolean; 
  setLoggedIn: (status: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  accessToken: null,
  userInfo: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setUserInfo: (info) => set({ userInfo: info }),
  isLoggedIn: false, 
  setLoggedIn: (status) => set({ isLoggedIn: status }),
}));
