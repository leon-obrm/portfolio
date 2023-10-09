<script lang="ts">
    import { Copy } from "lucide-svelte"
    import { colors } from "../store"
    import { onMount } from "svelte"

    /** Ref to modal element */
    let modal: any
    let currentOption: number = 0

    interface ExportOption {
        name: string
        lines: string[]
        fileName?: string
    }

    let exportLink: string[] = []
    $: {
        $colors
        exportLink = [window.location.href]
    }
    let exportCssVariables: string[] = []
    $: {
        let count: number = 9

        let cssVariables: string[] = [":root {\n"]

        $colors.forEach((color: string) => {
            cssVariables = [...cssVariables, `    --primary-${count}00: #${color};\n`]
            count--
        })

        cssVariables = [...cssVariables, "}"]

        exportCssVariables = cssVariables
    }
    let exportTailwindTheme: string[] = []
    $: {
        let count: number = 9

        let tailwindTheme: string[] = ["theme: {\n", "    extend: {\n", "        colors: {\n"]

        $colors.forEach((color: string) => {
            tailwindTheme = [...tailwindTheme, `            "primary-${count}00": "#${color}",\n`]
            count--
        })

        tailwindTheme = [...tailwindTheme, "        },\n", "    },\n", "},"]

        exportTailwindTheme = tailwindTheme
    }
    let exportArray: string[] = []
    $: exportArray = [`const colors: string[] = [${$colors.join(", ")}]`]

    let exportOptions: ExportOption[] = []
    $: exportOptions = [
        { name: "CSS Variables", lines: exportCssVariables },
        { name: "Tailwind CSS Theme", lines: exportTailwindTheme, fileName: "tailwind.config.js" },
        { name: "Link", lines: exportLink },
        { name: "Array", lines: exportArray },
    ]

    // TODO: Adapt tailwind export to object format
    // TODO: Add help links to each export option
    // TODO: Add export to realtimecolors

    let copyIsClicked = false
    let timeout: NodeJS.Timeout

    function copyExport() {
        // Copies export option to clipboard
        navigator.clipboard.writeText(exportOptions[currentOption].lines.join(""))

        // Shows "Copied!" for 1 second when clicked
        copyIsClicked = true
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            copyIsClicked = false
        }, 1000)
    }

    // Change export option and toggle dialog when receiving corresponding events
    onMount(() => {
        function changeExportOption(e: Event) {
            const customEvent = e as CustomEvent<any>

            const keyAsNumber: number = customEvent.detail

            if (keyAsNumber <= 0) return
            if (keyAsNumber > exportOptions.length) return
            if (!modal.open) return

            currentOption = keyAsNumber - 1
        }

        function toggleExport() {
            if (!modal.open) modal.showModal()
            else modal.close()
        }

        document.addEventListener("copyExport", copyExport)
        document.addEventListener("changeExportOption", changeExportOption)
        document.addEventListener("toggleExport", toggleExport)

        return () => {
            document.removeEventListener("copyExport", copyExport)
            document.removeEventListener("changeExportOption", changeExportOption)
            document.removeEventListener("toggleExport", toggleExport)
        }
    })
</script>

<div class="tooltip" data-tip="Show export options [e]">
    <button
        class="btn-primary btn w-full"
        on:click={() => {
            modal.showModal()
        }}
    >
        Export
    </button>
</div>
<dialog bind:this={modal} class="modal">
    <form method="dialog" class="modal-backdrop">
        <button></button>
    </form>
    <div class="modal-box fixed top-[10%] w-full max-w-5xl">
        <form method="dialog">
            <button class="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</button>
        </form>
        <h3 class="pb-4 text-lg font-bold">Export options</h3>
        <div class="tabs tabs-boxed bg-white px-0 pb-1.5">
            {#each exportOptions as exportOption, index}
                <button
                    class={`tab ${currentOption === index && "tab-active"}`}
                    on:click={() => {
                        currentOption = index
                    }}>{exportOption.name}</button
                >
            {/each}
        </div>
        <div class="mockup-code">
            <label class="swap-rotate swap absolute right-4 top-5">
                <input type="checkbox" bind:checked={copyIsClicked} on:change={copyExport} />
                <div class="swap-off flex content-center items-center justify-center">
                    <Copy size={28} />
                </div>
                <div class="swap-on">Copied!</div>
            </label>

            <div class="-mb-5 overflow-x-auto pb-5">
                {#if exportOptions[currentOption].fileName !== undefined}
                    <pre><code class="text-xs text-gray-300"
                            >{exportOptions[currentOption].fileName}</code
                        ></pre>
                {/if}
                {#each exportOptions[currentOption].lines as line, index}
                    <pre data-prefix={index + 1}><code>{line}</code></pre>
                {/each}
            </div>
        </div>
    </div>
</dialog>
