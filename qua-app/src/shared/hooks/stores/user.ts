import { create } from "zustand";

interface UserState {
  userInfo: any | null;
  username: string;
  gender: "MALE" | "FEMALE" | "OTHERS";
  birthDate: number[],
  setUserInfo: (info: any | null) => void;
  setUsername: (username: string) => void;
  setGender: (gender: "MALE" | "FEMALE" | "OTHERS") => void;
  setBirthDate: (birthDate: number[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  username: "",
  gender: "MALE",
  birthDate: [0,0,0],
  setUserInfo: (info) => set({ userInfo: info }),
  setUsername: (username) => set({ username: username }),
  setGender: (gender) => set({ gender: gender }),
  setBirthDate: (birthDate) => set({ birthDate: birthDate }),
}));
