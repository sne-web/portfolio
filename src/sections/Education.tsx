type EducationItem = {
    years: string;
    institution: string;
    degree: string;
    score: string;
};

const education: EducationItem[] = [
    {
        years: "2023 – 2027",
        institution: "Government Model Engineering College",
        degree: "B.Tech in Computer Science & Engineering",
        score: "CGPA: 8.95",
    },
    {
        years: "2021 – 2023",
        institution: "Devagiri CMI Public School",
        degree: "CBSE Class XII",
        score: "96%",
    },
    {
        years: "2011 – 2021",
        institution: "Devagiri CMI Public School",
        degree: "CBSE Class X",
        score: "95.6%",
    },
];

function Education() {
    return (
        <section
            id="education"
            className="mx-auto max-w-7xl px-8 py-32"
        >
            <h2 className="text-5xl font-bold">
                Education
            </h2>

            <div className="mt-14 space-y-6">
                {education.map((item) => (
                    <div
                        key={item.years}
                        className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40"
                    >
                        <p className="text-sm tracking-widest text-violet-400">
                            {item.years}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold">
                            {item.institution}
                        </h3>

                        <p className="mt-2 text-zinc-400">
                            {item.degree}
                        </p>

                        <p className="mt-4 font-medium text-zinc-200">
                            {item.score}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;