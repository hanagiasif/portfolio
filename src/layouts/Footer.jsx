import React from 'react'
import { portfolioData } from '../data/textData'

const Footer = () => {
    return (
        <footer className="px-6 md:px-20 py-4 text-center text-gray-500  dark:text-black border-t border-gray-800">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </footer>
    )
}

export default Footer
