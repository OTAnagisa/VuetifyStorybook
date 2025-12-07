<script setup lang="ts">
import type { VNode } from 'vue'

const props = withDefaults(
  defineProps<{
    /**
     * ボタンのバリアント
     */
    variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain'
    /**
     * ボタンのサイズ
     */
    size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large'
    /**
     * ボタンの色
     */
    color?: string
    /**
     * ボタンを無効にするかどうか
     */
    disabled?: boolean
    /**
     * ローディング状態を表示するかどうか
     */
    loading?: boolean
    /**
     * ボタンを全幅にするかどうか
     */
    block?: boolean
    /**
     * アイコンのみのボタンにするかどうか
     */
    icon?: boolean | string
    /**
     * 丸いボタンにするかどうか
     */
    rounded?: boolean | string
  }>(),
  {
    variant: 'elevated',
    size: 'default',
  }
)

defineOptions({
  inheritAttrs: false,
})

defineSlots<{
  default: () => VNode[]
  prepend: () => VNode[]
  append: () => VNode[]
}>()
</script>

<template>
  <v-btn
    v-bind="{ ...$attrs, ...props }"
    :class="{
      'base-button': true,
      'base-button--disabled': disabled,
    }"
  >
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <slot />
    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
  </v-btn>
</template>

<style scoped lang="scss">
.base-button {
  text-transform: none;
  letter-spacing: normal;

  &--disabled {
    opacity: 0.6;
  }
}
</style>
