import { Button } from "@/components/ui/button";
import { motion } from "@/utils/motion";
import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "404 – Page not found",
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6 py-8">
            <div className="max-w-[600px] w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative"
                >
                    <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-4 text-6xl md:text-8xl font-mono text-muted-foreground/20 select-none"
                        aria-hidden="true"
                    >
                        {"{"}
                    </span>

                    <h1
                        className="font-serif text-7xl md:text-9xl font-bold tracking-tighter text-foreground"
                        aria-label="Error 404"
                        data-testid="text-404"
                    >
                        404
                    </h1>

                    <span
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 text-6xl md:text-8xl font-mono text-muted-foreground/20 select-none"
                        aria-hidden="true"
                    >
                        {"}"}
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                    className="mt-6 text-2xl md:text-3xl font-semibold text-foreground"
                    data-testid="text-page-not-found"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                    className="mt-4 text-base md:text-lg text-muted-foreground max-w-[400px] mx-auto"
                    data-testid="text-error-message"
                >
                    Looks like this page got lost in the codebase. Even the best
                    developers hit errors sometimes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        asChild
                        size="lg"
                        className="w-full sm:w-auto min-w-[200px] font-semibold"
                        data-testid="button-back-home"
                    >
                        <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                    className="mt-4"
                >
                    <Link
                        href="/#projects"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium underline-offset-4 hover:underline"
                        data-testid="link-view-projects"
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
