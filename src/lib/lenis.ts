import Lenis from "lenis"

let lenis: Lenis | null = null

/** Creates lenis singleton. */
export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({ autoRaf: true })
    }

    return lenis
}

export function getLenis() {
    return lenis
}
