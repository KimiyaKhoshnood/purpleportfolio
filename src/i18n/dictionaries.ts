import { Locale } from "./config"
import { ProjectTag } from "@/content/skillIconOptions"

// ----------------------------------------------------------------------
// Fixed UI labels only. Resume content (profile, experience, skills,
// projects, ...) is edited in the admin panel at /keystatic.
// ----------------------------------------------------------------------

const en = {
    dir: "ltr" as "ltr" | "rtl",
    nav: {
        services: "Services",
        works: "Works",
        skills: "Skills",
        contact: "Contact",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        switchLabel: "فارسی",
        switchShort: "فا",
    },
    hero: {
        downloadCV: "Download CV",
        outline: "HI",
    },
    timeline: {
        experienceHeading: "My Experience",
        educationHeading: "My Education",
        present: "Present",
    },
    services: {
        heading: "My Quality Services",
    },
    skills: {
        heading: "My Skills",
    },
    works: {
        heading: "My Recent Works",
        all: "All",
        tags: {
            company: "Company",
            personal: "Personal",
            freelance: "Freelance",
            uiux: "UI/UX",
            clone: "Clone",
            opensource: "Open Source",
        } as Record<ProjectTag, string>,
    },
    project: {
        date: "Date",
        client: "Client",
        stack: "Tech stack",
        about: "About the project",
        viewLive: "View live",
        viewCode: "View code",
        prev: "Previous",
        next: "Next",
        back: "All works",
    },
    contact: {
        heading: "Let’s work together!",
        sayHello: "Say Hello",
        phone: "Phone",
        email: "Email",
        address: "Address",
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
    nav: {
        services: "خدمات",
        works: "نمونه‌کارها",
        skills: "مهارت‌ها",
        contact: "تماس",
        openMenu: "باز کردن منو",
        closeMenu: "بستن منو",
        switchLabel: "English",
        switchShort: "EN",
    },
    hero: {
        downloadCV: "دانلود رزومه",
        outline: "سلام",
    },
    timeline: {
        experienceHeading: "سوابق کاری",
        educationHeading: "تحصیلات",
        present: "اکنون",
    },
    services: {
        heading: "خدمات من",
    },
    skills: {
        heading: "مهارت‌های من",
    },
    works: {
        heading: "نمونه‌کارهای من",
        all: "همه",
        tags: {
            company: "شرکتی",
            personal: "شخصی",
            freelance: "فریلنس",
            uiux: "UI/UX",
            clone: "کلون",
            opensource: "متن‌باز",
        },
    },
    project: {
        date: "تاریخ",
        client: "کارفرما",
        stack: "فناوری‌ها",
        about: "درباره پروژه",
        viewLive: "مشاهده سایت",
        viewCode: "مشاهده کد",
        prev: "قبلی",
        next: "بعدی",
        back: "همه نمونه‌کارها",
    },
    contact: {
        heading: "بیایید با هم کار کنیم!",
        sayHello: "ارسال ایمیل",
        phone: "تلفن",
        email: "ایمیل",
        address: "آدرس",
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
