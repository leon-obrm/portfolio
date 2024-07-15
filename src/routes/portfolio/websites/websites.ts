import type { WebsiteProps } from "$lib/interfaces"

/** A list of my current projects */
export const websites: WebsiteProps[] = [
    {
        title: "Paletti",
        timeframe: "August 2023 - Now",
        description:
            "A minimalistic color palette creator. I always struggled with finding fitting colors for my web projects. That is why I created Paletti, an easy to use and fast way to create color palettes for web design.",
        learnings: ["Svelte", "Svelte Kit", "Tailwind CSS", "daisyUI"],
        link: "https://paletti.one/",
    },
    {
        title: "Boredom Buster",
        timeframe: "August 2023",
        description:
            "This is a quick side project that I created to find some inspiration when bored. It randomly chooses a fun activity and a fitting duration for you get up and have some fun.",
        learnings: ["Svelte", "Svelte Kit", "Tailwind CSS", "i18next"],
        link: "/projects/activities",
    },
    {
        title: "Portfolio",
        timeframe: "July 2022 - Now",
        description:
            "This is the website you are visiting right now. I chose to use Svelte to learn a new frontend framework and Figma to create UI mockups and improve my overall design skills.",
        learnings: ["Svelte", "Svelte Kit", "Tailwind CSS", "Figma", "daisyUI"],
        link: "/",
    },
    {
        title: "First Frontend framework",
        timeframe: "July 2021 - July 2022",
        description:
            "With this website I tried out my very first frontend framework: React. Here I learned how to write component based source code and improved my web development skills.",
        learnings: ["React", "Material UI", "TypeScript", "Express", "matter.js", "Socket.IO"],
        link: "https://dev.obrm.de/",
    },
    {
        title: "First Website",
        timeframe: "September 2019 - April 2021",
        description:
            "This is my first website. I created it after my first lecture on web development sparked my interest. This website contains my first ever projects that I used to learn web development.",
        learnings: ["JavaScript", "HTML", "CSS", "Git", "p5.js"],
        link: "https://obrm.de/index.php",
    },
]
