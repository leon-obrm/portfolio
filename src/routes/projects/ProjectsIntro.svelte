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
            class="absolute right-0 top-[55%] z-10 text-xl sm:text-2xl md:text-3xl lg:top-[65%] lg:text-4xl"
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
                    d="M95.9949 222.258C109.471 223.93 125.234 234.42 133.718 244.478C137.346 248.78 141.079 253.003 143.426 258.176C143.703 258.786 144.38 260.611 144.945 261.025C145.754 261.619 146.031 259.309 146.328 258.348C153.166 236.211 161.994 218.089 181.152 203.782"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray={135}
                    stroke-dashoffset={135}
                />
            </svg>
        </div>

        <!-- ======== Desktop Arrow ======== -->
        <div class="hidden scale-50 lg:flex xl:scale-75">
            <svg
                width="1309"
                height="772"
                viewBox="0 0 1309 772"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="path-3"
                    d="M1050.5 5C1149.5 -3 1373.05 35.7293 1284.41 167.782C1227.38 252.736 1137.58 304.496 1046.16 345.65C899.901 411.487 743.218 451.694 583.734 467.884C431.976 483.289 273.635 487.404 129 433.03C70.4186 411.007 -44.9304 357.585 27.057 285.597C111.773 200.881 309.234 201.294 382.139 296.07C461.916 399.78 443.992 536.488 443.992 659.661"
                    stroke="white"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-dasharray={2592}
                    stroke-dashoffset={2592}
                />
                <path
                    id="path-4"
                    d="M338 654.972C370.169 664.163 404.5 695.495 421.272 723.001C428.445 734.765 435.904 746.377 439.62 759.753C440.057 761.33 441.001 765.99 442.217 767.206C443.957 768.946 445.526 763.482 446.62 761.278C471.824 710.504 500.323 670.176 552.5 643"
                    stroke="white"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-dasharray={329}
                    stroke-dashoffset={329}
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
            stroke-dashoffset: 135;
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
            stroke-dashoffset: 2592;
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
            stroke-dashoffset: 329;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
