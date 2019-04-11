import * as tsx from 'vue-tsx-support'
import { Component, Inject } from 'vue-property-decorator' 
import { RootType, Language } from 'i18n'
import { Provider } from '../src';

@Component
export default class Playground extends tsx.Component<{}> {
  @Inject()
  i18n: Provider<Language, RootType>

  render () {
    const { t } = this.i18n
    
    return (
      <div>
        <div>
          {t.test.hehe},{t.test.what}
        </div>
        <select onInput={e => {
          this.i18n.setLanguage((e.target as HTMLSelectElement).value as Language)
        }}>
          <option value="en-US">en-US</option>
          <option value="zh-CN">zh-CN</option>
        </select>
      </div>
    )
  }
}
