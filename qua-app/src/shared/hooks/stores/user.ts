import { create } from "zustand";

interface UserState {
  isLoggedIn: boolean;
  userInfo: any | null;
  username: string;
  gender: "MALE" | "FEMALE" | "OTHERS";
  birthDate: string;
  setLoggedIn: (status: boolean) => void;
  setUserInfo: (info: any | null) => void;
  setUsername: (username: string) => void;
  setGender: (gender: "MALE" | "FEMALE" | "OTHERS") => void;
  setBirthDate: (birthDate: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  userInfo: null,
  username: "",
  gender: "MALE",
  birthDate: "",
  setLoggedIn: (status) => set({ isLoggedIn: status }),
  setUserInfo: (info) => set({ userInfo: info }),
  setUsername: (username) => set({ username: username }),
  setGender: (gender) => set({ gender: gender }),
  setBirthDate: (birthDate) => set({ birthDate: birthDate }),
}));
