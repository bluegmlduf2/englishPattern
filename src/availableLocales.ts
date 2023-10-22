export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'Korea',
    iso: 'ko',
    flag: 'twemoji:flag-south-korea',
  },
  ja: {
    name: 'Japanese',
    iso: 'ja',
    flag: 'twemoji:flag-for-flag-japan',
  },
}
