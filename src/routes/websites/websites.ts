import type { WebsiteProps } from "../../lib/interfaces";

/** A list of my current websites */
export const websites: WebsiteProps[] = [
    {
        title: "My second frontend framework",
        timeframe: "July 2022 - Now",
        description:
            "This is the website you are visiting. I chose Svelte as a frontend framework because of the promises that the new framework makes when it comes to the way code is written. In addition, I made use of Figma in order to improve my mockup and design skills.",
        learnings: ["Svelte", "Svelte Kit", "Tailwind CSS", "Figma"],
        color: "bg-primary-400",
        hoverColor: "bg-primary-300",
        link: "/",
    },
    {
        title: "My first frontend framework",
        timeframe: "July 2021 - July 2022",
        description:
            "With this website I tried out my very first framework which actually is not even a framework but a library. Here I learned how to write component based source code and how to build overall better web applications.",
        learnings: ["React", "Material UI", "TypeScript", "Node.js", "Express", "matter.js"],
        color: "bg-primary-400",
        hoverColor: "bg-primary-300",
        link: "https://dev.obrm.de/",
    },
    {
        title: "My first website",
        timeframe: "September 2019 - April 2021",
        description:
            "This is my first website. I created it after my first lecture on web development sparked my interest. The website contains my first ever projects that I used to learn web technologies.",
        learnings: ["JavaScript", "HTML", "CSS", "SQL", "REST", "p5.js"],
        color: "bg-primary-400",
        hoverColor: "bg-primary-300",
        link: "https://obrm.de/index.php",
    },
];
