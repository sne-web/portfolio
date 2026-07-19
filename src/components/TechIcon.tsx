type TechIconProps = {
    icon: React.ReactNode;
    name: string;
};

function TechIcon({ icon, name }: TechIconProps) {
    return (
        <div className="group relative">
            <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:bg-zinc-800">
                {icon}
            </div>

            {/* Tooltip */}

            <div
                className="
        pointer-events-none
        absolute
        left-1/2
        top-[-42px]
        -translate-x-1/2
        rounded-lg
        bg-zinc-800
        px-3
        py-1
        text-xs
        whitespace-nowrap
        text-white
        opacity-0
        transition-all
        duration-200
        group-hover:opacity-100
        "
            >
                {name}
            </div>
        </div>
    );
}

export default TechIcon;