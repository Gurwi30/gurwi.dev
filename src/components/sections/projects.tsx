import { staggerContainer, fadeInUp } from "@/lib/animation";
import { projects } from "@/lib/data";
import { motion } from "@/lib/motion";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <div className="flex items-end justify-between mb-12">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl font-serif font-bold mb-2">
                            My Works
                        </h2>
                        <p className="text-muted-foreground">
                            A collection of projects I&apos;ve worked on
                            recently.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}