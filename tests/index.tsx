import * as tsx from 'vue-tsx-support'
import 'vue-tsx-support/enable-check'
import { Component } from 'vue-property-decorator' 
import { I18nProvider } from '../src';
import Playground from './playground';
import i18n from 'i18n'

@Component
export default class App extends tsx.Component<{}> {
  render () {
    return (
      <I18nProvider i18n={i18n}>
        <Playground/>
      </I18nProvider>
    )
  }
}