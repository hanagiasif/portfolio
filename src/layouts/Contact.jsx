import React from 'react'
import { FadeSection } from '../utils/helper'
import { PRIMARY_BG_GRADIENT } from '../constant'
import { portfolioData } from '../data/textData'
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaPhoneAlt, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <FadeSection id="contact">
            <h2 className={`text-3xl font-bold mb-4 text-center dark:text-black`}>
                Get in Touch
            </h2>
            <div className="max-w-lg mx-auto bg-gray-800 dark:bg-white p-8 rounded-xl shadow-lg hover:shadow-[#ff00d4]/40 transform hover:-translate-y-2 transition">
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    <p className="text-gray-300 dark:text-black mb-6 text-center leading-relaxed">
                        Open to connecting with professionals, recruiters, and peers.
                        Reach out to discuss opportunities or collaborations.
                    </p>
                </p>
                <div className="space-y-1 break-words break-all">
                    <a
                        href={`tel:${portfolioData.contact.phone}`}
                        className="flex items-center justify-center gap-3 text-lg text-gray-300 dark:text-black hover:text-[#00ddff] transition"
                    >
                        <FaPhoneAlt className="text-[#00ddff]" /> {portfolioData.contact.phone}
                    </a>
                    <a
                        href={`mailto:${portfolioData.contact.email}`}
                        className="flex items-center justify-center gap-3 text-lg text-gray-300 dark:text-black hover:text-[#00ddff] transition"
                    >
                        <FaEnvelope className="text-[#00ddff]" /> {portfolioData.contact.email}
                    </a>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <a
                        href={portfolioData.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-full ${PRIMARY_BG_GRADIENT} transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl`}
                    >
                        <FaFacebookSquare size={20} />
                    </a>
                    <a
                        href={portfolioData.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-full ${PRIMARY_BG_GRADIENT} transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl`}
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href={portfolioData.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-full ${PRIMARY_BG_GRADIENT} transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl`}
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </FadeSection>
    )
}

export default Contact
