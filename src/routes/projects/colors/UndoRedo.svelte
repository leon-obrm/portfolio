<script lang="ts">
    import { Redo, Undo } from "lucide-svelte"
    import { getContext } from "svelte"
    import { historyBack, historyForward } from "./store"

    const moveHistory: (direction: "forward" | "back") => void = getContext("moveHistory")
</script>

<button
    class="btn-circle btn"
    disabled={$historyBack.length < 2}
    on:click={() => {
        moveHistory("back")
    }}
>
    <Undo />
</button>

<button
    class="btn-circle btn"
    disabled={$historyForward.length === 0}
    on:click={() => {
        moveHistory("forward")
    }}
>
    <Redo />
</button>
