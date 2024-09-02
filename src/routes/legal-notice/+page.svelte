<script lang="ts">
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<div class="flex w-full justify-center pt-6">
    <div class="flex w-fit max-w-7xl flex-col gap-6 font-light">
        <h1 class="text-2xl font-semibold tracking-wider">{$i18n.t("legalNotice")}</h1>

        <h2 class="text-lg tracking-wide">{$i18n.t("informationAccordingDdg")}</h2>

        <div class="flex flex-col gap-0.5">
            <h3 class="text-lg font-semibold tracking-wide">{$i18n.t("address")}</h3>
            <p>Leon Obermann</p>
            <p>c/o IP-Management #42638</p>
            <p>Ludwig-Erhard-Str. 18</p>
            <p>20459 Hamburg</p>
            <p>{$i18n.t("germany")}</p>
        </div>

        <div class="flex flex-col gap-0.5">
            <h3 class="text-lg font-semibold tracking-wide">{$i18n.t("contactInformation")}</h3>
            <p>{$i18n.t("email")}: leon.oberm@gmail.com</p>
        </div>

        <div class="flex flex-col gap-0.5">
            <h3 class="text-lg font-semibold tracking-wide">{$i18n.t("euDisputeResolution")}</h3>
            <p>
                {$i18n.t("theEuropeanCommissionProvides")}:
                <a
                    class="underline underline-offset-2 transition-colors hover:text-gray-200"
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ec.europa.eu/consumers/odr
                </a>
            </p>
            <p>{$i18n.t("youCanFindMyEmailAbove")}</p>
        </div>
    </div>
</div>
