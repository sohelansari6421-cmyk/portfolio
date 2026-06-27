import { useEffect, useState } from "react";
import API from "../services/API";

export function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.get("projects/")
            .then((res) => {
                console.log("API RSPONE:", res.data);
                setProjects(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section id="project" className="py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-5">Projects</h2>

                <div>
                    {projects.length === 0 ? (
                        <p>No projects found.</p>
                    ) : (
                        projects.map((project) => (
                            <div
                                key={project.id}
                                className="shadow rounded p-5 mb-4"
                            >
                                <h3 className="font-bold">
                                    {project.title}
                                </h3>

                                <p>{project.description}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;