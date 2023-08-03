export interface Hash {
    [details: string]: string;
}

export interface SkillProps {
    name: string;
    abbreviation: string;
    description: string;
    hasLogo: boolean;
    link: string;
}

export interface WebsiteProps {
    title: string;
    timeframe: string;
    description: string;
    learnings: string[];
    color: string;
    hoverColor: string;
    link: string;
}

export interface ActivityProps {
    duration: string;
    name: string;
}
