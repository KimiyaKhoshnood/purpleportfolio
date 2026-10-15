export const locales = ["en", "fa"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const isLocale = (value: string): value is Locale =>
    (locales as readonly string[]).includes(value)

// English lives at the site root, every other locale under its own prefix:
// localePath("fa", "/#skillsID") -> "/fa#skillsID"
export const localePath = (lang: Locale, path: string) => {
    if (lang === defaultLocale) return path
    if (path === "/") return `/${lang}`
    return path.startsWith("/#") ? `/${lang}${path.slice(1)}` : `/${lang}${path}`
}
