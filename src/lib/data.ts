export type Technology = {
  name: string
  description: string
  img_path: string,
  invertable?: boolean
}

export type Experience = {
    company: string,
    role: string,
    startDate: string,
    endDate: string
}

type Category = "web" | "mod" | "other";

export type Project = {
    title: string,
    description: string,
    category: Category,
    featured: boolean,
    image: string,
    link: string,
    tags: string[]
}

export const technologies: Technology[] = [
    {
        name: "Java",
        description: "Coding Language",
        img_path: "/logos/java.svg"
    },

    {
        name: "Kotlin",
        description: "A better version of Java",
        img_path: "/logos/kotlin.svg"
    },

    {
        name: "TypeScript",
        description: "A JavaScript Fix",
        img_path: "/logos/typescript.svg"
    },

    {
        name: "Python",
        description: "Coding Language",
        img_path: "/logos/python.svg"
    },

    {
        name: "SpringBoot",
        description: "Backend Framework",
        img_path: "/logos/springboot.svg"
    },

    {
        name: "React",
        description: "Frontend Framework",
        img_path: "/logos/react.svg"
    },

    {
        name: "NextJS",
        description: "React Framework",
        img_path: "/logos/nextjs.svg",
        invertable: true
    },

    {
        name: "TailwindCSS",
        description: "CSS Library",
        img_path: "/logos/tailwind.svg"
    },

    {
        name: "PostgreSQL",
        description: "SQL Database",
        img_path: "/logos/postgresql.svg"
    },

    {
        name: "Redis",
        description: "NoSQL Database",
        img_path: "/logos/redis.svg"
    },

    {
        name: "Git",
        description: "Version control",
        img_path: "/logos/git.svg"
    },

    {
        name: "SpigotAPI",
        description: "Minecraft Server Software",
        img_path: "/logos/spigotmc.svg",
        invertable: true
    }
]

export const experiences: Experience[] = [
    { company: "AtlantisRP", role: "Mod Developer", startDate: "Aug 2023", endDate: "July 2025" },
    { company: "WarAccademy", role: "Mod Developer", startDate: "May 2023", endDate: "Jun 2023" }
];

export const projects: Project[] = [
    { title: "InventoryTracker", description: "A simple inventory saver.", category: "mod", featured: false, image: "/showcases/inventorytracker.png", link: "https://modrinth.com/plugin/inventorytracker", tags: [ "SpigotMC", "MySql" ] },
    //{ title: "LumiBot.dev", description: "A powerful Discord bot dashboard and management system.", category: "web", featured: true, image: "/showcases/lumibot.png", link: "https://lumibot.dev", tags: [ "NextJS", "Framer Motion", "SpringBoot", "PostgreSQL", "Redis", "JDA" ] }
]