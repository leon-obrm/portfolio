<script lang="ts">
    export let color: string
    export let showShadow: boolean = true
</script>

<div
    class="absolute top-0 left-0 w-full overflow-hidden leading-[0] {showShadow &&
        'drop-shadow-lg'}"
>
    <svg
        class="relative block h-[135px] w-[175%] sm:w-[calc(152%+1.3px)]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
    >
        <path
            d="M 321.39 76.44 c 60.027 -7.69 114.16 -30.13 172 -41.86 c 82.39 -16.72 168.19 -17.73 250.45 -0.39 C 863 60 906.67 72 985.66 92.83 c 70.05 18.48 146.53 26.09 214.34 3 V 0 H 0 V 27.35 A 600.21 600.21 0 0 0 321.39 76.44 Z"
            class="shape-fill"
            fill={color}
        ></path>
    </svg>
</div>
