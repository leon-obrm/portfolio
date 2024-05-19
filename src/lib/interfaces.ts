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
    link: string
}

/** Describes a single activity */
export interface ActivityProps {
    duration: string
    /** Links to i18n */
    key: string
}

/** Describes a link to another website */
export interface LinkProps {
    name: string
    link: string
    icon?: any
}

/** Describes a single color palette used in tailwind.config */
export interface TailwindPalette {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    DEFAULT: string
    "600": string
    "700": string
    "800": string
    "900": string
    "950": string
}

/** Describes the 'colors' object used in tailwind.config */
export interface TailwindColors {
    gray: TailwindPalette
    primary: TailwindPalette
}
