import { create } from "zustand";

interface StartType {
  isStart: boolean;
}

export const startStore = create<StartType>((set) => ({
  isStart: false,
}));
