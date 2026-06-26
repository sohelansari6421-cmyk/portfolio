import "../styles/Skill.css"
import { Link } from "react-router-dom";
export function Skill() {
    const skills = [
        { name: "React", path: "/coming-soon" },
        { name: "JavaScript", path: "/coming-soon" },
        { name: "Python", path: "/coming-soon" },
        { name: "REST API", path: "/coming-soon" },
        { name: "Django", path: "/coming-soon" },
        { name: "Git", path: "/coming-soon" },

    ];

    return (
        <section id="skills" className="py">
            <div>
                <h2>
                    Skills
                </h2>

                <div className="skill-grid">
                    {skills.map((skill) => (
                        <Link
                            key={skill.name}
                            to={skill.path}
                            className="skill-card">
                            {skill.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;