
interface TechBoxProps {
    name: string,
    description: string,
    logo_path: string,
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

export default TechBox;