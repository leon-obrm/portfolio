<script lang="ts">
    export let showDrawer: boolean
</script>

<!-- ======== Mobile Hamburger Menu ======== -->
<div class="fixed right-[5px] top-[6px] z-50 flex lg:hidden">
    <button
        class="p-4"
        on:click={() => {
            showDrawer = !showDrawer
        }}
    >
        <div
            class="flex h-5 w-8 flex-col justify-between gap-2 [&_*]:h-px [&_*]:w-full [&_span]:rounded-full [&_span]:bg-white"
        >
            <span class="transition-opacity {showDrawer && 'opacity-0'}" />

            <!-- ======== Inner Line (Turns into X) ======== -->
            <div class="relative">
                <span
                    class="absolute left-0 top-0 transition-transform {showDrawer && 'rotate-45'}"
                />
                <span
                    class="absolute left-0 top-0 transition-transform {showDrawer && '-rotate-45'}"
                />
            </div>

            <span class="transition-opacity {showDrawer && 'opacity-0'}" />
        </div>
    </button>
</div>
