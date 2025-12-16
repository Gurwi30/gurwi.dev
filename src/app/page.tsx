import NavBar from "@/components/navbar";
import HomeSection from "./sections/home";
import AboutSection from "./sections/about";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 overflow-x-hidden">
            <NavBar />
            
            <main className="container mx-auto px-6 pt-32 pb-20">
                <HomeSection />
                <AboutSection />
            </main>
        </div>
    );
}
