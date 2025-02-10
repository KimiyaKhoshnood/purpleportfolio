import Image from "next/image"
export type SkillsEachProps = {
    img: string,
    skillPercentage: string,
    skillName: string,
}
const SkillsEach = ({img,skillPercentage,skillName}:SkillsEachProps) => {
    return(
        <>
        <div>
            <div className="group md:w-[180px] md:h-[180px] w-[150px] h-[150px] rounded-3xl flex flex-col justify-center items-center bg-[#F6F3FC] hover:bg-[#2A1455] transition-all duration-300 ease-in">
                <div className="w-[60px] h-[60px] m-3">
                    {/* <img className="w-fit h-fit filter grayscale-[90%] group-hover:grayscale-0 scale-100 group-hover:scale-110" src={img} alt="" /> */}
                    <Image src={img} width={100} className="p-1" alt=""/>
                </div>
                <span className="font-bold text-[22px] text-[#8650F6] grayscale-[90%] group-hover:grayscale-0">{skillPercentage}</span>
            </div>
            <h4 className="flex justify-center text-[#8650F6] p-4">{skillName}</h4>
        </div>
        </>
    )
}

export default SkillsEach