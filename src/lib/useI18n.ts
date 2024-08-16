import { getContext } from "svelte"
import type { Writable } from "svelte/store"
import type { i18n as i18nType } from "i18next"

/** Returns i18n store and reduces needed boilerplate. */
export function useI18n(): Writable<i18nType> {
    return getContext("i18n")
}
