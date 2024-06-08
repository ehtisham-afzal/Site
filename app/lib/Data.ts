import RxResumeExport from "../lib/RxResumeExport.json" // Importing the JSON file;

export const SocialLinks = [
    {
        Name: "LinkedIn",
        IdURL: "https://www.linkedin.com/in/ehtisham-afzal/",
        IconURL:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
        Name: "Github",
        IdURL: "https://github.com/ehtisham-afzal",
        IconURL:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        Name: "X (twitter)",
        IdURL: "https://twitter.com/ehtisham_dev",
        IconURL:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
    },
];

export const LittleLemonStack = [
    {
        Name: "React",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        Name: "Express",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        Name: "MongoDB",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
        Name: "Redux",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
        Name: "ShadCN-UI",
        ImageURL: "https://avatars.githubusercontent.com/u/139895814?s=48&v=4",
    },
]

type ProjectIconImage = {
    Icon: string;
    Image: string;
};

const ProjectsIconsImages: Record<string, ProjectIconImage> = {
    "Little Lemon": {
        Icon: "/Projects/LittleLemon.svg",
        Image: "/Projects/LittleLemon.png",
    },
    "aitools.rest": {
        Icon: "/Projects/aitools.avif",
        Image: "/Projects/aitools_rest.png",
    },
    "KafalatYateem.com": {
        Icon: "/Projects/KafalatEYateemLogo.webp",
        Image: "/Projects/kafalatyateem.png"
    },
    "ehtisham.dev": {
        Icon: "/EA.svg",
        Image: "/og.jpg"
    },
    "OyeAI": {
        Icon: "/Projects/oyeaiLogo.png",
        Image: "/Projects/oyeai.png"
    }
};

const ImportedProjects = RxResumeExport.sections.projects.items.map((project) => {
    return {
        Name: project.name,
        Description: project.description,
        Summary: project.summary,
        ProjectIconUrl: ProjectsIconsImages[project.name]?.Icon,
        ProjectUrl: project.url.href,
        ProjectImageUrl: ProjectsIconsImages[project.name]?.Image,
        // remove spaces
        path: project.name.replace(/\s/g, ""),
        Keywords: project.keywords
    };
}
)
export const Projects = [
    // {
    //     Name: "Little Lemon",
    //     Description: "LittleLemon is a mobile-first full-stack web application that I developed using the MERN stack (MongoDB, Express, React, and Node.js). I learned how to build the front end of this application from the Meta-Front-End Developer Professional Certificate course on Coursera, taught by meta engineers. This e-commerce application has many features, such as a table booking form that could store the booking data in a MongoDB database and use it to avoid table overbooking a universal cart, a smooth shopping experience, a product showcase, and support pages. I created this application from scratch to demonstrate my skills and knowledge in front-end development.",
    //     ProjectIconUrl: "/Projects/LittleLemon.svg",
    //     ProjectUrl: "https://littlelemon-sham.vercel.app",
    //     ProjectImageUrl: "/Projects/LittleLemon.png",
    //     path: "LittleLemon"
    // },
    ...ImportedProjects
]

///  make dictionary of featured projects and then filter them from ImportedProjects
const FPDectionary = ["KafalatYateem.com", "OyeAI", "Little Lemon"]
export const FeaturedProjects = ImportedProjects.filter(project => FPDectionary.includes(project.Name))

export const AppLogos = [
    {
        Name: "HTML",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        href: "https://html.com/",
        Tage: "Language"
    },
    {
        Name: "CSS ",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        href: "https://www.w3.org/Style/CSS/Overview.en.html",
        Tage: "StyleSheet"
    },
    {
        Name: "JavaScript",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        href: "https://javascript.info",
        Tage: "Language"
    },
    {
        Name: "TypeScript",
        ImageURL: "/Logos/TypeScript.svg",
        href: "https://www.typescriptlang.org/",
        Tage: "Language"
    },
    {
        Name: "SQL",
        ImageURL: "/Logos/sql.svg",
        href: "https://learnsql.com/",
        Tage: "Language"
    },
    {
        Name: "SQLite",
        ImageURL: "/Logos/SQLite.svg",
        href: "https://www.sqlite.org",
        Tage: "Language"
    },
    {
        Name: "React",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        href: "https://React.dev",
        Tage: "UI Library"
    },
    {
        Name: "NodeJS ",
        ImageURL: "/Logos/NodeJs.svg",
        href: "https://nodejs.org/",
        Tage: "RunTime"
    },
    {
        Name: "NextJs",
        ImageURL: "/Logos/NextJs.svg",
        href: "https://nextjs.org",
        Tage: "Framework"
    },
    {
        Name: "T3 Stack",
        ImageURL: "/Logos/T3Stack.svg",
        href: "https://t3.gg",
        Tage: "TechStack"
    },
    {
        Name: "Vercel",
        ImageURL: "/Logos/vercel.svg",
        href: "https://vercel.com/home",
        Tage: "Cloud"
    },
    {
        Name: "Netlify",
        ImageURL: "/Logos/Netlify.svg",
        href: "https://www.netlify.com/",
        Tage: "Cloud"
    },
    {
        Name: "Framer",
        ImageURL: "/Logos/Framer-motion.svg",
        href: "https://framer.com",
        Tage: "NoCode website builder"
    },
    {
        Name: "Astro",
        ImageURL: "/Logos/Astro.svg",
        href: "https://astro.build/",
        Tage: "Framework"
    },
    {
        Name: "PostgreSQL",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
        href: "https://www.postgresql.org/",
        Tage: "Languege"
    },
    {
        Name: "Neon",
        ImageURL: "/Logos/Neon.svg",
        href: "https://neon.tech",
        Tage: "DataBase"
    },
    {
        Name: "Turso",
        ImageURL: "/Logos/Turso.svg",
        href: "https://turso.tech",
        Tage: "DataBase"
    },
    {
        Name: "Drizzle",
        ImageURL: "/Logos/drizzle.png",
        href: "https://orm.drizzle.team/",
        Tage: "O R M"
    },
    {
        Name: "Prisma",
        ImageURL: "/Logos/Prisma.svg",
        href: "https://www.prisma.io",
        Tage: "O R M"
    },
    {
        Name: "MongoDB",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        href: "https://www.mongodb.com/",
        Tage: "DataBase"
    },
    {
        Name: "Express",
        ImageURL: "/Logos/Express.svg",
        href: "https://expressjs.com/",
        Tage: "Backend"
    },
    {
        Name: "Git ",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        href: "https://git-scm.com/",
        Tage: "Version Controle"
    },
    {
        Name: "Github",
        ImageURL: "/Logos/Github.svg",
        href: "https://github.com",
        Tage: "Software"
    },
    {
        Name: "Github Copilot",
        ImageURL: "/Logos/GitHubCopilot.svg",
        href: "https://github.com/features/copilot",
        Tage: "AI Software"
    },
    {
        Name: "PostMan",
        ImageURL: "/Logos/Postman.svg",
        href: "https://getpostman.com",
        Tage: "Software"
    },
    {
        Name: "Npm ",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        href: "https://npmjs.com",
        Tage: "Package Manager"
    },
    {
        Name: "Pnpm ",
        ImageURL: "/Logos/Pnpm.svg",
        href: "https://pnpm.io",
        Tage: "Package Manager"
    },
    {
        Name: "Yarn",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
        href: "https://yarnpkg.com",
        Tage: "Package Manager"
    },
    {
        Name: "TailwindCSS",
        ImageURL: "/Logos/TailwindCss.svg",
        href: "https://tailwindcss.com",
        Tage: "CSS Framework"
    },
    {
        Name: "Framer-Motion",
        ImageURL: "/Logos/Framer-motion.svg",
        href: "https://framer.com/motion",
        Tage: "Animation"
    },
    {
        Name: "Redux",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        href: "https://redux.js.org/",
        Tage: "G State Manager"
    },
    {
        Name: "MDX",
        ImageURL: "/Logos/MDX.svg",
        href: "https://mdxjs.com/",
        Tage: "Extention"
    },
    {
        Name: "Vite ",
        ImageURL: "/Logos/vite.svg",
        href: "https://vite.dev",
        Tage: "Framework"
    },
    {
        Name: "React-router ",
        ImageURL: "/Logos/react-router-mark-color-inverted.svg",
        href: "https://reactrouter.com/en/main",
        Tage: "SPA Routing"
    },
    {
        Name: "Cloudinary ",
        ImageURL: "/Logos/Cloudinary.svg",
        href: "https://cloudinary.com",
        Tage: "Cload Images"
    },

    {
        Name: "Resend ",
        ImageURL: "/Logos/Resend.svg",
        href: "https://resend.com/",
        Tage: "Mail Software"
    },
    {
        Name: "Algolia ",
        ImageURL: "/Logos/Algolia.svg",
        href: "https://www.algolia.com/",
        Tage: "Search Library"
    },

    {
        Name: "Vitest",
        ImageURL: "/Logos/vitest.svg",
        href: "https://vitest.dev/",
        Tage: "Testing"
    },
    {
        Name: "Jest",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        href: "https://jestjs.io/",
        Tage: "Testing"
    },
    {
        Name: "VSCode",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        href: "https://code.visualstudio.com/",
        Tage: "Code Editor"
    },
    {
        Name: "Figma ",
        ImageURL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        href: "https://figma.com",
        Tage: "Design Tool"
    },
    {
        Name: "ShadCN-UI",
        ImageURL: "/Logos/ShadCn.svg",
        href: "https://ui.shadcn.com/",
        Tage: "UI Library"
    },
    {
        Name: "Notion",
        ImageURL: "/Logos/Notion.svg",
        href: "https://notion.so/",
        Tage: "Software"
    },
    {
        Name: "Raindrop",
        ImageURL: "/Logos/Raindrop.svg",
        href: "https://raindrop.io/",
        Tage: "Software"
    },
];

export const CategorizedAppLogos = {
    Language: [
        {
            Name: 'HTML',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            href: 'https://html.com/',
            Tage: 'Language'
        },
        {
            Name: 'JavaScript',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            href: 'https://javascript.info',
            Tage: 'Language'
        },
        {
            Name: 'TypeScript',
            ImageURL: '/Logos/TypeScript.svg',
            href: 'https://www.typescriptlang.org/',
            Tage: 'Language'
        },
        {
            Name: 'SQL',
            ImageURL: '/Logos/sql.svg',
            href: 'https://learnsql.com/',
            Tage: 'Language'
        }
    ],
    StyleSheet: [
        {
            Name: 'CSS ',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            href: 'https://www.w3.org/Style/CSS/Overview.en.html',
            Tage: 'StyleSheet'
        }
    ],
    UILibrary: [
        {
            Name: 'React',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            href: 'https://React.dev',
            Tage: 'UI Library'
        },
        {
            Name: 'ShadCN-UI',
            ImageURL: '/Logos/ShadCn.svg',
            href: 'https://ui.shadcn.com/',
            Tage: 'UI Library'
        }
    ],
    RunTime: [
        {
            Name: 'NodeJS ',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            href: 'https://nodejs.org/',
            Tage: 'RunTime'
        }
    ],
    Framework: [
        {
            Name: 'NextJs',
            ImageURL: '/Logos/NextJs.svg',
            href: 'https://nextjs.org',
            Tage: 'Framework'
        },
        {
            Name: 'Astro',
            ImageURL: '/Logos/Astro.svg',
            href: 'https://astro.build/',
            Tage: 'Framework'
        },
        {
            Name: 'Vite ',
            ImageURL: '/Logos/vite.svg',
            href: 'https://vite.dev',
            Tage: 'Framework'
        }
    ],
    Cloud: [
        {
            Name: 'Vercel',
            ImageURL: '/Logos/vercel.svg',
            href: 'https://vercel.com/home',
            Tage: 'Cloud'
        }
    ],
    DataBase: [
        {
            Name: 'MongoDB',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
            href: 'https://www.mongodb.com/',
            Tage: 'DataBase'
        }
    ],
    Backend: [
        {
            Name: 'Express',
            ImageURL: '/Logos/Express.svg',
            href: 'https://expressjs.com/',
            Tage: 'Backend'
        }
    ],
    VersionControl: [
        {
            Name: 'Git ',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            href: 'https://git-scm.com/',
            Tage: 'Version Controle'
        }
    ],
    Software: [
        {
            Name: 'Github',
            ImageURL: '/Logos/Github.svg',
            href: 'https://github.com',
            Tage: 'Software'
        }
    ],
    PackageManager: [
        {
            Name: 'Npm ',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
            href: 'https://npmjs.com',
            Tage: 'Package Manager'
        },
        {
            Name: 'Yarn',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
            href: 'https://yarnpkg.com',
            Tage: 'Package Manager'
        }
    ],
    CSSFramework: [
        {
            Name: 'TailwindCSS',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            href: 'https://tailwindcss.com',
            Tage: 'CSS Framework'
        }
    ],
    Animation: [
        {
            Name: 'Framer-Motion',
            ImageURL: '/Logos/Framer-motion.svg',
            href: 'https://framer.com/motion',
            Tage: 'Animation'
        }
    ],
    StateManager: [
        {
            Name: 'Redux',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            href: 'https://redux.js.org/',
            Tage: 'G State Manager'
        }
    ],
    Extension: [
        {
            Name: 'MDX',
            ImageURL: '/Logos/MDX.svg',
            href: 'https://www.markdownguide.org/',
            Tage: 'Extention'
        }
    ],
    SPARouting: [
        {
            Name: 'React-router ',
            ImageURL: '/Logos/react-router-mark-color-inverted.svg',
            href: 'https://reactrouter.com/en/main',
            Tage: 'SPA Routing'
        }
    ],
    Testing: [
        {
            Name: 'Vitest',
            ImageURL: '/Logos/vitest.svg',
            href: 'https://vitest.dev/',
            Tage: 'Testing'
        },
        {
            Name: 'Jest',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
            href: 'https://jestjs.io/',
            Tage: 'Testing'
        }
    ],
    CodeEditor: [
        {
            Name: 'VSCode',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
            href: 'https://code.visualstudio.com/',
            Tage: 'Code Editor'
        }
    ],
    DesignTool: [
        {
            Name: 'Figma ',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
            href: 'https://figma.com',
            Tage: 'Design Tool'
        }
    ],
    UILib: [
        {
            Name: 'React',
            ImageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            href: 'https://React.dev',
            Tage: 'UI Library'
        },
        {
            Name: 'ShadCN-UI',
            ImageURL: '/Logos/ShadCn.svg',
            href: 'https://ui.shadcn.com/',
            Tage: 'UI Library'
        }
    ]
}