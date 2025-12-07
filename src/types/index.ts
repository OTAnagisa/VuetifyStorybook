export interface ListItem<T = unknown> {
  title: string
  value: T
  props?: Record<string, unknown>
}
