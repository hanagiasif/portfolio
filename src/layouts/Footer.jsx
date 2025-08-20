import React from 'react'
import { portfolioData } from '../data/textData'

const Footer = () => {
    return (
        <footer className="py-4 text-center text-gray-500 border-t border-gray-800">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved. | Designed & built by {portfolioData.name}. Portfolio powered by React & Tailwind CSS.
        </footer>
    )
}

export default Footer
