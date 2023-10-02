<script lang="ts">
    export let label: string
</script>

<div class="flex w-full max-w-md flex-col gap-2">
    <label for={label} class="font-semibold">{label}</label>
    <slot />
</div>
