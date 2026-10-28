import { collection, config, fields, singleton } from "@keystatic/core";
import { projectTagOptions, skillIconOptions } from "./src/content/skillIconOptions";

// ----------------------------------------------------------------------
// Admin panel (/keystatic) content model. Everything is saved as JSON under
// content/ and uploads under public/, so the site stays fully static.
//
// Storage: local files in development; in production every save is a commit
// to GitHub, which triggers a Vercel redeploy. Set
// NEXT_PUBLIC_KEYSTATIC_STORAGE=github locally to test the GitHub flow.
// ----------------------------------------------------------------------

const useGithub =
    process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE === "github"

// English + Persian side by side; Persian may be left empty (falls back to English)
const localized = (label: string, opts: { multiline?: boolean, required?: boolean, description?: string } = {}) =>
    fields.object({
        en: fields.text({
            label: "English",
            multiline: opts.multiline,
            validation: opts.required === false ? undefined : { length: { min: 1 } },
        }),
        fa: fields.text({ label: "فارسی", multiline: opts.multiline }),
    }, { label, description: opts.description, layout: [6, 6] })

const timelineItem = (kind: "job" | "degree") =>
    fields.object({
        title: localized(kind === "job" ? "Job title" : "Field of study"),
        place: localized(kind === "job" ? "Company, city" : "University"),
        start: fields.date({ label: "Start", validation: { isRequired: true } }),
        end: fields.date({ label: "End", description: "Leave empty if you are still here (shows “Present”)." }),
        precision: fields.select({
            label: "Show dates as",
            options: [
                { label: "Month + year (Jun 2024)", value: "month" },
                { label: "Year only (2024)", value: "year" },
            ],
            defaultValue: kind === "job" ? "month" : "year",
        }),
        description: localized("Description (optional)", { multiline: true, required: false }),
    })

export default config({
    storage: useGithub
        ? { kind: "github", repo: { owner: "KimiyaKhoshnood", name: "purpleportfolio" } }
        : { kind: "local" },
    ui: {
        brand: { name: "Kimia's Portfolio" },
        navigation: {
            "Resume": ["profile", "resume", "skills"],
            "Home page": ["home"],
            "Work": ["projects"],
        },
    },
    singletons: {
        profile: singleton({
            label: "Profile & contact",
            path: "content/profile",
            format: { data: "json" },
            schema: {
                name: localized("Full name"),
                role: localized("Job title (hero)", { description: "The big title on the home page, e.g. Software Engineer." }),
                badge: localized("Hero badge", { description: "Small pill above the title, e.g. “I am Kimia”." }),
                tagline: localized("Tagline", { multiline: true }),
                resume: fields.file({
                    label: "Resume PDF (English)",
                    directory: "public/resume",
                    publicPath: "/resume/",
                }),
                resumeFa: fields.file({
                    label: "Resume PDF (Persian, optional)",
                    description: "If empty, the Persian site offers the English resume.",
                    directory: "public/resume",
                    publicPath: "/resume/",
                }),
                email: fields.text({ label: "Email", validation: { length: { min: 3 } } }),
                phone: fields.text({ label: "Phone", description: "Shown as written, e.g. +98 910 879 3797" }),
                address: localized("Address", { required: false }),
                github: fields.url({ label: "GitHub URL" }),
                linkedin: fields.url({ label: "LinkedIn URL" }),
                telegram: fields.url({ label: "Telegram URL" }),
            },
        }),
        resume: singleton({
            label: "Experience & education",
            path: "content/resume",
            format: { data: "json" },
            schema: {
                experience: fields.array(timelineItem("job"), {
                    label: "Experience",
                    description: "Sorted by start date automatically (newest first).",
                    itemLabel: (p) => `${p.fields.title.fields.en.value || "New job"} — ${p.fields.place.fields.en.value}`,
                }),
                education: fields.array(timelineItem("degree"), {
                    label: "Education",
                    itemLabel: (p) => `${p.fields.title.fields.en.value || "New degree"} — ${p.fields.place.fields.en.value}`,
                }),
            },
        }),
        skills: singleton({
            label: "Skills",
            path: "content/skills",
            format: { data: "json" },
            schema: {
                intro: localized("Intro text", { multiline: true }),
                items: fields.array(
                    fields.object({
                        name: fields.text({ label: "Name", validation: { length: { min: 1 } } }),
                        icon: fields.select({ label: "Icon", options: skillIconOptions, defaultValue: "none" }),
                        image: fields.image({
                            label: "Custom logo (optional)",
                            description: "Used when the icon is “No icon / custom image”.",
                            directory: "public/images/skills",
                            publicPath: "/images/skills/",
                        }),
                    }),
                    { label: "Skills (in display order)", itemLabel: (p) => p.fields.name.value || "New skill" },
                ),
            },
        }),
        home: singleton({
            label: "Home page sections",
            path: "content/home",
            format: { data: "json" },
            schema: {
                stats: fields.array(
                    fields.object({
                        value: fields.text({ label: "Number", description: "e.g. 2+ (digits become Persian automatically on /fa)" }),
                        label: localized("Label"),
                    }),
                    { label: "Stats", itemLabel: (p) => `${p.fields.value.value} ${p.fields.label.fields.en.value}` },
                ),
                servicesIntro: localized("Services intro", { multiline: true }),
                services: fields.array(
                    fields.object({
                        title: localized("Title"),
                        description: localized("Description", { multiline: true }),
                    }),
                    { label: "Services", itemLabel: (p) => p.fields.title.fields.en.value || "New service" },
                ),
                contactText: localized("Contact section text", { multiline: true }),
            },
        }),
    },
    collections: {
        projects: collection({
            label: "Projects",
            path: "content/projects/*",
            format: { data: "json" },
            slugField: "title",
            columns: ["title", "date"],
            schema: {
                title: fields.slug({ name: { label: "Title (English)" }, slug: { label: "URL slug" } }),
                titleFa: fields.text({ label: "Title (Persian, optional)" }),
                published: fields.checkbox({
                    label: "Show on the site",
                    defaultValue: true,
                }),
                date: fields.date({ label: "Date", validation: { isRequired: true } }),
                cover: fields.image({
                    label: "Cover image",
                    directory: "public/images/projects",
                    publicPath: "/images/projects/",
                    validation: { isRequired: true },
                }),
                summary: localized("Short summary (card)", { multiline: true }),
                description: localized("Full description", {
                    multiline: true,
                    description: "Leave an empty line between paragraphs.",
                }),
                client: localized("Client", { required: false }),
                tags: fields.multiselect({ label: "Tags", options: projectTagOptions }),
                stack: fields.array(fields.text({ label: "Technology" }), {
                    label: "Tech stack",
                    itemLabel: (p) => p.value,
                }),
                liveUrl: fields.url({ label: "Live URL" }),
                repoUrl: fields.url({ label: "Source code URL" }),
            },
        }),
    },
});
