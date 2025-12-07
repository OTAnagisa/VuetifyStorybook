import type { Meta, StoryObj } from '@storybook/vue3'
import MonthSelect from './MonthSelect.vue'
import { ref } from 'vue'

const meta: Meta<typeof MonthSelect> = {
  title: 'Components/MonthSelect',
  component: MonthSelect,
  tags: ['autodocs'],
  argTypes: {
    valueFormat: {
      control: 'select',
      options: ['YYYYMM', 'YYYY-MM', 'YYYY/MM', 'Date'],
      description: 'v-modelで取得するときのフォーマット指定',
    },
    displayFormat: {
      control: 'select',
      options: ['YYYY年MM月', 'YYYY-MM', 'YYYY/MM', 'MM/YYYY'],
      description: '入力・表示のフォーマット指定',
    },
    startYearMonth: {
      control: 'text',
      description: '開始年月（YYYYMM形式またはYearMonthオブジェクト）',
    },
    endYearMonth: {
      control: 'text',
      description: '終了年月（YYYYMM形式またはYearMonthオブジェクト）',
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
    autoSelectCurrentMonth: {
      control: 'boolean',
      description: 'メニューが開いたときに値が未選択の場合、現在の年月を自動設定するかどうか',
    },
  },
  args: {
    valueFormat: 'YYYYMM',
    displayFormat: 'YYYY年MM月',
  },
}

export default meta
type Story = StoryObj<typeof MonthSelect>

export const Default: Story = {
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="年月を選択" placeholder="選択してください..." />
        <p style="margin-top: 16px;">選択された値 (YYYYMM形式): {{ value }}</p>
      </div>
    `,
  }),
}

export const WithInitialValue: Story = {
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const now = new Date()
      const currentYear = now.getFullYear()
      const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
      const currentYYYYMM = `${currentYear}${currentMonth}`

      const value = ref<string | null>(currentYYYYMM)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="年月を選択" placeholder="選択してください..." />
        <p style="margin-top: 16px;">選択された値 (YYYYMM形式): {{ value }}</p>
      </div>
    `,
  }),
}

export const WithValueFormat: Story = {
  args: {
    valueFormat: 'YYYY-MM',
    displayFormat: 'YYYY年MM月',
  },
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="年月を選択 (YYYY-MM形式)" placeholder="選択してください..." />
        <p style="margin-top: 16px;">選択された値 (YYYY-MM形式): {{ value }}</p>
      </div>
    `,
  }),
}

export const WithDisplayFormat: Story = {
  args: {
    displayFormat: 'YYYY/MM',
  },
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="年月を選択 (YYYY/MM表示)" placeholder="選択してください..." />
        <p style="margin-top: 16px;">選択された値 (YYYYMM形式): {{ value }}</p>
      </div>
    `,
  }),
}

export const WithYearRange: Story = {
  render: () => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>(null)
      // 現在の年月から前後2年の範囲を計算
      const now = new Date()
      const currentYear = now.getFullYear()
      const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
      const startYYYYMM = `${currentYear - 2}${currentMonth}`
      const endYYYYMM = `${currentYear + 2}${currentMonth}`

      return { value, startYYYYMM, endYYYYMM }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect 
          :start-year-month="startYYYYMM"
          :end-year-month="endYYYYMM"
          v-model="value" 
          label="年月を選択 (前後2年)" 
          placeholder="選択してください..." 
        />
        <p style="margin-top: 16px;">選択された値 (YYYYMM形式): {{ value }}</p>
        <p style="margin-top: 8px; font-size: 0.875rem; color: #666;">
          選択範囲: 現在から前後2年（合計5年分）
        </p>
      </div>
    `,
  }),
}

export const WithCustomRange: Story = {
  args: {
    startYearMonth: '202301',
    endYearMonth: '202412',
  },
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="年月を選択 (カスタム範囲)" placeholder="選択してください..." />
        <p style="margin-top: 16px;">選択された値 (YYYYMM形式): {{ value }}</p>
        <p style="margin-top: 8px; font-size: 0.875rem; color: #666;">
          選択範囲: 2023年1月 ～ 2024年12月
        </p>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>('202412')
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="無効状態" />
        <p style="margin-top: 16px;">選択された値: {{ value }}</p>
      </div>
    `,
  }),
}

export const Readonly: Story = {
  args: {
    readonly: true,
  },
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>('202412')
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="読み取り専用" />
        <p style="margin-top: 16px;">選択された値: {{ value }}</p>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="ローディング中" />
      </div>
    `,
  }),
}

export const ValidationExample: Story = {
  render: () => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>('202001')
      // 現在の年月から前後1年の範囲を計算
      const now = new Date()
      const currentYear = now.getFullYear()
      const currentMonth = String(now.getMonth() + 1).padStart(2, '0')
      const startYYYYMM = `${currentYear - 1}${currentMonth}`
      const endYYYYMM = `${currentYear + 1}${currentMonth}`

      return { value, startYYYYMM, endYYYYMM }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect 
          :start-year-month="startYYYYMM"
          :end-year-month="endYYYYMM"
          v-model="value" 
          label="年月を選択 (バリデーション)" 
          placeholder="選択してください..." 
        />
        <p style="margin-top: 16px;">選択された値: {{ value }}</p>
        <p style="margin-top: 8px; font-size: 0.875rem; color: #666;">
          範囲外の値（202001）を設定しています。バリデーションエラーが表示されます。
        </p>
      </div>
    `,
  }),
}

export const WithoutAutoSelect: Story = {
  args: {
    autoSelectCurrentMonth: false,
  },
  render: (args) => ({
    components: { MonthSelect },
    setup() {
      const value = ref<string | null>(null)
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <MonthSelect v-bind="args" v-model="value" label="年月を選択 (自動選択なし)" placeholder="選択してください..." />
        <p style="margin-top: 16px;">選択された値 (YYYYMM形式): {{ value || '(未選択)' }}</p>
        <p style="margin-top: 8px; font-size: 0.875rem; color: #666;">
          メニューを開いても、自動的に現在の年月は選択されません。
        </p>
      </div>
    `,
  }),
}
