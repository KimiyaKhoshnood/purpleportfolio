import Image from "next/image"
import Link from "next/link"
import { FaArrowRightLong, FaGithub } from "react-icons/fa6"
import { FiExternalLink } from "react-icons/fi"
import { Dictionary } from "@/i18n/dictionaries"

// ----------------------------------------------------------------------

type NavLink = { href: string, title: string }

export type ProjectDetailsProps = {
    dict: Dictionary["project"],
    backHref: string,
    title: string,
    summary: string,
    paragraphs: string[],
    cover: string,
    date: string,
    client: string,
    tags: string[],
    stack: readonly string[],
    liveUrl: string | null,
    repoUrl: string | null,
    prev: NavLink | null,
    next: NavLink | null,
}

const arrowClass = "transition-transform duration-200 rtl:-scale-x-100"

// ----------------------------------------------------------------------

const ProjectDetails = ({ dict, backHref, title, summary, paragraphs, cover, date, client, tags, stack, liveUrl, repoUrl, prev, next }: ProjectDetailsProps) => {
    const meta = [
        { label: dict.date, value: date },
        ...(client ? [{ label: dict.client, value: client }] : []),
    ]

    return (
        <article className="flex flex-col">
            <header className="bg-gradient-to-b from-brand-soft to-white xl:px-20 px-5 pt-10 pb-12 flex flex-col gap-6">
                <Link href={backHref} className="group flex items-center gap-2 w-fit text-sm font-semibold text-brand">
                    <FaArrowRightLong className={`${arrowClass} rotate-180 group-hover:-translate-x-1 rtl:group-hover:translate-x-1`} />
                    {dict.back}
                </Link>
                <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                        <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/15">{tag}</span>
                    ))}
                </div>
                <h1 dir="auto" className="font-bold lg:text-6xl text-4xl tracking-tight leading-tight" id="textGradiant">{title}</h1>
                <p dir="auto" className="max-w-[720px] text-lg leading-relaxed text-[#140C1C]/70">{summary}</p>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                    {meta.map(({ label, value }) => (
                        <div key={label}>
                            <span className="block text-sm text-[#140C1C]/50">{label}</span>
                            <span className="font-semibold text-brand-dark">{value}</span>
                        </div>
                    ))}
                    <div className="flex flex-wrap gap-3">
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2.5 px-6 rounded-full font-medium text-white bg-gradient-to-r rtl:bg-gradient-to-l from-brand to-brand-dark shadow-lg shadow-brand/30 hover:-translate-y-0.5 transition-all duration-200">
                                {dict.viewLive} <FiExternalLink />
                            </a>
                        )}
                        {repoUrl && (
                            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2.5 px-6 rounded-full font-medium text-brand ring-1 ring-brand/40 hover:bg-brand hover:text-white transition-colors duration-200">
                                <FaGithub /> {dict.viewCode}
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="xl:px-20 px-5">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-brand-soft ring-1 ring-brand-dark/5 shadow-2xl shadow-brand-dark/10">
                    <Image src={cover} alt={title} fill priority sizes="(min-width: 1280px) 1120px, 100vw" className="object-cover object-top" />
                </div>
            </div>

            <div className="xl:px-20 px-5 py-14 grid lg:grid-cols-[1fr_280px] gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl text-brand-dark">{dict.about}</h2>
                    {paragraphs.map((p, i) => (
                        <p key={i} dir="auto" className="text-[17px] leading-loose text-[#140C1C]/75">{p}</p>
                    ))}
                </div>
                {stack.length > 0 && (
                    <aside className="h-fit rounded-3xl bg-brand-soft p-6">
                        <h2 className="font-bold text-lg text-brand-dark pb-4">{dict.stack}</h2>
                        <ul className="flex flex-wrap gap-2">
                            {stack.map(tech => (
                                <li key={tech} dir="ltr" className="rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-dark ring-1 ring-brand-dark/5">{tech}</li>
                            ))}
                        </ul>
                    </aside>
                )}
            </div>

            {(prev || next) && (
                <nav className="xl:mx-20 mx-5 mb-16 grid grid-cols-2 gap-4">
                    {[{ link: prev, label: dict.prev, end: false }, { link: next, label: dict.next, end: true }].map(({ link, label, end }) => link ? (
                        <Link key={label} href={link.href} className={`group rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-6 text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/30 transition-all duration-300 ${end ? "col-start-2 text-end" : ""}`}>
                            <span className={`flex items-center gap-2 text-sm text-white/70 ${end ? "justify-end" : ""}`}>
                                {!end && <FaArrowRightLong className={`${arrowClass} rotate-180`} />}
                                {label}
                                {end && <FaArrowRightLong className={arrowClass} />}
                            </span>
                            <span className="block pt-1 font-bold sm:text-2xl text-lg">{link.title}</span>
                        </Link>
                    ) : null)}
                </nav>
            )}
        </article>
    )
}

export default ProjectDetails
