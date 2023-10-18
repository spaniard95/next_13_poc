import { create } from "zustand";

export const useStore = create<{
  name: string;
  description: string;
  age: number;
}>((set) => ({
  name: "",
  description: "",
  age: 0,
}));
