import { fadeInUp, staggerContainer } from "@/lib/animation";
import { motion } from "@/utils/motion";
import { Mail } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { PiTelegramLogoBold } from "react-icons/pi";

const Footer = () => {
    return (
        <footer id="footer" className="py-20 border-t border-border/40 mt-20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <motion.div variants={fadeInUp}>
                    <h2 className="text-4xl font-serif font-bold mb-6">
                        Let&apos;s work together
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-md">
                        I&apos;m currently available for freelance projects and open
                        to new opportunities. If you have a project in mind,
                        feel free to reach out.
                    </p>
                    <div className="flex gap-6">
                        {[
                            { Icon: LuGithub, href: "https://github.com/Gurwi30" },
                            { Icon: LuLinkedin, href: "https://www.linkedin.com/in/gurwi/" },
                            { Icon: PiTelegramLogoBold, href: "https://t.me/Gurwi30" },
                            { Icon: Mail, href: "mailto:gs3335769@gmail.com" },
                        ].map(({ Icon, href }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                            >
                                <Icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col items-end justify-center text-right"
                >
                    <div className="rotate-[-5deg] pr-8">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "100%", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="font-signature text-8xl text-muted-foreground/20 overflow-hidden whitespace-nowrap select-none cursor-default py-12 px-10"
                        >
                            gurwi
                        </motion.div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-8">
                        © {new Date().getFullYear()} Gurwi Works. All rights reserved.
                        <br />
                        Designed & Built with passion.
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
