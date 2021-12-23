import { RiComputerLine } from "react-icons/ri";
import { BsCircleFill } from "react-icons/bs";
import { ISpecialty, ISkill, IProject } from "./type";

export const specialties: ISpecialty[] = [
    {
        title: "Frontend Dev",
        about: "I can build efficent and beautiful websites using <b>React</b>, <b>Next.js</b>, and <b>Flask</b>. I can also a fast learner to new frameworks.",
        Icon: RiComputerLine,
    },
    {
        title: "Backend Dev",
        about: "I have expeience API building using <b>express.js</b> and <b>Sails.js</b> while connecting to <b>Firebase</b> and <b>MongoDB</b>.",
        Icon: RiComputerLine,
    },
    {
        title: "Image Processing",
        about: "I have significant knowledge about image processing using <b>C++</b> and <b>Matlab</b> with great efficency.",
        Icon: RiComputerLine,
    },
    {
        title: "UX Design Workflow",
        about: "I am able to deliver a well thought out and easy to understand UX workflow using <b>draw.io</b>",
        Icon: RiComputerLine,
    },
    {
        title: "Testing",
        about: "I have expeience in <b>test first development</b> and can use <b?postman/thunder client</b> to make automated testing for APIs",
        Icon: RiComputerLine,
    },
    {
        title: "Quality Assurance",
        about: "I have experience in doing full depth quality assurance and provide critical feedback for bug fixes and extream user error cases.",
        Icon: RiComputerLine,
    },
    {
        title: "Data visualization",
        about: "I have experiance in using <b>tableau</b> to visualize data into visual profiles and upload them to websites",
        Icon: RiComputerLine,
    },
    {
        title: "Cooking",
        about: "I love baking and cooking western and Chinese food.",
        Icon: RiComputerLine,
    },
    {
        title: "Tech",
        about: "I am up to date with what the latest hardware and software has to offer.",
        Icon: RiComputerLine,
    },
];

export const languages: ISkill[] = [
    { name: "Javascript", level: "98%", Icon: BsCircleFill },
    { name: "Typescript", level: "95%", Icon: BsCircleFill },
    { name: "C", level: "95%", Icon: BsCircleFill },
    { name: "C++", level: "90%", Icon: BsCircleFill },
    { name: "Python", level: "90%", Icon: BsCircleFill },
    { name: "Java", level: "75%", Icon: BsCircleFill },
    { name: "Matlab", level: "80%", Icon: BsCircleFill },
    { name: "Racket", level: "60%", Icon: BsCircleFill },
    { name: "Prolog", level: "40%", Icon: BsCircleFill },
];

export const frameworks_libraries: ISkill[] = [
    { name: "Sails.js", level: "60%", Icon: BsCircleFill },
    { name: "Next.js", level: "80%", Icon: BsCircleFill },
    { name: "Flask", level: "90%", Icon: BsCircleFill },
    { name: "React", level: "80%", Icon: BsCircleFill },
    { name: "Tailwind", level: "75%", Icon: BsCircleFill },
    { name: "BootStrap", level: "90%", Icon: BsCircleFill },
    { name: "jQuery", level: "90%", Icon: BsCircleFill },
    { name: "express.js", level: "70%", Icon: BsCircleFill },
];

export const projects: IProject[] = [
    {
        id: 0,
        name: "Miaomiao Social App",
        description:
            "A social web app that consists of a personality test, anonymous post/Q&A to friends, group chat, and a quiz game to compete with each other. There is also a bad language filter implemented using third party API.",
        image_path: "/images/miaomiao-chat.jpg",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/final_426",
        category: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
    {
        id: 1,
        name: "Real news detection",
        description:
            "Collaborated on a team of three classmates. Used logistic regression, Naive Bayes, support vector machine, and LSTM to train the computer to distinguish between real and fake news and we compared the accuracy of each model. The data is from Kaggle.",
        image_path: "/images/news.jpg",
        deployed_url: "https://miaomiao-chat.herokuapp.com/",
        github_url: "https://github.com/MingliZhang/COMP-562-Final-Project",
        category: ["jquery", "css", "firebase", "express"],
        key_techs: ["jquery", "css", "firebase", "express", "node", "heroku"],
    },
    {
        id: 2,
        name: "2048",
        description:
            "Implemented the classic 2048 game with a game model for modern web development course. The entire project took a day to finish and debug.",
        image_path: "/images/2048.jpg",
        deployed_url: "",
        github_url: "https://github.com/MingliZhang/2048",
        category: ["jquery", "css"],
        key_techs: ["jquery", "css"],
    },
];
