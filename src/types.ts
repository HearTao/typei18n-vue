export interface Provider<L, T> {
  readonly lang: L
  readonly t: T
  setLanguage(lang: L): Promise<void> | void
}
