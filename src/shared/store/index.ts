import { create } from 'zustand';

type State = {
  step: number;
};

type Actions = {
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
};

export const useStore = create<State & Actions>((set) => ({
  step: 0,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  resetStep: () => set({ step: 0 }),
}));
