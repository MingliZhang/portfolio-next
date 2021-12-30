import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInleft, routeAnimation } from "../animations";
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
            <motion.div
                variants={fadeInleft}
                initial="initial"
                animate="animate"
            >
                <h3>The following are all of my work experiences</h3>
            </motion.div>
        </motion.div>
    );
};

export default experiences;
