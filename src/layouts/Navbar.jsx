import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { RiMoonClearFill } from "react-icons/ri";
import { menuItems, portfolioData } from "../data/textData.jsx";
import { PRIMARY_BG_GRADIENT } from "../constant.jsx";

function Navbar({ activeSection, PRIMARY_TEXT_GRADIENT, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 bg-black/50 backdrop-blur-md z-50 border-b border-white/10 dark:bg-white dark:border-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Name */}
        <h2 className={`text-xl font-bold tracking-wide ${PRIMARY_TEXT_GRADIENT}`}>
          {portfolioData.name}
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300  dark:text-black">
          {menuItems.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`transition font-medium ${activeSection === sec
                  ? "text-[#00ddff] border-b-2 border-[#00ddff] pb-1"
                  : "hover:text-[#00ddff]"
                  }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        {/* Theme Toggle Button */}
        <div className="flex gap-2">
          <button
            className={`p-2 rounded-full ${PRIMARY_BG_GRADIENT} hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <RiSunFill /> : <RiMoonClearFill />}
          </button>
          {/* Mobile Hamburger Icon */}
          <button
            className={`md:hidden text-[#00ddff] text-2xl`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 dark:bg-white/90 border-t border-gray-700 dark:border-gray-200">
          <ul className="flex flex-col items-center py-4 gap-4">
            {menuItems.map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`block text-lg ${activeSection === sec
                    ? "text-[#00ddff]"
                    : "text-gray-300 dark:text-black hover:text-[#00ddff]"
                    }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
