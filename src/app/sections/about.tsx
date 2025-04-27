import TechBox from "@/components/techbox"
import { technologies } from "@/lib/data";

export default function AboutSection() {
    return (
        <section id="about" className="h-full flex flex-col z-10 py-16 sm:py-24">
            <div className="space-y-4 mb-10">
                <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-stone-200">
                    Current Technologies
                </h1>

                <h2 className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 text-stone-200/70">
                    Some text about my knowlage about the current Technologies i use
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4">
                {
                    technologies.map(tech => (<TechBox key={tech.name.toLowerCase()} name={tech.name} description={tech.description} logo_path={tech.img_path} />))
                }
            </div>
        </section>
    );
}