export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: 'twemoji:flag-us-outlying-islands',
  },
  ja: {
    name: 'Japanese',
    iso: 'ja',
    flag: 'twemoji:flag-for-flag-japan',
  },
}
