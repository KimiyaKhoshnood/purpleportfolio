import "server-only"
import { cache } from "react"
import { createReader } from "@keystatic/core/reader"
import keystaticConfig from "../../keystatic.config"
import { Locale } from "@/i18n/config"

// ----------------------------------------------------------------------
// Reads the JSON the admin panel (/keystatic) writes under content/.
// Everything runs at build time, so pages stay static.
// ----------------------------------------------------------------------

export const reader = createReader(process.cwd(), keystaticConfig)

export type Localized = { en: string, fa: string }

// Persian falls back to English when a field was left empty in the admin
export const pick = (text: Localized | null | undefined, lang: Locale) =>
    (lang === "fa" && text?.fa.trim()) ? text.fa : (text?.en ?? "")

const persianDigits = "۰۱۲۳۴۵۶۷۸۹"
export const localizeDigits = (text: string, lang: Locale) =>
    lang === "fa" ? text.replace(/\d/g, d => persianDigits[Number(d)]) : text

// "2024-06-01" -> "Jun 2024" / "ژوئن ۲۰۲۴" (Gregorian in both languages)
export const formatDate = (iso: string, lang: Locale, precision: "month" | "year" = "month") => {
    const [y, m, d] = iso.split("-").map(Number)
    const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1))
    const locale = lang === "fa" ? "fa-IR-u-ca-gregory" : "en-US"
    return new Intl.DateTimeFormat(locale, precision === "year"
        ? { year: "numeric", timeZone: "UTC" }
        : { month: lang === "fa" ? "long" : "short", year: "numeric", timeZone: "UTC" },
    ).format(date)
}

// paragraphs are separated by an empty line in the admin text areas
export const paragraphs = (text: string) =>
    text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)

// ----------------------------------------------------------------------

export const getSiteContent = cache(async () => {
    const [profile, resume, skills, home] = await Promise.all([
        reader.singletons.profile.readOrThrow(),
        reader.singletons.resume.readOrThrow(),
        reader.singletons.skills.readOrThrow(),
        reader.singletons.home.readOrThrow(),
    ])
    return { profile, resume, skills, home }
})

export const getProjects = cache(async () => {
    const all = await reader.collections.projects.all()
    return all
        .filter(({ entry }) => entry.published)
        .sort((a, b) => b.entry.date.localeCompare(a.entry.date))
})

export type ProjectEntry = Awaited<ReturnType<typeof getProjects>>[number]
