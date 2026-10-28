// ----------------------------------------------------------------------

export type StatusNumbersProps = {
    num : string,
    label: string,
}

// ----------------------------------------------------------------------

const StatusNumbers = ({num, label}:StatusNumbersProps) => {
    return(
        <>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-x-4 gap-y-1 rounded-3xl bg-white ring-1 ring-brand-dark/5 shadow-sm px-4 py-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300">
            <h2 className="font-bold sm:text-6xl text-5xl tracking-tight" id="textGradiant">{num}</h2>
            {/* narrow box so "Years of Experience" breaks onto two lines */}
            <span className="max-w-[7.5rem] text-[15px] leading-snug text-brand-dark/70 font-medium lg:text-start text-center">{label}</span>
        </div>
        </>
    )
}

export default StatusNumbers
