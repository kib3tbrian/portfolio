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
import distressapp from "@/assets/images/distress-app.jpg";
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
    hobbies: [
        {
            title: "Singing Alone",
            emoji: "🎤",
            left: "5%",
            top: "3%",
            zIndex: 0,
        },
        {
            title: "Photography",
            emoji: "📸",
            left: "50%",
            top: "3%",
            zIndex: 0,
        },
        {
            title: "Gaming",
            emoji: "🎮",
            left: "10%",
            top: "33%",
            zIndex: 0,
        },
        {
            title: "Music",
            emoji: "🎵",
            left: "35%",
            top: "40%",
            zIndex: -10,
        },
        {
            title: "Meetups",
            emoji: "👥",
            left: "70%",
            top: "45%",
            zIndex: 0,
        },
        {
            title: "Workout & Fitness",
            emoji: "🏋️",
            left: "5%",
            top: "65%",
            zIndex: 0,
        },
        {
            title: "Reading",
            emoji: "📚",
            left: "45%",
            top: "70%",
            zIndex: 0,
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
            title: "Telegram",
            href: "https://t.me/uyscvtii",
        },
    ],
    portfolioProjects: [
        {
            company: "Locl",
            year: "2022",
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
            company: "GPS Travel",
            year: "2023",
            title: "Tours & Travel Platform",
            results: [
                { title: "Developed a modern web platform for GPS Travel, a Kenya-based company specializing in bespoke African journeys" },
                { title: "Integrated booking and itinerary management for airport transfers, safaris, and luxury getaways" },
                { title: "Enhanced user experience with real-time support and meet-and-greet service integration" },
            ],
            link: "https://gpstravel.co.ke",
            image: "/images/gpstravel.png",
            linkText: "View Live Site",
        },
        {
            company: "Destress",
            year: "2025",
            title: "Emergency Contact App",
            results: [
                { title: "Developed a fast, reliable platform for users to share verified emergency details securely" },
                { title: "Streamlined UX with debounced inputs, instant validation, and responsive design" },
                { title: "Set for Play Store launch with full mobile optimization and production-ready build" },
            ],
            link: "@/assets/images/destress.jpg",
            image: distressapp,
            linkText: "View Screenshots",
        },
        {
            company: "BuildAfrique",
            year: "2023",
            title: "Building & Construction Platform",
            results: [
                { title: "Built a modern web platform to showcase construction projects, services, and completed works with a premium UI" },
                { title: "Improved content discovery using clear section hierarchy, card-based layouts, and mobile-first design" },
                { title: "Optimized performance and SEO readiness for lead generation and future scaling" },
            ],
            link: "https://buildafrique.com",
            image: "/images/buildAfrique.png",
            linkText: "View Live Site",
        },
        {
            company: "Penda Health",
            year: "2022",
            title: "Claims Processing & Internal Tools",
            results: [
                { title: "Automated and optimized claims workflows to reduce manual processing and data inconsistencies" },
                { title: "Enhanced backend validation logic to improve accuracy and turnaround time for claims review" },
                { title: "Collaborated with cross-functional teams to support scalable healthcare operations" },
            ],
            link: "https://pendahealth.com",
            image: "/images/pendahealth.png",
            linkText: "View Project",
        },
        {
            company: "Numida Africa",
            year: "2023",
            title: "SME Lending Application",
            results: [
                { title: "Contributed to building data-driven features for SME credit assessment and financial insights" },
                { title: "Worked on secure APIs and data handling to support risk evaluation workflows" },
                { title: "Focused on performance and reliability for systems handling sensitive financial information" },
            ],
            link: "https://play.google.com/store/apps/details?id=com.numidatech.numida",
            image: "/images/numidaAfrica.jpg",
            linkText: "View Project",
        },
        {
            company: "iCyberEnterprises LLC",
            year: "2025",
            title: "Web Systems & Digital Solutions",
            results: [
                { title: "Developed and maintained client-facing web applications with a focus on stability and usability" },
                { title: "Implemented responsive layouts and reusable components to speed up delivery timelines" },
                { title: "Supported deployments and iterative improvements based on client feedback" },
            ],
            link: "https://icyberenterprises.com",
            image: "/images/icyber.png",
            linkText: "View Project",
        },
        {
            company: "xGscore.io",
            year: "2024",
            title: "Sports Analytics Platform",
            results: [
                { title: "Built interactive dashboards for visualizing match data and performance metrics" },
                { title: "Optimized frontend rendering for real-time or near-real-time score updates" },
                { title: "Designed a clean, data-focused UI to improve clarity and user engagement" },
            ],
            link: "https://xgscore.io",
            image: "/images/xgscore.png",
            linkText: "View Site",
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
            name: "Victor Vodegel",
            position: "Co-Founder @ Distress",
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
