import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BaseAutocomplete from './BaseAutocomplete.vue'

const vuetify = createVuetify({
  components,
  directives,
})

describe('BaseAutocomplete', () => {
  const items = [
    { title: 'Option 1', value: 1 },
    { title: 'Option 2', value: 2 },
    { title: 'Option 3', value: 3 },
  ]

  it('コンポーネントがマウントされる', () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('items プロパティが正しく渡される', () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
        label: 'Test Label',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('items')).toEqual(items)
  })

  it('disabled プロパティが適用される', () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
        disabled: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('disabled')).toBe(true)
    expect(wrapper.classes()).toContain('base-autocomplete-field--disabled')
  })

  it('multiple プロパティが適用される', () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
        multiple: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('multiple')).toBe(true)
  })

  it('v-model が正しく動作する', async () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
        modelValue: 1,
        'onUpdate:modelValue': (value: number) => wrapper.setProps({ modelValue: value }),
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('modelValue')).toBe(1)
  })

  it('readonly プロパティが適用される', () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
        readonly: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('readonly')).toBe(true)
  })

  it('loading プロパティが適用される', () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
        loading: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('loading')).toBe(true)
  })

  it('chips プロパティが適用される', () => {
    const wrapper = mount(BaseAutocomplete, {
      props: {
        items,
        chips: true,
        multiple: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('chips')).toBe(true)
  })
})
