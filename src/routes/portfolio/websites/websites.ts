import type { WebsiteProps } from "$lib/interfaces"

/** A list of my current projects */
export const websites: WebsiteProps[] = [
    {
        title: "Paletti",
        timeframe: "August 2023 - Now",
        description:
            "A minimalistic color palette creator. I always struggled with finding fitting colors for my web projects. This is why I created Paletti, an easy to use and fast way to create color palettes for web design.",
        learnings: ["Svelte", "Svelte Kit", "Tailwind CSS", "daisyUI"],
        gradientStartColor: "#EB3379",
        gradientEndColor: "#FF87B0",
        link: "https://paletti.one/",
    },
    {
        title: "Boredom Buster",
        timeframe: "August 2023",
        description:
            "This quick project was created to help couples decide on what to do when they are bored. It is a simple web app that randomly chooses a duration and a fitting activity.",
        learnings: ["Svelte", "Svelte Kit", "Tailwind CSS", "i18next"],
        gradientStartColor: "#884ACF",
        gradientEndColor: "#BB90E7",
        link: "/projects/activities",
    },
    {
        title: "Portfolio",
        timeframe: "July 2022 - Now",
        description:
            "This is the website you are visiting. I chose Svelte as a frontend framework because of the promises that the new framework makes when it comes to the way code is written. In addition, I made use of Figma in order to improve my mockup and design skills.",
        learnings: ["Svelte", "Svelte Kit", "Tailwind CSS", "Figma", "daisyUI"],
        gradientStartColor: "#1B92D7",
        gradientEndColor: "#73C0ED",
        link: "/",
    },
    {
        title: "First Frontend framework",
        timeframe: "July 2021 - July 2022",
        description:
            "With this website I tried out my very first frontend framework / library. Here I learned how to write component based source code and how to build overall better web applications.",
        learnings: [
            "React",
            "Material UI",
            "TypeScript",
            "Node.js",
            "Express",
            "matter.js",
            "Socket.IO",
        ],
        gradientStartColor: "#323843",
        gradientEndColor: "#424a59",
        link: "https://dev.obrm.de/",
    },
    {
        title: "First Website",
        timeframe: "September 2019 - April 2021",
        description:
            "This is my first website. I created it after my first lecture on web development sparked my interest. The website contains my first ever projects that I used to learn web technologies.",
        learnings: ["JavaScript", "HTML", "CSS", "Git", "SQL", "REST", "p5.js"],
        gradientStartColor: "#D79642",
        gradientEndColor: "#EDC791",
        link: "https://obrm.de/index.php",
    },
]
