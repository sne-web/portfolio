function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-8 py-32"
        >
            <h2 className="text-5xl font-bold">
                About Me
            </h2>

            <div className="mt-14 grid gap-14 lg:grid-cols-2">

                {/* LEFT */}

                <div className="space-y-7 text-lg leading-9 text-zinc-400">

                    <p>
                        I'm a Computer Science undergraduate at
                        Government Model Engineering College with a
                        strong interest in Artificial Intelligence,
                        Full Stack Development and Cybersecurity.
                    </p>

                    <p>
                        I enjoy creating software that solves
                        real-world problems while continuously
                        learning modern technologies and engineering
                        best practices.
                    </p>

                    <p>
                        Outside academics, I enjoy exploring
                        emerging technologies, solving coding
                        challenges and building personal projects.
                    </p>

                </div>

                {/* RIGHT */}

                <div className="flex flex-wrap justify-center gap-6 lg:justify-start">

                    <Card number="8.95" text="Current CGPA" />

                    <Card number="2027" text="Graduation" />

                    <Card number="2+" text="Major Projects" />

                </div>

            </div>

        </section>
    );
}

function Card({
    number,
    text,
}: {
    number: string;
    text: string;
}) {

    return (

        <div className="w-52 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-white/10">

            <h3 className="text-5xl font-black text-violet-400">

                {number}

            </h3>

            <p className="mt-4 text-zinc-400">

                {text}

            </p>

        </div>

    )

}

export default About;