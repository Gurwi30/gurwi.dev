import NavBar from "@/components/navbar";
import HomeSection from "./sections/home";
import TechnologiesSection from "./sections/technologies";
import Footer from "@/components/footer";
import WorkSection from "./sections/expriences";
import ProjectsSection from "./sections/projects";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 overflow-x-hidden">
                <NavBar />
                
                <main className="container mx-auto px-6 pt-32 pb-20">
                    <HomeSection />
                    <TechnologiesSection />
                    <WorkSection />
                    <ProjectsSection />
                    
                    <Footer />
                </main>
            </div>
        </>
    );
}
