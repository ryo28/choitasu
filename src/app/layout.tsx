import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "ちょいタス",
	description: "超シンプルで使いやすいタスク管理アプリ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<GoogleTagManager gtmId="G-NYZJB75MST" />
			<body className="text-gray-800">{children}</body>
		</html>
	);
}
