import React from 'react'
import { FadeSection } from '../utils/helper'
import { portfolioData } from '../data/textData'
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from '../constant'
import { FaDownload, FaGithub } from 'react-icons/fa'

const Home = ({ typedText }) => {
    return (
        <FadeSection id="home">
            <h1 className={`text-4xl md:text-6xl font-extrabold ${PRIMARY_TEXT_GRADIENT} text-center drop-shadow-lg`}>
                {portfolioData.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-[#00ddff] font-semibold text-center min-h-[32px]">
                {typedText}
                <span className="border-r-2 border-[#00ddff] animate-pulse ml-1 inline-block h-6 align-middle"></span>
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-400  dark:text-black leading-relaxed">
                {portfolioData.objective}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href={portfolioData.resume}
                    download
                    className={`inline-flex items-center px-6 py-3 rounded-full ${PRIMARY_BG_GRADIENT} text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300`}
                >
                    <FaDownload className="mr-2" /> Download Resume
                </a>
                <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-4 rounded-full ${PRIMARY_BG_GRADIENT} transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl`}
                >
                    <FaGithub size={22} />
                </a>
            </div>
        </FadeSection>
    )
}

export default Home
