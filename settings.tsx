import {BellDot, BookOpenText, LibraryBig, ServerIcon, MessageSquare, Users, UsersIcon, Zap, Bot} from "lucide-react";
// https://lucide.dev/
interface Banner {
    title: string;
    link?: string;
    linkText?: string;
    color: "red" | "green" | "blue" | "yellow" | "purple" | "pink" | "gray"
}

export const DISCORD_LINK = "https://discord.gg/eenP4pu7k7";
export const WEBSITE_LINK = "https://www.htwk-leipzig.de";
export const GITHUB_LINK = "https://github.com/Hochschule-HTWK-Leipzig"

export const BANNERS: Banner[] = [
    {
        title: "⚠️ Inoffizielles Projekt - Nicht offiziell mit der HTWK Leipzig verbunden",
        color: "yellow"
    }
]

export const FEATURES = [
    {
        title: "Allgemeine Information",
        description: "Falls ihr schon Studenten der HTWK seid oder auch nicht, ist völlig egal, hier könnt ihr euch austauschen, informieren und gemeinsam Spaß haben!",
        Icon: BookOpenText,
    },
    {
        title: "Community Engagement",
        description: "Nimm an spannenden Diskussionen teil, stelle Fragen und vernetze dich mit anderen Studenten.",
        Icon: Users,
    },
    {
        title: "Benachrichtigungen",
        description: "Du kannst über folgende Themen informieren: Offizielle News, StuRa News, FSR News, HTWK-Bot News, Umfragen und Giveaways.",
        Icon: BellDot,
    },
    {
        title: "Studiengänge",
        description: "Auf dem Server gibt es für jeden Studiengang (Bachelor und Master) einen eigenen Kanal zum informieren und austauschen.",
        Icon: LibraryBig,
    },
    {
        title: "Question and Answer",
        description: "Erhalte schnelle Antworten auf häufig gestellte Fragen zur Universität, zu Kursen und Campuseinrichtungen.",
        Icon: Zap,
    },
    {
        title: "HTWK Leipzig Bot",
        description: "Der HTWK Leipzig Discord Server verfügt über ein eigenes Bot-System. ",
        Icon: Bot,
    }
]

export const COMMANDS = [
    {
        name: "/hilfe",
        description: "View your course schedule for the day or week",
        example: "/schedule week",
        categories: ["Hilfe"]
    },
    {
        name: "/mensa",
        description: "Check today's menu at the university cafeteria",
        example: "/mensa today",
        categories: ["Campus Life"]
    },
    {
        name: "/room",
        description: "Find available study rooms or check room schedules",
        example: "/room Li-115",
        categories: ["Campus Life"]
    },
    {
        name: "/events",
        description: "List upcoming university events and activities",
        example: "/events next-week",
        categories: ["Social"]
    },
    {
        name: "/studygroup",
        description: "Create or find study groups for your courses",
        example: "/studygroup create Mathematics-101",
        categories: ["Academic"]
    },
    {
        name: "/deadline",
        description: "Set reminders for assignment deadlines",
        example: "/deadline add 'Project Report' 2024-06-15",
        categories: ["Academic"]
    }
];

export const STATS = [
    {
        title: "Aktive Benutzer",
        value: "30+",
        icon: UsersIcon,
    },
    {
        title: "Commands Used",
        value: "50,000+",
        icon: MessageSquare,
    },
    {
        title: "Servers",
        value: "300+",
        icon: ServerIcon,
    },
];

export const QUESTIONS_AND_ANSWERS = [
    {
        question: "How do I reset my password?",
        answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.",
    },
    {
        question: "How do I contact support?",
        answer: "You can contact support by sending an email to info@htwk.de or by using the support channel on our Discord server.",
    },
    {
        question: "What is the refund policy?",
        answer: "Our refund policy allows for refunds within 30 days of purchase. Please refer to our refund policy page for more details.",
    },
    {
        question: "How do I change my email address?",
        answer: "To change your email address, go to your account settings and update your email under 'Account Information'.",
    }
]