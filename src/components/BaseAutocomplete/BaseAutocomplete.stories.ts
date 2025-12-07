import type { Meta, StoryObj } from '@storybook/vue3'
import BaseAutocomplete from './BaseAutocomplete.vue'
import { ref } from 'vue'

const meta: Meta<typeof BaseAutocomplete> = {
  title: 'Components/BaseAutocomplete',
  component: BaseAutocomplete,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: '選択肢の配列',
    },
    multiple: {
      control: 'boolean',
      description: '複数選択を可能にするかどうか',
    },
    chips: {
      control: 'boolean',
      description: '選択肢をチップで表示するかどうか',
    },
    readonly: {
      control: 'boolean',
      description: '読み取り専用状態にするかどうか',
    },
    disabled: {
      control: 'boolean',
      description: '選択肢を無効にするかどうか',
    },
    loading: {
      control: 'boolean',
      description: 'ローディング状態を表示するかどうか',
    },
  },
  args: {
    items: [
      { title: 'オプション 1', value: 1 },
      { title: 'オプション 2', value: 2 },
      { title: 'オプション 3', value: 3 },
      { title: 'オプション 4', value: 4 },
      { title: 'オプション 5', value: 5 },
    ],
  },
}

export default meta
type Story = StoryObj<typeof BaseAutocomplete>

export const Default: Story = {
  args: {
    label: 'オプションを選択',
    placeholder: '選択してください...',
  },
  render: (args) => ({
    components: { BaseAutocomplete },
    setup() {
      const value = ref(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseAutocomplete v-bind="args" v-model="value" />
        <p style="margin-top: 16px;">選択された値: {{ value }}</p>
      </div>
    `,
  }),
}

export const Multiple: Story = {
  args: {
    label: '複数選択',
    placeholder: '複数選択してください...',
    multiple: true,
    chips: true,
  },
  render: (args) => ({
    components: { BaseAutocomplete },
    setup() {
      const value = ref([])
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseAutocomplete v-bind="args" v-model="value" />
        <p style="margin-top: 16px;">選択された値: {{ value }}</p>
      </div>
    `,
  }),
}

export const WithChips: Story = {
  args: {
    label: 'チップ表示',
    placeholder: '選択してください...',
    multiple: true,
    chips: true,
    closableChips: true,
  },
  render: (args) => ({
    components: { BaseAutocomplete },
    setup() {
      const value = ref([1, 2])
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseAutocomplete v-bind="args" v-model="value" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    label: '無効状態',
    disabled: true,
  },
  render: (args) => ({
    components: { BaseAutocomplete },
    setup() {
      const value = ref(1)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseAutocomplete v-bind="args" v-model="value" />
      </div>
    `,
  }),
}

export const Readonly: Story = {
  args: {
    label: '読み取り専用',
    readonly: true,
  },
  render: (args) => ({
    components: { BaseAutocomplete },
    setup() {
      const value = ref(2)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseAutocomplete v-bind="args" v-model="value" />
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: {
    label: 'ローディング中',
    loading: true,
  },
  render: (args) => ({
    components: { BaseAutocomplete },
    setup() {
      const value = ref(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseAutocomplete v-bind="args" v-model="value" />
      </div>
    `,
  }),
}

export const WithCustomSlot: Story = {
  args: {
    label: 'カスタムアイテム表示',
  },
  render: (args) => ({
    components: { BaseAutocomplete },
    setup() {
      const value = ref(null)
      const items = [
        { title: '重要', value: 'high', icon: 'mdi-alert-circle', color: 'error' },
        { title: '中程度', value: 'medium', icon: 'mdi-alert', color: 'warning' },
        { title: '低', value: 'low', icon: 'mdi-information', color: 'info' },
      ]
      return { args, value, items }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseAutocomplete v-bind="args" :items="items" v-model="value">
          <template #item="{ item, props }">
            <v-list-item v-bind="props">
              <template #prepend>
                <v-icon :icon="item.raw.icon" :color="item.raw.color" />
              </template>
            </v-list-item>
          </template>
        </BaseAutocomplete>
        <p style="margin-top: 16px;">選択された値: {{ value }}</p>
      </div>
    `,
  }),
}
