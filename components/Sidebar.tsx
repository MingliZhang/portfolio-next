import Image from "next/image";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <>
            <Image
                src="/images/Profile-pic.jpg"
                alt="Profile image of me"
                height="180"
                width="180"
                className="mx-auto rounded-full "
                layout="intrinsic"
                quality={100}
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Mingli </span>Zhang
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
                Web Developer
            </p>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
                href="https://portfolio-a6fab.web.app/"
                target="_blank."
            >
                <GiTie className="w-6 h-6 " />
                Old Portfolio
            </a>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
                href="/documents/Resume.pdf"
                download="Mingli Zhang's resume.pdf"
            >
                <GiTie className="w-6 h-6 " />
                Download Resume
            </a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a
                    href="https://www.linkedin.com/in/mingli-zhang/"
                    aria-label="LinkedIn"
                >
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="https://github.com/MingliZhang" aria-label="Github">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a
                    href="https://www.instagram.com/mingli_zhang/"
                    aria-label="Instagram"
                >
                    <AiFillInstagram className="w-8 h-8 cursor-pointer" />
                </a>
                <a
                    href="https://www.facebook.com/mike.zhang.792303"
                    aria-label="Facebook"
                >
                    <AiFillFacebook className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Chapel Hill, USA</span>
                </div>
                <p className="my-2">zml2416154671@gmail.com</p>
                <p className="my-2">(919)274-5562</p>
            </div>
            <button
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={() => window.open("mailto:zml2416154671@gmail.com")}
            >
                Email Me
            </button>
            <button
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
                onClick={toggleTheme}
            >
                Toggle Theme
            </button>
        </>
    );
};

export default Sidebar;
