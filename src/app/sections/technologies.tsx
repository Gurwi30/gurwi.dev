import { technologies } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import { motion } from "@/utils/motion";
import Image from "next/image";

export default function TechnologiesSection() {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl font-serif font-bold mb-4"
                >
                    Current Technologies
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="text-muted-foreground mb-12 max-w-2xl"
                >
                    A brief overview of the technologies I currently work with
                    and their significance in my projects.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            className="group p-4 rounded-xl border border-border bg-card/50 hover:bg-secondary transition-colors duration-200 flex items-center gap-4 cursor-default"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-background transition-colors">
                                <Image
                                    src={tech.img_path}
                                    alt={`${tech.name} logo`}
                                    loading="lazy"
                                    width={48}
                                    height={48}
                                    decoding="async"
                                    className="w-6 h-6 object-contain"
                                    style={{ color: "transparent" }}
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">
                                    {tech.name}
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                    {tech.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
