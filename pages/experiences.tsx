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
        >
            <Head>
                <title>Experiences | Mingli Zhang | Web Developer</title>
            </Head>
            <motion.div variants={stagger} initial="initial" animate="animate">
                {experiencesData.map((experience) => (
                    <motion.div variants={fadeInup} key={experience.id}>
                        <ExperienceCard experience={experience} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default experiences;
