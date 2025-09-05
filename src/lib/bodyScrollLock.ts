import { lock, unlock } from "tua-body-scroll-lock"
import { getLenis } from "./lenis"

/** Locks / unlocks body and stops / starts lenis based on condition. */
export function bodyScrollLock(shouldLock: boolean, targetElement?: HTMLDivElement | null) {
    if (shouldLock) {
        lock(targetElement)
        getLenis()?.stop()
    } else {
        unlock(targetElement)
        getLenis()?.start()
    }
}
