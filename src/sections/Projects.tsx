import {
    SiPython,
    SiReact,
    SiSupabase,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiMongodb,
    SiFastapi,
    SiTailwindcss,
    SiLangchain,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

import {
    FiGithub,
    FiExternalLink
} from "react-icons/fi";

import TechIcon from "../components/TechIcon";

type Tech = {
    name: string;
    icon: React.ReactNode;
};

type Project = {

    number: string;

    title: string;

    description: string;

    tech: Tech[];

    github: string;

    demo?: string;

};

const projects: Project[] = [
    {
        number: "01",

        title: "Recall – AI Meeting Intelligence Platform",

        description:
            "Developed an AI-powered meeting intelligence platform that analyzes meeting transcripts to generate concise summaries, identify key decisions, extract action items, and enable semantic search through a Retrieval-Augmented Generation (RAG) conversational assistant. The platform also supports PDF and CSV report generation.",

        tech: [
            {
                name: "Python",
                icon: <SiPython className="text-[#3776AB]" />
            },
            {
                name: "FastAPI",
                icon: <SiFastapi className="text-[#009688]" />
            },
            {
                name: "React",
                icon: <SiReact className="text-[#61DAFB]" />
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-[#06B6D4]" />
            },
            {
                name: "Supabase",
                icon: <SiSupabase className="text-[#3ECF8E]" />
            },
            {
                name: "LangChain",
                icon: <SiLangchain className="text-[#1C3C3C]" />
            },
            {
                name: "ChromaDB",
                icon: <FaDatabase className="text-violet-400" />
            },
        ],

        github: "https://github.com/sne-web/Recall.",

        demo: "https://meeting-intelligence-hub-sand.vercel.app/"
    },
    {
        number: "02",

        title: "MediVault",

        description:
            "A secure full-stack medical records management application.",

        tech: [
            {
                name: "Python",
                icon: <SiPython className="text-[#3776AB]" />
            },
            {
                name: "HTML",
                icon: <SiHtml5 className="text-[#E34F26]" />
            },
            {
                name: "CSS",
                icon: <SiCss className="text-[#1572B6]" />
            },
            {
                name: "JavaScript",
                icon: <SiJavascript className="text-[#F7DF1E]" />
            },
            {
                name: "MongoDB",
                icon: <SiMongodb className="text-[#47A248]" />
            },
        ],

        github: "https://github.com/sne-web/MediVault"
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-8 py-32"
        >
            <h2 className="text-5xl font-bold">
                Projects
            </h2>

            <div className="mt-16 space-y-10">
                {projects.map((project) => (
                    <div
                        key={project.number}
                        className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900/60"
                    >
                        <p className="text-sm font-semibold tracking-[0.3em] text-violet-400">
                            {project.number}
                        </p>

                        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                            <div className="max-w-3xl">

                                <h3 className="text-3xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-5 leading-8 text-zinc-400">
                                    {project.description}
                                </p>

                            </div>

                            <div className="flex gap-3">

                                {project.tech.map((tech) => (

                                    <TechIcon
                                        key={tech.name}
                                        icon={tech.icon}
                                        name={tech.name}
                                    />

                                ))}

                            </div>

                        </div>

                        <div className="mt-8 flex flex-col gap-3">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex w-fit items-center gap-2 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-400"
                            >
                                <FiGithub className="transition-transform duration-300 group-hover:translate-x-1" />

                                GitHub Repository
                            </a>

                            {project.demo && (

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex w-fit items-center gap-2 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-400"
                                >
                                    <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1" />

                                    Live Demo
                                </a>

                            )}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;