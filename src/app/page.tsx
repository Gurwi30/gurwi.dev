import "./fonts.css"
import NavBar from "./components/navbar/navbar";
import HomeSection from "./components/sections/home";
import ExperpertiesSection from "./components/sections/experties";
import Projects from "./components/sections/projects";

export default function Home() {
    // md:px-24 lg:px-34 xl:px-60 2xl:px-96 px-8

    return (
        <main className="md:mx-20">
            <NavBar />
            
            <div className="">
                <HomeSection />
                {/* <ExperpertiesSection /> */}
                <Projects />
            </div>

        </main>
    );
}
