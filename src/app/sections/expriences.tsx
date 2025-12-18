import { fadeInUp, staggerContainer } from "@/lib/animation";
import { experiences } from "@/lib/data";
import { motion } from "@/utils/motion";

export default function WorkSection() {
    return (
        <section id="work" className="py-20">
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
                    Working Experiences
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="text-muted-foreground mb-12"
                >
                    Some of the places I&apos;ve contributed to, including the roles I
                    held and the time periods.
                </motion.p>
    
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ x: 10 }}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card/80 transition-colors duration-300 hover:border-primary/20"
                        >
                            <div>
                                <h3 className="text-xl font-bold font-serif">
                                    {exp.company}
                                </h3>
                                <p className="text-muted-foreground">{exp.role}</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                {exp.startDate} - {exp.endDate}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
