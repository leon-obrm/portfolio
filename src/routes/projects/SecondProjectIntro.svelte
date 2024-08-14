<script lang="ts">
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<div class="flex w-full justify-center py-6 xs:py-10 sm:py-16 md:py-24 xl:py-44">
    <div
        class="relative flex w-full max-w-md justify-center sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
    >
        <h2
            class="absolute left-0 top-[55%] text-lg xs:top-[63%] sm:text-xl md:text-2xl lg:text-3xl"
        >
            {$i18n.t("butWait")}
        </h2>

        <svg
            class="scale-95 sm:scale-100 md:scale-110 lg:scale-125 xl:scale-150"
            width="967"
            height="300"
            viewBox="0 0 967 655"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="path-5"
                d="M4.19922 4.19556C23.5 149 208.606 252.377 365.338 284.28C454.138 302.356 542.356 296.575 630.895 278.819C691.282 266.708 738.134 254.164 796.171 233.813C843.542 217.201 895.129 197.55 933.592 163.682C951.059 148.302 970.365 121.182 960.136 96.8289C949.462 71.4125 917.172 62.5713 892.081 62.3099C847.302 61.8434 798.23 81.6624 761.215 105.568C722.25 130.733 686.978 165.047 657.549 200.714C633.651 229.677 614.045 262.824 606.753 300.011C595.61 356.84 607.758 411.194 620.299 466.489C626.646 494.476 633.513 522.354 642.802 549.291C643.772 552.105 645.205 555.781 645.205 558.685"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
                stroke-dasharray={1893}
                stroke-dashoffset={1893}
            />
            <path
                id="path-6"
                d="M529.195 562.483C561.015 566.46 593.004 588.011 618.552 606.178C634.827 617.751 646.223 631.138 659.625 645.612C665.471 651.926 664.876 653.949 667.927 644.52C681.191 603.521 696.409 559.123 736 536.5C746.486 530.508 760.709 523.157 773.013 523.157"
                stroke="white"
                stroke-width="7"
                stroke-linecap="round"
                stroke-dasharray={344}
                stroke-dashoffset={344}
            />
        </svg>
    </div>
</div>

<style>
    /* Arrow - Line */
    #path-5 {
        animation: dash-5 1.5s ease-in-out forwards;
    }

    @keyframes dash-5 {
        from {
            stroke-dashoffset: 1893;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    /* Arrow - Chevron */
    #path-6 {
        animation: dash-6 0.75s ease-out forwards 1.5s;
    }

    @keyframes dash-6 {
        from {
            stroke-dashoffset: 344;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
