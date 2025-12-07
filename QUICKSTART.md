# クイックスタートガイド

このガイドでは、プロジェクトの起動から最初のコンポーネントの確認までを5分で完了します。

## 📦 インストール (1分)

```bash
npm install
```

## 🚀 起動 (1分)

### 開発サーバー

```bash
npm run dev
```

http://localhost:5173 にアクセス

### Storybook

```bash
npm run storybook
```

http://localhost:6006 にアクセス

## 🎨 コンポーネントを確認 (3分)

### 1. Storybookでコンポーネントを見る

Storybookを起動すると、以下のコンポーネントが表示されます:

- **BaseButton** - ボタンコンポーネント
- **BaseTextField** - テキスト入力コンポーネント
- **BaseAutocomplete** - オートコンプリートコンポーネント

各コンポーネントで以下を試してください:

1. **Canvas タブ**: コンポーネントの表示を確認
2. **Controls タブ**: プロパティをインタラクティブに変更
3. **Docs タブ**: 自動生成されたドキュメントを確認

### 2. コードで使ってみる

`src/App.vue` を編集して、コンポーネントを使ってみましょう:

```vue
<script setup lang="ts">
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseTextField from '@/components/BaseTextField/BaseTextField.vue'
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Hello Vuetify!</h1>
        
        <BaseTextField
          v-model="text"
          label="名前を入力"
          placeholder="あなたの名前"
        />
        
        <BaseButton color="primary">
          送信
        </BaseButton>
      </v-container>
    </v-main>
  </v-app>
</template>
```

保存すると、自動的にブラウザが更新されます！

## 🧪 テストを実行

```bash
npm run test
```

すべてのテストが緑色で表示されればOKです。

## 🎯 次にやること

### 新しいコンポーネントを作る

```bash
# ディレクトリを作成
mkdir src/components/MyComponent

# ファイルを作成
touch src/components/MyComponent/MyComponent.vue
touch src/components/MyComponent/MyComponent.stories.ts
touch src/components/MyComponent/MyComponent.test.ts
```

### 既存のコンポーネントをカスタマイズ

1. `src/components/BaseButton/BaseButton.vue` を開く
2. スタイルを変更してみる
3. Storybookで確認

### 詳しく学ぶ

- [README.md](./README.md) - プロジェクト全体の説明
- [SETUP.md](./SETUP.md) - 詳細なセットアップガイド
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 開発ガイドライン

## 💡 便利なコマンド

```bash
# フォーマット
npm run format

# Lint
npm run lint

# ビルド
npm run build

# Storybookのビルド
npm run build-storybook
```

## ❓ トラブルシューティング

### エラーが出る場合

1. Node.js のバージョンを確認 (18.x 以上が必要)
2. `node_modules` を削除して再インストール
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### ポートが使えない場合

```bash
# 別のポートで起動
PORT=3000 npm run dev
```

---

**🎉 準備完了！** 素晴らしいコンポーネントを作りましょう！
