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
                class={`btn flex h-fit flex-1 flex-col gap-3 py-3 active:bg-paletti-500 active:text-white ${
                    $colorSettings.showGap === button.value
                        ? "scale-95 bg-paletti-500 text-white shadow-inner hover:bg-paletti-500"
                        : "shadow-md"
                }`}
                on:click={() => {
                    colorSettings.update((settings) => ({
                        ...settings,
                        showGap: button.value,
                    }))
                }}
            >
                <div class="drop-shadow-lg">
                    <svelte:component this={button.icon} size={28}></svelte:component>
                </div>
                <p>{button.text}</p>
            </button>
        {/each}
    </div>
</div>
