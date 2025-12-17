import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animation";
import { motion } from "@/utils/motion";

export default function HomeSection() {
    return (
        <section
            id="home"
            className="min-h-[80vh] flex flex-col justify-center max-w-5xl"
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h2
                    variants={fadeInUp}
                    className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
                >
                    Full Stack Dev & Modder
                </motion.h2>
                
                <motion.h1
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60"
                >
                    Hey, I&apos;m <span className="text-foreground">Gurwi</span>.{" "}
                    <br />
                    Crafting seamless <br />
                    <span className="italic text-foreground">
                        web experiences.
                    </span>
                </motion.h1>
                
                <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
                >
                    A passionate developer from Italy building accessible,
                    pixel-perfect applications and custom mods.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex gap-4">
                    <Button
                        size="lg"
                        className="rounded-full px-8 text-base h-12 transition-transform hover:scale-105"
                    >
                        View Projects
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8 text-base h-12 transition-transform hover:scale-105"
                    >
                        Contact Me
                    </Button>
                </motion.div>
                
            </motion.div>
        </section>
    );
}
