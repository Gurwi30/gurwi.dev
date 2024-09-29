'use client'
import { motion } from "framer-motion";

export default function NavBarContactButton() {
    return (
        
        <motion.a
            transition={{ type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-martian font-semibold text-sm border border-white rounded-full py-3 px-6"
            
            target="_blank"
            href="https://t.me/Gurwi30">
                
            get in touch
        </motion.a>
        
    )
}