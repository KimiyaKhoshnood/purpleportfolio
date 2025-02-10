import SkillsEach, { SkillsEachProps } from "./SkillsEach"
import ReduxLogo from "../../../public/ReduxLogo.svg"
import ReactLogo from "../../../public/ReactLogo.svg"
import JsLogo from "../../../public/JsLogo.svg"
import NextLogo from "../../../public/NextLogo.svg"
import TsLogo from "../../../public/TsLogo.svg"
import GitLogo from "../../../public/GitLogo.svg"

const Skills = () => {
    let SkillsEachProps: SkillsEachProps[] = [
        {img: NextLogo, skillPercentage: "88%", skillName: "Next.js"},
        {img: ReduxLogo, skillPercentage: "92%", skillName: "Redux"},
        {img: TsLogo, skillPercentage: "92%", skillName: "TypeScript"},
        {img: JsLogo, skillPercentage: "92%", skillName: "JavaScript"},
        {img: ReactLogo, skillPercentage: "92%", skillName: "React"},
        {img: GitLogo, skillPercentage: "92%", skillName: "Git"},
    ]
    return(
        <>
        <div id="skillsID" className="flex justify-center items-center flex-col gap-3 md:p-20 px-5 py-16">
            <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl p-1" id="textGradiant">My Skills</h2>
            <p className="max-w-[660px] text-center pb-10 text-[17px]">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <div className="flex gap-5 flex-wrap justify-center">
                {
                    SkillsEachProps.map((elem, index)=>{
                        return(<SkillsEach img={elem.img} skillPercentage={elem.skillPercentage} skillName={elem.skillName} key={index}/>)
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Skills