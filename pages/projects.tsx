import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { fadeInup, routeAnimation, stagger } from "../animations";
import ProjectCard from "../components/ProjectCard";
import ProjectNavBar from "../components/ProjectNavBar";

import { projects as projectsData } from "../data";
import { Category } from "../type";
const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const [showDetail, setShowDetail] = useState<number | null>(null);

    const handlerFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive("all");
            return;
        }
        setProjects(
            projectsData.filter((project) =>
                project.category.includes(category)
            )
        );
        setActive(category);
    };
    return (
        <motion.div
            className="px-5 py-2"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Head>
                <title>Projects | Mingli Zhang | Web Developer</title>
            </Head>
            <ProjectNavBar
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />
            <div className="overflow-y-auto h-[70vh]">
                <motion.div
                    className="relative grid grid-cols-12 gap-4 my-3 "
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                >
                    {projects.map((project) => (
                        <motion.div
                            variants={fadeInup}
                            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                            key={project.name}
                        >
                            <ProjectCard
                                project={project}
                                showDetail={showDetail}
                                setShowDetail={setShowDetail}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;
