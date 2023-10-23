<script lang="ts">
    import UndoRedo from "./UndoRedo.svelte"
    import DiceButton from "./DiceButton.svelte"
</script>

<div class="flex justify-center pb-6">
    <div
        class="flex items-center gap-10 rounded-full border-2 border-gray-200 bg-gray-100 px-10 py-4 shadow-md"
    >
        <UndoRedo direction="back" />
        <DiceButton />
        <UndoRedo direction="forward" />
    </div>
</div>
