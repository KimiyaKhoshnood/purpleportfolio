export type StatusNumbersProps = {
    num : string,
    lineFirst: string,
    lineSecond: string,
}
const StatusNumbers = ({num, lineFirst, lineSecond}:StatusNumbersProps) => {
    return(
        <>
        <div className="text-[#8750F7] flex lg:flex-row flex-col items-center">
            <h2 className="font-bold sm:text-7xl text-5xl grid-cols-3">{num}</h2>
            <div className="flex flex-col text-lg pl-4">
                <span className="lg:text-start text-center">{lineFirst}</span>
                <span className="lg:text-start text-center">{lineSecond}</span>
            </div>
        </div>
        </>
    )
}

export default StatusNumbers