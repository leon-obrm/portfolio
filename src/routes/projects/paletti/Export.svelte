<script lang="ts">
    import { colors } from "./store"

    interface ExportOption {
        name: string
        copy: () => void
    }

    function copyAsLink() {
        const link: string = window.location.href
        navigator.clipboard.writeText(link)
    }

    function copyAsCssVariables() {
        let count: number = 9

        let cssVariables: string = ":root {\n"

        $colors.forEach((color: string) => {
            cssVariables += `    --primary-${count}00: #${color};\n`
            count--
        })

        cssVariables += "}"

        console.log(cssVariables)

        navigator.clipboard.writeText(cssVariables)
    }

    function copyAsTailwindCssTheme() {
        let count: number = 9

        let tailwindTheme: string = "theme: {\n"
        tailwindTheme += "    extend: {\n"
        tailwindTheme += "        colors: {\n"

        $colors.forEach((color: string) => {
            tailwindTheme += `            "primary-${count}00": "#${color}",\n`
            count--
        })

        tailwindTheme += "        },\n"
        tailwindTheme += "    },\n"
        tailwindTheme += "},"

        navigator.clipboard.writeText(tailwindTheme)
    }

    function copyAsArray() {
        navigator.clipboard.writeText(JSON.stringify($colors))
    }

    const exportOptions: ExportOption[] = [
        { name: "Copy as link", copy: copyAsLink },
        { name: "Copy as CSS variables", copy: copyAsCssVariables },
        { name: "Copy as Tailwind CSS theme", copy: copyAsTailwindCssTheme },
        { name: "Copy as array", copy: copyAsArray },
    ]

    // TODO: Add help links to each export option
    // TODO: Add export to realtimecolors
</script>

<div class="dropdown-top dropdown w-full">
    <button tabindex="0" class="btn w-full">Export</button>
    <div class="dropdown-content menu rounded-box z-[1] w-full bg-base-100 p-2 shadow">
        {#each exportOptions as exportOption}
            <li>
                <button class="whitespace-nowrap" on:click={exportOption.copy}
                    >{exportOption.name}</button
                >
            </li>
        {/each}
    </div>
</div>
