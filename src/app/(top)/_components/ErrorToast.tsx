"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useTodoStore } from "../_store/todoStore";

export function ErrorToast() {
	const error = useTodoStore((state) => state.error);
	const setError = useTodoStore((state) => state.setError);

	// 5秒後に自動的にエラーを消す
	useEffect(() => {
		if (error) {
			const timer = setTimeout(() => {
				setError(null);
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [error, setError]);

	if (!error) return null;

	return (
		<div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-top-2">
			<div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 shadow-lg">
				<div className="flex-1">
					<p className="font-medium text-red-800 text-sm">{error}</p>
				</div>
				<button
					type="button"
					onClick={() => setError(null)}
					className="shrink-0 rounded-full p-1 text-red-600 transition-colors hover:bg-red-100"
					aria-label="エラーを閉じる"
				>
					<X size={16} />
				</button>
			</div>
		</div>
	);
}
