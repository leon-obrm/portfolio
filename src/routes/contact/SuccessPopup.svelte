<script lang="ts">
    import { fade } from "svelte/transition"
    import { useI18n } from "$lib/useI18n"
    import type { SubmissionState } from "$lib/interfaces"

    export let submissionState: SubmissionState = "submitted"
    export let form: HTMLFormElement

    const i18n = useI18n()
</script>

{#if submissionState === "submitted"}
    <div
        class="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/30 p-4 backdrop-blur-[10vmax]"
        transition:fade={{ duration: 150 }}
    >
        <div class="flex -translate-y-8 flex-col items-center justify-center gap-8 lg:gap-9">
            <div class="flex flex-col gap-3 lg:gap-4">
                <h2 class="text-center text-2xl font-medium tracking-wider lg:text-3xl">
                    {$i18n.t("emailThanks")}
                </h2>
                <h3 class="text-center text-lg lg:text-xl">
                    {$i18n.t("emailAppreciate")}
                </h3>
            </div>
            <button
                class="rounded-xl bg-gray-50 px-10 py-3 font-semibold uppercase tracking-wider text-black shadow-image-glow transition-all hover:bg-gray-100 active:scale-95"
                on:click={() => {
                    submissionState = "idle"
                    form.reset()
                }}
            >
                {$i18n.t("back")}
            </button>
        </div>
    </div>
{/if}
