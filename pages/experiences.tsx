import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInleft, fadeInup, routeAnimation, stagger } from "../animations";
import ExperienceCard from "../components/ExperienceCard";
import { experiences as experiencesData } from "../data";

const experiences = () => {
    console.log(experiencesData);
    return (
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-y-auto h-[65vh]"
        >
            <Head>
                <title>Experiences | Mingli Zhang | Web Developer</title>
            </Head>
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="grid gap-6 mx-4 lg:grid-cols-1"
            >
                {experiencesData.map((experience) => (
                    <motion.div
                        variants={fadeInup}
                        key={experience.id}
                        className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
                    >
                        <ExperienceCard experience={experience} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default experiences;
