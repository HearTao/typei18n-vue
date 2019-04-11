import { Component } from 'vue-property-decorator'
import { Language } from 'i18n'
import Injector from './injector'

@Component
export default class Playground extends Injector<{}> {
  render() {
    const { t, setLanguage } = this

    return (
      <div>
        <div>
          {t.test.hehe},{t.test.what}
        </div>
        <select
          onInput={e => {
            setLanguage((e.target as HTMLSelectElement).value as Language)
          }}
        >
          <option value="en-US">en-US</option>
          <option value="zh-CN">zh-CN</option>
        </select>
      </div>
    )
  }
}
