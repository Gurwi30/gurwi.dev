import { Selector, FilterButton } from "@/components/selector";

export default function WorksSection() {
    return (
        <section id="works" className="h-screen">
            <Selector>
                <FilterButton name="Featured" selected={true} />
                <FilterButton name="Web Dev" />
                <FilterButton name="Mods" />
                <FilterButton name="All" />
            </Selector>
        </section>
    );
}
