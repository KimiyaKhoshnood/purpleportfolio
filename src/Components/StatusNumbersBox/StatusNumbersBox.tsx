import StatusNumbers, { StatusNumbersProps } from "./StatusNumbers";
const StatusNumbersBox = () => {
    let StatusNumbersProps: StatusNumbersProps[] = [
        {num:"14", lineFirst:"Months of", lineSecond:"Experience"},
        {num:"50+", lineFirst:"Project", lineSecond:"Completed"},
        {num:"1.5K", lineFirst:"Happy", lineSecond:"Clients"},
        {num:"14", lineFirst:"Years of", lineSecond:"Experience"},
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