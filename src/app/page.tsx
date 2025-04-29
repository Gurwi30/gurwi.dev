import NavBar from "@/components/navbar";
import HomeSection from "./sections/home";
import WorksSection from "./sections/works";
import AboutSection from "./sections/about";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="relative px-5 sm:px-10">

            <div className="fixed z-50 mt-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <NavBar />
            </div>      
                  
            <HomeSection />
            
            <div className="max-w-7xl mx-auto w-full">
                <AboutSection />
                <WorksSection />
            </div>

            <Footer />
        </div>
    );
}
