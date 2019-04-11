import { I18nInjector } from "../src";
import { Component } from 'vue-property-decorator' 
import i18n from 'i18n'

@Component
export default class Injector<P, E = {}, S = {}> extends I18nInjector<typeof i18n.lang, typeof i18n.t, P, E, S> { }
