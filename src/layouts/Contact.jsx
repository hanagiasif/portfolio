import React from 'react'
import { FadeSection } from '../utils/helper'
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from '../constant'
import { portfolioData } from '../data/textData'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <FadeSection id="contact">
            <h2 className={`text-3xl font-bold mb-4 text-center ${PRIMARY_TEXT_GRADIENT}`}>
                Get in Touch
            </h2>
            <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-[#ff00d4]/40 transform hover:-translate-y-2 transition">
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    <p className="text-gray-300 mb-6 text-center leading-relaxed">
                        Open to connecting with professionals, recruiters, and peers.
                        Reach out to discuss opportunities or collaborations.
                    </p>
                </p>
                <div className="space-y-4 break-words break-all">
                    <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="flex items-center gap-3 text-lg text-gray-300 hover:text-[#00ddff] transition"
                    >
                        <FaEnvelope className="text-[#00ddff]" /> {portfolioData.contact.email}
                    </a>
                    <a
                        href={`tel:${portfolioData.contact.phone}`}
                        className="flex items-center gap-3 text-lg text-gray-300 hover:text-[#00ddff] transition"
                    >
                        <FaPhone className="text-[#00ddff]" /> {portfolioData.contact.phone}
                    </a>
                </div>
                <div className="mt-6 text-center">
                    <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className={`inline-block px-8 py-3 ${PRIMARY_BG_GRADIENT} rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl`}
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </FadeSection>
    )
}

export default Contact
