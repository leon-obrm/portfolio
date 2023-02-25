<script lang="ts">
    import { Motion } from "svelte-motion";

    export let delay: number = 0;
    export let className: string = "";
</script>

<Motion
    let:motion
    initial={{ rotate: 180, scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
        mass: 3,
    }}
    whileHover={{ scale: 1.05 }}
>
    <div use:motion class={className}>
        <slot />
    </div>
</Motion>

<style>
    .hex {
        clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    }
</style>
