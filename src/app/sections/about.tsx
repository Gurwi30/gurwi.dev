import { technologies } from "@/lib/data";
import { motion } from "@/utils/motion";
import { Variants } from "motion/react";
import Image from "next/image";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export default function AboutSection() {
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
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "hsl(var(--secondary))",
                                transition: { duration: 0.2 },
                            }}
                            className="group p-4 rounded-xl border border-border bg-card/50 transition-colors duration-300 flex items-center gap-4 cursor-default"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-background transition-colors">
                                <Image src={tech.img_path} alt={`${tech.name} logo`} loading="lazy" width={48} height={48} decoding="async" className="w-6 h-6 object-contain" style={{"color": "transparent"}}  />

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
