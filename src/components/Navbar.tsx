import { Menu } from "lucide-react";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/30 border-b border-white/10">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <h1 className="text-x1 font-bold tracking-wide text-white">
                    Sneha<span className="text-violet-500">.</span>
                </h1>

                <ul className="hidden items-center gap-8 md:flex">
                    <li><a href="#about" className="transition hover:text-violet-400">About</a></li>
                    <li><a href="#skills" className="transition hover:text-violet-400">Skills</a></li>
                    <li><a href="#projects" className="transition hover:text-violet-400">Projects</a></li>
                    <li><a href="#education" className="transition hover:text-violet-400">Education</a></li>
                    <li><a href="#contact" className="transition hover:text-violet-400">Contact</a></li>
                </ul>

                <button className="hidden rounded-lg border border-violet-500 px-5 py-2 text-sm transition hover:bg-violet-500 hover:text-black md:block">
                    Resume
                </button>

                <button className="md:hidden">
                    <Menu size={26} />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;