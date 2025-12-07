# Vuetify Component Library with Storybook

Vue 3 + Vuetify 3 で作成したUIコンポーネントライブラリです。Storybookを使用してコンポーネントをカタログ化し、開発・テスト・ドキュメント化を効率的に行えます。

## 📦 機能

- ✨ **Vue 3 + TypeScript**: 型安全な開発環境
- 🎨 **Vuetify 3**: マテリアルデザインコンポーネント
- 📖 **Storybook**: コンポーネントカタログとドキュメント
- 🧪 **Vitest**: 高速なユニットテスト
- 💅 **Prettier + ESLint**: コード品質とフォーマット
- ⚡ **Vite**: 高速な開発環境

## 🚀 セットアップ

### 依存関係のインストール

```bash
npm install
# または
yarn install
# または
pnpm install
```

## 💡 使用方法

### 開発サーバーの起動

```bash
npm run dev
```

アプリケーションは [http://localhost:5173](http://localhost:5173) で起動します。

### Storybookの起動

```bash
npm run storybook
```

Storybookは [http://localhost:6006](http://localhost:6006) で起動します。

### テストの実行

```bash
# テストを実行
npm run test

# UIモードでテストを実行
npm run test:ui

# カバレッジを取得
npm run coverage
```

### コードのフォーマット

```bash
# Prettierでフォーマット
npm run format

# ESLintで検証・修正
npm run lint
```

### プロダクションビルド

```bash
# アプリケーションのビルド
npm run build

# Storybookのビルド
npm run build-storybook
```

## 📁 プロジェクト構成

```
src/
├── components/
│   ├── BaseAutocomplete/
│   │   ├── BaseAutocomplete.vue
│   │   ├── BaseAutocomplete.stories.ts
│   │   └── BaseAutocomplete.test.ts
│   ├── BaseButton/
│   │   ├── BaseButton.vue
│   │   ├── BaseButton.stories.ts
│   │   └── BaseButton.test.ts
│   └── BaseTextField/
│       ├── BaseTextField.vue
│       ├── BaseTextField.stories.ts
│       └── BaseTextField.test.ts
├── plugins/
│   └── vuetify.ts
├── types/
│   └── index.ts
├── App.vue
└── main.ts
```

## 🧩 コンポーネント

### BaseButton

基本的なボタンコンポーネント。Vuetifyの`v-btn`をラップしています。

**主な機能:**
- 複数のバリアント (elevated, flat, tonal, outlined, text, plain)
- サイズ調整 (x-small, small, default, large, x-large)
- カラー設定
- アイコン対応
- ローディング状態
- 無効化状態

### BaseTextField

テキスト入力フィールドコンポーネント。Vuetifyの`v-text-field`をラップしています。

**主な機能:**
- 複数のバリアント (outlined, filled, underlined, solo)
- 入力タイプ (text, password, email, number, tel, url)
- バリデーション対応
- カウンター表示
- クリアボタン
- アイコン対応

### BaseAutocomplete

オートコンプリート選択コンポーネント。Vuetifyの`v-autocomplete`をラップしています。

**主な機能:**
- 単一選択・複数選択
- チップ表示
- カスタムアイテムテンプレート
- ローディング状態
- 無効化・読み取り専用状態

## 🎨 開発ガイドライン

### 新しいコンポーネントの追加

1. `src/components/` に新しいディレクトリを作成
2. コンポーネントファイル (`ComponentName.vue`) を作成
3. Storybookストーリー (`ComponentName.stories.ts`) を作成
4. テストファイル (`ComponentName.test.ts`) を作成

### コーディング規約

- TypeScriptを使用し、型定義を明確にする
- `<script setup>` 構文を使用
- Props とイベントには JSDoc コメントを記述
- スタイルは scoped CSS または SCSS を使用
- コンポーネントは単一責任の原則に従う

## 📚 参考リンク

- [Vue 3](https://v3.vuejs.org/)
- [Vuetify 3](https://vuetifyjs.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [Vite](https://vitejs.dev/)

## 📝 ライセンス

MIT

Copyright (c) 2024
