<script lang="ts">
    import { Columns, StretchVertical } from "lucide-svelte"
    import { colorSettings } from "./store"

    interface ButtonProps {
        icon: typeof Columns | typeof StretchVertical
        text: string
        value: boolean
    }

    const buttons: ButtonProps[] = [
        {
            icon: Columns,
            text: "No gaps",
            value: false,
        },
        {
            icon: StretchVertical,
            text: "Gaps",
            value: true,
        },
    ]
</script>

<div class="flex w-full max-w-md flex-col gap-2">
    <label for="hue-rotation-amount" class="font-semibold">Spacing</label>
    <div class="flex w-full gap-2">
        {#each buttons as button}
            <button
                class={`btn flex h-fit flex-1 flex-col gap-2 border-2 border-gray-200 bg-white py-2.5 hover:bg-white active:text-paletti-600 ${
                    $colorSettings.showGap === button.value
                        ? "scale-95 text-paletti-600 shadow-inner"
                        : "shadow-md active:shadow-inner"
                }`}
                on:click={() => {
                    colorSettings.update((settings) => ({
                        ...settings,
                        showGap: button.value,
                    }))
                }}
            >
                <div class="drop-shadow-lg">
                    <svelte:component this={button.icon} size={24}></svelte:component>
                </div>
                <p class="text-xs">{button.text}</p>
            </button>
        {/each}
    </div>
</div>
