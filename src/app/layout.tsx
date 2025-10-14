import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

 const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://choitasu.com"
    : "http://localhost:3000";

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
	openGraph: {
		title: "ちょいタス - シンプルなタスク管理アプリ",
		description: "ログイン不要で今すぐ使える無料のTodoアプリ",
		url: baseUrl,
		siteName: "ちょいタス",
		images: [
			{
				url: `${baseUrl}/og-image.png`,
				width: 1200,
				height: 630,
			},
		],
		locale: "ja_JP",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "ちょいタス",
		description: "シンプルで使いやすい無料タスク管理アプリ",
		images: [`${baseUrl}/og-image.png`],
	},
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
			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
			<body className="text-gray-800">{children}</body>
		</html>
	);
}
