import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInleft, fadeInup, stagger } from "../animations";
import { IExperience } from "../type";

const ExperienceCard: FunctionComponent<{ experience: IExperience }> = ({
    experience: { company, position, start, end, description, location },
}) => {
    console.log(company, position, start, end, description, location);
    return <div>Experience</div>;
};

export default ExperienceCard;
