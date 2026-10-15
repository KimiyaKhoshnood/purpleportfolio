import StatusNumbers, { StatusNumbersProps } from "./StatusNumbers";

// ----------------------------------------------------------------------

const StatusNumbersBox = ({ stats }: { stats: StatusNumbersProps[] }) => {
    return(
        <>
        <div className="xl:px-20 px-5 py-16 grid lg:grid-cols-4 grid-cols-2 sm:gap-6 gap-4">
            {
                stats.map((elem, index) =>{
                    return(
                        <StatusNumbers num={elem.num} lineFirst={elem.lineFirst} lineSecond={elem.lineSecond} key={index}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default StatusNumbersBox