import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

type SelectedIdStore = {
	selectedIds: string[];
	setSelectedIds: (ids: string[] | ((prev: string[]) => string[])) => void;
};

export const useSelectedIdStore = create<SelectedIdStore>()(
	subscribeWithSelector(
		persist(
			(set) => ({
				selectedIds: [],
				setSelectedIds: (ids) =>
					set((state) => ({
						selectedIds:
							typeof ids === "function" ? ids(state.selectedIds) : ids,
					})),
			}),
			{ name: "selected-id-storage" },
		),
	),
);
