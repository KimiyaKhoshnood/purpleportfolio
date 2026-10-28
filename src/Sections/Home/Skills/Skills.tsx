import SkillsEach, { SkillsEachProps } from "./SkillsEach"

// ----------------------------------------------------------------------

type SkillsProps = { heading: string, intro: string, items: SkillsEachProps[] }

const Skills = ({ heading, intro, items }: SkillsProps) => {
    return(
        <>
        <div id="skillsID" className="flex justify-center items-center flex-col gap-4 md:p-20 px-5 py-16">
            <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl tracking-tight p-2" id="textGradiant">{heading}</h2>
            <p className="max-w-[660px] text-center pb-8 text-[17px] leading-relaxed text-[#140C1C]/70">{intro}</p>
            <div className="flex sm:gap-5 gap-3 flex-wrap justify-center max-w-[1080px]">
                {
                    items.map((elem, index)=>{
                        return(<SkillsEach img={elem.img} Icon={elem.Icon} iconColor={elem.iconColor} skillName={elem.skillName} key={index}/>)
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Skills
