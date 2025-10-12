// InfoSectionsコンポーネントで使用するリンク項目の型
export type InfoSectionLink = {
	// リンクURL
	link: string;
	// リンクテキスト
	linkText: string;
};

// InfoSectionsコンポーネントで使用するセクションデータの型

export type InfoSectionData = {
	// セクションのタイトル
	title: string;
	// セクションの本文
	content: string;
	// 複数のリンク（配列形式）
	links?: InfoSectionLink[];
	// 単一のリンクURL
	link?: string;
	// 単一のリンクテキスト
	linkText?: string;
};
