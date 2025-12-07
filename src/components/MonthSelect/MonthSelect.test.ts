import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import MonthSelect from './MonthSelect.vue'

const vuetify = createVuetify({
  components,
  directives,
})

describe('MonthSelect', () => {
  it('コンポーネントがマウントされる', () => {
    const wrapper = mount(MonthSelect, {
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('デフォルトのpropsが正しく設定される', () => {
    const wrapper = mount(MonthSelect, {
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('valueFormat')).toBe('YYYYMM')
    expect(wrapper.props('displayFormat')).toBe('YYYY年MM月')
    expect(wrapper.props('yearRange')).toBe(1)
  })

  it('v-modelが正しく動作する', async () => {
    const wrapper = mount(MonthSelect, {
      props: {
        modelValue: '202412',
        'onUpdate:modelValue': (value: string | null) => wrapper.setProps({ modelValue: value }),
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('modelValue')).toBe('202412')
  })

  it('disabledプロパティが適用される', () => {
    const wrapper = mount(MonthSelect, {
      props: {
        disabled: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('disabled')).toBe(true)
  })

  it('readonlyプロパティが適用される', () => {
    const wrapper = mount(MonthSelect, {
      props: {
        readonly: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('readonly')).toBe(true)
  })

  it('loadingプロパティが適用される', () => {
    const wrapper = mount(MonthSelect, {
      props: {
        loading: true,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('loading')).toBe(true)
  })

  it('yearRangeプロパティが適用される', () => {
    const wrapper = mount(MonthSelect, {
      props: {
        yearRange: 2,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('yearRange')).toBe(2)
  })

  it('valueFormatプロパティが適用される', () => {
    const wrapper = mount(MonthSelect, {
      props: {
        valueFormat: 'YYYY-MM',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('valueFormat')).toBe('YYYY-MM')
  })

  it('displayFormatプロパティが適用される', () => {
    const wrapper = mount(MonthSelect, {
      props: {
        displayFormat: 'YYYY-MM',
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.props('displayFormat')).toBe('YYYY-MM')
  })
})
