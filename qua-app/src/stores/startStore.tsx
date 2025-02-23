import { create } from "zustand";

interface StartStore {
  isStart: boolean;
}

export const startStore = create<StartStore>(() => ({
  isStart: false,
}));
