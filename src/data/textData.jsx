import {
    FaReact, FaNodeJs, FaJava, FaLaptopCode,
    FaAndroid, FaGitAlt, FaLinux, FaGithub,
} from "react-icons/fa";
import {
    SiJavascript, SiHtml5, SiCss3, SiRedux,
    SiMongodb, SiMysql, SiPhp, SiCodeigniter,
    SiTypescript, SiGithubcopilot
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { VscAzureDevops } from "react-icons/vsc";
import resume from '../assets/Asif_Ahmed.pdf';

export const menuItems = ["home", "skills", "projects", "journey", "contact"];

/* Portfolio Data */
export const portfolioData = {
    name: "Asif Ahmed Hanagi",
    titles: ["Full Stack Developer", "Frontend Developer", "Node.js Developer"],
    objective:
        "Driven by a passion for building scalable, user-friendly applications. Experienced in full-stack development and always eager to learn new technologies. Currently a full-time developer at Tata Consultancy Services.",
    resume: resume,
    github: "https://github.com/hanagiasif",
    linkedin: "https://www.linkedin.com/in/asif-ahmed-hanagi-2096921b9/",
    portfolio: "https://mohammed-sameer-inamdar.github.io/portfolio/",
    contact: {
        email: "asifahmedhanagi01@gmail.com",
        phone: "+91 9481637908"
    },
    skills: [
        {
            title: "Frontend",
            items: [
                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                { icon: <SiRedux className="text-cyan-400" />, name: "Redux" },
                { icon: <SiTypescript className="text-yellow-400" />, name: "TypeScript" },
                { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
                { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
                { icon: <BsFiletypeScss className="text-blue-500" />, name: "SCSS" },
                { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                { icon: <FaLaptopCode className="text-orange-500" />, name: "Responsive Web Design" }
            ]
        },
        {
            title: "Backend",
            items: [
                { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
                { icon: <FaJava className="text-red-500" />, name: "Java" },
                { icon: <SiPhp className="text-indigo-400" />, name: "PHP" },
                { icon: <SiCodeigniter className="text-red-400" />, name: "CodeIgniter" }
            ]
        },
        {
            title: "Mobile",
            items: [
                { icon: <FaAndroid className="text-green-400" />, name: "Android Studio" },
                { icon: <FaReact className="text-cyan-400" />, name: "React Native" }
            ]
        },
        {
            title: "Databases",
            items: [
                { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
                { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
            ]
        },
        {
            title: "Tools",
            items: [
                { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
                { icon: <FaGithub className="text-gray-500" />, name: "Github" },
                { icon: <VscAzureDevops className="text-blue-500" />, name: "Azure" },
                { icon: <SiGithubcopilot className="text-green-500" />, name: "Github Copilot" },
            ]
        }
    ],
    projects: [
        {
            title: "Taskify",
            description: "Taskify is a React and TypeScript-based todo application that allows users to add, filter, update, and delete tasks. It features a user-friendly interface and efficient state management.",
            github: "https://github.com/hanagiasif/Taskify",
            demo: null
        },
        {
            title: "Omnifood",
            description: "Omnifood is a modern food delivery website built using HTML, CSS, and JavaScript. It features a responsive design, interactive UI, and is deployed on Netlify for fast and reliable access.",
            github: "https://github.com/hanagiasif/Omnifood",
            demo: "https://omnifood-asifh.netlify.app/"
        },
        {
            title: "Youtube Clone",
            description: "Youtube Clone is a video streaming web app built using React and CSS. It features a responsive layout, video browsing, and a user-friendly interface inspired by the original YouTube platform.",
            github: "https://github.com/hanagiasif/youtubeClone",
            demo: null
        },
        {
            title: "Task Management System",
            description: "A task management system built with Nest.js, allowing users to create, filter, update, and delete tasks.",
            github: "https://github.com/hanagiasif/nestjs-task-management",
            demo: null
        },
        {
            title: "Portfolio Website",
            description: "Modern personal portfolio with responsive design, animations, and interactive UI built using React, Tailwind CSS, and Vite.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/portfolio",
            demo: "https://mohammed-sameer-inamdar.github.io/portfolio/"
        },
    ],
    journey: [
        // EXPERIENCE
        {
            type: "experience",
            title: "Senior Software Developer",
            company: "Indea Design Systems Pvt. Ltd",
            period: "Apr 2021 – Present",
            description:
                "Collaborated on CRM and hospitality projects using JSF, React, and Node.js. Focused on performance optimization, API integration, and scalable solutions."
        },
        {
            type: "experience",
            title: "Junior Software Developer (Trainee)",
            company: "Rooman Technologies",
            period: "Feb 2020 – Apr 2020",
            description:
                "Completed comprehensive Java training focusing on OOP, Data Structures, and software development best practices."
        },

        // EDUCATION
        {
            type: "education",
            title: "B.E. (Mechanical Engineering)",
            company: "B.L.D.E.A.’s V.P. Dr. P.G. Halakatti College of Engineering and Technology, VTU University",
            period: "2015 – 2019",
            description: "8.3 CGPA (Distinction)"
        },
        {
            type: "education",
            title: "PUC (Science)",
            company: "Secab P.U. College for Boys Vijayapur",
            period: "2013 – 2015",
            description: "86% (Distinction)"
        },
        {
            type: "education",
            title: "SSLC (10th)",
            company: "Iqra Urdu High School Vijayapur",
            period: "2012 – 2013",
            description: "89% (Distinction)"
        }
    ]
};