import { InfoSections } from "./InfoSections";

const infoSectionsData = [
	{
		title: "1. はじめに",
		content:
			"本プライバシーポリシーは、アプリ「ちょいタス」におけるユーザーの個人情報の取り扱いについて説明します。",
	},
	{
		title: "2. データの保存と管理",
		content: [
			"• タスクの内容や設定は、お客様のブラウザのローカルストレージに保存されます",
			"• データは暗号化されずに保存されるため、機密情報の入力はお控えください",
			"• ブラウザのデータを削除すると、保存されたタスクも削除されます",
		].join("\n"),
	},
	{
		title: "3. Cookie・ローカルストレージの使用",
		content:
			"本アプリは、タスクデータの保存とアプリの設定保持のために ブラウザのローカルストレージを使用します。 これらの情報は第三者と共有されることはありません。",
	},
	{
		title: "4. 第三者への情報提供",
		content:
			"本アプリは、お客様の個人情報を第三者に提供、販売、 または共有することは一切ありません。",
	},
	{
		title: "5. データの安全性",
		content: [
			"• すべてのデータはお客様のデバイス内でのみ管理されます",
			"• ネットワーク通信によるデータ漏洩のリスクはありません",
			"• デバイスの紛失や盗難にはご注意ください",
		].join("\n"),
	},
	{
		title: "6. プライバシーポリシーの変更",
		content:
			"本プライバシーポリシーは、必要に応じて改訂することがあります。 重要な変更がある場合は、アプリ内でお知らせいたします。",
	},
	{
		title: "7. お問い合わせ",
		content: [
			"本プライバシーポリシーに関するご質問やご不明な点がございましたら、以下までお問い合わせください。",
			"開発者: ワッキー",
			`最終更新日: ${new Date().toLocaleDateString("ja-JP")}`,
		].join("\n"),
		link: "https://x.com/w_a59",
	},
];

export default function PrivacyPolicy() {
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
