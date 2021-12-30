import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInleft, fadeInup, stagger } from "../animations";
import { IProject } from "../type";

const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetail: number | null;
    setShowDetail: (id: number | null) => void;
}> = ({
    project: {
        id,
        name,
        description,
        image_path,
        deployed_url,
        github_url,
        category,
        key_techs,
    },
    showDetail,
    setShowDetail,
}) => {
    return (
        <div>
            <Image
                src={image_path}
                alt={name}
                className="cursor-pointer"
                width="300"
                height="150"
                layout="responsive"
                onClick={() => setShowDetail(id)}
            />
            {/* <img
                src={image_path}
                alt={name}
                className="cursor-pointer"
                onClick={() => setShowDetail(true)}
            /> */}
            <p className="my-2 text-center">{name}</p>

            {showDetail === id && (
                <div className="fixed z-10 grid lg:left-[35vw] h-auto gap-6 p-4 px-5 my-10 text-black bg-gray-100 rounded-lg lg:grid-cols-2 lg:top-[14vh] lg:w-[45vw] lg:px-5 top-[15vh] md:left-36 md:p-5 md:right-36 sm:left-24 sm:right-24 left-10 right-10 gap-x-12 dark:text-white dark:bg-dark-100">
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            variants={fadeInup}
                            className="border-4 border-gray-100"
                        >
                            <Image
                                src={image_path}
                                alt={name}
                                width="300"
                                height="150"
                                layout="responsive"
                            />
                        </motion.div>
                        {/* <img src={image_path} alt={name} /> */}
                        <motion.div
                            className="flex justify-center my-4 space-x-3"
                            variants={fadeInup}
                        >
                            {github_url && (
                                <a
                                    href={github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200"
                                >
                                    <AiFillGithub /> <span>Github</span>
                                </a>
                            )}
                            {deployed_url && (
                                <a
                                    href={deployed_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-lg dark:bg-dark-200"
                                >
                                    <AiFillProject /> <span>Project</span>
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.h2
                            variants={fadeInleft}
                            className="mb-3 text-xl font-medium md:text-2xl"
                        >
                            {name}
                        </motion.h2>
                        <motion.h3
                            className="mb-3 font-medium"
                            variants={fadeInleft}
                        >
                            {description}
                        </motion.h3>

                        <motion.div
                            className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
                            variants={fadeInleft}
                        >
                            {key_techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 my-1 capitalize bg-gray-200 rounded-lg dark:bg-dark-200 "
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                    <button
                        onClick={() => setShowDetail(null)}
                        className="absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                    >
                        <MdClose size={30} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
