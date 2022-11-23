<script lang="ts">
    import { inview } from "svelte-inview";

    export let repeat: boolean = false;

    let isInView: boolean = false;
</script>

<div
    use:inview={{ unobserveOnEnter: !repeat, rootMargin: "-10%" }}
    on:change={({ detail }) => {
        isInView = detail.inView;
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
