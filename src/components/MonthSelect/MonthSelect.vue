<script setup lang="ts">
import { computed } from 'vue'
import type { ListItem } from '@/types'
import BaseAutocomplete from '@/components/BaseAutocomplete/BaseAutocomplete.vue'

export interface YearMonth {
  year: number
  month: number
}

export type ValueFormat = 'YYYYMM' | 'YYYY-MM' | 'YYYY/MM' | 'Date'
export type DisplayFormat = 'YYYY年MM月' | 'YYYY-MM' | 'YYYY/MM' | 'MM/YYYY'

const props = withDefaults(
  defineProps<{
    valueFormat?: ValueFormat
    displayFormat?: DisplayFormat
    startYearMonth?: string | YearMonth
    endYearMonth?: string | YearMonth
    readonly?: boolean
    disabled?: boolean
    loading?: boolean
    /**
     * メニューが開いたときに値が未選択の場合、現在の年月を自動設定するかどうか
     */
    autoSelectCurrentMonth?: boolean
  }>(),
  {
    valueFormat: 'YYYYMM',
    displayFormat: 'YYYY年MM月',
    autoSelectCurrentMonth: true,
  }
)

const model = defineModel<string | null>({})

defineOptions({
  inheritAttrs: false,
})

const getCurrentYearMonth = (): YearMonth => {
  const now = new Date()
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  }
}

const yearMonthToYYYYMM = (year: number, month: number): string => {
  return `${year}${String(month).padStart(2, '0')}`
}

const yyyymmToYearMonth = (yyyymm: string): YearMonth | null => {
  if (!/^\d{6}$/.test(yyyymm)) return null
  const year = parseInt(yyyymm.substring(0, 4), 10)
  const month = parseInt(yyyymm.substring(4, 6), 10)
  if (month < 1 || month > 12) return null
  return { year, month }
}

const formatDisplay = (year: number, month: number): string => {
  const yearStr = String(year)
  const monthStr = String(month).padStart(2, '0')

  switch (props.displayFormat) {
    case 'YYYY年MM月':
      return `${yearStr}年${monthStr}月`
    case 'YYYY-MM':
      return `${yearStr}-${monthStr}`
    case 'YYYY/MM':
      return `${yearStr}/${monthStr}`
    case 'MM/YYYY':
      return `${monthStr}/${yearStr}`
    default:
      return `${yearStr}年${monthStr}月`
  }
}

const formatValue = (yearMonth: YearMonth | null): string | null => {
  if (!yearMonth) return null

  const yyyymm = yearMonthToYYYYMM(yearMonth.year, yearMonth.month)

  switch (props.valueFormat) {
    case 'YYYYMM':
      return yyyymm
    case 'YYYY-MM':
      return `${yyyymm.substring(0, 4)}-${yyyymm.substring(4, 6)}`
    case 'YYYY/MM':
      return `${yyyymm.substring(0, 4)}/${yyyymm.substring(4, 6)}`
    case 'Date':
      return new Date(yearMonth.year, yearMonth.month - 1).toISOString()
    default:
      return yyyymm
  }
}

const parseValue = (value: string | null): YearMonth | null => {
  if (!value) return null

  if (props.valueFormat === 'Date') {
    const date = new Date(value)
    if (isNaN(date.getTime())) return null
    return { year: date.getFullYear(), month: date.getMonth() + 1 }
  }

  let yyyymm: string

  if (/^\d{6}$/.test(value)) {
    yyyymm = value
  } else if (/^\d{4}-\d{2}$/.test(value)) {
    yyyymm = value.replace(/-/g, '')
  } else if (/^\d{4}\/\d{2}$/.test(value)) {
    yyyymm = value.replace(/\//g, '')
  } else {
    return null
  }

  return yyyymmToYearMonth(yyyymm)
}

const getYearMonthRange = (): { start: YearMonth; end: YearMonth } => {
  const current = getCurrentYearMonth()

  if (props.startYearMonth && props.endYearMonth) {
    const start =
      typeof props.startYearMonth === 'string'
        ? yyyymmToYearMonth(props.startYearMonth)!
        : props.startYearMonth
    const end =
      typeof props.endYearMonth === 'string'
        ? yyyymmToYearMonth(props.endYearMonth)!
        : props.endYearMonth
    return { start, end }
  }

  // デフォルト: 現在の年月から前後1年
  return {
    start: {
      year: current.year - 1,
      month: current.month,
    },
    end: {
      year: current.year + 1,
      month: current.month,
    },
  }
}

const generateYearMonthItems = (): ListItem<string>[] => {
  const { start, end } = getYearMonthRange()
  const sortedItems: ListItem<string>[] = []

  let year = start.year
  let month = start.month

  while (year < end.year || (year === end.year && month <= end.month)) {
    const yyyymm = yearMonthToYYYYMM(year, month)
    sortedItems.push({
      title: formatDisplay(year, month),
      value: yyyymm,
    })

    month++
    if (month > 12) {
      month = 1
      year++
    }
  }

  return sortedItems
}

const items = computed(() => generateYearMonthItems())

const internalModel = computed<string | null>({
  get: () => {
    if (!model.value) return null
    const yearMonth = parseValue(model.value)
    return yearMonth ? yearMonthToYYYYMM(yearMonth.year, yearMonth.month) : null
  },
  set: (value: string | null) => {
    if (!value) {
      model.value = null
      return
    }
    const yearMonth = yyyymmToYearMonth(value)
    model.value = yearMonth ? formatValue(yearMonth) : null
  },
})

const isValid = computed(() => {
  if (!internalModel.value) return true

  const yearMonth = yyyymmToYearMonth(internalModel.value)
  if (!yearMonth) return false

  const { start, end } = getYearMonthRange()
  const yyyymm = yearMonthToYYYYMM(yearMonth.year, yearMonth.month)
  const startYYYYMM = yearMonthToYYYYMM(start.year, start.month)
  const endYYYYMM = yearMonthToYYYYMM(end.year, end.month)

  return yyyymm >= startYYYYMM && yyyymm <= endYYYYMM
})

const onUpdateMenu = (isOpen: boolean) => {
  if (isOpen && props.autoSelectCurrentMonth) {
    // メニューが開いたときに値が未選択の場合、現在の年月を自動設定
    if (!model.value || model.value === '') {
      const current = getCurrentYearMonth()
      const currentYearMonth = formatValue(current)
      if (currentYearMonth) {
        // 現在の年月が選択範囲内か確認
        const currentYYYYMM = yearMonthToYYYYMM(current.year, current.month)
        const { start, end } = getYearMonthRange()
        const startYYYYMM = yearMonthToYYYYMM(start.year, start.month)
        const endYYYYMM = yearMonthToYYYYMM(end.year, end.month)

        if (currentYYYYMM >= startYYYYMM && currentYYYYMM <= endYYYYMM) {
          model.value = currentYearMonth
        }
      }
    }
  }
}
</script>

<template>
  <BaseAutocomplete
    v-bind="$attrs"
    v-model="internalModel as any"
    :items="items"
    :readonly="readonly"
    :disabled="disabled"
    :loading="loading"
    :error="!isValid && model !== null && model !== ''"
    :error-messages="!isValid && model !== null && model !== '' ? ['選択範囲外の年月です'] : []"
    @update:menu="onUpdateMenu"
  />
</template>
