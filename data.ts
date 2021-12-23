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
        category: ["jQuery", "express.js"],
        key_techs: [
            "HTML",
            "CSS",
            "jquery",
            "firebase",
            "express.js",
            "node",
            "heroku",
        ],
    },
    {
        id: 1,
        name: "Real news detection",
        description:
            "Collaborated on a team of three classmates. Used logistic regression, Naive Bayes, support vector machine, and LSTM to train the computer to distinguish between real and fake news and we compared the accuracy of each model. The data is from Kaggle.",
        image_path: "/images/news.jpg",
        deployed_url: "/documents/Report.pdf",
        github_url: "https://github.com/MingliZhang/COMP-562-Final-Project",
        category: ["python", "LaTeX"],
        key_techs: ["python", "LaTeX"],
    },
    {
        id: 2,
        name: "2048",
        description:
            "Implemented the classic 2048 game with a game model for modern web development course. The entire project took a day to finish and debug.",
        image_path: "/images/2048.jpg",
        deployed_url: "https://portfolio-a6fab.web.app/2048/index.html",
        github_url: "https://github.com/MingliZhang/2048",
        category: ["jQuery"],
        key_techs: ["jQuery"],
    },
    {
        id: 3,
        name: "Old Portfolio",
        description:
            "The old version of my porfolio. It is build using only HTML, CSS, and JQuery",
        image_path: "/images/old-portfolio.jpg",
        deployed_url: "https://portfolio-a6fab.web.app/",
        github_url: "https://github.com/MingliZhang/portfolio",
        category: ["jQuery", "express.js"],
        key_techs: ["JQuery", "express.js", "HTML", "CSS"],
    },
    {
        id: 4,
        name: "This Portfolio",
        description:
            "The portfolio you are currently viewing. It is more efficent, more elegant interface, and easy to expand.",
        image_path: "/images/new-portfolio.jpg",
        deployed_url: "https://minglizhang.com/",
        github_url: "https://github.com/MingliZhang/portfolio-next",
        category: ["next.js", "react"],
        key_techs: ["next.js", "react", "Tailwindcss", "framer-motion"],
    },
    {
        id: 5,
        name: "IBM's Tech Zone",
        description:
            "A platform for IBM to share its environments between development teams internally and contracted parties. I worked on this project during my internship at IBM as a full stack developer.",
        image_path: "/images/IBM.jpg",
        deployed_url: null,
        github_url: null,
        category: ["next.js", "react", "sails.js"],
        key_techs: ["next.js", "react", "Carbon", "sails.js"],
    },
    {
        id: 6,
        name: "How to get away from Covid 19",
        description:
            "Project for the 2020 fall Hackathon. Created with three others within 24 hours. The web app consisits of a covide-related game and a physical timer for washing hands.",
        image_path: "/images/covid.jpg",
        deployed_url: null,
        github_url:
            "https://github.com/MingliZhang/How-to-Get-Away-from-Covid-19",
        category: ["jQuery"],
        key_techs: ["jQuery"],
    },
    {
        id: 7,
        name: "Easy Access",
        description:
            "A platform for high school students that cannot get enough consultation for college application. The project was brought to me for a coures and passed on to future developers.",
        image_path: "/images/easyAccess.jpg",
        deployed_url: "https://easyaccess-9ffaa.web.app/",
        github_url: null,
        category: ["react", "sails.js", "mongoDB"],
        key_techs: ["react", "sails.js", "mongoDB"],
    },
    {
        id: 8,
        name: "CountDown 2030 Country Profiles",
        description:
            "Data visualization for UNICEF. This is the project from my college's information science lab CHIP.",
        image_path: "/images/CD2030.jpg",
        deployed_url: "https://www.countdown2030.org/landing_page",
        github_url: null,
        category: ["jQuery"],
        key_techs: ["jQuery", "wordPress"],
    },
    {
        id: 9,
        name: "Pattie",
        description:
            "A search engine that uses machine learning to structure unstructured data such as medical papers and publication.",
        image_path: "/images/pattie.jpg",
        deployed_url: "https://pattie.cymantix.com/",
        github_url: null,
        category: ["flask"],
        key_techs: ["flask"],
    },
    {
        id: 10,
        name: "2D Computer Graphics",
        description:
            "Implemented a C++ graphics library that can draw polygons, shaders, and much more.",
        image_path: "/images/2DGraphics.jpg",
        deployed_url: null,
        github_url: null,
        category: ["c++"],
        key_techs: ["c++"],
    },
    {
        id: 11,
        name: "Seam Carving",
        description:
            "A 'smart' way to decrease the size of an image without loosing much important information. It uses dynamic programming.",
        image_path: "/images/seamCarving.jpg",
        deployed_url: "https://youtu.be/K0JNBQBAtys",
        github_url: "https://github.com/MingliZhang/COMP-572",
        category: ["matlab"],
        key_techs: ["matlab"],
    },
];
