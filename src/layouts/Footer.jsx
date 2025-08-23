import React from 'react'
import { portfolioData } from '../data/textData'

const Footer = () => {
    return (
        <footer className="py-4 text-center text-gray-500  dark:text-black border-t border-gray-800">
            © {new Date().getFullYear()}. Built with React & Tailwind CSS. All rights reserved {portfolioData.name}.
        </footer>
    )
}

export default Footer
