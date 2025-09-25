import { create } from "zustand";

type SelectedIdStore = {
  selectedIds: string[];
  setSelectedIds: (ids: string[] | ((prev: string[]) => string[])) => void;
};

export const useSelectedIdStore = create<SelectedIdStore>((set) => ({
  selectedIds: [],
  setSelectedIds: (ids) =>
    set((state) => ({
      selectedIds: typeof ids === "function" ? ids(state.selectedIds) : ids,
    })),
}));
