import React, { useEffect, useState } from "react";
import { PRIMARY_TEXT_GRADIENT } from "./constant";
import { portfolioData } from "./data/textData";
import { useTypingEffect } from "./hooks/CustomHooks";
import Navbar from "./layouts/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const typedText = useTypingEffect(portfolioData.titles);

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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white scroll-smooth">
      <Navbar activeSection={activeSection} PRIMARY_TEXT_GRADIENT={PRIMARY_TEXT_GRADIENT} />
    </div>
  );
}

export default App;
