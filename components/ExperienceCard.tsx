import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInleft, fadeInup, stagger } from "../animations";
import { IExperience } from "../type";

const ExperienceCard: FunctionComponent<{ experience: IExperience }> = ({
    experience: { company, position, start, end, description, location, Icon },
}) => {
    console.log(company, position, start, end, description, location);
    const createMarkup = () => {
        return {
            __html: description,
        };
    };
    return (
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-green" />
            <div>
                <h3 className="font-bold">{position}</h3>
                <span>
                    {company} | {location} | {start} - {end}
                </span>
                <ul
                    className="list-disc list-inside"
                    dangerouslySetInnerHTML={createMarkup()}
                ></ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
