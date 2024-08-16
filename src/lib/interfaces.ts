/** Describes a single color palette used in tailwind.config. */
export interface ITailwindPalette {
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

/** Describes the 'colors' object used in tailwind.config. */
export interface ITailwindColors {
    gray: ITailwindPalette
}

/** Desribes a single project. */
export interface IProject {
    title: string
    timeframe: string
    paragraphs: string
    skills: string[]
    link: string
    gradientFrom: string
    gradientTo: string
}

/** Describes a single skill. */
export interface ISkill {
    name: string
    abbreviation: string
    description: string
    hasLogo: boolean
    link: string
    isHidden?: boolean
    backlight?: string
    customSize?: string
}

/** Describes a link. */
export interface ILink {
    name: string
    link: string
    icon?: unknown
}

/**
 * Describes the states a contact form submission can be in.
 * @type {"idle" | "verifying" | "submitting" | "submitted" | "error"}
 *
 * @description
 * - **idle**: The user has not yet interacted with the form.
 * - **verifying**: The user clicked on "submit" and it is being verified if the inputted data is allowed.
 * - **submitting**: The inputted data is allowed and is being processed by the backend.
 * - **submitted**: The form was successfully submitted.
 * - **error**: Something went wrong while submitting the form.
 */
export type SubmissionState = "idle" | "verifying" | "submitting" | "submitted" | "error"
