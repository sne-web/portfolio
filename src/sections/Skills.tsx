import {
    SiPython,
    SiCplusplus,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiReact,
    SiGit,
    SiGithub,
    SiMongodb,
    SiSupabase,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";


type Skill = {
    name: string;
    icon: React.ReactNode;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const categories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },

            { name: "C", icon: <span className="font-bold text-slate-300">C</span> },

            { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },

            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },

            { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },

            { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },

            { name: "CrewAI", icon: <span>🤖</span> },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },

            { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <SiGit className="text-[#F05032]" /> },

            { name: "GitHub", icon: <SiGithub className="text-white" /> },

            { name: "VS Code", icon: <VscCode className="text-[#007ACC]" /> },
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-8 py-32"
        >
            <h2 className="text-5xl font-bold">
                Technical Skills
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
                {categories.map((category) => (
                    <div
                        key={category.title}
                        className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm"
                    >
                        <h3 className="mb-5 text-xl font-semibold tracking-wide text-zinc-100">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:bg-zinc-800"
                                >
                                    <span className="text-lg">
                                        {skill.icon}
                                    </span>

                                    <span className="text-sm text-zinc-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;