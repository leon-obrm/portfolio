import i18next from "i18next"
import { createI18nStore } from "svelte-i18next"

// Translations
import { en } from "./translations/en"
import { de } from "./translations/de"

i18next.init({
    lng: "en",
    resources: {
        en,
        de,
    },
    interpolation: {
        escapeValue: false, // not needed for svelte as it escapes by default
    },
})

export default () => createI18nStore(i18next)
