import i18next from "i18next"
import { createI18nStore } from "svelte-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18next // Detect user language
    // Learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    tapToStart: "Tap to start",
                    minutesOf: "minutes of",

                    // 5 Minutes
                    brawling: "Brawling",
                    tickling: "Tickling",
                    dancing: "Dancing",
                    waterFight: "Water Fighting",
                    massaging: "Massaging",

                    // 15 Minutes
                    backDrawing: "Back Drawing",
                    alternatingDrawing: "Alternate Drawing",
                    workout: "Workout",
                    playingWithCats: "Playing With Cats",
                    takingPictures: "Taking Pictures",
                    cambio: "Cambio",
                    durak: "Durak",
                    twoPlayerGames: "Two Player Games",
                    braiding: "Braiding",
                    fiveQuickQuestions: "5 Quick Questions",

                    // 30 Minutes
                    ice: "Eating ice",
                    netflix: "Watching netflix",
                    talking: "Talking",
                    sims: "Sims",
                    painting: "Painting",
                    walking: "Walking",
                    overcooked: "Overcooked",
                    marioKart: "Mario Kart",
                    phase10: "Phase 10",
                    crafting: "Crafting",
                    makeup: "Make Up",
                },
            },
            de: {
                translation: {
                    tapToStart: "Tippe zum Starten",
                    minutesOf: "Minuten",

                    // 5 Minutes
                    brawling: "Raufen",
                    tickling: "Kitzeln",
                    dancing: "Tanzen",
                    waterFight: "Water Fight",
                    massaging: "Massieren",

                    // 15 Minutes
                    backDrawing: "Rückenzeichnen",
                    alternatingDrawing: "Abwechselnd zeichnen",
                    workout: "Workout",
                    playingWithCats: "Mit Katzen spielen",
                    takingPictures: "Bilder machen",
                    cambio: "Cambio",
                    durak: "Durak",
                    twoPlayerGames: "Two Player Games",
                    braiding: "Flechten",
                    fiveQuickQuestions: "5 schnelle Fragen",

                    // 30 Minutes
                    ice: "Eis essen",
                    netflix: "Netflix schauen",
                    talking: "Reden",
                    sims: "Sims",
                    painting: "Malen",
                    walking: "Spazieren",
                    overcooked: "Overcooked",
                    marioKart: "Mario Kart",
                    phase10: "Phase 10",
                    crafting: "Basteln",
                    makeup: "Schminken",
                },
            },
        },
        interpolation: {
            escapeValue: false, // not needed for svelte as it escapes by default
        },
    })

export const i18n = createI18nStore(i18next)
