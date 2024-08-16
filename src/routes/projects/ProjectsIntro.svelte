<script lang="ts">
    import InViewTransition from "$lib/InViewTransition.svelte"
    import { useI18n } from "$lib/useI18n"

    const i18n = useI18n()
</script>

<InViewTransition
    containerClass="flex w-full justify-center py-8 sm:py-24 md:py-32 lg:-my-36 lg:pb-6 lg:pt-0 xl:-mt-7 xl:pb-32"
>
    <div
        class="relative flex w-full max-w-md justify-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
    >
        <h2
            class="absolute right-0 top-[55%] text-xl sm:text-2xl md:text-3xl lg:top-[65%] lg:text-4xl"
        >
            {$i18n.t("exploreMyWork")}
        </h2>

        <!-- ======== Mobile Arrow ======== -->
        <div class="lg:hidden">
            <svg
                class="sm:scale-125 md:scale-150"
                width="292"
                height="270"
                viewBox="0 0 292 270"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="path-1"
                    d="M267.5 13.5C326.127 70.1563 262.616 112.53 179.386 121.964C152.362 125.028 123.868 125.909 96.7844 125.154C-49.2968 121.082 -2.41128 -3.75751 78.9973 72C128.22 117.806 119.325 163.974 140 226"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray={656}
                    stroke-dashoffset={656}
                />
                <path
                    id="path-2"
                    d="M87.064 220.722C106.41 231.14 123.204 243.024 139.606 257.569C141.151 258.939 143.971 262.425 146.272 260.251C149.175 257.509 151.249 252.655 153.138 249.279C160.967 235.291 172.5 213.5 180.5 198"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray={144}
                    stroke-dashoffset={144}
                />
            </svg>
        </div>

        <!-- ======== Desktop Arrow ======== -->
        <div class="hidden scale-50 lg:flex xl:scale-75">
            <svg
                width="1311"
                height="772"
                viewBox="0 0 1311 772"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="path-3"
                    d="M1052.5 5C1151.5 -3 1375.05 35.7293 1286.41 167.782C1265.35 199.154 1238.24 228.664 1208.85 252.216C1160.58 290.888 1104.32 320.369 1048.16 345.65C901.901 411.487 745.218 451.694 585.734 467.884C433.976 483.289 275.635 487.404 131 433.03C90.2979 417.729 28.2288 393.148 7.94839 350.559C-2.97439 327.622 13.2389 301.415 29.057 285.597C59.7829 254.871 97.3 242.54 139.018 235.362C228.303 220.001 324.148 218.081 384.139 296.07C463.916 399.78 445.992 536.488 445.992 659.661"
                    stroke="white"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-dasharray={2594}
                    stroke-dashoffset={2594}
                />
                <path
                    id="path-4"
                    d="M340 654.972C345.199 656.458 349.993 660.075 354.678 662.65C363.781 667.653 372.414 672.867 380.874 678.909C398.008 691.148 412.254 704.933 423.272 723.001C430.445 734.765 437.904 746.377 441.62 759.753C442.057 761.33 443.001 765.99 444.217 767.206C445.957 768.946 447.526 763.482 448.62 761.278C461.504 735.324 474.943 709.704 490.792 685.402C506.747 660.938 524.281 647.156 550.5 633.5"
                    stroke="white"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-dasharray={334}
                    stroke-dashoffset={334}
                />
            </svg>
        </div>
    </div>
</InViewTransition>

<style>
    /* Mobile Arrow - Line */
    #path-1 {
        animation: dash-1 1.5s ease-in-out forwards;
    }

    @keyframes dash-1 {
        from {
            stroke-dashoffset: 656;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    /* Mobile Arrow - Chevron */
    #path-2 {
        animation: dash-2 0.75s ease-out forwards 1.5s;
    }

    @keyframes dash-2 {
        from {
            stroke-dashoffset: 144;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    /* Desktop Arrow - Line */
    #path-3 {
        animation: dash-3 1.5s ease-in-out forwards;
    }

    @keyframes dash-3 {
        from {
            stroke-dashoffset: 2594;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    /* Desktop Arrow - Chevron */
    #path-4 {
        animation: dash-4 0.75s ease-out forwards 1.5s;
    }

    @keyframes dash-4 {
        from {
            stroke-dashoffset: 334;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
