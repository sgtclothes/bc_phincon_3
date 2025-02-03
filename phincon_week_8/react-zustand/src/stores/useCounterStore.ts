import { create } from "zustand";
import { CounterStore } from "../types/counter";

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    clearCounter: () => set({ count: 0 }),
}));
