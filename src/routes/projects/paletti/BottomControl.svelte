<script lang="ts">
    import UndoRedo from "./UndoRedo.svelte"
    import DiceButton from "./DiceButton.svelte"
    import { getContext } from "svelte"

    const moveHistory: (direction: "forward" | "back") => void = getContext("moveHistory")
</script>

<svelte:window
    on:keydown={(e) => {
        if (!e.ctrlKey) return

        if (e.key === "z") moveHistory("back")
        else if (e.key === "y") moveHistory("forward")
    }}
/>

<div class="mb-6 flex w-full justify-center">
    <div
        class="flex items-center gap-10 rounded-full border-2 border-gray-200 bg-gray-100 px-10 py-4 shadow-md"
    >
        <UndoRedo direction="back" />
        <DiceButton />
        <UndoRedo direction="forward" />
    </div>
</div>
