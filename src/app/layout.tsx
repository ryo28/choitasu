import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "ちょいタス | シンプルで使いやすい無料タスク管理アプリ",
	description:
		"ログイン不要で今すぐ使える無料のTodoアプリ。ドラッグ&ドロップで簡単タスク管理。" +
		"オフラインでも使えて、データはブラウザに安全保存。削除履歴、色分け機能も完備。",
	keywords: [
		"タスク管理",
		"Todo",
		"Todoアプリ",
		"無料",
		"ログイン不要",
		"オフライン",
		"シンプル",
		"チェックリスト",
		"やることリスト",
	].join(","),
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
			<body className="text-gray-800">{children}</body>
		</html>
	);
}
