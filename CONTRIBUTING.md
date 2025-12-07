# コントリビューションガイド

このプロジェクトへの貢献を検討いただきありがとうございます！

## 開発の流れ

### 1. セットアップ

```bash
# リポジトリのクローン
git clone <repository-url>

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# Storybookの起動
npm run storybook
```

### 2. コンポーネントの追加

新しいコンポーネントを追加する場合:

1. `src/components/` に新しいディレクトリを作成
2. 以下のファイルを作成:
   - `ComponentName.vue` - コンポーネント本体
   - `ComponentName.stories.ts` - Storybookストーリー
   - `ComponentName.test.ts` - ユニットテスト

### 3. コーディング規約

#### TypeScript

- 型定義を明示的に記述する
- `any` の使用は避け、適切な型を定義する
- ジェネリクスを活用する

#### Vue コンポーネント

- `<script setup>` 構文を使用する
- Props には JSDoc コメントを記述する
- defineOptions で inheritAttrs を設定する
- 必要に応じて defineSlots でスロットの型を定義する

#### スタイル

- scoped CSS を使用する
- SCSS を使用可能
- BEM 命名規則に従う
- Vuetify のテーマカラーを使用する

### 4. テスト

```bash
# テストの実行
npm run test

# カバレッジの確認
npm run coverage
```

すべての新しいコンポーネントにはテストを追加してください。

### 5. コードフォーマット

```bash
# Prettier でフォーマット
npm run format

# ESLint で検証
npm run lint
```

コミット前に必ずフォーマットを実行してください。

### 6. プルリクエスト

1. フィーチャーブランチを作成: `git checkout -b feature/your-feature`
2. 変更をコミット: `git commit -m 'Add some feature'`
3. ブランチをプッシュ: `git push origin feature/your-feature`
4. プルリクエストを作成

#### プルリクエストのガイドライン

- 変更内容を明確に説明する
- スクリーンショットや GIF を添付する（UI変更の場合）
- 関連する Issue 番号を記載する
- すべてのテストが通ることを確認する

## コンポーネントの構造

```vue
<script setup lang="ts">
import type { VNode } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * プロパティの説明
     */
    propertyName?: string
  }>(),
  {
    // デフォルト値
  }
)

const model = defineModel<string | null>({})

defineOptions({
  inheritAttrs: false,
})

defineSlots<{
  default: () => VNode[]
}>()
</script>

<template>
  <v-component
    v-bind="{ ...$attrs, ...props }"
    v-model="model"
    :class="{
      'base-component': true,
      'base-component--modifier': someCondition,
    }"
  >
    <slot />
  </v-component>
</template>

<style scoped lang="scss">
.base-component {
  // スタイル
}
</style>
```

## Storybook ストーリーの構造

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import ComponentName from './ComponentName.vue'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    // プロパティの定義
  },
  args: {
    // デフォルト値
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  // ストーリーの定義
}
```

## 質問やフィードバック

質問や提案がある場合は、Issue を作成してください。
