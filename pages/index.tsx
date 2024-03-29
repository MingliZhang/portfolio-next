import Head from 'next/head';

import SpecialtyCard from '../components/SpecialtyCard';

import { motion } from 'framer-motion';
import { specialties } from '../data';
import { fadeInleft, fadeInup, routeAnimation, stagger } from '../animations';

const Index = () => {
    return (
        <motion.div
            className="flex flex-col flex-grow px-6 pt-1"
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit">
            <Head>
                <title>Home | Mingli Zhang | Web Developer</title>
            </Head>
            <motion.div
                variants={fadeInleft}
                initial="initial"
                animate="animate">
                <h5 className="my-3 font-medium">
                    I am a master student at UNC-Chapel Hill studying Computer
                    Science, with experience in web development, database, data
                    analysis, and systems research. Was a software engineer at
                    Cymantix and interned at IBM as a full-stack developer.
                </h5>
            </motion.div>
            <div
                className="flex-grow p-4 mt-5 overflow-y-auto bg-gray-400 dark:bg-dark-100 h-[50vh]"
                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
                <h6 className="my-3 text-xl font-bold tracking-wide">
                    My specialties
                </h6>
                <motion.div
                    className="grid gap-6 lg:grid-cols-2"
                    variants={stagger}
                    initial="initial"
                    animate="animate">
                    {specialties.map((specialty) => (
                        <motion.div
                            variants={fadeInup}
                            className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
                            key={specialty.title}>
                            <SpecialtyCard specialty={specialty} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Index;
