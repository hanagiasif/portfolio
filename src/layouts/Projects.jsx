import React from 'react'
import { FadeSection } from '../utils/helper'
import { portfolioData } from '../data/textData'
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from '../constant'

const Projects = () => {
    return (
        <FadeSection id="projects">
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolioData.projects.map((p, idx) => (
                    <div
                        key={idx}
                        className={`bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-2 ${p.featured
                            ? "border-2 border-[#00ddff] hover:shadow-[#00ddff]/40"
                            : "hover:shadow-[#ff00d4]/40"
                            }`}
                    >
                        <h3 className={`text-xl font-semibold mb-2 ${PRIMARY_TEXT_GRADIENT}`}>
                            {p.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{p.description}</p>

                        <div className="flex gap-3">
                            {p.github && (
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`px-4 py-2 rounded-lg ${PRIMARY_BG_GRADIENT} text-white font-semibold hover:opacity-90 transition`}
                                >
                                    GitHub
                                </a>
                            )}
                            {p.demo && (
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
                                >
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </FadeSection>
    )
}

export default Projects
