import { Home } from "lucide-react";
import ContactButton from "./contact";

const NavBar = () => {
    return (
        <div className="bottom-0 md:bottom-auto left-0 w-full md:w-auto bg-background/60 backdrop-blur-xl border-t md:border-t-0 border-white/10 border rounded-full z-50 py-2 px-3 md:py-3 md:px-6 transition-all duration-500 text-sm md:text-base">
            <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">

                <a href="#home" className="p-1 md:p-2 hover:bg-white/10 rounded-full transition">
                    <Home size={20} />
                </a>

                <div className="h-4 w-px bg-white/20"></div>

                <ul className="flex items-center font-medium space-x-2 sm:space-x-4 md:space-x-6">
                    <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                    <li><a href="#works" className="hover:text-blue-400 transition-colors">Work</a></li>
                    <li><a href="https://github.com/Gurwi30" target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a></li>
                </ul>

                <div className="h-4 w-px bg-white/20"></div>

                <ContactButton />
            </nav>
        </div>
    );
};

export default NavBar;
