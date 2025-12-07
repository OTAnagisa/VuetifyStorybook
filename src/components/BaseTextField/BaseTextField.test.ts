import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BaseTextField from './BaseTextField.vue'

const vuetify = createVuetify({
  components,
  directives,
})

describe('BaseTextField', () => {
  it('コンポーネントがマウントされる', () => {
    const wrapper = mount(BaseTextField, {
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('variant プロパティが適用される', () => {
    const wrapper = mount(BaseTextField, {
      props: {
        variant: 'filled',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('variant')).toBe('filled')
  })

  it('type プロパティが適用される', () => {
    const wrapper = mount(BaseTextField, {
      props: {
        type: 'email',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('type')).toBe('email')
  })

  it('disabled プロパティが適用される', () => {
    const wrapper = mount(BaseTextField, {
      props: {
        disabled: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('disabled')).toBe(true)
    expect(wrapper.classes()).toContain('base-text-field--disabled')
  })

  it('readonly プロパティが適用される', () => {
    const wrapper = mount(BaseTextField, {
      props: {
        readonly: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('readonly')).toBe(true)
  })

  it('clearable プロパティが適用される', () => {
    const wrapper = mount(BaseTextField, {
      props: {
        clearable: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('clearable')).toBe(true)
  })

  it('counter プロパティが適用される', () => {
    const wrapper = mount(BaseTextField, {
      props: {
        counter: 50,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('counter')).toBe(50)
  })

  it('required プロパティが適用される', () => {
    const wrapper = mount(BaseTextField, {
      props: {
        required: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('required')).toBe(true)
  })

  it('v-model が正しく動作する', async () => {
    const wrapper = mount(BaseTextField, {
      props: {
        modelValue: 'test value',
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('modelValue')).toBe('test value')
  })
})
