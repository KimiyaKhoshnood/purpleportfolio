"use client"
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoK from "../../../../public/LogoK.png"
import { Locale, localePath } from "@/i18n/config";
import { Dictionary } from "@/i18n/dictionaries";

// ----------------------------------------------------------------------

type HeaderProps = { lang: Locale, dict: Dictionary["nav"], name: string, hasWorks: boolean }

const Header = ({ lang, dict, name, hasWorks }: HeaderProps) => {
    const [HamMenu, setHamMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const navLinks = [
        { href: localePath(lang, "/#servicesID"), label: dict.services },
        ...(hasWorks ? [{ href: localePath(lang, "/#worksID"), label: dict.works }] : []),
        { href: localePath(lang, "/#skillsID"), label: dict.skills },
    ]
    const contactHref = localePath(lang, "/#contactID")

    // same page in the other language; strip the locale prefix whether or not
    // the path still carries the rewritten "/en"
    const otherLang: Locale = lang === "en" ? "fa" : "en"
    const switchHref = localePath(otherLang, pathname.replace(/^\/(en|fa)(?=\/|$)/, "") || "/")

    const langSwitch = (
        <a
            href={switchHref}
            hrefLang={otherLang}
            lang={otherLang}
            aria-label={dict.switchLabel}
            title={dict.switchLabel}
            className="flex items-center justify-center min-w-10 h-10 px-2 rounded-full text-sm font-semibold text-brand ring-1 ring-brand/30 hover:bg-brand hover:text-white hover:ring-brand transition-colors"
        >
            {dict.switchShort}
        </a>
    )

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled || HamMenu ? "bg-white/80 backdrop-blur-lg shadow-[0_1px_0_rgba(42,20,85,0.08)]" : "bg-transparent"}`}>
            <div className="flex justify-between h-20 w-full items-center md:px-20 px-5 text-brand-dark">
                <Link aria-label="Link to Home" href={localePath(lang, "/")} className="flex items-center gap-2" onClick={() => setHamMenu(false)}>
                    <Image src={LogoK} alt="" width={44} height={40} />
                    <span className="sm:block hidden font-semibold tracking-tight text-lg">{name}</span>
                </Link>
                <nav className="lg:flex hidden gap-8 items-center text-[16px] font-medium">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className="relative py-1 after:absolute after:start-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left rtl:after:origin-right after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                            {label}
                        </Link>
                    ))}
                    <Link href={contactHref} className="py-2.5 px-6 rounded-full text-white bg-gradient-to-r rtl:bg-gradient-to-l from-brand to-brand-dark shadow-md shadow-brand/25 hover:shadow-lg hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-200">
                        {dict.contact}
                    </Link>
                    {langSwitch}
                </nav>
                <div className="lg:hidden flex items-center gap-2">
                    {langSwitch}
                    <button
                        aria-label={HamMenu ? dict.closeMenu : dict.openMenu}
                        aria-expanded={HamMenu}
                        className="flex items-center justify-center w-10 h-10 rounded-full text-brand hover:bg-brand-soft transition-colors"
                        onClick={() => setHamMenu(!HamMenu)}
                    >
                        {HamMenu ? <IoClose size={26} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>
            <div className={`lg:hidden absolute w-full px-5 transition-all duration-200 ${HamMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <nav className="flex flex-col gap-1 text-[17px] font-medium text-brand-dark bg-white shadow-xl shadow-brand-dark/10 ring-1 ring-brand-dark/5 p-3 rounded-2xl">
                    {[...navLinks, { href: contactHref, label: dict.contact }].map(({ href, label }) => (
                        <Link key={href} href={href} className="hover:bg-brand-soft rounded-xl px-4 py-3 transition-colors" onClick={() => setHamMenu(false)}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header;
