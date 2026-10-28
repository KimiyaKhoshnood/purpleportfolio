import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./i18n/config";

// ----------------------------------------------------------------------

// Pages live under app/[lang]. English is served from the root without a
// prefix, so "/" is rewritten to "/en" and a typed "/en/..." redirects back.
export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl
    const prefix = locales.find(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))

    if (prefix === defaultLocale) {
        const url = req.nextUrl.clone()
        url.pathname = pathname.slice(defaultLocale.length + 1) || "/"
        return NextResponse.redirect(url)
    }
    if (prefix) return NextResponse.next()

    const url = req.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.rewrite(url)
}

export const config = {
    // skip Next internals, the admin panel and static files (anything with an extension)
    matcher: ["/((?!_next|api|keystatic|.*\\..*).*)"],
}
