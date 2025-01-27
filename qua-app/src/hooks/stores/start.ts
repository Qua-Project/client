import { create } from "zustand";

interface StartState {
  isStart: boolean; // OnBoarding 진행 여부
  setStart: (status: boolean) => void;
}

export const startStore = create<StartState>((set) => ({
  isStart: true, // 초기값: OnBoarding 진행 중
  setStart: (status) => set({ isStart: status }),
}));
