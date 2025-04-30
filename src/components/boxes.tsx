
interface TechBoxProps {
    name: string,
    description: string,
    logo_path: string,
}

interface WorkExpBoxProps {
    company: string,
    role: string,
    startDate: string,
    endDate: string
}

interface Project {
    name: string,
    category: string,
    image: string,
    href?: string
    tags: string[]
}

const TechBox = ({ name, description, logo_path }: TechBoxProps) => {
    return (
        <div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[#272727] dark:border-dark-200 bg-black/10 dark:bg-dark-200 hover:bg-[#202020] dark:hover:bg-dark-300 hover:border-[#383838] dark:hover:border-dark-700 transition-colors duration-200">
            <div className={`p-3 rounded-lg w-fit`}>
                <img src={logo_path} alt={`${name} logo`} loading="lazy" width={48} height={48} decoding="async" className="size-8" style={{"color": "transparent"}} />
            </div>

            <div>
                <h4 className="text-lg font-medium text-black dark:text-white">{name}</h4>
                <p className="text-black/70 dark:text-white/70 text-sm">{description}</p>
            </div>
        </div>
    );
}

const WorkExpBox = ({ company, role, startDate, endDate }: WorkExpBoxProps) => {
    return (
        <div className="border border-[#272727] hover:border-[#383838] dark:hover:border-dark-700 duration-200 rounded-xl p-6 transition-colors">
            <h3 className="text-xl font-semibold text-stone-200 mb-2">
                {company}
            </h3>
            <p className="text-white/70 mb-1">
                {role}
            </p>
            <p className="text-white/50 text-sm">
                {startDate} - {endDate}
            </p>
        </div>
    )
}
const WorkShowCaseBox = ({ name, image, href, tags }: Project) => {
    return (
        <div className="rounded-2xl border border-[#272727] dark:border-dark-400 bg-white/2 dark:bg-dark-200 hover:bg-[#202020] dark:hover:bg-dark-300 transition-all duration-300 p-4 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-2xl font-semibold leading-tight tracking-tight text-black dark:text-white">{name}</h3>
                {href && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={href}
                        className="flex items-center gap-2 px-4 py-1 text-sm font-medium rounded-full bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20 transition-colors border border-[#383838] dark:border-dark-300 text-black dark:text-white"
                    >
                        <span className="hidden sm:inline">View</span>
                    </a>
                )}
            </div>
            
            {href ? (
                <a
                    href={href}
                    className="relative aspect-[16/9] block rounded-xl overflow-hidden border border-[#272727] dark:border-dark-400"
                >
                    <img
                        src={image}
                        alt={name.toLowerCase()}
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                </a>
            ) : (
                <div className="relative aspect-[16/9] block rounded-xl overflow-hidden border border-[#272727] dark:border-dark-400">
                    <img
                        src={image}
                        alt={name.toLowerCase()}
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full"
                    />
                </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-5">
                <div className="flex flex-wrap items-center gap-2.5 max-w-sm">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white font-medium bg-black/10 dark:bg-dark-300 hover:bg-black/20 dark:hover:bg-dark-400 border border-[#383838] dark:border-dark-500 transition-colors duration-200 rounded-md py-2 px-4"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { TechBox, WorkExpBox, WorkShowCaseBox };