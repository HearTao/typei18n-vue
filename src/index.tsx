import * as tsx from 'vue-tsx-support'
import { Component, Provide, Prop } from 'vue-property-decorator'

export interface Provider<L, T> {
  readonly lang: L
  readonly t: T
  setLanguage(lang: L): Promise<void> | void
}

export interface Props<L, T> {
  i18n: Provider<L, T>
}

@Component
export default class I18nProvider<L, T> extends tsx.Component<Props<L, T>> {
  @Prop() readonly i18n: Provider<L, T>

  @Provide('i18n')
  readonly i18nProvider: Provider<L, T> = this.i18n

  render () {
    return this.$slots.default
  }
}