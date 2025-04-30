
interface FilterButtonProps {
    name: string,
    selected?: boolean,
    onClick?: Function
}

const Selector = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="
            w-full grid grid-cols-2 justify-items-center gap-2 p-0 overflow-x-auto scrollbar-hide 
            md:flex md:items-center md:p-1.5 md:rounded-full md:border md:border-white/10 md:bg-white/[0.02] 
            backdrop-blur-xl
        "
        >
            {children}
        </div>
    );
};


const FilterButton = ({ name, selected, onClick }: FilterButtonProps) => {

    return (
        <button 
            onClick={() => {
                if (onClick) onClick();
            }}
            className={`w-[95%] md:flex-1 px-4 md:px-6 py-2 text-sm font-medium rounded md:rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap
            ${selected
                ? "bg-white/10 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
        >
            {name}
        </button>
    );
};

export { Selector, FilterButton };