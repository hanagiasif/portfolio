import React from 'react'
import { FadeSection } from '../utils/helper';
import { portfolioData } from '../data/textData';

const Journey = () => {
    return (
        <FadeSection id="journey">
            <h2 className="text-3xl font-bold mb-6 text-center  dark:text-black">My Journey</h2>
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Center Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff00d4] to-[#00ddff]"></div>
                <div className="flex flex-col gap-12">
                    {portfolioData.journey.map((item, idx) => {
                        const isLeft = idx % 2 === 0;
                        const isEducation = item.type === "education";
                        // Gradient colors
                        const dotGrad = isEducation
                            ? "from-[#ff9d00] to-[#fff700]"
                            : "from-[#ff00d4] to-[#00ddff]";
                        const lineGrad = isLeft
                            ? `bg-gradient-to-l ${dotGrad}`
                            : `bg-gradient-to-r ${dotGrad}`;
                        const glowClass = isEducation
                            ? "hover:shadow-[0_0_20px_#ff9d00]"
                            : "hover:shadow-[0_0_20px_#ff00d4]";
                        return (
                            <div key={idx} className="relative w-full md:min-h-[6rem]">
                                {/* Horizontal connector (starts from dot center) */}
                                <div className={`absolute top-1/2 -translate-y-[1px] hidden md:block h-[2px] w-10 ${lineGrad} ${isLeft ? "right-1/2" : "left-1/2"}`}></div>
                                {/* Center Dot */}
                                <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-900 bg-gradient-to-r ${dotGrad}`}></div>
                                {/* Card */}
                                <div className={`md:w-1/2 ${isLeft ? "md:pr-10 md:mr-auto" : "md:pl-10 md:ml-auto"} w-full`}>
                                    <div className={`bg-gray-800 dark:bg-white p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 ${glowClass}`}>
                                        <h3 className={`text-xl font-semibold ${isEducation ? "text-[#ff00d4]" : "text-[#00ddff]"}`}>{item.title}</h3>
                                        <p className="text-white dark:text-black">{item.company} | {item.period}</p>
                                        <p className="mt-2 text-gray-300 dark:text-black text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </FadeSection>
    )
}

export default Journey