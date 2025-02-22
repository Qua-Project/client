import { create } from "zustand";

interface UserState {
  isLoggedIn: boolean;
  userInfo: any | null;
  setLoggedIn: (status: boolean) => void;
  setUserInfo: (info: any | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  userInfo: null,
  setLoggedIn: (status) => set({ isLoggedIn: status }),
  setUserInfo: (info) => set({ userInfo: info }),
}));
