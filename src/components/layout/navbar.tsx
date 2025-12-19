"use client"
import { motion } from "@/lib/motion";
import { useScroll } from "@/hooks/useScroll";
import { ThemeToggle } from "../ui/theme-toggle";

const NavBar = () => {
    const { to, top } = useScroll();
    
    return (
        <div>
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl font-bold font-serif tracking-tight cursor-pointer"
                        onClick={() => top()}
                    >
                        Gurwi
                    </motion.div>
                    
                    <div className="flex items-center gap-4">
                        {["Work", "About", "Contact"].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="text-sm font-medium hover:text-primary transition-colors"
                                onClick={() => to(item.toLowerCase())}
                            >
                                {item}
                            </motion.a>
                        ))}
                        
                        <div className="w-px h-4 bg-border mx-2"></div>
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
