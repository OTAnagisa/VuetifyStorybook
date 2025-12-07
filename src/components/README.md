# コンポーネント一覧

このディレクトリには、プロジェクトで使用される再利用可能なコンポーネントが含まれています。

## コンポーネントの構造

各コンポーネントは以下のファイルで構成されています:

```
ComponentName/
├── ComponentName.vue          # コンポーネント本体
├── ComponentName.stories.ts   # Storybookストーリー
└── ComponentName.test.ts      # ユニットテスト
```

## 利用可能なコンポーネント

### BaseButton

基本的なボタンコンポーネント。

**使用例:**
```vue
<BaseButton color="primary" @click="handleClick">
  クリック
</BaseButton>
```

**ストーリー:** Components/BaseButton

---

### BaseTextField

テキスト入力フィールドコンポーネント。

**使用例:**
```vue
<BaseTextField
  v-model="text"
  label="名前"
  placeholder="名前を入力してください"
/>
```

**ストーリー:** Components/BaseTextField

---

### BaseAutocomplete

オートコンプリート選択コンポーネント。

**使用例:**
```vue
<BaseAutocomplete
  v-model="selectedValue"
  :items="options"
  label="選択してください"
/>
```

**ストーリー:** Components/BaseAutocomplete

---

## 新しいコンポーネントの追加

1. **ディレクトリの作成**
   ```bash
   mkdir src/components/ComponentName
   ```

2. **コンポーネントファイルの作成**
   ```bash
   touch src/components/ComponentName/ComponentName.vue
   touch src/components/ComponentName/ComponentName.stories.ts
   touch src/components/ComponentName/ComponentName.test.ts
   ```

3. **実装**
   - `ComponentName.vue` - コンポーネントの実装
   - `ComponentName.stories.ts` - Storybookストーリーの作成
   - `ComponentName.test.ts` - ユニットテストの作成

4. **確認**
   - Storybookでコンポーネントを確認
   - テストを実行して検証

## コーディングガイドライン

詳細は [CONTRIBUTING.md](../../CONTRIBUTING.md) を参照してください。

### 基本原則

- **単一責任の原則**: 各コンポーネントは1つの責任のみを持つ
- **再利用性**: 特定の用途に依存しない汎用的な設計
- **アクセシビリティ**: 適切なARIA属性とキーボード操作のサポート
- **型安全性**: TypeScriptで型定義を明確にする
- **テスト**: すべてのコンポーネントにテストを含める

### 命名規則

- **コンポーネント名**: PascalCase (例: `BaseButton`)
- **ファイル名**: コンポーネント名と同じ (例: `BaseButton.vue`)
- **Props**: camelCase (例: `disabled`, `modelValue`)
- **イベント**: kebab-case (例: `update:modelValue`)
- **CSS クラス**: BEM記法 (例: `base-button`, `base-button--primary`)

## パフォーマンス

- 大きなリストには仮想スクロールを検討
- 重い計算には `computed` を使用
- 不要な再レンダリングを避けるため `v-memo` を活用
- 遅延ロードが必要な場合は `defineAsyncComponent` を使用

## アクセシビリティ

- セマンティックなHTML要素を使用
- 適切なARIA属性を追加
- キーボード操作をサポート
- スクリーンリーダーに配慮

## 参考資料

- [Vue 3 Style Guide](https://vuejs.org/style-guide/)
- [Vuetify Components](https://vuetifyjs.com/en/components/all/)
- [Storybook for Vue](https://storybook.js.org/docs/vue/get-started/introduction)
