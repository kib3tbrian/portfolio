import PythonIcon from "@/assets/icons/toolbox/python.svg";
import SquareTsIcon from "@/assets/icons/toolbox/square-ts.svg";
import SolidityIcon from "@/assets/icons/toolbox/solidity.svg";
import HTML5Icon from "@/assets/icons/toolbox/html5.svg";
import CssIcon from "@/assets/icons/toolbox/css3.svg";
import ReactIcon from "@/assets/icons/toolbox/react.svg";
import FastAPIIcon from "@/assets/icons/toolbox/fastapi.svg";
import GitIcon from "@/assets/icons/toolbox/git.svg";
import PostgresIcon from "@/assets/icons/toolbox/postgresql.svg";
import FirebaseIcon from "@/assets/icons/toolbox/firebase.svg";
import GithubIcon from "@/assets/icons/toolbox/github.svg";
import PostmanIcon from "@/assets/icons/toolbox/postman.svg";
import TailwindIcon from "@/assets/icons/toolbox/tailwind.svg";
import MongoDBIcon from "@/assets/icons/toolbox/mongo-db.svg";
import NextjsIcon from "@/assets/icons/toolbox/nextjs.svg";
import VSCodeIcon from "@/assets/icons/toolbox/vs-code.svg";
import VercelIcon from "@/assets/icons/toolbox/vercel.svg";
import SwaggerIcon from "@/assets/icons/toolbox/swagger.svg";
import NodeJsIcon from "@/assets/icons/toolbox/node-js.svg";
import FlutterIcon from "@/assets/icons/toolbox/flutter.svg";
import localSocialPostmanPage from "@/assets/images/local-social-postman-page.png";
import profileCardsGeneratorPage from "@/assets/images/profile-cards-generator-page.png";
import markshifyLandingPage from "@/assets/images/markshify-landing-page.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import grownUpMarketingAvatar from "@/assets/images/grown-up-marketing.webp";
import shanzilAvatar from "@/assets/images/shanzil-avatar.webp";

const CONFIG = {
    email: "its.kibetbrian@gmail.com",
    toolboxItems: [
        {
            title: "HTML5",
            iconType: HTML5Icon,
        },
        {
            title: "CSS",
            iconType: CssIcon,
        },
        {
            title: "Python",
            iconType: PythonIcon,
        },
        {
            title: "TypeScript",
            iconType: SquareTsIcon,
        },
        {
            title: "Node.js",
            iconType: NodeJsIcon,
        },
        {
            title: "Tailwind CSS",
            iconType: TailwindIcon,
        },
        {
            title: "Solidity",
            iconType: SolidityIcon,
        },
        {
            title: "Flutter",
            iconType: FlutterIcon,
        },
        {
            title: "FastAPI",
            iconType: FastAPIIcon,
        },
        {
            title: "Postman",
            iconType: PostmanIcon,
        },
        {
            title: "React",
            iconType: ReactIcon,
        },
        {
            title: "Nextjs",
            iconType: NextjsIcon,
        },
        {
            title: "MongoDB",
            iconType: MongoDBIcon,
        },
        {
            title: "Firebase",
            iconType: FirebaseIcon,
        },
        {
            title: "PostgreSQL",
            iconType: PostgresIcon,
        },
        {
            title: "Git",
            iconType: GitIcon,
        },
        {
            title: "Github",
            iconType: GithubIcon,
        },
        {
            title: "Visual Studio Code",
            iconType: VSCodeIcon,
        },
        {
            title: "Vercel",
            iconType: VercelIcon,
        },
    ],
    footerLinks: [
        {
            title: "Github",
            href: "https://github.com/kib3tbrian",
        },
        {
            title: "Discord",
            href: "https://discord.com/users/945739329517522974",
        },
        {
            title: "Signal",
            href: "https://signal.me/#eu/HuTGxV12vBtFuKYV9Zwlz4YoDWhx-5_-_IyFRUx0R4pPA133bf1F17kcnrz4-zfx",
        },
    ],
    portfolioProjects: [
        {
            company: "Local Social",
            year: "2025",
            title: "Backend for Social Media Platform",
            results: [
                { title: "Encompassing 30+ endpoints" },
                { title: "Implemented 5+ core features" },
                { title: "Database incorporating geospatial data" },
            ],
            link: "/images/flowchart-local-social.png",
            image: localSocialPostmanPage,
            linkText: "View Flowchart",
        },
        {
            company: "Markshify",
            year: "2024",
            title: "OCR-Based Marksheet Scanner",
            results: [
                { title: "Automated marksheet to CSV conversion" },
                { title: "Extracts 20+ fields of data" },
                { title: "Custom utility functions for data extraction" },
            ],
            link: "https://github.com/kib3tbrian/Markshify",
            image: markshifyLandingPage,
            linkText: "View Code",
        },
        {
            company: "Profile Cards API",
            year: "2023",
            title: "Dynamic Profile Cards",
            results: [
                { title: "Sharable and personalized profile cards" },
                { title: "With debouncing and field validation" },
                { title: "99.95% uptime leveraging Vercel" },
            ],
            link: "https://kibetbrian.pro/Profile-Cards-API/",
            image: profileCardsGeneratorPage,
            linkText: "View Live Site",
        },
    ],
    testimonials: [
        {
            name: "Jamie Wilkinson",
            position: "CTO @ xgscore.io",
            text: "Brian delivered exceptional work on our analytics platform. His full-stack solutions were both elegant and robust, demonstrating deep understanding of modern web technologies. A reliable developer who communicates clearly and delivers on time.",
            avatar: grownUpMarketingAvatar,
        },
        {
            name: "Ray Youssef",
            position: "CEO @ Noones",
            text: "Brian's work on our mobile app significantly improved performance and user experience. His attention to detail and clean coding practices made him a valuable asset to our team. Highly recommended for any Android development project.",
            avatar: memojiAvatar3,
        },
        {
            name: "Dr. Koczela",
            position: "COO @ Penda Health",
            text: "Brian provided excellent data analysis that helped us make better operational decisions. He transformed complex datasets into clear, actionable insights. A thoughtful professional who asks the right questions to deliver meaningful results.",
            avatar: memojiAvatar3,
        },
    ],
};

export const email = CONFIG.email;
export const toolBoxItems = CONFIG.toolboxItems;
export const hobbies = CONFIG.hobbies;
export const footerLinks = CONFIG.footerLinks;
export const portfolioProjects = CONFIG.portfolioProjects;
export const testimonials = CONFIG.testimonials;
