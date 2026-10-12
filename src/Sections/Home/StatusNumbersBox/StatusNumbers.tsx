// ----------------------------------------------------------------------

export type StatusNumbersProps = {
    num : string,
    lineFirst: string,
    lineSecond: string,
}

// ----------------------------------------------------------------------

const StatusNumbers = ({num, lineFirst, lineSecond}:StatusNumbersProps) => {
    return(
        <>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-x-4 gap-y-1 rounded-3xl bg-white ring-1 ring-brand-dark/5 shadow-sm px-4 py-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300">
            <h2 className="font-bold sm:text-6xl text-5xl tracking-tight" id="textGradiant">{num}</h2>
            <div className="flex flex-col text-[15px] leading-snug text-brand-dark/70 font-medium">
                <span className="lg:text-start text-center">{lineFirst}</span>
                <span className="lg:text-start text-center">{lineSecond}</span>
            </div>
        </div>
        </>
    )
}

export default StatusNumbers
