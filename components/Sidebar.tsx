import Image from "next/image";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillInstagram,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
    return (
        <div>
            <img
                src="/Profile-pic.jpg"
                alt="Profile image of me"
                className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Mingli </span>Zhang
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Web Developer
            </p>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
                href="/Resume.pdf"
                download="Mingli Zhang's resume"
            >
                <GiTie className="w-6 h-6 " />
                Download Resume
            </a>
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillFacebook className="w-8 h-8 cursor-pointer" />
                </a>
            </div>
            <div
                className="py-4 my-5 bg-gray-200"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Chapel Hill, USA</span>
                </div>
                <p className="my-2">zml2416154671@gmail.com</p>
                <p className="my-2">9192745562</p>
            </div>
            <button
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={() => window.open("mailto:zml2416154671@gmail.com")}
            >
                Email Me
            </button>
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
                Light UI
            </button>
        </div>
    );
};

export default Sidebar;
