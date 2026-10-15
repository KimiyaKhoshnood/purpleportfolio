import { Locale } from "./config"

// ----------------------------------------------------------------------

type TimelineItem = { date: string, title: string, span: string, current?: boolean }

const en = {
    dir: "ltr" as "ltr" | "rtl",
    meta: {
        title: "Kimia Khoshnood",
        description: "Software Engineer",
    },
    nav: {
        services: "Services",
        skills: "Skills",
        contact: "Contact",
        name: "Kimia Khoshnood",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        switchLabel: "فارسی",
        switchShort: "فا",
    },
    hero: {
        badge: "I am Kimia",
        title: ["Software", "Engineer"],
        tagline: "Building reliable systems, from the database to the browser.",
        downloadCV: "Download CV",
        outline: "HI",
    },
    stats: [
        { num: "2+", lineFirst: "Years of", lineSecond: "Experience" },
        { num: "30+", lineFirst: "Project", lineSecond: "Completed" },
        { num: "10+", lineFirst: "Technologies", lineSecond: "Learned" },
        { num: "2", lineFirst: "Team", lineSecond: "Collaborations" },
    ],
    timeline: {
        experienceHeading: "My Experience",
        educationHeading: "My Education",
        experience: [
            { date: "Jun 2024 - Aug 2024", title: "Manual QA Intern", span: "SD Studio, Tehran" },
            { date: "Mar 2025 - Dec 2025", title: "Front-end Developer", span: "Hazareh Sevom (HZ3), Tehran" },
            { date: "Dec 2025 - Present", title: "Software Engineer", span: "Orchid Pharmed, Tehran", current: true },
        ] as TimelineItem[],
        education: [
            { date: "2022 - 2025", title: "Statistics", span: "University of Tehran" },
            { date: "2025 - Present", title: "Software Engineering", span: "Islamic Azad University", current: true },
        ] as TimelineItem[],
    },
    services: {
        heading: "My Quality Services",
        intro: "I build reliable web applications by combining frontend development, backend engineering, and thoughtful technical decisions to turn ideas into functional products.",
        items: [
            { num: "01", h3: "Full-Stack Development", p: "I develop web applications using React, Next.js, and NestJS, building responsive user interfaces and backend services that work together seamlessly." },
            { num: "02", h3: "Backend Development & API Integration", p: "I build backend services and REST APIs, integrate external systems, and work with databases to support reliable data flow and application functionality." },
            { num: "03", h3: "Database Design & Integration", p: "I work with PostgreSQL and Prisma to structure application data, define relationships, and integrate databases with backend services to support maintainable applications." },
        ],
    },
    skills: {
        heading: "My Skills",
        intro: "Technologies I work with to build web applications, backend services, and scalable systems.",
    },
    contact: {
        heading: "Let’s work together!",
        text: "I design and code beautifully simple things and I love what I do. Just simple like that!",
        sayHello: "Say Hello",
        phone: "Phone",
        email: "Email",
        address: "Address",
        addressValue: "District 5, Tehran, Iran",
    },
    footer: {
        rights: "All rights reserved.",
        backToTop: "Back to top",
    },
    notFound: {
        title: "Page Not Found",
        text: "Sorry, the page you’re looking for does not exist or has been moved please go back to the Home page",
        back: "Go Back Home",
    },
}

export type Dictionary = typeof en

const fa: Dictionary = {
    dir: "rtl",
    meta: {
        title: "کیمیا خوشنود",
        description: "مهندس نرم‌افزار",
    },
    nav: {
        services: "خدمات",
        skills: "مهارت‌ها",
        contact: "تماس",
        name: "کیمیا خوشنود",
        openMenu: "باز کردن منو",
        closeMenu: "بستن منو",
        switchLabel: "English",
        switchShort: "EN",
    },
    hero: {
        badge: "من کیمیا هستم",
        title: ["مهندس", "نرم‌افزار"],
        tagline: "ساخت سیستم‌های قابل‌اعتماد، از پایگاه داده تا مرورگر.",
        downloadCV: "دانلود رزومه",
        outline: "سلام",
    },
    stats: [
        { num: "۲+", lineFirst: "سال", lineSecond: "سابقه کار" },
        { num: "۳۰+", lineFirst: "پروژه", lineSecond: "انجام‌شده" },
        { num: "۱۰+", lineFirst: "فناوری", lineSecond: "آموخته‌شده" },
        { num: "۲", lineFirst: "همکاری", lineSecond: "تیمی" },
    ],
    timeline: {
        experienceHeading: "سوابق کاری",
        educationHeading: "تحصیلات",
        experience: [
            { date: "ژوئن ۲۰۲۴ - اوت ۲۰۲۴", title: "کارآموز تست دستی (QA)", span: "اس‌دی استودیو، تهران" },
            { date: "مارس ۲۰۲۵ - دسامبر ۲۰۲۵", title: "توسعه‌دهنده فرانت‌اند", span: "هزاره سوم (HZ3)، تهران" },
            { date: "دسامبر ۲۰۲۵ - اکنون", title: "مهندس نرم‌افزار", span: "ارکید فارمد، تهران", current: true },
        ],
        education: [
            { date: "۲۰۲۲ - ۲۰۲۵", title: "آمار", span: "دانشگاه تهران" },
            { date: "۲۰۲۵ - اکنون", title: "مهندسی نرم‌افزار", span: "دانشگاه آزاد اسلامی", current: true },
        ],
    },
    services: {
        heading: "خدمات من",
        intro: "با ترکیب توسعه فرانت‌اند، مهندسی بک‌اند و تصمیم‌های فنی سنجیده، وب‌اپلیکیشن‌های قابل‌اعتماد می‌سازم و ایده‌ها را به محصولاتی کاربردی تبدیل می‌کنم.",
        items: [
            { num: "۰۱", h3: "توسعه فول‌استک", p: "با React، Next.js و NestJS وب‌اپلیکیشن توسعه می‌دهم؛ از رابط‌های کاربری واکنش‌گرا تا سرویس‌های بک‌اندی که به‌خوبی در کنار هم کار می‌کنند." },
            { num: "۰۲", h3: "توسعه بک‌اند و یکپارچه‌سازی API", p: "سرویس‌های بک‌اند و REST API می‌سازم، سیستم‌های خارجی را یکپارچه می‌کنم و با پایگاه‌های داده کار می‌کنم تا جریان داده و عملکرد برنامه قابل‌اعتماد باشد." },
            { num: "۰۳", h3: "طراحی و یکپارچه‌سازی پایگاه داده", p: "با PostgreSQL و Prisma داده‌های برنامه را ساختاردهی می‌کنم، روابط بین آن‌ها را تعریف می‌کنم و پایگاه داده را با سرویس‌های بک‌اند یکپارچه می‌کنم تا برنامه‌ها قابل نگهداری بمانند." },
        ],
    },
    skills: {
        heading: "مهارت‌های من",
        intro: "فناوری‌هایی که برای ساخت وب‌اپلیکیشن‌ها، سرویس‌های بک‌اند و سیستم‌های مقیاس‌پذیر با آن‌ها کار می‌کنم.",
    },
    contact: {
        heading: "بیایید با هم کار کنیم!",
        text: "چیزهای ساده و زیبا طراحی و پیاده‌سازی می‌کنم و عاشق کارم هستم. به همین سادگی!",
        sayHello: "ارسال ایمیل",
        phone: "تلفن",
        email: "ایمیل",
        address: "آدرس",
        addressValue: "منطقه ۵، تهران، ایران",
    },
    footer: {
        rights: "تمامی حقوق محفوظ است.",
        backToTop: "بازگشت به بالا",
    },
    notFound: {
        title: "صفحه پیدا نشد",
        text: "متأسفیم، صفحه‌ای که دنبالش هستید وجود ندارد یا منتقل شده است. لطفاً به صفحه اصلی برگردید.",
        back: "بازگشت به خانه",
    },
}

const dictionaries: Record<Locale, Dictionary> = { en, fa }

export const getDictionary = (lang: Locale) => dictionaries[lang]
