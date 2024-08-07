<div class="rotate-180 lg:scale-[2]">
    <div class="triangle relative bg-white"></div>
</div>

<style>
    /* Credit: https://stackoverflow.com/a/14451916 */
    .triangle:before,
    .triangle:after {
        content: "";
        position: absolute;
        background-color: inherit;
    }
    .triangle,
    .triangle:before,
    .triangle:after {
        width: 7px;
        height: 7px;
        border-top-right-radius: 40%;
    }

    .triangle {
        transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
    }
    .triangle:before {
        transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
    }
    .triangle:after {
        transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
    }
</style>
