# セットアップガイド

## 前提条件

- Node.js 18.x 以上
- npm / yarn / pnpm のいずれか

## インストール手順

### 1. 依存関係のインストール

```bash
npm install
```

初回インストール時は数分かかる場合があります。

### 2. 開発環境の確認

インストールが完了したら、以下のコマンドで開発サーバーが起動することを確認します:

```bash
npm run dev
```

ブラウザで http://localhost:5173 にアクセスし、アプリケーションが表示されることを確認してください。

### 3. Storybookの確認

```bash
npm run storybook
```

ブラウザで http://localhost:6006 にアクセスし、Storybookが起動することを確認してください。

### 4. テストの実行

```bash
npm run test
```

すべてのテストがパスすることを確認してください。

## VSCode 推奨拡張機能

以下の拡張機能のインストールを推奨します:

- **Vue Language Features (Volar)** - Vue 3 の言語サポート
- **TypeScript Vue Plugin** - Vue での TypeScript サポート
- **ESLint** - コードの静的解析
- **Prettier** - コードフォーマッター

プロジェクトを開くと、これらの拡張機能のインストールを促すメッセージが表示されます。

## 開発ワークフロー

### 日常的な開発

1. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

2. **コンポーネントの開発**
   - `src/components/` にコンポーネントを作成
   - Storybookでコンポーネントを確認
   - テストを作成・実行

3. **コードの品質チェック**
   ```bash
   npm run lint
   npm run format
   ```

### Storybookでの開発

Storybookを使用すると、コンポーネントを独立した環境で開発・テストできます:

1. **Storybookの起動**
   ```bash
   npm run storybook
   ```

2. **ストーリーの作成**
   - コンポーネントと同じディレクトリに `.stories.ts` ファイルを作成
   - 各バリエーションをストーリーとして定義

3. **インタラクティブなテスト**
   - Controls パネルでプロパティを変更
   - Actions パネルでイベントを確認
   - Docs パネルでドキュメントを確認

### テスト駆動開発

1. **テストの作成**
   ```typescript
   // ComponentName.test.ts
   import { describe, it, expect } from 'vitest'
   import { mount } from '@vue/test-utils'
   import ComponentName from './ComponentName.vue'
   
   describe('ComponentName', () => {
     it('正しくレンダリングされる', () => {
       const wrapper = mount(ComponentName)
       expect(wrapper.exists()).toBe(true)
     })
   })
   ```

2. **テストの実行**
   ```bash
   npm run test
   ```

3. **カバレッジの確認**
   ```bash
   npm run coverage
   ```

## トラブルシューティング

### ポートが使用中の場合

開発サーバーのポートが既に使用されている場合:

```bash
# Vite (デフォルト: 5173)
PORT=3000 npm run dev

# Storybook (デフォルト: 6006)
npm run storybook -- -p 6007
```

### node_modules の再インストール

依存関係の問題が発生した場合:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript のエラー

型定義のエラーが発生した場合:

```bash
npm run build
```

ビルドコマンドで詳細なエラーメッセージを確認できます。

### ESLint/Prettier のエラー

自動修正を試みる:

```bash
npm run lint
npm run format
```

## 次のステップ

- [README.md](./README.md) - プロジェクトの概要
- [CONTRIBUTING.md](./CONTRIBUTING.md) - コントリビューションガイド
- Storybookでコンポーネントを確認: http://localhost:6006

## サポート

問題が発生した場合は、GitHubのIssueを作成してください。
