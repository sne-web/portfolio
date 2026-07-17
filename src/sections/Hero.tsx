import portrait from "../assets/images/portrait.png";

function Hero() {
    return (
        <section
            id="hero"
            className="mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-28"
        >
            {/* LEFT */}

            <div className="flex-1">

                <p className="mb-4 text-lg tracking-[0.3em] text-violet-400">
                    HELLO, I'M
                </p>

                <h1 className="text-6xl font-black leading-none md:text-8xl">
                    Sneha
                    <br />
                    S Joffi
                </h1>

                <h2 className="mt-8 text-3xl font-medium text-zinc-400">
                    AI Engineer
                    <br />
                    Full Stack Developer
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                    Building intelligent software experiences through
                    Artificial Intelligence, Full Stack Development and
                    modern technologies.
                </p>

                <div className="mt-12 flex gap-5">

                    <button className="rounded-full bg-violet-600 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-violet-500">

                        View Projects →

                    </button>

                    <button className="rounded-full border border-zinc-700 px-8 py-4 transition duration-300 hover:border-violet-500">

                        Resume

                    </button>

                </div>

            </div>

            {/* RIGHT */}

            <div className="relative flex flex-1 justify-center">

                <div className="absolute h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[120px]" />

                <img
                    src={portrait}
                    alt="Sneha"
                    className="hero-image relative w-[430px] lg:w-[500px]"
                />

            </div>

        </section>
    );
}

export default Hero;