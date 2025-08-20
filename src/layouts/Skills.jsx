import React from 'react'
import { portfolioData } from '../data/textData'
import { FadeSection, SkillCard } from '../utils/helper'

const Skills = () => {
    return (
        <FadeSection id="skills">
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolioData.skills.map((group, idx) => (
                    <SkillCard key={idx} title={group.title} skills={group.items} />
                ))}
            </div>
        </FadeSection>
    )
}

export default Skills
