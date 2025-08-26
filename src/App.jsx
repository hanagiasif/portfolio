import React, { useEffect, useState } from "react";
import { portfolioData } from "./data/textData";
import { useTypingEffect } from "./hooks/CustomHooks";
import FloatingButtons from "./components/FloatingButtons";
import Navbar from "./layouts/Navbar";
import Hero from "./layouts/Home";
import Skills from "./layouts/Skills";
import Projects from "./layouts/Projects";
import Journey from "./layouts/Journey";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState('light');

  const typedText = useTypingEffect(portfolioData.titles);

  // Function to toggle between light and dark themes
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Apply dark mode class based on theme state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // a little more offset
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      // Fix for Contact
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 10) {
        current = "contact";
      }
      setActiveSection(current);
      window.location.hash = `#${current}`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white scroll-smooth
    dark:bg-gradient-to-b dark:from-gray-100 dark:via-gray-200 dark:to-white">
      <Navbar activeSection={activeSection} />
      <Hero typedText={typedText} />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
      {/* 👇 Floating Buttons */}
      <FloatingButtons theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
