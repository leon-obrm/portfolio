import type { WebsiteProps } from "../interfaces";

export const websites: WebsiteProps[] = [
    {
        title: "My second frontend framework",
        timeframe: "July 2022 - Now",
        description:
            "This is the website you are currently visiting and that I am working on at the moment. I chose Svelte for this because I ",
        learnings: ["Svelte", "Svelte Kit", "Tailwind", "Figma"],
        color: "bg-[#ff784d]",
        link: "/",
    },
    {
        title: "My first frontend framework",
        timeframe: "July 2021 - July 2022",
        description:
            "With this website I tried out my very first framework which actually is not even a framework but a library. Here I learned how to write component based source code and how to build overall better web applications.",
        learnings: ["React", "Material UI", "TypeScript", "Node.js", "Express"],
        color: "bg-[#90c4df]",
        link: "https://dev.obrm.de/",
    },
    {
        title: "My first website",
        timeframe: "September 2019 - April 2021",
        description:
            "This is my first website. I created it after my first lecture on web development sparked my interest. The website contains my first ever projects that I used to learn web technologies.",
        learnings: ["JavaScript", "HTML", "CSS", "SQL", "REST"],
        color: "bg-[#7ee660]",
        link: "https://obrm.de/index.php",
    },
];
