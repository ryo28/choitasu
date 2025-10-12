import { InfoSections } from "../InfoSections";
import type { InfoSectionData } from "./types";

const infoSectionsData: InfoSectionData[] = [
	{
		title: "1. アプリ概要",
		content:
			"「ちょいタス」は、ちょっとしたタスクを手軽に管理できるシンプルなTODOアプリです。モバイルファーストのデザインで、スマートフォンからの操作を最優先に考慮しています。直感的なUIと必要最低限の機能に絞ることで、誰でも簡単に使い始められます。",
	},
	{
		title: "2. 主な機能",
		content: [
			"• タスクの追加・削除 - 直感的な操作でタスクを管理",
			"• ドラッグ&ドロップ並び替え - 優先度に応じてタスクを整理",
			"• 完了・未完了の切り替え - チェックボックスで進捗管理",
			"• 削除履歴の表示 - 削除したタスクの確認・復元",
			"• ローカルデータ保存 - ブラウザに安全にデータを保存",
		].join("\n"),
	},

	{
		title: "3. 使用方法",
		content: [
			"【タスクの追加】",
			"上部のテキストフィールドに内容を入力して「追加」ボタンをクリック",
			"",
			"【タスクの完了】",
			"チェックボックスをクリックして完了状態を切り替え",
			"",
			"【並び替え】",
			"左側のつまみアイコンをドラッグして順序を変更",
			"",
			"【タスクの削除】",
			"削除ボタンをクリック（履歴から復元可能）",
		].join("\n"),
	},
	{
		title: "4. 開発理念",
		content:
			"「シンプルだからこそ、長く使い続けられる」をコンセプトに開発しました。複雑な機能は排除し、本当に必要な機能だけを厳選。毎日使うツールとして、ストレスなく快適に利用できることを最優先にしています。",
	},
	{
		title: "5. サポート・お問い合わせ",
		content: [
			"ご質問・ご要望・不具合報告などがございましたら、お気軽にお問い合わせください。",
			"",
			"開発者: ワッキー",
			"バージョン: 1.0.0",
			"最終更新日: 2025年10月12日",
		].join("\n"),
		link: "https://x.com/w_a59",
	},
];

export function AboutApp() {
	return (
		<div className="h-full max-h-96 space-y-6 overflow-y-auto py-6 text-sm">
			{infoSectionsData.map((section) => (
				<InfoSections
					key={section.title}
					title={section.title}
					content={section.content}
					link={section.link}
				/>
			))}
		</div>
	);
}
