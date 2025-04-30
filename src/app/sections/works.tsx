'use client'
import { WorkShowCaseBox } from "@/components/boxes";
import { Selector, FilterButton } from "@/components/selector";
import { projects } from "@/lib/data";
import { motion } from "@/utils/motion";
import { useState } from "react";

export default function WorksSection() {
    const [ getCategory, setCategory ] = useState<string>("featured");

    return (
        <section id="works" className="h-fit">
            <div className="flex justify-center items-center text-center text-7xl poiret-one-regular p-10">
                My Works
            </div>
            
            <div className="mb-4 px-1 md:px-0">
                <Selector>
                    <FilterButton onClick={() => setCategory("featured")} name="Featured" selected={getCategory === "featured"} />
                    <FilterButton onClick={() => setCategory("web")} name="Web Dev" selected={getCategory === "web"} />
                    <FilterButton onClick={() => setCategory("mod")} name="Mods" selected={getCategory === "mod"} />
                    <FilterButton onClick={() => setCategory("all")} name="All" selected={getCategory === "all"} />
                </Selector>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1 md:px-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
            >
                {
                    projects
                        .filter(project => 
                            getCategory === "all" ? true : project.category.toLowerCase() === getCategory.toLowerCase() || (getCategory === "featured" && project.featured)
                        )
                        .map(project => 
                            <WorkShowCaseBox key={`${project.category.toLowerCase()}-${project.name.toLowerCase()}`} name={project.name} category={project.category} image={project.image} tags={project.tags} href={project.href} />
                        )
                }
                
            </motion.div>

        </section>
    );
}
