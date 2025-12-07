# インストールチェックリスト

このチェックリストを使用して、プロジェクトが正しくセットアップされているか確認してください。

## ✅ ファイル構成の確認

### ルートディレクトリ

- [x] `package.json` - 依存関係定義
- [x] `tsconfig.json` - TypeScript設定
- [x] `vite.config.ts` - Vite設定
- [x] `vitest.config.ts` - テスト設定
- [x] `.eslintrc.cjs` - ESLint設定
- [x] `.prettierrc.json` - Prettier設定
- [x] `.gitignore` - Git除外設定
- [x] `.editorconfig` - エディタ設定
- [x] `index.html` - HTMLエントリーポイント

### ドキュメント

- [x] `README.md` - プロジェクト概要
- [x] `QUICKSTART.md` - クイックスタート
- [x] `SETUP.md` - セットアップガイド
- [x] `CONTRIBUTING.md` - 開発ガイドライン
- [x] `PROJECT_STRUCTURE.md` - ディレクトリ構造
- [x] `PROJECT_SUMMARY.md` - プロジェクトサマリー
- [x] `INSTALLATION_CHECKLIST.md` - このファイル

### Storybook設定

- [x] `.storybook/main.ts` - Storybookメイン設定
- [x] `.storybook/preview.ts` - プレビュー設定

### VSCode設定

- [x] `.vscode/settings.json` - エディタ設定
- [x] `.vscode/extensions.json` - 推奨拡張機能

### ソースコード

- [x] `src/main.ts` - エントリーポイント
- [x] `src/App.vue` - ルートコンポーネント
- [x] `src/vite-env.d.ts` - 型定義
- [x] `src/plugins/vuetify.ts` - Vuetify設定
- [x] `src/types/index.ts` - 共通型定義

### コンポーネント

#### BaseButton
- [x] `src/components/BaseButton/BaseButton.vue`
- [x] `src/components/BaseButton/BaseButton.stories.ts`
- [x] `src/components/BaseButton/BaseButton.test.ts`

#### BaseTextField
- [x] `src/components/BaseTextField/BaseTextField.vue`
- [x] `src/components/BaseTextField/BaseTextField.stories.ts`
- [x] `src/components/BaseTextField/BaseTextField.test.ts`

#### BaseAutocomplete
- [x] `src/components/BaseAutocomplete/BaseAutocomplete.vue`
- [x] `src/components/BaseAutocomplete/BaseAutocomplete.stories.ts`
- [x] `src/components/BaseAutocomplete/BaseAutocomplete.test.ts`

### その他
- [x] `src/components/README.md` - コンポーネント一覧
- [x] `public/vite.svg` - ロゴ
- [x] `.env.example` - 環境変数サンプル

## 📋 セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

**期待される結果:**
- `node_modules/` ディレクトリが作成される
- エラーなくインストールが完了する

### 2. 開発サーバーの起動確認

```bash
npm run dev
```

**期待される結果:**
- サーバーが http://localhost:5173 で起動
- ブラウザでアプリケーションが表示される
- コンソールにエラーがない

**確認項目:**
- [ ] サーバーが正常に起動した
- [ ] ブラウザでページが表示された
- [ ] BaseAutocompleteが表示された
- [ ] コンソールエラーがない

### 3. Storybookの起動確認

```bash
npm run storybook
```

**期待される結果:**
- Storybookが http://localhost:6006 で起動
- コンポーネントが一覧表示される

**確認項目:**
- [ ] Storybookが正常に起動した
- [ ] BaseButton のストーリーが表示される
- [ ] BaseTextField のストーリーが表示される
- [ ] BaseAutocomplete のストーリーが表示される
- [ ] Controlsパネルで値が変更できる
- [ ] Docsページが表示される

### 4. テストの実行確認

```bash
npm run test
```

**期待される結果:**
- すべてのテストがパス
- 27個のテストケースが実行される

**確認項目:**
- [ ] BaseButton のテストがパス (10テスト)
- [ ] BaseTextField のテストがパス (9テスト)
- [ ] BaseAutocomplete のテストがパス (8テスト)
- [ ] エラーがない

### 5. Lintの確認

```bash
npm run lint
```

**期待される結果:**
- エラーがない、または自動修正される

**確認項目:**
- [ ] ESLintエラーがない
- [ ] 警告がある場合は許容範囲内

### 6. フォーマットの確認

```bash
npm run format
```

**期待される結果:**
- すべてのファイルが正しくフォーマットされる

**確認項目:**
- [ ] Prettierが実行された
- [ ] フォーマットエラーがない

### 7. ビルドの確認

```bash
npm run build
```

**期待される結果:**
- `dist/` ディレクトリが作成される
- ビルドエラーがない

**確認項目:**
- [ ] TypeScriptのコンパイルエラーがない
- [ ] ビルドが成功した
- [ ] dist/ ディレクトリが作成された

## 🎨 VSCode 拡張機能の確認

プロジェクトを VSCode で開いた際に、以下の拡張機能のインストールを推奨されます:

- [ ] Vue Language Features (Volar)
- [ ] TypeScript Vue Plugin (Volar)
- [ ] ESLint
- [ ] Prettier - Code formatter

## 🔍 動作確認

### Storybookでの確認

各コンポーネントで以下を確認:

#### BaseButton
- [ ] Default ストーリーが表示される
- [ ] Variants ストーリーで6種類のバリアントが表示される
- [ ] Colors ストーリーで6色が表示される
- [ ] Sizes ストーリーで5サイズが表示される
- [ ] WithIcons ストーリーでアイコン付きボタンが表示される
- [ ] Disabled, Loading, Block, Rounded が動作する

#### BaseTextField
- [ ] Default ストーリーが表示される
- [ ] Variants ストーリーで4種類のバリアントが表示される
- [ ] WithValidation でバリデーションが動作する
- [ ] WithCounter でカウンターが表示される
- [ ] Password で表示/非表示が切り替わる
- [ ] WithIcons でアイコンが表示される
- [ ] Clearable でクリアボタンが動作する

#### BaseAutocomplete
- [ ] Default ストーリーが表示される
- [ ] Multiple で複数選択が動作する
- [ ] WithChips でチップが表示される
- [ ] Disabled, Readonly, Loading が動作する
- [ ] WithCustomSlot でカスタムアイテムが表示される

### アプリケーションでの確認

http://localhost:5173 で以下を確認:

- [ ] ページタイトルが表示される
- [ ] BaseAutocompleteが表示される
- [ ] オプションを選択できる
- [ ] 選択した値が表示される
- [ ] スタイルが正しく適用されている

## 🚨 トラブルシューティング

### 問題が発生した場合

1. **依存関係のエラー**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **ポートが使用中**
   ```bash
   PORT=3000 npm run dev
   npm run storybook -- -p 6007
   ```

3. **TypeScriptエラー**
   ```bash
   npm run build
   ```
   詳細なエラーメッセージを確認

4. **キャッシュのクリア**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

## ✅ 最終チェック

すべて確認できたら、プロジェクトの準備完了です！

- [ ] 依存関係がインストールされた
- [ ] 開発サーバーが起動した
- [ ] Storybookが起動した
- [ ] すべてのテストがパスした
- [ ] Lintエラーがない
- [ ] ビルドが成功した
- [ ] すべてのコンポーネントが表示される
- [ ] ドキュメントを確認した

## 📚 次のステップ

1. [QUICKSTART.md](./QUICKSTART.md) を読んで基本的な使い方を確認
2. [CONTRIBUTING.md](./CONTRIBUTING.md) を読んで開発ガイドラインを確認
3. 新しいコンポーネントを作成してみる

---

**🎉 おめでとうございます！セットアップが完了しました！**
