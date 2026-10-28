// ----------------------------------------------------------------------

export type ExperienceAndEducationEachProp = {
    date : string,
    title : string,
    span : string,
    current?: boolean,
    description?: string,
}

// ----------------------------------------------------------------------

const ExperienceAndEducationEach = ({date, title, span, current: isCurrent, description}:ExperienceAndEducationEachProp) => {

    return(
        <>
        <li className="relative ps-8">
            {/* timeline dot */}
            <span className="absolute -start-[9px] top-7 flex h-4 w-4">
                {isCurrent && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40" />}
                <span className={`relative inline-flex h-4 w-4 rounded-full border-4 border-brand ${isCurrent ? "bg-brand" : "bg-white"}`} />
            </span>
            <div className="bg-white rounded-2xl flex flex-col gap-2 px-6 py-5 max-w-[540px] w-full ring-1 ring-brand-dark/5 shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/10 transition-all duration-300">
                <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">{date}</span>
                <h3 className="font-bold lg:text-xl text-lg text-brand-dark">{title}</h3>
                <span className="text-[15px] text-[#140C1C]/60">{span}</span>
                {description && <p className="pt-1 text-[15px] leading-relaxed text-[#140C1C]/70 whitespace-pre-line">{description}</p>}
            </div>
        </li>
        </>
    )
}

export default ExperienceAndEducationEach
