import {
    FaReact, FaNodeJs, FaJava,
    FaAndroid, FaGitAlt, FaLinux, FaDatabase,
} from "react-icons/fa";
import {
    SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
    SiMongodb, SiMysql, SiPostgresql, SiPhp, SiCodeigniter
} from "react-icons/si";
import resume from '../assets/Asif_Ahmed.pdf';

export const menuItems = ["home", "skills", "projects", "journey", "contact"];

/* Portfolio Data */
export const portfolioData = {
    name: "Asif Ahmed Hanagi",
    titles: ["Full Stack Developer", "React.js Developer", "Node.js Developer", "Java Developer"],
    objective:
        "Passionate about building scalable, user-friendly applications. Skilled in full-stack development and always eager to explore new technologies. Currently working full-time at Indea Design Systems Pvt. Ltd.",
    resume: resume,
    github: "https://github.com/Mohammed-Sameer-Inamdar",
    linkedin: "http://linkedin.com/in/mohammed-sameer-inamdar-031121174",
    portfolio: "https://mohammed-sameer-inamdar.github.io/portfolio/",
    contact: {
        email: "mohammedsameerinamdar@gmail.com",
        phone: "+91 81474 17110"
    },
    skills: [
        {
            title: "Frontend",
            items: [
                { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
                { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
                { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
                { icon: <FaReact className="text-cyan-400" />, name: "React" },
                { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" }
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
                { icon: <SiPostgresql className="text-indigo-500" />, name: "PostgreSQL" },
                { icon: <FaDatabase className="text-gray-300" />, name: "MS SQL" }
            ]
        },
        {
            title: "Tools",
            items: [
                { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
                { icon: <FaLinux className="text-yellow-500" />, name: "Linux" }
            ]
        }
    ],
    projects: [
        {
            title: "Repfabric CRM Integration",
            description: "I contributed to the development of the Repfabric project, a comprehensive customer relationship management (CRM) system built using JavaServer Faces (JSF). The primary objective of this project was to streamline sales processes, enhance customer interaction, and improve overall sales management efficiency.",
            github: null,
            demo: null,
            featured: true
        },
        {
            title: "Hospitality Management System",
            description: "A comprehensive hospitality management system built using React, Node.js, Express.js, and MongoDB. Features user authentication, reservation management.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/hospitality",
            demo: null
        },
        {
            title: "Dynamic Form Builder",
            description: "React-based drag-and-drop form creation tool allowing custom field types, sections, and real-time preview. Integrated with APIs for saving and retrieving form layouts.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/dynamicForms",
            demo: null
        },
        {
            title: "Social Media",
            description: "A social media platform built using React, Node.js, Express.js, and MongoDB. Features user authentication, profile creation, and real-time chat functionality.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/social-medai",
            demo: null
        },
        {
            title: "Task Management App",
            description: "React + RTK Query powered app for managing tasks with filters, sorting, authentication, and optimized performance using memoization techniques.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/taskManager",
            demo: null
        },
        {
            title: "Portfolio Website",
            description: "Modern personal portfolio with responsive design, animations, and interactive UI built using React, Tailwind CSS, and Vite.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/portfolio",
            demo: "https://mohammed-sameer-inamdar.github.io/portfolio/"
        },
        {
            title: "Know Your Rights",
            description: "CodeIgniter powered app for understanding and complying with legal documents, ensuring compliance with laws and regulations. Providing references to the relevant laws and regulations.",
            github: "https://github.com/Mohammed-Sameer-Inamdar/know_your_rights",
            demo: null
        }
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
            title: "B.E. (ECE)",
            company: "B.L.D.E.A.’s V.P. Dr. P.G. Halakatti College of Engineering and Technology, VTU University",
            period: "2015 – 2019",
            description: "Graduated with 7.65 CGPA"
        },
        {
            type: "education",
            title: "PUC (Science)",
            company: "Secab P.U. College for Boys Vijayapur",
            period: "2013 – 2015",
            description: "Scored 87.33% (Distinction)"
        },
        {
            type: "education",
            title: "SSLC (10th)",
            company: "Iqra Urdu High School Vijayapur",
            period: "2012 – 2013",
            description: "Scored 78.88%"
        }
    ]
};