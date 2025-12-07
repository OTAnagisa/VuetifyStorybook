# プロジェクト構造

このドキュメントでは、プロジェクト全体のディレクトリ構造とファイルの役割を説明します。

## ディレクトリツリー

```
vuetify-component-library/
├── .storybook/                 # Storybook設定
│   ├── main.ts                 # Storybookメイン設定
│   └── preview.ts              # Storybookプレビュー設定
│
├── .vscode/                    # VSCode設定
│   ├── extensions.json         # 推奨拡張機能
│   └── settings.json           # エディタ設定
│
├── public/                     # 静的ファイル
│   └── vite.svg                # ロゴ
│
├── src/                        # ソースコード
│   ├── components/             # コンポーネント
│   │   ├── BaseAutocomplete/   # オートコンプリートコンポーネント
│   │   │   ├── BaseAutocomplete.vue
│   │   │   ├── BaseAutocomplete.stories.ts
│   │   │   └── BaseAutocomplete.test.ts
│   │   ├── BaseButton/         # ボタンコンポーネント
│   │   │   ├── BaseButton.vue
│   │   │   ├── BaseButton.stories.ts
│   │   │   └── BaseButton.test.ts
│   │   ├── BaseTextField/      # テキストフィールドコンポーネント
│   │   │   ├── BaseTextField.vue
│   │   │   ├── BaseTextField.stories.ts
│   │   │   └── BaseTextField.test.ts
│   │   └── README.md           # コンポーネント一覧
│   ├── plugins/                # Vueプラグイン
│   │   └── vuetify.ts          # Vuetify設定
│   ├── types/                  # 型定義
│   │   └── index.ts            # 共通型定義
│   ├── App.vue                 # ルートコンポーネント
│   ├── main.ts                 # エントリーポイント
│   └── vite-env.d.ts           # Vite環境変数の型定義
│
├── .editorconfig               # エディタ設定
├── .env.example                # 環境変数のサンプル
├── .eslintrc.cjs               # ESLint設定
├── .gitignore                  # Git除外設定
├── .prettierignore             # Prettier除外設定
├── .prettierrc.json            # Prettier設定
├── CONTRIBUTING.md             # コントリビューションガイド
├── index.html                  # HTMLエントリーポイント
├── package.json                # 依存関係とスクリプト
├── PROJECT_STRUCTURE.md        # このファイル
├── QUICKSTART.md               # クイックスタートガイド
├── README.md                   # プロジェクト概要
├── SETUP.md                    # セットアップガイド
├── tsconfig.json               # TypeScript設定
├── tsconfig.node.json          # Node用TypeScript設定
├── vite.config.ts              # Vite設定
└── vitest.config.ts            # Vitest設定
```

## 主要ファイルの説明

### 設定ファイル

| ファイル | 説明 |
|---------|------|
| `package.json` | プロジェクトのメタデータと依存関係 |
| `tsconfig.json` | TypeScriptのコンパイラ設定 |
| `vite.config.ts` | Viteのビルド設定 |
| `vitest.config.ts` | Vitestのテスト設定 |
| `.eslintrc.cjs` | ESLintのリント設定 |
| `.prettierrc.json` | Prettierのフォーマット設定 |

### Storybook関連

| ファイル | 説明 |
|---------|------|
| `.storybook/main.ts` | Storybookのメイン設定 |
| `.storybook/preview.ts` | Storybookのプレビュー設定とデコレータ |
| `*.stories.ts` | 各コンポーネントのストーリー定義 |

### コンポーネント

各コンポーネントは以下の3ファイルで構成:

- `.vue` - コンポーネント本体
- `.stories.ts` - Storybookストーリー
- `.test.ts` - ユニットテスト

### ドキュメント

| ファイル | 説明 |
|---------|------|
| `README.md` | プロジェクトの概要と使い方 |
| `QUICKSTART.md` | 5分で始めるガイド |
| `SETUP.md` | 詳細なセットアップ手順 |
| `CONTRIBUTING.md` | 開発ガイドライン |
| `PROJECT_STRUCTURE.md` | このファイル |

## ディレクトリの役割

### `/src/components/`

再利用可能なUIコンポーネントを格納します。各コンポーネントは独立したディレクトリに配置され、関連するファイル（ストーリー、テスト）を同じ場所に保持します。

**命名規則:**
- ディレクトリ名: PascalCase (例: `BaseButton`)
- ファイル名: コンポーネント名と一致 (例: `BaseButton.vue`)

### `/src/plugins/`

Vueプラグインの設定ファイルを格納します。

- `vuetify.ts` - Vuetifyの初期化とテーマ設定

### `/src/types/`

TypeScriptの型定義ファイルを格納します。

- `index.ts` - プロジェクト全体で使用する共通型

### `/.storybook/`

Storybookの設定ファイルを格納します。

- `main.ts` - ストーリーの場所、アドオン、フレームワーク設定
- `preview.ts` - グローバルデコレータ、パラメータ設定

### `/.vscode/`

VSCodeエディタの設定を格納します。

- `extensions.json` - 推奨拡張機能
- `settings.json` - プロジェクト固有のエディタ設定

## ファイルの追加ガイド

### 新しいコンポーネントを追加する場合

1. `src/components/ComponentName/` ディレクトリを作成
2. 以下のファイルを作成:
   - `ComponentName.vue`
   - `ComponentName.stories.ts`
   - `ComponentName.test.ts`

### 新しい型定義を追加する場合

- 汎用的な型: `src/types/index.ts` に追加
- コンポーネント固有の型: コンポーネント内で定義

### 新しいプラグインを追加する場合

- `src/plugins/` に新しいファイルを作成
- `src/main.ts` でインポートして使用

## パスエイリアス

プロジェクトでは以下のパスエイリアスを使用しています:

- `@/` → `src/`

**使用例:**
```typescript
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import type { ListItem } from '@/types'
```

## ビルド成果物

### 開発時

- `node_modules/` - 依存パッケージ
- `.vite/` - Viteのキャッシュ

### ビルド時

- `dist/` - プロダクションビルド
- `storybook-static/` - Storybookビルド
- `coverage/` - テストカバレッジレポート

これらのディレクトリは `.gitignore` に含まれています。

## 関連ドキュメント

- [コンポーネント一覧](./src/components/README.md)
- [開発ガイド](./CONTRIBUTING.md)
- [セットアップ](./SETUP.md)
