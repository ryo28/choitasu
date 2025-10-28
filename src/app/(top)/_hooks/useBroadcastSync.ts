import { useEffect } from "react";
import type { StoreApi } from "zustand";
import type { StoreSubscribeWithSelector } from "./type";

/**
 * BroadcastChannelを使用して複数タブ間でZustandストアの状態を同期するフック
 *
 * @template T - Zustandストアの型
 * @template K - 同期するキーの型
 * @param store - subscribeWithSelectorミドルウェアを使用したZustandストア
 * @param channelName - BroadcastChannelの名前（一意である必要があります）
 * @param key - 同期するストアのキー名
 *
 * @example
 * ```tsx
 * // page.tsx
 * import { useTodoStore } from "./_store/todoStore";
 * import { useBroadcastSync } from "./_hooks/useBroadcastSync";
 *
 * export default function Page() {
 *   useBroadcastSync(useTodoStore, "todo-sync", "todos");
 *   // ...
 * }
 * ```
 */
export function useBroadcastSync<T extends object, K extends keyof T>(
	store: StoreApi<T> & StoreSubscribeWithSelector<T>,
	channelName: string,
	key: K,
) {
	useEffect(() => {
		if (typeof window === "undefined") return;

		const channel = new BroadcastChannel(channelName);
		let isReceivingUpdate = false;

		// 他タブからの更新を受け取る
		channel.onmessage = (event) => {
			// チャネルが異なれば到達しないため、keyのチェックは不要
			// ただし、将来の拡張性のため残しておく
			if (event.data.type === "UPDATE" && event.data.key === key) {
				// 無限ループ防止: 受信中フラグを立てる
				isReceivingUpdate = true;
				store.setState({ [key]: event.data.value } as Partial<T>);
				// 次のイベントループでフラグをリセット
				setTimeout(() => {
					isReceivingUpdate = false;
				}, 0);
			}
		};

		// 自タブの変更を他タブに送信（subscribeWithSelectorのセレクター機能を使用）
		const unsubscribe = store.subscribe(
			(state) => state[key], // セレクター: 指定されたキーの値のみを監視
			(value) => {
				// 他タブからの更新中は送信しない（無限ループ防止）
				if (!isReceivingUpdate) {
					channel.postMessage({
						type: "UPDATE",
						key,
						value,
					});
				}
			},
		);

		return () => {
			unsubscribe();
			channel.close();
		};
	}, [store, key, channelName]);
}
