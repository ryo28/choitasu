# ちょいタス 📝

シンプルで使いやすい無料タスク管理アプリ

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

## 🎯 概要

「ちょいタス」は、ちょっとしたタスクを手軽に管理できるシンプルなTodoアプリです。

- ✅ **ログイン不要** - アカウント登録なしで即座に使用開始
- 📱 **モバイルファースト** - スマートフォンでの操作を最優先に設計
- 💾 **ローカル保存** - データはブラウザに安全に保存（サーバー送信なし）
- 🚀 **オフライン対応** - インターネット接続なしでも利用可能
- 🎨 **シンプルUI** - 直感的で使いやすいインターフェース

## ✨ 主な機能

### 基本機能
- ✏️ **タスクの追加・削除** - 簡単にタスクを管理
- ☑️ **完了・未完了の切り替え** - チェックボックスで状態管理
- 🎨 **タスクの色変更** - カラフルにタスクを分類

### 高度な機能
- 🔄 **ドラッグ&ドロップ並び替え** - 直感的な優先順位変更
- 📜 **削除履歴** - 削除したタスクを30日間保存・復元可能
- 📊 **完了カウンター** - 進捗状況を一目で確認
- 📱 **タッチ操作最適化** - スマホでスムーズに操作可能

## 🛠️ 技術スタック

### フロントエンド
- **[Next.js 15](https://nextjs.org/)** - React フレームワーク
- **[React 19](https://react.dev/)** - UIライブラリ
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全な開発
- **[Tailwind CSS](https://tailwindcss.com/)** - ユーティリティファーストCSS

### 状態管理・UI
- **[Zustand](https://zustand-demo.pmnd.rs/)** - 軽量状態管理
- **[@dnd-kit](https://dndkit.com/)** - ドラッグ&ドロップ
- **[Radix UI](https://www.radix-ui.com/)** - アクセシブルなUIコンポーネント
- **[Lucide React](https://lucide.dev/)** - アイコンライブラリ

### 開発ツール
- **[pnpm](https://pnpm.io/)** - 高速パッケージマネージャー
- **[Biome](https://biomejs.dev/)** - 高速なリンター＆フォーマッター（ESLint + Prettier の代替）

## 🚀 開発環境のセットアップ

### 必要要件
- Node.js 18.17 以上
- pnpm 8.0 以上

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/ryo28/my-app.git
cd my-app

# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### ビルド

```bash
# プロダクションビルド
pnpm build

# ビルドしたアプリの起動
pnpm start
```

## 📁 プロジェクト構造

```
my-app/
├── src/
│   ├── app/
│   │   ├── (top)/              # メインページ
│   │   │   ├── _components/    # ページコンポーネント
│   │   │   │   ├── _menu/      # メニュー関連
│   │   │   │   └── ...
│   │   │   ├── _store/         # Zustand ストア
│   │   │   ├── page.tsx        # トップページ
│   │   │   └── layout.tsx
│   │   ├── layout.tsx          # ルートレイアウト
│   │   └── globals.css         # グローバルスタイル
│   └── components/
│       └── ui/                 # 再利用可能なUIコンポーネント
├── public/                     # 静的ファイル
├── package.json
└── README.md
```

## 🎨 使い方

### タスクの追加
1. 上部のテキストフィールドにタスクを入力
2. 「追加」ボタンをクリック

### タスクの完了
- チェックボックスをクリックして完了状態を切り替え

### タスクの並び替え
- 左側のつまみアイコンをドラッグして順序を変更

### タスクの削除
- 削除ボタンをクリック
- 削除したタスクは「履歴」から復元可能（30日間保存）

### タスクの色変更
- カラーパレットアイコンから好きな色を選択

## 📄 ライセンス・規約

- [プライバシーポリシー](./docs/PRIVACY_POLICY.md)
- [利用規約](./docs/TERMS_OF_SERVICE.md)

## 📮 お問い合わせ

開発者: ワッキー

- Twitter/X: [@w_a59](https://x.com/w_a59)
- GitHub: [@ryo28](https://github.com/ryo28)

## 📝 変更履歴

### v1.0.0 (2025-10-12)
- 初回リリース
- 基本的なTodo機能実装
- ドラッグ&ドロップ対応
- 削除履歴機能追加
- タスク色変更機能追加

---

© 2025 ちょいタス. All rights reserved.
