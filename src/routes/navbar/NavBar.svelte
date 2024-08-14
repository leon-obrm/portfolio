<script lang="ts">
    import type { ILink } from "$lib/interfaces"
    import { useI18n } from "$lib/useI18n"

    import { Github, Linkedin } from "lucide-svelte"
    import HamburgerMenu from "./HamburgerMenu.svelte"
    import MobileDrawer from "./MobileDrawer.svelte"
    import DesktopNavBar from "./DesktopNavBar.svelte"
    import Name from "./Name.svelte"

    let showDrawer: boolean = false

    const i18n = useI18n()

    let internalLinks: ILink[]

    $: internalLinks = [
        {
            name: $i18n.t("projects"),
            link: "#projects",
        },
        {
            name: $i18n.t("skills"),
            link: "#skills",
        },
        {
            name: $i18n.t("about"),
            link: "#about",
        },
    ]

    const externalLinks: ILink[] = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/leon-obermann-171465208/",
            icon: Linkedin,
        },
        { name: "GitHub", link: "https://github.com/Jesus-Cries", icon: Github },
    ]

    const languages: string[] = ["en", "de"]
</script>

<Name />

<HamburgerMenu bind:showDrawer />

<MobileDrawer bind:showDrawer {internalLinks} {externalLinks} {languages} />

<DesktopNavBar {internalLinks} {externalLinks} {languages} />
