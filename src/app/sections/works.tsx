import { Selector, FilterButton } from "@/components/selector";

export default function WorksSection() {
    return (
        <section id="works" className="h-screen">
            <div className="flex justify-center items-center text-center text-7xl poiret-one-regular p-10">
                My Works
            </div>
            
            <Selector>
                <FilterButton name="Featured" selected={true} />
                <FilterButton name="Web Dev" />
                <FilterButton name="Mods" />
                <FilterButton name="All" />
            </Selector>
        </section>
    );
}
