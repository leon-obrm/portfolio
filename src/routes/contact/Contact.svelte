<script lang="ts">
    import ContactIntro from "./ContactIntro.svelte"
    import TextInput from "./TextInput.svelte"
    import SuccessPopup from "./SuccessPopup.svelte"
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()

    let submissionState: "idle" | "submitting" | "submitted" = "idle"
    let form: HTMLFormElement

    async function handleSubmit(event: Event) {
        // Prevent default form submission
        event.preventDefault()

        const formData = new FormData(form)

        try {
            const response = await fetch("/", { method: "POST", body: formData })

            if (response.ok) submissionState = "submitted"
        } catch (e: any) {
            console.log(`An error occured while submitting contact form: ${e.stack}`)
        }
    }
</script>

<ContactIntro />

<div class="relative flex w-full justify-center">
    <!-- ======== Scroll destination for links ======== -->
    <span class="absolute -top-20" id="contact" />

    <form
        class="flex w-full max-w-2xl flex-col gap-6 lg:gap-7"
        bind:this={form}
        method="POST"
        on:submit={handleSubmit}
    >
        <!-- ======== Contact ======== -->
        <h3 class="text-3xl font-bold tracking-wider lg:text-4xl lg:tracking-widest">
            {$i18n.t("contact")}
        </h3>

        <!-- ======== Name ======== -->
        <TextInput
            name={"name"}
            label={$i18n.t("yourName")}
            placeholder={$i18n.t("namePlaceholder")}
            {submissionState}
        />

        <!-- ======== Email ======== -->
        <TextInput
            name={"email"}
            label={$i18n.t("yourEmail")}
            placeholder={$i18n.t("emailPlaceholder")}
            isEmail
            {submissionState}
        />

        <!-- ======== Message ======== -->
        <TextInput
            name={"message"}
            label={$i18n.t("yourMessage")}
            placeholder={$i18n.t("messagePlaceholder")}
            isTextarea
            {submissionState}
        />

        <!-- ======== Send ======== -->
        <button
            class="rounded-xl bg-gray-50 p-3 font-semibold uppercase tracking-wider text-black shadow-image-glow transition-all hover:bg-gray-100 active:scale-95"
            type="submit"
            on:click={() => {
                submissionState = "submitting"
            }}
        >
            {$i18n.t("sendMessage")}
        </button>
    </form>
</div>

<SuccessPopup bind:submissionState {form} />
