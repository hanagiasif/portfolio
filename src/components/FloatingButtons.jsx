import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { PRIMARY_BG_GRADIENT } from "../constant";

export default function FloatingButtons({ theme, toggleTheme }) {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
            {/* Theme Toggle with animation */}
            <motion.button
                whileTap={{ rotate: 180, scale: 0.9 }}   // animates on click
                whileHover={{ scale: 1.2 }}              // smooth hover scale
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`p-2 rounded-full ${PRIMARY_BG_GRADIENT} transition-all duration-300 shadow-lg`}
                onClick={toggleTheme}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={theme} // triggers re-animation when theme changes
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                    >
                        {theme === "dark" ? <RiSunFill size={20} /> : <RiMoonClearFill size={20} />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
