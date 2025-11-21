import { create } from "zustand";

type UIState = {
  activeSection: string;
  setActiveSection: (name: string) => void;
  
};

export const useUIStore = create<UIState>((set) => ({
  activeSection: "Dashboard",
  setActiveSection: (name) => set({ activeSection: name }),
}));
