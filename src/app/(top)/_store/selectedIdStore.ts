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
			{
				name: "selected-id-storage",
				// localStorage容量超過エラーのハンドリング
				onRehydrateStorage: () => (_state, error) => {
					if (error) {
						console.error("localStorage読み込みエラー:", error);
						// selectedIdsのエラーは致命的ではないため、コンソールログのみ
					}
				},
				storage: {
					getItem: (name) => {
						try {
							const str = localStorage.getItem(name);
							return str ? JSON.parse(str) : null;
						} catch (error) {
							console.error("localStorage読み込みエラー:", error);
							return null;
						}
					},
					setItem: (name, value) => {
						try {
							localStorage.setItem(name, JSON.stringify(value));
						} catch (error) {
							console.error("localStorage保存エラー:", error);
							// selectedIdsの保存失敗は致命的ではないため、コンソールログのみ
						}
					},
					removeItem: (name) => {
						try {
							localStorage.removeItem(name);
						} catch (error) {
							console.error("localStorage削除エラー:", error);
						}
					},
				},
			},
		),
	),
);
