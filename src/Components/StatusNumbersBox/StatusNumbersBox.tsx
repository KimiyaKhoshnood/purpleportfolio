import StatusNumbers, { StatusNumbersProps } from "./StatusNumbers";
const StatusNumbersBox = () => {
    const StatusNumbersProps: StatusNumbersProps[] = [
        {num:"15", lineFirst:"Months of", lineSecond:"Experience"},
        {num:"30+", lineFirst:"Project", lineSecond:"Completed"},
        {num:"10+", lineFirst:"Technologies", lineSecond:"Learned"},
        {num:"2", lineFirst:"Team", lineSecond:"Collaborations"},
    ]
    return(
        <>
        <div className="xl:px-20 px-5 py-20 lg:columns-4 columns-2 gap-1">
            {
                StatusNumbersProps.map((elem, index) =>{
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