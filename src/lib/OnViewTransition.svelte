<script lang="ts">
    import { inview } from "svelte-inview";

    export let repeat: boolean = false;
    export let containerClass: string = "";
    export let rootMargin: string = "-10%";

    let isInView: boolean = false;
</script>

<div
    use:inview={{ unobserveOnEnter: !repeat, rootMargin: rootMargin }}
    on:change={({ detail }) => {
        isInView = detail.inView;
    }}
    class={containerClass}
>
    {#if isInView}
        <slot />
    {:else}
        <div class="w-full opacity-0">
            <slot />
        </div>
    {/if}
</div>
