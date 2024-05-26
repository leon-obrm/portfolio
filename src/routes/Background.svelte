<!-- DARK -->
<!-- <div
    class="fixed -z-30 hidden h-screen w-screen bg-gradient-to-br from-primary-900 to-primary-950 dark:flex"
/> -->

<!-- LIGHT -->
<!-- <div
    class="fixed -z-30 h-screen w-screen bg-gradient-to-br from-primary-100 to-primary-50 dark:hidden"
    /> -->
<!-- <span class="fixed left-40 top-40 -z-30 h-[200px] w-[200px] bg-red-800" /> -->
<!-- <span
    class="fixed -left-[2vw] top-[0vh] -z-30 h-[110vh] w-[40vw] rounded-full bg-gradient-to-r from-[#F491F8] to-[#FEF0FF]"
/>
<span
    class="fixed -right-[3vw] -top-[1vh] -z-30 h-[110vh] w-[70vw] rounded-full bg-gradient-to-l from-primary-200 to-primary-50"
/>
<span
    class="fixed -bottom-[3vh] left-[20vw] -z-30 h-[35vh] w-[60vw] rounded-full bg-gradient-to-t from-[#91B7F8] to-[#F0F5FF]"
/> -->

<!-- Background blur -->
<!-- <span class="fixed -z-10 h-screen w-screen backdrop-blur-[8vmax]" /> -->

<div class="fixed -z-10 h-screen w-screen"></div>

<style>
    /* div {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23004E77' cx='50' cy='0' r='50'/%3E%3Cg fill='%2313557d' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23205c84' cx='50' cy='100' r='50'/%3E%3Cg fill='%232a638a' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23346b91' cx='50' cy='200' r='50'/%3E%3Cg fill='%233d7297' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23467a9e' cx='50' cy='300' r='50'/%3E%3Cg fill='%234e81a5' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%235789ab' cx='50' cy='400' r='50'/%3E%3Cg fill='%236090b2' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%236898b9' cx='50' cy='500' r='50'/%3E%3Cg fill='%2371a0c0' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%237aa8c7' cx='50' cy='600' r='50'/%3E%3Cg fill='%2382b0cd' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%238bb8d4' cx='50' cy='700' r='50'/%3E%3Cg fill='%2394c0db' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%239dc8e2' cx='50' cy='800' r='50'/%3E%3Cg fill='%23a6d0e9' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23afd8f1' cx='50' cy='900' r='50'/%3E%3Cg fill='%23b8e1f8' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23C1E9FF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");

        background-repeat: repeat;
    } */

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    div {
        background: linear-gradient(
            -75deg,
            rgba(155, 246, 255),
            rgba(158, 218, 255),
            rgba(255, 198, 255)
        );

        background-size: 400% 400%;
        animation: gradient 10s linear infinite;
    }
</style>
