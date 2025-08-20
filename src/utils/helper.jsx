import { useScrollAnimation } from "../hooks/CustomHooks";

/* FadeSection wrapper */
export function FadeSection({ id, children }) {
    const [ref, visible] = useScrollAnimation();
    return (
        <section id={id} ref={ref} className={`px-6 md:px-20 py-12 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {children}
        </section>
    );
}

/* Skill Card */
export function SkillCard({ title, skills }) {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[#ff00d4]/40 transform hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        {s.icon} <span className="text-gray-300">{s.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}