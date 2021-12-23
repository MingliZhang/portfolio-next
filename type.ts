import { IconType } from "react-icons";

export interface ISpecialty {
    title: string;
    about: string;
    Icon: IconType;
}

export interface ISkill {
    name: string;
    level: string;
    Icon: IconType;
}

export interface IProject {
    id: number;
    name: string;
    description: string;
    image_path: string;
    deployed_url: string | null;
    github_url: string | null;
    category: Category[];
    key_techs: string[];
}

export type Category =
    | "react"
    | "next.js"
    | "sails.js"
    | "node.js"
    | "firebase"
    | "express.js"
    | "mongoDB"
    | "mysql"
    | "tableau"
    | "wordpress"
    | "jQuery"
    | "python"
    | "LaTeX"
    | "heroku";
