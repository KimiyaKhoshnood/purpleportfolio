"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"
import { ProjectTag } from "@/content/skillIconOptions"

// ----------------------------------------------------------------------

export type WorkCard = {
    href: string,
    title: string,
    summary: string,
    cover: string,
    tags: readonly ProjectTag[],
}

type WorksGridProps = { items: WorkCard[], allLabel: string, tagLabels: Record<ProjectTag, string> }

// ----------------------------------------------------------------------

const WorksGrid = ({ items, allLabel, tagLabels }: WorksGridProps) => {
    const [filter, setFilter] = useState<ProjectTag | "all">("all")

    // only offer filters that actually have projects
    const tags = Object.keys(tagLabels).filter(tag => items.some(i => i.tags.includes(tag as ProjectTag))) as ProjectTag[]
    const visible = filter === "all" ? items : items.filter(i => i.tags.includes(filter))

    return (
        <>
            {tags.length > 1 && (
                <div className="flex flex-wrap justify-center gap-1 bg-brand-soft w-fit p-1.5 rounded-full text-brand font-medium">
                    {(["all", ...tags] as const).map(tag => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            aria-pressed={filter === tag}
                            className={`py-2 px-5 rounded-full transition-colors duration-200 ${filter === tag
                                ? "text-white bg-gradient-to-r rtl:bg-gradient-to-l from-brand to-brand-dark shadow-md shadow-brand/25"
                                : "hover:bg-white"}`}
                        >
                            {tag === "all" ? allLabel : tagLabels[tag]}
                        </button>
                    ))}
                </div>
            )}
            {/* flex instead of grid so a lone card stays centred */}
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1080px]">
                {visible.map(item => (
                    <Link key={item.href} href={item.href} className="group md:w-[calc(50%-1rem)] w-full flex flex-col gap-4 rounded-3xl bg-white p-3 ring-1 ring-brand-dark/5 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-brand-soft">
                            <Image
                                src={item.cover}
                                alt=""
                                fill
                                sizes="(min-width: 768px) 540px, 100vw"
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-2 px-3 pb-3">
                            <div className="flex flex-wrap gap-1.5">
                                {item.tags.map(tag => (
                                    <span key={tag} className="rounded-full bg-brand-soft px-3 py-0.5 text-xs font-semibold text-brand">{tagLabels[tag]}</span>
                                ))}
                            </div>
                            <h3 className="flex items-center justify-between gap-3 font-bold text-xl text-brand-dark">
                                {item.title}
                                <FaArrowRightLong className="shrink-0 text-brand opacity-0 -translate-x-2 rtl:translate-x-2 rtl:-scale-x-100 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            </h3>
                            <p dir="auto" className="line-clamp-2 text-[15px] leading-relaxed text-[#140C1C]/70">{item.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default WorksGrid
