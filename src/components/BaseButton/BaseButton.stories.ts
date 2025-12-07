import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  title: 'Components/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      description: 'ボタンのバリアント',
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description: 'ボタンのサイズ',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'ボタンの色',
    },
    disabled: {
      control: 'boolean',
      description: 'ボタンを無効にするかどうか',
    },
    loading: {
      control: 'boolean',
      description: 'ローディング状態を表示するかどうか',
    },
    block: {
      control: 'boolean',
      description: 'ボタンを全幅にするかどうか',
    },
    rounded: {
      control: 'boolean',
      description: '丸いボタンにするかどうか',
    },
  },
  args: {
    variant: 'elevated',
    size: 'default',
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof BaseButton>

export const Default: Story = {
  args: {
    default: 'クリック',
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">クリック</BaseButton>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <BaseButton variant="elevated">Elevated</BaseButton>
        <BaseButton variant="flat">Flat</BaseButton>
        <BaseButton variant="tonal">Tonal</BaseButton>
        <BaseButton variant="outlined">Outlined</BaseButton>
        <BaseButton variant="text">Text</BaseButton>
        <BaseButton variant="plain">Plain</BaseButton>
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <BaseButton color="primary">Primary</BaseButton>
        <BaseButton color="secondary">Secondary</BaseButton>
        <BaseButton color="success">Success</BaseButton>
        <BaseButton color="error">Error</BaseButton>
        <BaseButton color="warning">Warning</BaseButton>
        <BaseButton color="info">Info</BaseButton>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <BaseButton size="x-small">X-Small</BaseButton>
        <BaseButton size="small">Small</BaseButton>
        <BaseButton size="default">Default</BaseButton>
        <BaseButton size="large">Large</BaseButton>
        <BaseButton size="x-large">X-Large</BaseButton>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <BaseButton>
          <template #prepend>
            <v-icon>mdi-plus</v-icon>
          </template>
          追加
        </BaseButton>
        <BaseButton color="error">
          削除
          <template #append>
            <v-icon>mdi-delete</v-icon>
          </template>
        </BaseButton>
        <BaseButton icon="mdi-heart" color="error" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">無効なボタン</BaseButton>',
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: '<BaseButton v-bind="args">読み込み中...</BaseButton>',
  }),
}

export const Block: Story = {
  args: {
    block: true,
  },
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseButton v-bind="args">全幅ボタン</BaseButton>
      </div>
    `,
  }),
}

export const Rounded: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <BaseButton rounded="0">角ばったボタン</BaseButton>
        <BaseButton rounded="sm">小さい丸み</BaseButton>
        <BaseButton rounded="lg">大きい丸み</BaseButton>
        <BaseButton rounded="pill">ピル型</BaseButton>
      </div>
    `,
  }),
}
