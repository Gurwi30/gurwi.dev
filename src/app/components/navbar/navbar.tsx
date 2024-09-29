import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiSpigotmc } from "react-icons/si";
import NavBarContactButton from "./contactbutton";

export default function NavBar() {

    return (
        <div className="sticky top-0">

            {/* Desktop view */}

            <nav className="not-text absolute py-12 grid-cols-2 items-center w-full justify-between hidden md:grid">
                <ul className="font-martian text-sm opacity-15 font-semibold list-none space-x-10 justify-start sm:flex grid">
                    <li><a href='#home'>&lt;home&gt;</a></li>
                    <li><a href='#experties'>&lt;experties&gt;</a></li>
                    <li><a href='#projects'>&lt;projects&gt;</a></li>
                </ul>

                <ul className="font-martian text-sm font-semibold list-none space-x-10 justify-end flex">
                    <li><a href='https://github.com/Gurwi30' target="_blank"><FaGithub className='icon' size={20}></FaGithub></a></li>
                    <li><a href='https://t.me/Gurwi30' target="_blank"><FaTelegram className='icon' size={20}></FaTelegram></a></li>
                    <li><a href='https://www.spigotmc.org/members/gurwinder.717908/' target="_blank"><SiSpigotmc className='icon' size={20}></SiSpigotmc></a></li>
                    <li><NavBarContactButton /></li>
                </ul>
            </nav>

            {/* Mobile view */}

            <nav className="not-text py-8 grid-cols-2 justify-between w-full absolute grid md:hidden">
                <ul className="font-martian text-sm font-semibold opacity-45 list-none space-x-10 justify-start flex">
                    <li><a href='https://github.com/Gurwi30' target="_blank"><FaGithub className='icon' size={20}></FaGithub></a></li>
                    <li><a href='https://t.me/Gurwi30' target="_blank"><FaTelegram className='icon' size={20}></FaTelegram></a></li>
                    <li><a href='https://www.spigotmc.org/members/gurwinder.717908/' target="_blank"><SiSpigotmc className='icon' size={20}></SiSpigotmc></a></li>
                </ul>
                
                <ul className="font-martian text-sm opacity-15 font-semibold list-none space-y-3 justify-end items-end flex flex-col">
                    <li><a href='#home'>&lt;home&gt;</a></li>
                    <li><a href='#experties'>&lt;experties&gt;</a></li>
                    <li><a href='#projects'>&lt;projects&gt;</a></li>
                </ul>
            </nav>
        </div>

    )

}