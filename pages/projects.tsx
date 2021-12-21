import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavBar from "../components/ProjectNavBar";

import { projects as projectsData } from "../data";
const Projects = () => {
    const [projects, setProjects] = useState(projectsData);

    const handelFilterCatagory = () => { };
    return (
        <div className="px-5 py-2 overflow-y-auto" style={{ height: "65vh" }}>
            <ProjectNavBar />
            <div className="relative grid grid-cols-12 gap-4 my-3">
                {projects.map((project) => (
                    <div
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                        key={project.name}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
