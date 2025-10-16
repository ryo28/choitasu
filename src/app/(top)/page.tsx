"use client";

import clsx from "clsx";
import { History } from "lucide-react";
import { useEffect, useState } from "react";
import { DELETED_HISTORY_RETENTION_DAYS } from "./constants";
import { CreateTodos } from "./_components/CreateTodos";
import { DeletedHistoryButton } from "./_components/DeletedHistoryButton";
import { ErrorToast } from "./_components/ErrorToast";
import { RestoreHistoryButton } from "./_components/RestoreHistoryButton";
import SortableExample from "./_components/SortableExample";
import { useDeletedTodoStore } from "./_store/deletedTodoStore";
import { useSelectedIdStore } from "./_store/selectedIdStore";
import { useTodoStore } from "./_store/todoStore";

export default function Top() {
	//タスクを保存する配列
	const todos = useTodoStore((state) => state.todos);
	//削除したタスクを保存する配列
	const deletedTodos = useDeletedTodoStore((state) => state.todos);
	const { cleanOldTodos } = useDeletedTodoStore();
	//チェックされたタスクをIDで管理してカウントで使うための配列
	const selectedIds = useSelectedIdStore((state) => state.selectedIds);
	//履歴表示・非表示の状態管理
	const [showHistory, setShowHistory] = useState(false);

	useEffect(() => {
		// マウント時にだけ指定日数以上前のデータを削除
		if (deletedTodos.length && cleanOldTodos) cleanOldTodos();
	}, [cleanOldTodos, deletedTodos.length]);
	return (
		<div>
			{/* エラートースト */}
			<ErrorToast />
			<div className="h-48 px-4">
				{/* 完了タスクカウンター */}
				<div className="flex flex-1 justify-center gap-2 py-2">
					<button
						type="button"
						onClick={() => setShowHistory(!showHistory)}
						className="flex items-center justify-center gap-2"
					>
						<div>{`${selectedIds.length} / ${todos.length}`}</div>
						<span>完了</span>
					</button>

					{/* 履歴表示・非表示切り替えボタン */}
					<button
						type="button"
						onClick={() => setShowHistory(!showHistory)}
						title="履歴表示切替"
						aria-label="削除履歴の表示と非表示を切り替える"
						aria-expanded={showHistory}
						className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm transition-colors ${
							showHistory
								? "bg-purple-100 text-purple-700"
								: "bg-gray-100 text-gray-600 hover:bg-gray-200"
						}`}
					>
						<History size={16} />
						履歴 ({deletedTodos.length})
					</button>
				</div>
				<CreateTodos />
			</div>
			<div className="min-h-[calc(100vh-350px)] px-4 pb-4 sm:pb-0">
				{/* ボタンで履歴表示・非表示切替「非表示ならtodoを表示」 */}
				{showHistory ? (
					// 削除履歴にタスクがあれば表示、なければメッセージ表示
					deletedTodos.length ? (
						<div>
							<div className="flex gap-4 px-4 pb-4">
								<h2 className="shrink-0 font-bold text-lg">削除履歴</h2>
								<p className="text-gray-500 text-sm">
									削除履歴のタスクは{DELETED_HISTORY_RETENTION_DAYS}
									日経過後に自動的に削除されます
								</p>
							</div>
							<ul className="max-h-[calc(100vh-400px)] touch-pan-y space-y-4 overflow-y-auto px-2 py-4 md:max-h-[calc(100vh-350px)]">
								{deletedTodos
									.slice()
									.reverse()
									.map((todo) => (
										<li
											key={todo.id}
											className={clsx(
												"flex items-center justify-between rounded-2xl px-4 py-4 hover:opacity-75",
												"border border-red-200 bg-red-50",
											)}
										>
											<div className="flex items-center">
												<label
													htmlFor={todo.id}
													className={clsx(
														selectedIds.includes(todo.id) ? "line-through" : "",
													)}
												>
													<p>{todo.text}</p>
													<span className="text-gray-500 text-xs">
														{todo.date}
													</span>
												</label>
											</div>
											<div className="flex shrink-0 gap-8 pl-2">
												{/* 削除履歴復元ボタン */}
												<RestoreHistoryButton id={todo.id} />
												{/* 削除履歴のタスク完全削除ボタン */}
												<DeletedHistoryButton id={todo.id} />
											</div>
										</li>
									))}
							</ul>
						</div>
					) : (
						<p className="px-4">削除したタスクはありません</p>
					)
				) : (
					// 通常のtodo表示
					<div className="min-h-[calc(100vh-350px)]">
						<h2 className="px-4 font-bold text-lg">タスク</h2>
						{/* ドラッグ入れ替え可能なリスト */}
						<SortableExample />
					</div>
				)}
			</div>
		</div>
	);
}
