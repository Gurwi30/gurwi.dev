import { motion } from "@/utils/motion";

export default function HomeSection() {
    return (
        <section id="home" className="h-screen snap-center">
            <div className="flex flex-col justify-center items-center text-center h-screen">
                <motion.h1
                    className="text-xl md:text-2xl homemade-apple-regular"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {"Hey, i'm gurwi".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.07 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.h2
                    className="gabarito-regular text-4xl sm:text-5xl lg:text-7xl font-bold uppercase"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                >
                    A passionate{" "}
                    <CoolTextComponent text="Full Stack Dev" />
                    
                    <br className="hidden md:block" />{" "}
                    & <CoolTextComponent text="Modder" /> from Italy
                </motion.h2>

                <motion.h3
                    className="text-white/40 mt-2 text-sm md:text-base"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Crafting seamless web experiences & custom mods
                </motion.h3>
            </div>
        </section>
    );
}

const CoolTextComponent = ({ text }: { text: string }) => {
    return (
        <>
            {text.split("").map((char: string, index: number) => (
                <motion.span
                    key={index}
                    initial={{ color: "#ffffff" }}
                    animate={{ color: "#3b82f6" }}
                    transition={{ delay: 1 + index * 0.03 }}
                    className="font-bold"
                >
                    {char}
                </motion.span>
            ))}
        </>
    )
}