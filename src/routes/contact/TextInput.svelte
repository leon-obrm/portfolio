<script lang="ts">
    export let name: string
    export let label: string
    export let placeholder: string
    export let isTextarea: boolean = false
    export let isEmail: boolean = false
    export let submissionState: "idle" | "verifying" | "submitting" | "submitted"
</script>

<div class="flex flex-col gap-2 lg:gap-3">
    <!-- ======== Label ======== -->
    <label class="font-semibold tracking-wide lg:text-lg" for={name}>{label}</label>
    {#if isTextarea}
        <!-- ======== Textarea ======== -->
        <textarea
            class="h-44 resize-none rounded-xl border border-gray-300 bg-transparent p-2 pl-5 tracking-wider placeholder:tracking-wide placeholder:text-gray-600 lg:h-60 lg:text-lg
            {submissionState === 'verifying' && 'invalid:border-red-700'}"
            {name}
            id={name}
            {placeholder}
            required
            maxlength="10000"
        ></textarea>
    {:else}
        <!-- ======== Text ======== -->
        <input
            class="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 tracking-wider placeholder:tracking-wide placeholder:text-gray-600 lg:text-lg
            {submissionState === 'verifying' && 'invalid:border-red-700'}"
            type={isEmail ? "email" : "text"}
            {name}
            id={name}
            {placeholder}
            required
            maxlength="100"
        />
    {/if}
</div>
