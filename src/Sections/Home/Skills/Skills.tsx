import SkillsEach, { SkillsEachProps } from "./SkillsEach"
import ReduxLogo from "../../../../public/ReduxLogo.svg"
import ReactLogo from "../../../../public/ReactLogo.svg"
import JsLogo from "../../../../public/JsLogo.svg"
import NextLogo from "../../../../public/NextLogo.svg"
import TsLogo from "../../../../public/TsLogo.svg"
import GitLogo from "../../../../public/GitLogo.svg"
import { SiDocker, SiNestjs, SiNodedotjs, SiPostgresql, SiPrisma, SiRedis } from "react-icons/si"
import { TbTopologyStar3 } from "react-icons/tb"

// ----------------------------------------------------------------------

const Skills = () => {
    const SkillsEachProps: SkillsEachProps[] = [
        {img: ReactLogo, skillName: "React"},
        {img: NextLogo, skillName: "Next.js"},
        {img: TsLogo, skillName: "TypeScript"},
        {img: JsLogo, skillName: "JavaScript"},
        {Icon: SiNestjs, iconColor: "#E0234E", skillName: "NestJS"},
        {Icon: SiNodedotjs, iconColor: "#5FA04E", skillName: "Node.js"},
        {Icon: SiPostgresql, iconColor: "#4169E1", skillName: "PostgreSQL"},
        {Icon: SiPrisma, iconColor: "#2D3748", skillName: "Prisma"},
        {Icon: SiRedis, iconColor: "#FF4438", skillName: "Redis"},
        {Icon: SiDocker, iconColor: "#2496ED", skillName: "Docker"},
        {Icon: TbTopologyStar3, iconColor: "#8650F6", skillName: "Microservices"},
        {img: ReduxLogo, skillName: "Redux"},
        {img: GitLogo, skillName: "Git"},
    ]
    
    return(
        <>
        <div id="skillsID" className="flex justify-center items-center flex-col gap-4 md:p-20 px-5 py-16">
            <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl tracking-tight p-2" id="textGradiant">My Skills</h2>
            <p className="max-w-[660px] text-center pb-8 text-[17px] leading-relaxed text-[#140C1C]/70">Technologies I work with to build web applications, backend services, and scalable systems.</p>
            <div className="flex sm:gap-5 gap-3 flex-wrap justify-center max-w-[1080px]">
                {
                    SkillsEachProps.map((elem, index)=>{
                        return(<SkillsEach img={elem.img} Icon={elem.Icon} iconColor={elem.iconColor} skillName={elem.skillName} key={index}/>)
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Skills