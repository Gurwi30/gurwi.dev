"use client";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { MotionImage } from "@/components/wrappers/image";
import { fadeInUp } from "@/lib/animation";
import { Project } from "@/lib/data";
import { motion } from "@/lib/motion";
import { ExternalLink, FileText } from "lucide-react";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div variants={fadeInUp} className="h-full">
            <Card className="group relative overflow-hidden border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-0"
                    aria-label={project.title}
                />
                <div className="h-56 w-full overflow-hidden relative pointer-events-none">
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

                    <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
                <CardHeader className="pointer-events-none">
                    <div className="flex justify-between items-start">
                        <CardTitle className="font-serif text-2xl">
                            {project.title}
                        </CardTitle>
                        <div className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 group-hover:scale-110 transition-all">
                            <ExternalLink className="w-5 h-5" />
                        </div>
                    </div>
                    <CardDescription className="text-base mt-2 line-clamp-2">
                        {project.description}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2 flex-wrap mt-auto items-center justify-between">
                    <div className="flex gap-2 flex-wrap pointer-events-none">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-secondary-foreground/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    {project.docs && (
                        <a
                            href={project.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                        >
                            <FileText className="w-3.5 h-3.5" />
                            View Docs
                        </a>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}