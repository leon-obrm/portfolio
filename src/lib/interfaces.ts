export interface Hash {
    [details: string]: string
}

export interface SkillProps {
    name: string
    abbreviation: string
    description: string
    hasLogo: boolean
    link: string
}

export interface WebsiteProps {
    title: string
    timeframe: string
    description: string
    learnings: string[]
    color: string
    hoverColor: string
    link: string
}

export interface ActivityProps {
    duration: string
    /** Links to i18n */
    key: string
}

export interface ColorProps {
    /** Degree on color wheel: 0 - 360 */
    hue: number
    /** Intensity of color: 0 - 100 */
    saturation: number
    /** Amount of light: 0 - 100 */
    lightness: number
}
