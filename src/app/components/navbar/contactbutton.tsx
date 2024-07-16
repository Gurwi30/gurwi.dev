'use client'
import { motion } from "framer-motion";

export default function NavBarContactButton() {
    return (
        <motion.a 
                    transition={{ type: 'spring' }} 
                    whileHover={{ scale: 1.1, transitionEnd: { scale: 1.0 } }} 
                    className='font-martian font-semibold text-sm text-white px-6 py-3 border border-white rounded-full' 
                    target="_blank" 
                    href='https://t.me/Gurwi30'>
                    get in touch
        </motion.a>
    )
}