import {BellDot, BookOpenText, LibraryBig, ServerIcon, MessageSquare, Users, UsersIcon, Zap, Bot} from "lucide-react";
// https://lucide.dev/
export interface Banner {
    title: string;
    link?: string;
    linkText?: string;
    color: "red" | "green" | "blue" | "yellow" | "purple" | "pink" | "gray"
}

export interface Command {
    name: string;
    description: string;
    categories: string[];
    parameters?: {
        name: string;
        description: string;
        required: boolean;
        example?: string;
    }[]
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

export const COMMANDS: Command[] = [
    {
        name: "/hilfe",
        description: "Zeigt dir alle wichtigen Informationen zum Bot.",
        categories: ["Hilfe", "Bot"],
    },
    {
        name: "/status",
        description: "Zeigt dir Informationen über den Bot an.",
        categories: ["Bot"]
    },
    {
        name: "/bewerbung",
        description: "Schicke eine bewerbung für das Discord Server Team ab.",
        categories: ["Bewerbung", "Team"]
    },
    {
        name: "/user-report",
        description: "Melde einen User auf Grund von Fehlverhalten.",
        categories: ["Report"],
        parameters: [{
            name: "User",
            description: "Wen möchtest du Melden?",
            required: true,
            example: "@Max"
        },
        {
            name: "Grund",
            description: "Warum soll der User gemldet werden?",
            required: true,
            example: "Spam"
        }]
    },
    {
        name: "/developer",
        description: "Zeigt dir die Developer des HTWK Bots an.",
        categories: ["Developer", "Bot"]
    },
        {
        name: "!verify",
            description: "Verifiziere dich, um den Server komplett nutzen zu können.",
            categories: ["Verifizieren", "Mitglieder"]
    },
    {
        name: "!clear",
        description: "Lösche als Moderator ungewünschte Nachrichten aus dem Chat.",
        categories: ["Moderator", "Team"],
        parameters: [{
            name: "Zahl",
            description: "Wie viele Nachrichten sollen gelöscht werden?",
            required: true,
            example: "10"
        },
        {
            name: "Username",
            description: "Von wem sollen die Nachrichten gelöscht werden?",
            required: false,
            example: "max_mustermann"
        }]
    },
    {
        name: "!slowmode",
        description: "Verändere als Moderator die Schreibgeschwindigkeit des Chats.",
        categories: ["Moderator", "Team"],
        parameters: [{
            name: "Zeit",
            description: "Wie hoch soll der Slowmode sein (in Sek.)?",
            required: true,
            example: "10 "
        }]
    },
    {
        name: "!de",
        description: "Lass dir die Nachricht eines Users ins Deutsche übersetzen.",
        categories: ["Mitglieder"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
    },
        {
        name: "!eng",
        description: "Lass dir die Nachricht eines Users ins Englische übersetzen.",
        categories: ["Mitglieder"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
    },
        {
        name: "!fr",
            description: "Lass dir die Nachricht eines Users ins Französische übersetzen.",
        categories: ["Mitglieder"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
    },
        {
        name: "!esp",
            description: "Lass dir die Nachricht eines Users ins Spanische übersetzen.",
        categories: ["Mitglieder"],
        parameters: [{
            name: "Nachricht",
            description: "Antworte mit diesem Command auf eine Nachricht von einem User",
            required: true,
            example: " "
        }]
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
        question: "Wie erstelle ich einen Discord Account?",
        answer: " Folge dazu einfach diesem Link: https://support.discord.com/hc/de/articles/360033931551-Erste-Schritte#h_01H4RR2GE2FAK7DZ5W3765NGVT",
    },
    {
        question: "Wer sind die Developer des Projekts?",
        answer: "- ",
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