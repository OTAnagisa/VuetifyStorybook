<script setup lang="ts" generic="T = unknown">
import type { ListItem } from '@/types'
import type { VNode } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * 選択肢の配列
     */
    items: T[]
    /**
     * 複数選択を可能にするかどうか
     */
    multiple?: boolean
    /**
     * 選択肢をチップで表示するかどうか
     */
    chips?: boolean
    /**
     * 読み取り専用状態にするかどうか
     */
    readonly?: boolean
    /**
     * 選択肢を無効にするかどうか
     */
    disabled?: boolean
    /**
     * ローディング状態を表示するかどうか
     */
    loading?: boolean
  }>(),
  {}
)

/**
 * 選択された値を保持するモデル
 */
const model = defineModel<T | T[] | null>({})

defineOptions({
  inheritAttrs: false,
})

defineSlots<{
  selection: (args: { item: ListItem<T>; index: number }) => VNode[]
  item: (args: { item: ListItem<T>; index: number; props: Record<string, unknown> }) => VNode[]
}>()
</script>

<template>
  <v-autocomplete
    v-bind="{ ...$attrs, ...props }"
    v-model="model"
    variant="outlined"
    :class="{
      'base-autocomplete-field': true,
      'base-autocomplete-field--disabled': disabled,
    }"
  >
    <template v-if="$slots.selection" #selection="slotProps">
      <slot name="selection" v-bind="slotProps" />
    </template>
    <template v-if="$slots.item" #item="slotProps">
      <slot name="item" v-bind="slotProps" />
    </template>
  </v-autocomplete>
</template>

<style scoped lang="scss">
.base-autocomplete-field {
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
</style>
