import { AiFillDatabase, AiFillFileImage } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { BsCircleFill, BsGraphUp } from 'react-icons/bs';
import { SiIbm, SiLenovo, SiSpeedtest } from 'react-icons/si';
import { IoMdSchool } from 'react-icons/io';
import { GiCookingPot } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';
import { MdOutlineWeb, MdHighQuality, MdComputer } from 'react-icons/md';
import { TiFlowMerge } from 'react-icons/ti';
import { ISpecialty, ISkill, IProject, IExperience } from './type';

export const specialties: ISpecialty[] = [
    {
        title: `Frontend Dev`,
        about: `I can build efficient and beautiful websites using <b>React</b>, <b>Next.js</b>, and <b>Flask</b>. I can also a fast learner to new frameworks.`,
        Icon: MdOutlineWeb,
    },
    {
        title: `Backend Dev`,
        about: `I have experience API building using <b>express.js</b> and <b>Sails.js</b> while connecting to <b>Firebase</b> and <b>MongoDB</b>.`,
        Icon: AiFillDatabase,
    },
    {
        title: `Image Processing`,
        about: `I have significant knowledge about image processing using <b>C++</b> and <b>Matlab</b> with great efficiency.`,
        Icon: AiFillFileImage,
    },
    {
        title: `UX Design Workflow`,
        about: `I am able to deliver a well thought out and easy to understand UX workflow using <b>draw.io</b>`,
        Icon: TiFlowMerge,
    },
    {
        title: `Testing`,
        about: `I have experience in <b>test first development</b> and can use <b>postman/thunder client</b> to make automated testing for APIs`,
        Icon: SiSpeedtest,
    },
    {
        title: `Quality Assurance`,
        about: `I have experience in doing full depth quality assurance and provide critical feedback for bug fixes and extreme user error cases.`,
        Icon: MdHighQuality,
    },
    {
        title: `Data visualization`,
        about: `I have experience in using <b>tableau</b> to visualize data into visual profiles and upload them to websites`,
        Icon: BsGraphUp,
    },
    {
        title: `Cooking`,
        about: `I love baking and cooking. I am currently fascinated with coffee brewing especially espresso.`,
        Icon: GiCookingPot,
    },
    {
        title: `Tech`,
        about: `I am up to date with what the latest hardware and software has to offer.`,
        Icon: MdComputer,
    },
];

export const languages: ISkill[] = [
    { name: `Javascript`, level: `95%`, Icon: BsCircleFill },
    { name: `Typescript`, level: `85%`, Icon: BsCircleFill },
    { name: `C`, level: `90%`, Icon: BsCircleFill },
    { name: `C++`, level: `85%`, Icon: BsCircleFill },
    { name: `Python`, level: `90%`, Icon: BsCircleFill },
    { name: `Java`, level: `75%`, Icon: BsCircleFill },
    { name: `Matlab`, level: `80%`, Icon: BsCircleFill },
    { name: `Racket`, level: `60%`, Icon: BsCircleFill },
    { name: `Prolog`, level: `40%`, Icon: BsCircleFill },
];

export const frameworks_libraries: ISkill[] = [
    { name: `Sails.js`, level: `60%`, Icon: BsCircleFill },
    { name: `Next.js`, level: `80%`, Icon: BsCircleFill },
    { name: `Flask`, level: `90%`, Icon: BsCircleFill },
    { name: `React`, level: `80%`, Icon: BsCircleFill },
    { name: `Tailwind`, level: `75%`, Icon: BsCircleFill },
    { name: `BootStrap`, level: `90%`, Icon: BsCircleFill },
    { name: `JQuery`, level: `90%`, Icon: BsCircleFill },
    { name: `Node.js`, level: `70%`, Icon: BsCircleFill },
];

export const projects: IProject[] = [
    {
        id: 0,
        name: `Miaomiao Social App`,
        description: `A social web app that consists of a personality test, anonymous post/Q&A to friends, group chat, and a quiz game to compete with each other. There is also a bad language filter implemented using third party API.`,
        image_path: `/images/miaomiao-chat.jpg`,
        deployed_url: `https://miaomiao-chat.herokuapp.com/`,
        github_url: `https://github.com/MingliZhang/final_426`,
        category: [`jQuery`, `express.js`],
        key_techs: [
            `HTML`,
            `CSS`,
            `jquery`,
            `firebase`,
            `express.js`,
            `node`,
            `heroku`,
        ],
    },
    {
        id: 1,
        name: `Real news detection`,
        description: `Collaborated on a team of three classmates. Used logistic regression, Naive Bayes, support vector machine, and LSTM to train the computer to distinguish between real and fake news and we compared the accuracy of each model. The data is from Kaggle.`,
        image_path: `/images/news.jpg`,
        deployed_url: `/documents/Report.pdf`,
        github_url: `https://github.com/MingliZhang/COMP-562-Final-Project`,
        category: [`python`, `LaTeX`],
        key_techs: [`python`, `LaTeX`],
    },
    {
        id: 2,
        name: `2048`,
        description: `Implemented the classic 2048 game with a game model for modern web development course. The entire project took a day to finish and debug.`,
        image_path: `/images/2048.jpg`,
        deployed_url: `https://portfolio-a6fab.web.app/2048/index.html`,
        github_url: `https://github.com/MingliZhang/2048`,
        category: [`jQuery`],
        key_techs: [`jQuery`],
    },
    {
        id: 3,
        name: `Old Portfolio`,
        description: `The old version of my porfolio. It is build using only HTML, CSS, and JQuery`,
        image_path: `/images/old-portfolio.jpg`,
        deployed_url: `https://portfolio-a6fab.web.app/`,
        github_url: `https://github.com/MingliZhang/portfolio`,
        category: [`jQuery`, `express.js`],
        key_techs: [`JQuery`, `express.js`, `HTML`, `CSS`],
    },
    {
        id: 4,
        name: `This Portfolio`,
        description: `The portfolio you are currently viewing. It is more efficient, more elegant interface, and easy to expand.`,
        image_path: `/images/new-portfolio.jpg`,
        deployed_url: `https://minglizhang.com/`,
        github_url: `https://github.com/MingliZhang/portfolio-next`,
        category: [`next.js`, `react`],
        key_techs: [`next.js`, `react`, `Tailwindcss`, `framer-motion`],
    },
    {
        id: 5,
        name: `IBM's Tech Zone`,
        description: `A platform for IBM to share its environments between development teams internally and contracted parties. I worked on this project during my internship at IBM as a full stack developer.`,
        image_path: `/images/IBM.jpg`,
        deployed_url: null,
        github_url: null,
        category: [`next.js`, `react`, `sails.js`],
        key_techs: [`next.js`, `react`, `Carbon`, `sails.js`],
    },
    {
        id: 6,
        name: `How to get away from Covid 19`,
        description: `Project for the 2020 fall Hackathon. Created with three others within 24 hours. The web app consisits of a covide-related game and a physical timer for washing hands.`,
        image_path: `/images/covid.jpg`,
        deployed_url: null,
        github_url: `https://github.com/MingliZhang/How-to-Get-Away-from-Covid-19`,
        category: [`jQuery`],
        key_techs: [`jQuery`],
    },
    {
        id: 7,
        name: `Easy Access`,
        description: `A platform for high school students that cannot get enough consultation for college application. The project was brought to me for a coures and passed on to future developers.`,
        image_path: `/images/easyAccess.jpg`,
        deployed_url: `https://easyaccess-9ffaa.web.app/`,
        github_url: null,
        category: [`react`, `sails.js`, `mongoDB`],
        key_techs: [`react`, `sails.js`, `mongoDB`],
    },
    {
        id: 8,
        name: `CountDown 2030 Country Profiles`,
        description: `Data visualization for UNICEF. This is the project from my college's information science lab CHIP.`,
        image_path: `/images/CD2030.jpg`,
        deployed_url: `https://www.countdown2030.org/landing_page`,
        github_url: null,
        category: [`jQuery`],
        key_techs: [`jQuery`, `wordPress`],
    },
    {
        id: 9,
        name: `Pattie`,
        description: `A search engine that uses machine learning to structure unstructured data such as medical papers and publication. I am currently working on some pilot projects that are based on the "main" PATTIE.`,
        image_path: `/images/pattie.jpg`,
        deployed_url: `https://pattie.cymantix.com/`,
        github_url: null,
        category: [`flask`],
        key_techs: [`flask`],
    },
    {
        id: 10,
        name: `2D Computer Graphics`,
        description: `Implemented a C++ graphics library that can draw polygons, shaders, and much more.`,
        image_path: `/images/2DGraphics.jpg`,
        deployed_url: null,
        github_url: null,
        category: [`c++`],
        key_techs: [`c++`],
    },
    {
        id: 11,
        name: `Seam Carving`,
        description: `A 'smart' way to decrease the size of an image without loosing much important information. It uses dynamic programming.`,
        image_path: `/images/seamCarving.jpg`,
        deployed_url: `https://youtu.be/K0JNBQBAtys`,
        github_url: `https://github.com/MingliZhang/COMP-572`,
        category: [`matlab`],
        key_techs: [`matlab`],
    },
];

export const experiences: IExperience[] = [
    {
        id: 0,
        company: `IBM`,
        position: `Full-stack development summer Intern`,
        start: `May 2021`,
        end: `Aug 2021`,
        description: `<li>Developed the foundation of a validation service that automats a fully manual process that took weeks to accomplish.</li>
        <li>Improved user experience on a platform that supports on average 2000+ users each month.</li>
        <li>Streamlined administration content activities to remove the need of updating through deployment. This freed up development resources, increased speed to update content, and cut down the number of deploys.</li>
        <li>Worked closely with project management to provide feedback on component functionality and the flexibility that we could deliver to stakeholders to improve user experience on the site.</li>`,
        location: `Remote, USA`,
        Icon: SiIbm,
    },
    {
        id: 1,
        company: `Cymantix`,
        position: `Software Enginner`,
        start: `Oct 2021`,
        end: `Present`,
        description: `<li>Worked on the upload feature of <a className="text-blue-100 underline" href="https://www.cymantix.com/pattie" target="_blank" rel="noreferrer" className="text-blue-400">Pattie</a></li>
        <li>Developed custom web crawlers and implimented parallel processing to retrieve data faster for our real time news clustering feature.</li>
        <li>In charge of the quality assurance of Pattie and other projects.</li><li>Working on code orgnization and readability.</li>`,
        location: `Remote, USA`,
        Icon: ImLab,
    },
    {
        id: 2,
        company: `UNC - LAIR`,
        position: `Software Enginner`,
        start: `Apr 2021`,
        end: `Present`,
        description: `<li>Developed the countdown2030 country profile website for the UNICEF project</li>
        <li>Technical leader of LAIR's new project called OLLIE.</li>`,
        location: `Remote, USA`,
        Icon: ImLab,
    },
    {
        id: 3,
        company: `Lenovo`,
        position: `UI/UX Design Intern`,
        start: `Jul 2017`,
        end: `Aug 2017`,
        description: `<li> Used MockingBot (Like Adobe XD) to designed Lenovo's B2B web store that provides all Lenovo's Fretailers with product information and is able to restock products easily.</li>
        <li>Determined the amount of resources needed for the project and reported to marketing and human resources. This earned the team more time to work on the project and it turned out well polished.</li>`,
        location: `Beijing, China`,
        Icon: SiLenovo,
    },
    {
        id: 4,
        company: `UNC Department of Computer Science`,
        position: `Undergraduate Learning Assistant for Computer Organization`,
        start: `Jan 2019`,
        end: `May 2019`,
        description: `<li>Taught students about transistors, computer chip design, instruction sets, memory structures, and machine language</li>`,
        location: `Chapel Hill, North Carolina, USA`,
        Icon: IoMdSchool,
    },
    {
        id: 5,
        company: `UNC Department of Computer Science`,
        position: `Undergraduate Learning Assistant for Mathematics in Image Computing`,
        start: `Jan 2022`,
        end: `Present`,
        description: `<li>Mainly helps the teaching professor, Stephen Pizer, on organzing the course.</li><li>Helps student with matlab debugging</li><li>Taught students about fourier transforms, gaussian, and other related topics in image computing.</li>`,
        location: `Chapel Hill, North Carolina, USA`,
        Icon: IoMdSchool,
    },
];
