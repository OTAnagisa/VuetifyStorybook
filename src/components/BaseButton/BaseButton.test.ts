import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BaseButton from './BaseButton.vue'

const vuetify = createVuetify({
  components,
  directives,
})

describe('BaseButton', () => {
  it('コンポーネントがマウントされる', () => {
    const wrapper = mount(BaseButton, {
      global: {
        plugins: [vuetify],
      },
      slots: {
        default: 'Click me',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toBe('Click me')
  })

  it('variant プロパティが適用される', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'outlined',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('variant')).toBe('outlined')
  })

  it('size プロパティが適用される', () => {
    const wrapper = mount(BaseButton, {
      props: {
        size: 'large',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('size')).toBe('large')
  })

  it('color プロパティが適用される', () => {
    const wrapper = mount(BaseButton, {
      props: {
        color: 'primary',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('color')).toBe('primary')
  })

  it('disabled プロパティが適用される', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('disabled')).toBe(true)
    expect(wrapper.classes()).toContain('base-button--disabled')
  })

  it('loading プロパティが適用される', () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('loading')).toBe(true)
  })

  it('block プロパティが適用される', () => {
    const wrapper = mount(BaseButton, {
      props: {
        block: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('block')).toBe(true)
  })

  it('rounded プロパティが適用される', () => {
    const wrapper = mount(BaseButton, {
      props: {
        rounded: 'lg',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('rounded')).toBe('lg')
  })

  it('prependスロットが表示される', () => {
    const wrapper = mount(BaseButton, {
      global: {
        plugins: [vuetify],
      },
      slots: {
        prepend: '<span class="prepend-icon">Icon</span>',
        default: 'Button',
      },
    })

    expect(wrapper.find('.prepend-icon').exists()).toBe(true)
  })

  it('appendスロットが表示される', () => {
    const wrapper = mount(BaseButton, {
      global: {
        plugins: [vuetify],
      },
      slots: {
        default: 'Button',
        append: '<span class="append-icon">Icon</span>',
      },
    })

    expect(wrapper.find('.append-icon').exists()).toBe(true)
  })
})
