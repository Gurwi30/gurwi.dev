import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { MotionImage } from "@/components/wrapper/image";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import { projects } from "@/lib/data";
import { motion } from "@/utils/motion";
import { ExternalLink } from "lucide-react";

export default function WorksSection() {
    return (
        <section id="works" className="py-20">
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
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="h-full"
                        >
                            <Card className="group overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                                <div className="h-56 w-full overflow-hidden relative">
                                    <MotionImage
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.7 }}
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />

                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-0 transition-opacity duration-500`}
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="font-serif text-2xl">
                                            {project.title}
                                        </CardTitle>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{
                                                rotate: 45,
                                                scale: 1.1,
                                            }}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                    <CardDescription className="text-base mt-2 line-clamp-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter className="flex gap-2 flex-wrap mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-secondary-foreground/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
