import Image from "next/image"
import { IconType } from "react-icons"

// ----------------------------------------------------------------------

export type SkillsEachProps = {
    img?: string,
    Icon?: IconType,
    iconColor?: string,
    skillName: string,
}

// ----------------------------------------------------------------------

const SkillsEach = ({img,Icon,iconColor,skillName}:SkillsEachProps) => {
    return(
        <>
        <div>
            <div className="group md:w-[180px] md:h-[180px] w-[150px] h-[150px] rounded-3xl flex flex-col justify-center items-center bg-[#F6F3FC] hover:bg-[#2A1455] transition-all duration-300 ease-in">
                <div className="w-[70px] h-[70px] m-3">
                    {img && <Image src={img} width={190} className="p-1" alt=""/>}
                    {Icon && <Icon className="p-1" color={iconColor} size={"100%"}/>}
                </div>
            </div>
            <h4 className="flex justify-center text-[#8650F6] p-4">{skillName}</h4>
        </div>
        </>
    )
}

export default SkillsEach