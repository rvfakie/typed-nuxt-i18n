import en from './locales/en.json';
import de from './locales/de.json';

type StringKey<T> = Extract<keyof T, string>;

type GenerateKeyPaths<T, Prefix extends string = ''> = T extends object
  ? {
      [K in StringKey<T>]: T[K] extends object
        ? GenerateKeyPaths<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[StringKey<T>]
  : Prefix;

type Locale = typeof en;

declare global {
  type I18nKeys = GenerateKeyPaths<Locale>;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t(key: I18nKeys): string;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t(key: I18nKeys): string;
  }
}

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends Locale {}
}

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  locale: 'en',
  warnHtmlMessage: 'warn',
  messages: {
    en,
    de,
  },
}));
