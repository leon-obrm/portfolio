import type { SkillProps } from "$lib/interfaces"

/** Skills that are not to be displayed in list, but may be displayed as a learning */
export const dismissedSkills: SkillProps[] = [
    {
        name: "Representational State Transfer",
        abbreviation: "REST",
        description: "Software architectural style",
        hasLogo: false,
        link: "restfulapi.net",
    },
    {
        name: "Hypertext Markup Language",
        abbreviation: "HTML",
        description: "Markup language of the web",
        hasLogo: true,
        link: "w3.org/html",
    },
    {
        name: "Cascading Style Sheets",
        abbreviation: "CSS",
        description: "Style sheet language of the web",
        hasLogo: true,
        link: "w3.org/style/css",
    },
    {
        name: "Structured Query Language",
        abbreviation: "SQL",
        description: "Database language",
        hasLogo: false,
        link: "wikipedia.org/wiki/SQL",
    },
    {
        name: "Git",
        abbreviation: "",
        description: "Version control system",
        hasLogo: true,
        link: "git-scm.com",
    },
]
