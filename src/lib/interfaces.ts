export interface Hash {
    [details: string]: string
}

/** Describes a single skill */
export interface SkillProps {
    name: string
    abbreviation: string
    description: string
    hasLogo: boolean
    link: string
}

/** Describes a single website */
export interface WebsiteProps {
    title: string
    timeframe: string
    description: string
    learnings: string[]
    color: string
    hoverColor: string
    link: string
}

/** Describes a single activity */
export interface ActivityProps {
    duration: string
    /** Links to i18n */
    key: string
}

/** Describes interface settings for color page */
export interface ColorSettings {
    showGap: boolean
}

/** Describes url state changes */
export interface StateChange {
    type: "update" | "add" | "remove" | "focus"
    mainColor?: string
    hueRotationAmount?: number
    focusedPalette?: number
    addToHistory?: boolean
}
