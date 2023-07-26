import locale6010b66b from '../../lang/en-US.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en"},
  vueI18nLoader: false,
  locales: [{"code":"en","file":"en-US.js","name":"English"},{"code":"es","file":"es-ES.js","name":"Español"},{"code":"fr","file":"fr-FR.js","name":"Français"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "no_prefix",
  lazy: true,
  langDir: "/home/win7/Project/Nuxt/meta_net/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":true,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","file":"en-US.js","name":"English"},{"code":"es","file":"es-ES.js","name":"Español"},{"code":"fr","file":"fr-FR.js","name":"Français"}],
  localeCodes: ["en","es","fr"],
}

export const localeMessages = {
  'en-US.js': () => Promise.resolve(locale6010b66b),
  'es-ES.js': () => import('../../lang/es-ES.js' /* webpackChunkName: "lang-es-ES.js" */),
  'fr-FR.js': () => import('../../lang/fr-FR.js' /* webpackChunkName: "lang-fr-FR.js" */),
}
