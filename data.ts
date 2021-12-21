import { RiComputerLine } from "react-icons/ri";
import { BsCircleFill } from "react-icons/bs";
import { ISpecialty, ISkill, IProject } from "./type";

export const specialties: ISpecialty[] = [
    {
        title: "Frontend Dev",
        about: "lorem... <b>HTML</b>",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Dev",
        about: "lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Full stack dev",
        about: "Lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Frontend Dev",
        about: "lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Dev",
        about: "lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Full stack dev",
        about: "Lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Frontend Dev",
        about: "lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Dev",
        about: "lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Frontend Dev",
        about: "lorem...",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Dev",
        about: "lorem...",
        Icon: RiComputerLine,
    },
];

export const languages: ISkill[] = [
    { name: "Python", level: "80%", Icon: BsCircleFill },
    { name: "Javascript", level: "80%", Icon: BsCircleFill },
    { name: "Java", level: "80%", Icon: BsCircleFill },
    { name: "C++", level: "80%", Icon: BsCircleFill },
];

export const frameworks_libraries: ISkill[] = [
    { name: "Sails.js", level: "80%", Icon: BsCircleFill },
    { name: "Next.js", level: "80%", Icon: BsCircleFill },
    { name: "Flask", level: "80%", Icon: BsCircleFill },
    { name: "React", level: "80%", Icon: BsCircleFill },
    { name: "Tailwind", level: "80%", Icon: BsCircleFill },
    { name: "BootStrap", level: "80%", Icon: BsCircleFill },
    { name: "Tailwind", level: "80%", Icon: BsCircleFill },
    { name: "BootStrap", level: "80%", Icon: BsCircleFill },
];

export const projects: IProject[] = [
    {
        name: "Miaomiao Social App",
        description:
            "A social web app that consists of a personality test, anonymous post/Q&A to friends, group chat, and a quiz game to compete with each other. There is also a bad language filter implemented using third party API.",
        image_path: "images/miaomiao-chat.png",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/final_426",
        catagory: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
    {
        name: "Fake or real news detection",
        description:
            "Collaborated on a team of three classmates. Used logistic regression, Naive Bayes, support vector machine, and LSTM to train the computer to distinguish between real and fake news and we compared the accuracy of each model. The data is from Kaggle.",
        image_path: "images/Machine learning.png",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/COMP-562-Final-Project",
        catagory: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
    {
        name: "Miaomiao Social App",
        description:
            "A social web app that consists of a personality test, anonymous post/Q&A to friends, group chat, and a quiz game to compete with each other. There is also a bad language filter implemented using third party API.",
        image_path: "images/miaomiao-chat.png",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/final_426",
        catagory: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
    {
        name: "Fake or real news detection",
        description:
            "Collaborated on a team of three classmates. Used logistic regression, Naive Bayes, support vector machine, and LSTM to train the computer to distinguish between real and fake news and we compared the accuracy of each model. The data is from Kaggle.",
        image_path: "images/Machine learning.png",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/COMP-562-Final-Project",
        catagory: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
    {
        name: "Miaomiao Social App",
        description:
            "A social web app that consists of a personality test, anonymous post/Q&A to friends, group chat, and a quiz game to compete with each other. There is also a bad language filter implemented using third party API.",
        image_path: "images/miaomiao-chat.png",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/final_426",
        catagory: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
    {
        name: "Fake or real news detection",
        description:
            "Collaborated on a team of three classmates. Used logistic regression, Naive Bayes, support vector machine, and LSTM to train the computer to distinguish between real and fake news and we compared the accuracy of each model. The data is from Kaggle.",
        image_path: "images/Machine learning.png",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/COMP-562-Final-Project",
        catagory: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
];
