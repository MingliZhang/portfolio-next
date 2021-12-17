import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navitem from "./Navitem";

const Navbar = () => {
    const { pathname } = useRouter();
    const [activeItem, setActiveItem] = useState<string>("");

    useEffect(() => {
        if (pathname === "/") setActiveItem("About");
        if (pathname === "/projects") setActiveItem("Projects");
        if (pathname === "/resume") setActiveItem("Resume");
    }, []);
    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
                {activeItem}
            </span>
            <div className="flex space-x-5 text-lg">
                <Navitem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                />
                <Navitem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                <Navitem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
            </div>
        </div>
    );
};

export default Navbar;
