<script lang="ts">
    import { inview } from "svelte-inview"

    export let containerClass: string = ""
    export let rootMargin: string = "-10%"

    let isInView: boolean
    const options = {
        rootMargin,
        unobserveOnEnter: true,
    }
</script>

<div
    class={containerClass}
    use:inview={options}
    on:inview_enter={() => {
        isInView = true
    }}
>
    {#if isInView}
        <slot />
    {:else}
        <div class="w-full opacity-0">
            <slot />
        </div>
    {/if}
</div>
