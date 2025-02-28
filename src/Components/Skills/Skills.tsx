import SkillsEach, { SkillsEachProps } from "./SkillsEach"
import ReduxLogo from "../../../public/ReduxLogo.svg"
import ReactLogo from "../../../public/ReactLogo.svg"
import JsLogo from "../../../public/JsLogo.svg"
import NextLogo from "../../../public/NextLogo.svg"
import TsLogo from "../../../public/TsLogo.svg"
import GitLogo from "../../../public/GitLogo.svg"
import BootstrapLogo from "../../../public/BootstrapLogo.svg"
import TailwindLogo from "../../../public/TailwindLogo.svg"

const Skills = () => {
    const SkillsEachProps: SkillsEachProps[] = [
        {img: NextLogo, skillName: "Next.js"},
        {img: ReduxLogo, skillName: "Redux"},
        {img: TsLogo, skillName: "TypeScript"},
        {img: JsLogo, skillName: "JavaScript"},
        {img: ReactLogo, skillName: "React"},
        {img: GitLogo, skillName: "Git"},
        {img: BootstrapLogo, skillName: "Bootstrap"},
        {img: TailwindLogo, skillName: "Tailwind"},
    ]
    return(
        <>
        <div id="skillsID" className="flex justify-center items-center flex-col gap-3 md:p-20 px-5 py-16">
            <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl p-1" id="textGradiant">My Skills</h2>
            <p className="max-w-[660px] text-center pb-10 text-[17px]">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <div className="flex gap-4 flex-wrap justify-center">
                {
                    SkillsEachProps.map((elem, index)=>{
                        return(<SkillsEach img={elem.img} skillName={elem.skillName} key={index}/>)
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Skills