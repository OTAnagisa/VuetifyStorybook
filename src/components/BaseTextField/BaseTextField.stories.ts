import type { Meta, StoryObj } from '@storybook/vue3'
import BaseTextField from './BaseTextField.vue'
import { ref } from 'vue'

const meta: Meta<typeof BaseTextField> = {
  title: 'Components/BaseTextField',
  component: BaseTextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'underlined', 'plain', 'solo', 'solo-inverted', 'solo-filled'],
      description: 'テキストフィールドのバリアント',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      description: '入力タイプ',
    },
    readonly: {
      control: 'boolean',
      description: '読み取り専用状態にするかどうか',
    },
    disabled: {
      control: 'boolean',
      description: 'フィールドを無効にするかどうか',
    },
    clearable: {
      control: 'boolean',
      description: 'クリア可能なボタンを表示するかどうか',
    },
    counter: {
      control: 'number',
      description: 'カウンター表示',
    },
    required: {
      control: 'boolean',
      description: '必須フィールドかどうか',
    },
  },
  args: {
    variant: 'outlined',
    type: 'text',
  },
}

export default meta
type Story = StoryObj<typeof BaseTextField>

export const Default: Story = {
  args: {
    label: 'テキストフィールド',
    placeholder: '入力してください...',
  },
  render: (args) => ({
    components: { BaseTextField },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseTextField v-bind="args" v-model="value" />
        <p style="margin-top: 16px;">入力値: {{ value }}</p>
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { BaseTextField },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <BaseTextField v-model="value" variant="outlined" label="Outlined" />
        <BaseTextField v-model="value" variant="filled" label="Filled" />
        <BaseTextField v-model="value" variant="underlined" label="Underlined" />
        <BaseTextField v-model="value" variant="solo" label="Solo" />
      </div>
    `,
  }),
}

export const WithValidation: Story = {
  render: () => ({
    components: { BaseTextField },
    setup() {
      const email = ref('')
      const emailRules = [
        (v: string) => !!v || 'メールアドレスは必須です',
        (v: string) => /.+@.+\..+/.test(v) || 'メールアドレスが無効です',
      ]
      return { email, emailRules }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseTextField
          v-model="email"
          label="メールアドレス"
          type="email"
          :rules="emailRules"
          required
        />
      </div>
    `,
  }),
}

export const WithCounter: Story = {
  args: {
    label: '文字数制限付き',
    counter: 50,
    maxlength: 50,
  },
  render: (args) => ({
    components: { BaseTextField },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseTextField v-bind="args" v-model="value" />
      </div>
    `,
  }),
}

export const Password: Story = {
  render: () => ({
    components: { BaseTextField },
    setup() {
      const password = ref('')
      const visible = ref(false)
      return { password, visible }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseTextField
          v-model="password"
          label="パスワード"
          :type="visible ? 'text' : 'password'"
        >
          <template #append-inner>
            <v-icon
              :icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              @click="visible = !visible"
              style="cursor: pointer;"
            />
          </template>
        </BaseTextField>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { BaseTextField },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <BaseTextField v-model="value" label="検索">
          <template #prepend-inner>
            <v-icon>mdi-magnify</v-icon>
          </template>
        </BaseTextField>
        <BaseTextField v-model="value" label="メール" type="email">
          <template #prepend-inner>
            <v-icon>mdi-email</v-icon>
          </template>
        </BaseTextField>
        <BaseTextField v-model="value" label="電話番号" type="tel">
          <template #prepend-inner>
            <v-icon>mdi-phone</v-icon>
          </template>
        </BaseTextField>
      </div>
    `,
  }),
}

export const Clearable: Story = {
  args: {
    label: 'クリア可能',
    clearable: true,
  },
  render: (args) => ({
    components: { BaseTextField },
    setup() {
      const value = ref('削除できる値')
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseTextField v-bind="args" v-model="value" />
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
    components: { BaseTextField },
    setup() {
      const value = ref('編集できません')
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseTextField v-bind="args" v-model="value" />
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
    components: { BaseTextField },
    setup() {
      const value = ref('読み取り専用の値')
      return { args, value }
    },
    template: `
      <div style="max-width: 400px;">
        <BaseTextField v-bind="args" v-model="value" />
      </div>
    `,
  }),
}
