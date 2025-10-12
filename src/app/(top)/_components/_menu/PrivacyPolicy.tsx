import { InfoSections } from "../InfoSections";

const infoSectionsData = [
	{
		title: "1. はじめに",
		content:
			"本プライバシーポリシーは、アプリ「ちょいタス」におけるユーザーの個人情報の取り扱いについて説明します。",
	},
	{
		title: "2. データの保存と管理",
		content: [
			"• タスクの内容や設定は、お客様のブラウザのローカルストレージに保存されます。",
			"• タスクデータは外部サーバーに送信されません。",
			"• ただし、アクセス解析目的でGoogle アナリティクスによる通信が発生する場合があります。",
			"• データは暗号化されずに保存されるため、機密情報の入力はお控えください。",
			"• ブラウザのデータを削除すると、保存されたタスクも削除されます。",
		].join("\n"),
	},
	{
		title: "3. Cookie・ローカルストレージの使用",
		content: [
			"本アプリは、タスクデータの保存や設定保持のためにローカルストレージを使用します。",
			"また、利用状況の分析のためにGoogle アナリティクスのCookieを使用する場合があります、これらのCookie情報は匿名で収集され、個人を特定することはありません。",
		].join("\n"),
	},
	{
		title: "4. 第三者への情報提供",
		content:
			"本アプリは、お客様の個人情報を第三者に提供、販売、または共有することは一切ありません。",
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
		title: "6. Google アナリティクスの利用",
		content: [
			"当サイトでは、Google によるアクセス解析ツール「Google アナリティクス」を利用しています。",
			"この Google アナリティクスは、トラフィックデータの収集のためにクッキー（Cookie）を使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。",
			"Cookieを無効にすることでデータの収集を拒否することが可能ですので、必要に応じてお使いのブラウザにて設定を実施してください。",
			"Google アナリティクスの利用により収集されたデータは、Googleのプライバシーポリシーに基づいて管理されています。",
			"Google アナリティクスの利用規約・プライバシーポリシーについては、以下の公式ページをご参照ください。",
		].join("\n"),
		links: [
			{
				link: "https://policies.google.com/privacy",
				linkText: "Googleアナリティクス サービス利用規約",
			},
			{
				link: "https://policies.google.com/technologies/ads?hl=ja",
				linkText: "Googleのポリシーと規約ページ",
			},
		],
	},
	{
		title: "7. プライバシーポリシーの変更",
		content:
			"本プライバシーポリシーは、必要に応じて改訂することがあります。重要な変更がある場合は、アプリ内でお知らせいたします。",
	},
	{
		title: "8. お問い合わせ",
		content: [
			"本プライバシーポリシーに関するご質問やご不明な点がございましたら、以下までお問い合わせください。",
			"開発者: ワッキー",
			`最終更新日: 2025/10/11`,
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
					links={section.links}
				/>
			))}
		</div>
	);
}
