import NavBar from "@/components/layout/navbar";
import HomeSection from "@/components/sections/home";
import TechnologiesSection from "@/components/sections/technologies";
import Footer from "@/components/layout/footer";
import WorkSection from "@/components/sections/expriences";
import ProjectsSection from "@/components/sections/projects";

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
