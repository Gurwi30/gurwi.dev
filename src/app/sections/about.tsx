import { TechBox, WorkExpBox } from "@/components/boxes"
import { experiences, technologies } from "@/lib/data";

export default function AboutSection() {
    return (
        <section id="about" className="h-full flex flex-col z-10 py-16 sm:py-24">
            <div className="space-y-4 mb-10">
                <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200">
                    Current Technologies
                </h1>

                <h2 className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 text-stone-200/70">
                    A brief overview of the technologies I currently work with and their significance in my projects.
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4">
                {
                    technologies.map(tech => <TechBox key={tech.name.toLowerCase()} name={tech.name} description={tech.description} logo_path={tech.img_path} /> )
                }
            </div>

            <div className="h-full flex flex-col z-10 py-16 sm:py-24">
                <div className="space-y-4 mb-10">
                    <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200">
                        Working Experiences
                    </h1>

                    <h2 className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 text-stone-200/70">
                        Some of the places I&apos;ve contributed to, including the roles I held and the time periods.
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        experiences.map(exp => <WorkExpBox key={exp.company.toLowerCase()} company={exp.company} role={exp.role} startDate={exp.startDate} endDate={exp.endDate} />)
                    }
                </div>
            </div>
        </section>
    );
}