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

/** Describes the information needed for creating a color palette */
export interface PaletteConfig {
    /** Main / middle color of color palette in hex (without #) */
    mainColor: string
    /** Range: -100 - 100 */
    hueRotationAmount: number
}

/** Describes interface settings for color page */
export interface ColorSettings {
    showGap: boolean
}
