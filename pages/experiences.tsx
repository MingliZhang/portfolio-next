import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInleft, fadeInup, routeAnimation, stagger } from "../animations";
import ExperienceCard from "../components/ExperienceCard";
import { experiences as experiencesData } from "../data";

const experiences = () => {
    return (
        <motion.div
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Head>
                <title>Experiences | Mingli Zhang | Web Developer</title>
            </Head>
            <motion.div
                variants={fadeInleft}
                initial="initial"
                animate="animate"
                className="mx-4 my-4"
            >
                <p>These are my major working experiances.</p>
            </motion.div>
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 gap-6 mx-4 overflow-y-auto h-[60vh]"
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
