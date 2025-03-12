import { create } from "zustand";

interface SkinTypeState {
  skinType: string;
  ubunScore: number;
  subunScore: number;
  mingamScore: number;
  skinConcern: string;
  setSkinType: (skinType: string) => void;
  setUbunScore: (ubunScore: number) => void;
  setSubunScore: (subunScore: number) => void;
  setMingamScore: (mingamScore: number) => void;
  setSkinConcern: (skinConcern: string) => void;
}

export const useSkinTypeStore = create<SkinTypeState>((set) => ({
  skinType: "",
  ubunScore: 0,
  subunScore: 0,
  mingamScore: 0,
  skinConcern: "",
  setSkinType: (skinType) => set({ skinType: skinType }),
  setUbunScore: (ubunScore) => set({ ubunScore: ubunScore }),
  setSubunScore: (subunScore) => set({ subunScore: subunScore }),
  setMingamScore: (mingamScore) => set({ mingamScore: mingamScore }),
  setSkinConcern: (skinConcern) => set({ skinConcern: skinConcern }),
}));