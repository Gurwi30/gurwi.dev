import { PiDiscordLogoBold, PiGithubLogoBold, PiTelegramLogoBold } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="py-16 px-2 md:px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row gap-6 border-t border-white/10 pt-12 items-center justify-center md:justify-between">
                
                    <span className="text-sm text-white/60 text-center md:text-left">
                        &copy; {new Date().getFullYear()} gurwi.dev. All rights reserved.
                    </span>

                    <div className="flex flex-row items-center gap-4 text-white/60">
                        <a className="hover:text-blue-400 transition-colors" href="https://t.me/Gurwi30" target="_blank"><PiTelegramLogoBold /></a>
                        <a className="hover:text-blue-400 transition-colors" href="https://github.com/Gurwi30/gurwi.dev" target="_blank"><PiGithubLogoBold /></a>
                        <a className="hover:text-blue-400 transition-colors" href="/" target="_blank"><PiDiscordLogoBold /></a>
                    </div>
                
                </div>
            </div>
        </footer>
    );
};

export default Footer;