<script setup lang="ts">
import type { VNode } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * テキストフィールドのバリアント
     */
    variant?: 'outlined' | 'filled' | 'underlined' | 'plain' | 'solo' | 'solo-inverted' | 'solo-filled'
    /**
     * 入力タイプ
     */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
    /**
     * 読み取り専用状態にするかどうか
     */
    readonly?: boolean
    /**
     * フィールドを無効にするかどうか
     */
    disabled?: boolean
    /**
     * クリア可能なボタンを表示するかどうか
     */
    clearable?: boolean
    /**
     * カウンター表示
     */
    counter?: boolean | number | string
    /**
     * 必須フィールドかどうか
     */
    required?: boolean
  }>(),
  {
    variant: 'outlined',
    type: 'text',
  }
)

/**
 * 入力された値を保持するモデル
 */
const model = defineModel<string | number | null>({})

defineOptions({
  inheritAttrs: false,
})

defineSlots<{
  prepend: () => VNode[]
  'prepend-inner': () => VNode[]
  append: () => VNode[]
  'append-inner': () => VNode[]
}>()
</script>

<template>
  <v-text-field
    v-bind="{ ...$attrs, ...props }"
    v-model="model"
    :class="{
      'base-text-field': true,
      'base-text-field--disabled': disabled,
    }"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-if="$slots['prepend-inner']" #prepend-inner>
      <slot name="prepend-inner" />
    </template>
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-if="$slots['append-inner']" #append-inner>
      <slot name="append-inner" />
    </template>
  </v-text-field>
</template>

<style scoped lang="scss">
.base-text-field {
  &.v-text-field--outlined {
    :deep(.v-input__control) {
      .v-field {
        border: 1px solid rgb(var(--v-theme-border-secondary));
        border-radius: 4px;
        background: rgb(var(--v-theme-from-bg));
        box-shadow:
          0 3px 2px 0 rgba(0, 0, 0, 0.06) inset,
          3px 0 2px 0 rgba(0, 0, 0, 0.06) inset;
      }

      .v-field--focused {
        border: 1px solid rgb(var(--v-theme-border-active));
      }

      .v-field--error {
        border: 1px solid rgb(var(--v-theme-border-error));
      }

      .v-field--disabled {
        background: rgb(var(--v-theme-bg-disabled)) !important;
      }
    }
  }
}
</style>
