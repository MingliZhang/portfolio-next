import { languages, frameworks_libraries } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";

import { fadeInup, routeAnimation } from "../animations";
import Head from "next/head";
const Resume = () => {
    return (
        <motion.div
            className="px-6 py-2 overflow-y-auto h-[65vh]"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Head>
                <title>Resume | Mingli Zhang | Web Developer</title>
            </Head>
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                    variants={fadeInup}
                    initial="initial"
                    animate="animate"
                >
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            Computer Science and Mathematics
                        </h5>
                        <p className="font-semibold">
                            UNC-Chapel Hill (2018-present)
                        </p>
                        <p className="my-3">
                            I am currently pursuing computer science (BS) and
                            mathematics(BS) degree. Planning on pursuing a
                            Masters degree in computer science.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInup}
                    initial="initial"
                    animate="animate"
                >
                    <h5 className="my-3 text-2xl font-bold">
                        Current position
                    </h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">
                            Software Enginner
                        </h5>
                        <p className="font-semibold">Cymantix (2021-present)</p>
                        <p className="my-3">
                            Working on the upload feature of{" "}
                            <a
                                href="https://www.cymantix.com/pattie"
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-400"
                            >
                                Pattie
                            </a>
                            . Also in charge of the quality assurance of Pattie
                            and other projects.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 ">
                <div className="">
                    <h5 className="my-3 text-2xl font-bold ">
                        Major Languages
                    </h5>
                    <div className="my-2">
                        {languages.map((language) => (
                            <Bar data={language} key={language.name} />
                        ))}
                    </div>
                </div>
                <div className="">
                    <h5 className="my-3 text-2xl font-bold ">
                        Major Frameworks and Libraries
                    </h5>
                    <div className="my-2">
                        {frameworks_libraries.map((framework_library) => (
                            <Bar
                                data={framework_library}
                                key={framework_library.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;
