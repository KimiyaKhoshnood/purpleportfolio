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
        <div className="group sm:w-[136px] w-[100px] sm:h-[136px] h-[108px] rounded-2xl flex flex-col justify-center items-center gap-3 bg-brand-soft ring-1 ring-transparent hover:bg-white hover:ring-brand/25 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/15 transition-all duration-300 ease-out">
            <div className="sm:w-[52px] sm:h-[52px] w-[40px] h-[40px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {img && <Image src={img} width={52} height={52} className="w-full h-full object-contain" alt=""/>}
                {Icon && <Icon color={iconColor} size={"100%"}/>}
            </div>
            <h4 className="text-brand-dark font-medium sm:text-[15px] text-[13px]">{skillName}</h4>
        </div>
        </>
    )
}

export default SkillsEach
