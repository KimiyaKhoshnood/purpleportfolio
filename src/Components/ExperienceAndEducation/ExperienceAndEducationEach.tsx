export type ExperienceAndEducationEachProp = {
    date : string,
    title : string,
    span : string
}

const ExperienceAndEducationEach = ({date, title, span}:ExperienceAndEducationEachProp) => {
    return(
        <>
        <div className="bg-white rounded-2xl flex flex-col gap-1 px-6 py-4 max-w-[540px] w-full">
            <h4 className="text-[#8750F7] font-bold lg:text-[21px] text-[17px]">{date}</h4>
            <h3 className="font-bold lg:text-2xl text-xl">{title}</h3>
            <span>{span}</span>
        </div>
        </>
    )
}

export default ExperienceAndEducationEach