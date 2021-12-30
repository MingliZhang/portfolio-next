import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }) {
    return (
        <ThemeProvider attribute="class">
            <div className="grid grid-cols-12 gap-6 px-5 my-[4vh] lg:px-48 sm:px-20 md:px-32 h-[65vh]">
                <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-200 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
                    <Sidebar />
                </div>
                <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
                    <Navbar />
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
