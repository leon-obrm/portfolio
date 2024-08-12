<script lang="ts">
    import ContactIntro from "./ContactIntro.svelte"
    import TextInput from "./TextInput.svelte"

    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<ContactIntro />

<div class="flex w-full justify-center">
    <div class="flex w-full max-w-2xl flex-col gap-6 lg:gap-7">
        <!-- ======== Contact ======== -->
        <h3 class="text-3xl font-bold tracking-wider lg:text-4xl lg:tracking-widest">
            {$i18n.t("contact")}
        </h3>

        <!-- ======== Name ======== -->
        <TextInput
            name={"name"}
            label={$i18n.t("yourName")}
            placeholder={$i18n.t("namePlaceholder")}
        />

        <!-- ======== Email ======== -->
        <TextInput
            name={"email"}
            label={$i18n.t("yourEmail")}
            placeholder={$i18n.t("emailPlaceholder")}
        />

        <!-- ======== Message ======== -->
        <TextInput
            name={"message"}
            label={$i18n.t("yourMessage")}
            placeholder={$i18n.t("messagePlaceholder")}
            isTextarea
        />

        <!-- ======== Send ======== -->
        <button
            class="rounded-xl bg-gray-50 p-3 font-semibold uppercase tracking-wider text-black shadow-image-glow transition-all hover:bg-gray-100 active:scale-95"
        >
            {$i18n.t("sendMessage")}
        </button>
    </div>
</div>
