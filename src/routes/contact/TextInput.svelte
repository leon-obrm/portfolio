<script lang="ts">
    export let name: string
    export let label: string
    export let placeholder: string
    export let isTextarea: boolean = false
</script>

<div class="flex flex-col gap-2 lg:gap-3">
    <!-- ======== Label ======== -->
    <label class="font-semibold tracking-wide lg:text-lg" for={name}>{label}</label>
    {#if isTextarea}
        <!-- ======== Textarea ======== -->
        <textarea
            class="h-44 resize-none rounded-xl border border-gray-300 bg-transparent p-2 pl-5 tracking-wider placeholder:tracking-wide placeholder:text-gray-600 lg:h-60 lg:text-lg"
            {name}
            id={name}
            {placeholder}
        ></textarea>
    {:else}
        <!-- ======== Text ======== -->
        <input
            class="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 tracking-wider placeholder:tracking-wide placeholder:text-gray-600 lg:text-lg"
            type="text"
            {name}
            id={name}
            {placeholder}
        />
    {/if}
</div>
