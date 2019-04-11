import * as tsx from 'vue-tsx-support'
import { Component, Inject } from 'vue-property-decorator'
import { Provider } from './types';

@Component
export default class InjectI18nComponent<L, T, P, E = {}, S = {}> extends tsx.Component<P, E, S> {
  @Inject()
  private i18n: Provider<L, T>

  public get t () {
    return this.i18n.t
  }

  public setLanguage(lang: L): Promise<void> {
    return this.i18n.setLanguage(lang) || Promise.resolve()
  } 
}
