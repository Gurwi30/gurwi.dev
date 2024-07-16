import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiSpigotmc } from "react-icons/si";
import NavBarContactButton from "./contactbutton";
import { useEffect, useState } from "react";

// const [screenWidth, setScreenWidth] = useState(window.innerWidth);
// const [screenType, setScreenType] = useState("Desktop");

// useEffect(() => {
//     if (screenWidth >= 770) {
//       setScreenType("Desktop")
//     } else {
//       setScreenType("Mobile")
//     }
//   }, [screenWidth])

export default function NavBar() {

    return (
        // <>
        //     <nav className="flex items-center justify-between lg:block hidden">
        //         <ul className="flex items-center">
        //             <li><a href='#home'>&lt;home&gt;</a></li>
        //             <li><a href='#experties'>&lt;experties&gt;</a></li>
        //             <li><a href='#projects'>&lt;projects&gt;</a></li>
        //         </ul>
        //         <ul>
        //             <li><a href='https://github.com/Gurwi30' target="_blank"><FaGithub className='icon' size={20}></FaGithub></a></li>
        //             <li><a href='https://t.me/Gurwi30' target="_blank"><FaTelegram className='icon' size={20}></FaTelegram></a></li>
        //             <li><a href='https://www.spigotmc.org/members/gurwinder.717908/' target="_blank"><SiSpigotmc className='icon' size={20}></SiSpigotmc></a></li>
        //             <li><NavBarContactButton /></li>
        //         </ul>
        //     </nav>

        //     <nav className="flex justify-between lg:hidden block">
        //         <ul className="font-martian text-sm opacity-15 font-semibold list-none flex items-center">
        //             <li><a href='https://github.com/Gurwi30' target="_blank"><FaGithub className='icon' size={20}></FaGithub></a></li>
        //             <li><a href='https://t.me/Gurwi30' target="_blank"><FaTelegram className='icon' size={20}></FaTelegram></a></li>
        //             <li><a href='https://www.spigotmc.org/members/gurwinder.717908/' target="_blank"><SiSpigotmc className='icon' size={20}></SiSpigotmc></a></li>
        //             <li><NavBarContactButton /></li>
        //         </ul>
        //         <ul className="flex flex-col">
        //             <li><a href='#home'>&lt;home&gt;</a></li>
        //             <li><a href='#experties'>&lt;experties&gt;</a></li>
        //             <li><a href='#projects'>&lt;projects&gt;</a></li>
        //         </ul>
        //     </nav>
        // </>
        
        <>
            <nav className="not-text py-14 grid-cols-2 sticky items-center justify-between lg:grid hidden">
                <ul className="font-martian text-sm opacity-15 font-semibold list-none space-x-10 justify-start sm:flex grid items-center">
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

            <nav className="not-text py-14 grid-cols-2 sticky justify-between lg:hidden grid">
                <ul className="font-martian text-sm font-semibold list-none space-x-10 justify-start flex">
                    <li><a href='https://github.com/Gurwi30' target="_blank"><FaGithub className='icon' size={20}></FaGithub></a></li>
                    <li><a href='https://t.me/Gurwi30' target="_blank"><FaTelegram className='icon' size={20}></FaTelegram></a></li>
                    <li><a href='https://www.spigotmc.org/members/gurwinder.717908/' target="_blank"><SiSpigotmc className='icon' size={20}></SiSpigotmc></a></li>
                    <li><NavBarContactButton /></li>
                </ul>
                
                <ul className="font-martian text-sm opacity-15 font-semibold list-none space-x-10 justify-end flex flex-col">
                    <li><a href='#home'>&lt;home&gt;</a></li>
                    <li><a href='#experties'>&lt;experties&gt;</a></li>
                    <li><a href='#projects'>&lt;projects&gt;</a></li>
                </ul>
            </nav>
        </>

    )

}